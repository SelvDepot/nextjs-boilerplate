'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const pitchContent = [
  {
    title: 'I. Den brutale virkelighed',
    content: (
      <>
        <p>
          "Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring."
          <br />
          MitDepot er rådgivning i sikker, privat og fremtidssikret opbevaring af Bitcoin.
        </p>
        <ul className={styles.pitchList}>
          <li className="text-sm text-f5f5f5">• Vi arbejder 1:1 med formuebeviste personer.</li>
          <li className="text-sm text-f5f5f5">• Vi bygger på gennemtænkt sikkerhed, open-source værktøjer og skræddersyer efter behov.</li>
          <li className="text-sm text-f5f5f5">• Det her handler ikke om hype, crypto eller trading cykler – men om, hvordan du beholder dine Bitcoin.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'II. Din største risiko...',
    content: (
      <>
        <ul className={styles.pitchList}>
          <li className="text-sm text-f5f5f5">• De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
          <li className="text-sm text-f5f5f5">• 20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
          <li className="text-sm text-f5f5f5">• Uden et robust set-up, en klar arveplan og korrekte værktøjer kan du/dine elskede miste adgangen for altid.</li>
          <li className="text-sm text-f5f5f5">• En enkelt fejl – ét forkert tryk, én mistet kode/nøgle – og pengene er for evigt væk.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'III. Løsningen',
    content: (
      <>
        <p className="text-f5f5f5">Vi hjælper dig med en skræddersyet opsætning af:</p>
        <ul className={styles.pitchList}>
          <li className="text-sm text-f5f5f5">• Hardware wallets, alt efter behov (hot/cold, single/multi/passphrase m.m.).</li>
          <li className="text-sm text-f5f5f5">• Arveplan, kan din familie/børn finde ud af at få adgang til dine Bitcoin i tilfælde af sygdom/død?</li>
          <li className="text-sm text-f5f5f5">• Trusselsanalyse, Svigtepunksanalyse, Privatlivsbehov.</li>
        </ul>
        <p className="text-f5f5f5">Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler, enhed eller lignende.</p>
      </>
    ),
  },
  {
    title: 'IV. Udbytte – Hvordan MitDepot kommer ind i billedet',
    content: (
      <>
        <ul className={styles.pitchList}>
          <li className="text-sm text-f5f5f5">• Du får ro i maven nu og i fremtiden.</li>
          <li className="text-sm text-f5f5f5">• Du ved præcis, hvor dine Bitcoin er, har 24/7/365 adgang og at ingen andre har kan.</li>
          <li className="text-sm text-f5f5f5">• Du undgår at efterlade kaos til din ikke-tekniske onkel eller selv at miste dem.</li>
          <li className="text-sm text-f5f5f5">• Du slipper for at famle i mørket – vi har prøvet det før og guider dig hele vejen.</li>
          <li className="text-sm text-f5f5f5">• Du tager ansvar – men med en sparringspartner, der forstår både teknikken og dine behov.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'V. Hvorfor MitDepot?',
    content: (
      <>
        <ul className={styles.pitchList}>
          <li className="text-sm text-f5f5f5">• Vi er 100 % Bitcoin-only – vi gør ikke alt. Vi gør én ting med præcision.</li>
          <li className="text-sm text-f5f5f5">• Alt vi bruger er open-source, verified og battle-tested – og du har eget input.</li>
          <li className="text-sm text-f5f5f5">• Vi forstår formuebevistes behov: kontrol, diskretion, arv og sikkerhed.</li>
          <li className="text-sm text-f5f5f5">• Vi rådgiver – vi opbevarer ikke. Du ejer, du bestemmer.</li>
          <li className="text-sm text-f5f5f5">• Vores løsninger fungerer i praksis – ikke bare på papir.</li>
        </ul>
        <p className="text-f5f5f5 italic">"Det her handler ikke om crypto, trading eller andet gøjl. Det er din livline til at sikre din fremtidige Bitcoin formue."</p>
      </>
    ),
  },
  {
    title: 'VI. Pakker & Priser',
    content: (
      <div className={styles.packagesContainer}>
        <div className={`${styles.package} ${styles.packageRow}`}>
          <div className={`${styles.package} ${styles.packageGreen}`}>
            <h3 className="text-fbbf24 font-bold text-2xl">🟠 Klar til at eje</h3>
            <p className="text-f5f5f5">
              <strong>Pris:</strong> 10.000 kr.
              <br />
              Til dig, der vil i gang – eller optimere det, du allerede har.
            </p>
            <p className="text-f5f5f5">Inkluderer:</p>
            <ul className={styles.packageList}>
              <li className="text-sm text-f5f5f5">• Hardware wallet opsætning</li>
              <li className="text-sm text-f5f5f5">• Single-sig med/uden passphrase</li>
              <li className="text-sm text-f5f5f5">• Backup-strategi og risikoforståelse</li>
              <li className="text-sm text-f5f5f5">• Grundlæggende sikkerhed og vaner</li>
              <li className="text-sm text-f5f5f5">• Pakken bruges også til gennemgang af eksisterende opsætning (hvis ønsket)</li>
            </ul>
            <p className="text-f5f5f5">
              <strong>Varighed:</strong> Ca. 2 timer
            </p>
            <p className="text-f5f5f5">
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
          <div className={`${styles.package} ${styles.packageYellow}`}>
            <h3 className="text-fbbf24 font-bold text-2xl">🟡 Ejer med overblik</h3>
            <p className="text-f5f5f5">
              <strong>Pris:</strong> 20.000 kr.
              <br />
              Til dig med større mængder bitcoin og behov for teknisk dybde.
            </p>
            <p className="text-f5f5f5">Inkluderer:</p>
            <ul className={styles.packageList}>
              <li className="text-sm text-f5f5f5">• Alt i første pakke</li>
              <li className="text-sm text-f5f5f5">• Rådgivning om hardware wallets</li>
              <li className="text-sm text-f5f5f5">• Airgapped wallet-struktur</li>
              <li className="text-sm text-f5f5f5">• Brug og opsætning af Bitcoin node</li>
              <li className="text-sm text-f5f5f5">• Skræddersyet recovery-plan/guide</li>
              <li className="text-sm text-f5f5f5">• Fokus på back-up, sikkerhed og gennemgang af angrebsvektorer</li>
            </ul>
            <p className="text-f5f5f5">
              <strong>Varighed:</strong> 2–4 timer (ekslusiv Node download)
            </p>
            <p className="text-f5f5f5">
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
          <div className={`${styles.package} ${styles.packageBlue}`}>
            <h3 className="text-fbbf24 font-bold text-2xl">🔵 Fuld kontrol</h3>
            <p className="text-f5f5f5">
              <strong>Pris:</strong> 45.000 kr.
              <br />
              Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.
            </p>
            <p className="text-f5f5f5">Inkluderer:</p>
            <ul className={styles.packageList}>
              <li className="text-sm text-f5f5f5">• Alt i “Ejer med overblik”</li>
              <li className="text-sm text-f5f5f5">• Multisig-opsætning (hvis relevant)</li>
              <li className="text-sm text-f5f5f5">• Udvidet trusselsanalyse, svigtpunksanalyse</li>
              <li className="text-sm text-f5f5f5">• Arveplan og familievejledning</li>
              <li className="text-sm text-f5f5f5">• Opsætning og brug af Bitcoin node</li>
              <li className="text-sm text-f5f5f5">• UTXO-management, privat bevidsthed</li>
              <li className="text-sm text-f5f5f5">• Ét gratis check-up inden for 4 måneder</li>
            </ul>
            <p className="text-f5f5f5">
              <strong>Varighed:</strong> Fleksibel efter behov og kompleksitet
            </p>
            <p className="text-f5f5f5">
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <main className="bg-black text-left p-4" style={{ backgroundColor: '#000000' }}>
      {/* 1. Hero-sektion */}
      <section className="py-6 px-4" style={{ backgroundColor: '#000000' }}>
        <img src="/logo.png" alt="MitDepot Logo" className="h-20 mx-auto mb-5" />
        <h1 className="text-fbbf24 font-bold text-4xl mb-2 text-center">
          Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
        </h1>
        <h2 className="text-f5f5f5 text-2xl text-center">
          Sikkert. Privat. For evigt.
        </h2>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-5 text-f5f5f5 bg-fbbf24 py-2 px-4 rounded hover:bg-opacity-90"
        >
          Book gratis 30-minutters møde
        </a>
      </section>

      {/* 2. Hvad er MitDepot? */}
      <section className="py-6 px-4" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-fbbf24 font-bold text-3xl mb-5">
            Hvad tilbyder MitDepot?
          </h2>
          <ul className="list-none">
            <li className="text-f5f5f5 text-base mb-2">• 1:1 rådgivning til formuebevidste personer</li>
            <li className="text-f5f5f5 text-base mb-2">• Fokus på open-source sikkerhed og tilpassede løsninger</li>
            <li className="text-f5f5f5 text-base">• Ikke hype eller crypto – kun ejerskab og kontrol</li>
          </ul>
        </div>
      </section>

      {/* 3. Video + Sikkerhedsbudskab */}
      <section className="py-6 px-4" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="relative">
              <img src="/thumbnail.jpg" alt="Video Thumbnail" className="w-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-fbbf24 font-bold text-3xl mb-4">
              Din sidste chance for kontrol
            </h2>
            <p className="text-f5f5f5 mb-4">
              Bitcoin er din økonomiske frihed – men kun hvis du kontrollerer det selv.
            </p>
            <p className="text-f5f5f5 mb-4">
              Over 80% af ejere risikerer tab pga. fejl eller hacks. Tag kontrol nu.
            </p>
            <p className="text-f5f5f5">
              Med MitDepot får du sikkerhed og vejledning – før det er for sent.
            </p>
            <a
              href="https://calendly.com/selvdepot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-5 text-f5f5f5 bg-fbbf24 py-2 px-4 rounded hover:bg-opacity-90"
            >
              Klar til at tage ansvar? Book nu
            </a>
          </div>
        </div>
      </section>

      {/* 4. PDF-download sektion */}
      <section className="py-6 px-4" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-fbbf24 font-bold text-3xl mb-4">
            Vil du læse mere først?
          </h2>
          <p className="text-f5f5f5 mb-5">
            Download vores gratis PDF’er og lær hvordan du beskytter din formue med Bitcoin.
          </p>
          <button
            className="text-f5f5f5 bg-fbbf24 py-2 px-4 rounded hover:bg-opacity-90"
          >
            Download Gratis PDF’er
          </button>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-6 px-4" style={{ backgroundColor: '#000000' }}>
        <div className="flex justify-center space-x-6">
          {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-f5f5f5 font-bold"
            >
              {section}
            </a>
          ))}
        </div>
        <p className="text-f5f5f5 mt-4">© 2025 MitDepot ApS. Alle rettigheder forbeholdes.</p>
      </footer>
    </main>
  );
}