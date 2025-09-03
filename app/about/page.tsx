"use client"

import AnimatedShapes from "@/components/AnimatedShapes";
import FloatingGeometry from "@/components/FloatingGeometry";
import {ReactTyped} from "react-typed";
import React from "react";


interface AboutPageProps {
    onNavigate?: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {

    return (
        <div className="relative z-10 pt-24">
            <AnimatedShapes variant="hero"/>
            <FloatingGeometry variant="dense" />

            {/* Hero Section */}
            <section className="py-20 relative tech-pattern-background">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-6xl lg:text-7xl font-bold mb-6 heading-gradient">
                            <ReactTyped
                                strings={["About Axioma"]}
                                typeSpeed={50}
                                backSpeed={30}
                                showCursor={true}
                                loop={true}
                                cursorChar="|"/>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            We&#39;re on a mission to democratize access to elite opportunities for ambitious high school students worldwide.
                            Through innovative programs and strategic partnerships, we&#39;re building the next generation of leaders
                            in technology, policy, and entrepreneurship.
                        </p>


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


        </div>
    );
};

export default AboutPage;