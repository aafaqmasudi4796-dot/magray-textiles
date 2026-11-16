'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppBar() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '917889330874';
    const defaultMessage = 'Hello Megray Textiles, I am interested in your fabric and clothing collection.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <aside aria-label="WhatsApp quick chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none">
            {/* MINI POPUP / CHAT TOOLTIP */}
            {isOpen && (
                <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 rounded-2xl bg-[#030C16] text-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* POPUP HEADER */}
                    <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-amber-400/60 shadow-sm bg-black shrink-0">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Magray Textiles Logo"
                                    fill
                                    sizes="44px"
                                    className="object-cover object-center"
                                />
                                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54] z-10" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-white leading-tight">Magray Textiles</h4>
                                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                                    <span>Online</span> • Instant Support
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
                            aria-label="Close WhatsApp chat"
                        >
                            <X size={15} />
                        </button>
                    </div>

                    {/* POPUP BODY */}
                    <div className="p-4 bg-[#0A1625] text-slate-200 text-xs space-y-3">
                        <div className="bg-[#10233A] p-3 rounded-xl rounded-tl-none border border-white/10 max-w-[90%] shadow-sm">
                            <p className="leading-relaxed">
                                👋 Welcome to <strong>Megray Textiles</strong>!
                            </p>
                            <p className="mt-1.5 text-slate-300">
                                Need custom cuts, pricing, or catalog details? Message us directly on WhatsApp.
                            </p>
                            <span className="block text-[10px] text-slate-400 text-right mt-1">
                                Typically replies in minutes
                            </span>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
                        >
                            <Send size={14} className="fill-current" />
                            <span>Start WhatsApp Chat</span>
                        </a>

                        <div className="text-center text-[10px] text-slate-400 pt-1">
                            Direct Line: +91 7889330874
                        </div>
                    </div>
                </div>
            )}

            {/* FLOATING ACTION BUTTON */}
            <div className="flex items-center gap-3">
                {!isOpen && (
                    <div
                        onClick={() => setIsOpen(true)}
                        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#030C16]/90 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xl cursor-pointer hover:border-emerald-400 transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        <span>Chat on WhatsApp</span>
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Open WhatsApp conversation"
                    className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 active:scale-95"
                >
                    {/* Pulsing Outer Rings */}
                    <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
                    
                    {isOpen ? (
                        <X size={26} strokeWidth={2.5} />
                    ) : (
                        <MessageCircle size={30} className="fill-white" />
                    )}
                </button>
            </div>
        </aside>
    );
}

