import React from "react";
import About from "./components/Navbar";
import About from "./components/About";
import About from "./components/Projects";
import About from "./components/Contact";
import About from "./components/Skills";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}


