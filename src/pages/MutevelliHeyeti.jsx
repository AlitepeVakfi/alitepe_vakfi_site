import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Portrait from '../components/ui/Portrait';
import SectionHeading from '../components/ui/SectionHeading';
import { GlobeMark } from '../components/ui/Ornaments';
import { chairman, founder, members } from '../data/board';
import useDocumentTitle from '../hooks/useDocumentTitle';

const MutevelliHeyeti = () => {
  useDocumentTitle('Mütevelli Heyeti');

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Mütevelli Heyeti' }]}
        eyebrow="Kurumsal"
        title="Mütevelli Heyeti"
        description="Ali Tepe Vakfı'nı yöneten ve yol gösteren değerli mütevelli heyeti üyelerimiz."
      />

      <section className="py-16 sm:py-24">
        <div className="wrapper space-y-24">
          <Reveal>
            <article className="relative isolate grid items-center gap-8 overflow-hidden rounded-[2rem] bg-white p-8 text-center ring-1 ring-line sm:grid-cols-[auto_1fr] sm:gap-12 sm:p-12 sm:text-left">
              <GlobeMark className="pointer-events-none absolute -right-28 -bottom-40 -z-10 w-[28rem] text-brand-900/[0.05]" />
              <Portrait
                src={founder.photo}
                alt={founder.name}
                focus={founder.focus}
                zoom={founder.zoom}
                className="mx-auto size-44 ring-8 ring-paper sm:size-52"
              />
              <div>
                <p className="eyebrow text-accent-700">{founder.title}</p>
                <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-brand-950 sm:text-5xl">
                  {founder.name}
                </h2>
                <p className="mt-2 text-muted">
                  {founder.profession} · {founder.years}
                </p>
                <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-ink/80 italic">
                  {founder.memorial}
                </p>
                <Link to="/ali-tepe" className="link-arrow mt-7">
                  Hayat hikâyesini okuyun
                  <LuArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Yönetim"
                title="Heyet Başkanımız"
                description="Mütevelli heyeti, vakfın amaçları doğrultusunda çalışmalarına yön veren ve faaliyetlerini gözeten kuruldur."
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <article className="relative isolate flex flex-col items-center gap-7 overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-center text-white sm:flex-row sm:p-10 sm:text-left">
                <GlobeMark className="pointer-events-none absolute -top-24 -right-24 -z-10 w-80 text-white/[0.06]" />
                <Portrait
                  src={chairman.photo}
                  alt={chairman.name}
                  focus={chairman.focus}
                  zoom={chairman.zoom}
                  className="size-36 ring-4 ring-white/10"
                />
                <div>
                  <span className="inline-flex rounded-full bg-accent-400/15 px-3 py-1 text-xs font-semibold text-accent-200">
                    {chairman.title}
                  </span>
                  <h3 className="mt-4 font-serif text-4xl font-medium tracking-tight">{chairman.name}</h3>
                  <p className="mt-2 text-white/65">{chairman.profession}</p>
                </div>
              </article>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <SectionHeading eyebrow="Asil Üyeler" title="Heyet Üyelerimiz" />
            </Reveal>
            <ul className="mt-12 flex flex-wrap justify-center gap-5">
              {members.map((member, index) => (
                <Reveal
                  as="li"
                  key={member.name}
                  delay={(index % 4) * 80}
                  className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
                >
                  <article className="group flex h-full flex-col items-center rounded-3xl bg-white px-6 pt-9 pb-8 text-center ring-1 ring-line transition-[box-shadow,translate] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgb(15_24_52/0.4)]">
                    <Portrait
                      src={member.photo}
                      alt={member.name}
                      focus={member.focus}
                      zoom={member.zoom}
                      className="size-28 ring-4 ring-paper outline outline-line"
                    />
                    <h3 className="mt-6 font-serif text-xl font-medium text-brand-950">{member.name}</h3>
                    <p className="mt-1.5 text-sm text-muted">{member.profession}</p>
                    <span className="mt-5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {member.title}
                    </span>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MutevelliHeyeti;
