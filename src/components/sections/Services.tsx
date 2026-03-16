import { siteData } from "@/data/siteData";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
          {siteData.services.map((service, i) => (
            <div key={i} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.5rem" }}>{service.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>{service.description}</p>
              </div>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)" }}>{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
