import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import AlenzaHeroPage from "./Alenza-HeroPage/AlenzaHeroPage";
import ProjectNav from "./ProjectNav/ProjectNav";
import Amenities from "./Amenities/Amenities";
import FloorPlan from "./FloorPlan/FloorPlan";
import OverView from "./OverView/OverView";

const Alenza = () => {
  return (
    <div>
      <Navbar />
      <AlenzaHeroPage />
      <ProjectNav />
      <OverView/>
      <Gallery />
      <Amenities />
      <FloorPlan />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Alenza;
