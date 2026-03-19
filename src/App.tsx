import Hero from "./components/hero/Hero"
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat/500.css";
import Projetos from "./components/projects/Projetos";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <main>
        <Hero />
        <section className="w-full min-h-screen bg-zinc-100 py-20 relative z-20">
          <Projetos />
        </section>
      </main>
      <footer className="w-full relative z-20">
        <Footer />
      </footer>
    </>
  )
}

export default App
