import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import "../styles/Header.scss";

export const Header = () => {
  return (
    <>
      <nav>
        <Link to="/" id="logo-link">
          <div className="inver-glow-container">
            <img src={logo} alt="LOGO.png" />
          </div>
        </Link>
        <div id="link-container">
          <Link to="/cv" id="cv-link">
            Lebenslauf
          </Link>
          <Link to="/documents" id="documents-link">
            Dokumente
          </Link>
          <Link to="/contact" id="contact-link">
            Kontakt
          </Link>
        </div>
      </nav>
    </>
  );
};
