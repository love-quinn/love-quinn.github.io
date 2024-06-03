import { useRef } from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./utils/LanguageContext";
import { DataProvider } from "./utils/DataContext";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <LanguageProvider>
        <DataProvider>
          <Navbar
            heroRef={heroRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <Hero ref={heroRef} />
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
          <Footer />
        </DataProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
