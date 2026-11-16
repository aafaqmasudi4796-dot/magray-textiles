'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Menu,
    X,
    ChevronDown,
    ArrowUpRight,
    Sparkles,
    Phone,
    Mail,
    Layers,
    ShieldCheck,
    Package,
    MessageCircle,
} from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
    dropdown?: boolean;
}

const navLinks: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', dropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const featuredProducts = [
    {
        name: 'Cotton & Muslin',
        desc: '100% pure organic fibers, cloud-soft and naturally breathable',
        icon: Package,
        href: '/products#cotton',
    },
    {
        name: 'Silk & Satin',
        desc: 'Lustrous mulberry sheen, mirror gloss and festive liquid fall',
        icon: Layers,
        href: '/products#silk',
    },
    {
        name: 'Wool & Velvet',
        desc: 'Fine winter warmth, tailored structure and rich plush pile',
        icon: ShieldCheck,
        href: '/products#wool',
    },
    {
        name: 'Makhmal & Lace',
        desc: 'Heritage Kashmiri embroidery velvet and ornate cutwork filigree',
        icon: Sparkles,
        href: '/products#makhmal',
    },
    {
        name: 'Chiffon & Georgette',
        desc: 'Ultra-light sheer float, textured crêpe drape for dupattas & suits',
        icon: Sparkles,
        href: '/products#chiffon',
    },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            setIsScrolled(currentScrollY > 10);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });
        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-auto ${isScrolled || mobileMenuOpen
                ? 'bg-black border-b border-white shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                : 'bg-transparent border-b border-transparent shadow-none'
                }`}
        >
            {/* TOP ANNOUNCEMENT BAR */}
            <div
                className={`transition-colors duration-300 ${isScrolled || mobileMenuOpen
                    ? 'bg-black border-b border-white/10 text-white'
                    : 'bg-transparent border-b border-transparent text-white'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 h-8 sm:h-9 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2 tracking-wide font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] sm:text-[11px] font-semibold border border-amber-400/30">
                            <Sparkles size={10} className="text-amber-300 shrink-0" />
                            Magray Originals
                        </span>
                        <span className="hidden md:inline text-slate-200 text-[11px]">
                            Magray Textiles — Luxury Handcrafted Suits • Thaan • All Over
                        </span>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-4 text-slate-200 text-[10px] sm:text-[11px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        <a
                            href="tel:+917889330874"
                            className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                            title="Call +91 7889330874"
                        >
                            <Phone size={11} className="text-amber-400 shrink-0" />
                            <span className="hidden sm:inline">+91 7889330874</span>
                            <span className="sm:hidden font-semibold">Call</span>
                        </a>
                        <span className="text-white/30">|</span>
                        <a
                            href="mailto:irshadsuhaib858@gmail.com"
                            className="flex items-center gap-1 hover:text-amber-300 transition-colors"
                            title="Email irshadsuhaib858@gmail.com"
                        >
                            <Mail size={11} className="text-amber-400 shrink-0" />
                            <span className="hidden sm:inline">irshadsuhaib858@gmail.com</span>
                            <span className="sm:hidden font-semibold">Email</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav
                className={`bg-transparent border-none transition-all duration-300 ${isScrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 flex items-center justify-between">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                        <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-amber-500/80 shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300 bg-black shrink-0 ring-1 ring-white/20">
                            <Image
                                src="/images/logo.jpg"
                                alt="Magray Textiles Logo"
                                fill
                                sizes="48px"
                                priority
                                className="object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-col drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                            <span className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-none">
                                MAGRAY <span className="text-amber-400">TEXTILES</span>
                            </span>
                            <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-slate-300 uppercase mt-0.5 sm:mt-1">
                                Suits • Thaan • All Over
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white hover:text-amber-400 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)] transition-colors duration-200"
                                >
                                    <span>{link.name}</span>
                                    {link.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className="transition-transform duration-300 group-hover:rotate-180 text-white/70 group-hover:text-amber-400"
                                        />
                                    )}
                                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                </Link>

                                {/* PRODUCTS DROPDOWN */}
                                {link.dropdown && (
                                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-[400px]">
                                        <div className="bg-[#0B0A16]/95 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 overflow-hidden text-white">
                                            <div className="p-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-xl text-white mb-2">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-bold text-white">Fabric Collections</p>
                                                    <span className="text-[10px] uppercase font-bold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                                                        13 Fabrics
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-300 mt-0.5">
                                                    Available in Suits, Thaan, and All Over cuts
                                                </p>
                                            </div>

                                            <div className="space-y-1">
                                                {featuredProducts.map((item) => {
                                                    const IconComponent = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                                                        >
                                                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-colors">
                                                                <IconComponent size={16} />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-xs font-bold text-white group-hover/item:text-amber-400 transition-colors">
                                                                    {item.name}
                                                                </p>
                                                                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                                                    {item.desc}
                                                                </p>
                                                            </div>
                                                            <ArrowUpRight
                                                                size={14}
                                                                className="text-slate-500 group-hover/item:text-amber-400 transition-colors mt-0.5"
                                                            />
                                                        </Link>
                                                    );
                                                })}
                                            </div>

                                            <div className="mt-2 pt-2 border-t border-white/10 px-2 pb-1">
                                                <Link
                                                    href="/products"
                                                    className="flex items-center justify-between text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors py-1.5 px-2 rounded-lg hover:bg-white/5"
                                                >
                                                    <span>Explore All 13 Fabrics Catalog</span>
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT CTA BUTTONS */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://wa.me/917889330874?text=Hello%20Magray%20Textiles,%20I%20am%20interested%20in%20your%20fabrics."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
                        >
                            <MessageCircle size={15} className="fill-current" />
                            <span>WhatsApp</span>
                        </a>

                        <Link
                            href="/contact"
                            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:border-amber-400"
                        >
                            <span>Inquire Now</span>
                            <ArrowUpRight size={14} className="text-amber-400" />
                        </Link>
                    </div>

                    {/* MOBILE MENU TOGGLE BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* MOBILE MENU ACCORDION (FROSTED GLASS) */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
                        ? 'max-h-[85vh] opacity-100 border-t border-white/10 mt-2 pt-2 overflow-y-auto'
                        : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="px-3 sm:px-6 pb-6 space-y-2 bg-[#0B0A16]/95 backdrop-blur-2xl rounded-2xl mx-2 sm:mx-4 mt-2 border border-white/10 shadow-2xl">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <div>
                                        <button
                                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white font-bold hover:bg-white/10 transition-colors"
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                                                    }`}
                                            />
                                        </button>

                                        {mobileProductsOpen && (
                                            <div className="ml-3 pl-3 border-l-2 border-amber-400/60 space-y-1 my-1">
                                                {featuredProducts.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="block px-3 py-2 text-xs font-semibold text-slate-300 hover:text-amber-400 rounded-lg hover:bg-white/5"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <Link
                                                    href="/products"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block px-3 py-2 text-xs font-bold text-amber-400 rounded-lg hover:bg-white/5"
                                                >
                                                    All 13 Fabrics Collection →
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-between px-4 py-3 rounded-xl text-white font-bold hover:bg-white/10 hover:text-amber-400 transition-colors"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={14} className="text-slate-400" />
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="pt-2 grid grid-cols-2 gap-2">
                            <a
                                href="https://wa.me/917889330874?text=Hello%20Magray%20Textiles,%20I%20am%20interested%20in%20your%20fabrics."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1.5 py-3.5 rounded-full bg-[#25D366] text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm"
                            >
                                <MessageCircle size={16} className="fill-current" />
                                <span>WhatsApp</span>
                            </a>
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-1.5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white font-black text-xs uppercase tracking-wider shadow-sm"
                            >
                                <span>Inquire</span>
                                <ArrowUpRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
