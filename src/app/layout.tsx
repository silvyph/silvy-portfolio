import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const silkscreen = localFont({
  src: [
    {
      path: "./fonts/Silkscreen-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Silkscreen-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-silkscreen",
});

const pixelify = localFont({
  src: "./fonts/PixelifySans-VariableFont_wght.ttf",
  variable: "--font-pixelify",
});

const pressStart = localFont({
  src: "./fonts/PressStart2P-Regular.ttf",
  variable: "--font-pressstart",
});

export const metadata: Metadata = {
  title: "Silvy Putri Hanafi",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${silkscreen.variable} ${pixelify.variable} ${pressStart.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}