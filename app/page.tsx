'use client';

import * as React from 'react';
import { useState } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      {/* Header */}
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

      {/* Intro tekst */}
      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      {/* FOMO */}
      <p
        style={{
          marginTop: '2rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: '#facc15',
        }}
      >
        Ville du føle dig sikker, hvis dine BTC blev 10x mere værd i morgen?
      </p>

      {/* PDF link */}
      <div style={{ marginTop: '1rem' }}>
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

      {/* Intro forklaring */}
      <p style={{ marginTop: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
        Bitcoin er ikke spekulation. Det er basepenge i digital form.
        Et globalt, upolitisk system med begrænset udbud, der ikke kan manipuleres, printes eller koopteres af nogen.
        Ingen banker, ingen stater, ingen modparter.
        Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
        Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt.
        100 procent under din egen kontrol. Privat. Permanent.
      </p>

      {/* Video */}
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

      {/* Brødtekst */}
      <div style={{ marginTop: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
        <p style={{ margin: 0 }}>
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det
          traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
          og kontrol. Over 80 procent af Bitcoin-ejere risikerer at miste alt gennem hacks,
          social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin.
          Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
          mulighed for arveplanlægning, trusselsanalyse, svigtpunktsanalyse og multisig – uden at vi
          nogensinde rører dine private keys eller enhed. Dette er ikke bare en chance til 100 procent
          kontrol og tryghed. Det er din sidste udvej før dørene lukker og du bliver fanget i et
          forgængeligt system.
        </p>
      </div>

      {/* Advarsel / ansvar */}
      <p
        style={{
          marginTop: '2.5rem',
          fontSize: '0.95rem',
          color: '#facc15',
          fontStyle: 'italic',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere self-custody
        af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har de nødvendige forudsætninger
        for at tage det fulde ansvar – fx ved kognitiv svækkelse eller tekniske begrænsninger – vil du blive
        afvist, men med mulighed for undervisning og støtte, indtil du er klar.
        <br />
        <br />
        Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje at ringe til,
        hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
      </p>

      {/* CTA */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f87171', marginBottom: '1rem' }}>
          Book nu før det er for sent!
        </p>

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

        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1rem' }}>
          Vi rører aldrig dine Bitcoin. Vi lærer dig at eje dem selv, for evigt.
        </p>
      </div>
    </main>
  );
}
