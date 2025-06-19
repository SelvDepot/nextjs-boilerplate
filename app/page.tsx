'use client';

import { useState } from 'react';

export default function Page() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
            Vi hjælper dig eje dine Bitcoin – og sove trygt.
            <br />
            <span style={{ fontWeight: 'normal' }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      {/* Intro */}
      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin – på dine præmisser.
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
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden, hvor det
          traditionelle FIAT-system suger livet af dine beholdninger og aktiver ud under inflation
          og kontrol. Over 80 % af nuværende Bitcoin-ejere risikerer at miste alt gennem hacks,
          social engineering og modpartsrisiko (Bitcoin IOUs) – men DU er den største risiko for
          tab af dine Bitcoin. Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem
          self-custody, inklusiv mulighed for arveplanlægning, trusselsanalyse, svigtpunktsanalyse,
          multisig m.m., uden at vi nogensinde rører dine private keys eller enhed. Dette er ikke
          bare en chance til 100 % kontrol og tryghed; det er din sidste udvej, før dørene lukker,
          og du bliver fanget i et forgængeligt system.
        </p>
      </div>

      {/* Call-to-action */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#f87171',
            marginBottom: '1rem',
          }}
        >
          Book nu, før det er for sent!
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

      {/* Kontakt os toggle */}
      <div style={{ marginTop: '3rem' }}>
        <p
          onClick={() => setIsContactOpen(!isContactOpen)}
          style={{
            fontSize: '0.9rem',
            color: '#d1d5db',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Kontakt os
        </p>
        {isContactOpen && (
          <div style={{ fontSize: '0.9rem', color: '#d1d5db', marginTop: '0.5rem' }}>
            <p style={{ margin: 0 }}>
              📬 Email:{' '}
              <a
                href="mailto:Selvdepot@gmail.com"
                style={{ color: '#60a5fa', textDecoration: 'underline' }}
              >
                Selvdepot@gmail.com
              </a>
            </p>
            <p style={{ marginTop: '0.3rem' }}>
              📅 Book:{' '}
              <a
                href="https://calendly.com/selvdepot/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'underline' }}
              >
                calendly.com/selvdepot/30min
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Disclaimer toggle */}
      <div style={{ marginTop: '2rem' }}>
        <p
          onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
          style={{
            fontSize: '0.9rem',
            color: '#d1d5db',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Disclaimer
        </p>
        {isDisclaimerOpen && (
          <div style={{ fontSize: '0.9rem', color: '#d1d5db', marginTop: '0.5rem' }}>
            <p>
              Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke
              juridisk, finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder
              alene undervisning og værktøjer til selvstændig opbevaring af Bitcoin. Vores
              rådgivning indebærer aldrig håndtering, opbevaring eller kontrol af dine midler,
              private nøgler, wallets eller adgangsoplysninger.
            </p>
            <p>
              Al brug af hjemmesiden, tilhørende vejledninger, anbefalinger, software, hardware eller
              tredjepartsindhold sker udelukkende på eget ansvar. SelvDepot fraskriver sig ethvert
              ansvar for tab, skader eller konsekvenser, der måtte opstå som følge af brugen af denne
              hjemmeside eller dets indhold.
            </p>
            <p>
              Vi opfordrer dig til altid at søge uafhængig rådgivning fra en kvalificeret advokat eller
              finansiel rådgiver. Denne ansvarsfraskrivelse er underlagt dansk lov og gældende
              EU-lovgivning.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
