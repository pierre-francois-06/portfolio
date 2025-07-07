import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

export const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="LOGO.png" />
        </Link>
        <Link to="/cv">Lebenslauf</Link>
        <Link to="/documents">Dokumente</Link>
        <Link to="/contacts">Kontakt</Link>
      </nav>
    </>
  );
};
