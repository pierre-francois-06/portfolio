import "../styles/Footer.scss";

export const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div id="footer-content">
        <p>
          © {new Date().getFullYear()} Pierre François. Alle Rechte vorbehalten.
        </p>
        <a href="https://github.com/pierre-francois-06" target="_blank">
          github
        </a>
        <a href="/impressum.html" target="_blank" rel="noopener noreferrer">
          Impressum
        </a>
      </div>
    </section>
  );
};
