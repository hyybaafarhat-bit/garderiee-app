"use client";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-primary" href="#accueil">
          <span className="fs-3">🧸</span> Les Petits Explorateurs
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}