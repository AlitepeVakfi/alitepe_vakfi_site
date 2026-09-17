import { useEffect, useState } from 'react'
import {
  LuArrowUpRight,
  LuCheck,
  LuClock,
  LuCopy,
  LuMail,
  LuMapPin,
  LuNavigation,
} from 'react-icons/lu'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { SocialIcon } from '../components/ui/SocialLinks'
import { mapLinks, site, socialLinks } from '../data/site'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { cn } from '../libs/utils'

const CardTitle = ({ icon, children }) => {
  const Icon = icon
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h2 className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">{children}</h2>
    </div>
  )
}

const Contact = () => {
  useDocumentTitle('İletişim')
  const [copied, setCopied] = useState(false)
  const today = new Date().getDay()

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${site.fullName}, ${site.address.lines.join(', ')}`)
      setCopied(true)
    } catch {
      // Pano erişimi yoksa (eski tarayıcı, izin yok) sessizce geç
    }
  }

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'İletişim' }]}
        eyebrow="Bize Ulaşın"
        title="İletişim"
        description="Ali Tepe Vakfı ile iletişime geçin, sorularınızı sorun veya bizimle iş birliği yapın. Size yardımcı olmaktan mutluluk duyarız."
      />

      <section className="py-16 sm:py-24">
        <div className="wrapper grid gap-5 lg:grid-cols-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal>
              <a
                href={`mailto:${site.email}`}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-brand-800 p-6 text-white sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(30rem_20rem_at_100%_100%,rgb(0_163_192/0.35),transparent_60%),linear-gradient(135deg,var(--color-brand-800),var(--color-brand-950))]"
                />
                <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-accent-200">
                  <LuMail className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-8 text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">E-posta</h2>
                <p className="mt-2 font-serif text-[1.3rem] leading-tight [overflow-wrap:anywhere] sm:text-[1.75rem]">{site.email}</p>
                <p className="mt-3 text-white/60">7/24 mesaj gönderebilirsiniz.</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-200">
                  E-posta gönderin
                  <LuArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
                <CardTitle icon={LuMapPin}>Adres</CardTitle>
                <address className="mt-6 font-serif text-[1.05rem] leading-snug text-brand-950 not-italic sm:text-xl">
                  {site.fullName}
                  <br />
                  {site.address.lines[0]}
                  <br />
                  {site.address.lines[1]}
                </address>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  <a
                    href={mapLinks.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 py-2.5 text-sm sm:px-5"
                  >
                    <LuNavigation className="size-4" aria-hidden="true" />
                    Yol tarifi al
                  </a>
                  <button type="button" onClick={copyAddress} className="btn btn-outline px-4 py-2.5 text-sm sm:px-5">
                    {copied ? (
                      <LuCheck className="size-4 text-accent-600" aria-hidden="true" />
                    ) : (
                      <LuCopy className="size-4" aria-hidden="true" />
                    )}
                    <span aria-live="polite">{copied ? 'Kopyalandı' : 'Adresi kopyala'}</span>
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
                <CardTitle icon={LuClock}>Çalışma Saatleri</CardTitle>
                <dl className="mt-5 divide-y divide-line">
                  {site.hours.map((row) => {
                    const isToday = row.days.includes(today)
                    return (
                      <div key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                        <dt className="flex items-center gap-2 whitespace-nowrap text-ink/80">
                          {row.label}
                          {isToday && (
                            <span className="rounded-full bg-accent-100 px-2 py-0.5 text-[0.7rem] font-semibold text-accent-800">
                              Bugün
                            </span>
                          )}
                        </dt>
                        <dd
                          className={cn(
                            'font-medium whitespace-nowrap tabular-nums',
                            row.time === 'Kapalı' ? 'text-muted' : 'text-brand-900',
                          )}
                        >
                          {row.time}
                        </dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
                <h2 className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Sosyal Medya</h2>
                <p className="mt-2 text-ink/70">Güncel paylaşımlarımız için bizi takip edin.</p>
                <ul className="mt-5 space-y-2">
                  {socialLinks.map((account) => (
                    <li key={account.href}>
                      <a
                        href={account.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 rounded-2xl px-4 py-3 ring-1 ring-line transition-colors hover:bg-brand-50 hover:ring-brand-200"
                      >
                        <span className="flex items-center gap-3 font-medium text-brand-950">
                          <SocialIcon name={account.icon} className="size-4 text-brand-700" />
                          {account.label}
                        </span>
                        <span className="text-sm text-muted">{account.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="relative h-[26rem] overflow-hidden rounded-3xl bg-brand-100 ring-1 ring-line sm:h-[32rem] lg:sticky lg:top-28 lg:h-[calc(100svh-9rem)] lg:max-h-[48rem]">
              <iframe
                title={`${site.name} konumu`}
                src={mapLinks.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
