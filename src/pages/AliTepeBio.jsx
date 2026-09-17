import { Breadcrumbs } from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import { GlobeMark } from '../components/ui/Ornaments';
import { cdn } from '../data/site';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { cn } from '../libs/utils';

const facts = [
  { label: 'Doğum', value: '1930, Tokat' },
  { label: 'Vefat', value: '9 Mart 2017' },
  { label: 'Vakfın kuruluşu', value: '1996' },
  { label: 'Meslek', value: 'İş insanı' },
];

const milestones = [
  { year: '1930', text: "Tokat'ta doğdu." },
  {
    year: '1949–1950',
    text: "Makine Kimya Endüstrisi Kurumu'nda çalışmaya başladı; arkadaşlarıyla Mekanik ve Kimya İşçileri Sendikası'nı kurdu.",
  },
  { year: '1996', text: "Ali Tepe Çağdaş Eğitim ve Sağlık Vakfı'nı kurdu." },
  {
    year: '2017',
    text: "Temeli atılacak kız öğrenci yurdu için gerekli desteği sağlamışken 9 Mart 2017'de vefat etti.",
  },
];

const chapters = [
  {
    title: 'Zorluklarla geçen yıllar',
    paragraphs: [
      "Ali Tepe, 1930 yılında Tokat'ta doğdu. İlkokulu Tokat Gazipaşa İlkokulu'nda tamamladı. İlkokul yılları gazete satıcılığı, ayakkabı boyacılığı, çıraklık, bilet satıcılığı, inşaat işçiliği gibi birçok işte çalışarak yetim kardeşlerine bakma görev ve sorumluluğunu üstlenerek geçti.",
      "Ortaöğretimi ise Sivas Sanat Enstitüsünde başlayarak Kastamonu Erkek Sanat Torna Tesviye Bölümünde tamamladı. Hayatın acımasız zorluklarıyla ilk kez kız kardeşinin evlatlık verildiği Tokat'ın Turhal ilçesinin Çivril köyünde yaz tatillerinde tarla, hayvancılık ve çobanlık işlerinde çalışarak karşılaştı.",
    ],
  },
  {
    title: 'Emekle kurulan bir iş hayatı',
    paragraphs: [
      "İş hayatına ortaöğrenimi sırasında yaz tatillerinde İstanbul Mahmutpaşa yokuşunda işportacılıkla başladı. 1949-1950 yıllarında Ankara Makine Kimya Endüstrisi Kurumunda mecburi hizmet dolayısıyla işe başladı. Burada görev yaparken işçi temsilcisi seçildi. Arkadaşlarıyla Mekanik ve Kimya İşçileri Sendikasını kurdu. Aynı zamanda Türk-İş'in kurulmasına katkıda bulundu. Bu arada Bakkaliye, Parfümeri, Tuhafiye, Hediyelik eşya satıcılığı yaparken iş adamlarıyla yolu kesişti. Böylece Kundura ve Otomobil ticaretine başladı.",
      'Özel hayatında geçirdiği zor ve mücadele dolu yaşamı iş hayatında ona önemli tecrübeler kazandırdığı gibi ticari faaliyetlerde rehberlik yapmış olup ışık tutmuştur. İş hayatı boyunca Devletten ne mal aldı, ne de sattı. Zira Devletle iş yapmanın memleket için şart olduğunu bilmekle birlikte, devletle yapılan işlerde bilmeyerek ve istemeyerek tüyü bitmemiş yetim hakkı yeme ihtimali bulunması (Elbette her devlet işinde yetim hakkı yenmesi söz konusu olamaz) korkusu ile devletle iş yapmaktan kaçındı.',
    ],
  },
  {
    title: 'Vakıf ve hizmetleri',
    paragraphs: [
      "Yaşamı boyunca hayal ettiği Ali Tepe Çağdaş Eğitim ve Sağlık Vakfı'nı 1996 yılında kurma mutluluğuna erişti. Vakfın kurulduğu tarihten itibaren hiçbir şahıs ya da kurum ve kuruluştan yardım almamıştır. Aksine vakıf şahıslara, çeşitli eğitim ve sağlık kuruluşlarına imkânlar ölçüsünde yardım ve katkılarda bulunmuştur.",
      "Memleketi olan Tokat'ta ikisi kendi adına diğeri kendi ve kardeşi Osman Tepe adına toplam 3 okul yaptırdı. Ayrıca 1996 yılından itibaren yetim, öksüz ve fakir çocuklara düzenli olarak öğrenci bursu verilmektedir. Ayrıca Tokat'ta yine kendi adına ve temeli 2017 yılında atılacak olan kız öğrenci yurdunun yapımı için gerekli maddi ve manevi desteği sağlamış olmasına rağmen Mart 2017 tarihinde mücadele dolu yaşamı son bulmuş olup Hakk'ın rahmetine kavuşmuş olup maalesef kız öğrenci yurdunu görmek kendine nasip olmamıştır.",
      "Hayatı boyunca ülkesi ve ülke insanı için yaptığı hizmetlerden dolayı birçok ödülle onurlandırıldı. Yaşama veda etmesine rağmen ticarette aktif olarak halen Ankara Büyük Çarşı'da Ayko Gümüşçülük adıyla ticari faaliyeti sürmektedir.",
    ],
  },
  {
    title: 'Bıraktığı miras',
    emphasis: true,
    paragraphs: [
      'Özellikle vakfın kuruluşundan sonra bu dünyadan kimsenin bir şey götüremeyeceği inancıyla çok zor ve meşakkatli geçen hayatında elde ettiği tüm gelirlerinin öldükten sonra vakfa kalması için gereken hukuki işlemleri yerine getirmenin mutluluğu ile yaşadı. Amacı sadece adının anılması değil, helal yoldan ve mücadele sonucu elde ettiği tüm mal varlığının insanlık yararına sonsuza dek hizmet etmesiydi.',
    ],
  },
];

