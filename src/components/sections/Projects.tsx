import { siteData } from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1rem" }}>
          {siteData.projects.map((proj, i) => (
            <div key={i} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600 }}>{proj.title}</h3>
                <span className="tag" style={{ fontSize: "0.65rem" }}>{proj.type}</span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{proj.description}</p>
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                {proj.tags.map((tag) => (
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
