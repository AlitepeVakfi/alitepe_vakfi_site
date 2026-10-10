import { useEffect } from "react";
import Hero from "../components/Home/Hero";
import LatestNews from "../components/Home/LatestNews";
import About from "../components/Home/About";
import FocusAreas from "../components/Home/FocusAreas";
import Founder from "../components/Home/Founder";
import ContactCta from "../components/Home/ContactCta";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HERO_PAUSE = 4000;
const CANCEL_EVENTS = ["wheel", "touchstart", "touchmove", "mousedown", "keydown", "scroll"];

// Site ilk açıldığında başlık birkaç saniye görünür, ardından sayfa haberlere iner.
// Ziyaretçi bu sırada kendisi kaydırır ya da dokunursa hiçbir şey yapılmaz.
// Yalnızca sayfa yüklenişinde bir kez çalışır; başka sayfadan ana sayfaya dönüşte tekrarlanmaz.
let introPlayed = false;

const useIntroScroll = () => {
  useEffect(() => {
    if (introPlayed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.scrollY > 40) {
      introPlayed = true;
      return;
    }

    const stop = () => {
      clearTimeout(timer);
      CANCEL_EVENTS.forEach((name) => window.removeEventListener(name, cancel));
    };
    const cancel = () => {
      introPlayed = true;
      stop();
    };
    const timer = setTimeout(() => {
      introPlayed = true;
      stop();
      document.getElementById("haberler")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, HERO_PAUSE);

    CANCEL_EVENTS.forEach((name) => window.addEventListener(name, cancel, { passive: true }));
    return stop;
  }, []);
};

const Home = () => {
  useDocumentTitle();
  useIntroScroll();

  return (
    <>
      <Hero />
      <LatestNews />
      <About />
      <FocusAreas />
      <Founder />
      <ContactCta />
    </>
  );
};

export default Home;
