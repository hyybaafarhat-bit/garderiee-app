"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Hero() {
  const [g, setG] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/garderie`).then((r) => r.json()).then(setG).catch(console.error);
  }, []);

  if (!g) return <section className="py-5 text-center">Chargement...</section>;

  return (
    <section id="accueil" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-5 fw-bold">{g.slogan}</h1>
            <p className="lead text-muted my-4">{g.description}</p>
            <a href="#contact" className="btn btn-primary btn-lg">Inscrire mon enfant</a>
          </div>
          <div className="col-12 col-md-6">
            <img src={g.image} alt={g.nom} className="img-fluid rounded-4 shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}