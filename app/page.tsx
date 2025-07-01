'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  // Pitch content
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
            <li>Arveplan, kan din familie/børn finde ud af at få adgang til dine Bitcoin i tilfælde af sygdom/død?</li>
            <li>Trusselsanalyse, Svigtepunksanalyse, Privatlivsbehov.</li>
          </ul>
          <p>Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler.</p>
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
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', maxWidth: '350px', padding: '1.5rem', border: '2px solid #22c55e', borderRadius: '8px', backgroundColor: 'rgba(34, 197, 94, 0.1)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🟠 Klar til at eje</h3>
              <p><strong>Pris:</strong> 10.000 kr.<br />Til dig, der vil i gang – eller optimere det, du allerede har.</p>
              <p>Inkluderer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Single-sig med/uden passphrase</li>
                <li>Backup-strategi og risikoforståelse</li>
                <li>Grundlæggende sikkerhed og vaner</li>
              </ul>
              <p style={{ fontSize: '0.9rem' }}><strong>Varighed:</strong> Ca. 2 timer</p>
            </div>
            <div style={{ flex: '1 1 300px', maxWidth: '350px', padding: '1.5rem', border: '2px solid #facc15', borderRadius: '8px', backgroundColor: 'rgba(250, 204, 21, 0.1)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🟡 Ejer med overblik</h3>
              <p><strong>Pris:</strong> 20.000 kr.<br />Til dig med større mængder bitcoin og behov for teknisk dybde.</p>
              <p>Inkluderer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Alt i første pakke</li>
                <li>Airgapped wallet-struktur</li>
                <li>Skræddersyet recovery-plan/guide</li>
              </ul>
              <p style={{ fontSize: '0.9rem' }}><strong>Varighed:</strong> 2–4 timer</p>
            </div>
            <div style={{ flex: '1 1 300px', maxWidth: '350px', padding: '1.5rem', border: '2px solid #2563eb', borderRadius: '8px', backgroundColor: 'rgba(37, 99, 235, 0.1)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🔵 Fuld kontrol</h3>
              <p><strong>Pris:</strong> 45.000 kr.<br />Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.</p>
              <p>Inkluderer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Alt i “Ejer med overblik”</li>
                <li>Multisig-opsætning (hvis relevant)</li>
                <li>Arveplan og familievejledning</li>
                <li>Ét gratis check-up inden for 4 måneder</li>
              </ul>
              <p style={{ fontSize: '0.9rem' }}><strong>Varighed:</strong> Fleksibel efter behov</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Handle pitch access
  const handlePitchAccess = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = (e) => {
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

  // Keyboard shortcut with freeze prevention
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'p' && !showPasswordModal && !showPitch) {
        event.preventDefault();
        handlePitchAccess();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [passwordInput, showPasswordModal, showPitch]);

  // Pitch navigation
  const handleNextPage = () => {
    if (currentPitchPage < pitchContent.length - 1) setCurrentPitchPage(currentPitchPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPitchPage > 0) setCurrentPitchPage(currentPitchPage - 1);
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
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', padding: '2rem 1rem', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <img src="/logo.png" alt="SelvDepot Logo" style={{ maxWidth: '200px', marginBottom: '1rem', position: 'absolute', top: '1rem', left: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: '600', margin: '0 0 0.5rem' }}>SelvDepot</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '400', color: '#d1d5db', marginBottom: '2rem' }}>
          Vi hjælper dig eje dine Bitcoin selv – og sove trygt.<br />Sikkert. Privat. For evigt.
        </h2>
        <a href="https://calendly.com/selvdepot/30min" style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '0.8rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', display: 'inline-block' }}>
          Book et gratis 30-minutters møde
        </a>
        <p style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '1rem', lineHeight: '1.6', color: '#d1d5db' }}>
          Bitcoin: Din suveræne, globale værdi – 100% under din kontrol med SelvDepot.
        </p>
        <div style={{ width: '100%', maxWidth: '700px', height: '300px', background: '#1e293b', margin: '2rem auto', borderRadius: '8px' }}></div>
        <p style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '0.9rem', color: '#facc15', fontStyle: 'italic', lineHeight: '1.5' }}>
          Dette er ikke et salgstrick. Vi vurderer nøje, om du er egnet til self-custody. Hvis du ikke er klar, får du støtte, indtil du er.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="https://calendly.com/selvdepot/30min" style={{ backgroundColor: '#15803d', color: '#fff', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
            Klar til at tage ansvar? Book et kald nu
          </a>
        </div>
        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#d1d5db' }}>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <p key={section} onClick={() => setActiveSection(activeSection === section ? null : section)} style={{ cursor: 'pointer', textDecoration: 'underline', margin: 0 }}>
              {section}
            </p>
          ))}
        </div>
        {activeSection === 'Kontakt' && (
          <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
            <p>📬 Email: <a href="mailto:Selvdepot@gmail.com" style={{ color: '#60a5fa' }}>Selvdepot@gmail.com</a></p>
            <p>📅 Book: <a href="https://calendly.com/selvdepot/30min" style={{ color: '#60a5fa' }}>calendly.com/selvdepot/30min</a></p>
          </div>
        )}
        {activeSection === 'Disclaimer' && (
          <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
            <p>Alt indhold er til generel information og udgør ikke juridisk eller finansiel rådgivning. SelvDepot tilbyder kun undervisning.</p>
          </div>
        )}
        {activeSection === 'Privatliv' && (
          <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
            <p>Vi indsamler ingen oplysninger uden samtykke. Booking via Calendly følger deres politikker.</p>
          </div>
        )}
        {activeSection === 'Vilkår' && (
          <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
            <p>Brug accepterer, at indhold er uddannelsesmæssigt. Ingen investeringsrådgivning. Dansk lov gælder.</p>
          </div>
        )}
        {activeSection === 'Pitch' && showPitch && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: '#1e293b', padding: '3rem', zIndex: 1000, overflowY: 'auto', textAlign: 'left', fontSize: '1.2rem', lineHeight: '1.8', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <button onClick={handleClosePitch} style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#dc2626', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' }}>
              Luk
            </button>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>{pitchContent[currentPitchPage].title}</h2>
              {pitchContent[currentPitchPage].content}
              <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {currentPitchPage > 0 && (
                  <button onClick={handlePreviousPage} style={{ background: '#2563eb', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                    Forrige
                  </button>
                )}
                {currentPitchPage < pitchContent.length - 1 && (
                  <button onClick={handleNextPage} style={{ background: '#22c55e', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                    Næste
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {showPasswordModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '8px', textAlign: 'center', width: '300px', color: '#ffffff' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Indtast adgangskode</h3>
              <form onSubmit={handlePasswordSubmit}>
                <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #4b5563', borderRadius: '4px', backgroundColor: '#374151', color: '#ffffff' }} placeholder="Indtast kode" />
                <div>
                  <button type="submit" style={{ background: '#22c55e', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Bekræft</button>
                  <button type="button" onClick={handleClosePasswordModal} style={{ background: '#dc2626', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginLeft: '1rem' }}>Annuller</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}