import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Section from "./components/Section";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Section />
    <Contact />

    <SocialLinks />
  </div>
  );
}

export default App;

