import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

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
          backgroundColor: '#ffffff', // Hvid baggrund som i PDF for klarhed
          minHeight: '100vh',
          color: '#333333', // Mørk grå tekst for læsbarhed
        }}
      >
        <header
          style={{
            backgroundImage: 'url(/logo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '150px', // Fast højde for header som i PDF-layout
          }}
        ></header>
        <main>{children}</main>
      </body>
    </html>
  );
}