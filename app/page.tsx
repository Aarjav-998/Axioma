"use client"; // <--- must be the very first line

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import BentoBoxFeatures from "@/components/BentoBoxFeatures";
import EliteOpportunitiesSection from "@/components/EliteOpportunitiesSection";
import StatsSection from "@/components/StatsSection";
import CredentialsSection from "@/components/CredentialsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

interface HeroSectionProps {
    onNavigate?: (page: string) => void;
}

const Page = ({ onNavigate }: HeroSectionProps) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Full viewport background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/50 to-white/30"></div>

            {/* Animated background decorations */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-scale"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-200/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float-reverse"></div>

            {/* Content container */}
            <div className="container mx-auto px-4 relative z-20 pt-20">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center glass-white-clean rounded-full px-4 py-2 border border-white/20 hover-scale shadow-[0_8px_32px_rgba(0,188,212,0.2)]">
                            <Star className="w-4 h-4 text-primary mr-2 animate-pulse" />
                            <span className="text-sm font-medium">Connecting Future Leaders</span>
                        </div>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-bold mb-6 heading-gradient animate-slide-in-left">
                        Elite Opportunities for
                        <br />
                        <span className="animate-gradient-move">High School Leaders</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right">
                        Axioma provides high school students with impactful, real-world opportunities in diverse fields like entrepreneurship, policy, tech, and research. Through fellowships, competitions, and mentorship, we empower future leaders to make an impact now.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                            className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 transform active:scale-95 group shadow-[0_8px_24px_rgba(255,107,53,0.25)]"
                        >
                            Apply Now
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => onNavigate?.('about')}
                            className="glass-white-clean border border-white/20 text-primary hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 transform active:scale-95 shadow-[0_8px_32px_rgba(0,188,212,0.15)]"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                <div className="relative pt-24 max-sm:hidden ">
                    <BentoBoxFeatures onNavigate={onNavigate} />
                </div>

                <div className="relative tech-pattern-background pt-24 max-md:pt-16 max-sm:pt-14">
                    <EliteOpportunitiesSection onNavigate={onNavigate} />
                </div>
                <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                    <StatsSection />
                </div>
                <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                   <CredentialsSection />
                </div>
                <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                    <SuccessStoriesSection />
                </div>
                <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                    <FAQSection />
                </div>
                <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                    <ContactSection />
                </div>
            </div>
        </section>
    );
};

export default Page;
