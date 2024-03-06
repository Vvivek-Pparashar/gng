import "../Features/features.css";
import Featurecomponent from "./Featurecomponent";
import logo1 from "../../assets/Logo1.png";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import logo5 from "../../assets/Logo5.png";
import logo6 from "../../assets/Logo6.png";

const Features = () => {
  return (
    <div className="features">
      <Featurecomponent
        featureLogo={logo1}
        heading={"INNOVATIVE BUILT"}
        brief={"Use of latest & innovative construction technology"}
      />
      <Featurecomponent
        featureLogo={logo2}
        heading={"METICULOUS PLANNING"}
        brief={"Well planned homes keeping the smallest details in mind"}
      />
      <Featurecomponent
        featureLogo={logo3}
        heading={"CUSTOMER FIRST"}
        brief={"Adopting a customer first Approach in everything we do"}
      />
      <Featurecomponent
        featureLogo={logo4}
        heading={"BEST LOCATIONS"}
        brief={"Thoughtfully selected project locations for utmost convenience"}
      />
      <Featurecomponent
        featureLogo={logo5}
        heading={"MODERN TECHNOLOGY"}
        brief={"Adapting latest technology in our projects"}
      />
      <Featurecomponent
        featureLogo={logo6}
        heading={"AWARDED DESIGNS"}
        brief={"Best designs which are recognized across the industry"}
      />
    </div>
  );
};

export default Features;
