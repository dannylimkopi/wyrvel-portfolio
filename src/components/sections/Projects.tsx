"use client";
import { siteData } from "@/data/siteData";
import { useState } from "react";

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", borderRadius: "6px", overflow: "hidden", marginBottom: "1rem", background: "var(--bg-primary)" }}>
      <img
        src={images[current]}
        alt={`Screenshot ${current + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s ease" }}
      />
      {images.length > 1 && (
        <>
          {/* Nav arrows */}
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            style={{
              position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%",
              width: "28px", height: "28px", cursor: "pointer", fontSize: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)", transition: "background 0.2s",
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            style={{
              position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%",
              width: "28px", height: "28px", cursor: "pointer", fontSize: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)", transition: "background 0.2s",
            }}
            aria-label="Next image"
          >
            ›
          </button>
          {/* Dots */}
          <div style={{
            position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: "5px",
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "18px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === current ? "var(--accent)" : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {siteData.projects.map((proj, i) => (
            <div key={i} className="card project-card" style={{ padding: 0, overflow: "hidden" }}>
              {/* Image carousel */}
              <ImageCarousel images={(proj as any).images || []} />

              {/* Content */}
              <div style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
                {/* Title + type badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{proj.title}</h3>
                  <span className="tag" style={{ fontSize: "0.65rem", flexShrink: 0 }}>{proj.type}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  {proj.description}
                </p>

                {/* Results badges */}
                {(proj as any).results && (
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                    {(proj as any).results.map((result: string) => (
                      <span
                        key={result}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.72rem",
                          padding: "0.3rem 0.7rem",
                          borderRadius: "4px",
                          background: "rgba(231, 76, 60, 0.1)",
                          color: "var(--accent)",
                          border: "1px solid rgba(231, 76, 60, 0.2)",
                          fontWeight: 600,
                          letterSpacing: "0.01em",
                        }}
                      >
                        ✦ {result}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
