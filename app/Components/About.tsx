'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Heart, Shield, CheckCircle } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-14 sm:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* LEFT COLUMN: Visual Brand Card */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl bg-gradient-to-br from-[#071B35] via-[#0D284D] to-[#155EEF] p-6 sm:p-10 text-white shadow-2xl shadow-blue-900/20 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-cyan-300 mb-8">
                                <Sparkles size={13} className="text-cyan-300" />
                                <span>About Megray Textiles</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-6">
                                Crafting garments that celebrate you.
                            </h3>

                            <div className="space-y-4 text-xs sm:text-sm text-slate-200/90 border-t border-white/10 pt-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle size={13} />
                                    </div>
                                    <span>Carefully selected, premium grade fabrics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle size={13} />
                                    </div>
                                    <span>Thoughtful designs engineered for effortless fit</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle size={13} />
                                    </div>
                                    <span>Meticulous attention to detail and durability</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-black text-white">Magray Textiles</p>
                                    <p className="text-[11px] text-amber-300 tracking-wider uppercase font-semibold">
                                        Quality • Trust • Style
                                    </p>
                                </div>
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg bg-black shrink-0">
                                    <Image
                                        src="/images/logo.jpg"
                                        alt="Magray Textiles Logo"
                                        fill
                                        sizes="56px"
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The User's Text */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#155EEF] mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#155EEF]" />
                            Our Philosophy
                        </div>

                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071B35] tracking-tight leading-tight mb-5 sm:mb-6">
                            Redefining Style. <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155EEF] to-[#38BDF8]">
                                Celebrating Comfort.
                            </span>
                        </h2>

                        <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p className="font-medium text-[#071B35]">
                                At Megray Textiles, we believe clothing is more than just fabric — it is a reflection of personality, confidence, and individuality.
                            </p>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Our journey is driven by a passion for fashion, quality, and timeless style. We bring together carefully selected fabrics, thoughtful designs, and attention to detail to create clothing that looks good, feels comfortable, and fits effortlessly into your lifestyle.
                            </p>
                        </div>

                        {/* HIGHLIGHT PILLARS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#071B35]">Comfort-First Design</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Soft, breathable materials crafted for all-day wear.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#071B35]">Timeless Quality</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Exceptional longevity, rich textures, and enduring style.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex items-center gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#155EEF] to-[#0879E8] hover:from-[#071B35] hover:to-[#155EEF] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all duration-300"
                            >
                                <span>Discover Our Collection</span>
                                <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 hover:text-[#155EEF] hover:border-blue-200 text-xs sm:text-sm font-bold transition-colors"
                            >
                                <span>Get in Touch</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

