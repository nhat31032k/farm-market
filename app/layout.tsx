
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Dâu Tây Đà Lạt - Nông sản sạch',
  description: 'Chuyên cung cấp dâu tây Đà Lạt chất lượng cao',
  icons: {
    icon: '/dalat.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const showFooter = !pathname?.startsWith('/dashboard');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased smooth-scroll`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
