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
        style={{ color: '#111827', backgroundColor: '#f9fafb' }} // Default light gray background
      >
        <main>{children}</main>
      </body>
    </html>
  );
}