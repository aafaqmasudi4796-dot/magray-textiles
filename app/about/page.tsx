import React from 'react';
import Navbar from '../Components/Navbar';
import AboutSection from '../Components/About';
import Footer from '../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'About Us | Megray Textiles',
    description:
        'Redefining Style. Celebrating Comfort. Learn how Megray Textiles brings together fashion, quality, and timeless style.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col justify-between">
            <div className="relative">
                <Navbar />

                {/* FULL-SCREEN HERO BANNER WITH OVERLAID TEXT */}
                <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center mt-0 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden text-white">
                    {/* FULL-SCREEN BACKGROUND IMAGE */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/about-hero.jpg"
                            alt="Megray Textiles Embroidered Fabrics Background"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center sm:object-[center_35%]"
                        />
                        {/* Soft subtle tint so text stays sharp while background image is 100% natural and clear */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* OVERLAID CONTENT (SHIFTED TO THE LEFT - NO BACKGROUND SHADE) */}
                    <div className="max-w-7xl mx-auto w-full relative z-10">
                        <div className="max-w-2xl text-left">
                            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs sm:text-sm font-semibold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                                <Sparkles size={14} className="text-amber-400 shrink-0" />
                                <span>Our Story & Philosophy • Srinagar, Kashmir</span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                                About Megray Textiles
                            </h1>

                            <p className="text-slate-100 text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                                Clothing that looks good, feels comfortable, and fits effortlessly into your lifestyle. At Megray Textiles, we believe that fabric is more than just material—it is a timeless expression of elegance, comfort, and authentic Kashmiri craftsmanship.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
                                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                                    <span>100% Pure Natural Fabrics</span>
                                </div>
                                <span className="text-white/40 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">•</span>
                                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                                    <span>Suits, Thaan & All Over</span>
                                </div>
                                <span className="text-white/40 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">•</span>
                                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                                    <span>Direct from Srinagar</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                <Link
                                    href="/products"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-2xl transition-all hover:scale-105"
                                >
                                    <span>Explore 13 Fabrics Collection</span>
                                    <ArrowRight size={14} />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all"
                                >
                                    <span>Contact Specialists</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAIN ABOUT COMPONENT WITH USER CONTENT */}
                <AboutSection />

                {/* VALUES SECTION */}
                <section className="py-16 bg-slate-50 border-t border-slate-200/70 px-4 sm:px-6 lg:px-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h3 className="text-2xl font-black text-[#071B35]">What Sets Us Apart</h3>
                            <p className="text-xs sm:text-sm text-slate-600 mt-2">
                                Every garment from Megray Textiles is a testament to dedicated craftsmanship.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                                <Award className="text-[#155EEF] mb-4" size={28} />
                                <h4 className="text-base font-bold text-[#071B35] mb-2">Curated Fabric Selection</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Only materials that meet our stringent touch, feel, and durability standards are chosen.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                                <ShieldCheck className="text-[#155EEF] mb-4" size={28} />
                                <h4 className="text-base font-bold text-[#071B35] mb-2">Meticulous Tailoring</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Thoughtfully designed cuts ensuring comfort without compromising on modern silhouette.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                                <HeartHandshake className="text-[#155EEF] mb-4" size={28} />
                                <h4 className="text-base font-bold text-[#071B35] mb-2">Customer First</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    We listen to our patrons and continuously innovate to enhance style and everyday ease.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#071B35] hover:bg-[#155EEF] text-white text-xs sm:text-sm font-bold transition-colors"
                            >
                                <span>Speak to Our Specialists</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
