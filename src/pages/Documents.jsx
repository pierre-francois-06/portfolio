import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DocumentsSection } from "../components/DocumentsSection";
import documentsData from "../assets/documents-data.json";

export const Documents = () => {
  return (
    <>
      <Header />
      <main>
        <section className="documents-section" id="documents-section">
          <div id="documents-section-content">
            {Object.entries(documentsData).map(([key, section]) => (
              <DocumentsSection key={key} data={section} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
