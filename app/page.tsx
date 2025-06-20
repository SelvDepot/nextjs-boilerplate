'use client';

import * as React from 'react';
import { useState, useEffect, lazy, Suspense } from 'react';
import Chart from 'chart.js/auto';

// Lazy load the LazyVideo component from a separate file
const LazyVideo = lazy(() => import('./components/LazyVideo'));

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [charts, setCharts] = useState<{ [key: string]: Chart | null }>({});

  // Pitch-indhold med visualiseringer
  const pitchContent = [
    {
      title: 'I. Indledning – Hvad er SelvDepot?',
      content: (
        <>
          <p>
            "Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring i en verden, hvor købekraften af traditionelle valutaer smelter som sne i solen. SelvDepot er din guide til sikker, privat og fremtidssikret opbevaring af Bitcoin gennem self-custody, hvor du holder nøglerne selv. Med inflation, der æder din formue dagligt, og historiske eksempler på konfiskation som guld i 1933, er tiden løbende ud for at sikre din økonomi. Vi arbejder 1:1 med formuende individer, der ønsker fuld kontrol uden at afhænge af sårbare tredjeparter. Alt bygger på gennemtænkt sikkerhed, open-source værktøjer og absolut diskretion. Ikke mere hype – tag kontrol, før det er for sent!"
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Vi arbejder 1:1 med formuende personer, der ønsker fuld kontrol uden at røre deres private keys.</li>
            <li>Alt bygger på gennemtænkt sikkerhed, open-source værktøjer og absolut diskretion.</li>
            <li>Det her handler ikke om hype – men om, hvordan du undgår at miste alt.</li>
          </ul>
          <div style={{ margin: '2rem 0' }}>
            <canvas id="inflationChart" width="400" height="200"></canvas>
            <img src="/burned_seed_phrase.jpg" alt="Brændt seed-phrase" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          </div>
        </>
      ),
    },
    {
      title: 'II. Problemet – Hvorfor er det her nødvendigt?',
      content: (
        <>
          <p>
            Over 80% af Bitcoin-ejere står over for tab gennem hacks, social engineering eller modpartsrisiko på børser som FTX, hvor milliarder forsvandt i et øjeblik. Inflation har reduceret dollarens købekraft med over 20% siden 2015, mens regeringer har vist villighed til konfiskation – tænk på guldinddragelsen i 1933 eller de seneste regulatoriske angreb på selvstyrede lommebøger. 20% af alle BTC er allerede tabt på grund af menneskelige fejl, og uden en arveplan kan dine efterladte miste adgang for evigt. En fejl – en glemt kode eller et hack – og din formue er væk. Compliance og sikkerhed kolliderer, og kun self-custody kan beskytte dig mod et kollapsende system.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
            <li>20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
            <li>Uden en klar arveplan kan dine efterladte miste adgangen for altid.</li>
            <li>En enkelt fejl – ét stykke papir, én mistet kode – og pengene er væk.</li>
            <li>Compliance og sikkerhed kolliderer ofte – vi forener dem.</li>
          </ul>
          <div style={{ margin: '2rem 0' }}>
            <canvas id="lossDistributionChart" width="400" height="200"></canvas>
            <img src="/abandoned_bank.jpg" alt="Forladt bank" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          </div>
        </>
      ),
    },
    {
      title: 'III. Løsningen – Hvad tilbyder SelvDepot?',
      content: (
        <>
          <p>
            Vi løfter dig ud af kaosset med en skræddersyet opsætning: Hardware-wallets i cold storage, multisig for at undgå enkeltfejl, og arveplaner, der sikrer din familie mod fremtidige tab. Med SelvDepot får du hands-on hjælp til at mestre self-custody – uden at vi nogensinde rører dine midler. I en tid, hvor regeringer overvejer at begrænse selvstyrede lommebøger, og hvor tredjeparter som Coinbase kan fryses, er vores open-source, testede løsninger din sidste skanse. Tag kontrollen, før regulatorerne lukker dørene!
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Hardware-wallets (cold storage, offline sikkerhed)</li>
            <li>Multisig (flere nøgler – ingen enkeltfejl)</li>
            <li>Arveplan (sikrer kontinuitet for din familie)</li>
          </ul>
          <p>Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler.</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Alt er open-source, dokumenteret og testet – du kan selv inspicere det hele.</li>
          </ul>
          <div style={{ margin: '2rem 0' }}>
            <canvas id="securityComparisonChart" width="400" height="200"></canvas>
            <img src="/ledger_device.jpg" alt="Ledger hardware wallet" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          </div>
        </>
      ),
    },
    {
      title: 'IV. Udbytte – Hvordan SelvDepot kommer ind i billedet',
      content: (
        <>
          <p>
            Self-custody gennem SelvDepot giver dig ro i maven midt i en storm af økonomisk usikkerhed. Mens inflation stjæler købekraft, og konfiskationsrisikoen vokser, ved du præcis, hvor dine Bitcoin er – utilgængelige for hacks eller statsligt pres. Du undgår at efterlade kaos til din familie med vores arveplaner, og du slipper for at stole på ustabile børser. Med os som din sparringspartner får du teknisk ekspertise og personlig frihed – en kombination, kun få har opnået. Bliv en del af dem, der sikrer deres fremtid nu!
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Du får ro i maven – nu og i fremtiden.</li>
            <li>Du ved præcis, hvor dine Bitcoin er – og at ingen andre har adgang.</li>
            <li>Du undgår at efterlade kaos til din familie.</li>
            <li>Du slipper for at famle i mørket – vi har prøvet det før og guider dig hele vejen.</li>
            <li>Du tager ansvar – men med en sparringspartner, der forstår både teknikken og dine værdier.</li>
          </ul>
          <div style={{ margin: '2rem 0' }}>
            <canvas id="valueGrowthChart" width="400" height="200"></canvas>
            <img src="/happy_family.jpg" alt="Familie med Bitcoin" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          </div>
        </>
      ),
    },
    {
      title: 'V. Hvorfor SelvDepot?',
      content: (
        <>
          <p>
            Vi er 100% Bitcoin-only – dedikerede til at gøre self-custody tilgængelig for dig, ikke til at kompromittere din frihed. Vores open-source løsninger er gennemtestet og giver dig kontrol, mens regulatoriske trusler mod selvstyre vokser i Europa og USA. Vi forstår behovene hos dem, der værdsætter diskretion og arv, og vi rådgiver uden at opbevare – du ejer, du bestemmer. Med $5.6 milliarder tabt til svindel i 2023 alene, er vores praktiske løsninger din chance for at undgå at blive den næste. Dette er ikke et projekt – det er din livline, før alle andre tager den fra dig.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <li>Vi er 100 % Bitcoin-only – vi gør ikke alt. Vi gør det her.</li>
            <li>Alt vi bruger er open-source og gennemtestet – ingen sorte bokse.</li>
            <li>Vi forstår HNWI’s behov: kontrol, diskretion og arv.</li>
            <li>Vi rådgiver – vi opbevarer ikke. Du ejer, du bestemmer.</li>
            <li>Vores løsninger fungerer i praksis – ikke bare på papir.</li>
          </ul>
          <div style={{ margin: '2rem 0' }}>
            <canvas id="cryptoLossChart" width="400" height="200"></canvas>
            <img src="/closed_bank_door.jpg" alt="Lukket bankdør" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          </div>
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
      setPasswordInput('');
    } else {
      alert('Forkert adgangskode. Prøv igen.');
      setPasswordInput('');
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

  // Opret charts når komponenten mountes
  useEffect(() => {
    const createCharts = () => {
      // Inflation vs Bitcoin værdi
      if (charts['inflationChart'] === undefined && document.getElementById('inflationChart')) {
        charts['inflationChart'] = new Chart(document.getElementById('inflationChart') as HTMLCanvasElement, {
          type: 'line',
          data: {
            labels: ['2015', '2020', '2025'],
            datasets: [
              { label: 'USD Købekraft', data: [100, 85, 70], borderColor: 'red', fill: false },
              { label: 'Bitcoin Værdi', data: [200, 1000, 5000], borderColor: 'green', fill: false },
            ],
          },
          options: { responsive: true, scales: { y: { beginAtZero: true } } },
        });
      }

      // Tab-fordeling
      if (charts['lossDistributionChart'] === undefined && document.getElementById('lossDistributionChart')) {
        charts['lossDistributionChart'] = new Chart(document.getElementById('lossDistributionChart') as HTMLCanvasElement, {
          type: 'pie',
          data: {
            labels: ['Hacks', 'Menneskelige Fejl', 'Konfiskation'],
            datasets: [{ data: [40, 50, 10], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
          },
          options: { responsive: true },
        });
      }

      // Sikkerhedssammenligning
      if (charts['securityComparisonChart'] === undefined && document.getElementById('securityComparisonChart')) {
        charts['securityComparisonChart'] = new Chart(document.getElementById('securityComparisonChart') as HTMLCanvasElement, {
          type: 'bar',
          data: {
            labels: ['Hot Wallet', 'Custodial', 'Multisig'],
            datasets: [{ label: 'Sikkerhedsniveau', data: [20, 50, 90], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
          },
          options: { responsive: true, scales: { y: { max: 100, beginAtZero: true } } },
        });
      }

      // Vækst vs Købekraft
      if (charts['valueGrowthChart'] === undefined && document.getElementById('valueGrowthChart')) {
        charts['valueGrowthChart'] = new Chart(document.getElementById('valueGrowthChart') as HTMLCanvasElement, {
          type: 'line',
          data: {
            labels: ['2015', '2020', '2025'],
            datasets: [
              { label: 'Bitcoin Vækst', data: [200, 1000, 5000], borderColor: 'green', fill: false },
              { label: 'Fiat Købekraft', data: [100, 85, 70], borderColor: 'red', fill: false },
            ],
          },
          options: {
            responsive: true,
            scales: { y: { beginAtZero: true } },
            plugins: { annotation: { annotations: [{ type: 'line', yMin: 70, yMax: 70, borderColor: 'orange', borderWidth: 2, label: { content: 'Konfiskationsrisiko' } }] } },
          },
        });
      }

      // Kryptotab
      if (charts['cryptoLossChart'] === undefined && document.getElementById('cryptoLossChart')) {
        charts['cryptoLossChart'] = new Chart(document.getElementById('cryptoLossChart') as HTMLCanvasElement, {
          type: 'bar',
          data: {
            labels: ['2021', '2022', '2023'],
            datasets: [{ label: 'Kryptotab ($M)', data: [3900, 4600, 5600], backgroundColor: '#FF6384' }],
          },
          options: { responsive: true, scales: { y: { beginAtZero: true } } },
        });
      }

      setCharts({ ...charts });
    };

    createCharts();
    return () => {
      Object.values(charts).forEach((chart) => chart?.destroy());
    };
  }, [currentPitchPage]);

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
          style={{ maxWidth: '150px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
        />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, textAlign: 'center' }}>SelvDepot</h1>
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
        Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen. Ingen banker. Ingen stater. Ingen modparter. Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten. Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt: 100% under din egen kontrol. Privat. Permanent.
      </p>

      {/* Lazy-loaded Video */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Suspense fallback={<div>Loading video...</div>}>
          <LazyVideo />
        </Suspense>
      </div>

      {/* Brødtekst */}
      <div style={{ marginTop: '2rem', fontSize: '1rem', lineHeight: '1.5', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks, social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin. Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed. Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
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
        Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger – vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar. <br /> <br /> Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
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
            style={{ cursor: 'pointer', textDecoration: 'underline', margin: 0 }}
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
            <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>
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
            backgroundColor: '#1e293b',
            padding: '3rem',
            zIndex: 1000,
            overflowY: 'auto',
            textAlign: 'left',
            fontSize: '1.2rem',
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
              fontSize: '0.9rem',
            }}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>{pitchContent[currentPitchPage].title}</h2>
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
                    fontSize: '1rem',
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
                    fontSize: '1rem',
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
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Indtast adgangskode</h3>
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
      {activeSection === 'Disclaimer' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
          <p>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk, finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}
      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}
      {activeSection === 'Vilkår' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem', textAlign: 'center' }}>
          <p>
            Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål. Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
    </main>
  );
}