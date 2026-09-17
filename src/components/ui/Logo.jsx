import { Link } from "react-router-dom";
import { site } from "../../data/site";
import { cn } from "../../libs/utils";

const Logo = ({ className, onClick }) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label={`${site.name} – Ana sayfa`}
    className={cn("flex items-center gap-3", className)}
  >
    <img
      src={site.logo}
      alt=""
      width="200"
      height="200"
      className="size-11 shrink-0 rounded-full bg-white p-px shadow-[0_4px_14px_-6px_rgb(15_24_52/0.5)] sm:size-12"
    />
    <span className="flex flex-col">
      <span className="font-serif text-[1.35rem] leading-none font-semibold tracking-tight sm:text-[1.5rem]">
        {site.name}
      </span>
      <span className="mt-1.5 text-[0.6rem] leading-none font-semibold tracking-[0.2em] uppercase opacity-70 sm:text-[0.625rem]">
        Çağdaş Eğitim ve Sağlık Vakfı
      </span>
    </span>
  </Link>
);

export default Logo;
