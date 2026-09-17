import { LuGraduationCap, LuHeartPulse, LuMic, LuSchool } from "react-icons/lu";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { GlobeMark } from "../ui/Ornaments";

const areas = [
  {
    icon: LuSchool,
    title: "Okul ve Yurt",
    text: "Kurucumuz Ali Tepe, memleketi Tokat'ta üç okul yaptırdı; kız öğrenci yurdunun yapımı için de maddi ve manevi destek sağladı.",
  },
  {
    icon: LuGraduationCap,
    title: "Öğrenci Bursları",
    text: "1996'dan bu yana yetim, öksüz ve ihtiyaç sahibi öğrencilere düzenli olarak burs veriyoruz.",
  },
  {
    icon: LuHeartPulse,
    title: "Sağlık Destekleri",
    text: "Sağlık kuruluşlarına ve ihtiyaç sahiplerine imkânlarımız ölçüsünde yardım ve katkıda bulunuyoruz.",
  },
  {
    icon: LuMic,
    title: "Bilim ve Kültür",
    text: "Konferanslar ve anma programlarıyla bilgiyi, hoşgörüyü ve dayanışma kültürünü yaşatıyoruz.",
  },
];

const FocusAreas = () => (
  <section className="relative isolate overflow-hidden bg-sand py-24 sm:py-32">
    <GlobeMark className="pointer-events-none absolute -top-56 -left-56 -z-10 w-[44rem] text-brand-900/[0.06]" />

    <div className="wrapper">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <SectionHeading eyebrow="Çalışma Alanlarımız" title="Eğitimden sağlığa kalıcı hizmetler" />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-muted">
            Kurucumuz Ali Tepe&apos;nin mirasını okullar, burslar ve sağlık destekleriyle yarınlara
            taşıyoruz.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area, index) => (
          <Reveal as="li" key={area.title} delay={index * 90} className="h-full">
            <article className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-line transition-[box-shadow,translate] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgb(15_24_52/0.4)]">
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white">
                  <area.icon className="size-7" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="font-serif text-lg text-brand-400">0{index + 1}</span>
              </div>
              <h3 className="mt-8 font-serif text-2xl font-medium text-brand-950">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{area.text}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default FocusAreas;
