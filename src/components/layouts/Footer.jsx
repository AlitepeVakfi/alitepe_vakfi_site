import { Link } from "react-router-dom";
import { LuArrowUp, LuMail, LuMapPin } from "react-icons/lu";
import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";
import { GlobeMark } from "../ui/Ornaments";
import { mapLinks, navigation, site } from "../../data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/5 bg-brand-950 text-white/65">
      <GlobeMark className="pointer-events-none absolute -right-48 -bottom-72 -z-10 w-[46rem] text-white/[0.05]" />

      <div className="wrapper grid gap-12 pt-16 pb-12 sm:pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Logo className="text-white" />
          <p className="mt-6 max-w-sm leading-relaxed">{site.description}</p>
          <SocialLinks tone="dark" className="mt-8" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">Kurumsal</h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">İletişim</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-white"
                >
                  <LuMail className="mt-0.5 size-5 shrink-0 text-accent-300" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={mapLinks.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <LuMapPin className="mt-0.5 size-5 shrink-0 text-accent-300" aria-hidden="true" />
                  <span>
                    {site.address.lines[0]}
                    <br />
                    {site.address.lines[1]}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrapper flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}. Tüm hakları saklıdır.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex cursor-pointer items-center gap-2 self-start transition-colors hover:text-white sm:self-auto"
          >
            Başa dön
            <LuArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
