import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CVSection } from "../components/CVSection";
import cvData from "../assets/cv-data.json";
import "../styles/CV.scss";

export const CV = () => {
  return (
    <>
      <Header />
      <main>
        <section className="cv-section" id="cv-section">
          <div id="cv-section-content">
            {Object.entries(cvData).map(([key, section]) => (
              <CVSection key={key} data={section} />
            ))}
            <button
              id="cv-download"
              onClick={() =>
                window.open(
                  `${import.meta.env.BASE_URL}${"documents/lebenslauf1.pdf"}`,
                  "_blank"
                )
              }
            >{`📩 Lebenslauf`}</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
