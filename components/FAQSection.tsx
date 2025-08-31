import { useState } from 'react';
import { ChevronDown, HelpCircle, Users, Clock, DollarSign, Calendar, Award } from 'lucide-react';

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(0);

    const faqs = [
        {
            id: 1,
            question: "What are the eligibility requirements for Axioma programs?",
            answer: "All motivated high school students (grades 9-12) are welcome to apply, regardless of background, location, or previous experience. We believe in potential over pedigree and look for students who demonstrate curiosity, ambition, and a desire to make a positive impact.",
            icon: <Users className="w-5 h-5" />
        },
        {
            id: 2,
            question: "How much do Axioma programs cost?",
            answer: "We're committed to making elite opportunities accessible to all students. We offer need-based scholarships covering up to 100% of program costs, sliding scale pricing, and flexible payment plans. No qualified student is turned away due to financial constraints.",
            icon: <DollarSign className="w-5 h-5" />
        },
        {
            id: 3,
            question: "When can I start and how long are the programs?",
            answer: "Programs start throughout the year with rolling admissions for most opportunities. Duration varies by track: weekend workshops (2-3 days), intensive bootcamps (1-2 weeks), semester programs (3-6 months), and full-year mentorship tracks. You choose what fits your schedule.",
            icon: <Calendar className="w-5 h-5" />
        },
        {
            id: 4,
            question: "What's the time commitment for each program?",
            answer: "We offer flexible options to fit your schedule. Part-time programs require 5-10 hours per week, intensive programs are 20-30 hours per week, and full immersion programs are 40+ hours per week during breaks. All programs include ongoing mentorship and support.",
            icon: <Clock className="w-5 h-5" />
        },
        {
            id: 5,
            question: "Do I get real work experience and credentials?",
            answer: "Absolutely! Our programs include hands-on projects with real companies, published research opportunities, startup incubation, policy work with government agencies, and international collaborations. You'll build a portfolio of real-world achievements and receive industry certifications.",
            icon: <Award className="w-5 h-5" />
        },
        {
            id: 6,
            question: "How does the application process work?",
            answer: "Our application process is holistic and designed to identify potential. Submit your application with essays about your goals and interests, participate in a virtual interview, and complete a small project related to your chosen track. We review applications monthly and respond within 2 weeks.",
            icon: <HelpCircle className="w-5 h-5" />
        },
        {
            id: 7,
            question: "What kind of mentorship and support do you provide?",
            answer: "Each student is paired with industry mentors from top companies like Google, Tesla, and leading universities. You'll have regular 1-on-1 sessions, group workshops, peer networking events, and access to our alumni network of 10,000+ successful graduates worldwide.",
            icon: <Users className="w-5 h-5" />
        },
        {
            id: 8,
            question: "Can international students participate?",
            answer: "Yes! We welcome students from around the world. Many programs are fully virtual, and for in-person components, we assist with visa applications when needed. We have students from 80+ countries and offer programs in multiple time zones.",
            icon: <Users className="w-5 h-5" />
        }
    ];

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know about Axioma programs, applications, and opportunities.
                        Can&#39;t find what you&#39;re looking for? Reach out to us directly.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="glass-white-clean rounded-xl border border-white/10 hover:shadow-[0_12px_40px_rgba(0,188,212,0.15)] transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleItem(faq.id)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200 rounded-xl"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="text-primary shrink-0">
                                            {faq.icon}
                                        </div>
                                        <h3 className="font-semibold text-foreground pr-4">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${
                                            openItem === faq.id ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openItem === faq.id
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6 pl-[52px]">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;