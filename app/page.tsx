'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);

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
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Bitcoin er verdens første aktiv uden modpartsrisiko</li>
            <li>Det kan opbevares og overføres uden banker, stater eller tilladelse</li>
            <li>Alligevel holder de fleste ikke deres bitcoin korrekt</li>
            <li>Mange tror, de ejer bitcoin – men har kun et løfte fra en tredjepart</li>
          </ul>
          <p>
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
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Inflation og faldende købekraft eroderer dine penge over tid</li>
            <li>Øget kontrol og konfiskatoriske tiltag fra stater og banker begrænser din frihed</li>
            <li>Over 80 % af bitcoin-ejere bruger custodial løsninger som børser, ETF’er og platforme, hvilket medfører:</li>
            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
              <li>Risiko for hacks, datalæk, insolvens og nedlukning (fx FTX, Mt. Gox, Coinbase)</li>
              <li>Mistet adgang, beslaglæggelse og frosne konti</li>
              <li>Overvågning og regulatorisk pres</li>
            </ul>
          </ul>
          <p>
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
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>1:1 rådgivning med personlig og sikker opsætning</li>
            <li>Vi bygger løsningen sammen – trin for trin</li>
            <li>Du ejer det selv – vi rører aldrig dine bitcoin</li>
          </ul>
          <p>Inkluderer:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Arveplanlægning</li>
            <li>Backup-struktur</li>
            <li>Dokumentation og forståelse</li>
            <li>Tilpasses din risikoprofil og tekniske evner</li>
          </ul>
        </>
      ),
    },
    {
      title: 'IV. Udbytte',
      content: (
        <>
          <p>Efter rådgivning har du:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>100 % ejerskab og kontrol over dine bitcoin</li>
            <li>En løsning du selv har konstrueret og forstår</li>
            <li>Uafhængighed af banker og platforme</li>
            <li>Langtidsholdbar og arvevenlig struktur</li>
            <li>Mulighed for fremtidig sparring eller justering</li>
            <li>Tryghed og ro – for dig og din familie</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor vælge SelvDepot?',
      content: (
        <>
          <p>Punkter:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Vi er 100 % Bitcoin-native – vi rådgiver kun i Bitcoin</li>
            <li>100 % uafhængige – vi holder intet, formidler intet</li>
            <li>Vi beskæftiger os ikke med trading, investering eller gebyrer</li>
            <li>Vi underviser – ikke opbevarer</li>
          </ul>
          <p>Du lærer at eje dine bitcoin selv – for evigt</p>
        </>
      ),
    },
    {
      title: 'VI. Pakker & Priser',
      content: (
        <>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            {/* Pakke: Klar til at eje */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '1.5rem',
                border: '2px solid #22c55e',
                borderRadius: '8px',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                🟠 Klar til at eje
              </h3>
              <p>
                <strong>Pris:</strong> 10.000 kr.
                <br />
                Til dig, der vil i gang – eller optimere det, du allerede har.
              </p>
              <p>Inkluderer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Hardware wallet-rådgivning og opsætning</li>
                <li>Single-sig med/uden passphrase</li>
                <li>Backup-strategi og risikoforståelse</li>
                <li>Grundlæggende sikkerhed og vaner</li>
                <li>Gennemgang af eksisterende opsætning (hvis ønsket)</li>
              </ul>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Varighed:</strong> Ca. 2 timer
                <br />
                <strong>Note:</strong> Vi stopper ikke før det virker, er testet og forstået.
              </p>
            </div>

            {/* Pakke: Ejer med overblik */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '1.5rem',
                border: '2px solid #facc15',
                borderRadius: '8px',
                backgroundColor: 'rgba(250, 204, 21, 0.1)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                🟡 Ejer med overblik
              </h3>
              <p>
                <strong>Pris:</strong> 20.000 kr.
                <br />
                Til dig med større mængder bitcoin og behov for teknisk dybde.
              </p>
              <p>Inkluderer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Alt i første pakke</li>
                <li>Airgapped wallet-struktur</li>
                <li>Brug og opsætning af Bitcoin node</li>
                <li>Skræddersyet recovery-plan</li>
                <li>Fysisk backup-strategi</li>
              </ul>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Varighed:</strong> 2–4 timer (afhænger af node)
              </p>
            </div>

            {/* Pakke: Fuld kontrol */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '1.5rem',
                border: '2px solid #2563eb',
                borderRadius: '8px',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                🔵 Fuld kontrol
              </h3>
              <p>
                <strong>Pris:</strong> 45.000 kr.
                <br />
                Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.
              </p>
              <p>Inkluderer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Alt i “Ejer med overblik”</li>
                <li>Multisig-opsætning (hvis ønsket)</li>
                <li>Udvidet trusselsanalyse (phishing, kidnapning, mm.)</li>
                <li>Arveplan og familievejledning</li>
                <li>Én gratis check-up inden for 12 måneder</li>
              </ul>
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Varighed:</strong> Fleksibel efter behov og kompleksitet
                <br />
                <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
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
      setCurrentPitchPage(0); // Starter på første side
    } else {
      alert('Forkert adgangskode');
    }
  };

  // Tastaturgenvej til at udløse pitch-adgang (Ctrl + P)
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

  // Navigation i pitch
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

  // Luk pitch
  const handleClosePitch = () => {
    setShowPitch(false);
    setActiveSection(null);
    setCurrentPitchPage(0);
  };

  return (
    <main
      style={{
        backgroundImage: 'url("/imagebaggrund.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem 1rem',
        color: '#ffffff',
        width: '100%',
        margin: 0,
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
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: '150px', // Forstørret logo
            height: 'auto',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, textAlign: 'center' }}>
            SelvDepot
          </h1>
          <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem', textAlign: 'center' }}>
            Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
            <br />
            <span style={{ fontWeight: 'normal' }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      {/* Intro */}
      <p style={{ marginTop: '2rem', fontSize: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
        Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      {/* Book-møde efter intro */}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#2563eb',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '0.9rem',
          }}
        >
          Book et gratis 30-minutters møde
        </a>
      </div>

      {/* Hvad Bitcoin er */}
      <p
        style={{
          marginTop: '2rem',
          fontSize: '1rem',
          lineHeight: '1.5',
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
        100% under din egen kontrol. Privat. Permanent.
      </p>

      {/* Video */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          controls
          style={{
            width: '100%',
            maxWidth: '700px', // Forøget for bedre proportioner
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div>

      {/* Brødtekst */}
      <div style={{ marginTop: '2rem', fontSize: '1rem', lineHeight: '1.5', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
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

      {/* Sekundær CTA */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#15803d',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '0.9rem',
            fontWeight: 'bold',
          }}
        >
          Klar til at tage ansvar? Book et kald nu
        </a>
      </div>

      {/* Vurderingstekst */}
      <p
        style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#facc15',
          fontStyle: 'italic',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          lineHeight: '1.5',
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

      {/* Footer-links */}
      <div
        style={{
          marginTop: '4rem',
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

      {/* Footer indhold */}
      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
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
      {/* Pitch-sektion (skjult, men placeret efter Kontakt) */}
      {activeSection === 'Pitch' && showPitch && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0f172a',
            padding: '2rem',
            zIndex: 1000,
            overflowY: 'auto',
            textAlign: 'left',
            fontSize: '0.95rem',
            lineHeight: '1.5',
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
              top: '1rem',
              right: '1rem',
              background: '#dc2626',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {pitchContent[currentPitchPage].title}
            </h2>
            {pitchContent[currentPitchPage].content}
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              {currentPitchPage > 0 && (
                <button
                  onClick={handlePreviousPage}
                  style={{
                    background: '#2563eb',
                    color: '#fff',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }}
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
                    padding: '0.7rem 1.5rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }}
                >
                  Næste
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {activeSection === 'Disclaimer' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
          <p>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning
            og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}
      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}
      {activeSection === 'Vilkår' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
          <p>
            Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
    </main>
  );
}