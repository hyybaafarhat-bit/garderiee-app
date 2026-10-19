"use client";
import { useEffect } from "react";

export default function Home() {
  // JS de Bootstrap (nécessaire pour le menu burger sur mobile)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* NAVBAR */}
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

      {/* HERO */}
      <section id="accueil" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6 text-center text-md-start">
              <h1 className="display-5 fw-bold">Un endroit sûr où vos enfants grandissent en s'amusant</h1>
              <p className="lead text-muted my-4">
                Une équipe bienveillante, des activités éducatives et un environnement chaleureux
                pour accompagner chaque enfant dans son épanouissement.
              </p>
              <a href="#contact" className="btn btn-primary btn-lg">Inscrire mon enfant</a>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"
                alt="Enfants qui jouent à la garderie"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Nos services</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-4">🍼</div>
                <div className="card-body">
                  <h5 className="card-title">Garde à la journée</h5>
                  <p className="card-text text-muted">Accueil de 7h30 à 18h00 avec repas et goûters équilibrés.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-4">🎨</div>
                <div className="card-body">
                  <h5 className="card-title">Ateliers créatifs</h5>
                  <p className="card-text text-muted">Dessin, peinture et bricolage pour développer l'imagination.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="display-4">📚</div>
                <div className="card-body">
                  <h5 className="card-title">Éveil et apprentissage</h5>
                  <p className="card-text text-muted">Lecture, jeux éducatifs et initiation aux lettres et aux chiffres.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2026 Les Petits Explorateurs</p>
      </footer>
    </>
  );
}