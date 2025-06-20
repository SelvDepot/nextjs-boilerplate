'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [logoSize, setLogoSize] = useState(50); // Startstørrelse tilpasset til det nye design

  // Pitch-indhold opdelt i sektioner (simpel version til intro)
  const pitchContent = [
    {
      title: 'I. Indledning',
      content: (
        <>
          <p>
            SelvDepot er specialiseret i rådgivning og optimering af opbevaring af Bitcoin – også kaldet self-custody.
            <br />
            Vi hjælper både privatpersoner og større enheder med at eje deres bitcoin korrekt, uanset teknisk niveau.
          </p>
          <p>Punkter:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Bitcoin er verdens første aktiv uden modpartsrisiko</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Det kan opbevares og overføres uden banker, stater eller tilladelse</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Alligevel holder de fleste ikke deres bitcoin korrekt</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Mange tror, de ejer bitcoin – men har kun et løfte fra en tredjepart</li>
          </ul>
        </>
      ),
    },
    // Andre sektioner kan tilføjes senere, men holdes simple for nu
  ];

  // Håndter adgangskode for pitch
  const handlePitchAccess = () => {
    const password = prompt('Indtast adgangskode for at vise pitch');
    if (password === '9945') {
      setShowPitch(true);
      setActiveSection('Pitch');
      setCurrentPitchPage(0);
    } else {
      alert('Forkert adgangskode');
    }
  };

  // Tastaturgenvej til pitch (Ctrl + P)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        handlePitchAccess();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation
  const handleNextPage = () => (currentPitchPage < pitchContent.length - 1 ? setCurrentPitchPage(currentPitchPage + 1) : null);
  const handlePreviousPage = () => (currentPitchPage > 0 ? setCurrentPitchPage(currentPitchPage - 1) : null);
  const handleClosePitch = () => {
    setShowPitch(false);
    setActiveSection(null);
    setCurrentPitchPage(0);
  };

  return (
    <main
      style={{
        backgroundColor: '#1a1a1a', // Mørk baggrund som vist
        minHeight: '100vh',
        padding: '4rem 2rem',
        color: '#ffffff', // Lys tekst for kontrast
        width: '100%',
        margin: 0,
        fontFamily: '"Roboto", sans-serif',
        position: 'relative',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Horisontal linje */}
      <hr style={{ border: '1px solid #c9a66b', width: '5%', margin: '2rem auto' }} />

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <img
          src="/new-logo.png" // Nyt billede
          alt="SelvDepot Logo"
          style={{
            maxWidth: `${logoSize}px`,
            height: 'auto',
            border: '2px solid #c9a66b',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(201, 166, 107, 0.3)',
            marginBottom: '1rem',
            transition: 'max-width 0.3s ease',
            position: 'absolute',
            top: '2rem',
            left: '2rem',
          }}
          onClick={() => setLogoSize(logoSize === 50 ? 70 : 50)} // Klik for at skifte størrelse
        />
        <h1 style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a66b' }}>
          SELVDEPOT
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#c9a66b', marginTop: '0.5rem' }}>
          Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
          <br />
          <span style={{ fontWeight: 'normal', color: '#ffffff' }}>Sikkert. Privat. For evigt.</span>
        </h2>
      </section>

      {/* Intro tekst */}
      <section style={{ textAlign: 'center', padding: '2rem', maxWidth: '600px' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ffffff' }}>
          Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
          <br />
          Dine penge. Din fremtid. Din familie. Tag kontrol.
        </p>
      </section>

      {/* CTA knap */}
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#c9a66b',
            color: '#1a1a1a',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(201, 166, 107, 0.4)',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Book et gratis 30-minutters møde
        </a>
      </section>

      {/* Pitch-sektion (kun tilgængelig via adgangskode) */}
      {activeSection === 'Pitch' && showPitch && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            padding: '3rem',
            zIndex: 1000,
            overflowY: 'auto',
            textAlign: 'left',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleClosePitch}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: '#4a5568',
              color: '#ffffff',
              padding: '0.7rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#718096')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#4a5568')}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto', background: '#2d3748', padding: '2rem', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)' }}>
            <img
              src="/new-logo.png"
              alt="SelvDepot Logo"
              style={{
                maxWidth: '150px',
                height: 'auto',
                marginBottom: '2rem',
              }}
            />
            <h2 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '1.5rem', color: '#c9a66b' }}>
              {pitchContent[currentPitchPage].title}
            </h2>
            {pitchContent[currentPitchPage].content}
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              {currentPitchPage > 0 && (
                <button
                  onClick={handlePreviousPage}
                  style={{
                    background: '#4a5568',
                    color: '#ffffff',
                    padding: '0.9rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#718096')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#4a5568')}
                >
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button
                  onClick={handleNextPage}
                  style={{
                    background: '#c9a66b',
                    color: '#1a1a1a',
                    padding: '0.9rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#d4af37')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a66b')}
                >
                  Næste
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <section style={{ padding: '2rem', marginTop: 'auto', textAlign: 'center', color: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '1rem' }}>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <p
              key={section}
              onClick={() => setActiveSection(activeSection === section ? null : section)}
              style={{ cursor: 'pointer', textDecoration: 'underline', margin: '0 1rem', color: '#c9a66b' }}
            >
              {section}
            </p>
          ))}
        </div>
      </section>

      {/* Footer indhold */}
      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1rem', color: '#ffffff', fontSize: '1rem', textAlign: 'center' }}>
          <p>
            📬 Email:{' '}
            <a href="mailto:Selvdepot@gmail.com" style={{ color: '#c9a66b' }}>
              Selvdepot@gmail.com
            </a>
          </p>
          <p>
            📅 Book:{' '}
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#c9a66b' }}
            >
              calendly.com/selvdepot/30min
            </a>
          </p>
        </div>
      )}

      {['Disclaimer', 'Privatliv', 'Vilkår'].map((section) =>
        activeSection === section && (
          <div key={section} style={{ marginTop: '1rem', color: '#ffffff', fontSize: '1rem', textAlign: 'center' }}>
            <p>
              {section === 'Disclaimer' && 'Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk, finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning og værktøjer til selvstændig opbevaring af Bitcoin.'}
              {section === 'Privatliv' && 'Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.'}
              {section === 'Vilkår' && 'Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål. Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.'}
            </p>
          </div>
        )
      )}

      {/* Mobiloptimering */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 { font-size: 3rem; }
          h2 { font-size: 1.2rem; }
          p { font-size: 1rem; }
          a { width: 100%; padding: 1rem; }
          section { padding: 1rem; }
          img[alt="SelvDepot Logo"] { max-width: ${logoSize * 0.8}px; }
        }
      `}</style>
    </main>
  );
}