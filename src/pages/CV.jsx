import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CVSection } from "../components/CVSection";
import cvData from "../assets/cv-data.json";

export const CV = () => {
  return (
    <>
      <Header />
      <main>
        {Object.entries(cvData).map(([key, section]) => (
          <CVSection key={key} data={section} />
        ))}
      </main>
      <Footer />
    </>
  );
};
