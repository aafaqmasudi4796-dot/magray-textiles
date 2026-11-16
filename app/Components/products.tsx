'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Sparkles,
    CheckCircle2,
    ArrowUpRight,
    MessageCircle,
    Search,
    Tag,
    ChevronDown,
    Info,
    Shield,
    Sparkle,
} from 'lucide-react';

export interface ProductFabric {
    id: string;
    name: string;
    tag: string;
    category: 'Natural' | 'Luxury' | 'Sheer' | 'Everyday';
    image: string;
    description: string;
    composition: string;
    typicalGsm: string;
    texture: string;
    properties: string;
    uses: string;
    care: string;
    note?: string;
    cuts: string;
    badgeColor: string;
    gradient: string;
}

export const allFabrics: ProductFabric[] = [
    {
        id: 'cotton',
        name: 'Cotton',
        tag: 'Everyday Breathability',
        category: 'Natural',
        image: '/images/fabrics/cotton.jpg',
        description:
            'Cotton is a natural fibre obtained from the cotton plant. It is soft, breathable, lightweight and highly comfortable, making it suitable for everyday clothing and all-season wear.',
        composition: '100% natural cotton (or blended)',
        typicalGsm: '100–250',
        texture: 'Soft, smooth and breathable',
        properties: 'Absorbent, durable and skin-friendly',
        uses: 'Shirts, T-shirts, dresses, kurtas and bedsheets.',
        care: 'Machine wash; moderate ironing.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        gradient: 'from-emerald-950/80 to-teal-950/90',
    },
    {
        id: 'linen',
        name: 'Linen',
        tag: 'Crisp Natural Flax',
        category: 'Natural',
        image: '/images/fabrics/linen.jpg',
        description:
            'Linen is a premium natural fabric made from flax plant fibres. It is known for its excellent breathability, cooling properties and elegant natural texture.',
        composition: '100% flax linen (or blended)',
        typicalGsm: '120–250',
        texture: 'Crisp, slightly coarse and textured',
        properties: 'Highly breathable, moisture-absorbent and strong',
        uses: 'Summer shirts, trousers, dresses and suits.',
        care: 'Gentle washing; iron while slightly damp.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        gradient: 'from-amber-950/80 to-stone-900/90',
    },
    {
        id: 'silk',
        name: 'Silk',
        tag: 'Royal Protein Luster',
        category: 'Luxury',
        image: '/images/fabrics/silk.jpg',
        description:
            'Silk is a luxurious natural protein fibre produced by silkworms. It is admired for its smooth surface, natural shine, elegant drape and premium appearance.',
        composition: '100% natural silk (or blended)',
        typicalGsm: '30–100',
        texture: 'Exceptionally smooth and soft',
        properties: 'Lustrous, lightweight and temperature-regulating',
        uses: 'Sarees, gowns, scarves, dresses and luxury garments.',
        care: 'Prefer professional dry cleaning.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        gradient: 'from-purple-950/80 to-indigo-950/90',
    },
    {
        id: 'wool',
        name: 'Wool',
        tag: 'Insulating Natural Warmth',
        category: 'Natural',
        image: '/images/fabrics/wool.jpg',
        description:
            'Wool is a natural animal fibre commonly obtained from sheep. It provides excellent insulation and warmth while remaining breathable and comfortable.',
        composition: '100% wool (or blended)',
        typicalGsm: '150–400',
        texture: 'Soft, warm and slightly fuzzy',
        properties: 'Insulating, elastic and moisture-regulating',
        uses: 'Sweaters, coats, jackets, suits and winter wear.',
        care: 'Gentle hand wash or dry clean, depending on the garment.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        gradient: 'from-blue-950/80 to-slate-900/90',
    },
    {
        id: 'polyester',
        name: 'Polyester',
        tag: 'Durable & Quick-Drying',
        category: 'Everyday',
        image: '/images/fabrics/polyester.jpg',
        description:
            'Polyester is a synthetic fabric made from polymer-based fibres. It is popular for its durability, wrinkle resistance, quick-drying properties and easy maintenance.',
        composition: '100% polyester (or blended)',
        typicalGsm: '50–250',
        texture: 'Smooth, soft or slightly textured',
        properties: 'Durable, wrinkle-resistant and quick-drying',
        uses: 'Sportswear, uniforms, dresses, jackets and casual clothing.',
        care: 'Machine wash; low-temperature ironing.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
        gradient: 'from-cyan-950/80 to-slate-900/90',
    },
    {
        id: 'rayon-viscose',
        name: 'Rayon / Viscose',
        tag: 'Fluid Regenerated Cellulose',
        category: 'Everyday',
        image: '/images/fabrics/rayon.jpg',
        description:
            'Rayon, commonly sold as viscose, is a regenerated cellulose fibre generally made from wood pulp. It offers a soft feel, fluid drape and appearance similar to natural fibres.',
        composition: 'Regenerated cellulose',
        typicalGsm: '80–180',
        texture: 'Smooth, soft and silky',
        properties: 'Breathable, absorbent and beautifully draped',
        uses: 'Dresses, kurtis, shirts, skirts and scarves.',
        care: 'Gentle washing; avoid excessive wringing.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
        gradient: 'from-teal-950/80 to-emerald-950/90',
    },
    {
        id: 'velvet',
        name: 'Velvet',
        tag: 'Plush Dense Pile',
        category: 'Luxury',
        image: '/images/fabrics/velvet.jpg',
        description:
            'Velvet is a luxurious fabric characterised by a dense, short pile that gives it a soft touch and rich appearance. It can be produced using silk, cotton, polyester or blended fibres.',
        composition: 'Silk, cotton, polyester or blends',
        typicalGsm: '180–350',
        texture: 'Plush, soft and dense',
        properties: 'Rich appearance, smooth pile and warmth',
        uses: 'Evening gowns, blazers, jackets, ethnic wear and upholstery.',
        care: 'Professional dry cleaning is generally recommended.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        gradient: 'from-rose-950/80 to-neutral-900/90',
    },
    {
        id: 'chiffon',
        name: 'Chiffon',
        tag: 'Delicate Sheer Twist',
        category: 'Sheer',
        image: '/images/fabrics/chiffon.jpg',
        description:
            'Chiffon is a lightweight, sheer fabric made with fine, tightly twisted yarns. It has a delicate appearance and flowing drape, making it popular for elegant garments.',
        composition: 'Silk, polyester or nylon',
        typicalGsm: '20–60',
        texture: 'Lightweight, airy and slightly grainy',
        properties: 'Transparent, fluid and delicate',
        uses: 'Sarees, dupattas, scarves, gowns and overlays.',
        care: 'Gentle hand washing or dry cleaning.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
        gradient: 'from-sky-950/80 to-indigo-950/90',
    },
    {
        id: 'makhmal',
        name: 'Makhmal',
        tag: 'Traditional Kashmiri Velvet',
        category: 'Luxury',
        image: '/images/fabrics/makhmal.jpg',
        description:
            'Makhmal is the traditional Urdu/Hindi name for velvet. It is a rich, soft and plush fabric with a raised pile surface, traditionally associated with luxury and traditional clothing.',
        composition: 'Silk, cotton, polyester or blends',
        typicalGsm: '180–350',
        texture: 'Thick, soft and velvety',
        properties: 'Luxurious finish, warmth and rich colour depth',
        uses: 'Traditional suits, sherwanis, bridal wear, shawls and decorative garments.',
        care: 'Prefer professional dry cleaning.',
        note: 'Makhmal and velvet refer to the same fabric category, so their specifications are generally identical.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        gradient: 'from-amber-950/90 to-red-950/90',
    },
    {
        id: 'georgette',
        name: 'Georgette',
        tag: 'Grainy Crêpe Fall',
        category: 'Sheer',
        image: '/images/fabrics/georgette.jpg',
        description:
            'Georgette is a lightweight, flowing fabric traditionally made from silk and also available in synthetic fibres. Its slightly crinkled texture gives garments an elegant and graceful appearance.',
        composition: 'Silk, polyester or viscose',
        typicalGsm: '40–100',
        texture: 'Grainy, slightly rough and flowing',
        properties: 'Lightweight, semi-sheer and drapable',
        uses: 'Sarees, dresses, gowns, kurtis and dupattas.',
        care: 'Gentle washing or dry cleaning.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
        gradient: 'from-indigo-950/80 to-blue-950/90',
    },
    {
        id: 'satin',
        name: 'Satin',
        tag: 'Glossy Front & Liquid Shine',
        category: 'Luxury',
        image: '/images/fabrics/satin.jpg',
        description:
            'Satin is a fabric characterised by a glossy front surface and a relatively dull back. Its smooth finish and elegant shine make it popular for premium fashion and occasion wear.',
        composition: 'Silk, polyester, nylon or viscose',
        typicalGsm: '80–200',
        texture: 'Smooth, glossy and slippery',
        properties: 'Lustrous, soft and fluid',
        uses: 'Nightwear, gowns, bridal dresses, blouses and linings.',
        care: 'Gentle washing; low-temperature ironing.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
        gradient: 'from-yellow-950/80 to-neutral-900/90',
    },
    {
        id: 'lace',
        name: 'Lace',
        tag: 'Openwork Pattern & Filigree',
        category: 'Luxury',
        image: '/images/fabrics/lace.jpg',
        description:
            'Lace is a decorative openwork textile created through intricate loops, knots or embroidery patterns. It is widely used to add elegance and delicate detailing to garments.',
        composition: 'Cotton, silk, nylon or polyester',
        typicalGsm: '30–150',
        texture: 'Delicate, patterned and sometimes raised',
        properties: 'Decorative, lightweight and often transparent',
        uses: 'Bridal gowns, dresses, sleeves, dupattas and garment borders.',
        care: 'Gentle hand washing; avoid snagging.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-pink-100 text-pink-800 border-pink-300',
        gradient: 'from-pink-950/80 to-slate-900/90',
    },
    {
        id: 'muslin',
        name: 'Muslin',
        tag: 'Gossamer Plain-Weave Cotton',
        category: 'Natural',
        image: '/images/fabrics/muslin.jpg',
        description:
            'Muslin is a lightweight, plain-weave fabric traditionally made from cotton. It is valued for its softness, breathability and versatility in clothing and textile applications.',
        composition: 'Usually 100% cotton',
        typicalGsm: '40–120',
        texture: 'Soft, lightweight and finely woven',
        properties: 'Breathable, absorbent and comfortable',
        uses: 'Baby clothing, summer dresses, kurtas, scarves and garment samples.',
        care: 'Machine wash or gentle hand wash.',
        cuts: 'Suits • Thaan • All Over',
        badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
        gradient: 'from-slate-900/80 to-zinc-900/90',
    },
];

