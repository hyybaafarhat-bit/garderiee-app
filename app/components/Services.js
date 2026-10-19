"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/services`).then((r) => r.json()).then(setServices).catch(console.error);
  }, []);

  return (
    <section id="services" className="py-5 my-4">
      <div className="container">
        <h2 className="text-center section-title display-6 mb-5">
          Nos <span>services</span>
        </h2>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-12 col-md-4" key={s.id}>
              <div className="card service-card h-100 shadow-sm text-center p-4">
                <div className="icon-circle">{s.icone}</div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{s.titre}</h5>
                  <p className="card-text text-secondary">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}