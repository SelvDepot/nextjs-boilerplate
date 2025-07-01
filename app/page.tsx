<div className={styles.header}>
  <img src="/logo.png" alt="MitDepot Logo" className={styles.logo} />
  <div>
    <h1 className={styles.title}>MitDepot</h1>
    <h2 className={styles.subtitle}>
      Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
      <br />
      <span className={styles.subtitleNormal}>Sikkert. Privat. For evigt.</span>
    </h2>
  </div>
</div>

<div className={styles.contentWrapper}>
  <p className={styles.intro}>
    Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
    <br />Dine penge. Din fremtid. Din familie. Tag kontrol.
  </p>

  <div className={styles.cta}>
    <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
      Book et gratis 30-minutters møde
    </a>
  </div>

  <p className={styles.description}>
    Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
    med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen. Ingen banker. Ingen stater. Ingen modparter.
    Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten. Hos MitDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
    100% under din egen kontrol!
  </p>

  <div className={styles.videoContainer}>
    <video controls className={styles.video}>
      <source src="/intro.mp4" type="video/mp4" />
      Din browser understøtter ikke video-tagget.
    </video>
  </div>

  <div className={styles.mainContent}>
    <p>
      Bitcoin self-custody ved hjælp af MitDepot er din livbåd i en verden hvor det
      traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
      og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks,
      social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin. Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
      arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
      nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed. Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
    </p>
  </div>

  <div className={styles.secondaryCta}>
    <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" className={`${styles.ctaButton} ${styles.ctaButtonGreen}`}>
      Klar til at tage ansvar? Book et kald nu
    </a>
  </div>

  <p className={styles.assessmentText}>
    Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
    self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
    de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
    vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
    <br /><br />Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
    at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
  </p>
</div>

<div className={styles.footerLinks}>
  {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
    <p
      key={section}
      onClick={() => setActiveSection(activeSection === section ? null : section)}
      className={styles.footerLink}
    >
      {section}
    </p>
  ))}
</div>

{activeSection === 'Kontakt' && (
  <div className={styles.footerContent}>
    <p>
      📬 Email:{' '}
      <a href="mailto:selvdepot@gmail.com" className={styles.contactLink}>
        SelvDepot@gmail.com
      </a>
    </p>
    <p>
      📅 Book:{' '}
      <a
        href="https://calendly.com/selvdepot/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactLink}
      >
        calendly.com/selvdepot/30min
      </a>
    </p>
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

{activeSection === 'Disclaimer' && (
  <div className={styles.footerContent}>
    <p>
      Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
      finansiel, skattemæssig eller investeringsrådgivning. MitDepot tilbyder alene undervisning
      og værktøjer til selvstændig opbevaring af Bitcoin.
    </p>
  </div>
)}

{activeSection === 'Privatliv' && (
  <div className={styles.footerContent}>
    <p>
      Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
      håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
    </p>
  </div>
)}

{activeSection === 'Vilkår' && (
  <div className={styles.footerContent}>
    <p>
      Ved brug af MitDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
      Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
    </p>
  </div>
)}
</main>