import { siteData } from "@/data/siteData";

export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="card" style={{ textAlign: "center", padding: "3rem 2rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Let&apos;s work together
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: 420, margin: "0 auto 2rem" }}>
            Have a project in mind? I&apos;m available for freelance work. Let&apos;s build something great.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a href={`mailto:${siteData.email}`} className="btn-primary">
              Email Me
            </a>
            <a href={(siteData as any).telegram} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              ✈ Telegram
            </a>
            <a href={siteData.fiverr} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Fiverr
            </a>
            <a href={siteData.upwork} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Upwork
            </a>
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            {siteData.email}
          </p>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "3rem 0 1rem", fontSize: "0.72rem", color: "var(--text-muted)" }}>
          Built with Next.js & Tailwind CSS · &copy; {new Date().getFullYear()} {siteData.name}
        </div>
      </div>
    </section>
  );
}
