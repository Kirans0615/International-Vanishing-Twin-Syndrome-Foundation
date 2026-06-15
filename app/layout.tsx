import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "International Vanishing Twin Syndrome Foundation",
    template: "%s | IVTSF",
  },
  description:
    "Supporting families and advancing research for Vanishing Twin Syndrome. A 501(c)(3) nonprofit dedicated to awareness, education, and family support.",
  metadataBase: new URL("https://vanishingtwinsyndrome.org"),
  openGraph: {
    title: "International Vanishing Twin Syndrome Foundation",
    description:
      "You are not alone. Supporting families and advancing research for Vanishing Twin Syndrome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
