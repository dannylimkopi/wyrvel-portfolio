"use client";
import { siteData } from "@/data/siteData";
import { useState, useRef, useEffect, useCallback } from "react";

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", borderRadius: "6px", overflow: "hidden", background: "var(--bg-primary)" }}>
      <img
        src={images[current]}
        alt={`Screenshot ${current + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s ease" }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            style={{
              position: "absolute", left: "6px", top: "50%", transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%",
              width: "24px", height: "24px", cursor: "pointer", fontSize: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}
            aria-label="Previous image"
          >‹</button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            style={{
              position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", borderRadius: "50%",
              width: "24px", height: "24px", cursor: "pointer", fontSize: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}
            aria-label="Next image"
          >›</button>
          <div style={{
            position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: "4px",
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "16px" : "5px", height: "5px", borderRadius: "3px",
                  background: i === current ? "var(--accent)" : "rgba(255,255,255,0.5)",
                  border: "none", cursor: "pointer", transition: "all 0.3s ease",
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

/* ── Video Lightbox Modal ─────────────────────────────── */

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    // Auto-play when modal opens
    videoRef.current?.play();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0, 0, 0, 0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        animation: "fadeIn 0.2s ease",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: "20px", right: "24px",
          background: "none", border: "none", color: "#fff",
          fontSize: "1.5rem", cursor: "pointer", zIndex: 10000,
          opacity: 0.7, transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
        aria-label="Close video"
      >✕</button>

      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        onClick={e => e.stopPropagation()}
        style={{
          width: "90vw", maxWidth: "1200px", maxHeight: "85vh",
          borderRadius: "8px", cursor: "default",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}

/* ── Video Thumbnail (click to open lightbox) ─────────── */

function VideoThumbnail({ src, onOpen }: { src: string; onOpen: () => void }) {
  return (
    <div
      style={{
        position: "relative", width: "100%", aspectRatio: "16/10",
        borderRadius: "6px", overflow: "hidden", background: "#000", cursor: "pointer",
      }}
      onClick={onOpen}
    >
      <video
        src={src}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        playsInline
        muted
        preload="metadata"
      />
      {/* Play overlay */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.35)",
        transition: "background 0.2s",
      }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "50%",
          background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(231, 76, 60, 0.4)",
          transition: "transform 0.2s",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </div>
      </div>
      {/* Label */}
      <div style={{
        position: "absolute", bottom: "8px", left: "8px",
        fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.05em",
        padding: "3px 8px", borderRadius: "3px",
        background: "rgba(0,0,0,0.7)", color: "#fff",
        backdropFilter: "blur(4px)", textTransform: "uppercase",
      }}>▶ Watch Demo</div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────── */

export default function Projects() {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  return (
    <>
      {/* Lightbox modal */}
      {lightboxVideo && (
        <VideoLightbox src={lightboxVideo} onClose={() => setLightboxVideo(null)} />
      )}

      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {siteData.projects.map((proj, i) => {
              const video = (proj as any).video;
              const images = (proj as any).images || [];
              const results = (proj as any).results;

              return (
                <div key={i} className="card project-card" style={{ padding: 0, overflow: "hidden" }}>
                  {/* Media section: carousel + video side by side */}
                  {(images.length > 0 || video) && (
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: video && images.length > 0 ? "1fr 1fr" : "1fr",
                      gap: "2px",
                      background: "var(--bg-primary)",
                    }}>
                      {images.length > 0 && <ImageCarousel images={images} />}
                      {video && <VideoThumbnail src={video} onOpen={() => setLightboxVideo(video)} />}
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: "1.25rem 1.5rem 1.5rem 1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{proj.title}</h3>
                      <span className="tag" style={{ fontSize: "0.65rem", flexShrink: 0 }}>{proj.type}</span>
                    </div>

                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                      {proj.description}
                    </p>

                    {results && (
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                        {results.map((result: string) => (
                          <span key={result} style={{
                            display: "inline-flex", alignItems: "center", gap: "4px",
                            fontSize: "0.72rem", padding: "0.3rem 0.7rem", borderRadius: "4px",
                            background: "rgba(231, 76, 60, 0.1)", color: "var(--accent)",
                            border: "1px solid rgba(231, 76, 60, 0.2)", fontWeight: 600,
                          }}>✦ {result}</span>
                        ))}
                      </div>
                    )}

                    <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                      {proj.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keyframe for modal fade-in */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
