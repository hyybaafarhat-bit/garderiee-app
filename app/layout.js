import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata = {
  title: "Les Petits Explorateurs - Garderie",
  description: "Garderie d'enfants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}