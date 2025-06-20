# Re-displaying the combined final code using display_dataframe_to_user to ensure user can see and copy the full content.
import pandas as pd

# Due to length, the final code will be split into multiple labeled parts for clarity.
# Each part will represent a file or module in the Next.js project.

code_parts = {
    "app/page.tsx": """
'use client';

import * as React from 'react';
import { useState } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <main
      style={{
        backgroundImage: 'url("/imagebaggrund.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: '150px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          }}
        />
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>SelvDepot</h1>
          <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
            Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
            <br />
            <span style={{ fontWeight: 'normal' }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#facc15', marginBottom: 0 }}>
          Ville du føle dig sikker med din nuværende løsning,
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#facc15' }}>
          hvis dine BTC blev 10x mere værd i morgen?
        </p>
      </div>

      <p style={{ marginTop: '3rem', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'justify' }}>
        Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
        med begrænset udbud, der ikke kan manipuleres, printes eller overdrages til nogen.
        Ingen banker. Ingen stater. Ingen modparter.
        Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
        Hos SelvDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
        100% under din egen kontrol. Privat. Permanent.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <video
          controls
          style={{
            width: '100%',
            borderRadius: '8px',
            boxShadow: '0 0 8px rgba(0,0,0,0.3)',
          }}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div>

      <div style={{ marginTop: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
        <p style={{ margin: 0, textAlign: 'justify' }}>
          Bitcoin self-custody ved hjælp af SelvDepot er din livbåd i en verden hvor det
          traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
          og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem hacks,
          social engineering og modpartsrisiko – men DU er stadig den største risiko for tab af dine Bitcoin.
          Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
          arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
          nogensinde rører dine private keys, Bitcoin eller enhed. Dette er ikke bare en chance for 100% kontrol og tryghed.
          Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
        </p>
      </div>

      <p
        style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#facc15',
          fontStyle: 'italic',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'justify',
        }}
      >
        Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
        self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
        de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger – 
        vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
        <br />
        <br />
        Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
        at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
      </p>

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

      {activeSection === 'Kontakt' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>📬 Email: <a href="mailto:Selvdepot@gmail.com" style={{ color: '#60a5fa' }}>Selvdepot@gmail.com</a></p>
          <p>📅 Book: <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>calendly.com/selvdepot/30min</a></p>
        </div>
      )}
      {activeSection === 'Disclaimer' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
            finansiel, skattemæssig eller investeringsrådgivning. SelvDepot tilbyder alene undervisning
            og værktøjer til selvstændig opbevaring af Bitcoin.
          </p>
        </div>
      )}
      {activeSection === 'Privatliv' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
            håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
          </p>
        </div>
      )}
      {activeSection === 'Vilkår' && (
        <div style={{ marginTop: '1rem', color: '#d1d5db', fontSize: '0.9rem' }}>
          <p>
            Ved brug af SelvDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
            Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
          </p>
        </div>
      )}
    </main>
  );
}
"""
}

df = pd.DataFrame.from_dict(code_parts, orient="index", columns=["Code"])
import ace_tools as tools; tools.display_dataframe_to_user(name="Full Project Code (Part 1)", dataframe=df)
