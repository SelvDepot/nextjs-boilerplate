'use client';

import { useState } from 'react';

export default function Page() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

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
            Vi hjælper dig eje dine bitcoin – og sove trygt.
            <br />
            <span style={{ fontWeight: 'normal' }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      {/* Ny introduktionstekst */}
      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        Fjern mellemled. Fjern modpartsrisiko. Kun dig og dine bitcoin – på dine præmisser.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      {/* PDF link */}
      <div style={{ marginTop: '2rem' }}>
        <a
          href="/SelvDepot.pdf"
          download
          style={{
            color: '#60a5fa',
            textDecoration: 'underline',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          Læs vores introduktion (PDF)
        </a>
      </div>

      {/* VIDEO øverst */}
      <div style={{ marginTop: '2rem' }}>
        <video
          controls
          style={{
            width: '100%',
            borderRadius: '8px',
            boxShadow: '0 0 8px rgba(0,0,0,0.3)',
          }}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div>

      {/* TEKST i fuld bredde */}
      <div style={{ marginTop: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
        <p style={{ margin: 0 }}>
          Self-Custody ved hjælp af SelvDepot er din livbåd i en verden, hvor det traditionelle
          FIAT-system suger livet af dine beholdninger og aktiver ud under inflation og kontrol.
          Over 80 % af nuværende Bitcoin-ejere risikerer at miste alt gennem hacks,
          beslaglæggelser og modpartsrisiko – men DU er den største risiko. Med vores
          1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody, inklusiv
          mulighed for arveplanlægning, msig m.m., uden at vi nogensinde rører dine private keys
          eller enhed. Dette er ikke bare en chance til 100 % kontrol og tryghed; det er din
          sidste udvej, før dørene lukker, og du bliver fanget i et forgængeligt system.{' '}
          <span style={{ color: '#f87171', fontWeight: 'bold', fontSize: '1.1rem' }}>
            Book nu, før det er for sent!
          </span>
        </p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
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
            marginTop: '1rem',
          }}
        >
          Book et gratis 30-minutters møde
        </a>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1rem' }}>
          Vi rører aldrig dine bitcoin. Vi lærer dig at eje dem selv, for evigt.
        </p>
      </div>

      {/* Kontakt os */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>📬 Kontakt os</p>
        <p style={{ margin: 0 }}>
          <a
            href="mailto:Selvdepot@gmail.com"
            style={{ color: '#60a5fa', textDecoration: 'underline' }}
          >
            Selvdepot@gmail.com
          </a>
        </p>
        <p style={{ margin: '0.5rem 0 0' }}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#60a5fa', textDecoration: 'underline' }}
          >
            Book via Calendly
          </a>
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: '3rem' }}>
        <p
          style={{
            fontSize: '0.9rem',
            color: '#d1d5db',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
        >
          Disclaimer
        </p>
        {isDisclaimerOpen && (
          <p style={{ fontSize: '0.9rem', color: '#d1d5db', marginTop: '0.5rem' }}>
            Informationen på denne hjemmeside er ikke juridisk, finansiel eller investeringsrådgivning.
            SelvDepot yder udelukkende uddannelse og værktøjer til at hjælpe dig med at administrere
            dine egne bitcoin. Alle handlinger, der udføres baseret på dette indhold, er på eget ansvar.
            Konsulter venligst en kvalificeret advokat eller finansiel rådgiver før du træffer beslutninger
            vedrørende dine aktiver. SelvDepot påtager sig ikke ansvar for eventuelle tab eller skader,
            der opstår som følge af brugen af denne hjemmeside eller dens indhold.
          </p>
        )}
      </div>
    </main>
  );
}
