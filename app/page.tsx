import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import AboutSection from "./Components/About";
import ProductsSection from "./Components/products";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07060D] flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <AboutSection />
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
}
