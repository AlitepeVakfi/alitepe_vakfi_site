import { FaCalendarDays } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";
import Button from "../ui/Button";
import { GrPlan } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const LastEvents = () => {
  return (
    <div className="container my-12">
      <h6 className="text-center mb-16 text-4xl font-semibold text-gradient-br from-foreground to-foreground/40">
        Etkinlikler
      </h6>
      <div className="col-start gap-12">
        {/* Ali Tepe Anma Programı - Featured / Newest */}
        <div className="mx-auto xs:w-[90%] xls:w-[80%] w-full flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden border border-slate-100">
          <img
            className="w-full md:w-84 lg:w-96 object-cover rounded-lg"
            src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/ali_tepe_anma_kapak.webp"
            alt="Ali Tepe Vefat Yıl Dönümü Anma Programı"
          />
          <div className="bg-white ps-6 md:ps-12 py-8 pe-6 flex-1 flex flex-col justify-center">
            <h6 className="text-2xl font-semibold mb-3 text-gradient-br from-foreground to-foreground/40">
              Ali Tepe Vefat Yıl Dönümü Anma Programı
            </h6>
            <div className="row-center gap-3 mb-3">
              <FaCalendarDays size={20} />
              18.04.2026 • 14:00
            </div>
            <div className="row-center gap-3 mb-3">
              <span className="font-semibold text-primary">
                Ali Tepe Eğitim ve Sağlık Vakfı
              </span>
            </div>
            <p>
              Eğitim ve sağlık alanında büyük hizmetler veren, okullar açan ve öğrencilere burs bağlayan Ali Tepe, vefat yıl dönümünde Kur'an-ı Kerim eşliğinde düzenlenen anma programıyla rahmetle anıldı.
            </p>
            <div className="row-center gap-6 mt-4">
              <Link to="/etkinlik/ali-tepe-anma-programi">
                <Button
                  className=" hover:-translate-y-1 transition-transform"
                  colorMode="primary"
                >
                  Detaylar
                  <BiDetail />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Toplumsal Yaşamda Hoşgörünün Yeri */}
        <div className="mx-auto xs:w-[90%] xls:w-[80%] w-full flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden border border-slate-100">
          <img
            className="w-full md:w-84 lg:w-96 object-cover rounded-lg"
            src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri.webp"
            alt="Toplumsal Yaşamda Hoşgörünün Yeri"
          />
          <div className="bg-white ps-6 md:ps-12 py-8 pe-6 flex-1 flex flex-col justify-center">
            <h6 className="text-2xl font-semibold mb-3 text-gradient-br from-foreground to-foreground/40">
              Toplumsal Yaşamda Hoşgörünün Yeri
            </h6>
            <div className="row-center gap-3 mb-3">
              <FaCalendarDays size={20} />
              01.11.2025 • 15:00
            </div>
            <div className="row-center gap-3 mb-3">
              <span className="font-semibold text-primary">
                Konuşmacı: Prof. Dr. Mustafa Erdem
              </span>
            </div>
            <p>
              Toplumsal Yaşamda Hoşgörünün Yeri konferansında, Prof. Dr. Mustafa Erdem tarafından sunulan çok-kültürlü toplumlarda sosyal cohesion ve barış konuları ele alınmıştır.
            </p>
            <div className="row-center gap-6 mt-4">
              <Link to="/etkinlik/toplumsal-yasamda-hosgorunun-yeri">
                <Button
                  className=" hover:-translate-y-1 transition-transform"
                  colorMode="primary"
                >
                  Detaylar
                  <BiDetail />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link to="/etkinlikler">
        <Button
          size="lg"
          variant="subtle"
          className=" hover:-translate-y-1 transition-transform mt-24 mx-auto"
          colorMode="third"
        >
          Daha fazla
          <GrPlan />
        </Button>
      </Link>
    </div>
  );
};

export default LastEvents;
