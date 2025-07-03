import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['700'] });

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
          backgroundColor: '#f0f4f8', // Neutral grå læsevenlig og tiltalende
          minHeight: '100vh',
          color: '#333333', // Mørk grå tekst
        }}
      >
        <header
          style={{
            minHeight: '150px',
          }}
        ></header>
        <main>{children}</main>
      </body>
    </html>
  );
}