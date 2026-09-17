import { Link } from "react-router-dom";
import { LuArrowRight, LuCalendarDays } from "react-icons/lu";
import { GlobeMark } from "../ui/Ornaments";
import { cn, formatDate } from "../../libs/utils";

// variant: "featured" (görsel üzerinde yazı) · "wide" (tam genişlik, görsel + metin yan yana)
//          "default" (dikey kart) · "compact" (yatay, küçük)
const NewsCard = ({ item, variant = "default", className }) => {
  const href = `/haber/${item.slug}`;
  const date = <time dateTime={item.date}>{formatDate(item.date)}</time>;

  if (variant === "wide") {
    return (
      <article
        className={cn(
          "group relative isolate grid overflow-hidden rounded-[2rem] bg-brand-950 text-white lg:grid-cols-12",
          className,
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[30rem]">
          <img
            src={item.cover}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
        </div>
        <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 lg:p-12">
          <GlobeMark className="pointer-events-none absolute -right-32 -bottom-40 -z-10 w-[26rem] text-white/[0.06]" />
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="rounded-full bg-accent-400/15 px-3 py-1 text-xs font-semibold tracking-wide text-accent-200">
              {item.category}
            </span>
            {date}
          </div>
          <h3 className="mt-5 font-serif text-[1.9rem] leading-tight font-medium sm:text-4xl">
            <Link to={href} className="after:absolute after:inset-0 focus-visible:outline-none">
              {item.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-4 leading-relaxed text-white/70">{item.summary}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-200">
            Haberi oku
            <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article
        className={cn(
          "group relative isolate flex h-full min-h-[26rem] overflow-hidden rounded-[2rem] bg-brand-950 text-white sm:min-h-[34rem]",
          className,
        )}
      >
        <img
          src={item.cover}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-brand-950 via-brand-950/65 to-brand-950/5"
        />
        <div className="mt-auto p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/75">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
              {item.category}
            </span>
            {date}
          </div>
          <h3 className="mt-4 max-w-2xl font-serif text-[1.9rem] leading-tight font-medium sm:text-4xl">
            <Link to={href} className="after:absolute after:inset-0 focus-visible:outline-none">
              {item.title}
            </Link>
          </h3>
          <p className="mt-4 line-clamp-2 max-w-2xl text-white/70">{item.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-200">
            Haberi oku
            <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article
        className={cn(
          "group relative flex items-center gap-5 rounded-3xl bg-white p-3 pr-5 ring-1 ring-line transition-[box-shadow,translate] duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_40px_-28px_rgb(15_24_52/0.45)] focus-within:ring-accent-400",
          className,
        )}
      >
        <div className="aspect-square w-28 shrink-0 overflow-hidden rounded-2xl bg-brand-100 sm:w-36">
          <img
            src={item.cover}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="min-w-0 py-1">
          <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-accent-700 uppercase">
            {item.category}
          </p>
          <h3 className="mt-2 line-clamp-2 font-serif text-lg leading-snug font-medium text-brand-950 sm:text-xl">
            <Link to={href} className="after:absolute after:inset-0 focus-visible:outline-none">
              {item.title}
            </Link>
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
            <LuCalendarDays className="size-4 shrink-0" aria-hidden="true" />
            {date}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-[box-shadow,translate] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgb(15_24_52/0.45)] focus-within:ring-accent-400",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-100">
        <img
          src={item.cover}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur-md">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <LuCalendarDays className="size-4 shrink-0" aria-hidden="true" />
          {date}
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-snug font-medium text-brand-950">
          <Link to={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{item.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent-700">
          Haberi oku
          <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
};

export default NewsCard;
