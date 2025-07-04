'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState<boolean>(false);
  const [currentPitchPage, setCurrentPitchPage] = useState<number>(0);
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);
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
    // ... (keep other pitchContent items as they are)
    {
      title: 'VI. Pakker & Priser',
      content: (
        <div className={styles.packagesContainer}>
          <div className={`${styles.package} ${styles.packageRow}`}>
            <div className={`${styles.package} ${styles.packageGreen}`}>
              <h3>🟠 Klar til at eje</h3>
              <p><strong>Pris:</strong> 10.000 kr.</p>
              <p>Til dig, der vil i gang.</p>
              <ul className={styles.packageList}>
                <li>Hardware wallet opsætning.</li>
                <li>Backup-strategi.</li>
                <li>Grundlæggende sikkerhed.</li>
              </ul>
              <p><strong>Varighed:</strong> Ca. 2 timer.</p>
            </div>
            <div className={`${styles.package} ${styles.packageYellow}`}>
              <h3>🟡 Ejer med overblik</h3>
              <p><strong>Pris:</strong> 20.000 kr.</p>
              <p>Til dig med større mængder.</p>
              <ul className={styles.packageList}>
                <li>Alt i første pakke.</li>
                <li>Airgapped wallet-struktur.</li>
                <li>Bitcoin node opsætning.</li>
              </ul>
              <p><strong>Varighed:</strong> 2–4 timer.</p>
            </div>
            <div className={`${styles.package} ${styles.packageBlue}`}>
              <h3>🔵 Fuld kontrol</h3>
              <p><strong>Pris:</strong> 45.000 kr.</p>
              <p>Til suveræn sikkerhed.</p>
              <ul className={styles.packageList}>
                <li>Alt i “Ejer med overblik”.</li>
                <li>Multisig-opsætning.</li>
                <li>Arveplan og vejledning.</li>
              </ul>
              <p><strong>Varighed:</strong> Fleksibel.</p>
            </div>
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

  const handleDownloadAccess = async () => {
    try {
      const response = await fetch('/api/pdfs', { method: 'GET' });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.urls && Array.isArray(data.urls)) {
        setPdfUrls(data.urls);
        setShowDownloadModal(true);
      } else {
        alert('No URLs found in response');
      }
    } catch (error) {
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
  }, []);

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
    <main className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Subtle watermark background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/watermark.png)' }} // Add watermark.png to public/
      ></div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 flex items-center justify-between h-full">
        {/* Left Side - Text Content */}
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-serif mb-4 leading-tight">
            <span className="text-white">MASTER BITCOIN </span>
            <span className="text-bitcoin-orange">SELF</span>
            <span className="text-white"> CUSTODY</span>
          </h1>
          <p className="text-gray-300 mb-6 max-w-prose">
            Take control of your Bitcoin with secure, private self-custody solutions. MitDepot guides you to protect your wealth forever.
          </p>
          <div className="space-x-4">
            <Link
              href="https://calendly.com/selvdepot/30min"
              className="inline-block bg-bitcoin-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-bitcoin-orange"
            >
              Book a Consultation
            </Link>
            <Link
              href="#learn-more"
              className="inline-block border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side - Video/Image */}
        <div className="w-1/2 relative">
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="/hero-image.jpg" // Add hero-image.jpg to public/
              alt="Bitcoin self-custody demo"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/play-icon.png" // Add play-icon.png to public/
                alt="Play video"
                width={60}
                height={60}
                className="opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the Content */}
      <div className={styles.contentWrapper}>
        <div style={{ backgroundColor: '#fff3e0', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <p className={styles.intro}>
            Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
            <br />
            Dine penge. Din fremtid. Din familie. Tag kontrol.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff3e0', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <p className={styles.description}>
            Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
            med begrænset udbud, der ikke omliggende til nogen.
            Ingen banker. Ingen stater. Ingen modparter.
            Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
            Hos MitDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
            100% under din egen kontrol!
          </p>
        </div>

        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>

        <div style={{ backgroundColor: '#fff3e0', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <p className={styles.mainContent}>
            Bitcoin self-custody ved hjælp af MitDepot er din livbåd i en verden hvor det
            traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
            og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem, men DU er stadig den største risiko for tab af dine Bitcoin.
            Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
            arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
            nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed.
            Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
          </p>
        </div>

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

        <div style={{ backgroundColor: '#fff3e0', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
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
      </div>

      <div className={styles.footerLinks}>
        {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
          <p
            key={section}
            onClick={() => setActiveSection(activeSection === section ? null : section)}
            className={`${styles.footerLink} ${activeSection === section ? styles.activeLink : ''}`}
          >
            {section}
          </p>
        ))}
      </div>

      {activeSection && (
        <div className={styles.footerContent}>
          {activeSection === 'Kontakt' && (
            <>
              <p>
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
            </>
          )}
          {activeSection === 'Disclaimer' && (
            <p>
              Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
              finansiel, skattemæssig eller investeringsrådgivning. MitDepot tilbyder alene undervisning
              og værktøjer til selvstændig opbevaring af Bitcoin.
            </p>
          )}
          {activeSection === 'Privatliv' && (
            <p>
              Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
              håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
            </p>
          )}
          {activeSection === 'Vilkår' && (
            <p>
              Ved brug af MitDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
              Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
            </p>
          )}
        </div>
      )}
      {activeSection === 'Pitch' && showPitch && (
        <div className={styles.pitchSection}>
          <button onClick={handleClosePitch} className={styles.closeButton}>
            Luk
          </button>
          <div className={styles.pitchContent}>
            <h2>{pitchContent[currentPitchPage].title}</h2>
            {pitchContent[currentPitchPage].content}
            <div className={styles.pitchNavigation}>
              {currentPitchPage > 0 && (
                <button onClick={handlePreviousPage} className={`${styles.navButton} ${styles.prevButton}`}>
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button onClick={handleNextPage} className={`${styles.navButton} ${styles.nextButton}`}>
                  Næste
                </button>
              )}
            </div>
          </div>
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
                <button type="button" onClick={handleClosePasswordModal} className={styles.cancelButton}>
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
                      {['MitDepot Gendannelses Ark', 'MitDepot AntiScam', 'MitDepot One Pager'][index]}
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