import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Reveal from "../ui/Reveal";
import { GlobeMark } from "../ui/Ornaments";
import { cdn } from "../../data/site";

const Founder = () => (
  <section className="relative isolate overflow-hidden bg-brand-950 py-24 text-white sm:py-32">
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_40rem_at_100%_0%,rgb(0_163_192/0.16),transparent_60%)]"
    />
    <GlobeMark className="pointer-events-none absolute -right-64 -bottom-64 -z-10 w-[50rem] text-white/[0.05]" />

    <div className="wrapper grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
      <Reveal className="lg:col-span-5">
        <figure className="relative mx-auto max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-900 ring-1 ring-white/10">
            <img
              src={cdn("ali-tepe-photo.webp")}
              alt="Ali Tepe"
              loading="lazy"
              className="size-full object-cover object-[40%_50%] grayscale"
            />
          </div>
          <figcaption className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 text-brand-950 shadow-[0_30px_50px_-25px_rgb(0_0_0/0.6)] sm:right-6 sm:left-auto">
            <span className="block font-serif text-2xl leading-none">1930 – 2017</span>
            <span className="mt-2 block text-[0.7rem] font-semibold tracking-[0.18em] text-muted uppercase">
              Kurucu Başkan
            </span>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={120} className="lg:col-span-7">
        <p className="eyebrow text-accent-300">Kurucumuz</p>
        <h2 className="mt-4 font-serif text-5xl font-medium tracking-tight sm:text-6xl">Ali Tepe</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          1930&apos;da Tokat&apos;ta doğdu. Yetim kardeşlerine bakabilmek için gazete satıcılığından
          ayakkabı boyacılığına kadar pek çok işte çalıştı; emekle ve mücadeleyle bir ömür kurdu.
          Hayalini kurduğu vakfı 1996&apos;da hayata geçirdi.
        </p>

        <blockquote className="mt-10 max-w-2xl border-l-2 border-accent-400 pl-6 sm:pl-8">
          <p className="font-serif text-2xl leading-snug text-white italic sm:text-[1.75rem]">
            “Amacı sadece adının anılması değil, helal yoldan ve mücadele sonucu elde ettiği tüm mal
            varlığının insanlık yararına sonsuza dek hizmet etmesiydi.”
          </p>
        </blockquote>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/ali-tepe" className="btn btn-light">
            Hayat Hikâyesi
            <LuArrowRight className="btn-arrow size-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Founder;
