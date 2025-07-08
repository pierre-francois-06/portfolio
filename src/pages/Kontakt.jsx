import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contacts } from "../components/Contacts";

export const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <section className="contact-section" id="contact-section">
          <div id="contact-section-content">
            <p>
              Sie haben Fragen, möchtest mehr über mich erfahren oder benötigst
              weitere Dokumente bzw. Passwörter zu den Dokumenten? Dann
              schreiben Sie mir gerne eine E-Mail.
            </p>

            <Contacts />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
