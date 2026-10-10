import { useEffect } from "react";
import Hero from "../components/Home/Hero";
import LatestNews from "../components/Home/LatestNews";
import About from "../components/Home/About";
import FocusAreas from "../components/Home/FocusAreas";
import Founder from "../components/Home/Founder";
import ContactCta from "../components/Home/ContactCta";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HERO_PAUSE = 2200;
const AFTER_LOAD_PAUSE = 800;
const MAX_LOAD_WAIT = 2500;
const SCROLL_DURATION = 650;
// Yalnızca ziyaretçinin kendi hareketleri kaydırmayı iptal eder. "scroll" olayı dinlenmez:
// tarayıcının kaydırma konumunu geri yüklemesi ya da mobilde adres çubuğunun küçülmesi de
// bu olayı tetikleyip kaydırmayı sessizce iptal ediyordu.
const CANCEL_EVENTS = ["wheel", "touchstart", "keydown"];

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Site ilk açıldığında başlık kısa süre görünür, ardından sayfa haberlere iner.
// Ziyaretçi bu sırada kendisi kaydırır, dokunur ya da tuşa basarsa hiçbir şey yapılmaz.
// Yalnızca sayfa yüklenişinde bir kez çalışır; başka sayfadan ana sayfaya dönüşte tekrarlanmaz.
// Kaydırma tarayıcının yumuşak kaydırması yerine kısa, kendi animasyonumuzla yapılır
// (yumuşak kaydırma uzun sürüyor ve hızı tarayıcıya göre değişiyor).
let introPlayed = false;

const useIntroScroll = () => {
  useEffect(() => {
    if (introPlayed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      introPlayed = true;
      return;
    }

    let timer;
    let frame;
    let loadListener;

    const stop = () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      if (loadListener) window.removeEventListener("load", loadListener);
      CANCEL_EVENTS.forEach((name) => window.removeEventListener(name, cancel));
    };
    const cancel = () => {
      introPlayed = true;
      stop();
    };

    const animate = () => {
      const target = document.getElementById("haberler");
      if (!target) return cancel();
      const from = window.scrollY;
      const started = performance.now();
      const step = (now) => {
        const progress = Math.min((now - started) / SCROLL_DURATION, 1);
        const to = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: from + (to - from) * easeInOut(progress), behavior: "instant" });
        if (progress < 1) frame = requestAnimationFrame(step);
        else cancel();
      };
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      // Sayfa yenilenip tarayıcı eski konuma döndürdüyse (ziyaretçi zaten aşağıda) dokunma.
      const hero = document.getElementById("haberler")?.previousElementSibling;
      if (window.scrollY > (hero?.offsetHeight ?? 0) * 0.4) return cancel();
      animate();
    };

    timer = setTimeout(() => {
      if (document.readyState === "complete") return start();
      // Görseller yetişmeden kaydırmak başlığı hiç göstermez; yüklenince kısa bekle.
      // Yavaş bağlantıda sonsuza kadar beklememek için üst sınır var.
      loadListener = () => {
        clearTimeout(timer);
        timer = setTimeout(start, AFTER_LOAD_PAUSE);
      };
      window.addEventListener("load", loadListener, { once: true });
      timer = setTimeout(start, MAX_LOAD_WAIT);
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
