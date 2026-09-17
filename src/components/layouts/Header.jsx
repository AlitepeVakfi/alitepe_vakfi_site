import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuArrowUpRight, LuMail, LuMapPin } from "react-icons/lu";
import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";
import { GlobeMark } from "../ui/Ornaments";
import { isNavActive, lightTopRoutes, navigation, site } from "../../data/site";
import { cn } from "../../libs/utils";

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = !menuOpen && (scrolled || lightTopRoutes.includes(pathname));
  const desktopLinks = navigation.filter((item) => item.href !== "/contact");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500",
          solid
            ? "bg-paper/90 text-brand-950 shadow-[0_1px_0_var(--color-line),0_16px_32px_-28px_rgb(15_24_52/0.4)] backdrop-blur-xl"
            : "text-white",
        )}
      >
        <div
          className={cn(
            "wrapper flex items-center justify-between gap-6 transition-[height] duration-500",
            solid ? "h-[4.5rem]" : "h-20 lg:h-24",
          )}
        >
          <Logo onClick={closeMenu} />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {desktopLinks.map((item) => {
                const active = isNavActive(item, pathname);
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-300",
                        solid
                          ? active
                            ? "text-brand-800"
                            : "text-ink/65 hover:text-brand-800"
                          : active
                            ? "text-white"
                            : "text-white/75 hover:text-white",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent-400 transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={cn("btn hidden py-2.5 sm:inline-flex", solid ? "btn-primary" : "btn-ghost-light")}
            >
              İletişim
              <LuArrowUpRight className="btn-arrow size-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              className={cn(
                "relative grid size-11 cursor-pointer place-items-center rounded-full transition-colors lg:hidden",
                solid ? "bg-brand-50 hover:bg-brand-100" : "bg-white/10 hover:bg-white/20",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300",
                  menuOpen ? "rotate-45" : "-translate-y-[4px]",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300",
                  menuOpen ? "-rotate-45" : "translate-y-[4px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto bg-brand-950 text-white transition-[opacity,visibility] duration-300 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <GlobeMark className="pointer-events-none absolute top-20 -right-40 w-[32rem] text-white/[0.06]" />
        <nav aria-label="Mobil menü" className="wrapper relative flex min-h-full flex-col pt-28 pb-10">
          <ul>
            {navigation.map((item, index) => {
              const active = isNavActive(item, pathname);
              return (
                <li
                  key={item.href}
                  className={cn(
                    "border-b border-white/10 transition-[opacity,translate] duration-500",
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                  style={{ transitionDelay: menuOpen ? `${100 + index * 60}ms` : "0ms" }}
                >
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 font-serif text-[2rem] leading-tight",
                      active ? "text-white" : "text-white/70",
                    )}
                  >
                    {item.label}
                    <LuArrowUpRight
                      aria-hidden="true"
                      className={cn("size-6", active ? "text-accent-300" : "text-white/30")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto space-y-4 pt-12 text-white/65">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <LuMail className="size-5 shrink-0 text-accent-300" aria-hidden="true" />
              {site.email}
            </a>
            <p className="flex gap-3">
              <LuMapPin className="mt-0.5 size-5 shrink-0 text-accent-300" aria-hidden="true" />
              {site.address.lines.join(", ")}
            </p>
            <SocialLinks tone="dark" className="pt-2" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
