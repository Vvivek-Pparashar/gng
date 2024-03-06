import "./App.css";
import Crausal from "./components/Crausal/Crausal";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Brief from "./components/AboutUs/brief/Brief";
import Vision from "./components/AboutUs/vision/Vision";
import InputForm from "./components/ContactUs/inputform/InputForm";
import Features from "./components/Features/Features";
import { ScrollRestoration } from "react-router-dom";
import ShowCase from "./components/OurProjects/showcase/ShowCase";

export default function App() {
  return (
    <div className="hero-page">
      <Navbar />
      <div className="hero-overlay">
        <div className="hero-overlay-text">
          <h1>
            LANDMARKS PLANNED <br></br>WITH PASSION{" "}
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <button>Explore More</button>
        </div>
        <Crausal />
      </div>
      <Brief />
      <ShowCase />
      <Features />
      <Vision />
      <InputForm />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
