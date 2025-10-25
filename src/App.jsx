import "./App.css";
import Hero from "./components/Hero";
import CoffeeShowcase from "./components/CoffeeShowcase";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import AboutUsMobile from "./components/AboutUsMobile";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  })

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Hero />
        <CoffeeShowcase />
        <AboutUs />
        <AboutUsMobile />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
