import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Qualification from "./Components/Qualification/Qualification";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Scrollup from "./Components/Scrollup/Scrollup";

function App() {
  return (
    <div className="App">
       <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services/>
        <Qualification/>
        <Testimonial/>
        <Contact/>
      
      </main>
      <Footer/>
        <Scrollup/>
    </div>
  );
}

export default App;
