import React from 'react';
import Navbar from '../Components/Navbar';
import ProductsSection from '../Components/products';
import Footer from '../Components/Footer';

export const metadata = {
    title: 'Textile Collection & Fabrics | Magray Textiles',
    description:
        'Explore our complete collection of authentic fabrics: Cotton, Linen, Silk, Wool, Polyester, Rayon / Viscose, Velvet, Chiffon, Makhmal, Georgette, Satin, Lace, and Muslin.',
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#030C16] flex flex-col justify-between">
            <div>
                <Navbar />
                <div className="bg-[#030C16] text-white mt-0 pt-28 sm:pt-32 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-10 text-center border-b border-white/10">
                    <span className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                        Suits • Thaan • All Over
                    </span>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-1 text-white">
                        Fabric Collection
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                        Discover all 13 signature fabrics from everyday breathable cottons to royal festive silks and Kashmiri makhmal.
                    </p>
                </div>
                <ProductsSection />
            </div>
            <Footer />
        </main>
    );
}
