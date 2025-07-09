import "../styles/Footer.scss";
import githubLogo from "/src/assets/github.png";
import impressumLogo from "/src/assets/agreement.png";

export const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div id="footer-content">
        <p>
          © {new Date().getFullYear()} Pierre François. Alle Rechte vorbehalten.
        </p>
        <a href="https://github.com/pierre-francois-06" target="_blank">
          <img className="logo-link" src={githubLogo} alt="GITHUB.png" />
        </a>
        <a href="/impressum.html" target="_blank" rel="noopener noreferrer">
          <img
            className="logo-link"
            id="impressum-logo"
            src={impressumLogo}
            alt="IMPRESSUM.png"
          />
        </a>
      </div>
    </section>
  );
};
