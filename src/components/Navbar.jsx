import React, { useState } from "react";
import { navContent } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
    const { brand, navLinks } = navContent;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="nav-bar bg-[#1C120C]/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="text-[#F4E1C1] text-2xl font-extrabold tracking-widest hover:text-[#B7C37A] transition-colors duration-300"
                        >
                            {brand}
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#D6C3A3] hover:text-[#B7C37A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#D6C3A3] hover:text-[#B7C37A] focus:outline-none focus:ring-2 focus:ring-[#B7C37A]"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <div className="text-base font-semibold">✕</div>
                            ) : (
                                <div className="text-base font-semibold">☰</div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#2F1E14] border-t border-[#3C2414] transition-all duration-300">
                    <div className="px-4 pt-3 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={toggleMenu}
                                className="block text-[#D6C3A3] hover:text-[#B7C37A] px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
