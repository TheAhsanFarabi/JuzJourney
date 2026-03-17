import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JuzJourney | Learn Juz 30 Interactively",
    template: "%s | JuzJourney", // This makes child pages show as "Dashboard | JuzJourney"
  },
  description: "An interactive, gamified journey to learn, understand, and memorize the final 30th Juz of the Noble Quran.",
  keywords: ["Quran", "Juz 30", "Juz Amma", "Learn Quran", "Interactive Quran", "Islam", "Memorize Quran", "Dhikr"],
  authors: [{ name: "Ahsan Farabi" }],
  
  // Favicon linking
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // For iOS home screen shortcuts
  },

  // Social Media Sharing (Open Graph)
  openGraph: {
    title: "JuzJourney | Learn Juz 30 Interactively",
    description: "An interactive, gamified journey to learn, understand, and memorize the final 30th Juz of the Noble Quran.",
    url: "https://juzjourney.com", // Update this with your actual domain later
    siteName: "JuzJourney",
    locale: "en_US",
    type: "website",
  },

  // Twitter Sharing
  twitter: {
    card: "summary_large_image",
    title: "JuzJourney | Learn Juz 30 Interactively",
    description: "An interactive, gamified journey to learn, understand, and memorize the final 30th Juz of the Noble Quran.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add suppressHydrationWarning here to prevent hydration mismatch errors
    <html lang="en" suppressHydrationWarning> 
      <body className={inter.className}>
        <ThemeProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}