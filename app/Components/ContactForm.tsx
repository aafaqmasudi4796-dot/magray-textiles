'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fabric, setFabric] = useState('Cotton (Suits / Thaan / All Over)');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp message with user details
        const text = `Hello Magray Textiles,%0A%0A*New Inquiry:*%0A*Name:* ${encodeURIComponent(name || 'Customer')}%0A*Email:* ${encodeURIComponent(email || 'Not provided')}%0A*Interested Fabric:* ${encodeURIComponent(fabric)}%0A*Message:* ${encodeURIComponent(message || 'Please send catalog and pricing details.')}`;

        window.open(`https://wa.me/917889330874?text=${text}`, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
            <h2 className="text-xl sm:text-2xl font-black text-[#071B35] mb-2">Send an Inquiry</h2>
            <p className="text-xs text-slate-500 mb-6">
                Fill in your details below to connect directly with our sales team via WhatsApp or email.
            </p>

            {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>Inquiry window opened! Our master weavers will get in touch with you shortly.</span>
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                            Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select Fabric of Interest
                    </label>
                    <select
                        value={fabric}
                        onChange={(e) => setFabric(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white text-slate-800"
                    >
                        <option>Cotton (Suits / Thaan / All Over)</option>
                        <option>Linen (Suits / Thaan / All Over)</option>
                        <option>Silk (Suits / Thaan / All Over)</option>
                        <option>Wool (Suits / Thaan / All Over)</option>
                        <option>Polyester</option>
                        <option>Rayon / Viscose</option>
                        <option>Velvet</option>
                        <option>Chiffon</option>
                        <option>Makhmal (Traditional Kashmiri Velvet)</option>
                        <option>Georgette</option>
                        <option>Satin</option>
                        <option>Lace</option>
                        <option>Muslin</option>
                        <option>Bulk Wholesale Thaan Orders</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                        Message, Meters, or Specifications
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Specify color requirements, meterage, cuts, or wholesale details..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
                    >
                        <MessageCircle size={16} className="fill-current" />
                        <span>Send via WhatsApp</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            window.location.href = `mailto:irshadsuhaib858@gmail.com?subject=Fabric Inquiry: ${encodeURIComponent(fabric)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                        <Send size={15} />
                        <span>Send via Email</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

