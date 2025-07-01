'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const pitchContent = [
    {
      title: 'I. Indledning – Hvad er SelvDepot?',
      content: (
        <>
          <p>
            "Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring."
            <br />
            SelvDepot er rådgivning i sikker, privat og fremtidssikret opbevaring af Bitcoin.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Vi arbejder 1:1 med formuebeviste personer.</li>
            <li>Vi bygger på gennemtænkt sikkerhed, open-source værktøjer og skræddersyer efter behov.</li>
            <li>Det her handler ikke om hype, crypto eller trading cykler – men om, hvordan du beholder dine Bitcoin.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'II. Problemet – Hvorfor er det her nødvendigt?',
      content: (
        <>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
            <li>20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
            <li>Uden et robust set-up, en klar arveplan og korrekte værktøjer kan du/dine elskede miste adgangen for altid.</li>
            <li>En enkelt fejl – ét forkert tryk, én mistet kode/nøgle – og pengene er for evigt væk.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'III. Løsningen – Hvad tilbyder SelvDepot?',
      content: (
        <>
          <p>Vi hjælper dig med en skræddersyet opsætning af:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Hardware wallets, alt efter behov (hot/cold, single/multi/passphrase m.m.).</li>
            <li>Arveplan, kan din familie/børn finde ud af at få adgang til dine Bitcoin i tilfælde af sygdom/død?</li>
            <li>Trusselsanalyse, Svigtepunksanalyse, Privatlivsbehov.</li>
          </ul>
          <p>Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler, enhed eller lignede.</p>
        </>
      ),
    },
    {
      title: 'IV. Udbytte – Hvordan SelvDepot kommer ind i billedet',
      content: (
        <>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Du får ro i maven nu og i fremtiden.</li>
            <li>Du ved præcis, hvor dine Bitcoin er, at få adgang og at ingen andre har kan.</li>
            <li>Du undgår at efterlade kaos til din ikke-tekniske onkel eller selv at miste dem.</li>
            <li>Du slipper for at famle i mørket – vi har prøvet det før og guider dig hele vejen.</li>
            <li>Du tager ansvar – men med en sparringspartner, der forstår både teknikken og dine behov.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor SelvDepot?',
      content: (
        <>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Vi er 100 % Bitcoin-only – vi gør ikke alt. Vi gør det her med præcision.</li>
            <li>Alt vi bruger er open-source, verified og battle-tested – ingen sorte bokse.</li>
            <li>Vi forstår formuebevistes behov: kontrol, diskretion, arv og sikkerhed.</li>
            <li>Vi rådgiver – vi opbevarer ikke. Du ejer, du bestemmer.</li>
            <li>Vores løsninger fungerer i praksis – ikke bare på papir.</li>
          </ul>
          <p>Det her er ikke endnu et crypto, trading eller andet gøjl. Det er din livline til at sikre din formue.</p>
        </>
      ),
    },
    {
      title: 'VI. Pakker & Priser',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', justifyItems: 'center' }}>
          {/* Pakke: Klar til at eje */}
          <div style={{ padding: '1.5rem', border: '2px solid #22c55e', borderRadius: '8px', backgroundColor: 'rgba(34, 197, 94, 0.1)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🟠 Klar til at eje</h3>
            <p><strong>Pris:</strong> 10.000 kr.<br />Til dig, der vil i gang – eller optimere det, du allerede har.</p>
            <p>Inkluderer:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
              <li>Hardware wallet opsætning</li>
              <li>Single-sig med/uden passphrase</li>
              <li>Backup-strategi og risikoforståelse</li>
              <li>Grundlæggende sikkerhed og vaner</li>
              <li>Pakken bruges også til gennemgang af eksisterende opsætning (hvis ønsket)</li>
            </ul>
            <p style={{ fontSize: '0.9rem' }}><strong>Varighed:</strong> Ca. 2 timer<br /><strong>Note:</strong> Vi stopper ikke før det virker, er testet og forstået.</p>
          </div>
          {/* Pakke: Ejer med overblik */}
          <div style={{ padding: '1.5rem', border: '2px solid #facc15', borderRadius: '8px', backgroundColor: 'rgba(250, 204, 21, 0.1)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🟡 Ejer med overblik</h3>
            <p><strong>Pris:</strong> 20.000 kr.<br />Til dig med større mængder bitcoin og behov for teknisk dybde.</p>
            <p>Inkluderer:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
              <li>Alt i første pakke</li>
              <li>Rådgivning om hardware wallets</li>
              <li>Airgapped wallet-struktur</li>
              <li>Brug og opsætning af Bitcoin node</li>
              <li>Skræddersyet recovery-plan/guide</li>
              <li>Fokus på back-up, sikkerhed og gennemgang af angrebsvektorer</li>
            </ul>
            <p style={{ fontSize: '0.9rem' }}><strong>Varighed:</strong> 2–4 timer (ekslusiv Node download)</p>
          </div>
          {/* Pakke: Fuld kontrol */}
          <div style={{ padding: '1.5rem', border: '2px solid #2563eb', borderRadius: '8px', backgroundColor: 'rgba(37, 99, 235, 0.1)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🔵 Fuld kontrol</h3>
            <p><strong>Pris:</strong> 45.000 kr.<br />Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.</p>
            <p>Inkluderer:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
              <li>Alt i “Ejer med overblik”</li>
              <li>Multisig-opsætning (hvis relevant)</li>
              <li>Udvidet trusselsanalyse, svigtpunksanalyse</li>
              <li>Arveplan og familievejledning</li>
              <li>Opsætning og brug af Bitcoin node</li>
              <li>UTXO-management, privat bevidsthed</li>
              <li>Ét gratis check-up inden for 4 måneder</li>
            </ul>
            <p style={{ fontSize: '0.9rem' }}><strong>Varighed:</strong> Fleksibel efter behov og kompleksitet<br /><strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.</p>
          </div>
        </div>
      ),
    },
  ];

  const handlePitchAccess = () => setShowPasswordModal(true);
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

  const handleNextPage = () => currentPitchPage < pitchContent.length - 1 && setCurrentPitchPage(currentPitchPage + 1);
  const handlePreviousPage = () => currentPitchPage > 0 && setCurrentPitchPage(currentPitchPage - 1);
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
        background: 'linear-gradient(to bottom, #1e293b, #0a0a0a)',
        minHeight: '100vh',
        padding: '0',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <header
        style={{
          gridColumn: '1 / 4',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '80px',
          background: 'rgba(30, 41, 59, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
        }}
      >
        <img src="/logo.png" alt="SelvDepot Logo" style={{ maxWidth: '200px', marginRight: '2rem' }} />
        <div>
          <h1 style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>SelvDepot</h1>
          <h2 style={{ fontSize: '28px', fontWeight: 500, color: '#d1d5db' }}>
            Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
            <br />
            <span style={{ fontWeight: 400 }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ gridColumn: '2 / 3', padding: '100px 2rem 2rem' }}>
        {/* Intro */}
        <section style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db' }}>
            Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
            <br />Dine penge. Din fremtid. Din familie. Tag kontrol.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(90deg, #10b981, #065f46)',
                color: '#ffffff',
                padding: '1.5rem 3rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                ':hover': { transform: 'scale(1.05)' },
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Book et gratis 30-minutters møde
            </a>
          </div>
        </section>

        {/* Hvad Bitcoin er */}
        <section style={{ margin: '4rem 0' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db' }}>
            Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
            med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
            Ingen banker. Ingen stater. Ingen modparter.
            Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
            Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
            100% under din egen kontrol.
          </p>
        </section>

        {/* Video */}
        <section style={{ margin: '4rem 0', display: 'flex', justifyContent: 'center' }}>
          <video controls style={{ maxWidth: '1000px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', objectFit: 'cover' }}>
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
          <p style={{ fontSize: '14px', color: '#d1d5db', textAlign: 'center' }}>Introduktion til SelvDepot</p>
        </section>

        {/* Brødtekst */}
        <section style={{ margin: '4rem 0' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db' }}>
            Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det
            traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
            og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks,
            social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin.
            Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
            arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
            nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed.
            Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(90deg, #10b981, #065f46)',
                color: '#ffffff',
                padding: '1.5rem 3rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                ':hover': { transform: 'scale(1.05)' },
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Klar til at tage ansvar? Book et kald nu
            </a>
          </div>
        </section>

        {/* Vurderingstekst */}
        <section style={{ margin: '4rem 0', fontSize: '18px', color: '#facc15', fontStyle: 'italic', lineHeight: '1.8' }}>
          <p>
            Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
            self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
            de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
            vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
            <br /><br />
            Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
            at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
          </p>
        </section>

        {/* Photo Section */}
        <section style={{ margin: '4rem 0', display: 'flex', justifyContent: 'center' }}>
          <img src="/Rådgivnings-niveauer.png" alt="SelvDepot Feature" style={{ maxWidth: '1000px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', objectFit: 'cover' }} />
          <p style={{ fontSize: '14px', color: '#d1d5db', textAlign: 'center' }}>Rådgivningsniveauer hos SelvDepot</p>
        </section>

        {/* Professional Description of Services */}
        <section style={{ margin: '4rem 0', fontSize: '18px', lineHeight: '1.8', color: '#d1d5db', textAlign: 'center' }}>
          <p>
            Hos SelvDepot tilbyder vi tre forskellige serviceniveauer – "Klar til at eje", "Ejer med overblik" og "Fuld kontrol" – designet til at matche dine specifikke behov som Bitcoin-ejer. Hvert niveau skræddersyes efter din situation, og vi kuraterer løsninger baseret på en grundig vurdering af dine tekniske færdigheder, sikkerhedskrav og fremtidige planer. Uanset niveauet får du personlig vejledning og support, så du kan tage fuld kontrol over dine midler med ro i sindet.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ gridColumn: '1 / 4', padding: '2rem 0', backgroundColor: '#1e293b', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="/logo.png" alt="SelvDepot Logo" style={{ maxWidth: '150px', marginBottom: '1rem' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <p
              key={section}
              onClick={() => setActiveSection(activeSection === section ? null : section)}
              style={{ fontSize: '18px', cursor: 'pointer', textDecoration: 'underline', margin: '0.5rem 0', color: '#d1d5db' }}
            >
              {section}
            </p>
          ))}
        </div>
        {activeSection === 'Kontakt' && (
          <div style={{ textAlign: 'center', color: '#d1d5db', fontSize: '18px' }}>
            <p>📬 Email: <a href="mailto:Selvdepot@gmail.com" style={{ color: '#60a5fa' }}>Selvdepot@gmail.com</a></p>
            <p>📅 Book: <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>calendly.com/selvdepot/30min</a></p>
          </div>
        )}
        {activeSection === 'Disclaimer' && (
          <div style={{ textAlign: 'center', color: '#d1d5db', fontSize: '18px' }}>
            <p>Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk, finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning og værktøjer til selvstændig opbevaring af Bitcoin.</p>
          </div>
        )}
        {activeSection === 'Privatliv' && (
          <div style={{ textAlign: 'center', color: '#d1d5db', fontSize: '18px' }}>
            <p>Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.</p>
          </div>
        )}
        {activeSection === 'Vilkår' && (
          <div style={{ textAlign: 'center', color: '#d1d5db', fontSize: '18px' }}>
            <p>Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål. Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.</p>
          </div>
        )}
      </footer>

      {/* Pitch-sektion */}
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
            fontSize: '18px',
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
              top: '1rem',
              right: '1rem',
              background: '#dc2626',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '2rem' }}>{pitchContent[currentPitchPage].title}</h2>
            {pitchContent[currentPitchPage].content}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
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
                    fontSize: '18px',
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
                    fontSize: '18px',
                  }}
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
          }}
        >
          <div
            style={{
              backgroundColor: '#1e293b',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              width: '300px',
              color: '#ffffff',
            }}
          >
            <h3 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '1rem' }}>Indtast adgangskode</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginBottom: '1rem',
                  border: '1px solid #4b5563',
                  borderRadius: '4px',
                  backgroundColor: '#374151',
                  color: '#ffffff',
                  fontSize: '18px',
                }}
                placeholder="Indtast kode"
              />
              <div>
                <button
                  type="submit"
                  style={{
                    background: '#22c55e',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '18px',
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
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginLeft: '1rem',
                  }}
                >
                  Annuller
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Responsive Design */}
      <style jsx global>{`
        @media (max-width: 768px) {
          main {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
          header {
            position: relative;
            height: auto;
            padding: 1rem 0;
          }
          header img {
            position: static;
            margin-bottom: 1rem;
          }
          header h1 {
            font-size: 36px;
          }
          header h2 {
            font-size: 22px;
          }
          section {
            width: 100%;
          }
          footer {
            grid-template-columns: 1fr;
            padding: 1rem 0;
          }
          footer div {
            margin: 1rem 0;
          }
        }
      `}</style>
    </main>
  );
}