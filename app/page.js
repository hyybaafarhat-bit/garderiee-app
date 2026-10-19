import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <footer id="contact" className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2026 Les Petits Explorateurs</p>
      </footer>
    </>
  );
}