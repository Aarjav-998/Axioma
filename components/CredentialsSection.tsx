import { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Star, Calendar, Users, Award, Trophy, Target, Zap, Lightbulb, Code, Globe2, BookOpen, Rocket } from 'lucide-react';

const CredentialsSection = () => {
    const studentCredentials = [
        // First page - original with Indian names
        {
            type: "Innovation Award",
            student: "Arjun Sharma",
            achievement: "AI Ethics Research Winner",
            year: "2024",
            description: "Developed groundbreaking research on ethical AI implementation in healthcare, winning the National Youth Science Fair",
            status: "Winner",
            impact: "Implemented at 3 hospitals",
            icon: <Lightbulb className="w-5 h-5" />,
            size: "large"
        },
        {
            type: "Startup Success",
            student: "Priya Patel",
            achievement: "EdTech Platform Launch",
            year: "2024",
            description: "Created and launched tutoring platform serving 2,000+ students across rural India",
            status: "Active",
            impact: "$50K revenue generated",
            icon: <Target className="w-5 h-5" />,
            size: "medium"
        },
        {
            type: "Policy Impact",
            student: "Vikram Singh",
            achievement: "Climate Policy Proposal",
            year: "2024",
            description: "Policy proposal adopted by city council for carbon reduction initiatives in Delhi",
            status: "Implemented",
            impact: "City-wide adoption",
            icon: <Award className="w-5 h-5" />,
            size: "small"
        },
        {
            type: "Tech Innovation",
            student: "Ananya Reddy",
            achievement: "Open Source Contributor",
            year: "2024",
            description: "Major contributions to React ecosystem, with 10K+ GitHub stars on accessibility tools",
            status: "Ongoing",
            impact: "10K+ developers using",
            icon: <Zap className="w-5 h-5" />,
            size: "medium"
        },
        {
            type: "Research Excellence",
            student: "Rahul Gupta",
            achievement: "Cancer Research Breakthrough",
            year: "2024",
            description: "Published research in peer-reviewed journal on novel cancer treatment approaches using AI",
            status: "Published",
            impact: "Cited 50+ times",
            icon: <Star className="w-5 h-5" />,
            size: "large"
        },
        {
            type: "Social Impact",
            student: "Kavya Iyer",
            achievement: "Food Security Initiative",
            year: "2024",
            description: "Founded nonprofit providing meals to 500+ families weekly in Mumbai slums",
            status: "Growing",
            impact: "500+ families helped",
            icon: <Trophy className="w-5 h-5" />,
            size: "small"
        },

        // Second page - expanded with more Indian achievers
        {
            type: "Tech Leadership",
            student: "Aditya Mehta",
            achievement: "Coding Bootcamp Founder",
            year: "2024",
            description: "Teaching coding to underrepresented youth across 5 cities, training 200+ students",
            status: "Expanding",
            impact: "200+ students trained",
            icon: <Code className="w-5 h-5" />,
            size: "medium"
        },
        {
            type: "International Recognition",
            student: "Shreya Nair",
            achievement: "Global Youth Ambassador",
            year: "2024",
            description: "Selected as UN Youth Climate Ambassador, representing South Asia",
            status: "Active",
            impact: "Global platform",
            icon: <Globe2 className="w-5 h-5" />,
            size: "large"
        },
        {
            type: "Academic Excellence",
            student: "Ravi Kumar",
            achievement: "MIT Research Fellowship",
            year: "2024",
            description: "Youngest researcher accepted into MIT's quantum computing lab program",
            status: "Active",
            impact: "Breakthrough research",
            icon: <BookOpen className="w-5 h-5" />,
            size: "small"
        },
        {
            type: "Innovation Award",
            student: "Neha Agarwal",
            achievement: "Sustainable Tech Solution",
            year: "2024",
            description: "Developed solar-powered water purification system for remote villages",
            status: "Deployed",
            impact: "1000+ people served",
            icon: <Lightbulb className="w-5 h-5" />,
            size: "medium"
        },
        {
            type: "Entrepreneurship",
            student: "Karan Joshi",
            achievement: "FinTech Startup Success",
            year: "2024",
            description: "Created micro-lending app for small farmers, secured $1M in funding",
            status: "Funded",
            impact: "$1M raised",
            icon: <Rocket className="w-5 h-5" />,
            size: "large"
        },
        {
            type: "Research Impact",
            student: "Divya Krishnan",
            achievement: "Medical AI Research",
            year: "2024",
            description: "Developed AI model for early disease detection, 95% accuracy rate",
            status: "Patent Filed",
            impact: "Patent pending",
            icon: <Star className="w-5 h-5" />,
            size: "small"
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const credentialsPerPage = 6;
    const totalPages = Math.ceil(studentCredentials.length / credentialsPerPage);

    const changePage = (newPage: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(newPage);
            setTimeout(() => setIsTransitioning(false), 200);
        }, 400);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
            changePage(nextPage);
        }, 8000);

        return () => clearInterval(interval);
    }, [currentPage, totalPages]);

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Innovation Award': return 'bg-purple-100 text-purple-800';
            case 'Startup Success': return 'bg-green-100 text-green-800';
            case 'Policy Impact': return 'bg-blue-100 text-blue-800';
            case 'Tech Innovation': return 'bg-cyan-100 text-cyan-800';
            case 'Research Excellence': return 'bg-red-100 text-red-800';
            case 'Social Impact': return 'bg-yellow-100 text-yellow-800';
            case 'Tech Leadership': return 'bg-indigo-100 text-indigo-800';
            case 'International Recognition': return 'bg-pink-100 text-pink-800';
            case 'Academic Excellence': return 'bg-orange-100 text-orange-800';
            case 'Entrepreneurship': return 'bg-emerald-100 text-emerald-800';
            case 'Research Impact': return 'bg-violet-100 text-violet-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Winner': return 'bg-yellow-100 text-yellow-800';
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Implemented': return 'bg-blue-100 text-blue-800';
            case 'Ongoing': return 'bg-purple-100 text-purple-800';
            case 'Published': return 'bg-red-100 text-red-800';
            case 'Growing': return 'bg-orange-100 text-orange-800';
            case 'Expanding': return 'bg-teal-100 text-teal-800';
            case 'Deployed': return 'bg-cyan-100 text-cyan-800';
            case 'Funded': return 'bg-emerald-100 text-emerald-800';
            case 'Patent Filed': return 'bg-violet-100 text-violet-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'large': return 'col-span-2 row-span-2 p-6 md:p-8';
            case 'medium': return 'col-span-1 row-span-1 p-4 md:p-6';
            case 'small': return 'col-span-1 row-span-1 p-3 md:p-4';
            default: return 'col-span-1 row-span-1 p-4 md:p-6';
        }
    };

    const currentCredentials = studentCredentials.slice(
        currentPage * credentialsPerPage,
        (currentPage + 1) * credentialsPerPage
    );

    return (
        <section id="credentials" className="py-20 relative tech-pattern-background">
            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Student Success Stories
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Real achievements from real students. These are the extraordinary accomplishments of Axioma alumni who turned opportunities into impact.
                    </p>
                </div>

                <div className={`grid grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 transition-all duration-800 ${isTransitioning ? 'opacity-20 scale-95' : 'opacity-100 scale-100'}`}>
                    {currentCredentials.map((credential, index) => {
                        // Fixed grid layout without random positioning offsets
                        return (
                            <div
                                key={`${currentPage}-${index}`}
                                className={`${getSizeClasses(credential.size)} glass-white-strong rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/30 group relative overflow-hidden flex flex-col justify-between`}
                            >
                                {/* Background pattern for variety */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary transform rotate-12 scale-150"></div>
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                                {credential.icon}
                                            </div>
                                            <Badge className={`${getTypeColor(credential.type)} text-xs`}>
                                                {credential.type}
                                            </Badge>
                                        </div>
                                        <Badge className={`${getStatusColor(credential.status)} text-xs`}>
                                            {credential.status}
                                        </Badge>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className={`font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 ${credential.size === 'large' ? 'text-xl' : credential.size === 'medium' ? 'text-lg' : 'text-base'}`}>
                                            {credential.student}
                                        </h3>

                                        <h4 className={`text-primary font-semibold mb-3 ${credential.size === 'large' ? 'text-lg' : 'text-sm'}`}>
                                            {credential.achievement}
                                        </h4>

                                        <p className={`text-muted-foreground mb-4 leading-relaxed ${credential.size === 'large' ? 'text-base' : 'text-sm'}`}>
                                            {credential.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto">
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {credential.year}
                                        </div>
                                        <div className="flex items-center font-semibold text-primary">
                                            <Trophy className="w-3 h-3 mr-1" />
                                            {credential.impact}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Page indicators */}
                <div className="flex justify-center space-x-3 mb-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => changePage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                index === currentPage
                                    ? 'bg-primary scale-125 shadow-lg'
                                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                            }`}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Every student story represents countless hours of dedication, mentorship, and the transformative power of opportunity.
                        These achievements inspire us to reach even more ambitious students worldwide.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CredentialsSection;