import { cdn } from './site'

// Mütevelli Heyeti sayfasının verileri.
//   focus → yüzün fotoğraftaki yeri: [soldan %, üstten %]. Yüz yuvarlak çerçevenin ortasına buna göre gelir.
//   zoom  → fotoğrafta yüz küçük kalıyorsa yakınlaştırma oranı (isteğe bağlı, ör. 1.5)

export const founder = {
  name: 'Ali Tepe',
  title: 'Kurucu Başkan',
  profession: 'İş İnsanı',
  years: '1930 – 2017',
  photo: cdn('members/mutevelli/ali-tepe.webp'),
  focus: [50, 30],
  zoom: 1.6,
  memorial:
    'Vakfımızın kurucusu ve başkanı Ali Tepe, 9 Mart 2017 tarihinde vefat etmiştir. Sevgisi yüreğimizde sonsuza dek yaşayacaktır. Mekânı cennet olsun.',
}

export const chairman = {
  name: 'Reşat Doğru',
  title: 'Mütevelli Yönetim Kurulu Başkanı',
  profession: 'Doktor · Eski Bakan',
  photo: cdn('members/mutevelli/resat-dogru.webp'),
  focus: [52, 28],
  zoom: 1.25,
}

export const members = [
  {
    name: 'Ali Kaya',
    title: 'Asil Üye',
    profession: 'Avukat',
    photo: cdn('members/mutevelli/ali-kaya.webp'),
    focus: [47, 42],
  },
  {
    name: 'Prof. Dr. Mustafa Erdem',
    title: 'Asil Üye',
    profession: 'Eski Milletvekili',
    photo: cdn('members/mutevelli/mustafa-erdem.webp'),
    focus: [59, 32],
    zoom: 1.4,
  },
  {
    name: 'Hasan Çalış',
    title: 'Asil Üye',
    profession: 'Doktor · Eski Milletvekili',
    photo: cdn('members/mutevelli/hasan-calis.webp'),
    focus: [36, 19],
    zoom: 2,
  },
  {
    name: 'Yaşar Karaaslan',
    title: 'Asil Üye',
    profession: 'Emekli Yönetici',
    photo: cdn('members/mutevelli/yasar-karaaslan.webp'),
    focus: [49, 38],
  },
  {
    name: 'Orhan Ziya Diren',
    title: 'Asil Üye',
    profession: 'Eski Milletvekili · Ticaret',
    photo: cdn('members/mutevelli/orhan-ziya-diren.webp'),
    focus: [49, 35],
  },
  {
    name: 'Mustafa Baş',
    title: 'Asil Üye',
    profession: 'Başmüfettiş',
    photo: cdn('members/mutevelli/mustafa-bas.webp'),
    focus: [50, 42],
  },
  {
    name: 'Süha Şen',
    title: 'Asil Üye',
    profession: 'Uzman Doktor',
    photo: cdn('members/mutevelli/suha-sen.webp'),
    focus: [46, 16],
    zoom: 1.8,
  },
]
