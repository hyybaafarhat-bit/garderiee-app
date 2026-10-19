"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Activites() {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/activites`).then((r) => r.json()).then(setActivites).catch(console.error);
  }, []);

  return (
    <section id="activites" className="py-5" style={{ background: "#f7fbfb" }}>
      <div className="container">
        <h2 className="text-center section-title display-6 mb-5">
          Nos <span>activités</span>
        </h2>
        <div className="row g-4">
          {activites.map((a) => (
            <div className="col-12 col-md-6" key={a.id}>
              <div className="card activity-card shadow-sm h-100">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="fw-bold mb-1">{a.nom}</h5>
                    <span className="text-secondary">
                      <i className="bi bi-people-fill me-1"></i>{a.age}
                    </span>
                  </div>
                  <span className="badge rounded-pill text-bg-warning fs-6 px-3 py-2">
                    <i className="bi bi-clock me-1"></i>{a.horaire}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}