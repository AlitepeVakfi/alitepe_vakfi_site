import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  LuArrowLeft,
  LuCalendarDays,
  LuClock,
  LuMapPin,
  LuMaximize2,
  LuMic,
  LuTag,
} from 'react-icons/lu';
import NewsCard from '../../components/news/NewsCard';
import Lightbox from '../../components/ui/Lightbox';
import PageHeader from '../../components/ui/PageHeader';
import Reveal from '../../components/ui/Reveal';
import SectionHeading from '../../components/ui/SectionHeading';
import { getGalleryImages, getNewsBySlug, sortedNews } from '../../data/news';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { formatDate } from '../../libs/utils';
import NotFound from '../NotFound';

// Bu sayıdan fazla fotoğraf varsa önce ilk PREVIEW_COUNT kadarı gösterilir
const COLLAPSE_AFTER = 12;
const PREVIEW_COUNT = 8;

const InfoRow = ({ icon, label, children }) => {
  const Icon = icon;
  return (
    <div className="flex gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{label}</dt>
        <dd className="mt-1 font-medium text-brand-950">{children}</dd>
      </div>
    </div>
  );
};

const NewsArticle = ({ item }) => {
  useDocumentTitle(item.title);

  const images = useMemo(() => getGalleryImages(item), [item]);
  const [failedImages, setFailedImages] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages = images.filter((src) => !failedImages.includes(src));
  const collapsible = galleryImages.length > COLLAPSE_AFTER;
  const visibleImages = collapsible && !showAll ? galleryImages.slice(0, PREVIEW_COUNT) : galleryImages;
  const otherNews = sortedNews.filter((other) => other.slug !== item.slug).slice(0, 3);
  const [lead, ...paragraphs] = item.body;

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Haberler', href: '/haberler' }, { label: item.title }]}
        eyebrow={item.category}
        title={item.title}
      >
        <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-white/75">
          <li className="flex items-center gap-2">
            <LuCalendarDays className="size-4 text-accent-300" aria-hidden="true" />
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </li>
          {item.time && (
            <li className="flex items-center gap-2">
              <LuClock className="size-4 text-accent-300" aria-hidden="true" />
              {item.time}
            </li>
          )}
          {item.location && (
            <li className="flex items-center gap-2">
              <LuMapPin className="size-4 text-accent-300" aria-hidden="true" />
              {item.location}
            </li>
          )}
        </ul>
      </PageHeader>

      <section className="py-14 sm:py-20">
        <div className="wrapper grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <Reveal>
              <img
                src={item.cover}
                alt={item.title}
                fetchPriority="high"
                className="aspect-[16/9] w-full rounded-[1.75rem] bg-brand-100 object-cover shadow-[0_40px_70px_-45px_rgb(15_24_52/0.6)]"
              />
            </Reveal>
            <div className="mt-12 max-w-2xl">
              {lead && <p className="font-serif text-xl leading-relaxed text-brand-950 sm:text-2xl">{lead}</p>}
              <div className="mt-6 space-y-6 text-lg leading-8 text-ink/80">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-line lg:sticky lg:top-28">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Haber Künyesi</h2>
              <dl className="mt-6 space-y-5">
                <InfoRow icon={LuTag} label="Tür">
                  {item.category}
                </InfoRow>
                <InfoRow icon={LuCalendarDays} label="Tarih">
                  {formatDate(item.date)}
                </InfoRow>
                {item.time && (
                  <InfoRow icon={LuClock} label="Saat">
                    {item.time}
                  </InfoRow>
                )}
                {item.location && (
                  <InfoRow icon={LuMapPin} label="Yer">
                    {item.location}
                  </InfoRow>
                )}
                {item.speaker && (
                  <InfoRow icon={LuMic} label="Konuşmacı">
                    {item.speaker}
                  </InfoRow>
                )}
              </dl>
              <div className="mt-8 border-t border-line pt-6">
                <Link to="/haberler" className="link-arrow">
                  <LuArrowLeft className="size-4" />
                  Tüm haberler
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="border-y border-line bg-sand/70 py-16 sm:py-24">
          <div className="wrapper">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="Fotoğraflar" title="Fotoğraf Galerisi" />
              <p className="text-muted">{galleryImages.length} fotoğraf</p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {visibleImages.map((src, index) => (
                <li key={src}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Fotoğraf ${index + 1} – büyüt`}
                    className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-brand-100"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      onError={() => setFailedImages((list) => [...list, src])}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-brand-950/0 transition-colors duration-300 group-hover:bg-brand-950/25" />
                    <span className="absolute right-3 bottom-3 grid size-9 translate-y-1 place-items-center rounded-full bg-white/95 text-brand-900 opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <LuMaximize2 className="size-4" aria-hidden="true" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {collapsible && (
              <div className="mt-10 flex justify-center">
                <button type="button" onClick={() => setShowAll((value) => !value)} className="btn btn-outline">
                  {showAll ? 'Daha az göster' : `Tüm fotoğrafları göster (${galleryImages.length})`}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          title={item.title}
        />
      )}

      {otherNews.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="wrapper">
            <Reveal>
              <SectionHeading eyebrow="Haberler" title="Diğer haberler" />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherNews.map((other, index) => (
                <Reveal key={other.slug} delay={index * 90} className="h-full">
                  <NewsCard item={other} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const EventDetails = () => {
  const { eventId } = useParams();
  const item = getNewsBySlug(eventId);

  if (!item) {
    return (
      <NotFound
        title="Haber bulunamadı"
        description="Aradığınız haber kaldırılmış ya da adresi değişmiş olabilir."
      />
    );
  }

  // key: başka bir habere geçildiğinde galeri durumu sıfırlansın
  return <NewsArticle key={item.slug} item={item} />;
};

export default EventDetails;
