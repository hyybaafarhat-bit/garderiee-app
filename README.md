# 🧸 garderie-app

Application web pour une garderie d'enfants : landing page responsive alimentée par une API REST.

## Technologies
- Next.js (App Router) et React
- Bootstrap 5
- Node.js et Express
- Git et GitHub (workflow par branches)

## Structure des dossiers
```
garderie-app/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   └── Activites.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── backend/
│   ├── server.js
│   └── package.json
├── public/
├── .env.local
└── package.json
```

## Installation
```bash
git clone https://github.com/hyybaafarhat-bit/garderiee-app.git
cd garderie-app
npm install
cd backend && npm install && cd ..
```
Crée un fichier `.env.local` à la racine :
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Exécution
Terminal 1 (backend) :
```bash
cd backend
npm start      # http://localhost:5000
```
Terminal 2 (frontend) :
```bash
npm run dev    # http://localhost:3000
```

## Documentation des API
| Méthode | Route | Description |
|---|---|---|
| GET | /api/garderie | Informations générales de la garderie |
| GET | /api/services | Liste des services proposés |
| GET | /api/activites | Liste des activités pour enfants |

### Exemple : GET /api/services
```json
[
  { "id": 1, "icone": "🍼", "titre": "Garde à la journée", "description": "..." }
]
```

### Exemple : GET /api/activites
```json
[
  { "id": 1, "nom": "Chant et comptines", "horaire": "09h00", "age": "2-4 ans" }
]
```

## Workflow Git
Une branche par étape, fusionnée dans `main` : `feature/landing-page`, `feature/components`, `feature/backend`, `feature/api-integration`, `docs/readme`.

## Auteur
Hyba farhat, ISET Tozeur