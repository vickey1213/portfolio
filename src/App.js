import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"; // Import the global CSS file

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
