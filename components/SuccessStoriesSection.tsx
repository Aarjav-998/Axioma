import { Quote, Star, Trophy, Target } from 'lucide-react';


interface SuccessStoriesSectionProps {
    onNavigate?: (page: string) => void;
}

const SuccessStoriesSection = ({ onNavigate }: SuccessStoriesSectionProps) => {
    const successStories = [
        {
            name: "Priya Sharma",
            location: "Mumbai, India",
            achievement: "Stanford University Acceptance + $50K Scholarship",
            story: "Through Axioma's Tech Innovation Track, I built an AI-powered healthcare app that's now used in 3 hospitals. The mentorship and real-world project experience made all the difference in my Stanford application.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b0c8?w=400&h=400&fit=crop",
            track: "Tech Innovation",
            year: "2024"
        },
        {
            name: "Arjun Patel",
            location: "Delhi, India",
            achievement: "Policy Research Published + Congressional Internship",
            story: "The Policy & Leadership track connected me with actual policymakers. My research on climate policy was published and led to an internship with a US Congressman. It's opened doors I never imagined.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            track: "Policy & Leadership",
            year: "2024"
        },
        {
            name: "Ananya Gupta",
            location: "Bangalore, India",
            achievement: "Founded Startup + Raised $100K Seed Funding",
            story: "Axioma's network introduced me to my co-founder and first investors. What started as a project in the Excellence Recognition program is now a funded startup helping rural students access quality education.",
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
            track: "Excellence Recognition",
            year: "2023"
        }
    ];

    return (
        <section className="py-20 relative tech-pattern-background">
            {/* Enhanced moving geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-0 w-4 h-4 bg-primary/10 transform rotate-45 animate-float-shapes-1"></div>
                <div className="absolute top-32 left-0 w-3 h-3 bg-primary/15 rounded-full animate-float-shapes-2"></div>
                <div className="absolute top-64 left-0 w-2 h-2 bg-primary/20 transform rotate-45 animate-float-shapes-3"></div>

                <div className="absolute top-20 left-0 w-6 h-6 bg-cyan-200/30 transform rotate-12 animate-float-shapes-4"></div>
                <div className="absolute top-48 left-0 w-3 h-3 bg-cyan-300/40 rounded-full animate-float-shapes-5"></div>

                <div className="absolute bottom-20 left-0 w-5 h-5 bg-primary/10 transform rotate-45 animate-float-shapes-6"></div>
                <div className="absolute bottom-40 left-0 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-shapes-7"></div>

                <div className="absolute top-16 right-0 w-3 h-3 bg-primary/12 transform rotate-45 animate-float-right-to-left-1"></div>
                <div className="absolute top-36 right-0 w-4 h-4 bg-cyan-300/25 rounded-full animate-float-right-to-left-2"></div>
                <div className="absolute top-56 right-0 w-2 h-2 bg-primary/18 transform rotate-12 animate-float-right-to-left-3"></div>
                <div className="absolute bottom-32 right-0 w-5 h-5 bg-cyan-200/20 transform rotate-45 animate-float-right-to-left-1" style={{animationDelay: '3s'}}></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Be Part of the Next Success Story
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join thousands of students from India and around the world who have transformed their futures through Axioma.
                        Their achievements speak for themselves.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="glass-white-clean rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-500 group relative overflow-hidden shadow-[0_20px_60px_rgba(0,188,212,0.2)]"
                        >
                            {/* Profile section */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="relative">

                                    <div className="absolute -top-1 -right-1 glass-white-clean rounded-full p-1 border border-white/20">
                                        <Star className="w-3 h-3 text-primary fill-current" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">{story.name}</h3>
                                    <p className="text-sm text-muted-foreground">{story.location}</p>
                                    <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs glass-white-clean px-2 py-1 rounded-lg border border-white/10 text-primary font-semibold">
                      {story.track}
                    </span>
                                        <span className="text-xs text-muted-foreground">{story.year}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Achievement highlight */}
                            <div className="glass-white-clean rounded-lg p-4 mb-4 border border-white/10">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Trophy className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary">Achievement</span>
                                </div>
                                <p className="text-sm font-semibold text-foreground">{story.achievement}</p>
                            </div>

                            {/* Quote section - better aligned */}
                            <div className="relative">
                                <Quote className="w-6 h-6 text-primary/30 absolute -top-2 -left-2" />
                                <blockquote className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
                                    {story.story}
                                </blockquote>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary transform rotate-12 scale-150"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="glass-white-clean rounded-2xl p-8 max-w-4xl mx-auto border border-white/10 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">Your Success Story Starts Here</h3>
                        <p className="text-muted-foreground mb-6 text-lg">
                            These students started exactly where you are now. With dedication, the right opportunities,
                            and Axioma&apos;s support, you can achieve extraordinary things too.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                                className="bg-gradient-to-r from-primary to-orange-500 border border-primary/20 rounded-lg px-8 py-4 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,107,53,0.25)]"
                            >
                                <span className="font-bold text-lg text-white">Apply Now</span>
                            </button>
                            <button
                                onClick={() => onNavigate?.('contact')}
                                className="glass-white-clean border border-white/20 rounded-lg px-8 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-[0_16px_48px_rgba(0,188,212,0.15)]"
                            >
                                <span className="font-semibold text-primary">Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;