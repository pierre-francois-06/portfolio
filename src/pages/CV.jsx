import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CVSection } from "../components/CVSection";
import cvData from "../assets/cv-data.json";

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
            <a
              href="/documents/lebenslauf.pdf"
              download="Pierre-François-Lebenslauf.pdf"
            >
              📩 Lebenslauf
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
