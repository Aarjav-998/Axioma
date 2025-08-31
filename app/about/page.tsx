"use client";
import { Users, Target, Award, Globe, Heart, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';


interface AboutPageProps {
    onNavigate?: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
    const [currentTeamMember, setCurrentTeamMember] = useState(0);

    // Expanded team with 10 members and placeholder images
    const team = [
        {
            name: "Gauransh",
            role: "CEO / Intern",
            bio: "Former Silicon Valley executive with 15+ years in tech innovation and education policy.",
            image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=400&h=400&fit=crop"
        },
        {
            name: "Sarah Mitchell",
            role: "Head of Programs",
            bio: "Ex-Google product manager passionate about bridging the gap between students and industry.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=400&h=400&fit=crop"
        },
        {
            name: "Dr. Aisha Patel",
            role: "Director of Partnerships",
            bio: "Former policy advisor with expertise in government relations and educational partnerships.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
        },
        {
            name: "James Kim",
            role: "Head of Technology",
            bio: "MIT graduate and serial entrepreneur focused on educational technology innovation.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        },
        {
            name: "Maya Rodriguez",
            role: "Director of Student Success",
            bio: "Harvard alumna with expertise in mentorship programs and student development strategies.",
            image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop"
        },
        {
            name: "Alex Chen",
            role: "VP of Strategic Initiatives",
            bio: "Former McKinsey consultant specializing in organizational growth and strategic partnerships.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        },
        {
            name: "Dr. Priya Sharma",
            role: "Head of Research & Innovation",
            bio: "Stanford PhD with extensive experience in educational technology and learning analytics.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
        },
        {
            name: "Marcus Thompson",
            role: "Director of Operations",
            bio: "Operations expert with proven track record in scaling educational organizations globally.",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
        },
        {
            name: "Elena Kowalski",
            role: "Head of International Programs",
            bio: "Multilingual education specialist with experience launching programs across 20+ countries.",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
        },
        {
            name: "David Park",
            role: "Head of Marketing & Outreach",
            bio: "Digital marketing strategist who has helped scale education startups to millions of users.",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop"
        }
    ];

    const nextTeamMember = () => {
        setCurrentTeamMember((prev) => (prev + 1) % team.length);
    };

    const prevTeamMember = () => {
        setCurrentTeamMember((prev) => (prev - 1 + team.length) % team.length);
    };

    // Auto-scroll through team members
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTeamMember((prev) => (prev + 1) % team.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [team.length]);

    // Arrow key navigation
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                nextTeamMember();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                prevTeamMember();
            }
        };

        // Add event listener when component mounts
        window.addEventListener('keydown', handleKeyPress);

        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const stats = [
        { number: "500+", label: "Students Mentored" },
        { number: "50+", label: "Partner Companies" },
        { number: "15+", label: "Countries Reached" },
        { number: "$5M+", label: "Scholarships Secured" }
    ];

    return (
        <div className="relative z-10 pt-24">
           

            {/* Hero Section */}
            <section className="py-20 relative tech-pattern-background">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 heading-gradient">
                            About Axioma
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            We&#39;re on a mission to democratize access to elite opportunities for ambitious high school students worldwide.
                            Through innovative programs and strategic partnerships, we&#39;re building the next generation of leaders
                            in technology, policy, and entrepreneurship.
                        </p>

                        <div className="glass-white-clean rounded-2xl border border-white/10 p-8 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="glass-white-clean rounded-2xl border border-white/10 p-8 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                            <h2 className="text-3xl font-bold mb-6 heading-gradient">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                To connect exceptional high school students with transformative opportunities that were previously
                                accessible only to a privileged few. We believe that talent is distributed everywhere, but
                                opportunity is not.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Through our comprehensive programs, we&#39;re leveling the playing field and ensuring that ambition
                                and dedication—not circumstance—determine a student&#39;s access to life-changing experiences.
                            </p>
                        </div>

                        <div className="glass-white-clean rounded-2xl border border-white/10 p-8 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                            <h2 className="text-3xl font-bold mb-6 heading-gradient">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                A world where every ambitious student, regardless of background, has access to the mentorship,
                                opportunities, and resources needed to reach their full potential and make a meaningful impact.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We envision a global community of young leaders who are equipped with the skills, networks,
                                and confidence to tackle the world&#39;s most pressing challenges and drive positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section - Main Team Members */}
            <section className="py-16 bg-gradient-to-b from-[#fdf3ff] to-[#e8f4ff] text-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Meet the Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative w-64 h-[460px] overflow-hidden rounded-xl">
                                <video
                                    className="h-full w-full object-contain mix-blend-darken opacity-90"
                                    src="https://stream.mux.com/wVCD24C3qm01e01WEAdc41XRUq1EWWQJS5OzLHYfIl02DE/high.mp4"
                                    autoPlay
                                    playsInline
                                    loop
                                    muted
                                    preload="metadata"
                                    disablePictureInPicture
                                    disableRemotePlayback
                                    controlsList="nodownload"
                                />
                            </div>
                            <div className="bg-white/40 backdrop-blur-md rounded-3xl px-6 py-4 shadow-xl w-72">
                                <h3 className="text-lg font-semibold">
                                    Gauransh Khuranna
                                </h3>
                                <p className="text-sm text-gray-700">CEO</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative w-64 h-[460px] overflow-hidden rounded-xl">
                                <video
                                    className="h-full w-full object-contain mix-blend-darken opacity-90"
                                    src="https://stream.mux.com/W2NFGODMGwpxTXqOnN5AEIYNTNiOiqTqFlUMdFZLGjc/high.mp4"
                                    autoPlay
                                    playsInline
                                    loop
                                    muted
                                    preload="metadata"
                                    disablePictureInPicture
                                    disableRemotePlayback
                                    controlsList="nodownload"
                                />
                            </div>
                            <div className="bg-white/40 backdrop-blur-md rounded-3xl px-6 py-4 shadow-xl w-72">
                                <h3 className="text-lg font-semibold">
                                    Aishani Chauhan
                                </h3>
                                <p className="text-sm text-gray-700">Chief Operating Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended Team Section - Image Carousel with Arrow Key Support */}


            {/* Story Timeline Section with Fixed Line */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">Our Journey</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                From a simple idea to a global movement empowering high school students worldwide.
                            </p>
                        </div>

                        {/* Vertical Timeline */}
                        <div className="relative">
                            {/* Timeline Line - Stops at the "Beyond" box */}
                            <div className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform md:-translate-x-1/2 z-10" style={{height: 'calc(100% - 200px)'}}></div>

                            {/* Timeline Items */}
                            <div className="space-y-12">
                                {/* 2023 - Foundation */}
                                <div className="relative flex items-center">
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg z-20 hover:scale-125 transition-transform duration-300"></div>

                                    <div className="ml-20 md:ml-0 md:w-1/2 md:pr-8">
                                        <div className="glass-white-clean rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                            <div className="text-primary font-bold text-2xl mb-2">2023</div>
                                            <h3 className="text-xl font-bold mb-3 text-foreground">Foundation</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Dr. Sarah Chen founded Axioma with a vision to democratize elite opportunities for high school students worldwide. Starting with a small team but big dreams.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2023 Late - First Programs */}
                                <div className="relative flex items-center">
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full border-4 border-white shadow-lg z-20 hover:scale-125 transition-transform duration-300"></div>

                                    <div className="ml-20 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                                        <div className="glass-white-clean rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                            <div className="text-primary font-bold text-2xl mb-2">Q4 2023</div>
                                            <h3 className="text-xl font-bold mb-3 text-foreground">Launch</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Launched our first pilot programs with 50 students and partnerships with 5 leading tech companies. The response exceeded all expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2024 - Expansion */}
                                <div className="relative flex items-center">
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-orange-400 rounded-full border-4 border-white shadow-lg z-20 hover:scale-125 transition-transform duration-300"></div>

                                    <div className="ml-20 md:ml-0 md:w-1/2 md:pr-8">
                                        <div className="glass-white-clean rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                            <div className="text-primary font-bold text-2xl mb-2">2024</div>
                                            <h3 className="text-xl font-bold mb-3 text-foreground">Growth</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Expanded to 15 countries, partnered with government agencies, and supported 300+ students in securing life-changing placements across tech, policy, and entrepreneurship.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2025 - Global Impact */}
                                <div className="relative flex items-center">
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-cyan-400 rounded-full border-4 border-white shadow-lg z-20 hover:scale-125 transition-transform duration-300 animate-pulse-glow"></div>

                                    <div className="ml-20 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                                        <div className="glass-white-clean rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                            <div className="text-primary font-bold text-2xl mb-2">2025</div>
                                            <h3 className="text-xl font-bold mb-3 text-foreground">Innovation</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Introducing AI-powered matching, virtual reality programs, and targeting 1000+ student placements globally. The future of elite education access starts here.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Future - Vision */}
                                <div className="relative flex items-center">
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-20 hover:scale-125 transition-transform duration-300"></div>

                                    <div className="ml-20 md:ml-0 md:w-1/2 md:pr-8">
                                        <div className="glass-white-clean rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                            <div className="text-primary font-bold text-2xl mb-2">Beyond</div>
                                            <h3 className="text-xl font-bold mb-3 text-foreground">Global Impact</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Our vision: a world where every ambitious student, regardless of background, has access to transformative opportunities. Join us in making this a reality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-16">
                                <div className="glass-white-clean rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                    <h3 className="text-2xl font-bold mb-4 heading-gradient">Join Our Mission</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Be part of the next chapter in our story. Together, we&#39;re creating a world where talent, not circumstance, determines opportunity.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                                            className="bg-gradient-to-r from-primary to-orange-500 border border-primary/20 rounded-lg px-8 py-3 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,107,53,0.25)]"
                                        >
                                            <span className="font-bold text-white">Apply Now</span>
                                        </button>
                                        <button
                                            onClick={() => onNavigate?.('contact')}
                                            className="glass-white-clean border border-white/10 rounded-lg py-3 px-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_rgba(0,188,212,0.15)]"
                                        >
                                            <span className="font-bold text-primary">Contact Us</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;