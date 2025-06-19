export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      {/* Container for billede og titel/undertitel */}
      <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        <img
          src="/logo.png"
          alt="SelvDepot Logo"
          style={{
            maxWidth: "150px",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "0", color: "#ffffff" }}>SelvDepot</h1>
          <h2 style={{ fontSize: "1.5rem", marginTop: "0.5rem", color: "#ffffff" }}>
            Vi hjælper dig eje dine bitcoin – og sove trygt. <br />
            <span style={{ fontWeight: "normal" }}>Sikkert. Privat. For evigt.</span>
          </h2>
        </div>
      </div>

      <p style={{ marginTop: "2rem", fontSize: "1.2rem", color: "#ffffff" }}>
        Ingen banker. Ingen tilladelser. Kun dig – og dem, DU stoler på.
        <br />
        Dine penge. Din fremtid. Din familie. Tag kontrol.
      </p>

      {/* PDF Link */}
      <div style={{ marginTop: "2rem" }}>
        <a
          href="/SelvDepot.pdf"
          download
          style={{
            color: "#2563eb",
            textDecoration: "underline",
            display: "block",
            marginBottom: "1.5rem",
          }}
        >
          Læs vores introduktion (PDF)
        </a>
      </div>

      {/* Video og ny tekst side om side */}
      <div style={{ marginTop: "2rem", display: "flex", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
        {/* Video */}
        <div style={{ flex: "0 0 400px" }}> {/* Fast bredde for video */}
          <video
            controls
            width="400"
            style={{ borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}
          >
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>

        {/* Ny tekst (FOMO og Self-Custody fokus) */}
        <div style={{ maxWidth: "400px", fontSize: "1rem", lineHeight: "1.5", color: "#ffffff" }}>
          <p style={{ color: "#ffffff", margin: "0" }}>
            Self-Custody ved hjælp af SelvDepot er din livbåd i en verden, hvor det traditionelle FIAT-system suger livet af dine beholdninger og aktiver ud under inflation og kontrol. Over 80 % af nuværende Bitcoin-ejere risikerer at miste alt gennem hacks, beslaglæggelser og modpartsrisiko - men DU er den største risiko. Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody, inklusiv mulighed for arveplanlægning, msig, mm. uden, at vi nogensinde rører dine private keys eller enhed. Dette er ikke bare en chance til 100 % kontrol og tryghed; det er din sidste udvej, før dørene lukker, og du bliver fanget i et forgængeligt system. <strong style={{ color: "#dc2626" }}>Book nu, før det er for sent!</strong>
          </p>
        </div>
      </div>

      {/* Calendly button with additional text */}
      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://calendly.com/selvdepot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1rem",
          }}
        >
          Book et gratis 30-minutters møde
        </a>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#ffffff",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          Vi rører aldrig dine bitcoin. Vi lærer dig at eje dem selv, for evigt.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#666" }}>
        <p>
          <strong>Disclaimer:</strong> Informationen på denne hjemmeside er ikke
          juridisk, finansiel eller investeringsrådgivning. SelvDepot yder udelukkende
          uddannelse og værktøjer til at hjælpe dig med at administrere dine egne
          bitcoin. Alle handlinger, der udføres baseret på dette indhold, er på eget
          ansvar. Konsulter venligst en kvalificeret advokat eller finansiel rådgiver
          før du træffer beslutninger vedrørende dine aktiver. SelvDepot påtager sig
          ikke ansvar for eventuelle tab eller skader, der opstår som følge af
          brugen af denne hjemmeside eller dens indhold.
        </p>
      </div>
    </main>
  );
}