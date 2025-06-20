'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  // Pitch content (unchanged)
  const pitchContent = [
    {
      title: 'I. Indledning – Hvad er SelvDepot?',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            "Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring."
            <br />
            SelvDepot er rådgivning i sikker, privat og fremtidssikret opbevaring af Bitcoin.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '1.5rem 0', lineHeight: '1.8' }}>
            <li>Vi arbejder 1:1 med formuebeviste personer.</li>
            <li>Vi bygger på gennemtænkt sikkerhed, open-source værktøjer og skræddersyer efter behov.</li>
            <li>Det her handler ikke om hype, crypto eller trading cykler – men om, hvordan du beholder dine Bitcoin.</li>
          </ul>
        </>
      ),
    },
    // ... (other pitch content unchanged, apply similar styling: fontSize: '1rem', lineHeight: '1.6' for <p>, lineHeight: '1.8' for <ul>)
  ];

  const handlePitchAccess = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordInput === '9945') {
      setShowPitch(true);
      setActiveSection('Pitch');
      setCurrentPitchPage(0);
      setShowPasswordModal(false);
      setPasswordInput('');
    } else {
      alert('Forkert adgangskode. Prøv igen.');
      setPasswordInput('');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        handlePitchAccess();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [passwordInput]);

  const handleNextPage = () => {
    if (currentPitchPage < pitchContent.length - 1) {
      setCurrentPitchPage(currentPitchPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPitchPage > 0) {
      setCurrentPitchPage(currentPitchPage - 1);
    }
  };

  const handleClosePitch = () => {
    setShowPitch(false);
    setActiveSection(null);
    setCurrentPitchPage(0);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordInput('');
  };

  return (
    <main
      style={{
        backgroundImage: 'url("/imagebaggrund.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '3rem 1rem', // Increased padding for breathing room
        color: '#ffffff',
        width: '100%',
        margin: 0,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", // Modern font stack
      }}
    >
      {/* Logo and Title */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem', // Tighter gap for balance
          maxWidth: '900px', // Slightly wider for larger screens
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: '200px', // Larger logo for impact
            height: 'auto',
            borderRadius: '6px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0, textAlign: 'center' }}>
            SelvDepot
          </h1>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginTop: '0.75rem', textAlign: 'center' }}>
            Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
            <br />
            <span style={{ fontWeight: '400' }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      {/* Intro */}
      <p
        style={{
          marginTop: '2rem',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.6',
          textAlign: 'center',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      {/* Primary CTA */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#2563eb',
            color: '#fff',
            padding: '0.75rem 2rem', // Larger padding for better clickability
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
        >
          Book et gratis 30-minutters møde
        </a>
      </div>

      {/* Bitcoin Description */}
      <p
        style={{
          marginTop: '3rem', // Increased spacing for section separation
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.6',
          textAlign: 'center',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
        med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
        Ingen banker. Ingen stater. Ingen modparter.
        Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
        Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
        100% under din egen kontrol.
      </p>

      {/* Video */}
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          controls
          style={{
            width: '100%',
            maxWidth: '800px', // Slightly larger for impact
            borderRadius: '6px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div>

      {/* Main Text */}
      <div
        style={{
          marginTop: '3rem',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.6',
          textAlign: 'center',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <p>
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det
          traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
          og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks,
          social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin.
          Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
          arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
          nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed.
          Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
        </p>
      </div>

      {/* Secondary CTA */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#15803d',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#166534')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
        >
          Klar til at tage ansvar? Book et kald nu
        </a>
      </div>

      {/* Assessment Text */}
      <p
        style={{
          marginTop: '3rem',
          fontSize: '0.875rem', // Slightly smaller for emphasis
          fontWeight: '400',
          color: '#eab308', // Darker yellow for better contrast
          fontStyle: 'italic',
          lineHeight: '1.6',
          textAlign: 'center',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
        self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
        de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
        vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
        <br />
        <br />
        Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
        at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
      </p>

      {/* Footer Links */}
      <div
        style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          fontSize: '0.875rem',
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
              fontWeight: '500',
            }}
          >
            {section}
          </p>
        ))}
      </div>

      {/* Footer Content */}
      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1.5rem', color: '#d1d5db', fontSize: '0.875rem', textAlign: 'center' }}>
          <p>
            📬 Email:{' '}
            <a href="mailto:Selvdepot@gmail.com" style={{ color: '#60a5fa', textDecoration: 'underline' }}>
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

      {/* Pitch Section */}
      {activeSection === 'Pitch' && showPitch && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#1e293b',
            padding: '3rem',
            zIndex: 1000,
            overflowY: 'auto',
            textAlign: 'left',
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          <button
            onClick={handleClosePitch}
            aria-label="Luk pitch-modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: '#dc2626',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
          >
            Luk
          </button>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
              {pitchContent[currentPitchPage].title}
            </h2>
            <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              {pitchContent[currentPitchPage].content}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {currentPitchPage > 0 && (
                <button
                  onClick={handlePreviousPage}
                  style={{
                    background: '#2563eb',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                >
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button
                  onClick={handleNextPage}
                  style={{
                    background: '#22c55e',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#16a34a')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#22c55e')}
                >
                  Næste
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'opacity 0.2s ease',
          }}
        >
          <div
            style={{
              backgroundColor: '#1e293b',
              padding: '2.5rem',
              borderRadius: '8px',
              textAlign: 'center',
              width: '400px', // Larger modal for usability
              color: '#ffffff',
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Indtast adgangskode
            </h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1.5rem',
                  border: '1px solid #4b5563',
                  borderRadius: '6px',
                  backgroundColor: '#374151',
                  color: '#ffffff',
                  fontSize: '1rem',
                }}
                placeholder="Indtast kode法制

System: kode"
              />
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                  type="submit"
                  style={{
                    background: '#22c55e',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  Bekræft
                </button>
                <button
                  type="button"
                  onClick={handleClosePasswordModal}
                  style={{
                    background: '#dc2626',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  Annuller
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {activeSection === 'Disclaimer' && (
        <div style={{ marginTop: '1.5rem', color: '#d1d5db', fontSize: '0.875rem', textAlign: 'center' }}>
          <p>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning
            og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}
      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1.5rem', color: '#d1d5db', fontSize: '0.875rem', textAlign: 'center' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}
      {activeSection === 'Vilkår' && (
        <div style={{ marginTop: '1.5rem', color: '#d1d5db', fontSize: '0.875rem', textAlign: 'center' }}>
          <p>
            Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
    </main>
  );
}