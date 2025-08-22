import type { Metadata } from "next";
import "./globals.css";
import { Borel, Condiment, Great_Vibes, Oswald, Press_Start_2P, Rye } from "next/font/google";

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-borel",
});

const condiment = Condiment({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-condiment",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press",
});

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rye",
});

export const metadata: Metadata = {
  title: "Unit13",
  description: "Portfolio for Unit13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${borel.variable} ${condiment.variable} ${vibes.variable} ${oswald.variable} ${press.variable} ${rye.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
