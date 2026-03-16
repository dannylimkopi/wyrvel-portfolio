"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: theme === "dark" ? "rgba(15,15,15,0.85)" : "rgba(250,250,250,0.85)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "56px" }}>
          <a href="#home" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent)", flexShrink: 0 }}>
            Danny Lim
          </a>

          {/* Desktop nav links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "0.35rem 0.5rem",
                cursor: "pointer",
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                transition: "border-color 0.2s",
                fontFamily: "inherit",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile hamburger + theme toggle */}
          <div className="nav-mobile-actions">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "0.3rem 0.45rem",
                cursor: "pointer",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                fontFamily: "inherit",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="hamburger-btn"
            >
              <span className={`hamburger-icon ${mobileOpen ? "open" : ""}`}>
                <span /><span /><span />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="nav-mobile-dropdown">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="nav-mobile-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style jsx global>{`
        .nav-mobile-actions {
          display: none;
        }

        @media (max-width: 640px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        }

        .hamburger-btn {
          background: none;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
        }

        .hamburger-icon {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 16px;
        }

        .hamburger-icon span {
          display: block;
          height: 2px;
          width: 100%;
          background: var(--text-secondary);
          border-radius: 1px;
          transition: transform 0.2s, opacity 0.2s;
        }

        .hamburger-icon.open span:nth-child(1) {
          transform: rotate(45deg) translate(4px, 4px);
        }
        .hamburger-icon.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger-icon.open span:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -4px);
        }

        .nav-mobile-dropdown {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 1.5rem 1rem;
          border-top: 1px solid var(--border);
        }

        .nav-mobile-link {
          padding: 0.65rem 0;
          font-size: 0.82rem;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border);
          transition: color 0.2s;
        }

        .nav-mobile-link:last-child {
          border-bottom: none;
        }
      `}</style>
    </>
  );
}
