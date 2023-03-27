import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Testimonials />
      <Community />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
