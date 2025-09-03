"use client"; // <--- must be the very first line

import React from "react";
import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Rocket, GraduationCap, Lightbulb } from "lucide-react";

import EliteOpportunitiesSection from "@/components/EliteOpportunitiesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import AnimatedShapes from "@/components/AnimatedShapes";
import FloatingGeometry from "@/components/FloatingGeometry";

interface HeroSectionProps {
    onNavigate?: (page: string) => void;
}

const Page = ({ onNavigate }: HeroSectionProps) => {
    return (

        <>
            <AnimatedShapes variant="hero"/>
            <FloatingGeometry variant="dense"/>
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <AnimatedShapes variant="hero"/>
                <FloatingGeometry variant="dense"/>

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/50 to-white/30"></div>
                {/*<AnimatedShapes variant="hero" />*/}
                {/*<FloatingGeometry variant="dense" />*/}
                {/* Floating background blobs */}
                <div
                    className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-scale"></div>
                <div
                    className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-200/20 rounded-full blur-3xl animate-float"></div>
                <div
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float-reverse"></div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20 pt-20">

                    <div className="text-center max-w-4xl mx-auto">

                        {/* Badge */}
                        <div className="flex items-center justify-center mb-6">
                            <div
                                className="flex items-center glass-white-clean rounded-full px-4 py-2 border border-white/20 hover-scale shadow-[0_8px_32px_rgba(0,188,212,0.2)] animate-glow-badge">
                                <Star className="w-4 h-4 text-primary mr-2 animate-spin-slow"/>
                                <span className="text-sm font-medium">Connecting Future Leaders</span>
                            </div>
                        </div>

                        {/* Typing Animation Heading */}


                        <h1 className="text-6xl lg:text-7xl font-bold mb-6 heading-gradient">
                            <ReactTyped
                                strings={["Elite Opportunities for High School Leaders"]}
                                typeSpeed={50}
                                backSpeed={30}
                                showCursor={true}

                                cursorChar="!"/>
                        </h1>


                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right">
                            Axioma provides high school students with impactful, real-world
                            opportunities in diverse fields like entrepreneurship, policy, tech,
                            and research. Through fellowships, competitions, and mentorship, we
                            empower future leaders to make an impact now.
                        </p>

                        {/* Buttons with animated icons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button
                                size="lg"
                                onClick={() => window.open("https://tally.so/r/n0Yp8j", "_blank")}
                                className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 transform active:scale-95 group shadow-[0_8px_24px_rgba(255,107,53,0.25)] flex items-center"
                            >
                                <Rocket className="mr-2 h-5 w-5 animate-bounce"/>
                                Apply Now
                                <ArrowRight
                                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"/>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => onNavigate?.("about")}
                                className="glass-white-clean border border-white/20 text-primary hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 transform active:scale-95 shadow-[0_8px_32px_rgba(0,188,212,0.15)] flex items-center"
                            >
                                <GraduationCap className="mr-2 h-5 w-5 animate-float"/>
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Next Sections */}
                    <div className="relative tech-pattern-background pt-24 max-md:pt-16 max-sm:pt-14">
                        <AnimatedShapes/>
                        <FloatingGeometry variant="dense"/>
                        <EliteOpportunitiesSection onNavigate={onNavigate}/>


                    </div>
                    <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                        <AnimatedShapes/>
                        <FloatingGeometry variant="dense"/>
                        <SuccessStoriesSection/>
                    </div>
                    <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                        <AnimatedShapes/>
                        <FloatingGeometry variant="dense"/>
                        <FAQSection/>
                    </div>
                    <div className="relative pt-24 max-md:pt-16 max-sm:pt-14">
                        <ContactSection/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
