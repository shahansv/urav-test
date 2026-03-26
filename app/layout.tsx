import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScrollProvider from "@/components/web/smooth-scroll-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import PageTransition from "@/components/web/page-transition";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const AvenirFont = localFont({
  src: "./fonts/AvenirLT45Book.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urav",
  description: "Urav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        AvenirFont.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-screen flex flex-col">
        <Toaster position="top-center" />
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
