import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import NewsCard from "../news/NewsCard";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { sortedNews } from "../../data/news";
import { cn } from "../../libs/utils";

const SLIDE_COUNT = 5;
const SLIDE_INTERVAL = 6000;

// Ana sayfada başlığın hemen altında duran, haberleri sırayla gösteren bölüm.
// Fare üstündeyken, odak içerdeyken, bölüm ekranda değilken ya da hareket azaltma
// tercihi açıkken kendiliğinden dönmez.
const LatestNews = () => {
  const slides = sortedNews.slice(0, SLIDE_COUNT);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.45,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const count = slides.length;
  const paused = hovered || focused || !inView || reducedMotion || count < 2;

  const go = useCallback((next) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setIndex((current) => (current + 1) % count), SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [index, paused, count]);

  if (!count) return null;

  return (
    <section
      id="haberler"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Son haberler"
      className="pt-24 pb-20 sm:pt-28 sm:pb-28"
    >
      <div className="wrapper">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading eyebrow="Haberler" title="Vakfımızdan haberler" />
          </Reveal>
          <Reveal delay={100}>
            <Link to="/haberler" className="btn btn-outline">
              Tüm Haberler
              <LuArrowRight className="btn-arrow size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
            }}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setTimeout(() => setHovered(false), 4000)}
          >
            <div className="grid" aria-live={paused ? "polite" : "off"}>
              {slides.map((item, position) => {
                const active = position === index;
                return (
                  <div
                    key={item.slug}
                    role="group"
                    aria-roledescription="slayt"
                    aria-label={`${position + 1} / ${count}`}
                    aria-hidden={!active}
                    inert={!active}
                    className={cn(
                      "col-start-1 row-start-1 transition-[opacity,visibility] duration-700",
                      active ? "visible opacity-100" : "invisible opacity-0",
                    )}
                  >
                    <NewsCard item={item} variant="featured" />
                  </div>
                );
              })}
            </div>

            {count > 1 && (
              <div className="mt-6 flex items-center justify-between gap-6">
                <div className="flex flex-1 items-center gap-2 sm:max-w-md">
                  {slides.map((item, position) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => go(position)}
                      aria-label={`${position + 1}. habere git: ${item.title}`}
                      aria-current={position === index}
                      className="group/dot flex h-6 flex-1 cursor-pointer items-center"
                    >
                      <span className="relative block h-1 w-full overflow-hidden rounded-full bg-brand-200/70 transition-colors group-hover/dot:bg-brand-300">
                        {position === index && (
                          <span
                            key={`${index}-${paused}`}
                            className={cn(
                              "absolute inset-0 origin-left rounded-full bg-brand-700",
                              paused ? "scale-x-0" : "animate-news-progress",
                            )}
                          />
                        )}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => go(index - 1)}
                    aria-label="Önceki haber"
                    className="grid size-11 cursor-pointer place-items-center rounded-full bg-white text-brand-800 ring-1 ring-line transition-colors hover:bg-brand-50"
                  >
                    <LuArrowLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(index + 1)}
                    aria-label="Sonraki haber"
                    className="grid size-11 cursor-pointer place-items-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-800"
                  >
                    <LuArrowRight className="size-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LatestNews;
