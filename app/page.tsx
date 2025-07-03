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
  {
    title: 'II. Problemet – Hvorfor er det her nødvendigt?',
    content: (
      <>
        <ul className={styles.pitchList}>
          <li>De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
          <li>20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
          <li>Uden et robust set-up, en klar arveplan og korrekte værktøjer kan du/dine elskede miste adgangen for altid.</li>
          <li>En enkelt fejl – ét forkert tryk, én mistet kode/nøgle – og pengene er for evigt væk.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'III. Løsningen – Hvad tilbyder MitDepot?',
    content: (
      <>
        <p>Vi hjælper dig med en skræddersyet opsætning af:</p>
        <ul className={styles.pitchList}>
          <li>Hardware wallets, alt efter behov (hot/cold, single/multi/passphrase m.m.).</li>
          <li>Arveplan, kan din familie/børn finde ud af at få adgang til dine Bitcoin i tilfælde af sygdom/død?</li>
          <li>Trusselsanalyse, Svigtepunksanalyse, Privatlivsbehov.</li>
        </ul>
        <p>Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler, enhed eller lignende.</p>
      </>
    ),
  },
  {
    title: 'IV. Udbytte – Hvordan MitDepot kommer ind i billedet',
    content: (
      <>
        <ul className={styles.pitchList}>
          <li>Du får ro i maven nu og i fremtiden.</li>
          <li>Du ved præcis, hvor dine Bitcoin er, har 24/7/365 adgang og at ingen andre har kan.</li>
          <li>Du undgår at efterlade kaos til din ikke-tekniske onkel eller selv at miste dem.</li>
          <li>Du slipper for at famle i mørket – vi har prøvet det før og guider dig hele vejen.</li>
          <li>Du tager ansvar – men med en sparringspartner, der forstår både teknikken og dine behov.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'V. Hvorfor MitDepot?',
    content: (
      <>
        <ul className={styles.pitchList}>
          <li>Vi er 100 % Bitcoin-only – vi gør ikke alt. Vi gør én ting med præcision.</li>
          <li>Alt vi bruger er open-source, verified og battle-tested – og du har eget input.</li>
          <li>Vi forstår formuebevistes behov: kontrol, diskretion, arv og sikkerhed.</li>
          <li>Vi rådgiver – vi opbevarer ikke. Du ejer, du bestemmer.</li>
          <li>Vores løsninger fungerer i praksis – ikke bare på papir.</li>
        </ul>
        <p>Det her handler ikke om crypto, trading eller andet gøjl. Det er din livline til at sikre din fremtidige Bitcoin formue.</p>
      </>
    ),
  },
  {
    title: 'VI. Pakker & Priser',
    content: (
      <div className={styles.packagesContainer}>
        <div className={`${styles.package} ${styles.packageRow}`}>
          <div className={`${styles.package} ${styles.packageGreen}`}>
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
          <div className={`${styles.package} ${styles.packageYellow}`}>
            <h3>🟡 Ejer med overblik</h3>
            <p>
              <strong>Pris:</strong> 20.000 kr.
              <br />
              Til dig med større mængder bitcoin og behov for teknisk dybde.
            </p>
            <p>Inkluderer:</p>
            <ul className={styles.packageList}>
              <li>Alt i første pakke</li>
              <li>Rådgivning om hardware wallets</li>
              <li>Airgapped wallet-struktur</li>
              <li>Brug og opsætning af Bitcoin node</li>
              <li>Skræddersyet recovery-plan/guide</li>
              <li>Fokus på back-up, sikkerhed og gennemgang af angrebsvektorer</li>
            </ul>
            <p className={styles.duration}>
              <strong>Varighed:</strong> 2–4 timer (ekslusiv Node download)
            </p>
            <p className={styles.note}>
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
          <div className={`${styles.package} ${styles.packageBlue}`}>
            <h3>🔵 Fuld kontrol</h3>
            <p>
              <strong>Pris:</strong> 45.000 kr.
              <br />
              Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.
            </p>
            <p>Inkluderer:</p>
            <ul className={styles.packageList}>
              <li>Alt i “Ejer med overblik”</li>
              <li>Multisig-opsætning (hvis relevant)</li>
              <li>Udvidet trusselsanalyse, svigtpunksanalyse</li>
              <li>Arveplan og familievejledning</li>
              <li>Opsætning og brug af Bitcoin node</li>
              <li>UTXO-management, privat bevidsthed</li>
              <li>Ét gratis check-up inden for 4 måneder</li>
            </ul>
            <p className={styles.duration}>
              <strong>Varighed:</strong> Fleksibel efter behov og kompleksitet
            </p>
            <p className={styles.note}>
              <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];