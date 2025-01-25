import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollPage from "./components/ScrollPage";
import Skills from "./components/Skills";

export default function App() {
  return (
  <>
   <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <ScrollPage />
  <Footer />
  </>
  )
}