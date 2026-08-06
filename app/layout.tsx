import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Simply Smart Money | Practical Money Tips for Everyday Life',
  description: 'Learn practical money management tips, budgeting strategies, side hustles, and savings hacks for everyday life.',
  keywords: 'personal finance, budgeting, savings, side hustle, money tips',
  authors: [{ name: 'Simply Smart Money Team' }],
  openGraph: {
    title: 'Simply Smart Money',
    description: 'Practical money tips for everyday life',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sourceSans bg-white text-navy-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
