import { Link } from "react-router-dom";
import "./ProjectNav.css";

const ProjectNav = () => {
  return (
    <div className="pnav">
      <Link to={"#OverView"} className="Link">
        <p>OVERVIEW</p>
      </Link>
      <Link to={"#Amenities"} className="Link">
        <p>AMENITIES</p>
      </Link>
      <Link to={"#Gallery"} className="Link">
        <p>GALLERY</p>
      </Link>
      <Link to={"#FloorPlan"} className="Link">
        <p>FLOOR PLAN</p>
      </Link>
      <Link to={"#Location"} className="Link">
        <p>LOCATION</p>
      </Link>
    </div>
  );
};

export default ProjectNav;
