"use client"
import { useState, useEffect } from "react";
import {
    Calendar,
    MapPin,
    Users,
    Clock,
    Filter,
} from "lucide-react";


import {
    projectId,
    publicAnonKey,
} from "@/utils/supabase/info";

import {Toaster } from "@/components/ui/sonner";
import {toast} from "sonner";
import Image from "next/image";
import AnimatedShapes from "@/components/AnimatedShapes";
import FloatingGeometry from "@/components/FloatingGeometry";
import {ReactTyped} from "react-typed";

interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    capacity: number;
    registered: number;
    image: string;
    category: string;
}

interface EventsPageProps {
    backendAvailable?: boolean;
}

const EventsPage = ({
                        backendAvailable = false,
                    }: EventsPageProps) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(
        [],
    );
    const [selectedCategory, setSelectedCategory] =
        useState<string>("All");
    const [isLoading, setIsLoading] = useState(true);

    const categories = [
        "All",
        "Technology",
        "Policy",
        "Entrepreneurship",
        "Research",
    ];

    // Fallback sample events for when backend is unavailable
    const fallbackEvents: Event[] = [
        {
            id: "TinkerVerse - India's biggest national ideathon",
            title: "TinkerVerse - India's biggest national ideathon",
            description:
                "Join industry leaders for a day of cutting-edge technology discussions",
            date: "Revealing Soon",
            time: "Revealing Soon",
            location: "Hybrid",
            capacity: 150,
            registered: 89,
            image:
                "https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=800&h=400&fit=crop",
            category: "All",
        },
    ];

    useEffect(() => {
        if (backendAvailable) {
            fetchEvents();
        } else {
            // Use fallback data
            setEvents(fallbackEvents);
            setIsLoading(false);
        }
    }, [backendAvailable]);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredEvents(events);
        } else {
            setFilteredEvents(
                events.filter(
                    (event) => event.category === selectedCategory,
                ),
            );
        }
    }, [events, selectedCategory]);

    const fetchEvents = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `https://${projectId}.supabase.co/functions/v1/make-server-c3be4cb2/events`,
                {
                    headers: {
                        Authorization: `Bearer ${publicAnonKey}`,
                    },
                },
            );

            if (!response.ok) {
                throw new Error("Failed to fetch events");
            }

            const data = await response.json();
            setEvents(
                data.events && data.events.length > 0
                    ? data.events
                    : fallbackEvents,
            );
        } catch (error) {
            console.error("Error fetching events:", error);
            // Use fallback data if fetch fails
            setEvents(fallbackEvents);
            if (backendAvailable) {
                toast.error(
                    "Could not load events from server, showing sample events",
                );
            }
        } finally {
            setIsLoading(false);
        }
    };



    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (isLoading) {
        return (
            <div className="relative z-10 pt-24">
                <div className="container mx-auto px-4 py-20">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="glass-white-clean rounded-xl p-8 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                            <p className="text-muted-foreground">
                                Loading events...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
                                strings={["Upcoming  events"]}
                                typeSpeed={50}
                                backSpeed={30}
                                showCursor={true}

                                cursorChar="."

                            />
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Join our exclusive events designed to connect you
                            with industry leaders, expand your network, and
                            accelerate your journey toward excellence. Each
                            event is carefully curated to provide maximum
                            value and learning opportunities.
                        </p>
                        {!backendAvailable && (
                            <div className="glass-cyan rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                                <p className="text-sm text-muted-foreground">

                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/*/!* Filter Section *!/*/}
            {/*<section className="py-8 relative">*/}
            {/*    <div className="container mx-auto px-4 relative z-20">*/}
            {/*        <div className="max-w-4xl mx-auto">*/}
            {/*            <div className="glass-white-clean rounded-2xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">*/}
            {/*                <div className="flex items-center space-x-4 mb-4">*/}
            {/*                    <Filter className="w-5 h-5 text-primary" />*/}
            {/*                    <h3 className="font-semibold text-foreground">*/}
            {/*                        Filter by Category*/}
            {/*                    </h3>*/}
            {/*                </div>*/}
            {/*                <div className="flex flex-wrap gap-3">*/}
            {/*                    {categories.map((category) => (*/}
            {/*                        <button*/}
            {/*                            key={category}*/}
            {/*                            onClick={() =>*/}
            {/*                                setSelectedCategory(category)*/}
            {/*                            }*/}
            {/*                            className={`px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${*/}
            {/*                                selectedCategory === category*/}
            {/*                                    ? "bg-primary text-white border-primary shadow-[0_4px_20px_rgba(255,107,53,0.3)]"*/}
            {/*                                    : "glass-white-clean border-white/10 text-foreground hover:bg-white/10"*/}
            {/*                            }`}*/}
            {/*                        >*/}
            {/*                            {category}*/}
            {/*                        </button>*/}
            {/*                    ))}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Events Grid */}
            <section className="py-12 relative items-center">
                <div className="container mx-auto px-4 relative z-20">
                    {filteredEvents.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="glass-white-clean rounded-2xl border border-white/10 p-12 max-w-md mx-auto shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-foreground">
                                    No Events Found
                                </h3>
                                <p className="text-muted-foreground">
                                    {selectedCategory === "All"
                                        ? "No events are currently available. Check back soon!"
                                        : `No events found in the ${selectedCategory} category.`}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                            {filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="glass-white-clean rounded-2xl items-center border border-white/10 overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(0,188,212,0.2)] group"
                                >
                                    {/* Event Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 glass-white-clean rounded-lg px-3 py-1 border border-white/10 shadow-[0_8px_32px_rgba(0,188,212,0.2)]">
                      <span className="text-xs font-semibold text-primary">
                        {event.category}
                      </span>
                                        </div>

                                        {/* Capacity Badge */}
                                        <div className="absolute top-4 right-4 glass-white-clean rounded-lg px-3 py-1 border border-white/10 shadow-[0_8px_32px_rgba(0,188,212,0.2)]">
                      {/*<span className="text-xs font-semibold text-foreground">*/}
                      {/*  {event.registered}/{event.capacity}*/}
                      {/*</span>*/}
                                        </div>

                                        {!backendAvailable && (
                                            <div className="absolute bottom-4 left-4 right-4">

                                            </div>
                                        )}
                                    </div>

                                    {/* Event Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                            {event.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                            {event.description}
                                        </p>

                                        {/* Event Details */}
                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span>Revealing Soon</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Users className="w-4 h-4 text-primary" />
                                                <span>
                          {/*{event.registered} registered*/}
                                                    Coming soon
                        </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 relative tech-pattern-background">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="glass-white-clean rounded-2xl border border-white/10 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,188,212,0.2)]">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                                Don&#39;t Miss Out
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Our events fill up quickly! Join our community
                                to get early access to event announcements and
                                exclusive opportunities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    className="glass-white-clean border border-white/10 rounded-lg py-3 px-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_rgba(0,188,212,0.15)]"
                                >
                  <span className="font-bold text-primary">
                    Browse More Events
                  </span>
                                </button>
                                <button className="bg-gradient-to-r from-primary to-orange-500 border border-primary/20 rounded-lg px-8 py-3 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,107,53,0.25)]">
                  <span className="font-bold text-white">
                    Join Our Community
                  </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;