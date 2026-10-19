export default function Services() {
  return (
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
  );
}