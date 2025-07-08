import "../styles/Hero.scss";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div id="hero-content">
        <h1>
          Hallo, ich bin <span className="highlight">Pierre François</span>
        </h1>
        <h2>Angehender Cyber Security Student an der IU</h2>
        <p>
          Webentwicklung{" "}
          <a
            href={`https://www.freecodecamp.org/Pierre-Francois`}
            target="_blank"
          >
            freeCodeCamp
          </a>{" "}
          und Cybersecurity – neugierig und engagiert.
        </p>
      </div>
    </section>
  );
};
