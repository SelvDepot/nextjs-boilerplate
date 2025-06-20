'use client';

import * as React from 'react';

export default function Page() {
  return (
    <main
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '2rem',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        SelvDepot
      </h1>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>I. Indledning / Positionering</h2>
      <p>
        SelvDepot er et rådgivningsforløb specialiseret i korrekt opbevaring af Bitcoin – også kaldet self-custody.
        Vi hjælper privatpersoner og familier med at eje deres Bitcoin trygt, privat og permanent – uden modpartsrisiko.
        <br /><br />
        Hvorfor eksisterer vi? Fordi langt de fleste stadig ikke forstår, hvordan man ejer Bitcoin korrekt.
        <br /><br />
        <strong>100% Bitcoin-native. 0% spekulation.</strong><br />
        <em>Mission: Hjælpe mennesker med at eje deres Bitcoin trygt – uden modpartsrisiko, for evigt.</em>
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>II. Problemet</h2>
      <p>
        Over 80 % af selvproklamerede Bitcoin-ejere bruger løsninger som børser, ETF’er og custodial wallets.
        Disse løsninger udsætter dem for alvorlige risici:
      </p>
      <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
        <li>Hacks, datalæk, insolvens og nedlukning (fx FTX, Mt. Gox, QuadrigaCX, Coinbase)</li>
        <li>Mistet adgang, beslaglæggelse, modpartsrisiko</li>
        <li>Overvågning, indefrysning og regulatorisk kontrol</li>
      </ul>
      <p>
        Det er ikke self-custody. Du ejer ikke dine Bitcoin.
        <br /><strong>“Not your keys, not your coins.”</strong>
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>III. Konsekvenser ved ikke at handle</h2>
      <p>
        Prisen på Bitcoin kan 10x – måske i morgen.
        Føler du dig tryg med din nuværende løsning, hvis det sker?
        <br /><br />
        De fleste tab sker ikke pga. hacks, men fordi brugere laver fejl, har dårlig opsætning eller mangler viden.
        <br />
        <strong>Du er den største risiko.</strong>
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>IV. Løsningen – hvad SelvDepot tilbyder</h2>
      <p>
        Hos SelvDepot får du:
      </p>
      <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
        <li>1:1 rådgivning og skræddersyet setup</li>
        <li>Vi lærer dig at eje dine Bitcoin korrekt – uden nogensinde at røre dine keys</li>
        <li>Arveplanlægning, multisig, svigtpunktsanalyse og trusselsmodel</li>
        <li>Alt dokumenteres og testes</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>V. Hvordan det fungerer</h2>
      <p>Trin-for-trin forløb:</p>
      <ol style={{ marginLeft: '1.5rem' }}>
        <li>Forberedelse + Spørgeskema</li>
        <li>Rådgivning 1:1 (online)</li>
        <li>Opsætning + test + dokumentation</li>
        <li>Arveplan + backup</li>
        <li>Mulighed for opfølgning</li>
      </ol>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>VI. Fordele og udbytte</h2>
      <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
        <li>100% kontrol – uden modparter</li>
        <li>Tryghed for din familie og efterkommere</li>
        <li>Dokumenteret opsætning, tilpasset din risikoprofil</li>
        <li>Klarhed og forståelse – ikke bare teknik</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>VII. Hvorfor SelvDepot?</h2>
      <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
        <li>100% Bitcoin</li>
        <li>100% uafhængig</li>
        <li>Ingen provision, ingen trading, ingen skjulte agendaer</li>
        <li>Fokus: Sikkerhed, ejerskab og ansvar</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>VIII. Pakker og Prisstruktur</h2>
      <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
        <li><strong>Basispakke:</strong> Opsætning 1:1</li>
        <li><strong>Udvidet:</strong> Inkl. arveplan og backup</li>
        <li><strong>Premium:</strong> Løbende support og tjek-ind</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>IX. Kvalificering</h2>
      <p>
        Dette er ikke for alle. Vi vurderer, om du er klar.
        Hvis ikke, hjælper vi dig med at blive det.
        <br />
        Vi afslår klienter som ikke er egnede – men tilbyder læring undervejs.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>X. Call-to-action</h2>
      <p>
        “Vil du eje dine Bitcoin som det var tiltænkt?”<br />
        “Lad os tage første skridt sammen.”<br /><br />
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          style={{ color: '#38bdf8', textDecoration: 'underline' }}
        >
          Book dit gratis opkald her.
        </a>
      </p>
    </main>
  );
}
