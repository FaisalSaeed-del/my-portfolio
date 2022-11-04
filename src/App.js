import "./App.css";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Resposive from "./components/mobileresponsive/Resposive";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offer/Offer";

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
    </div>
  );
}

export default App;
