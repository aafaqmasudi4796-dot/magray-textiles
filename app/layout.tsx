import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppBar from "./Components/WhatsAppBar";

export const metadata: Metadata = {
  title: "Magray Textiles | Premium Fabrics & Handcrafted Weaves",
  description:
    "Exquisite handwoven fabrics, pure pashmina, silks, and luxury apparel textiles from Magray Textiles.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth overflow-x-clip">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 relative overflow-x-clip">
        {children}
        <WhatsAppBar />
      </body>
    </html>
  );
}
