"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Hero() {
  const [g, setG] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/garderie`).then((r) => r.json()).then(setG).catch(console.error);
  }, []);

  if (!g) return <section className="hero text-center">Chargement...</section>;

  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <span className="badge rounded-pill text-bg-warning px-3 py-2 mb-3">👋 Bienvenue</span>
            <h1 className="display-4 fw-bold">{g.slogan}</h1>
            <p className="lead text-secondary my-4">{g.description}</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a href="#services" className="btn btn-brand btn-lg">Découvrir nos services</a>
            </div>
            <p className="mt-4 mb-0 text-secondary">
              <i className="bi bi-clock-fill text-brand me-2"></i>{g.horaires}
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src="/images/hero.jpg" alt={g.nom} className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}