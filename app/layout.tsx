import type { Metadata } from "next";
import { Inter, Lora, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AppProviders } from "@/app/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "International Vanishing Twin Syndrome Foundation",
    template: "%s | IVTSF",
  },
  description:
    "Compassionate research, education, and support for families affected by vanishing twin syndrome and multifetal loss. A 501(c)(3) nonprofit.",
  metadataBase: new URL("https://vanishingtwinsyndrome.org"),
  openGraph: {
    title: "International Vanishing Twin Syndrome Foundation",
    description:
      "You are not alone. Research, education, and support for families affected by vanishing twin syndrome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${dmMono.variable}`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-[#FAF8FF] text-[#1A1020] antialiased">
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
