import { Button } from './ui/button';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Programs', href: '#programs' },
        { label: 'Events', href: '#events' },
        { label: 'Contact', href: '#contact' },
    ];

    const programs = [
        { label: 'Tech Fellowship', href: '#' },
        { label: 'Policy Innovation', href: '#' },
        { label: 'Entrepreneurship', href: '#' },
        { label: 'Summer Programs', href: '#' },
    ];

    const resources = [
        { label: 'Application Guide', href: '#' },
        { label: 'Success Stories', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'FAQ', href: '#' },
    ];

    const legal = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
    ];

    const socialLinks = [
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-white text-foreground py-16 relative border-t shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <Link href="/" className="flex items-center text-xl font-bold text-foreground">
                                <Image src="/next.svg" alt="logo" width={70} height={56} />
                            </Link>
                        </div>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            Connecting ambitious high schoolers with elite opportunities in tech, policy, and entrepreneurship.
                            Your future starts here.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                                <Mail className="w-4 h-4 mr-2" />
                                hello@axioma.org
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                                <Phone className="w-4 h-4 mr-2" />
                                +1 (555) 123-4567
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                                <MapPin className="w-4 h-4 mr-2" />
                                San Francisco, CA
                            </div>
                        </div>

                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-semibold mb-4">Programs</h4>
                        <ul className="space-y-2">
                            {programs.map((program, index) => (
                                <li key={index}>
                                    <a
                                        href={program.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                                    >
                                        {program.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 mb-6">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <a
                                        href={resource.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                                    >
                                        {resource.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {legal.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h4 className="font-semibold mb-4">Stay Updated</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Get the latest updates on new programs and opportunities
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Axioma. All rights reserved. Made with ❤️ for ambitious high schoolers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;