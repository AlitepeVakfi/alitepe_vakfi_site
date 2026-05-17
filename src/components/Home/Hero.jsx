import React from "react";
import Button from "../ui/Button";
import { FaArrowDown } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative border-b border-primary/50 h-screen" style={{backgroundImage: "url('https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/sayfa_kapak.webp')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container h-full relative z-10">
        <div className="flex-center h-full text-center">
          <div className="col-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white pb-8 ">
              <span className="inline-block ">Topluma Değer Katmak</span> <br />{" "}
              Geleceğe Umut Olmak
            </h2>
            <p className="sm:text-lg lg:text-xl text-white">
              Ali Tepe Vakfı olarak eğitim, sağlık ve sosyal sorumluluk alanlarında
              topluma katkı sağlamak için çalışıyoruz
            </p>
            <div className="row-center  max-xs:!flex-col gap-4 mt-4">
              <Link to="/etkinlikler">
                <Button
                  size="lg"
                  variant="elevated"
                  className="shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform"
                  colorMode="primary"
                >
                  Etkinliklerimiz
                  <GrPlan />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="elevated"
                  className="shadow-lg shadow-third/30 hover:-translate-y-1 transition-transform"
                  colorMode="third"
                >
                  İletişim
                  <TbUsers />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 col-center gap-6 z-10">
          <span className="text-white text-xl">
            Keşfetmeye başla
          </span>
          <Button
            variant="subtle"
            colorMode="primary"
            size="icon"
            className="animate-bounce duration-1000 "
          >
            <FaArrowDown size={30} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
