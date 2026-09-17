import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import { GlobeMark } from '../components/ui/Ornaments';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound = ({
  title = 'Sayfa bulunamadı',
  description = 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.',
}) => {
  useDocumentTitle(title);

  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-brand-950 text-white">
      <GlobeMark className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[46rem] -translate-x-1/2 -translate-y-1/2 text-white/[0.06]" />
      <div className="wrapper pt-32 pb-20 text-center">
        <p className="font-serif text-8xl leading-none text-accent-300/80 sm:text-9xl">404</p>
        <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-white/70">{description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-light">
            Ana Sayfa
            <LuArrowRight className="btn-arrow size-4" />
          </Link>
          <Link to="/haberler" className="btn btn-ghost-light">
            Haberler
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
