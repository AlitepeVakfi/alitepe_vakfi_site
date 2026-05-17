import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      text: "Ali Tepe",
      href: "/ali-tepe",
    },
    {
      text: "Mütevelli Heyeti",
      href: "/mutevelli-heyeti",
    },
    {
      text: "İletişim",
      href: "/contact",
    },
  ];

  return (
    <footer className="py-6 px-4" style={{ backgroundColor: '#2a3c7e' }}>
      <div className="container">
        <div className=" flex flex-col sm:flex-row sm:justify-between ">
          <div className="sm:w-[40%] lg:w-[45%]">
            <div className="row-center gap-3 font-mono text-lg font-semibold">
              <img
                src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/logo-removebg-preview.webp"
                alt="Logo"
                className="w-12 h-12"
              />
              <span className="cursor-pointer" style={{ color: '#dee3df' }}>
                Ali Tepe Vakfı
              </span>
            </div>
            <p className="mt-6 text-sm lg:text-base" style={{ color: '#dee3df' }}>
              Eğitimden sağlığa, sosyal sorumluluktan çevreye uzanan projelerle daha adil ve umut dolu bir gelecek için çalışıyoruz.
            </p>
          </div>

          <div className="flex flex-1 max-sm:mt-7">
            <div className="inline-flex flex-col sm:ms-auto">
              <h6 className="font-semibold text-lg mb-3" style={{ color: '#dee3df' }}>Adres</h6>
              <div className="italic" style={{ color: '#dee3df' }}>Mithat Paşa Caddesi No: 47 Daire: 3, Kızılay / Çankaya, 06400 Ankara</div>

              <h6 className="font-semibold text-lg mt-3" style={{ color: '#dee3df' }}>İletişim</h6>
              <div className="row-center gap-3 my-4">
                <a href="https://www.facebook.com/share/1CZJ1c2jxJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="rounded-full inset-shadow-sm p-3 border hover:bg-white/10 transition-colors" style={{ borderColor: '#dee3df', color: '#dee3df' }}>
                  <FaFacebook size={20} />
                </a>
                <a href="https://x.com/alitepevakfi?s=21" target="_blank" rel="noopener noreferrer" className="rounded-full inset-shadow-sm p-3 border hover:bg-white/10 transition-colors" style={{ borderColor: '#dee3df', color: '#dee3df' }}>
                  <FaXTwitter size={20} />
                </a>
                <a href="https://www.instagram.com/alitepevakfi?igsh=anZ3aWUyN2puYW9r&utm_source=qr" target="_blank" rel="noopener noreferrer" className="rounded-full inset-shadow-sm p-3 border hover:bg-white/10 transition-colors" style={{ borderColor: '#dee3df', color: '#dee3df' }}>
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm italic border-t pt-4" style={{ borderColor: '#dee3df', color: '#dee3df' }}>
          © 2025 Ali Tepe Vakfı – Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
