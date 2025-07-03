import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['700'] }); // Thicker text
const roboto = Roboto({ subsets: ['latin'], weight: ['700'] }); // Thicker text

export const metadata: Metadata = {
  title: 'MitDepot',
  description: 'Sikker og privat Bitcoin self-custody rådgivning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body
        className={`${inter.className} ${roboto.className}`}
        style={{
          backgroundColor: '#ffffff', // White background
          minHeight: '100vh',
          color: '#333333', // Dark gray text
        }}
      >
        <header
          style={{
            backgroundImage: 'url(/logo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh', // Full height for entire page
          }}
        >
          <main>{children}</main>
        </header>
      </body>
    </html>
  );
}