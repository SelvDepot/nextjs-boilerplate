'use client';

import * as React from 'react';
import { useState } from 'react';

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
            Vi henvender os til alle med formuebevidsthed, fra privatpersoner til større enheder, uanset teknisk niveau eller forståelse af Bitcoin.
            <br />
            Bitcoin er det første aktiv i verdenshistorien, du reelt kan eje – og dermed det første, der eliminerer modpartsrisiko fuldstændigt.
            <br />
            Bitcoin kan opbevares, flyttes og anvendes uden tilladelse fra banker, stater eller institutioner.
            <br />
            Alligevel holder størstedelen af brugerne ikke deres bitcoin korrekt, og har uden at vide det, allerede mistet dem.
            <br />
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
            Over 80 % af selvproklamerede bitcoin-ejere bruger løsninger som børser, ETF’er og custodial wallets, der udsætter dem for:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Hacks, datalæk, insolvens og nedlukning (fx FTX, Mt. Gox, QuadrigaCX, Coinbase)</li>
            <li>Mistet adgang, beslaglæggelse, modpartsrisiko</li>
            <li>Overvågning, indefrysning og regulatorisk kontrol</li>
          </ul>
          <p>
            Men den største risiko er slet ikke at eje bitcoin og forblive i det nuværende fiat-system.- Et system præget af inflation, konfiskatoriske tiltag og faldende reel købekraft.
            <br />
            Hvis du ikke selv holder dine nøgler, ejer du ikke dine bitcoin.
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
          <p>
            Hos SelvDepot lærer du ikke blot om principperne bag Bitcoin og self-custody – vi udvikler sammen en personlig, dokumenteret og sikker opsætning 1:1, der sikrer dine Bitcoin.
            <br />
            Opsætningen inkluderer også arveplanlægning, så dine nærmeste har mulighed for adgang i tilfælde af sygdom, ulykke eller dødsfald – uden at du på noget tidspunkt mister kontrol.
            <br />
            Vi rådgiver dig 1:1 og gennemgår hele opsætningen trin for trin – uden nogensinde at få adgang til dine bitcoin.
            <br />
            Din løsning tilpasses din risikoprofil, og vi sikrer robuste backups, forståelig struktur og langtidsholdbarhed.
          </p>
        </>
      ),
    },
    {
      title: 'IV. Udbytte',
      content: (
        <>
          <p>Når rådgivningen er gennemført, har du:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>100 % kontrol og ejerskab over dine bitcoin</li>
            <li>En dokumenteret og forstået løsning, du selv har konstrueret</li>
            <li>Tryghed og ro – uafhængig af banker, platforme eller tredjeparter</li>
            <li>Mulighed for fortrolig opsætning af arvevenlig struktur med langtidsholdbarhed</li>
            <li>Mulighed for 1:1 support</li>
            <li>Justering og sparring efter behov – f.eks. efter 1, 3, 6 og 8 måneder</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor vælge SelvDepot?',
      content: (
        <>
          <p>Vi er:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>100 % Bitcoin-native – vi rådgiver kun i Bitcoin</li>
            <li>100 % uafhængige – vi holder intet, formidler intet</li>
            <li>100 % dedikerede til self-custody – vi beskæftiger os ikke med investering, trading eller gebyrer</li>
          </ul>
          <p>
            Vi rører aldrig dine bitcoin.
            <br />
            Vi lærer dig at eje dem selv – for evigt.
          </p>
        </>
      ),
    },
    {
      title: 'VI. Næste skridt',
      content: (
        <>
          <p>
            Har du brug for vores hjælp?
            <br />
            Anmod om et gratis 30 minutters opkald og find ud af mere om Bitcoin og, om SelvDepot er det rette match for dig.
            <br />
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#2563eb',
                color: '#fff',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 'bold',
                marginTop: '1rem',
              }}
            >
              Book dit gratis opkald nu
            </a>
            <br />
            Vores mål er ikke blot, at du gennemfører – men at du forstår og ejer din opsætning fuldt ud.
            <br />
            Det vigtigste, du kan eje i det 21. århundrede, er dét, kun du selv kontrollerer: Bitcoin.
            <br />
            Velkommen til…– SelvDepot ₿
          </p>
        </>
      ),
    },
  ];

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
            Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
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

      {/* Book-møde efter intro */}
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

      {/* Hvad Bitcoin er */}
      <p style={{ marginTop: '3rem', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'justify' }}>
        Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
        med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
        Ingen banker. Ingen stater. Ingen modparter.
        Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
        Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
        100% under din egen kontrol. Privat. Permanent.
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
        <p style={{ margin: 0, textAlign: 'justify' }}>
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
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#15803d',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
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
          textAlign: 'justify',
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
        {['Kontakt', 'Disclaimer', 'Pitch', 'Privatliv', 'Vilkår'].map((section) => (
          <p
            key={section}
            onClick={() => {
              if (section === 'Pitch') {
                handlePitchAccess();
              } else {
                setActiveSection(activeSection === section ? null : section);
              }
            }}
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
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning
            og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}
      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}
      {activeSection === 'Vilkår' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
      {activeSection === 'Pitch' && showPitch && (
        <div
          style={{
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: '#0f172a',
            borderRadius: '8px',
            boxShadow: '0 0 12px rgba(0,0,0,0.3)',
            textAlign: 'left',
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
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
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
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
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Næste
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}