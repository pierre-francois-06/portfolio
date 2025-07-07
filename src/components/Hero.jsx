import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div id="hero-content">
        <h1>
          Hallo, ich bin <span className="highlight">Pierre François</span>
        </h1>
        <h2>Angehender Cyber Security Student an der IU</h2>
        <p>
          Webentwicklung <Link to="/freeCodeCamp">(freeCodeCamp)</Link> und
          Cybersecurity – neugierig und engagiert.
        </p>
      </div>
    </section>
  );
};
