import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Danny Lim | Full-Stack Developer & AI Automation Specialist",
  description:
    "Full-stack developer specialising in Next.js, React, TypeScript, and AI-powered business automation with n8n. Building fast, clean web apps and automations that save businesses hours every week.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  keywords: [
    "Danny Lim",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "n8n",
    "AI automation",
    "workflow automation",
    "freelance developer",
    "Singapore",
  ],
  openGraph: {
    title: "Danny Lim | Full-Stack Developer & AI Automation Specialist",
    description:
      "Building fast, clean web apps and AI-powered automations that save businesses hours every week.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
