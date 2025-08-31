import { useState } from 'react';
import { Users, Building, Trophy, Globe2, GraduationCap, Briefcase, Award, Target } from 'lucide-react';

const StatsSection = () => {
    const [hoveredStat, setHoveredStat] = useState<number | null>(null);

    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            number: "5,000+",
            label: "Students Empowered",
            description: "Ambitious high schoolers who've transformed their futures through our programs",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: <Building className="w-8 h-8" />,
            number: "500+",
            label: "Partner Organizations",
            description: "Leading companies, universities, and institutions in our network",
            color: "text-green-500",
            bgColor: "bg-green-500/10"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            number: "95%",
            label: "Success Rate",
            description: "Students who successfully complete their chosen opportunity tracks",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10"
        },
        {
            icon: <Globe2 className="w-8 h-8" />,
            number: "50+",
            label: "Countries Reached",
            description: "Global impact across six continents through our international programs",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            number: "$50M+",
            label: "Scholarships Secured",
            description: "Total scholarship value earned by our students for higher education",
            color: "text-cyan-500",
            bgColor: "bg-cyan-500/10"
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            number: "1,200+",
            label: "Internships Placed",
            description: "Premium internship placements at top-tier companies and organizations",
            color: "text-red-500",
            bgColor: "bg-red-500/10"
        },
        {
            icon: <Award className="w-8 h-8" />,
            number: "300+",
            label: "Awards Won",
            description: "National and international recognition earned by our student community",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10"
        },
        {
            icon: <Target className="w-8 h-8" />,
            number: "98%",
            label: "College Acceptance",
            description: "Students accepted to their top-choice universities and programs",
            color: "text-indigo-500",
            bgColor: "bg-indigo-500/10"
        }
    ];

    return (
        <section className="py-20 relative tech-pattern-background">
            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Real results that speak volumes. Every number represents dreams realized, futures transformed,
                        and the extraordinary potential of ambitious young minds unleashed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`glass-white-clean rounded-2xl border border-white/10 p-6 hover:shadow-[0_12px_40px_rgba(0,188,212,0.15)] transition-all duration-500 group cursor-pointer relative overflow-hidden ${
                                hoveredStat === index ? 'scale-110 z-10' : 'hover:scale-105'
                            }`}
                            onMouseEnter={() => setHoveredStat(index)}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            {/* Animated background */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${stat.bgColor}`}></div>

                            {/* Icon */}
                            <div className={`${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <div className="text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                                {stat.number}
                            </div>

                            {/* Label */}
                            <div className="text-lg font-semibold mb-3 text-foreground">
                                {stat.label}
                            </div>

                            {/* Description - appears on hover */}
                            <div className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${
                                hoveredStat === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                            }`}>
                                {stat.description}
                            </div>

                            {/* Progress indicator */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;