export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
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

      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://calendly.com/DIT-BRUGERNAVN/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#000",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "1rem",
          }}
        >
          Book et gratis 30 minutters møde
        </a>
      </div>
    </main>
  );
}
<a
  href="/SelvDepot.pdf"
  download
  className="text-blue-500 underline mt-4 block"
>
  Læs vores introduktion (PDF)
</a>
<video controls width="400" className="mt-8 rounded shadow-lg">
  <source src="/intro.mp4" type="video/mp4" />
  Din browser understøtter ikke video-tagget.
</video>
<a
  href="https://calendly.com/selvdepot/30min"
  className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
>
  Book et gratis 30-minutters møde
</a>
