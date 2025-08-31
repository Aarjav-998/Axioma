import { useState } from 'react';
import { Users, Calendar, Target, Star, Globe2, BookOpen, Briefcase, Code, Award, MapPin, DollarSign, GraduationCap } from 'lucide-react';

interface BentoBoxFeaturesProps {
    onNavigate?: (page: string) => void;
}

const BentoBoxFeatures = ({ onNavigate }: BentoBoxFeaturesProps) => {
    const [draggedItem, setDraggedItem] = useState<number | null>(null);
    const [dropTarget, setDropTarget] = useState<number | null>(null);

    const bentoItems = [
        {
            id: 1,
            title: "Elite Internships",
            description: "Secure high-impact internships at top tech companies, government agencies, and innovative startups",
            details: "Average placement rate: 94% • Duration: 8-16 weeks • Stipend: $2000-8000",
            icon: <Briefcase className="w-6 h-6" />,
            size: "large-wide",
            type: "white"
        },
        {
            id: 2,
            title: "Mentorship Network",
            description: "Connect with industry leaders and successful entrepreneurs who guide your journey",
            details: "1:1 monthly sessions • 500+ expert mentors • Success rate: 89%",
            icon: <Users className="w-5 h-5" />,
            size: "medium",
            type: "white"
        },
        {
            id: 3,
            title: "Exclusive Events",
            description: "Access invitation-only conferences, workshops, and networking opportunities",
            details: "12+ events annually • VIP access • Industry leaders • Networking dinners",
            icon: <Calendar className="w-5 h-5" />,
            size: "small",
            type: "white"
        },
        {
            id: 5,
            title: "Global Opportunities",
            description: "International programs and exchange opportunities across 50+ countries",
            details: [
                "Study abroad programs in 25+ top universities",
                "Research internships at international labs",
                "Cultural exchange with partner institutions",
                "Full scholarships up to $15,000 available",
                "Language immersion programs",
                "Global startup accelerators access"
            ],
            stats: {
                countries: "50+",
                universities: "25+",
                scholarships: "$15K",
                placements: "300+"
            },
            icon: <Globe2 className="w-6 h-6" />,
            size: "large",
            type: "white"
        },
        {
            id: 8,
            title: "Skill Development",
            description: "Master in-demand skills through hands-on workshops and masterclasses",
            details: "AI/ML • Web3 • Policy Analysis • Leadership • Entrepreneurship",
            icon: <Target className="w-5 h-5" />,
            size: "small",
            type: "white"
        },
        {
            id: 9,
            title: "Achievement Recognition",
            description: "Get recognized for your accomplishments through awards and certifications",
            details: "Digital badges • LinkedIn certifications • Award ceremonies • Media coverage",
            icon: <Award className="w-5 h-5" />,
            size: "medium",
            type: "white"
        },
        {
            id: 10,
            title: "Tech Excellence",
            description: "Advanced coding bootcamps and technical skill development programs",
            details: "Python • React • AI/ML • Blockchain • Cloud Computing • DevOps",
            icon: <Code className="w-5 h-5" />,
            size: "small",
            type: "white"
        }
    ];

    const [items, setItems] = useState(bentoItems);

    const handleDragStart = (e: React.DragEvent, index: number) => {
        setDraggedItem(index);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', '');

        // Add visual feedback
        e.currentTarget.style.transition = 'transform 0.2s ease';
        e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
    };

    const handleDragEnd = (e: React.DragEvent) => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        setDraggedItem(null);
        setDropTarget(null);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setDropTarget(index);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        // Only clear drop target if mouse has actually left the element
        if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
            setDropTarget(null);
        }
    };

    const handleDrop = (e: React.DragEvent, dropIndex: number) => {
        e.preventDefault();

        if (draggedItem === null || draggedItem === dropIndex) return;

        const newItems = [...items];
        const draggedElement = newItems[draggedItem];

        // Remove dragged item
        newItems.splice(draggedItem, 1);

        // Insert at new position
        const adjustedDropIndex = draggedItem < dropIndex ? dropIndex - 1 : dropIndex;
        newItems.splice(adjustedDropIndex, 0, draggedElement);

        setItems(newItems);
        setDraggedItem(null);
        setDropTarget(null);
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'col-span-2 row-span-2';
            case 'large-wide':
                return 'col-span-2 row-span-1';
            case 'medium':
                return 'col-span-1 row-span-1';
            case 'small':
                return 'col-span-1 row-span-1';
            default:
                return 'col-span-1 row-span-1';
        }
    };

    const renderContent = (item: any) => {
        if (item.title === "Global Opportunities") {
            return (
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.title}
                        </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                        {item.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="glass-white-clean rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <div>
                                    <div className="text-lg font-bold text-foreground">{item.stats.countries}</div>
                                    <div className="text-xs text-muted-foreground">Countries</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-white-clean rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2">
                                <GraduationCap className="w-4 h-4 text-primary" />
                                <div>
                                    <div className="text-lg font-bold text-foreground">{item.stats.universities}</div>
                                    <div className="text-xs text-muted-foreground">Universities</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-white-clean rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2">
                                <DollarSign className="w-4 h-4 text-primary" />
                                <div>
                                    <div className="text-lg font-bold text-foreground">{item.stats.scholarships}</div>
                                    <div className="text-xs text-muted-foreground">Max Scholarship</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-white-clean rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2">
                                <Star className="w-4 h-4 text-primary" />
                                <div>
                                    <div className="text-lg font-bold text-foreground">{item.stats.placements}</div>
                                    <div className="text-xs text-muted-foreground">Placements</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Programs List */}
                    <div className="flex-1 space-y-2">
                        {item.details.slice(0, 3).map((detail: string, idx: number) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{detail}</span>
                            </div>
                        ))}
                    </div>

                    {/* Hover reveal button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <button
                            onClick={() => onNavigate?.('learn-more')}
                            className="glass-white-clean border border-white/20 rounded-lg px-4 py-2 text-sm hover:bg-white/10 transition-all duration-200 w-full"
                        >
                            Explore Programs
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                    </div>
                    <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${
                        item.size === 'large' || item.size === 'large-wide' ? 'text-xl' : 'text-lg'
                    }`}>
                        {item.title}
                    </h3>
                </div>

                <p className={`text-muted-foreground leading-relaxed flex-1 ${
                    item.size === 'large' || item.size === 'large-wide' ? 'text-base' : 'text-sm'
                }`}>
                    {item.description}
                </p>

                {item.details && (
                    <div className="mt-3 text-xs text-primary font-medium">
                        {item.details}
                    </div>
                )}

                {/* Hover reveal button */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <button
                        onClick={() => onNavigate?.('learn-more')}
                        className="glass-white-clean border border-white/20 rounded-lg px-4 py-2 text-sm hover:bg-white/10 transition-all duration-200"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section className="py-20 relative tech-pattern-background">
            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
                        Unlock Elite Opportunities
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our comprehensive platform connects ambitious students with transformative experiences.
                        Drag and drop to explore different opportunities and find your perfect path to success.
                    </p>
                </div>

                <div className="grid grid-cols-4 grid-rows-3 gap-4 md:gap-6 max-w-7xl mx-auto auto-rows-fr">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDragLeave={handleDragLeave}
                            onDrop={(e) => handleDrop(e, index)}
                            className={`
                ${getSizeClasses(item.size)} 
                glass-white-clean
                rounded-xl border border-white/10 hover:shadow-[0_8px_30px_rgba(224,247,250,0.15)]
                transition-all duration-300 hover:scale-105 group cursor-move 
                relative overflow-hidden p-4 md:p-6 flex flex-col justify-between
                ${draggedItem === index ? 'opacity-60 scale-95 shadow-2xl' : ''}
                ${dropTarget === index ? 'ring-2 ring-primary ring-opacity-50 scale-105 shadow-[0_16px_40px_rgba(255,107,53,0.2)]' : ''}
                hover:border-primary/20 shadow-[0_4px_20px_rgba(224,247,250,0.08)]
                transform-gpu will-change-transform
              `}
                            style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden'
                            }}
                        >
                            {/* Drag indicator */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-6 h-6 grid grid-cols-2 gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-primary rounded-full animate-pulse-glow"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            {renderContent(item)}

                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                <div className="w-full h-full bg-gradient-to-br from-primary to-cyan-400 transform rotate-12 scale-150 group-hover:rotate-6 group-hover:scale-125 transition-transform duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground">
                        🎯 Drag and drop the boxes above to rearrange them and discover new possibilities
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BentoBoxFeatures;