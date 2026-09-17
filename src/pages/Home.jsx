import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import FocusAreas from "../components/Home/FocusAreas";
import Founder from "../components/Home/Founder";
import LatestNews from "../components/Home/LatestNews";
import ContactCta from "../components/Home/ContactCta";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <Founder />
      <LatestNews />
      <ContactCta />
    </>
  );
};

export default Home;