const AliTepeBio = () => {
  useDocumentTitle('Kurucumuz Ali Tepe');

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_36rem_at_90%_0%,rgb(0_163_192/0.18),transparent_60%),radial-gradient(44rem_30rem_at_0%_110%,rgb(42_60_128/0.7),transparent_70%)]"
        />
        <GlobeMark className="pointer-events-none absolute top-24 -left-64 -z-10 w-[44rem] text-white/[0.05]" />

        <div className="wrapper grid items-center gap-14 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ label: 'Kurucumuz' }]} />
            <p className="eyebrow mt-10 text-accent-300">Kurucu Başkan</p>
            <h1 className="mt-4 font-serif text-6xl leading-none font-medium tracking-tight sm:text-7xl lg:text-8xl">
              Ali Tepe
            </h1>
            <p className="mt-5 font-serif text-2xl text-white/60 italic">1930 – 2017</p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              Zorluklarla dolu bir çocukluktan emekle kurulmuş bir iş hayatına; ömrünü ve tüm varlığını
              eğitime, sağlığa ve insanlığın hizmetine adayan bir hayat.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-[19rem] lg:col-span-5 lg:mr-0 lg:max-w-[21rem]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] ring-1 ring-accent-300/40"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-900 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)] ring-1 ring-white/10">
              <img
                src={cdn('ali-tepe-photo.webp')}
                alt="Ali Tepe"
                fetchPriority="high"
                className="size-full object-cover object-[40%_50%] grayscale"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrapper grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-white p-7 ring-1 ring-line">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Kısa Bilgi</h2>
                <dl className="mt-4 divide-y divide-line">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-sm text-muted">{fact.label}</dt>
                      <dd className="text-right font-medium text-brand-950">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl bg-brand-950 p-7 text-white">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                  Hayatından Kesitler
                </h2>
                <ol className="mt-6 space-y-6 border-l border-white/15 pl-6">
                  {milestones.map((milestone) => (
                    <li key={milestone.year} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute top-2 -left-[1.95rem] size-2.5 rounded-full bg-accent-400 ring-4 ring-brand-950"
                      />
                      <p className="font-serif text-xl leading-none text-accent-200">{milestone.year}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{milestone.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8">
            {chapters.map((chapter, index) => (
              <Reveal key={chapter.title} className={cn(index > 0 && 'mt-14 border-t border-line pt-14')}>
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-lg text-accent-600">0{index + 1}</span>
                  <h2 className="font-serif text-3xl font-medium tracking-tight text-brand-950 sm:text-4xl">
                    {chapter.title}
                  </h2>
                </div>
                <div
                  className={cn(
                    'mt-6 space-y-5 font-serif text-[1.2rem] leading-[1.8] text-ink/85',
                    chapter.emphasis && 'text-[1.35rem] text-brand-900 italic',
                  )}
                >
                  {chapter.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className={cn(index === 0 && paragraphIndex === 0 && 'drop-cap')}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal className="mt-16 rounded-3xl bg-white px-8 py-12 text-center ring-1 ring-line sm:px-14">
              <span aria-hidden="true" className="mx-auto block h-px w-16 bg-accent-500" />
              <p className="mt-8 font-serif text-2xl leading-snug text-brand-950 italic sm:text-3xl">
                “Seni özleyeceğiz, ruhun şad olsun sayın başkanım.”
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-muted uppercase">Saygılarımızla</p>
            </Reveal>
          </article>
        </div>
      </section>
    </>
  );
};

export default AliTepeBio;
