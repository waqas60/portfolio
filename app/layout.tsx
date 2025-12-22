import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Muhammad Waqas",
  description: "portfolio by m_waqas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} text-foregroundI bg-background mx-auto flex min-h-screen max-w-250 font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" min-h-screen border-6 border-double border-neutral-200 dark:border-neutral-800" />
          {/* <div className="min-h-screen border-3 border-neutral-200" /> */}
          {/* <div className="min-h-screen border border-neutral-200 ml-1" /> */}
          <div>
            <Navbar />
            {children}
          </div>
          <div className="min-h-screen border-6 border-double border-neutral-200 dark:border-neutral-800" />
        </ThemeProvider>
      </body>
    </html>
  );
}
