import React from "react";
import About from "./components/Navbar";
import About from "./components/About";
import About from "./components/Projects";
import About from "./components/Contact";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}


