"use client";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{ paddingTop: "6rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="hero-layout">
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

            {/* CTA + social icons in one row */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                Hire Me
              </a>

              {/* Divider */}
              <div style={{ width: "1px", height: "24px", background: "var(--border)", flexShrink: 0 }} />

              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <a href={siteData.telegram} target="_blank" rel="noopener noreferrer" title="Telegram @dannylimkopi"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", color: "var(--text-muted)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(231,76,60,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a href={siteData.fiverr} target="_blank" rel="noopener noreferrer" title="Fiverr"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", color: "var(--text-muted)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(231,76,60,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16.25 16.25v-10h-2.5v10h2.5zm-5.625 0v-7.5H8.75v7.5h1.875zm.625-10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM21 3H3v18h18V3zm-1.5 16.5h-15v-15h15v15z"/></svg>
                </a>
                <a href={siteData.upwork} target="_blank" rel="noopener noreferrer" title="Upwork"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", color: "var(--text-muted)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(231,76,60,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703s-1.212 2.703-2.703 2.703zm0-7.907c-2.454 0-4.434 1.552-5.233 4.097C12.1 7.727 11.063 6.159 10.27 4.5H7.53v6.391c0 1.3-1.058 2.358-2.358 2.358S2.814 12.19 2.814 10.891V4.5H.074v6.391c0 2.783 2.266 5.098 5.098 5.098s5.098-2.315 5.098-5.098v-1.07c.783 1.329 1.749 2.543 2.89 3.52l-1.228 5.77h2.828l.89-4.183c1.103.677 2.35 1.06 3.651 1.06 3.02 0 5.478-2.466 5.478-5.488 0-3.022-2.342-5.488-5.362-5.488z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
