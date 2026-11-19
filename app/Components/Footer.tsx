'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#071B35] text-white border-t border-blue-950/50">
            {/* MAIN FOOTER CONTENT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

                    {/* BRAND COLUMN */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-3.5 group inline-flex">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-md bg-black shrink-0 group-hover:scale-105 transition-transform">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Magray Textiles Logo"
                                    fill
                                    sizes="48px"
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tight text-white leading-none">
                                    MAGRAY <span className="text-amber-400">TEXTILES</span>
                                </span>
                                <span className="text-[9px] font-semibold tracking-[0.2em] text-amber-200/90 uppercase mt-1">
                                    Suits • Thaan • All Over
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
                            Redefining style and celebrating comfort with carefully selected fabrics, thoughtful designs, and attention to detail for effortless modern living.
                        </p>

                        <div className="pt-2 flex items-center gap-2 text-xs text-cyan-300">
                            <Sparkles size={14} />
                            <span>Authentic Kashmiri Weaves & Handloom Collections</span>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-300">
                            <li>
                                <Link href="/" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1">
                                    <span>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1">
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1">
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COLLECTIONS */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white mb-4">
                            Fabric Collections
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                            <li>
                                <Link href="/products#cotton" className="hover:text-amber-400 transition-colors">
                                    Cotton & Muslin
                                </Link>
                            </li>
                            <li>
                                <Link href="/products#silk" className="hover:text-amber-400 transition-colors">
                                    Silk & Satin
                                </Link>
                            </li>
                            <li>
                                <Link href="/products#wool" className="hover:text-amber-400 transition-colors">
                                    Wool & Velvet
                                </Link>
                            </li>
                            <li>
                                <Link href="/products#makhmal" className="hover:text-amber-400 transition-colors">
                                    Makhmal & Lace
                                </Link>
                            </li>
                            <li>
                                <Link href="/products#chiffon" className="hover:text-amber-400 transition-colors">
                                    Chiffon & Georgette
                                </Link>
                            </li>
                            <li>
                                <Link href="/products#linen" className="hover:text-amber-400 transition-colors">
                                    Linen & Rayon / Viscose
                                </Link>
                            </li>
                            <li>
                                <Link href="/products#polyester" className="hover:text-amber-400 transition-colors">
                                    Polyester & Blends
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white mb-4">
                            Contact & Inquiries
                        </h4>
                        <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                                <div className="leading-snug">
                                    <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Main Address:</span>
                                    <span>11, Barbar Shah, Satu Payeen, Near Saboor Shrine, Srinagar, Jammu and Kashmir 190001</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-[#38BDF8] shrink-0 mt-0.5" />
                                <div className="leading-snug">
                                    <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Secondary Address:</span>
                                    <span>Molvi Chowk Doorch Wani, Lolab, Kupwara, Jammu and Kashmir 193223</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={15} className="text-[#38BDF8] shrink-0" />
                                <a href="tel:+917889330874" className="hover:text-white transition-colors">
                                    +91 7889330874
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={15} className="text-[#38BDF8] shrink-0" />
                                <a href="mailto:irshadsuhaib858@gmail.com" className="hover:text-white transition-colors break-all">
                                    irshadsuhaib858@gmail.com
                                </a>
                            </li>
                            <li className="pt-1">
                                <a
                                    href="https://wa.me/917889330874?text=Hello%20Megray%20Textiles,%20I%20am%20interested%20in%20your%20fabrics."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#20BD5A] transition-colors"
                                >
                                    <MessageCircle size={14} className="fill-current" />
                                    <span>WhatsApp Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-white/10 bg-[#051329]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>© 2026 Magray Textiles. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/about" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <span>•</span>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Bespoke Orders
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

