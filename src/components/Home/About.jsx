import { Link } from "react-router-dom";
import { LuArrowRight, LuShieldCheck } from "react-icons/lu";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { cdn, site } from "../../data/site";
import { cn } from "../../libs/utils";

const About = () => {
  const scholarshipYears = new Date().getFullYear() - site.foundedYear;

  const stats = [
    { value: site.foundedYear, label: "Kuruluş yılımız" },
    { value: "3", label: "Tokat'ta yaptırılan okul" },
    { value: `${scholarshipYears} yıl`, label: "Düzenli öğrenci bursu" },
  ];

  return (
    <section id="hakkimizda" className="scroll-mt-28 pb-24 sm:pb-32">
      <div className="wrapper">
        <Reveal className="relative z-10 -mt-24 grid grid-cols-3 overflow-hidden rounded-3xl bg-white shadow-[0_40px_70px_-40px_rgb(15_24_52/0.45)] ring-1 ring-line sm:-mt-28">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn("px-4 py-5 sm:px-9 sm:py-9", index > 0 && "border-l border-line")}
            >
              <p className="font-serif text-[1.75rem] leading-none font-medium tracking-tight whitespace-nowrap text-brand-800 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug font-medium text-muted sm:mt-3 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-20 grid items-center gap-16 sm:mt-28 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-100">
              <img
                src={cdn("events/ali_tepe_anma_kapak.webp")}
                alt="Vakfımızın salonunda düzenlenen anma programı"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-12 hidden w-[46%] overflow-hidden rounded-2xl border-[6px] border-paper shadow-[0_30px_50px_-30px_rgb(15_24_52/0.6)] sm:block lg:-right-8">
              <img
                src={cdn("events/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri.webp")}
                alt="Vakfımızda düzenlenen konferanstan bir kare"
                loading="lazy"
                className="aspect-[4/3] size-full object-cover"
              />
            </div>
            <img
              src={site.logo}
              alt=""
              width="200"
              height="200"
              className="absolute -top-8 -left-3 size-24 rounded-full bg-paper p-1.5 shadow-[0_20px_40px_-20px_rgb(15_24_52/0.6)] sm:-left-8 sm:size-28"
            />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <SectionHeading eyebrow="Biz Kimiz" title="İnsana yatırım, geleceğe yatırımdır." />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Ali Tepe Vakfı; toplumsal dayanışmayı güçlendirmek, eğitime ve bilime katkı sağlamak,
                gençlerin potansiyellerini ortaya çıkarabilecekleri fırsatlar sunmak amacıyla kurulmuş
                bir sivil toplum kuruluşudur.
              </p>
              <p>
                İmkân eşitsizliklerini azaltmayı, gençlerin nitelikli eğitime ulaşmasını
                kolaylaştırmayı ve sürdürülebilir projelerle toplumun her kesimine fayda sağlamayı
                amaçlıyoruz.
              </p>
            </div>

            <div className="mt-8 flex gap-4 rounded-2xl bg-accent-50 p-5 ring-1 ring-accent-100">
              <LuShieldCheck className="mt-0.5 size-6 shrink-0 text-accent-700" aria-hidden="true" />
              <p className="leading-relaxed text-ink/80">
                Vakfımız kuruluşundan bu yana hiçbir kişi, kurum ya da kuruluştan yardım almamış;
                aksine imkânları ölçüsünde kişilere, eğitim ve sağlık kuruluşlarına destek olmuştur.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/ali-tepe" className="btn btn-primary">
                Kurucumuzu Tanıyın
                <LuArrowRight className="btn-arrow size-4" />
              </Link>
              <Link to="/mutevelli-heyeti" className="btn btn-outline">
                Mütevelli Heyeti
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
