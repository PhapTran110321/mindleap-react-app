import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import About from "./component/About";
import WorkingStep from "./component/WorkingStep";
import Pricing from "./component/Pricing";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
