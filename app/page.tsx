'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './page.module.css'; // Import the CSS module

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  // Pitch-indhold opdelt i sektioner
  const pitchContent = [
    {
      title: 'I. Indledning – Hvad er MitDepot?',
      content: (
        <>
          <p>
            "Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring."
            <br />
            MitDepot er rådgivning i sikker, privat og fremtidssikret opbevaring af Bitcoin.
          </p>
          <ul className={styles.pitchList}>
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
          <ul className={styles.pitchList}>
            <li>De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
            <li>20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
            <li>Uden et robust set-up, en klar arveplan og korrekte værktøjer kan du/dine elskede miste adgangen for altid.</li>
            <li>En enkelt fejl – ét forkert tryk, én mistet kode/nøgle – og pengene er for evigt væk.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'III. Løsningen – Hvad tilbyder MitDepot?',
      content: (
        <>
          <p>Vi hjælper dig med en skræddersyet opsætning af:</p>
          <ul className={styles.pitchList}>
            <li>Hardware wallets, alt efter behov (hot/cold, single/multi/passphrase m.m.).</li>
            <li>Arveplan, kan din familie/børn finde ud af at få adgang til dine Bitcoin i tilfælde af sygdom/død?</li>
            <li>Trusselsanalyse, Svigtepunksanalyse, Privatlivsbehov.</li>
          </ul>
          <p>Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler, enhed eller lignende.</p>
          <ul className={styles.pitchList}></ul>
        </>
      ),
    },
    {
      title: 'IV. Udbytte – Hvordan MitDepot kommer ind i billedet',
      content: (
        <>
          <ul className={styles.pitchList}>
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
      title: 'V. Hvorfor MitDepot?',
      content: (
        <>
          <ul className={styles.pitchList}>
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
        <div className={styles.packagesContainer}>
          {/* Pakke: Klar til at eje */}
          <div className={styles.package} style={{ border: '2px solid #22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
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
              <li>Hardware wallet opsætning</li>
              <li>Single-sig med/uden passphrase</li>
              <li>Backup-strategi og risikoforståelse</li>
              <li>Grundlæggende sikkerhed og vaner</li>
              <li>Pakken bruges også til gennemgang af eksisterende opsætning (hvis ønsket)</li>
            </ul>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Varighed:</strong> Ca. 2 timer
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>

          {/* Pakke: Ejer med overblik */}
          <div className={styles.package} style={{ border: '2px solid #facc15', backgroundColor: 'rgba(250, 204, 21, 0.1)' }}>
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
              <li>Rådgivning om hardware wallets</li>
              <li>Airgapped wallet-struktur</li>
              <li>Brug og opsætning af Bitcoin node</li>
              <li>Skræddersyet recovery-plan/guide</li>
              <li>Fokus på back-up, sikkerhed og gennemgang af angrebsvektorer</li>
            </ul>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Varighed:</strong> 2–4 timer (ekslusiv Node download)
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>

          {/* Pakke: Fuld kontrol */}
          <div className={styles.package} style={{ border: '2px solid #2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
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
              <li>Multisig-opsætning (hvis relevant)</li>
              <li>Udvidet trusselsanalyse, svigtpunksanalyse</li>
              <li>Arveplan og familievejledning</li>
              <li>Opsætning og brug af Bitcoin node</li>
              <li>UTXO-management, privat bevidahed</li>
              <li>Ét gratis check-up inden for 4 måneder</li>
            </ul>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Varighed:</strong> Fleksibel efter behov og kompleksitet
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
        </div>
      ),
    },
  ];

  // Håndter adgangskode for pitch med censureret input
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
      setPasswordInput(''); // Ryd input efter succes
    } else {
      alert('Forkert adgangskode. Prøv igen.');
      setPasswordInput(''); // Ryd input ved fejl
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
  }, [passwordInput]);

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

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordInput('');
  };

  return (
    <main className={styles.main}>
      {/* Logo og titel */}
      <div className={styles.header}>
        <img
          src="/logo.png"
          alt="MitDepot Logo"
          className={styles.logo}
        />
        <div>
          <h1 className={styles.title}>
            MitDepot
          </h1>
          <h2 className={styles.subtitle}>
            Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
            <br />
            <span className={styles.subtitleNormal}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Intro */}
        <p className={styles.intro}>
          Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
          <br />
          Dine penge. Din fremtid. Din familie. Tag kontrol.
        </p>

        {/* Book-møde efter intro */}
        <div className={styles.cta}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Book et gratis 30-minutters møde
          </a>
        </div>

        {/* Hvad Bitcoin er */}
        <p className={styles.description}>
          Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
          med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
          Ingen banker. Ingen stater. Ingen modparter.
          Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
          Hos MitDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
          100% under din egen kontrol!
        </p>

        {/* Video */}
        <div className={styles.videoContainer}>
          <video
            controls
            className={styles.video}
          >
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>

        {/* Brødtekst */}
        <div className={styles.mainContent}>
          <p>
            Bitcoin self-custody ved hjælp af MitDepot er din livbåd i en verden hvor det
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
        <div className={styles.secondaryCta}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} ${styles.ctaButtonGreen}`}
          >
            Klar til at tage ansvar? Book et kald nu
          </a>
        </div>

        {/* Vurderingstekst */}
        <p className={styles.assessmentText}>
          Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
          self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
          de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
          vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
          <br />
          <br />
          Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
          at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
        </p>
      </div>

      {/* Footer-links */}
      <div className={styles.footerLinks}>
        {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
          <p
            key={section}
            onClick={() => setActiveSection(activeSection === section ? null : section)}
            className={styles.footerLink}
          >
            {section}
          </p>
        ))}
      </div>

      {/* Footer indhold */}
      {activeSection === 'Kontakt' && (
        <div className={styles.footerContent}>
          <p>
            📬 Email:{' '}
            <a href="mailto:selvdepot@gmail.com" style={{ color: '#60a5fa' }}>
              SelvDepot@gmail.com
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
      {/* Pitch-sektion */}
      {activeSection === 'Pitch' && showPitch && (
        <div className={styles.pitchSection}>
          <button
            onClick={handleClosePitch}
            className={styles.closeButton}
          >
            Luk
          </button>
          <div className={styles.pitchContent}>
            <h2>
              {pitchContent[currentPitchPage].title}
            </h2>
            {pitchContent[currentPitchPage].content}
            <div className={styles.pitchNavigation}>
              {currentPitchPage > 0 && (
                <button
                  onClick={handlePreviousPage}
                  className={`${styles.navButton} ${styles.prevButton}`}
                >
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button
                  onClick={handleNextPage}
                  className={`${styles.navButton} ${styles.nextButton}`}
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
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Indtast adgangskode</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={styles.passwordInput}
                placeholder="Indtast kode"
              />
              <div>
                <button
                  type="submit"
                  className={styles.confirmButton}
                >
                  Bekræft
                </button>
                <button
                  type="button"
                  onClick={handleClosePasswordModal}
                  className={styles.cancelButton}
                >
                  Annuller
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {activeSection === 'Disclaimer' && (
        <div className={styles.footerContent}>
          <p>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. MitDepot tilbyder alene undervisning
            og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}
      {activeSection === 'Privatliv' && (
        <div className={styles.footerContent}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}
      {activeSection === 'Vilkår' && (
        <div className={styles.footerContent}>
          <p>
            Ved brug af MitDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
    </main>
  );
}