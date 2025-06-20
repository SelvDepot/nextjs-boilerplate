'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [logoSize, setLogoSize] = useState(150); // Justérbar logo-størrelse i px

  // Pitch-indhold opdelt i sektioner
  const pitchContent = [
    {
      title: 'I. Indledning',
      content: (
        <>
          <p>
            SelvDepot specialiserer sig i rådgivning og optimering af Bitcoin-opbevaring – kendt som self-custody.
            <br />
            Vi assisterer både privatpersoner og institutioner i at eje deres bitcoin sikkert, uanset teknisk baggrund.
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Verdens første aktiv uden modpartsrisiko</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Opbevaring og overførsel uden tredjeparter</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> De fleste opbevarer ikke korrekt</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Mange ejer kun IOU’er fra tredjeparter</li>
          </ul>
          <p style={{ fontStyle: 'italic', color: '#a0aec0', margin: '2rem 0', lineHeight: '1.6' }}>
            “They’re not Bitcoin holders, they’re holders of Bitcoin IOUs.” – Trace Mayer
          </p>
        </>
      ),
    },
    {
      title: 'II. Problemet',
      content: (
        <>
          <p>
            Det nuværende fiat-system udsætter din formue for alvorlige risici, der truer din økonomiske frihed.
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Inflation og faldende købekraft</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Øget kontrol fra stater og banker</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> 80% bruger usikre custodial løsninger, risikerende:</li>
            <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
              <li><span style={{ color: '#c9a66b' }}>•</span> Hacks, insolvens (fx FTX, Mt. Gox)</li>
              <li><span style={{ color: '#c9a66b' }}>•</span> Beslaglæggelse og frosne konti</li>
              <li><span style={{ color: '#c9a66b' }}>•</span> Overvågning og regulering</li>
            </ul>
          </ul>
          <p style={{ fontStyle: 'italic', color: '#a0aec0', margin: '2rem 0', lineHeight: '1.6' }}>
            “Not your keys, not your coins.”
          </p>
        </>
      ),
    },
    {
      title: 'III. Løsningen',
      content: (
        <>
          <p>Vores tilgang inkluderer:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Personlig 1:1-rådgivning og sikker opsætning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Trinvis udvikling af din løsning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Fuldt ejerskab – vi rører ikke dine bitcoin</li>
          </ul>
          <p>Yderligere funktioner:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> Arveplanlægning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Robust backup-struktur</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Tilpasset dokumentation</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Skræddersyet efter din profil</li>
          </ul>
        </>
      ),
    },
    {
      title: 'IV. Udbytte',
      content: (
        <>
          <p>Efter vores rådgivning opnår du:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> 100% ejerskab og kontrol</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> En forstået, selvkonstrueret løsning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Uafhængighed af tredjeparter</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Langtidsholdbar og arvevenlig struktur</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Fremtidig sparring</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Tryghed for dig og din familie</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor vælge SelvDepot?',
      content: (
        <>
          <p>Vores unikke fordele:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem' }}>
            <li><span style={{ color: '#c9a66b' }}>•</span> 100% Bitcoin-fokuseret rådgivning</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Fuldt uafhængige – ingen formidling</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Ingen handel eller gebyrer</li>
            <li><span style={{ color: '#c9a66b' }}>•</span> Kun undervisning, ingen opbevaring</li>
          </ul>
          <p>Ej din bitcoin – for evigt.</p>
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
              gap: '2rem',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            {/* Pakke: Klar til at eje */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '2rem',
                background: '#2d3748',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                border: '1px solid #c9a66b',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '2.5rem', color: '#c9a66b', marginBottom: '1rem' }}>●</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
                Klar til at eje
              </h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 700, color: '#c9a66b', margin: '0.5rem 0' }}>
                10.000 kr.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#a0aec0', marginBottom: '1rem' }}>
                For begyndere eller optimering.
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.1rem', color: '#a0aec0' }}>
                <li><span style={{ color: '#c9a66b' }}>•</span> Hardware wallet-rådgivning</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Single-sig opsætning</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Backup-strategi</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Grundlæggende sikkerhed</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: '#718096' }}>Varighed: ~2 timer</p>
            </div>

            {/* Pakke: Ejer med overblik */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '2rem',
                background: '#2d3748',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                border: '1px solid #c9a66b',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '2.5rem', color: '#c9a66b', marginBottom: '1rem' }}>●</div>
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#c9a66b',
                  color: '#1a202c',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                Anbefalet
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
                Ejer med overblik
              </h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 700, color: '#c9a66b', margin: '0.5rem 0' }}>
                20.000 kr.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#a0aec0', marginBottom: '1rem' }}>
                For større beholdninger og teknisk dybde.
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.1rem', color: '#a0aec0' }}>
                <li><span style={{ color: '#c9a66b' }}>•</span> Alt i "Klar til at eje"</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Airgapped wallet</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Bitcoin node opsætning</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Skræddersyet recovery</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: '#718096' }}>Varighed: 2–4 timer</p>
            </div>

            {/* Pakke: Fuld kontrol */}
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: '350px',
                padding: '2rem',
                background: '#2d3748',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                border: '1px solid #c9a66b',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '2.5rem', color: '#c9a66b', marginBottom: '1rem' }}>●</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
                Fuld kontrol
              </h3>
              <p style={{ fontSize: '2.2rem', fontWeight: 700, color: '#c9a66b', margin: '0.5rem 0' }}>
                45.000 kr.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#a0aec0', marginBottom: '1rem' }}>
                For suveræn sikkerhed og arveplanlægning.
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.1rem', color: '#a0aec0' }}>
                <li><span style={{ color: '#c9a66b' }}>•</span> Alt i "Ejer med overblik"</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Multisig opsætning</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Udvidet trusselsanalyse</li>
                <li><span style={{ color: '#c9a66b' }}>•</span> Arveplan og check-up</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: '#718096' }}>Varighed: Fleksibel</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Testimonial-data
  const testimonials = [
    { quote: "SelvDepot sikrede mine Bitcoin med usædvanlig præcision og ro.", author: "Jens Hansen" },
    { quote: "Enestående service – højst anbefalelsesværdig.", author: "Anna Sørensen" },
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

  // Tastaturgenvej til pitch (Ctrl + P)
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

  // Navigation
  const handleNextPage = () => (currentPitchPage < pitchContent.length - 1 ? setCurrentPitchPage(currentPitchPage + 1) : null);
  const handlePreviousPage = () => (currentPitchPage > 0 ? setCurrentPitchPage(currentPitchPage - 1) : null);
  const handleNextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const handleClosePitch = () => {
    setShowPitch(false);
    setActiveSection(null);
    setCurrentPitchPage(0);
  };

  return (
    <main
      style={{
        background: '#1a202c',
        minHeight: '100vh',
        padding: '4rem 2rem',
        color: '#ffffff',
        width: '100%',
        margin: 0,
        fontFamily: '"Roboto", sans-serif',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Horisontal linje */}
      <hr style={{ border: '1px solid #c9a66b', width: '5%', margin: '3rem auto' }} />

      {/* Header */}
      <section style={{ textAlign: 'center', padding: '3rem', background: 'rgba(45, 55, 72, 0.9)', borderRadius: '10px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}>
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: `${logoSize}px`, // Justerbar størrelse
            height: 'auto',
            border: '2px solid #c9a66b',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(201, 166, 107, 0.3)',
            marginBottom: '2rem',
            transition: 'max-width 0.3s ease',
          }}
          onClick={() => setLogoSize(logoSize === 150 ? 200 : 150)} // Klik for at skifte størrelse
        />
        <h1 style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#ffffff' }}>
          SelvDepot
        </h1>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 500, color: '#c9a66b', marginTop: '1rem' }}>
          Sikker ejerskab af dine Bitcoin
        </h2>
        <p style={{ fontSize: '1.3rem', color: '#a0aec0', marginTop: '1rem' }}>Privat. Permanent. Tryg.</p>
      </section>

      {/* Intro */}
      <section style={{ padding: '3rem', background: 'rgba(45, 55, 72, 0.7)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <p style={{ fontSize: '1.4rem', textAlign: 'center', lineHeight: '1.8', color: '#e2e8f0' }}>
          Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine vilkår.
          <br />Tag kontrol over din fremtid og din families arv.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#c9a66b',
              color: '#1a202c',
              padding: '1.2rem 3.5rem',
              width: '70%',
              maxWidth: '450px',
              fontSize: '1.3rem',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(201, 166, 107, 0.4)',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Book en privat konsultation
          </a>
        </div>
      </section>

      {/* Hvad Bitcoin er */}
      <section style={{ padding: '3rem', background: 'rgba(26, 32, 44, 0.8)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', textAlign: 'center', marginBottom: '2rem' }}>
          Om Bitcoin
        </h2>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '900px', margin: '0 auto', color: '#e2e8f0' }}>
          Bitcoin er mere end en investering – det er digitale basepenge med et upolitisk, begrænset udbud.
          Uden manipulation, uden mellemled. Uden korrekt opbevaring forsvinder dog dets værdi.
          Hos SelvDepot mestre du self-custody med fuld kontrol og privatliv.
        </p>
      </section>

      {/* Video */}
      <section style={{ padding: '3rem', background: 'rgba(45, 55, 72, 0.7)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', marginBottom: '2rem' }}>
          Introduktion til din sikkerhed
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video
            controls
            autoPlay
            muted
            poster="/intro-thumbnail.jpg"
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: '10px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
              border: '2px solid #c9a66b',
            }}
          >
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>
      </section>

      {/* Brødtekst */}
      <section style={{ padding: '3rem', background: 'rgba(26, 32, 44, 0.8)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '900px', margin: '0 auto', color: '#e2e8f0' }}>
          SelvDepot er din livline i en verden, hvor fiat-systemet undergraver din formue gennem inflation og kontrol.
          Med 80% af Bitcoin-ejere udsat for tab via hacks og modpartsrisiko, er du din egen største trussel.
          Vores personlige rådgivning sikrer dit ejerskab med arveplanlægning og trusselsanalyse – uden at røre dine nøgler.
        </p>
      </section>

      {/* Sekundær CTA */}
      <section style={{ padding: '3rem', background: 'rgba(45, 55, 72, 0.7)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#c9a66b',
            color: '#1a202c',
            padding: '1.2rem 3.5rem',
            width: '70%',
            maxWidth: '450px',
            fontSize: '1.3rem',
            fontWeight: 600,
            borderRadius: '12px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(201, 166, 107, 0.4)',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Sikr din frihed i dag
        </a>
      </section>

      {/* Vurderingstekst */}
      <section style={{ padding: '3rem', background: 'rgba(26, 32, 44, 0.8)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#c9a66b', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          Dette er ingen salgspitch. Vi vurderer din egnethed til self-custody. Hvis du ikke opfylder kravene – fx pga. alder eller tekniske begrænsninger – tilbyder vi støtte, indtil du er klar.
          <br /><br />Ejerskab kræver ansvar. Ingen garantiordning findes.
        </p>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '3rem', background: 'rgba(45, 55, 72, 0.7)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', marginBottom: '2rem' }}>Kundernes erfaringer</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', background: 'rgba(26, 32, 44, 0.9)', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#e2e8f0', fontStyle: 'italic' }}>
            "{testimonials[currentTestimonial].quote}"
          </p>
          <p style={{ fontSize: '1.1rem', marginTop: '1rem', color: '#c9a66b' }}>
            – {testimonials[currentTestimonial].author}
          </p>
          <button
            onClick={handleNextTestimonial}
            style={{
              background: '#c9a66b',
              color: '#1a202c',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              border: 'none',
              marginTop: '1.5rem',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 500,
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Næste
          </button>
        </div>
      </section>

      {/* Pakker */}
      <section style={{ padding: '3rem', background: 'rgba(26, 32, 44, 0.8)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#c9a66b', textAlign: 'center', marginBottom: '2rem' }}>Vores Pakker</h2>
        {pitchContent[5].content}
      </section>

      {/* Footer */}
      <section style={{ padding: '2rem', background: 'rgba(45, 55, 72, 0.9)', margin: '3rem 0', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '1rem', color: '#a0aec0' }}>
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <p
              key={section}
              onClick={() => setActiveSection(activeSection === section ? null : section)}
              style={{ cursor: 'pointer', textDecoration: 'underline', margin: '0 1rem' }}
            >
              {section}
            </p>
          ))}
        </div>
      </section>

      {/* Footer indhold */}
      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1rem', color: '#a0aec0', fontSize: '1rem', textAlign: 'center' }}>
          <p>
            📧{' '}
            <a href="mailto:Selvdepot@gmail.com" style={{ color: '#c9a66b' }}>
              Selvdepot@gmail.com
            </a>
          </p>
          <p>
            📅{' '}
            <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a66b' }}>
              Book tid
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
            background: 'rgba(26, 32, 44, 0.95)',
            padding: '3rem',
            zIndex: 1000,
            overflowY: 'auto',
            textAlign: 'left',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleClosePitch}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: '#4a5568',
              color: '#ffffff',
              padding: '0.7rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#718096')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#4a5568')}
          >
            Luk
          </button>
          <div style={{ maxWidth: '1200px', margin: '0 auto', background: '#2d3748', padding: '2rem', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 600, marginBottom: '1.5rem', color: '#c9a66b' }}>
              {pitchContent[currentPitchPage].title}
            </h2>
            {pitchContent[currentPitchPage].content}
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              {currentPitchPage > 0 && (
                <button
                  onClick={handlePreviousPage}
                  style={{
                    background: '#4a5568',
                    color: '#ffffff',
                    padding: '0.9rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#718096')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#4a5568')}
                >
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button
                  onClick={handleNextPage}
                  style={{
                    background: '#c9a66b',
                    color: '#1a202c',
                    padding: '0.9rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#d4af37')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a66b')}
                >
                  Næste
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {['Disclaimer', 'Privatliv', 'Vilkår'].map((section) =>
        activeSection === section && (
          <div key={section} style={{ marginTop: '1rem', color: '#a0aec0', fontSize: '1rem', textAlign: 'center' }}>
            <p>
              {section === 'Disclaimer' && 'Dette er ikke juridisk eller finansiel rådgivning – kun uddannelse i Bitcoin-opbevaring.'}
              {section === 'Privatliv' && 'Ingen data indsamles uden samtykke. Se Calendlys politikker.'}
              {section === 'Vilkår' && 'Brug accepterer uddannelsesformål. Dansk lov gælder.'}
            </p>
          </div>
        )
      )}

      {/* Mobiloptimering */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 { font-size: 3rem; }
          h2 { font-size: 2rem; }
          p { font-size: 1.2rem; }
          a { width: 100%; padding: 1rem 2rem; }
          section { padding: 2rem; }
          .package-card { max-width: 100%; margin: 0 0 2rem 0; }
          img[alt="SelvDepot Logo"] { max-width: ${logoSize * 0.8}px; }
        }
      `}</style>
    </main>
  );
}