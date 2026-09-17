import { Link } from "react-router-dom";
import { LuArrowDown, LuArrowRight } from "react-icons/lu";
import Reveal from "../ui/Reveal";
import { PulseLine } from "../ui/Ornaments";
import { cdn } from "../../data/site";

const Hero = () => {
  const scrollToAbout = () =>
    document.getElementById("hakkimizda")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brand-950 text-white">
      <img
        src={cdn("sayfa_kapak.webp")}
        alt="Kurucumuz Ali Tepe bir çocukla sohbet ederken"
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 -z-20 size-full object-cover object-[72%_30%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950/95 via-brand-950/70 to-brand-950/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-brand-950 via-brand-950/25 to-brand-950/50"
      />

      <div className="wrapper pt-40 pb-40 sm:pb-48">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.14em] text-accent-200 uppercase sm:text-xs sm:tracking-[0.2em]">
              <PulseLine animated className="hidden h-6 w-16 shrink-0 text-accent-300 sm:block" />
              Çağdaş Eğitim ve Sağlık Vakfı · 1996
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.02] font-medium tracking-tight sm:text-7xl lg:text-[5.25rem]">
              Topluma değer katmak, <em className="text-accent-200">geleceğe umut olmak.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Ali Tepe Vakfı olarak eğitim, sağlık ve sosyal sorumluluk alanlarında topluma katkı
              sağlamak için çalışıyoruz.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-10 flex flex-wrap gap-3">
            <button type="button" onClick={scrollToAbout} className="btn btn-light">
              Vakfımızı Tanıyın
              <LuArrowDown className="btn-arrow-down size-4 transition-transform" />
            </button>
            <Link to="/haberler" className="btn btn-ghost-light">
              Haberler
              <LuArrowRight className="btn-arrow size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
