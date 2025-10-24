import "./App.css";
import Hero from "./components/Hero";
import CoffeeShowcase from "./components/CoffeeShowcase";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import AboutUsMobile from "./components/AboutUsMobile";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CoffeeShowcase />
      <AboutUs />
      <AboutUsMobile />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
