const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Les Petits Explorateurs",
  slogan: "Un endroit sûr où vos enfants grandissent en s'amusant",
  description:
    "Une équipe bienveillante, des activités éducatives et un environnement chaleureux pour accompagner chaque enfant dans son épanouissement.",
  adresse: "12 Rue des Enfants, Sidi Bouzid",
  telephone: "+216 00 000 000",
  email: "contact@petitsexplorateurs.tn",
  horaires: "Lundi - Vendredi : 7h30 - 18h00",
  image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
};

const services = [
  { id: 1, icone: "🍼", titre: "Garde à la journée", description: "Accueil de 7h30 à 18h00 avec repas et goûters équilibrés." },
  { id: 2, icone: "🎨", titre: "Ateliers créatifs", description: "Dessin, peinture et bricolage pour développer l'imagination." },
  { id: 3, icone: "📚", titre: "Éveil et apprentissage", description: "Lecture, jeux éducatifs et initiation aux lettres et aux chiffres." },
];

const activites = [
  { id: 1, nom: "Chant et comptines", horaire: "09h00", age: "2-4 ans" },
  { id: 2, nom: "Peinture libre", horaire: "10h30", age: "3-5 ans" },
  { id: 3, nom: "Jeux d'extérieur", horaire: "15h00", age: "2-6 ans" },
  { id: 4, nom: "Heure du conte", horaire: "16h30", age: "3-6 ans" },
];

app.get("/api/garderie", (req, res) => res.json(garderie));
app.get("/api/services", (req, res) => res.json(services));
app.get("/api/activites", (req, res) => res.json(activites));

app.listen(PORT, () => console.log(`API démarrée sur http://localhost:${PORT}`));