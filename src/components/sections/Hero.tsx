import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" style={{ paddingTop: "8rem", paddingBottom: "5rem", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}>
          {/* Profile photo */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: "3px solid var(--accent)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/danny-headshot.png"
              alt="Danny Lim"
              width={140}
              height={140}
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.3 }}>
              Hi, I am <span style={{ color: "var(--accent)" }}>{siteData.name}</span>!
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem", maxWidth: 480 }}>
              {siteData.tagline}
            </p>

            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                Hire Me
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>

            {/* Social links — only Fiverr and Upwork (GitHub/LinkedIn empty for now) */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <a href={siteData.fiverr} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.75rem" }}>
                Fiverr
              </a>
              <a href={siteData.upwork} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.75rem" }}>
                Upwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
