import React from "react";
import hm1 from "../../../assets/briefIMG-alianza.png";
import "./OverView.css";

const OverView = () => {
  return (
    <div id="OverView" className="al-ov">
      <div className="al-ov-left">
        <h2>INSPIRATION. CRAFT. LEGACY</h2>
        <p>3 BED, 4 BED & DUPLEX HOME</p>
        <p>Pali Hill</p>
        <p>
          Samarpan is a resulting masterpiece of matchless skill, imagination
          and intention, that is crafted without compromise. Designed with a
          philosophy of ‘Inside Out Design’, that is inspired from one of
          nature’s singular creations – the Fibonacci Spiral.
        </p>
        <h6>
          100 Mts from Arabian Sea | Lush greenery | Openness of playgrounds |
          Colonial architecture of Petit School
        </h6>
        <button>Download Broucher</button>
      </div>
      <div className="al-ov-right">
        <img src={hm1} alt="alanza-comercial" />
      </div>
    </div>
  );
};

export default OverView;
