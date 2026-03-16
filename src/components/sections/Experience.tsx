import { siteData } from "@/data/siteData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div>
          {siteData.experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600 }}>{exp.role}</h3>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--accent)", marginBottom: "0.5rem", fontWeight: 500 }}>{exp.company}</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.75rem", lineHeight: 1.6 }}>{exp.description}</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
