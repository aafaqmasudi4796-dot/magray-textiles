'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, PanInfo } from 'framer-motion';
import {
    ChevronRight,
    ChevronLeft,
    ArrowUpRight,
    MessageCircle,
    Sparkles,
} from 'lucide-react';

// Product images from app/Components
import image1 from './image 1.png';
import image2 from './image 2.png';
import image3 from './image 3.png';
import image4 from './image 4.png';
import image5 from './image 5.png';

interface ShowcaseItem {
    id: number;
    title: string;
    subtitle: string;
    badge: string;
    category: 'Suits' | 'Thaan' | 'All Over' | 'Collection';
    glowColor: string;
    accentColor: string;
    image: StaticImageData | string;
    specs: {
        gsm: string;
        feel: string;
        purity: string;
    };
    description: string;
    tagline: string;
}

const items: ShowcaseItem[] = [
    {
        id: 0,
        title: 'Unstitched Cloth Rolls',
        subtitle: 'Suits & Thaan Collection',
        badge: 'Top Pick • 2026',
        category: 'Thaan',
        glowColor: 'rgba(124, 58, 237, 0.45)', // royal violet
        accentColor: '#A78BFA',
        image: image5,
        specs: {
            gsm: '160–240 GSM',
            feel: 'Ultra Soft & Fluid',
            purity: '100% Pure Natural',
        },
        description: 'Complete unstitched bundles and running meter rolls in royal navy, violet, cream, and emerald hues.',
        tagline: 'Wholesale & Custom Meterage',
    },
    {
        id: 1,
        title: 'Royal Kashmiri Needlework',
        subtitle: 'Pashmina & Silk Suit',
        badge: 'Artisanal • Srinagar',
        category: 'Suits',
        glowColor: 'rgba(234, 88, 12, 0.45)', // rich amber
        accentColor: '#FDBA74',
        image: image1,
        specs: {
            gsm: '180–220 GSM',
            feel: 'Soft Breathable Weave',
            purity: 'Aari Needlework',
        },
        description: 'Intricately embroidered floral jaal on fine wool-silk blend, paired with coordinating dupatta & bottom.',
        tagline: 'Hand-Finished Border Details',
    },
    {
        id: 2,
        title: 'Imperial Gold Kurta Set',
        subtitle: 'Festive Silk & Zari Weave',
        badge: 'Festive Luxury',
        category: 'All Over',
        glowColor: 'rgba(245, 158, 11, 0.45)', // gold amber
        accentColor: '#FDE047',
        image: image2,
        specs: {
            gsm: '140–200 GSM',
            feel: 'Lustrous Sheen',
            purity: 'Zari Embroidery',
        },
        description: 'Warm saffron-gold palette adorned with hand-stitched cord embroidery and traditional festive accents.',
        tagline: 'Complete 3-Piece Ensemble',
    },
    {
        id: 3,
        title: 'Embroidered Bridal Heritage',
        subtitle: 'Suits, Thaan & Zardozi Dupatta',
        badge: 'Bridal Masterpiece',
        category: 'Suits',
        glowColor: 'rgba(59, 130, 246, 0.45)', // sapphire blue
        accentColor: '#60A5FA',
        image: '/images/about-hero.jpg',
        specs: {
            gsm: '200–280 GSM',
            feel: 'Rich Royal Drape',
            purity: 'Hand-Embroidered Zari',
        },
        description: 'Pastel cream, royal navy, mauve, and sage silk layers with ornate floral cutwork zardozi dupatta.',
        tagline: 'Exclusive Srinagar Weave',
    },
    {
        id: 4,
        title: 'Forest Emerald Velvet',
        subtitle: 'Royal Makhmal Suit',
        badge: 'Winter Regal',
        category: 'Suits',
        glowColor: 'rgba(16, 185, 129, 0.4)', // emerald
        accentColor: '#6EE7B7',
        image: image3,
        specs: {
            gsm: '220–350 GSM',
            feel: 'Plush Dense Pile',
            purity: 'Heavy Kashmiri Aari',
        },
        description: 'Deep forest green velvet with dense metallic needlework accents, ideal for luxury winter gatherings.',
        tagline: 'Heavy Bridal Needlework',
    },
    {
        id: 5,
        title: 'Ruby Damask Brocade',
        subtitle: 'Heritage Silk Thaan Cut',
        badge: 'Signature Handloom',
        category: 'Thaan',
        glowColor: 'rgba(225, 29, 72, 0.45)', // rose ruby
        accentColor: '#FDA4AF',
        image: image4,
        specs: {
            gsm: '150–210 GSM',
            feel: 'Textured Sheen',
            purity: 'Jacquard Weave',
        },
        description: 'Regal crimson silk with woven damask medallions and fine metallic luster for custom tailoring.',
        tagline: 'Available in 5m – 40m Cuts',
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Reliable touch position references
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const touchMoved = useRef(false);
    const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const activeItem = items[currentIndex];

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setProgress(0);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        setProgress(0);
    }, []);

    // Temporarily pause auto-slide on touch / click and auto-resume after 4 seconds
    const handleUserInteraction = useCallback(() => {
        setIsPaused(true);
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 4000);
    }, []);

    // Touch swipe handlers with changedTouches support for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length > 0) {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
            touchMoved.current = false;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null || touchStartY.current === null || e.touches.length === 0) return;
        const diffX = touchStartX.current - e.touches[0].clientX;
        const diffY = touchStartY.current - e.touches[0].clientY;
        // Check if movement is horizontal
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 8) {
            touchMoved.current = true;
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || !touchMoved.current || e.changedTouches.length === 0) {
            touchStartX.current = null;
            touchStartY.current = null;
            touchMoved.current = false;
            return;
        }
        const endX = e.changedTouches[0].clientX;
        const diffX = touchStartX.current - endX;

        // Low 30px threshold for easy, responsive flick on mobile
        if (diffX > 30) {
            handleNext();
            handleUserInteraction();
        } else if (diffX < -30) {
            handlePrev();
            handleUserInteraction();
        }

        touchStartX.current = null;
        touchStartY.current = null;
        touchMoved.current = false;
    };

    const handleTouchCancel = () => {
        touchStartX.current = null;
        touchStartY.current = null;
        touchMoved.current = false;
    };

    // Auto-slide timer with smooth progress bar
    useEffect(() => {
        if (isPaused) return;

        const intervalMs = 50;
        const durationMs = 3500; // 3.5s per slide
        const step = 100 / (durationMs / intervalMs);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    handleNext();
                    return 0;
                }
                return prev + step;
            });
        }, intervalMs);

        return () => clearInterval(timer);
    }, [isPaused, handleNext]);

    return (
        <section
            aria-label="Magray Textiles Hero Showcase"
            onMouseEnter={() => {
                if (!isMobile) setIsPaused(true);
            }}
            onMouseLeave={() => {
                if (!isMobile) setIsPaused(false);
            }}
            className="relative w-full min-h-[690px] sm:min-h-[740px] lg:min-h-[840px] bg-[#07060D] text-white overflow-hidden select-none flex flex-col justify-between mt-0"
        >
            {/* AMBIENT RADIAL LIGHTING & GLOW */}
            <div
                className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                style={{
                    background: `
                        radial-gradient(circle at 50% 10%, ${activeItem.glowColor} 0%, rgba(99, 102, 241, 0.25) 30%, transparent 65%),
                        radial-gradient(circle at 50% 50%, ${activeItem.glowColor} 0%, rgba(99, 102, 241, 0.18) 35%, transparent 70%),
                        radial-gradient(circle at 20% 85%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 12%, rgba(245, 158, 11, 0.22) 0%, transparent 45%)
                    `,
                }}
            />

            {/* DOT GRID MATRIX PATTERN */}
            <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.28) 1.2px, transparent 1.2px)',
                    backgroundSize: '28px 28px',
                    backgroundPosition: 'center center',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
                }}
            />

            {/* TOP HEADER BAR */}
            <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-36 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner mb-3 sm:mb-4">
                    <Sparkles size={12} className="text-amber-400 animate-pulse shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-200">
                        Suits • Thaan • All Over
                    </span>
                    <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                    <span className="text-[10px] sm:text-xs font-medium text-slate-400">
                        Srinagar, Kashmir
                    </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.05]">
                    Exquisite Fabric Collections
                </h1>

                <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-slate-400 max-w-sm sm:max-w-xl font-normal leading-relaxed">
                    Swipe or browse through our curved showcase of 100% natural unstitched fabrics, luxury suits, and running thaan rolls.
                </p>
            </div>

            {/* MASSIVE GLOWING BACKDROP WATERMARK */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none">
                <span
                    className="text-7xl sm:text-9xl lg:text-[14rem] font-black uppercase tracking-[0.08em] opacity-15"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.35)',
                        filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.25))',
                    }}
                >
                    {activeItem.category}
                </span>
            </div>

            {/* 3D CYLINDRICAL CURVED CAROUSEL DECK (CENTER STAGE) */}
            <div
                className="relative z-10 w-full flex-1 flex items-center justify-center my-3 sm:my-8 px-2 sm:px-6 touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
            >
                {/* LEFT SIDE ARROW */}
                <button
                    onClick={() => {
                        handlePrev();
                        handleUserInteraction();
                    }}
                    aria-label="Previous slide"
                    className="absolute left-1 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-black/70 sm:bg-white/15 hover:bg-amber-500 border border-white/25 hover:border-amber-400 text-white hover:text-slate-950 backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] active:scale-90 group cursor-pointer pointer-events-auto touch-manipulation"
                >
                    <ChevronLeft size={20} className="sm:hidden" />
                    <ChevronLeft size={24} className="hidden sm:inline transition-transform group-hover:-translate-x-0.5" />
                </button>

                {/* RIGHT SIDE ARROW */}
                <button
                    onClick={() => {
                        handleNext();
                        handleUserInteraction();
                    }}
                    aria-label="Next slide"
                    className="absolute right-1 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-black/70 sm:bg-white/15 hover:bg-amber-500 border border-white/25 hover:border-amber-400 text-white hover:text-slate-950 backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] active:scale-90 group cursor-pointer pointer-events-auto touch-manipulation"
                >
                    <ChevronRight size={20} className="sm:hidden" />
                    <ChevronRight size={24} className="hidden sm:inline transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* 3D PERSPECTIVE STAGE */}
                <div
                    className="relative w-full max-w-6xl h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center"
                    style={{ perspective: isMobile ? '900px' : '1400px', transformStyle: 'preserve-3d' }}
                >
                    {items.map((item, idx) => {
                        const n = items.length;
                        let offset = (idx - currentIndex + n) % n;
                        if (offset > n / 2) offset -= n;

                        // Only render items within visual range (-2 to 2)
                        const isVisible = Math.abs(offset) <= 2;
                        if (!isVisible) return null;

                        const isCenter = offset === 0;

                        // Cylindrical 3D math: tighter spacing on mobile so cards don't overlap arrows
                        const spacing = isMobile ? 120 : 280;
                        const xOffset = offset * spacing;
                        const zOffset = -Math.abs(offset) * (isMobile ? 50 : 110) + (isCenter ? 30 : 0);
                        const rotateY = -offset * (isMobile ? 18 : 26);
                        const scale = isCenter ? 1 : (isMobile ? 0.76 : 0.84) - Math.abs(offset) * 0.05;
                        const opacity = isCenter ? 1 : Math.max(0.25, 0.85 - Math.abs(offset) * 0.35);

                        return (
                            <motion.div
                                key={item.id}
                                onClick={() => {
                                    if (!isCenter) {
                                        setCurrentIndex(idx);
                                        setProgress(0);
                                        handleUserInteraction();
                                    }
                                }}
                                onPanEnd={
                                    isCenter
                                        ? (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
                                              if (info.offset.x < -30 || info.velocity.x < -200) {
                                                  handleNext();
                                                  handleUserInteraction();
                                              } else if (info.offset.x > 30 || info.velocity.x > 200) {
                                                  handlePrev();
                                                  handleUserInteraction();
                                              }
                                          }
                                        : undefined
                                }
                                className={`absolute transition-all duration-700 ease-out ${
                                    isCenter
                                        ? 'cursor-grab active:cursor-grabbing z-30 pointer-events-auto'
                                        : 'cursor-pointer hover:opacity-100 z-10 sm:pointer-events-auto pointer-events-none'
                                }`}
                                animate={{
                                    x: xOffset,
                                    z: zOffset,
                                    rotateY: rotateY,
                                    scale: scale,
                                    opacity: opacity,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 140,
                                    damping: 22,
                                    mass: 0.8,
                                }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    width: isMobile ? 'min(300px, 78vw)' : 'min(330px, 78vw)',
                                    height: isMobile ? 'min(410px, 84vw)' : 'min(430px, 86vw)',
                                }}
                            >
                                {/* THE CURVED GLASS CARD */}
                                <div
                                    className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-3.5 sm:p-5 ${
                                        isCenter
                                            ? 'bg-gradient-to-b from-white/[0.14] via-white/[0.08] to-black/60 border-2 border-white/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(168,85,247,0.35)] ring-1 ring-white/30'
                                            : 'bg-gradient-to-b from-white/[0.08] to-black/50 border border-white/10 shadow-xl opacity-90'
                                    }`}
                                >
                                    {/* TOP CARD BAR */}
                                    <div className="flex items-center justify-between z-10 mb-2 sm:mb-3">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                                            <span
                                                className="w-2 h-2 rounded-full animate-ping"
                                                style={{ backgroundColor: item.accentColor }}
                                            />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-300 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                                            0{item.id + 1}
                                        </span>
                                    </div>

                                    {/* PRODUCT IMAGE SHOWCASE */}
                                    <div className="relative flex-1 w-full my-1.5 sm:my-2 rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-black/40 border border-white/10 group">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            priority={isCenter}
                                            sizes="(max-width: 768px) 300px, 400px"
                                            className={`object-cover object-center transition-transform duration-700 ${
                                                isCenter ? 'group-hover:scale-105' : 'filter brightness-90'
                                            }`}
                                        />

                                        {/* Bottom subtle gradient on image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                                        {/* Overlay quick title on image */}
                                        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-left pointer-events-none">
                                            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                                                {item.category}
                                            </p>
                                            <h3 className="text-sm sm:text-lg font-black text-white leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* BOTTOM SPEC BAR */}
                                    <div className="z-10 pt-1.5 sm:pt-2 flex flex-col gap-2">
                                        <div className="grid grid-cols-3 gap-1.5 text-center">
                                            <div className="px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                                <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400">GSM</span>
                                                <span className="block text-[9px] sm:text-[10px] font-bold text-white truncate">{item.specs.gsm}</span>
                                            </div>
                                            <div className="px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                                <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400">Feel</span>
                                                <span className="block text-[9px] sm:text-[10px] font-bold text-white truncate">{item.specs.feel}</span>
                                            </div>
                                            <div className="px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                                <span className="block text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400">Origin</span>
                                                <span className="block text-[9px] sm:text-[10px] font-bold text-amber-300 truncate">Srinagar</span>
                                            </div>
                                        </div>

                                        {/* ACTION BUTTON ON ACTIVE CENTER CARD */}
                                        {isCenter && (
                                            <div className="flex items-center gap-2 pt-1 animate-in fade-in duration-300">
                                                <a
                                                    href={`https://wa.me/917889330874?text=Hello%20Magray%20Textiles,%20I%20am%20interested%20in%20${encodeURIComponent(
                                                        item.title + ' (' + item.category + ')'
                                                    )}.%20Please%20share%20meterage,%20rate,%20and%20color%20options.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
                                                >
                                                    <MessageCircle size={14} className="fill-slate-950" />
                                                    <span>WhatsApp Order</span>
                                                </a>

                                                <Link
                                                    href="/products"
                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors touch-manipulation"
                                                    title="View all 13 fabrics in collection"
                                                >
                                                    <ArrowUpRight size={16} />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* BOTTOM NAVIGATION & PROGRESS CONTROLS */}
            <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pb-6 sm:pb-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6">
                <div className="flex items-center justify-between w-full sm:w-auto gap-3 sm:gap-4">
                    {/* SLIDE PROGRESS BAR & STATUS */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xs font-mono font-bold text-amber-400">
                            0{currentIndex + 1}
                        </span>
                        <div className="w-20 sm:w-36 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                            <motion.div
                                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                                style={{ width: `${progress}%` }}
                                transition={{ ease: 'linear' }}
                            />
                        </div>
                        <span className="text-xs font-mono text-slate-400">
                            0{items.length}
                        </span>
                        <span className="text-[11px] text-slate-500 uppercase tracking-wider ml-1 hidden md:inline">
                            • Auto-sliding
                        </span>
                    </div>

                    {/* DOT PAGINATION WITH GENEROUS TOUCH TARGETS */}
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        {items.map((it, idx) => (
                            <button
                                key={it.id}
                                onClick={() => {
                                    setCurrentIndex(idx);
                                    setProgress(0);
                                    handleUserInteraction();
                                }}
                                aria-label={`Jump to ${it.title}`}
                                className="p-1 sm:p-1.5 touch-manipulation cursor-pointer"
                            >
                                <span
                                    className={`block h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === idx
                                            ? 'w-6 sm:w-8 bg-amber-400'
                                            : 'w-2 bg-white/25 hover:bg-white/50'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* FABRIC CATALOG LINK */}
                <div className="w-full sm:w-auto text-center sm:text-right">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 transition-colors touch-manipulation"
                    >
                        <span>View 13 Fabrics Collection</span>
                        <ArrowUpRight size={14} className="text-amber-400" />
                    </Link>
                </div>
            </div>
        </section>
    );
}