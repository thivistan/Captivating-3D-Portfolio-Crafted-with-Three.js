import React from "react";
import { Navbar } from "./components/Navbar";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

export default App;
