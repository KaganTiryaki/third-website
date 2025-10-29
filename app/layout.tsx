import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ClientLayout } from "@/components/client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Water Wise - Water Conservation Awareness",
  description: "An eTwinning project dedicated to raising awareness about water waste and promoting sustainable water conservation practices worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
        style={{ margin: 0, padding: 0, overflowX: 'hidden', position: 'relative' }}
      >
        <ClientLayout>
          <Header />
          <main className="flex-1 relative z-40" style={{ marginBottom: 0 }}>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
