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
                <li>Skræddersyet recovery-plan/guide</li