import { useRef } from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./utils/LanguageContext";
import { DataProvider } from "./utils/DataContext";
import FloatingWhatsappButton from "./components/FloatingWhatsappButton";
import Services from "./components/Services/Services"

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);
  return (
    <>
      <LanguageProvider>
        <DataProvider>
          <Navbar
            heroRef={heroRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            testimonialsRef={testimonialsRef}
            contactRef={contactRef}
          />
          <Hero ref={heroRef} />
          <About ref={aboutRef} />
          <Services ref={servicesRef}/>
          <Projects ref={projectsRef} />
          <Testimonials ref={testimonialsRef} />
          <Contact ref={contactRef} />
          <FloatingWhatsappButton/>
          <Footer />
        </DataProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
