
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
          <p><strong>“Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring.”</strong></p>
          <ul>
            <li>SelvDepot er rådgivning i sikker, privat og fremtidssikret opbevaring af Bitcoin.</li>
            <li>Vi arbejder 1:1 med formuebevidste personer.</li>
            <li>Alt bygger på gennemtænkt sikkerhed, open-source værktøjer og diskretion.</li>
            <li>Det her handler ikke om hype – men om, hvordan du undgår at miste alt.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'II. Problemet – Hvorfor er det her nødvendigt?',
      content: (
        <ul>
          <li>De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
          <li>20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
          <li>Uden en arveplan risikerer dine efterladte at miste adgangen for altid.</li>
          <li>Én fejl – ét stykke papir, én mistet kode – og formuen er væk.</li>
        </ul>
      ),
    },
    {
      title: 'III. Løsningen – Hvad tilbyder vi?',
      content: (
        <ul>
          <li>Hardware wallets tilpasset behov (single/multi, passphrase, airgapped).</li>
          <li>Multisig hvis relevant – ingen enkeltpunktfejl.</li>
          <li>Arveplan og recovery-struktur – så din familie har adgang, hvis du ikke har.</li>
          <li>Alt opsættes med dig – men vi rører aldrig dine nøgler eller enheder.</li>
        </ul>
      ),
    },
    {
      title: 'IV. Dit udbytte – Hvordan vi kommer ind i billedet',
      content: (
        <ul>
          <li>Ro i maven – du har styr på dine værdier, nu og fremover.</li>
          <li>Du ved præcis, hvor dine Bitcoin er – og at ingen andre kan tilgå dem.</li>
          <li>Du undgår at efterlade kaos – eller selv at miste adgangen.</li>
          <li>Du får en stærk sparringspartner, der forstår både teknikken og ansvaret.</li>
        </ul>
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
      alert('Forkert adgangskode.');
      setPasswordInput('');
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        handlePitchAccess();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
        <img src="/logo.png" alt="SelvDepot" style={{ height: '80px' }} />
      </div>

      {showPitch && (
        <div style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{pitchContent[currentPitchPage].title}</h2>
          {pitchContent[currentPitchPage].content}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            {currentPitchPage > 0 && (
              <button onClick={() => setCurrentPitchPage(currentPitchPage - 1)}>Forrige</button>
            )}
            {currentPitchPage < pitchContent.length - 1 && (
              <button onClick={() => setCurrentPitchPage(currentPitchPage + 1)}>Næste</button>
            )}
            <button onClick={() => setShowPitch(false)}>Luk</button>
          </div>
        </div>
      )}

      {showPasswordModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.75)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <form onSubmit={handlePasswordSubmit} style={{ background: '#1f2937', padding: '2rem', borderRadius: '8px' }}>
            <h3>Indtast adgangskode</h3>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ padding: '0.5rem', width: '100%', marginTop: '1rem' }}
              placeholder="Adgangskode"
            />
            <button type="submit" style={{ marginTop: '1rem' }}>Bekræft</button>
          </form>
        </div>
      )}

      <p style={{
        marginTop: '5rem',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#facc15',
        fontSize: '1rem',
        lineHeight: '1.6',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere self-custody af Bitcoin.
        Hvis du er for ung, for gammel, eller af andre grunde ikke har de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
        vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
        <br /><br />
        Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje at ringe til, hvis noget går galt.
        Bitcoin giver dig fuld kontrol – og fuldt ansvar.
      </p>
    </main>
  );
}
