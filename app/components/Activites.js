"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Activites() {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/activites`).then((r) => r.json()).then(setActivites).catch(console.error);
  }, []);

  return (
    <section id="activites" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Nos activités</h2>
        <ul className="list-group shadow-sm">
          {activites.map((a) => (
            <li key={a.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fw-semibold">{a.nom}</span>
              <span>
                <span className="badge bg-primary me-2">{a.horaire}</span>
                <span className="badge bg-secondary">{a.age}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}