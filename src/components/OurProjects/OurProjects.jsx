import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Showcase from "./showcase/ShowCase";
import OurProjectsHero from "./ourProjectsHero/OurProjectsHero";

const OurProjects = () => {
  return (
    <div>
      <Navbar />
      <OurProjectsHero />
      <Showcase />
      <Footer />
    </div>
  );
};

export default OurProjects;
