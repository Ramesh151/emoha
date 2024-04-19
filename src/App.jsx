import "./App.css";

import Main from "./pages/Main";

import Rounded from "./components/Rounded";
import HeroSection2 from "./components/HeroSection2";
import HeroSection3 from "./pages/HeroSection3";

import HeroSection4 from "./pages/HeroSection4";
import Man from "./components/Man";

import HeroSection5 from "./pages/HeroSection5";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Main />

      <Rounded />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <Man />
      <HeroSection5 />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
