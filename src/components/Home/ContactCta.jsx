import { Link } from "react-router-dom";
import { LuArrowRight, LuMail } from "react-icons/lu";
import Reveal from "../ui/Reveal";
import { GlobeMark, PulseLine } from "../ui/Ornaments";
import { site } from "../../data/site";

const ContactCta = () => (
  <section className="pb-24 sm:pb-32">
    <div className="wrapper">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-brand-800 px-7 py-14 text-white sm:px-14 sm:py-16 lg:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_30rem_at_100%_100%,rgb(0_163_192/0.35),transparent_60%),linear-gradient(135deg,var(--color-brand-800),var(--color-brand-950))]"
        />
        <GlobeMark className="pointer-events-none absolute -top-28 -right-28 -z-10 w-[30rem] text-white/[0.08]" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <PulseLine className="h-6 w-20 text-accent-300" />
            <h2 className="mt-5 font-serif text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
              Bizimle iletişime geçin
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Sorularınız, önerileriniz ve iş birliği talepleriniz için bize yazabilirsiniz. Size
              yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <a href={`mailto:${site.email}`} className="btn btn-light">
              <LuMail className="size-4" aria-hidden="true" />
              E-posta Gönderin
            </a>
            <Link to="/contact" className="btn btn-ghost-light">
              İletişim Bilgileri
              <LuArrowRight className="btn-arrow size-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ContactCta;
