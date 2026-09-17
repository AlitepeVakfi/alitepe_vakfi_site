import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import NewsCard from "../news/NewsCard";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { sortedNews } from "../../data/news";

const LatestNews = () => {
  const [featured, ...others] = sortedNews;
  if (!featured) return null;

  return (
    <section className="py-24 sm:py-32">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <NewsCard item={featured} variant="featured" />
          </Reveal>
          <div className="flex flex-col gap-5 lg:col-span-5 lg:justify-between">
            {others.slice(0, 3).map((item, index) => (
              <Reveal key={item.slug} delay={(index + 1) * 90}>
                <NewsCard item={item} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
