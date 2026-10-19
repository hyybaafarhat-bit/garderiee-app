export default function Hero() {
  return (
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
  );
}