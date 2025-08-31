"use client";

import { cn } from "@/lib/utils";
import {Home, User, BarChart2, Search, Menu, X, Calendar1} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About", href: "/about", icon: <Search size={18} /> },
    // { name: "Skills", href: "/skills", icon: <BarChart2 size={18} /> },
    // { name: "Events", href: "/projects", icon: <Calendar1 size={18} /> },
    { name: "Contact", href: "/contact", icon: <User size={18} /> },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setActiveSection(href);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 flex justify-center top-4 px-4">
            {/* Logo - LEFT */}
            <div
                className={cn(
                    "flex items-center space-x-6 px-6 rounded-full border border-border bg-background/80 backdrop-blur-3xl shadow-lg transition-all duration-300",
                    isScrolled ? "py-2" : "py-3"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center text-xl font-bold text-foreground">
                    <Image src="/next.svg" alt="logo" width={70} height={56} />
                </Link>

                {/* Nav Items */}
                <div className="hidden md:flex items-center space-x-4 ml-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer",
                                activeSection === item.href
                                    ? "text-primary"
                                    : "text-foreground hover:text-primary"
                            )}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}

                    {/* Apply Now Button */}
                    <button
                        onClick={() => window.open("https://tally.so/r/n0Yp8j", "_blank")}
                        className="bg-gradient-to-r from-primary to-orange-500 border border-primary/20 rounded-full px-4 py-1.5 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,107,53,0.25)]"
                    >
                        <span className="font-bold text-white text-sm">Apply Now</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-64 bg-background backdrop-blur-lg shadow-lg border-l border-border z-40 flex flex-col items-start justify-center p-8 space-y-6 transform transition-transform duration-300 md:hidden",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden   p-2 text-foreground z-50 self-end"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        aria-current={activeSection === item.href ? "page" : undefined}
                        className={cn(
                            "flex items-center gap-3 text-xl px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer w-full",
                            activeSection === item.href
                                ? " text-primary"
                                : "text-foreground hover:text-primary"
                        )}
                    >
                        {item.icon}
                        {item.name}
                    </Link>


                ))}
                <button
                    onClick={() => window.open('https://tally.so/r/n0Yp8j', '_blank')}
                    className="bg-gradient-to-r from-primary to-orange-500 border border-primary/20 rounded-full px-4 py-1.5 hover:shadow-[0_8px_32px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(255,107,53,0.25)]"
                >
                    <span className="font-bold text-white text-sm">Apply Now</span>
                </button>
            </div>
        </nav>
    );
};
