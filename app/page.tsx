'use client';

import * as React from 'react';
import { useState } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [pdfRequested, setPdfRequested] = useState(false);

  const handlePdfRequest = () => {
    if (email) {
      setPdfRequested(true);
      // Her kan du integrere mail-opsamling til backend eller et service som Buttondown, Mailchimp, etc.
    } else {
      alert('Indtast venligst din e-mailadresse.');
    }
  };

  return (
    <main
      style={{
        backgroundImage: 'url("/imagebaggrund.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#ffffff',
      }}
    >
      {/* Logo og titel */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: '150px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          }}
        />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>SelvDepot</h1>
          <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
            Vi hjælper dig eje dine Bitcoin og sove trygt.
            <br />
            <span style={{ fontWeight: 'normal' }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      {/* Intro */}
      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      {/* Book-møde */}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#2563eb',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Book et gratis 30-minutters møde
        </a>
      </div>

      {/* FOMO */}
      <p style={{ marginTop: '2rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#facc15' }}>
        Ville du føle dig sikker, hvis dine BTC blev 10x mere værd i morgen?
      </p>

      {/* PDF download via email */}
      <div style={{ marginTop: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Indtast din e-mail for at modtage vores PDF og fremtidige tilbud:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="din@email.com"
          style={{
            padding: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '0.5rem',
          }}
        />
        <button
          onClick={handlePdfRequest}
          style={{
            background: '#60a5fa',
            color: '#fff',
            padding: '0.7rem 1.5rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Send PDF og modtag info
        </button>
        {pdfRequested && (
          <p style={{ marginTop: '1rem', color: '#22c55e' }}>
            Tak! Din PDF er på vej – tjek din indbakke.
          </p>
        )}
        <p style={{ fontSize: '0.8rem', color: '#d1d5db', marginTop: '0.5rem' }}>
          Ved at indsende din e-mail accepterer du at modtage nyheder og eksklusive tilbud fra SelvDepot. Du kan til enhver tid framelde dig.
        </p>
      </div>
    </main>
  );
}
