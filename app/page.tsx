export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      {/* Billede */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <img
          src="/logo.png" // Erstat med dit billede i public-mappen (f.eks. logo.png)
          alt="SelvDepot Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>SelvDepot</h1>
      <h2 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Vi hjælper dig eje dine bitcoin – og sove trygt. <br />
        <span style={{ fontWeight: "normal" }}>Sikkert. Privat. For evigt.</span>
      </h2>

      <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
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

      {/* Video */}
      <div style={{ marginTop: "2rem" }}>
        <video
          controls
          width="400"
          style={{ borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
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
            color: "#1e40af",
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