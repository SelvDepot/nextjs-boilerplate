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
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span role="img" aria-label="checkmark">✅</span> Bitcoin er verdens første aktiv uden modpartsrisiko</li>
            <li><span role="img" aria-label="checkmark">✅</span> Det kan opbevares og overføres uden banker, stater eller tilladelse</li>
            <li><span role="img" aria-label="checkmark">✅</span> Alligevel holder de fleste ikke deres bitcoin korrekt</li>
            <li><span role="img" aria-label="checkmark">✅</span> Mange tror, de ejer bitcoin – men har kun et løfte fra en tredjepart</li>
          </ul>
          <p style={{ fontStyle: 'italic', margin: '1.5rem 0', lineHeight: '1.8' }}>
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
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span role="img" aria-label="checkmark">✅</span> Inflation og faldende købekraft eroderer dine penge over tid</li>
            <li><span role="img" aria-label="checkmark">✅</span> Øget kontrol og konfiskatoriske tiltag fra stater og banker begrænser din frihed</li>
            <li><span role="img" aria-label="checkmark">✅</span> Over 80 % af bitcoin-ejere bruger custodial løsninger som børser, ETF’er og platforme, hvilket medfører:</li>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li><span role="img" aria-label="checkmark">✅</span> Risiko for hacks, datalæk, insolvens og nedlukning (fx FTX, Mt. Gox, Coinbase)</li>
              <li><span role="img" aria-label="checkmark">✅</span> Mistet adgang, beslaglæggelse og frosne konti</li>
              <li><span role="img" aria-label="checkmark">✅</span> Overvågning og regulatorisk pres</li>
            </ul>
          </ul>
          <p style={{ fontStyle: 'italic', margin: '1.5rem 0', lineHeight: '1.8' }}>
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
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span role="img" aria-label="checkmark">✅</span> 1:1 rådgivning med personlig og sikker opsætning</li>
            <li><span role="img" aria-label="checkmark">✅</span> Vi bygger løsningen sammen – trin for trin</li>
            <li><span role="img" aria-label="checkmark">✅</span> Du ejer det selv – vi rører aldrig dine bitcoin</li>
          </ul>
          <p>Inkluderer:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span role="img" aria-label="checkmark">✅</span> Arveplanlægning</li>
            <li><span role="img" aria-label="checkmark">✅</span> Backup-struktur</li>
            <li><span role="img" aria-label="checkmark">✅</span> Dokumentation og forståelse</li>
            <li><span role="img" aria-label="checkmark">✅</span> Tilpasses din risikoprofil og tekniske evner</li>
          </ul>
        </>
      ),
    },
    {
      title: 'IV. Udbytte',
      content: (
        <>
          <p>Efter rådgivning har du:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span role="img" aria-label="checkmark">✅</span> 100 % ejerskab og kontrol over dine bitcoin</li>
            <li><span role="img" aria-label="checkmark">✅</span> En løsning du selv har konstrueret og forstår</li>
            <li><span role="img" aria-label="checkmark">✅</span> Uafhængighed af banker og platforme</li>
            <li><span role="img" aria-label="checkmark">✅</span> Langtidsholdbar og arvevenlig struktur</li>
            <li><span role="img" aria-label="checkmark">✅</span> Mulighed for fremtidig sparring eller justering</li>
            <li><span role="img" aria-label="checkmark">✅</span> Tryghed og ro – for dig og din familie</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor vælge SelvDepot?',
      content: (
        <>
          <p>Punkter:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span role="img" aria-label="checkmark">✅</span> Vi er 100 % Bitcoin-native – vi rådgiver kun i Bitcoin</li>
            <li><span role="img" aria-label="checkmark">✅</span> 100 % uafhængige – vi holder intet, formidler intet</li>
            <li><span role="img" aria-label="checkmark">✅</span> Vi beskæftiger os ikke med trading, investering eller gebyrer</li>
            <li><span role="img" aria-label="checkmark">✅</span> Vi underviser – ikke opbevarer</li>
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
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            {/* Pakke: Klar til at eje */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.2))',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟠</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Klar til at eje
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d4af37', margin: '0.5rem 0' }}>
                10.000 kr.
              </p>
              <p>Til dig, der vil i gang – eller optimere det, du allerede har.</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
                <li><span role="img" aria-label="checkmark">✅</span> Hardware wallet-rådgivning og opsætning</li>
                <li><span role="img" aria-label="checkmark">✅</span> Single-sig med/uden passphrase</li>
                <li><span role="img" aria-label="checkmark">✅</span> Backup-strategi og risikoforståelse</li>
                <li><span role="img" aria-label="checkmark">✅</span> Grundlæggende sikkerhed og vaner</li>
                <li><span role="img" aria-label="checkmark">✅</span> Gennemgang af eksisterende opsætning (hvis ønsket)</li>
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
                background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1), rgba(250, 204, 21, 0.2))',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                textAlign: 'center',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟡</div>
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#22c55e',
                  color: '#fff',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                }}
              >
                Anbefalet
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Ejer med overblik
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d4af37', margin: '0.5rem 0' }}>
                20.000 kr.
              </p>
              <p>Til dig med større mængder bitcoin og behov for teknisk dybde.</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
                <li><span role="img" aria-label="checkmark">✅</span> Alt i første pakke</li>
                <li><span role="img" aria-label="checkmark">✅</span> Airgapped wallet-struktur</li>
                <li><span role="img" aria-label="checkmark">✅</span> Brug og opsætning af Bitcoin node</li>
                <li><span role="img" aria-label="checkmark">✅</span> Skræddersyet recovery-plan</li>
                <li><span role="img" aria-label="checkmark">✅</span> Fysisk backup-strategi</li>
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
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.2))',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔵</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Fuld kontrol
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d4af37', margin: '0.5rem 0' }}>
                45.000 kr.
              </p>
              <p>Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
                <li><span role="img" aria-label="checkmark">✅</span> Alt i “Ejer med overblik”</li>
                <li><span role="img" aria-label="checkmark">✅</span> Multisig-opsætning (hvis ønsket)</li>
                <li><span role="img" aria-label="checkmark">✅</span> Udvidet trusselsanalyse (phishing, kidnapning, mm.)</li>
                <li><span role="img" aria-label="checkmark">✅</span> Arveplan og familievejledning</li>
                <li><span role="img" aria-label="checkmark">✅</span> Én gratis check-up inden for 12 måneder</li>
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

  // Testimonial-data
  const testimonials = [
    {
      quote: "SelvDepot gav mig ro i sindet ved at sikre mine Bitcoin på en måde, jeg forstår fuldt ud.",
      author: "Jens Hansen, Kunde",
    },
    {
      quote: "Eksklusiv service og professionel vejledning – højst anbefalelsesværdig!",
      author: "Anna Sørensen, Kunde",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Håndter adgangskode for pitch
  const handlePitchAccess = () => {
    const password = prompt('Indtast adgangskode for at vise pitch');
    if (password === '9945') {
      setShowPitch(true);
      setActiveSection('Pitch');
      setCurrentPitchPage(0);
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

  // Navigation i pitch og testimonials
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

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
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
        backgroundImage: 'url("/imagebaggrund.png"), linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem 1rem',
        color: '#ffffff',
        width: '100%',
        margin: 0,
        position: 'relative',
      }}
    >
      {/* Horisontal linje */}
      <hr style={{ border: '1px solid #d4af37', width: '10%', margin: '2rem auto' }} />

      {/* Logo og titel */}
      <section style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0, 0, 0, 0.7)' }}>
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: '150px',
            height: 'auto',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '1rem 0', letterSpacing: '2px', textTransform: 'uppercase' }}>
          SelvDepot
        </h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#d4af37', marginBottom: '1rem' }}>
          Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
          <br />
          <span style={{ fontWeight: 'normal', color: '#ffffff' }}>Sikkert. Privat. For evigt.</span>
        </h2>
      </section>

      {/* Intro */}
      <section style={{ padding: '2rem', background: 'rgba(30, 41, 59, 0.8)', margin: '2rem 0' }}>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', lineHeight: '1.8' }}>
          Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
          <br />
          Dine penge. Din fremtid. Din familie. Tag kontrol.
        </p>
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#d4af37',
              color: '#1e293b',
              padding: '1rem 3rem',
              width: '80%',
              maxWidth: '400px',
              fontSize: '1.2rem',
              fontWeight: 600,
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book kaldet – din fremtidige ro starter her
          </a>
        </div>
      </section>

      {/* Hvad Bitcoin er */}
      <section style={{ padding: '2rem', background: 'rgba(37, 99, 235, 0.2)', margin: '2rem 0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#d4af37', textAlign: 'center', marginBottom: '1rem' }}>
          Hvad er Bitcoin?
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
          med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
          Ingen banker. Ingen stater. Ingen modparter.
          Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
          Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
          100% under din egen kontrol. Privat. Permanent.
        </p>
      </section>

      {/* Video */}
      <section style={{ padding: '2rem', background: 'rgba(0, 0, 0, 0.7)', margin: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#d4af37', marginBottom: '1rem' }}>
          🎥 Se intro – forstå hvorfor 80% mister deres Bitcoin
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video
            controls
            autoPlay
            muted
            poster="/intro-thumbnail.jpg" // Placeholder for thumbnail
            style={{
              width: '100%',
              maxWidth: '700px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: '2px solid #d4af37',
            }}
          >
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>
      </section>

      {/* Brødtekst */}
      <section style={{ padding: '2rem', background: 'rgba(22, 78, 99, 0.2)', margin: '2rem 0' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det
          traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
          og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks,
          social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin.
          Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
          arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
          nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed.
          Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
        </p>
      </section>

      {/* Sekundær CTA */}
      <section style={{ padding: '2rem', background: 'rgba(30, 41, 59, 0.8)', margin: '2rem 0', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#bfa76f',
            color: '#1e293b',
            padding: '1rem 3rem',
            width: '80%',
            maxWidth: '400px',
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: '10px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Book kaldet – sikr din økonomiske frihed nu
        </a>
      </section>

      {/* Vurderingstekst */}
      <section style={{ padding: '2rem', background: 'rgba(250, 204, 21, 0.2)', margin: '2rem 0', textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: '#d4af37', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
          Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
          self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
          de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
          vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
          <br />
          <br />
          Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
          at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
        </p>
      </section>

      {/* Testimonial-karusel */}
      <section style={{ padding: '2rem', background: 'rgba(0, 0, 0, 0.7)', margin: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#d4af37', marginBottom: '1rem' }}>Hvad vores kunder siger</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', background: 'rgba(30, 41, 59, 0.8)', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            "{testimonials[currentTestimonial].quote}"
          </p>
          <p style={{ fontSize: '1rem', marginTop: '1rem', color: '#d4af37' }}>
            – {testimonials[currentTestimonial].author}
          </p>
          <button
            onClick={handleNextTestimonial}
            style={{
              background: '#d4af37',
              color: '#1e293b',
              padding: '0.5rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              marginTop: '1rem',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Næste
          </button>
        </div>
      </section>

      {/* Pakker */}
      <section style={{ padding: '2rem', background: 'rgba(37, 99, 235, 0.2)', margin: '2rem 0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#d4af37', textAlign: 'center', marginBottom: '2rem' }}>Pakker & Priser</h2>
        {pitchContent[5].content}
      </section>

      {/* Footer-links */}
      <section style={{ padding: '2rem', background: 'rgba(0, 0, 0, 0.7)', margin: '2rem 0', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#d1d5db' }}>
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
      </section>

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
      {/* Pitch-sektion */}
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
            fontSize: '1rem',
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
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem', color: '#d4af37' }}>
              {pitchContent[currentPitchPage].title}
            </h2>
            {pitchContent[currentPitchPage].content}
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {currentPitchPage > 0 && (
                <button
                  onClick={handlePreviousPage}
                  style={{
                    background: '#bfa76f',
                    color: '#1e293b',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button
                  onClick={handleNextPage}
                  style={{
                    background: '#d4af37',
                    color: '#1e293b',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1.1rem',
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

      {/* Mobiloptimering */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          h2 { font-size: 1.5rem; }
          p { font-size: 1.1rem; }
          a {
            width: 100%;
            padding: 1rem 2rem;
          }
          section { padding: 1.5rem; }
          .package-card { max-width: 100%; }
        }
      `}</style>
    </main>
  );
}