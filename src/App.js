import "./App.css";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import HireMe from "./components/hireme/HireMe";
import Resposive from "./components/mobileresponsive/Resposive";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offer/Offer";
import Projects from "./components/projects/Projects";
import Testimonail from "./components/testimonial/Testimonail";
import Skills from "./components/toolsskills/Skills";

function App() {
  return (
    <div className="App">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <Resposive />
      </div>
      <Hero />
      <Offer />
      <Experience />
      <Projects />
      <HireMe />
      <Testimonail />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
