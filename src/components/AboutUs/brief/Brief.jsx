import Screen2Image from "../../../assets/briefIMG.png";
import "./brief.css";

const Brief = () => {
  return (
    <section className="about-brief">
      <div className="a-b-content">
        <h1>A brief About us</h1>
        <p className="text-4xl max-[400px]:text-2xl leading-[2.7rem] text-orange-950 font-bold">
          The Gng Group carries a rich legacy of over half a century built on
          the trust and belief of our customers and stakeholders. The group is
          one of Mumbai’s leading real estate companies and is currently
          developing residential, commercial and township projects spread across
          approximately 4.21 Million sq.m Developed, ongoing & future (45
          million square feet). Timely completion of projects coupled with
          strong planning and design innovation gives the group an edge over its
          competitors. As an organization, the group is also known for its
          employee-friendly and professional working environment. Today, the
          group’s clientele comprises of over 20,000+ satisfied customers and
          over 150 + MNC corporate tenants.
        </p>
      </div>
      <div className="brief-img-container">
        <img src={Screen2Image} />
      </div>
    </section>
  );
};

export default Brief;
