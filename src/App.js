import "./App.css";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Resposive from "./components/mobileresponsive/Resposive";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offer/Offer";
import Projects from "./components/projects/Projects";

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
    </div>
  );
}

export default App;
