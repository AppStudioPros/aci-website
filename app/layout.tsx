import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adaptive Compound Intelligence | ACI",
  description: "ACI isn't the next AI tool. It's the evolution of AI itself — one intelligence that knows every person on your team, compounds knowledge across all of them, and helps everyone do what only humans can do, better.",
  openGraph: {
    title: "Adaptive Compound Intelligence",
    description: "Your company's living intelligence.",
    url: "https://adaptivecompoundintelligence.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <head>
        {/* Clash Display from Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="font-[var(--font-dm-sans)]">
        {children}
      </body>
    </html>
  );
}
