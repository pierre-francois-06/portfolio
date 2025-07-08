import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DocumentsSection } from "../components/DocumentsSection";

export const Documents = () => {
  return (
    <>
      <Header />
      <main>
        <section className="documents-section" id="documents-section">
          <div id="documents-section-content">
            <DocumentsSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
