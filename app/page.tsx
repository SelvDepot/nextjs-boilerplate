'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

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
      <header className={styles.header}>
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

      <div style={{ gridColumn: '2 / 3', padding: '100px 2rem 2rem' }}>
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
              className={styles.ctaButton}
            >
              Book et gratis 30-minutters møde
            </a>
          </div>
        </section>

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

        <section style={{ margin: '4rem 0', display: 'flex', justifyContent: 'center' }}>
          <video controls className={styles.media}>
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
          <p className={styles.caption}>Introduktion til SelvDepot</p>
        </section>

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
              className={styles.secondaryCta}
            >
              Klar til at tage ansvar? Book et kald nu
            </a>
          </div>
        </section>

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

        <section style={{ margin: '4rem 0', display: 'flex', justifyContent: 'center' }}>
          <img src="/Rådgivnings-niveauer.png" alt="SelvDepot Feature" className={styles.media} />
          <p className={styles.caption}>Rådgivningsniveauer hos SelvDepot</p>
        </section>

        <section style={{ margin: '4rem 0', fontSize: '18px', lineHeight: '1.8', color: '#d1d5db', textAlign: 'center' }}>
          <p>
            Hos SelvDepot tilbyder vi tre forskellige serviceniveauer – "Klar til at eje", "Ejer med overblik" og "Fuld kontrol" – designet til at matche dine specifikke behov som Bitcoin-ejer. Hvert niveau skræddersyes efter din situation, og vi kuraterer løsninger baseret på en grundig vurdering af dine tekniske færdigheder, sikkerhedskrav og fremtidige planer. Uanset niveauet får du personlig vejledning og support, så du kan tage fuld kontrol over dine midler med ro i sindet.
          </p>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <img src="/logo.png" alt="SelvDepot Logo" style={{ maxWidth: '150px', marginBottom: '1rem' }} />
        </div>
        <div className={styles.footerSection}>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <p
              key={section}
              onClick={() => setActiveSection(activeSection === section ? null : section)}
              style={{ margin: '0.5rem 0', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {section}
            </p>
          ))}
        </div>
        {activeSection === 'Kontakt' && (
          <div className={styles.footerSection}>
            <p>📬 Email: <a href="mailto:Selvdepot@gmail.com" style={{ color: '#60a5fa' }}>Selvdepot@gmail.com</a></p>
            <p>📅 Book: <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>calendly.com/selvdepot/30min</a></p>
          </div>
        )}
        {activeSection === 'Disclaimer' && (
          <div className={styles.footerSection}>
            <p>Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk, finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning og værktøjer til selvstændig opbevaring af Bitcoin.</p>
          </div>
        )}
        {activeSection === 'Privatliv' && (
          <div className={styles.footerSection}>
            <p>Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.</p>
          </div>
        )}
        {activeSection === 'Vilkår' && (
          <div className={styles.footerSection}>
            <p>Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål. Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.</p>
          </div>
        )}
      </footer>

      {activeSection === 'Pitch' && showPitch && (
        <div className={styles.pitchModal}>
          <button
            onClick={handleClosePitch}
            className={styles.closeButton}
            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '2rem' }}>{pitchContent[currentPitchPage].title}</h2>
            {pitchContent[currentPitchPage].content}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {currentPitchPage > 0 && (
                <button onClick={handlePreviousPage} className={styles.navButton}>
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button onClick={handleNextPage} className={styles.nextButton}>
                  Næste
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showPasswordModal && (
        <div className={styles.passwordModal}>
          <div className={styles.passwordModalContent}>
            <h3 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '1rem' }}>Indtast adgangskode</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={styles.passwordInput}
                placeholder="Indtast kode"
              />
              <div>
                <button type="submit" className={styles.modalButton}>Bekræft</button>
                <button type="button" onClick={handleClosePasswordModal} className={styles.closeButton} style={{ marginLeft: '1rem' }}>
                  Annuller
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}