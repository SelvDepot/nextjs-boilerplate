'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { CheckIcon } from '@heroicons/react/24/outline'; // Assuming Tailwind/Heroicons setup
import { DocumentTextIcon } from '@heroicons/react/24/outline'; // For PDF icon

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);

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
    // ... (keeping other pitchContent items unchanged for brevity)
    {
      title: 'VI. Pakker & Priser',
      content: (
        <div
          className={styles.packagesContainer}
          style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center' }}
        >
          {/* Packages remain unchanged */}
          <div className={`${styles.package} ${styles.packageGreen}`} style={{ flex: 1, minWidth: '300px' }}>
            <h3>🟠 Klar til at eje</h3>
            <p>
              <strong>Pris:</strong> 10.000 kr.
              <br />
              Til dig, der vil i gang – eller optimere det, du allerede har.
            </p>
            <p>Inkluderer:</p>
            <ul className={styles.packageList}>
              <li>Hardware wallet opsætning</li>
              <li>Single-sig med/uden passphrase</li>
              <li>Backup-strategi og risikoforståelse</li>
              <li>Grundlæggende sikkerhed og vaner</li>
              <li>Pakken bruges også til gennemgang af eksisterende opsætning (hvis ønsket)</li>
            </ul>
            <p className={styles.duration}>
              <strong>Varighed:</strong> Ca. 2 timer
            </p>
            <p className={styles.note}>
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
          {/* ... (other packages unchanged) */}
        </div>
      ),
    },
  ];

  const handlePitchAccess = () => setShowPasswordModal(true);
  const handlePasswordSubmit = (e: React.FormEvent) => {
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
  const handleDownloadAccess = async () => {
    try {
      console.log('Fetching PDF links...');
      const response = await fetch('/api/pdfs', {
        method: 'GET',
        credentials: 'same-origin',
      });
      console.log('Response status:', response.status);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log('Response data:', data);
      if (data.urls && Array.isArray(data.urls)) {
        setPdfUrls(data.urls);
        setShowDownloadModal(true);
      } else {
        alert('No URLs found in response');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to fetch PDF links: ' + (error instanceof Error ? error.message : String(error)));
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
  const handleCloseDownloadModal = () => {
    setShowDownloadModal(false);
    setPdfUrls([]);
  };

  return (
    <main className={styles.main}>
      {/* 1. Hero-sektion */}
      <section className={styles.hero} style={{ backgroundColor: '#0f172a', padding: '40px 0', textAlign: 'center' }}>
        <img src="/logo.png" alt="MitDepot Logo" style={{ height: '80px', marginBottom: '20px' }} />
        <h1 className={styles.title} style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '10px' }}>
          Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
        </h1>
        <h2 className={styles.subtitle} style={{ color: '#6b7280', fontSize: '1.2rem' }}>
          Sikkert. Privat. For evigt.
        </h2>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          style={{ backgroundColor: '#3b82f6', color: '#ffffff', marginTop: '20px', display: 'inline-block' }}
        >
          Book gratis 30-minutters møde
        </a>
      </section>

      {/* 2. Hvad er MitDepot? */}
      <section className={styles.whatIsMitDepot} style={{ backgroundColor: '#f9fafb', padding: '40px 0', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className={styles.sectionHeading} style={{ color: '#111827', marginBottom: '20px' }}>
            Hvad tilbyder MitDepot?
          </h2>
          <ul className={styles.pitchList} style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '15px', color: '#111827' }}>
              <CheckIcon className="h-5 w-5 inline mr-2 text-green-500" /> 1:1 rådgivning til formuebevidste personer
            </li>
            <li style={{ marginBottom: '15px', color: '#111827' }}>
              <CheckIcon className="h-5 w-5 inline mr-2 text-green-500" /> Fokus på open-source sikkerhed og tilpassede løsninger
            </li>
            <li style={{ color: '#111827' }}>
              <CheckIcon className="h-5 w-5 inline mr-2 text-green-500" /> Ikke hype eller crypto – kun ejerskab og kontrol
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Video + Sikkerhedsbudskab */}
      <section className={styles.videoSection} style={{ padding: '40px 0', maxWidth: '6xl', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className={styles.videoContainer} style={{ position: 'relative' }}>
              <img src="/thumbnail.jpg" alt="Video Thumbnail" className={styles.video} style={{ width: '100%', height: 'auto' }} />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.sectionHeading} style={{ color: '#111827', marginBottom: '15px' }}>
              Din sidste chance for kontrol
            </h2>
            <p style={{ marginBottom: '15px', color: '#6b7280' }}>
              Bitcoin er din økonomiske frihed – men kun hvis du kontrollerer det selv.
            </p>
            <p style={{ marginBottom: '15px', color: '#6b7280' }}>
              Over 80% af ejere risikerer tab pga. fejl eller hacks. Tag kontrol nu.
            </p>
            <p style={{ color: '#6b7280' }}>
              Med MitDepot får du sikkerhed og vejledning – før det er for sent.
            </p>
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              style={{ backgroundColor: '#22c55e', color: '#ffffff', marginTop: '20px', display: 'inline-block' }}
            >
              Klar til at tage ansvar? Book nu
            </a>
          </div>
        </div>
      </section>

      {/* 4. PDF-download sektion */}
      <section className={styles.pdfSection} style={{ backgroundColor: '#1e293b', padding: '40px 0', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className={styles.sectionHeading} style={{ color: '#ffffff', marginBottom: '15px' }}>
            Vil du læse mere først?
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '20px' }}>
            Download vores gratis PDF’er og lær hvordan du beskytter din formue med Bitcoin.
          </p>
          <button
            onClick={handleDownloadAccess}
            className={styles.ctaButton}
            style={{ backgroundColor: '#22c55e', color: '#ffffff', display: 'inline-flex', alignItems: 'center' }}
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" /> Download Gratis PDF’er
          </button>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className={styles.footer} style={{ backgroundColor: '#000', padding: '20px 0', textAlign: 'center' }}>
        <div>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(activeSection === section ? null : section);
              }}
              className={styles.footerLink}
              style={{ color: '#9ca3af', margin: '0 15px', fontWeight: 'bold' }}
            >
              {section}
            </a>
          ))}
        </div>
        <p style={{ color: '#9ca3af', marginTop: '15px' }}>© 2025 MitDepot ApS. Alle rettigheder forbeholdes.</p>
      </footer>

      {activeSection === 'Kontakt' && (
        <div className={styles.footerContent} id="kontakt">
          <p style={{ color: '#111827' }}>
            📬 Email:{' '}
            <a href="mailto:selvdepot@gmail.com" className={styles.footerLink}>
              SelvDepot@gmail.com
            </a>
          </p>
          <p>
            📅 Book:{' '}
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              calendly.com/selvdepot/30min
            </a>
          </p>
        </div>
      )}

      {activeSection === 'Pitch' && showPitch && (
        <div
          className={styles.pitchSection}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={handleClosePitch}
            className={styles.closeButton}
            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
          >
            Luk
          </button>
          <div className={styles.pitchContent}>
            <h2>{pitchContent[currentPitchPage].title}</h2>
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

      {activeSection === 'Disclaimer' && (
        <div className={styles.footerContent} id="disclaimer">
          <p style={{ color: '#111827' }}>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. MitDepot tilbyder alene undervisning
            og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}

      {activeSection === 'Privatliv' && (
        <div className={styles.footerContent} id="privatliv">
          <p style={{ color: '#111827' }}>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}

      {activeSection === 'Vilkår' && (
        <div className={styles.footerContent} id="vilkår">
          <p style={{ color: '#111827' }}>
            Ved brug af MitDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}

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
                <button type="submit" className={styles.confirmButton}>
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

      {showDownloadModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Download Gratis PDF'er</h3>
            <p>Her kan du downloade vores forberedelsesmaterialer:</p>
            <ul className={styles.downloadList}>
              {pdfUrls.length > 0 ? (
                pdfUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url} download className={styles.downloadButton}>
                      {['MitDepot Recovery Ark', 'MitDepot AntiScam', 'MitDepot One Pager'][index]}
                    </a>
                  </li>
                ))
              ) : (
                <li>No links available</li>
              )}
            </ul>
            <button onClick={handleCloseDownloadModal} className={styles.cancelButton}>
              Luk
            </button>
          </div>
        </div>
      )}
    </main>
  );
}