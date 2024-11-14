import type {Metadata} from "next";
import {Karla} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import {Navbar} from "@/components/navbar";
import {Sidebar} from "@/components/sidebar";
import {ToggleProvider} from "@/providers/toggle-provider";
import React from "react";
import {Footer} from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import {Toaster} from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "UniqBotz",
    description: "Your Partner in Digital Transformation",
};

const centuryFont = localFont({
  src: "./fonts/centuryBold.ttf",
  variable: "--font-century",
  weight: "900",
});

const karla = Karla({subsets: ["latin"], display: "swap"});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ToggleProvider>

            <body
                className={`${centuryFont.variable} ${karla.className} antialiased flex flex-col min-h-screen overflow-x-hidden relative`}
            >
            <Navbar/>
            <Sidebar/>
            <main className="flex-1 flex-grow">

                {children}
            </main>
            <ScrollToTop />
            <Footer />
            <Toaster richColors position="top-center"/>
            </body>
        </ToggleProvider>
        </html>
    );
}
