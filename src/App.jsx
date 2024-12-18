import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/BrandsSection";
import Details from "./components/Details";
import AboutUs from "./components/AboutUs";
import CareerPage from "./components/Career"
import FeaturedNews from "./components/News";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (<>
  <Navbar />
  <HeroSection />
  <BrandsSection /> 
  <Details />
  <AboutUs />
  <CareerPage />
  <FeaturedNews />
  <ContactForm />
  <Footer />
  </>);
}

export default App;
