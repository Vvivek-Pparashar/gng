import { Link } from "react-router-dom";
import Hm4 from "../../../assets/un1.png";
import Hm5 from "../../../assets/apartments.jpg";

import "./ShowCase.css";

const ShowCase = () => {
  return (
    <div className="op">
      <h1>Our Projects</h1>
      <div className="op-card-cont">
        <div className="op-card">
          <img src={Hm4} alt="apartment-image" />
          <div className="op-card-text">
            <h2>GnG Commercial - Alinza</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
            </p>
          </div>
          <Link to={"/GnG-Commercial-Alenza"}>
            <button style={{ backgroundColor: "#C5a253" }}>
              Book Now &#8594;
            </button>
          </Link>
        </div>
        <div className="op-card">
          <img src={Hm5} alt="apartment-image" />
          <div className="op-card-text">
            <h2>GnG Residencial - Alinza</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
            </p>
          </div>
          <button style={{ cursor: "default" }}>Coming Soon...</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
