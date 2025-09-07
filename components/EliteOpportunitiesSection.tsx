"use client";

import {
    Lightbulb,

    Rocket,

    Zap,
    ChevronRight,
    HeartPulse,
    Scale,
    Microscope, Handshake, Palette, Banknote, Building2
} from 'lucide-react';

interface EliteOpportunitiesSectionProps {
    onNavigate?: (page: string) => void;
}

const EliteOpportunitiesSection = ({ onNavigate }: EliteOpportunitiesSectionProps) => {
    const tracks = [
        {
            id: 'innovation',
            title: 'Innovation Challenges',
            description: 'Run corporate challenges & hackathons to develop innovative solutions that will transform your business.',
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            featured: true,
            gradient: 'from-blue-400 to-blue-600'
        },
        {
            id: 'product',
            title: 'Medical & Healthcare',
            description: 'Pioneer breakthroughs in patient care, biotechnology, and medical research to shape the future of wellness.',
            icon: <HeartPulse className="w-6 h-6 text-green-500" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },
        {
            id: 'startup',
            title: 'Legal Tech & Innovation',
            description: 'Transform the legal landscape with new technologies for case management, legal research, and access to justice.',
            icon: <Scale className="w-6 h-6 text-blue-900" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },
        {
            id: 'student',
            title: 'Entrepreneurship & Startups',
            description: 'Launch your next venture. Pitch groundbreaking ideas, build a business plan, and connect with investors and mentors.',
            icon: <Rocket className="w-6 h-6 text-red-500" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },
        {
            id: 'recruitment',
            title: 'Scientific Research',
            description: 'Drive discovery across physics, chemistry, and biology. Propose novel experiments and challenge existing paradigms.',
            icon: <Microscope className="w-6 h-6 text-purple-500" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },

        {
            id: 'arts & culture',
            title: 'Arts & Culture',
            description: 'Innovate in the creative industries. Explore new forms of artistic expression, digital media, and cultural preservation.',
            icon: <Palette  className="w-6 h-6 text-chart-3" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },
        {
            id: 'hackathon',
            title: 'Social Impact & Non-Profit',
            description: 'Develop sustainable solutions to pressing social and environmental problems. Create initiatives that make a difference.',
            icon: <Handshake className="w-6 h-6 text-amber-600" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },
        {
            id: 'Finance & Economics',
            title: 'Finance & Economics',
            description: 'Disrupt the world of finance with new economic models, investment strategies, and financial technologies.',
            icon: <Banknote className="w-6 h-6 text-green-800" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },
        {
            id: 'Engineering & Infrastructure',
            title: 'Engineering & Infrastructure',
            description: 'Design and build the future. Tackle challenges in civil, mechanical, and electrical engineering to create a better world.',
            icon: <Building2 className="w-6 h-6 text-gray-600" />,
            featured: false,
            gradient: 'from-orange-400 to-red-500'
        },

    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
                        In innovation, one size does not fit all
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Innovate effectively. Our leading innovation management platform and a network of 6 million innovators
                        will help you find the perfect solutions and bring them to market faster.
                    </p>
                </div>

                {/* Elite Opportunities Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">

                        {/* Featured Innovation Challenges Card */}
                        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
                            <div className="glass-white-clean rounded-2xl border border-white/10 p-8 h-full hover:scale-105 transition-all duration-300 shadow-[0_25px_80px_rgba(0,188,212,0.3)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-2xl"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="glass-white-clean rounded-xl p-4 w-fit mb-6 border border-white/20 shadow-[0_12px_40px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-300">
                                        {tracks[0].icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{tracks[0].title}</h3>
                                    <p className="text-muted-foreground leading-relaxed flex-1">{tracks[0].description}</p>

                                    <button
                                        onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                                        className="mt-6 flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300 group/button"
                                    >
                                        Learn More
                                        <ChevronRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Regular Track Cards */}
                        {tracks.slice(1).map((track) => (
                            <div key={track.id} className="md:col-span-1">
                                <div className="glass-white-clean rounded-2xl border border-white/10 p-6 h-full hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)] group">
                                    <div className="flex flex-col h-full">
                                        <div className={`glass-white-clean rounded-xl p-3 w-fit mb-4 border border-white/20 shadow-[0_8px_32px_rgba(0,188,212,0.15)] group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${track.gradient}`}>
                                            {track.icon}
                                        </div>

                                        <h3 className="text-lg font-bold mb-3 text-foreground">{track.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{track.description}</p>

                                        <button
                                            onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                                            className="mt-4 flex items-center text-primary font-semibold hover:text-orange-600 transition-colors duration-300 group/button text-sm"
                                        >
                                            Explore
                                            <ChevronRight className="w-3 h-3 ml-1 group-hover/button:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="glass-white-clean rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto shadow-[0_25px_80px_rgba(0,188,212,0.3)]">
                        <h3 className="text-2xl font-bold mb-4 heading-gradient">Ready to innovate?</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Join thousands of students already connected to elite opportunities across these innovative tracks.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                                className="bg-gradient-to-r from-primary to-orange-500 border border-primary/20 rounded-lg px-8 py-3 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,107,53,0.25)]"
                            >
                                <span className="font-bold text-white">Apply Now</span>
                            </button>
                            <button
                                onClick={() => onNavigate?.('about')}
                                className="glass-white-clean border border-white/10 rounded-lg py-3 px-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_rgba(0,188,212,0.15)]"
                            >
                                <span className="font-bold text-primary">Learn More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EliteOpportunitiesSection;
