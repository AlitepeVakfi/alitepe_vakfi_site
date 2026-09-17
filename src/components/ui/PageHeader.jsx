import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import { GlobeMark } from "./Ornaments";
import { cn } from "../../libs/utils";

export const Breadcrumbs = ({ items }) => (
  <nav aria-label="Sayfa konumu">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
      <li>
        <Link to="/" className="transition-colors hover:text-white">
          Ana Sayfa
        </Link>
      </li>
      {items.map((item) => (
        <li key={item.label} className="flex min-w-0 items-center gap-1.5">
          <LuChevronRight className="size-3.5 shrink-0 text-white/30" aria-hidden="true" />
          {item.href ? (
            <Link to={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="max-w-[16rem] truncate text-white/85 sm:max-w-md">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// İç sayfaların üst bölümü: lacivert zemin, küre deseni, sayfa başlığı.
const PageHeader = ({ eyebrow, title, description, breadcrumbs = [], className, children }) => (
  <section className={cn("relative isolate overflow-hidden bg-brand-950 text-white", className)}>
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_36rem_at_85%_-10%,rgb(0_163_192/0.2),transparent_60%),radial-gradient(44rem_30rem_at_0%_120%,rgb(42_60_128/0.7),transparent_70%)]"
    />
    <GlobeMark className="pointer-events-none absolute top-1/2 -right-48 -z-10 w-[40rem] -translate-y-1/2 text-white/[0.07] sm:-right-28 lg:right-[-4rem]" />
    <div className="wrapper pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Breadcrumbs items={breadcrumbs} />
      {eyebrow && <p className="eyebrow mt-10 text-accent-300">{eyebrow}</p>}
      <h1
        className={cn(
          "max-w-4xl font-serif text-[2.5rem] leading-[1.08] font-medium tracking-tight sm:text-5xl lg:text-[3.75rem]",
          eyebrow ? "mt-4" : "mt-10",
        )}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
      )}
      {children}
    </div>
  </section>
);

export default PageHeader;
