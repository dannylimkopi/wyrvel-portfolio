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
            <a href={(siteData as any).telegram} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>
            <a href={siteData.fiverr} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 18.588L21.292 4.595A2.574 2.574 0 0 0 18.722 2.4H5.265A2.574 2.574 0 0 0 2.695 4.595L.983 18.588A2.573 2.573 0 0 0 3.553 21.6h16.894a2.573 2.573 0 0 0 2.557-3.012zM16.8 16.2h-2.4v-4.8c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v4.8H9.6v-4.8c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v4.8H4.8V9h2.4v.72A3.58 3.58 0 0 1 9.6 8.76c1.08 0 2.04.48 2.7 1.24A3.58 3.58 0 0 1 14.88 8.76c1.98 0 3.6 1.62 3.6 3.6L16.8 16.2z"/></svg>
              Fiverr
            </a>
            <a href={siteData.upwork} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703s-1.212 2.703-2.703 2.703zm0-7.907c-2.454 0-4.434 1.552-5.233 4.097C12.1 7.727 11.063 6.159 10.27 4.5H7.53v6.391c0 1.3-1.058 2.358-2.358 2.358S2.814 12.19 2.814 10.891V4.5H.074v6.391c0 2.783 2.266 5.098 5.098 5.098s5.098-2.315 5.098-5.098v-1.07c.783 1.329 1.749 2.543 2.89 3.52l-1.228 5.77h2.828l.89-4.183c1.103.677 2.35 1.06 3.651 1.06 3.02 0 5.478-2.466 5.478-5.488 0-3.022-2.342-5.488-5.362-5.488z"/></svg>
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
