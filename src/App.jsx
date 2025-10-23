import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import CoffeeShowcase from "./components/CoffeeShowcase";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <CoffeeShowcase />
      <AboutUs />
      <div className="h-screen bg-green-200"></div>
    </>
  );
}

export default App;
