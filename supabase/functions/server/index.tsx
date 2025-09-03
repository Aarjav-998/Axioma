import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: ['http://localhost:3000', 'https://*.supabase.co', '*'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', logger(console.log));

// Initialize Supabase client with service role key
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Helper function to get user from access token
async function getAuthenticatedUser(request: Request) {
  const accessToken = request.headers.get('Authorization')?.split(' ')[1];
  if (!accessToken) {
    return null;
  }
  
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user) {
    return null;
  }
  
  return user;
}

// Auth Routes
app.post('/make-server-c3be4cb2/signup', async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    if (!email || !password || !name) {
      return c.json({ error: 'Email, password, and name are required' }, 400);
    }

    console.log('Creating user with email:', email);
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.error('User creation error:', error);
      return c.json({ error: error.message }, 400);
    }

    console.log('User created successfully:', data.user?.id);

    // Store user profile data
    await kv.set(`user:${data.user.id}`, {
      id: data.user.id,
      email: data.user.email,
      name,
      createdAt: new Date().toISOString(),
      applications: [],
      events: []
    });

    return c.json({
      message: 'User created successfully',
      user: {
        id: data.user.id,
        email: data.user.email,
        name
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    return c.json({ error: 'Internal server error during signup' }, 500);
  }
});

// User Profile Routes
app.get('/make-server-c3be4cb2/profile', async (c) => {
  try {
    const user = await getAuthenticatedUser(c.req.raw);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const profile = await kv.get(`user:${user.id}`);
    if (!profile) {
      return c.json({ error: 'Profile not found' }, 404);
    }

    return c.json({ profile });
  } catch (error) {
    console.error('Get profile error:', error);
    return c.json({ error: 'Failed to get profile' }, 500);
  }
});

app.put('/make-server-c3be4cb2/profile', async (c) => {
  try {
    const user = await getAuthenticatedUser(c.req.raw);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const updates = await c.req.json();
    const existingProfile = await kv.get(`user:${user.id}`);
    
    if (!existingProfile) {
      return c.json({ error: 'Profile not found' }, 404);
    }

    const updatedProfile = { ...existingProfile, ...updates };
    await kv.set(`user:${user.id}`, updatedProfile);

    return c.json({ profile: updatedProfile });
  } catch (error) {
    console.error('Update profile error:', error);
    return c.json({ error: 'Failed to update profile' }, 500);
  }
});

// Application Routes
app.post('/make-server-c3be4cb2/apply', async (c) => {
  try {
    const user = await getAuthenticatedUser(c.req.raw);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const applicationData = await c.req.json();
    const applicationId = `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const application = {
      id: applicationId,
      userId: user.id,
      ...applicationData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Store the application
    await kv.set(`application:${applicationId}`, application);

    // Update user profile with application reference
    const userProfile = await kv.get(`user:${user.id}`);
    if (userProfile) {
      userProfile.applications = userProfile.applications || [];
      userProfile.applications.push(applicationId);
      await kv.set(`user:${user.id}`, userProfile);
    }

    return c.json({
      message: 'Application submitted successfully',
      applicationId,
      application
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return c.json({ error: 'Failed to submit application' }, 500);
  }
});

app.get('/make-server-c3be4cb2/applications', async (c) => {
  try {
    const user = await getAuthenticatedUser(c.req.raw);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userProfile = await kv.get(`user:${user.id}`);
    if (!userProfile?.applications) {
      return c.json({ applications: [] });
    }

    const applications = await Promise.all(
      userProfile.applications.map(async (appId: string) => {
        return await kv.get(`application:${appId}`);
      })
    );

    return c.json({ applications: applications.filter(Boolean) });
  } catch (error) {
    console.error('Get applications error:', error);
    return c.json({ error: 'Failed to get applications' }, 500);
  }
});

// Event Routes
app.get('/make-server-c3be4cb2/events', async (c) => {
  try {
    // Get all events (public endpoint)
    const events = await kv.getByPrefix('event:');
    return c.json({ events });
  } catch (error) {
    console.error('Get events error:', error);
    return c.json({ error: 'Failed to get events' }, 500);
  }
});

app.post('/make-server-c3be4cb2/events/:eventId/register', async (c) => {
  try {
    const user = await getAuthenticatedUser(c.req.raw);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const eventId = c.req.param('eventId');
    const registrationId = `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const registration = {
      id: registrationId,
      userId: user.id,
      eventId,
      registeredAt: new Date().toISOString(),
      status: 'registered'
    };

    await kv.set(`registration:${registrationId}`, registration);

    // Update user profile
    const userProfile = await kv.get(`user:${user.id}`);
    if (userProfile) {
      userProfile.events = userProfile.events || [];
      userProfile.events.push(eventId);
      await kv.set(`user:${user.id}`, userProfile);
    }

    return c.json({
      message: 'Successfully registered for event',
      registrationId
    });
  } catch (error) {
    console.error('Event registration error:', error);
    return c.json({ error: 'Failed to register for event' }, 500);
  }
});

// Contact Form Route
app.post('/make-server-c3be4cb2/contact', async (c) => {
  try {
    const contactData = await c.req.json();
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const contact = {
      id: contactId,
      ...contactData,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    await kv.set(`contact:${contactId}`, contact);

    return c.json({
      message: 'Contact form submitted successfully',
      contactId
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return c.json({ error: 'Failed to submit contact form' }, 500);
  }
});

// Health check
app.get('/make-server-c3be4cb2/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Initialize sample data
app.post('/make-server-c3be4cb2/init-data', async (c) => {
  try {
    // Create sample events
    const sampleEvents = [
      {
        id: 'event_tech_summit_2025',
        title: 'Tech Innovation Summit 2025',
        description: 'Join industry leaders for a day of cutting-edge technology discussions',
        date: '2025-03-15',
        time: '09:00 AM - 05:00 PM',
        location: 'San Francisco, CA',
        capacity: 200,
        registered: 67,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
        category: 'Technology'
      },
      {
        id: 'event_policy_workshop_2025',
        title: 'Policy & Leadership Workshop',
        description: 'Learn about government policy-making and civic engagement',
        date: '2025-03-22',
        time: '10:00 AM - 04:00 PM',
        location: 'Washington, DC',
        capacity: 150,
        registered: 89,
        image: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=800&h=400&fit=crop',
        category: 'Policy'
      },
      {
        id: 'event_startup_bootcamp_2025',
        title: 'Entrepreneurship Bootcamp',
        description: 'Intensive weekend bootcamp for aspiring entrepreneurs',
        date: '2025-04-05',
        time: '09:00 AM - 06:00 PM',
        location: 'Austin, TX',
        capacity: 100,
        registered: 45,
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
        category: 'Entrepreneurship'
      }
    ];

    for (const event of sampleEvents) {
      await kv.set(`event:${event.id}`, event);
    }

    return c.json({ message: 'Sample data initialized successfully' });
  } catch (error) {
    console.error('Init data error:', error);
    return c.json({ error: 'Failed to initialize data' }, 500);
  }
});

Deno.serve(app.fetch);