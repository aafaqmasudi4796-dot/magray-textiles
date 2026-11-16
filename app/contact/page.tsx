import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | Magray Textiles',
    description: 'Get in touch with Magray Textiles for custom orders, wholesale inquiries, or showroom visits.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#071B35] flex flex-col justify-between">
            <div>
                <Navbar />

                {/* HEADER */}
                <div className="bg-[#071B35] text-white mt-0 pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 text-center">
                    <span className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                        Suits • Thaan • All Over
                    </span>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-1 mb-2 sm:mb-3">
                        Contact Magray Textiles
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                        We welcome inquiries from fashion houses, retailers, designers, and private collectors.
                    </p>
                </div>

                {/* FORM & DETAILS */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                        {/* INFO CARDS */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* WHATSAPP CARD */}
                            <div className="bg-[#25D366]/10 p-5 sm:p-6 rounded-2xl border border-[#25D366]/30 shadow-sm flex items-start gap-3.5 sm:gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                                    <MessageCircle size={22} className="fill-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[#071B35] text-sm">WhatsApp Chat</h3>
                                    <p className="text-xs text-slate-600 mt-1">Instant messaging & live photo previews</p>
                                    <a
                                        href="https://wa.me/917889330874?text=Hello%20Magray%20Textiles,%20I%20am%20interested%20in%20your%20fabrics."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#20BD5A] transition-colors"
                                    >
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#071B35] text-sm">Call Us Directly</h3>
                                    <p className="text-xs text-slate-500 mt-1">Mon - Sat from 9am to 7pm IST</p>
                                    <a
                                        href="tel:+917889330874"
                                        className="text-sm font-semibold text-[#155EEF] mt-2 block"
                                    >
                                        +91 7889330874
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#071B35] text-sm">Email Inquiries</h3>
                                    <p className="text-xs text-slate-500 mt-1">We typically reply within 24 hours</p>
                                    <a
                                        href="mailto:irshadsuhaib858@gmail.com"
                                        className="text-sm font-semibold text-[#155EEF] mt-2 block break-all"
                                    >
                                        irshadsuhaib858@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="font-bold text-[#071B35] text-sm">Main Showroom & Weaving Center</h3>
                                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                            11, Barbar Shah, Satu Payeen, Srinagar, Jammu and Kashmir 190001
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-slate-100">
                                        <h3 className="font-bold text-[#071B35] text-sm">Secondary Branch</h3>
                                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                            Molvi Chowk Doorch Wani, Lolab, Kupwara, Jammu and Kashmir 193223
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INTERACTIVE CLIENT FORM */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
