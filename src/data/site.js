// Site genelinde kullanılan kurumsal bilgiler. E-posta, adres, çalışma saatleri,
// sosyal medya hesapları ya da menü değişecekse yalnızca bu dosyayı düzenlemek yeterli.

// Fotoğraflar ayrı bir GitHub reposunda (AlitepeVakfi/cdn) tutuluyor.
export const CDN_URL = 'https://raw.githubusercontent.com/AlitepeVakfi/cdn/main'
export const cdn = (path) => `${CDN_URL}/${path}`

// public/ klasöründeki dosyalar için
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const site = {
  name: 'Ali Tepe Vakfı',
  fullName: 'Ali Tepe Çağdaş Eğitim ve Sağlık Vakfı',
  foundedYear: 1996,
  description:
    'Eğitimden sağlığa, sosyal sorumluluktan çevreye uzanan projelerle daha adil ve umut dolu bir gelecek için çalışıyoruz.',
  email: 'iletisim@alitepevakfi.org.tr',
  address: {
    lines: ['Mithat Paşa Caddesi No: 47 Daire: 3', 'Kızılay / Çankaya, 06400 Ankara'],
    mapQuery: 'Mithat Paşa Caddesi No:47, Kızılay, Çankaya, Ankara',
  },
  // days: JavaScript gün numaraları (0 = Pazar, 1 = Pazartesi … 6 = Cumartesi)
  hours: [
    { label: 'Pazartesi – Cuma', days: [1, 2, 3, 4, 5], time: '09:00 – 18:00' },
    { label: 'Cumartesi', days: [6], time: '09:00 – 14:00' },
    { label: 'Pazar', days: [0], time: 'Kapalı' },
  ],
  logo: asset('logo.webp'),
}

export const mapLinks = {
  view: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapQuery)}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.mapQuery)}`,
  embed: `https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&z=16&output=embed`,
}

// icon: components/ui/SocialLinks.jsx içindeki simge adı
export const socialLinks = [
  { label: 'Instagram', handle: '@alitepevakfi', href: 'https://www.instagram.com/alitepevakfi/', icon: 'instagram' },
  { label: 'X (Twitter)', handle: '@alitepevakfi', href: 'https://x.com/alitepevakfi', icon: 'x' },
  { label: 'Facebook', handle: 'Ali Tepe Vakfı', href: 'https://www.facebook.com/share/1CZJ1c2jxJ/', icon: 'facebook' },
]

// activePaths: bu adreslerle başlayan sayfalarda da menü öğesi seçili görünür
export const navigation = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Kurucumuz', href: '/ali-tepe' },
  { label: 'Mütevelli Heyeti', href: '/mutevelli-heyeti' },
  { label: 'Haberler', href: '/haberler', activePaths: ['/haber/'] },
  { label: 'İletişim', href: '/contact' },
]

// Üst kısmı koyu zeminle başlamayan sayfalar: menü bu sayfalarda baştan dolu (açık renk) görünür
export const lightTopRoutes = ['/faaliyetlerimiz']

export const isNavActive = (item, pathname) =>
  item.href === '/'
    ? pathname === '/'
    : [item.href, ...(item.activePaths ?? [])].some((path) => pathname.startsWith(path))
