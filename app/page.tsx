'use client';

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
            Sov trygt med dine Bitcoin – uden banker, tilladelser eller afhængighed.
            <br />
            <span style={{ fontWeight: 'normal' }}>
              For dem, der forstår værdien af ægte ejerskab.
            </span>
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

        <p
          style={{
            marginTop: '1rem',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            color: '#d4d4d4',
          }}
        >
          Rådgivning baseret på de samme principper, der bruges af Bitcoin-fonde, formuerådgivere
          og cypherpunks.
        </p>
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

      {/* CTA */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#f87171',
            marginBottom: '1rem',
          }}
        >
          Klar til at tage kontrol – før nogen andre gør det for dig?
        </p>

        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#f97316',
            color: '#fff',
            padding: '1rem 2.5rem',
            fontWeight: 'bold',
            borderRadius: '9999px',
            textDecoration: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Book din fortrolige 1:1 samtale
        </a>

        <p
          style={{
            marginTop: '0.8rem',
            fontSize: '0.85rem',
            color: '#facc15',
          }}
        >
          ⚠️ Kun få rådgivningsforløb tilbydes ad gangen. Først-til-mølle.
        </p>

        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1.2rem' }}>
          Vi rører aldrig dine Bitcoin. Vi lærer dig at eje dem selv, for evigt.
        </p>
      </div>

      {/* Footer-links */}
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          fontSize: '0.8rem',
          letterSpacing: '0.5px',
          color: '#d1d5db',
        }}
      >
        {['Kontakt SelvDepot', 'Juridisk Ansvar', 'Privatliv', 'Brugsvilkår'].map((section) => (
          <p
            key={section}
            onClick={() =>
              setActiveSection(activeSection === section ? null : section)
            }
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
              margin: 0,
            }}
          >
            {section}
          </p>
        ))}
      </div>

      {/* Footer-indhold */}
      {activeSection === 'Kontakt SelvDepot' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            📬 Email:{' '}
            <a
              href="mailto:Selvdepot@gmail.com"
              style={{ color: '#60a5fa', textDecoration: 'underline' }}
            >
              Selvdepot@gmail.com
            </a>
          </p>
          <p>
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

      {activeSection === 'Juridisk Ansvar' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Alt indhold på denne hjemmeside er til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. SelvDepot yder udelukkende
            uddannelse og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
          <p>
            Vi håndterer aldrig dine Bitcoin, private nøgler eller adgangsoplysninger. Alle
            beslutninger træffes på eget ansvar.
          </p>
          <p>
            SelvDepot fraskriver sig ansvar for tab, fejl eller skader som følge af brugen af
            hjemmesiden, software, hardware eller tredjepartsindhold.
          </p>
        </div>
      )}

      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem i overensstemmelse med deres politikker.
          </p>
          <p>
            Vi bruger ingen cookies eller analytics. Din færden på siden er ikke overvåget. Links
            til tredjepart er kun til information – ikke sporing.
          </p>
        </div>
      )}

      {activeSection === 'Brugsvilkår' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Ved at bruge SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investerings-, skatte- eller juridisk rådgivning.
          </p>
          <p>
            SelvDepot rører aldrig dine midler. Vi fraskriver os ansvar for konsekvenser ved brug
            af vores vejledning, software, hardware og links. Dansk lov gælder.
          </p>
        </div>
      )}
    </main>
  );
}
