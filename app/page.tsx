'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [logoSize, setLogoSize] = useState(150); // Justérbar logo-størrelse i px

  // Pitch-indhold opdelt i sektioner
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
          <p style={{ fontStyle: 'italic', color: '#a0aec0', margin: '2rem 0', lineHeight: '1.6' }}>
            <em>“[...] they’re not Bitcoin holders, they’re holders of Bitcoin IOUs.”</em>
            <br />
            – Trace Mayer, tidlig investor og stifter af “Proof of Keys”-bevægelsen
          </p>
        </>
      ),
    },
    {
      title: 'II. Problemet',
      content: (
        <>
          <p>
            Det nuværende fiat-system udsætter din formue for betydelige risici, som truer din økonomiske frihed og fremtid.
          </p>
          <p>Punkter:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Inflation og faldende købekraft eroderer dine penge over tid</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Øget kontrol og konfiskatoriske tiltag fra stater og banker begrænser din frihed</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Over 80 % af bitcoin-ejere bruger custodial løsninger som børser, ETF’er og platforme, hvilket medfører:</li>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li><span style={{ color: '#c9a66b' }}>•</span> Risiko for hacks, datalæk, insolvens og nedlukning (fx FTX, Mt. Gox, Coinbase)</li>
              <li><span style={{ color: '#c9a66b' }}>•</span> Mistet adgang, beslaglæggelse og frosne konti</li>
              <li><span style={{ color: '#c9a66b' }}>•</span> Overvågning og regulatorisk pres</li>
            </ul>
          </ul>
          <p style={{ fontStyle: 'italic', color: '#a0aec0', margin: '2rem 0', lineHeight: '1.6' }}>
            Den største risiko er at forblive fanget i fiat-systemet, men selv med bitcoin mister du ejerskab, hvis du ikke holder dine egne nøgler.
            <br />
            <em>“Not your keys, not your coins.”</em>
          </p>
        </>
      ),
    },
    {
      title: 'III. Løsningen',
      content: (
        <>
          <p>Punkter:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> 1:1 rådgivning med personlig og sikker opsætning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Vi bygger løsningen sammen – trin for trin</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Du ejer det selv – vi rører aldrig dine bitcoin</li>
          </ul>
          <p>Inkluderer:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Arveplanlægning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Backup-struktur</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Dokumentation og forståelse</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Tilpasses din risikoprofil og tekniske evner</li>
          </ul>
        </>
      ),
    },
    {
      title: 'IV. Udbytte',
      content: (
        <>
          <p>Efter rådgivning har du:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> 100 % ejerskab og kontrol over dine bitcoin</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> En løsning du selv har konstrueret og forstår</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Uafhængighed af banker og platforme</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Langtidsholdbar og arvevenlig struktur</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Mulighed for fremtidig sparring eller justering</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Tryghed og ro – for dig og din familie</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor vælge SelvDepot?',
      content: (
        <>
          <p>Punkter:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Vi er 100 % Bitcoin-native – vi rådgiver kun i Bitcoin</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> 100 % uafhængige – vi holder intet, formidler intet</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Vi beskæftiger os ikke med trading, investering eller gebyrer</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Vi underviser – ikke opbevarer</li>
          </ul>
          <p>Du lærer at eje dine bitcoin selv – for evigt</p>
        </>
      ),
    },
    {
      title: 'VI. Pakker',
      content: (
        <>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            {/* Pakke: Klar til at eje (Billig - Grøn) */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '2rem',
                background: '#2f855a', // Grøn for billig
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                border: '1px solid #c9a66b',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '2.5rem', color: '#c9a66b', marginBottom: '1rem' }}>●</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
                Klar til at eje
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#e6fff3', marginBottom: '1rem' }}>
                Til dig, der vil i gang – eller optimere det, du allerede har.
              </p>
            </div>

            {/* Pakke: Ejer med overblik (Dyr - Guld) */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '2rem',
                background: '#c9a66b', // Guld for dyr
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                border: '1px solid #c9a66b',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '1rem' }}>●</div>
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#1a202c',
                  color: '#c9a66b',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                Anbefalet
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1a202c', marginBottom: '1rem' }}>
                Ejer med overblik
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#1a202c', marginBottom: '1rem' }}>
                Til dig med større mængder bitcoin og behov for teknisk dybde.
              </p>
            </div>

            {/* Pakke: Fuld kontrol (Dyrest - Blå) */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '2rem',
                background: '#2b6cb0', // Blå for dyrest
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                border: '1px solid #c9a66b',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '2.5rem', color: '#c9a66b', marginBottom: '1rem' }}>●</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
                Fuld kontrol
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#e6f0fa', marginBottom: '1rem' }}>
                Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.
              </p>
            </div>
          </div>
        </>
      ),
    },
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
        backgroundImage: 'url("/new-background.png")', // Ny baggrund fra dit billede
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        padding: '4rem 2rem',
        color: '#000000', // Ændret til sort for at matche den lysere baggrund
        width: '100%',
        margin: 0,
        fontFamily: '"Roboto", sans-serif',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Horisontal linje */}
      <hr style={{ border: '1px solid #c9a66b', width: '5%', margin: '3rem auto' }} />

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '3rem', borderRadius: '10px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}>
        <img
          src="/new-logo.png" // Nyt billede
          alt="SelvDepot Logo"
          style={{
            maxWidth: `${logoSize}px`, // Justerbar størrelse
            height: 'auto',
            border: '2px solid #c9a66b',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(201, 166, 107, 0.3)',
            marginBottom: '2rem',
            transition: 'max-width 0.3s ease',
          }}
          onClick={() => setLogoSize(logoSize === 150 ? 200 : 150)} // Klik for at skifte størrelse
        />
        <h1 style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#000000' }}>
          SelvDepot
        </h1>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 500, color: '#c9a66b', marginTop: '1rem' }}>
          Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
          <br />
          <span style={{ fontWeight: 'normal', color: '#000000' }}>Sikkert. Privat. For evigt.</span>
        </h2>
      </section>

      {/* Intro */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <p style={{ fontSize: '1.4rem', textAlign: 'center', lineHeight: '1.8', color: '#000000' }}>
          Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
          <br />
          Dine penge. Din fremtid. Din familie. Tag kontrol.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#c9a66b',
              color: '#000000',
              padding: '1.2rem 3.5rem',
              width: '70%',
              maxWidth: '450px',
              fontSize: '1.3rem',
              fontWeight: 600,
              borderRadius: '12px',
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
        </div>
        <img
          src="/new-logo.png" // Nyt billede
          alt="SelvDepot Logo"
          style={{
            maxWidth: '120px',
            height: 'auto',
            margin: '2rem auto',
            display: 'block',
          }}
        />
      </section>

      {/* Hvad Bitcoin er */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', textAlign: 'center', marginBottom: '2rem' }}>
          Hvad Bitcoin er
        </h2>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '900px', margin: '0 auto', color: '#000000' }}>
          Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
          med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
          Ingen banker. Ingen stater. Ingen modparter.
          Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
          Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
          100% under din egen kontrol. Privat. Permanent.
        </p>
      </section>

      {/* Video */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', marginBottom: '2rem' }}>
          Introduktion
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video
            controls
            autoPlay
            muted
            poster="/intro-thumbnail.jpg"
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: '10px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
              border: '2px solid #c9a66b',
            }}
          >
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>
      </section>

      {/* Brødtekst */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '900px', margin: '0 auto', color: '#000000' }}>
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det
          traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
          og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks,
          social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin.
          Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
          arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
          nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed.
          Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
        </p>
      </section>

      {/* Sekundær CTA */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#c9a66b',
            color: '#000000',
            padding: '1.2rem 3.5rem',
            width: '70%',
            maxWidth: '450px',
            fontSize: '1.3rem',
            fontWeight: 600,
            borderRadius: '12px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(201, 166, 107, 0.4)',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Klar til at tage ansvar? Book et kald nu
        </a>
      </section>

      {/* Vurderingstekst */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#c9a66b', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
          self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
          de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
          vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
          <br />
          <br />
          Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
          at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
        </p>
      </section>

      {/* Pakker */}
      <section style={{ padding: '3rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', textAlign: 'center', marginBottom: '2rem' }}>Pakker</h2>
        {pitchContent[5].content}
      </section>

      {/* Footer */}
      <section style={{ padding: '2rem', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '1rem', color: '#000000' }}>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <p
              key={section}
              onClick={() => setActiveSection(activeSection === section ? null : section)}
              style={{ cursor: 'pointer', textDecoration: 'underline', margin: '0 1rem' }}
            >
              {section}
            </p>
          ))}
        </div>
      </section>

      {/* Footer indhold */}
      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1rem', color: '#000000', fontSize: '1rem', textAlign: 'center' }}>
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

      {/* Pitch-sektion */}
      {activeSection === 'Pitch' && showPitch && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)', // Lettere overlay for at matche baggrund
            padding: '3rem',
            zIndex: 1000,
            overflowY: 'auto',
            textAlign: 'left',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#000000',
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
          <div style={{ maxWidth: '1200px', margin: '0 auto', background: '#ffffff', padding: '2rem', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)', color: '#000000' }}>
            <img
              src="/new-logo.png" // Nyt billede
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
                    color: '#000000',
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

      {['Disclaimer', 'Privatliv', 'Vilkår'].map((section) =>
        activeSection === section && (
          <div key={section} style={{ marginTop: '1rem', color: '#000000', fontSize: '1rem', textAlign: 'center' }}>
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
          h2 { font-size: 2rem; }
          p { font-size: 1.2rem; }
          a { width: 100%; padding: 1rem 2rem; }
          section { padding: 2rem; }
          .package-card { max-width: 100%; margin: 0 0 2rem 0; }
          img[alt="SelvDepot Logo"] { max-width: ${logoSize * 0.8}px; }
        }
      `}</style>
    </main>
  );
}