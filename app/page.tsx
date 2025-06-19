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

      {/* Ansvarsnote */}
      <p
        style={{
          marginTop: '0.8rem',
          fontSize: '0.9rem',
          color: '#facc15',
          fontStyle: 'italic',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
        self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har de
        nødvendige forudsætninger for at tage det fulde ansvar – fx ved kognitiv svækkelse eller
        tekniske begrænsninger – vil du blive afvist, men med mulighed for undervisning og støtte,
        indtil du er klar.
        <br />
        <br />
        Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller
        hjælpelinje at ringe til, hvis noget går galt i Bitcoin. Bitcoin giver dig fuld kontrol – og fuldt
        ansvar.
      </p>

      {/* Footer-links */}
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          fontSize: '0.9rem',
          color: '#d1d5db',
        }}
      >
        {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
          <p
            key={section}
            onClick={() => setActiveSection(activeSection === section ? null : section)}
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
      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            📬 Email:{' '}
            <a href="mailto:Selvdepot@gmail.com" style={{ color: '#60a5fa' }}>
              Selvdepot@gmail.com
            </a>
          </p>
          <p>
            📅 Book:{' '}
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#60a5fa' }}
            >
              calendly.com/selvdepot/30min
            </a>
          </p>
        </div>
      )}

      {activeSection === 'Disclaimer' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke
            juridisk, finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder
            alene undervisning og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
          <p>
            Vi håndterer aldrig dine Bitcoin, private nøgler eller adgangsoplysninger. Enhver
            handling baseret på denne hjemmeside eller vores rådgivning er på eget ansvar.
          </p>
          <p>
            SelvDepot fraskriver sig ethvert ansvar for tab, fejl eller skader som følge af brugen
            af hjemmesiden, software, hardware eller tredjepartsindhold.
          </p>
        </div>
      )}

      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker.
          </p>
          <p>
            Vi bruger ingen cookies eller analytics. Din færden på vores side er ikke overvåget. Vi
            linker til tredjepart som information – ikke sporing.
          </p>
        </div>
      )}

      {activeSection === 'Vilkår' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning.
          </p>
          <p>
            SelvDepot rører aldrig dine midler. Vi fraskriver os ansvar for konsekvenser ved brug
            af vejledning, software, hardware og links. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
    </main>
  );
}
