import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { IoInformationCircle } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import Hamburger from "hamburger-react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const { pathname } = useLocation();

  const items = [
    { text: "Ana Sayfa", href: "/" },
    { text: "Ali Tepe Özgeçmiş", href: "/ali-tepe" },
    { text: "Mütevelli Heyeti", href: "/mutevelli-heyeti" },
    { text: "Etkinlikler", href: "/etkinlikler" },
    { text: "İletişim", href: "/contact" },
  ];

  useScrollPosition((scrollY) => {
    if (scrollY > 700) {
      if (!showNav) {
        setAnimate(true);
        setShowNav(true);
      }
    } else {
      if (showNav) {
        setAnimate(false);
        const timeout = setTimeout(() => {
          setShowNav(false);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, pathname !== "/");

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenuItems = [
    { key: "home", text: "Ana Sayfa", href: "/" },
    { key: "bio", text: "Ali Tepe Özgeçmiş", href: "/ali-tepe" },
    { key: "board", text: "Mütevelli Heyeti", href: "/mutevelli-heyeti" },
    { key: "events", text: "Etkinlikler", href: "/etkinlikler" },
    { key: "contact", text: "İletişim", href: "/contact" },
  ];

  const handleToggleSubMenu = (key) => {
    setOpenSubMenu(openSubMenu === key ? null : key);
  };

  return (
    <header
      style={{ backgroundColor: '#2a3c7e' }}
      className={`${
        pathname !== "/" || showNav
          ? `${
              !isOpen && (animate ? "animate-nav-animate" : "animate-nav-exit")
            } fixed border-b border-background/20`
          : `${isOpen ? "max-md:fixed" : "absolute"} ${
              isOpen &&
              "max-md:border-b max-md:border-background/20"
            }`
      } ${
        pathname !== "/" && "!animate-none"
      } top-0 left-0 w-full z-[999] transition-all ${
        isOpen ? "max-md:h-screen" : "max-md:h-auto"
      } `}
    >
      <div
        className={`container flex-between py-3`}
      >
        <Link to="/" className="row-center gap-3 font-mono text-xl font-semibold">
          <img
            src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/logo-removebg-preview.webp"
            alt="Logo"
            className="size-10"
          />
          <span 
            className="cursor-pointer"
            style={{ color: '#dee3df' }}
          >
            Ali Tepe Vakfı
          </span>
        </Link>

        <nav>
          <div className="md:hidden">
            <Hamburger 
              toggled={isOpen} 
              toggle={setOpen} 
              color='#dee3df'
            />
          </div>
          <ul className="hidden md:flex items-center gap-6 font-semibold text-sm">
            {items.map((item, index) => (
              <li
                className={`after:content-[''] relative after:absolute after:left-1/2 after:-bottom-1 ${
                  !item.isDropdown && " hover:after:w-full hover:after:left-0"
                } after:h-[1.5px] after:transition-all after:duration-500 after:w-0 after:bg-background`}
                style={{ color: '#dee3df' }}
                key={index}
              >
                {item.isDropdown ? (
                  <Dropdown
                    listClassname="!translate-y-1"
                    isHoverTrigger
                    trigger={
                      <div className="row-center gap-3">
                        {item.text}
                        <IoIosArrowUp className="dropdown-rotate-arrow-icon" />
                      </div>
                    }
                    listItems={item.dropdownLinks}
                  />
                ) : (
                  <Link to={item.href} style={{ color: '#dee3df' }}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden border-t max-h-[calc(100vh-113px)] overflow-y-auto border-background/20 p-6">
          <ul className="flex flex-col gap-4 font-semibold" style={{ color: '#dee3df' }}>
            {toggleMenuItems.map((item) => (
              <li key={item.key} className="text-lg">
                {item.isSubMenu ? (
                  <>
                    <div
                      onClick={() => handleToggleSubMenu(item.key)}
                      className="flex-between w-full "
                      style={{ color: '#dee3df' }}
                    >
                      <span>{item.text}</span>
                      <IoIosArrowUp
                        className={`transition-transform duration-300 ${
                          openSubMenu === item.key ? "rotate-0" : "rotate-180"
                        }`}
                      />
                    </div>
                    <ul
                      className={`ml-4 mt-2 col-start gap-2 overflow-hidden transition-all duration-300 ${
                        openSubMenu === item.key ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.subMenuItems?.map((sub) => (
                        <li key={sub.key}>
                          <Link
                            to={sub.href}
                            className="row-center gap-2 text-base py-1"
                            style={{ color: '#dee3df' }}
                          >
                            {sub.icon}
                            {sub.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.href} style={{ color: '#dee3df' }}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
