import NewsCard from '../../components/news/NewsCard';
import PageHeader from '../../components/ui/PageHeader';
import Reveal from '../../components/ui/Reveal';
import { sortedNews } from '../../data/news';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const LastEvents = () => {
  useDocumentTitle('Haberler');
  const [featured, ...others] = sortedNews;

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Haberler' }]}
        eyebrow="Vakıftan Haberler"
        title="Haberler"
        description="Vakfımızın düzenlediği konferanslar, anma programları ve kurumsal duyurular."
      />

      <section className="py-16 sm:py-24">
        <div className="wrapper">
          {featured && (
            <Reveal>
              <NewsCard item={featured} variant="wide" />
            </Reveal>
          )}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item, index) => (
              <Reveal key={item.slug} delay={(index % 3) * 90} className="h-full">
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LastEvents;
