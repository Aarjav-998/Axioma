
"use client";

import { useState } from 'react';
import { Mail, Phone, Calendar, ChevronLeft, ChevronRight, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
    backendAvailable?: boolean;
    onNavigate?: (page: string) => void;
}

const ContactSection = ({onNavigate }: ContactSectionProps) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [direction, setDirection] = useState(0);

    const contactCards = [
        {
            id: 1,
            title: "Email Us",
            subtitle: "Get a response within 24 hours",
            description: "We love connecting with ambitious students! Send us an email and we'll get back to you with personalized guidance.",
            contact: "hello@axioma.org",
            icon: <Mail className="w-8 h-8" />,
            action: "Send Email",
            actionIcon: <Mail className="w-5 h-5 text-white" />
        },
        {
            id: 2,
            title: "Call Us",
            subtitle: "Monday to Friday, 9AM - 6PM EST",
            description: "Prefer to talk? Give us a call during business hours for immediate assistance with your questions.",
            contact: "+1 (555) 123-4567",
            icon: <Phone className="w-8 h-8" />,
            action: "Call Now",
            actionIcon: <Phone className="w-5 h-5 text-white" />
        },
        {
            id: 3,
            title: "Schedule a Call",
            subtitle: "Book a one-on-one consultation",
            description: "Ready for a deeper conversation? Schedule a personalized consultation to discuss your goals and opportunities.",
            contact: "Book your preferred time slot",
            icon: <Calendar className="w-8 h-8" />,
            action: "Schedule Now",
            actionIcon: <Calendar className="w-5 h-5 text-white" />
        }
    ];

    const nextCard = () => {
        setDirection(1);
        setCurrentCard((prev) => (prev + 1) % contactCards.length);
    };

    const prevCard = () => {
        setDirection(-1);
        setCurrentCard((prev) => (prev - 1 + contactCards.length) % contactCards.length);
    };

    const goToCard = (index: number) => {
        setDirection(index > currentCard ? 1 : -1);
        setCurrentCard(index);
    };

    const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleAction = (card: any) => {
        switch (card.id) {
            case 1: // Email
                window.location.href = `mailto:${card.contact}`;
                break;
            case 2: // Call
                window.location.href = `tel:${card.contact}`;
                break;
            case 3: // Schedule
                window.open('https://calendly.com/axioma-events-official/30min', '_blank');
                break;
        }
    };

    // Very fast and seamless animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <section className="py-20 relative tech-pattern-background overflow-hidden min-h-screen flex items-center">
            {/* Enhanced floating decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left side enhanced shapes */}
                <div className="absolute top-10 left-0 w-10 h-10 bg-primary/12 transform rotate-45 animate-float-shapes-1"></div>
                <div className="absolute top-40 left-2 w-8 h-8 bg-cyan-300/18 rounded-full animate-float-shapes-2"></div>
                <div className="absolute top-80 left-0 w-6 h-6 bg-primary/25 transform rotate-12 animate-float-shapes-3"></div>
                <div className="absolute top-[480px] left-3 w-12 h-12 bg-cyan-400/10 transform rotate-45 animate-float-shapes-4"></div>
                <div className="absolute bottom-32 left-0 w-8 h-8 bg-primary/20 rounded-full animate-float-shapes-5"></div>
                <div className="absolute bottom-80 left-2 w-4 h-4 bg-cyan-300/28 transform rotate-45 animate-float-shapes-6"></div>

                {/* Right side enhanced shapes */}
                <div className="absolute top-20 right-0 w-9 h-9 bg-primary/15 transform rotate-12 animate-float-shapes-7"></div>
                <div className="absolute top-60 right-3 w-7 h-7 bg-cyan-400/22 rounded-full animate-float-shapes-1" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-[360px] right-0 w-10 h-10 bg-primary/12 transform rotate-45 animate-float-shapes-2" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-40 right-2 w-11 h-11 bg-cyan-300/15 transform rotate-12 animate-float-shapes-3" style={{animationDelay: '3s'}}></div>
                <div className="absolute bottom-80 right-0 w-6 h-6 bg-primary/22 rounded-full animate-float-shapes-4" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute bottom-[320px] right-4 w-5 h-5 bg-cyan-400/25 transform rotate-45 animate-float-shapes-5" style={{animationDelay: '2.5s'}}></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 heading-gradient"
                    >
                        Let&#39;s Talk!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        We love exploring the possibilities of tech, policy, and entrepreneurship, and we&#39;re here to explore them with you.
                    </motion.p>
                </div>

                {/* Enhanced Flashcard Carousel */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative h-[500px] flex items-center">
                        {/* Main Flashcard Container */}
                        <div className="relative w-full h-full overflow-hidden">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentCard}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 600, damping: 60, duration: 0.15 },
                                        opacity: { duration: 0.1 }
                                    }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="bg-white rounded-3xl p-8 md:p-12 w-full h-full flex flex-col justify-between relative shadow-[0_25px_80px_rgba(0,0,0,0.1)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.15)] transition-all duration-300">

                                        {/* Navigation Header */}
                                        <div className="flex items-center justify-between mb-8 relative z-10">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={prevCard}
                                                className="glass-white-clean border border-white/20 rounded-full p-3 hover:scale-110 transition-all duration-200 shadow-[0_8px_32px_rgba(0,188,212,0.2)]"
                                            >
                                                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                                            </motion.button>

                                            <div className="text-sm text-muted-foreground font-medium">
                                                {currentCard + 1} of {contactCards.length}
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={nextCard}
                                                className="glass-white-clean border border-white/20 rounded-full p-3 hover:scale-110 transition-all duration-200 shadow-[0_8px_32px_rgba(0,188,212,0.2)]"
                                            >
                                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                            </motion.button>
                                        </div>

                                        {/* Card Content */}
                                        <div className="text-center flex-1 flex flex-col justify-center relative z-10">
                                            {/* Icon */}
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                                className="glass-white-clean rounded-2xl p-6 w-fit mx-auto mb-6 border border-white/30 shadow-[0_12px_40px_rgba(0,188,212,0.2)]"
                                            >
                                                <div className="text-primary">
                                                    {contactCards[currentCard].icon}
                                                </div>
                                            </motion.div>

                                            {/* Title and Subtitle */}
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.05 }}
                                                className="text-3xl font-bold mb-2 heading-gradient"
                                            >
                                                {contactCards[currentCard].title}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.1 }}
                                                className="text-muted-foreground mb-6"
                                            >
                                                {contactCards[currentCard].subtitle}
                                            </motion.p>

                                            {/* Description */}
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.15 }}
                                                className="text-foreground mb-8 leading-relaxed max-w-md mx-auto"
                                            >
                                                {contactCards[currentCard].description}
                                            </motion.p>

                                            {/* Contact Info */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.2, delay: 0.2 }}
                                                className="flex items-center justify-center space-x-3 mb-8"
                                            >
                                                <div className="glass-white-clean rounded-lg px-4 py-2 border border-white/20 flex items-center space-x-3 shadow-[0_8px_24px_rgba(0,188,212,0.15)]">
                          <span className="text-muted-foreground font-medium">
                            {contactCards[currentCard].id === 1 ? 'Email us:' :
                                contactCards[currentCard].id === 2 ? 'Call us:' : 'Available:'}
                          </span>
                                                    <span className="text-primary font-semibold">
                            {contactCards[currentCard].contact}
                          </span>
                                                    {(contactCards[currentCard].id === 1 || contactCards[currentCard].id === 2) && (
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => copyToClipboard(
                                                                contactCards[currentCard].contact,
                                                                contactCards[currentCard].id === 1 ? 'email' : 'phone'
                                                            )}
                                                            className="p-1 hover:bg-white/10 rounded transition-colors duration-200"
                                                        >
                                                            <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                                                        </motion.button>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Action Button */}
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.25 }}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={() => handleAction(contactCards[currentCard])}
                                            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700 rounded-2xl px-8 py-4 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.4)] w-full flex items-center justify-center space-x-2 relative z-10"
                                        >
                                            {contactCards[currentCard].actionIcon}
                                            <span className="font-bold text-white">
                        {contactCards[currentCard].action}
                      </span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Enhanced Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {contactCards.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => goToCard(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === currentCard
                                        ? 'bg-primary shadow-[0_4px_16px_rgba(255,107,53,0.4)] scale-125'
                                        : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Copy Success Messages */}
                    <AnimatePresence>
                        {copiedEmail && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="fixed top-24 right-6 glass-white-clean border border-white/20 rounded-lg px-4 py-2 shadow-[0_8px_32px_rgba(0,188,212,0.3)] z-50"
                            >
                                <p className="text-sm text-primary font-medium">Email copied to clipboard!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {copiedPhone && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="fixed top-24 right-6 glass-white-clean border border-white/20 rounded-lg px-4 py-2 shadow-[0_8px_32px_rgba(0,188,212,0.3)] z-50"
                            >
                                <p className="text-sm text-primary font-medium">Phone number copied to clipboard!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;