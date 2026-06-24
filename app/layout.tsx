import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CommandMenu } from "@/components/command-menu";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loïc Lau — Développeur full-stack web",
  description:
    "Portfolio de Loïc Lau, développeur full-stack web basé à Paris. TypeScript, React, Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Providers>
          <div className="gridbg" />
          <Cursor />
          <div className="app">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
          <CommandMenu />
        </Providers>
      </body>
    </html>
  );
}
