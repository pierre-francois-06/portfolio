import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};
