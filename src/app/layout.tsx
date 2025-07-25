import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevZahir Portfolio",
  description: "@2025",
keywords: [
  "DevZahir",
  "Portfolio",
  "Developer",
  "AI",
  "Interactive",
  "Memoji",
  "Web Development",
  "Full Stack",
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "Mongoose",
  "Node.js",
  "Express.js",
  "Discord.js",
  "Telegram Bots",
  "Chatbots",
  "APIs",
  "Plisio API",
  "BTCPay",
  "Automation",
  "Freelance Developer",
  "Consultation Booking",
  "E-commerce Logic",
  "Command Handlers",
  "Frontend",
  "Backend",
  "UI/UX",
  "Responsive Design",
  "Creative Coding"
],

  authors: [
    {
      name: "DevZahir",
      url: "https://DevZahir.com",
    },
  ],
  creator: "DevZahir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://DevZahir.com",
    title: "DevZahir Portfolio",
    description: "Interactive portfolio by Dev Zahir LLC",
    siteName: "DevZahir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevZahir Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    creator: "@Devzahirx3",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