const categoryTabs = [
    { label: 'All Fabrics', value: 'ALL', count: 13 },
    { label: 'Natural Fibers', value: 'Natural', count: 5 },
    { label: 'Luxury & Festive', value: 'Luxury', count: 5 },
    { label: 'Sheer & Flowing', value: 'Sheer', count: 2 },
    { label: 'Everyday & Blends', value: 'Everyday', count: 2 },
];

export default function ProductsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

    const toggleSpecs = (id: string) => {
        setExpandedSpecs((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredFabrics = useMemo(() => {
        return allFabrics.filter((fabric) => {
            const matchesCat =
                selectedCategory === 'ALL' || fabric.category === selectedCategory;
            const matchesSearch =
                fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                fabric.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                fabric.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                fabric.uses.toLowerCase().includes(searchQuery.toLowerCase()) ||
                fabric.composition.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <section id="products" className="py-24 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                
                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300/80 shadow-sm">
                        <Sparkles size={13} className="text-amber-700" />
                        Complete Fabric Catalog
                    </span>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071B35] tracking-tight">
                        Our Signature Textile Collection
                    </h2>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Detailed specifications, composition, GSM, textures, and care instructions for all 13 authentic fabrics. Available in <strong>Suits</strong>, <strong>Thaan</strong>, and <strong>All Over</strong> cuts.
                    </p>
                </div>

                {/* FILTER TABS & SEARCH BAR */}
                <div className="mb-8 sm:mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    {/* Category Tabs with horizontal scroll on mobile */}
                    <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                        {categoryTabs.map((tab) => {
                            const isActive = selectedCategory === tab.value;
                            return (
                                <button
                                    key={tab.value}
                                    onClick={() => setSelectedCategory(tab.value)}
                                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                                        isActive
                                            ? 'bg-[#071B35] text-white shadow-md shadow-blue-950/20'
                                            : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                                    }`}
                                >
                                    <span>{tab.label}</span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                                            isActive
                                                ? 'bg-amber-400 text-slate-950'
                                                : 'bg-slate-100 text-slate-500'
                                        }`}
                                    >
                                        {tab.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <Search
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="text"
                            placeholder="Search fabric, GSM, composition, or use..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm"
                        />
                    </div>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFabrics.map((fabric) => {
                        const isExpanded = !!expandedSpecs[fabric.id];
                        const whatsappMessage = `Hello Magray Textiles, I am interested in inquiring about ${fabric.name} fabric (${fabric.cuts}).`;
                        const whatsappUrl = `https://wa.me/917889330874?text=${encodeURIComponent(
                            whatsappMessage
                        )}`;

                        return (
                            <div
                                key={fabric.id}
                                id={fabric.id}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
                            >
                                {/* IMAGE BANNER */}
                                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900">
                                    <Image
                                        src={fabric.image}
                                        alt={fabric.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${fabric.gradient} opacity-50`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                                    {/* Top Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                        <span
                                            className={`text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border backdrop-blur-md ${fabric.badgeColor}`}
                                        >
                                            {fabric.tag}
                                        </span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                                            GSM: {fabric.typicalGsm}
                                        </span>
                                    </div>

                                    {/* Bottom Title on Image */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                                            {fabric.name}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 mt-1">
                                            <Tag size={12} />
                                            <span>{fabric.cuts}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CARD BODY */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Description */}
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {fabric.description}
                                        </p>

                                        {/* QUICK SPECS TABLE */}
                                        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 text-xs space-y-2 mb-4">
                                            <div className="flex justify-between items-start">
                                                <span className="font-bold text-slate-500 shrink-0">Composition:</span>
                                                <span className="text-slate-900 text-right font-semibold ml-2">
                                                    {fabric.composition}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-start">
                                                <span className="font-bold text-slate-500 shrink-0">Texture:</span>
                                                <span className="text-slate-900 text-right font-semibold ml-2">
                                                    {fabric.texture}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-start">
                                                <span className="font-bold text-slate-500 shrink-0">Properties:</span>
                                                <span className="text-slate-900 text-right font-semibold ml-2">
                                                    {fabric.properties}
                                                </span>
                                            </div>
                                        </div>

                                        {/* EXPANDABLE EXTENDED DETAILS */}
                                        {isExpanded && (
                                            <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/60 text-xs space-y-2 mb-4 animate-in fade-in duration-200">
                                                <div>
                                                    <span className="font-bold text-amber-900">Recommended Uses: </span>
                                                    <span className="text-slate-700">{fabric.uses}</span>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-amber-900">Care Instructions: </span>
                                                    <span className="text-slate-700">{fabric.care}</span>
                                                </div>
                                                {fabric.note && (
                                                    <div className="pt-1 text-[11px] text-amber-800 font-medium italic border-t border-amber-200/60">
                                                        Note: {fabric.note}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Toggle button */}
                                        <button
                                            type="button"
                                            onClick={() => toggleSpecs(fabric.id)}
                                            className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 mb-5"
                                        >
                                            <span>{isExpanded ? 'Hide Full Specs' : 'View Uses & Care Specs'}</span>
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-200 ${
                                                    isExpanded ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>
                                    </div>

                                    {/* BOTTOM ACTIONS */}
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
                                        >
                                            <MessageCircle size={14} className="fill-current" />
                                            <span>WhatsApp</span>
                                        </a>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-1 text-xs font-bold text-[#071B35] hover:text-[#155EEF] group-hover:translate-x-1 transition-all"
                                        >
                                            <span>Inquire Cut</span>
                                            <ArrowUpRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* NO RESULTS FALLBACK */}
                {filteredFabrics.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
                        <p className="text-base font-bold text-slate-700">No fabrics found matching "{searchQuery}"</p>
                        <p className="text-xs text-slate-500 mt-1">Try searching for Silk, Cotton, Velvet, Muslin, or Linen.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('ALL');
                                setSearchQuery('');
                            }}
                            className="mt-4 px-4 py-2 rounded-xl bg-[#071B35] text-white text-xs font-bold"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}

                {/* WHOLESALE & UNSTITCHED THAAN BANNER FEATURING IMAGE 5 */}
                <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#030C16] via-[#071B35] to-[#0A2540] p-6 sm:p-10 text-white border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
                    <div className="flex-1 z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
                            <Sparkles size={13} />
                            Unstitched Cloth Collection • Thaan Rolls
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                            Premium Unstitched Fabrics & Custom Cuts
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
                            100% Natural Fabrics • Ultra Soft Feel • Long Lasting Quality • Breathable & Comfortable.
                            Available for retail suits, unstitched thaan meterage, and wholesale supply across India.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="https://wa.me/917889330874?text=Hello%20Magray%20Textiles,%20I%20am%20interested%20in%20the%20Unstitched%20Cloth%20Collection%20and%20Thaan%20Rolls."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
                            >
                                <MessageCircle size={16} className="fill-current" />
                                <span>WhatsApp Orders</span>
                            </a>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                <span>Inquire Cuts</span>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-96 h-56 sm:h-64 relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl shrink-0">
                        <Image
                            src="/images/image5.png"
                            alt="Unstitched Cloth Collection"
                            fill
                            sizes="(max-width: 1024px) 100vw, 384px"
                            className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
