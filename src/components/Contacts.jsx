import "../styles/Contact.scss";
import githubLogo from "/src/assets/github.png";
import emailLogo from "/src/assets/email.png";

export const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <div id="contact-content">
        <h2>Kontakt</h2>
        <p>
          Sie möchten mit mir in Kontakt treten? Ich freue mich über Ihre
          Nachricht.
        </p>
        <a href="mailto:pierrefrancois1907@gmail.com" className="contact-link">
          <img
            className="logo-link"
            id="email.logo"
            src={emailLogo}
            alt="EMAIL.png"
          />
        </a>
        <a
          href="https://github.com/pierre-francois-06"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo-link"
            id="github-logo"
            src={githubLogo}
            alt="GITHUB.png"
          />
        </a>
      </div>
    </section>
  );
};
