'use client';

import * as React from 'react';
import { useState } from 'react';

const slides = [
  {
    title: 'I. Indledning / Positionering',
    content: `
SelvDepot er specialiseret i rådgivning og optimering af opbevaring af Bitcoin – også kaldet self-custody.
Vi henvender os til alle med formuebevidsthed, fra privatpersoner til større enheder, uanset teknisk niveau eller forståelse af Bitcoin.

Bitcoin er det første aktiv i verdenshistorien, du reelt kan eje – og dermed det første, der eliminerer modpartsrisiko fuldstændigt.
Bitcoin kan opbevares, flyttes og anvendes uden tilladelse fra banker, stater eller institutioner.

100% Bitcoin-native. 0% spekulation.

**Mission:** Hjælpe mennesker med at eje deres Bitcoin trygt – uden modpartsrisiko, for evigt.
`
  },
  {
    title: 'II. Problemet',
    content: `
Over 80 % af selvproklamerede bitcoin-ejere bruger løsninger som børser, ETF’er og custodial wallets, der udsætter dem for:

• Hacks, datalæk, insolvens og nedlukning (fx FTX, Mt. Gox, QuadrigaCX, Coinbase)  
• Mistet adgang, beslaglæggelse, modpartsrisiko  
• Overvågning, indefrysning og regulatorisk kontrol  

Det er ikke self-custody. Du ejer ikke din Bitcoin.  

**“Not your keys, not your coins.”**
`
  },
  {
    title: 'III. Konsekvenser ved ikke at gøre noget',
    content: `
Prisen på Bitcoin kan 10x. Føler du dig sikker, hvis det sker i morgen?

De fleste tab sker ikke pga. hacks – men pga. brugerfejl, dårlig opsætning og uvidenhed.

**Du er den største risiko.**
`
  },
  {
    title: 'IV. Løsningen – hvad SelvDepot tilbyder',
    content: `
1:1 rådgivning, skræddersyet setup.  
Vi lærer dig at eje dine Bitcoin korrekt – uden nogensinde at røre dine keys.

Arveplanlægning, multisig, svigtpunktsanalyse og trusselsmodel inkluderet.

**Alt dokumenteres og testes.**
`
  },
  {
    title: 'V. Hvordan det fungerer (forløbet)',
    content: `
**Trin-for-trin proces:**  
1. Forberedelse + Spørgeskema  
2. Rådgivning 1:1 (online)  
3. Opsætning + test + dokumentation  
4. Arveplan + backup  
5. Mulighed for opfølgning
`
  },
  {
    title: 'VI. Fordele og udbytte',
    content: `
• 100% kontrol – uden modparter  
• Tryghed for din familie og efterkommere  
• Dokumenteret opsætning, tilpasset din risikoprofil  
• Klarhed og forståelse – ikke bare teknik
`
  },
  {
    title: 'VII. Hvorfor SelvDepot?',
    content: `
• 100% Bitcoin  
• 100% uafhængig  
• Ingen provision, ingen trading, ingen skjulte agendaer  

**Fokus: Sikkerhed, ejerskab og ansvar.**
`
  },
  {
    title: 'VIII. Pakker og Prisstruktur',
    content: `
**Basispakke:** Opsætning 1:1  
**Udvidet:** Inkl. arveplan og backup  
**Premium:** Løbende support og tjek-ind
`
  },
  {
    title: 'IX. Kvalificering (vigtigt!)',
    content: `
**“Dette er ikke for alle.”**  

Vi vurderer om du er klar. Hvis ikke, hjælper vi dig med at blive det.  
Vi afslår klienter som ikke er egnede, men tilbyder læring undervejs.
`
  },
];

export default function Page() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = slides[slideIndex];

  return (
    <main
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '2rem',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        {slide.title}
      </h1>
      <p style={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: '1.6' }}>{slide.content}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button
          onClick={() => setSlideIndex((prev) => Math.max(prev - 1, 0))}
          disabled={slideIndex === 0}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#334155', color: '#f8fafc', border: 'none', borderRadius: '4px' }}
        >
          ← Forrige
        </button>
        <button
          onClick={() => setSlideIndex((prev) => Math.min(prev + 1, slides.length - 1))}
          disabled={slideIndex === slides.length - 1}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#334155', color: '#f8fafc', border: 'none', borderRadius: '4px' }}
        >
          Næste →
        </button>
      </div>
    </main>
  );
}
