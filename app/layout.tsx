import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalNow - Modernes Matchmaking für Unternehmen und Talente",
  description: "Finde nur Matches, die wirklich passen. Ohne Bullshit. Die Plattform für intelligentes Recruiting mit Culture Fit.",
  keywords: "Recruiting, Matchmaking, Talente, Jobs, Culture Fit, Bewerbung",
  openGraph: {
    title: "TalNow - Modernes Matchmaking für Unternehmen und Talente",
    description: "Finde nur Matches, die wirklich passen. Ohne Bullshit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
