import { useRef } from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <Navbar heroRef={heroRef} aboutRef={aboutRef} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
    </>
  );
}

export default App;
