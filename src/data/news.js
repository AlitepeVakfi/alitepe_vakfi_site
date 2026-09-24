import { asset, cdn } from './site'

// Haberler — ana sayfa, haber listesi ve haber detay sayfası bu dosyadan beslenir.
// Sıralama tarihe göre otomatik yapılır; yeni haberi listenin herhangi bir yerine ekleyebilirsiniz.
//
//   slug     → adres çubuğunda görünen kısım (/haber/<slug>), her haberde farklı olmalı
//   date     → YYYY-AA-GG biçiminde (ör. 2026-08-01)
//   summary  → kartlarda görünen kısa özet
//   body     → haber metni; dizideki her eleman bir paragraf, ilki giriş paragrafı olarak büyük yazılır
//   gallery  → fotoğraflar foto_1, foto_2 … adıyla bir klasörde durur
//              folder: klasör adı, count: son fotoğrafın numarası,
//              ext: dosya uzantısı (varsayılan webp), local: true ise public/events altından okunur,
//              exclude: klasörde bulunmayan numaralar

export const news = [
  {
    slug: 'mutevelli-heyeti-donem-planlama-toplantisi',
    title: 'Mütevelli Heyetimiz ve Yönetim Kurulumuz Dönem Planlaması İçin Bir Araya Geldi',
    category: 'Kurumsal',
    date: '2026-09-24',
    location: 'Ali Tepe Eğitim ve Sağlık Vakfı',
    cover: asset('events/mutevelli-heyeti-donem-planlama-toplantisi/foto_1.webp'),
    summary:
      'Vakfımızın mütevelli heyeti ve dernek yönetim kurulu üyeleri, Başkanımız Dr. Reşat Doğru ile bir araya gelerek yeni döneme ilişkin çalışma ve faaliyet planlarını değerlendirdi.',
    body: [
      'Vakfımızın mütevelli heyeti ve dernek yönetim kurulu üyeleri, Başkanımız Dr. Reşat Doğru’nun katılımıyla gerçekleştirilen toplantıda bir araya geldi.',
      'Toplantıda geride kalan dönemin çalışmaları değerlendirilirken, yeni dönemde hayata geçirilmesi planlanan eğitim, sağlık ve sosyal sorumluluk faaliyetleri ele alındı. Vakfımızın topluma sunduğu katkının güçlendirilmesi ve çalışmaların daha geniş kitlelere ulaştırılması amacıyla görüş alışverişinde bulunuldu.',
      'Ortak akıl ve iş birliği anlayışıyla şekillenen toplantı, yeni dönem hedeflerinin ve öncelikli çalışma alanlarının belirlenmesiyle sona erdi.',
    ],
    gallery: { folder: 'mutevelli-heyeti-donem-planlama-toplantisi', count: 7, local: true },
  },
  {
    slug: 'tokatta-bagimlilikla-mucadele-bulusmasi',
    title: 'Tokat’ta Bağımlılıkla Mücadele İçin Ortak İrade',
    category: 'Toplumsal Farkındalık',
    date: '2026-09-22',
    location: 'Tokat Uyuşturucu ve Madde Bağımlılığı ile Mücadele Derneği',
    speaker: 'Dr. Reşat Doğru',
    cover: asset('events/bagimlilikla-mucadele-bulusmasi/foto_1.webp'),
    summary:
      'Sivil toplum kuruluşlarının temsilcileri, uyuşturucu madde ve sanal kumar bağımlılığına karşı ortak çözüm yollarını değerlendirmek üzere Tokat’ta bir araya geldi.',
    body: [
      'Tokat’taki sivil toplum kuruluşlarının temsilcileri, uyuşturucu madde ve sanal kumar bağımlılığıyla mücadelede ortak çözüm yollarını değerlendirmek amacıyla bir araya geldi. Buluşmaya, görev yaptığı dönemde Bağımlılıkla Mücadele Komisyonu Başkanlığı yapan Vakfımız Mütevelli Heyeti Başkanı ve eski Devlet Bakanı Dr. Reşat Doğru da konuşmacı olarak katıldı.',
      'Tokat Uyuşturucu ve Madde Bağımlılığı ile Mücadele Derneğinde gerçekleştirilen programa; akademisyenler, hukukçular, kültür-sanat alanında çalışan sivil toplum temsilcileri ve davetliler iştirak etti.',
      'Programda konuşan Dr. Reşat Doğru, uyuşturucu madde kullanımının aileleri ve toplumları derinden etkileyen ciddi bir halk sağlığı sorunu olduğuna dikkat çekti. Tedavi sürecinde kişinin sosyal çevresinin belirleyici önem taşıdığını vurgulayan Doğru, bağımlılıkla mücadelenin yalnızca bireysel değil, toplumsal bir sorumluluk olduğunu ifade etti.',
      'Dijital çağla birlikte büyüyen sanal kumar tehlikesine de değinen Dr. Doğru; kolay erişilebilirliği nedeniyle hızla yayılan bu bağımlılık türünün finansal kayıplara, psikolojik sorunlara ve sosyal yaşamda ciddi tahribata yol açabildiğini belirtti.',
      'Toplantıda özellikle gençlerin zararlı alışkanlıklardan korunması, toplumsal farkındalığın artırılması ve kurumlar arası iş birliğinin güçlendirilmesi konuları ele alındı. Programın sonunda Dr. Reşat Doğru, “Bağ” ve “Bir Milletin Sessiz Çığlığı” adlı kitaplarını katılımcılar için imzaladı.',
    ],
    gallery: { folder: 'bagimlilikla-mucadele-bulusmasi', count: 3, local: true },
  },
  {
    slug: 'orhan-ziya-diren-cenaze-toreni',
    title: "Mütevelli Heyeti Üyemiz Orhan Ziya Diren'i Kaybettik",
    category: 'Cenaze Töreni',
    date: '2026-08-01',
    time: 'İkindi namazı sonrası',
    location: 'Alipaşa Camii, Tokat',
    cover: cdn('events/orhan_ziya_diren_cenaze_kapak.webp'),
    summary:
      "Vakfımız mütevelli heyeti asil üyesi, DİREN Holding Onursal Yönetim Kurulu Başkanı ve eski Tokat Milletvekili Orhan Ziya Diren'i kaybetmenin derin üzüntüsünü yaşıyoruz. Merhum, Tokat Alipaşa Camii'nde kılınan cenaze namazının ardından Erenler Mezarlığı'ndaki aile kabristanına defnedildi.",
    body: [
      "Vakfımızın mütevelli heyeti asil üyelerinden, DİREN Holding Onursal Yönetim Kurulu Başkanı ve 22. ile 23. Dönem Tokat Milletvekili Orhan Ziya Diren'i kaybetmenin derin üzüntüsü içindeyiz. Merhuma Allah'tan rahmet, ailesine, yakınlarına ve tüm sevenlerine sabır ve başsağlığı diliyoruz.",
      "Ankara'da tedavi gördüğü hastanede vefat eden Orhan Ziya Diren'in naaşı Tokat'a getirildi. Öncelikle DİMES Tokat Fabrikası'nda düzenlenen törenle çalışma arkadaşları ve yakınları tarafından son kez uğurlanan merhum, ardından Tokat Alipaşa Camii'ne getirildi. İkindi namazını müteakip kılınan cenaze namazının ardından Orhan Ziya Diren, Tokat Merkez Erenler Mezarlığı'ndaki aile kabristanında dualarla toprağa verildi.",
      'Cenaze törenine devlet erkânı, iş dünyası temsilcileri, siyasetçiler, vakfımız mütevelli heyeti üyeleri ve çok sayıda vatandaş katılarak merhuma son görevlerini yerine getirdi. Tören boyunca cami avlusuna çok sayıda çelenk gönderildi.',
      'Sanayici ve siyasetçi kimliğiyle Tokat ekonomisine ve Türkiye sanayisine uzun yıllar önemli katkılar sunan, sivil toplum faaliyetleriyle de tanınan Orhan Ziya Diren, vakfımızın mütevelli heyetinde de değerli hizmetler vermiştir. Kendisini saygı, minnet ve rahmetle anıyoruz.',
      'Allah rahmet eylesin. Mekânı cennet, makamı âli olsun.',
    ],
    gallery: { folder: 'orhan_ziya_diren_cenaze_toreni', count: 9 },
  },
  {
    slug: 'hayati-bice-turk-dunyasi-konferansi',
    title: 'Türk Dünyasında Yesevi Hedefleri',
    category: 'Konferans',
    date: '2026-06-06',
    time: '14:00',
    location: 'Ali Tepe Vakfı Konferans Salonu',
    speaker: 'Dr. Hayati Bice',
    cover: asset('events/hayati_bice_konferans/foto_2.jpeg'),
    summary:
      'Araştırmacı yazar Dr. Hayati Bice, Türk dünyasını şekillendiren Yesevi geleneğini ve bu geleneğin Türk milletleri için taşıdığı hedefleri derinlemesine ele aldı.',
    body: [
      "Ali Tepe Vakfı, değerli düşünür ve yazar Dr. Hayati Bice'yi Türk dünyasının geleceğine dair son derece önemli bir konferans için ağırlamaktan büyük onur duydu.",
      '"Türk Dünyasında Yesevi Hedefleri" başlıklı bu konferansta Dr. Bice, Türk milletinin ortak kültürel ve medeni mirasından hareketle gelecek vizyonunu ele aldı. Yüzyıllık birikimin ışığında şekillenen bu hedefler; birlik, dayanışma, eğitim ve kültürel kimliğin güçlendirilmesi ekseninde tartışıldı.',
      "Konferans, Türk dünyasının farklı coğrafyalarındaki bağlarına ve bu bağları daha da derinleştirecek adımlara ilişkin önemli perspektifler sundu. Dr. Bice'nin zengin akademik birikimi ve saha deneyimiyle zenginleşen sunum, katılımcılara ilham verici bir bakış açısı kazandırdı.",
      'Konferans; akademisyenler, araştırmacılar, sivil toplum temsilcileri ve konuya ilgi duyan tüm misafirlerin katılımıyla gerçekleşti. Soru-cevap bölümünde derinleşen tartışmalar, konferansın kalıcı bir iz bırakmasını sağladı.',
      "Ali Tepe Vakfı olarak Dr. Hayati Bice'ye değerli katkıları için teşekkür ediyor, bu tür aydınlatıcı buluşmaları sürdürmeye devam edeceğimizi bildiriyoruz.",
    ],
    gallery: { folder: 'hayati_bice_konferans', count: 8, ext: 'jpeg', local: true },
  },
  {
    slug: 'ali-tepe-anma-programi',
    title: 'Ali Tepe Vefat Yıl Dönümü Anma Programı',
    category: 'Anma Programı',
    date: '2026-04-18',
    time: '14:00',
    location: 'Ali Tepe Eğitim ve Sağlık Vakfı',
    cover: cdn('events/ali_tepe_anma_kapak.webp'),
    summary:
      "Eğitim ve sağlık alanında büyük hizmetler veren, okullar açan ve öğrencilere burs bağlayan Ali Tepe, vefat yıl dönümünde Kur'an-ı Kerim eşliğinde düzenlenen anma programıyla rahmetle anıldı.",
    body: [
      "Ali Tepe Eğitim ve Sağlık Vakfı'nın kurucusu, hayırsever iş insanı merhum Ali Tepe, vefatının yıl dönümünde düzenlenen anma programıyla rahmet ve minnetle anıldı.",
      'Hayatı boyunca eğitime ve sağlığa büyük önem veren, pek çok okul açılmasına öncülük eden, ihtiyaç sahibi öğrencilere burs bağlayan ve topluma sayısız hizmette bulunan Ali Tepe, geride bıraktığı eserlerle gönüllerde yaşamaya devam etmektedir.',
      "Anma programı, Ali Tepe Eğitim ve Sağlık Vakfı'nda gerçekleştirildi. Programa vakıf mütevelli heyeti, sevenleri ve öğrenciler katılım sağladı.",
      'Programda Yasin suresi, Nur suresi, İhlas, Felak ve Nas sureleri ile Fatihalar okunarak merhumun ruhuna hediye edildi, dualar edildi.',
      "Eğitim ve sağlık alanında yaptığı eşsiz hizmetler, açtığı okullar ve binlerce öğrenciye sağladığı desteklerle anılan merhum Ali Tepe'yi bir kez daha sevgi, saygı ve özlemle yâd ediyoruz.",
      'Allah rahmet eylesin. Mekânı cennet, makamı âli olsun.',
    ],
    gallery: { folder: 'ali_tepe_anma_programi', count: 36 },
  },
  {
    slug: 'toplumsal-yasamda-hosgorunun-yeri',
    title: 'Toplumsal Yaşamda Hoşgörünün Yeri',
    category: 'Konferans',
    date: '2025-11-01',
    time: '15:00',
    location: 'Ali Tepe Vakfı Konferans Salonu',
    speaker: 'Prof. Dr. Mustafa Erdem',
    cover: cdn('events/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri.webp'),
    summary:
      'Toplumsal Yaşamda Hoşgörünün Yeri konferansında, Prof. Dr. Mustafa Erdem tarafından sunulan çok kültürlü toplumlarda toplumsal uyum ve barış konuları ele alınmıştır.',
    body: [
      'Toplumsal Yaşamda Hoşgörünün Yeri konferansı, sosyal uyumun sağlanmasında hoşgörünün rolünü incelemektedir.',
      'Prof. Dr. Mustafa Erdem tarafından sunulan bu konferansta, çok kültürlü toplumlarda barış ve istikrarın nasıl sağlanacağı, hoşgörü kültürünün geliştirilmesi ve sosyal dayanışmanın önemi gibi kritik konular tartışılmıştır.',
      'Konferans, akademisyenler, öğrenciler ve sosyal sorumluluk faaliyetleriyle ilgilenen bireyler için bir araya gelme fırsatı sunmuştur.',
    ],
    gallery: { folder: 'toplumsal_yasamda_hosgorunun_yeri_konferans', count: 37, exclude: [5, 6] },
  },
]

export const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date))

export const getNewsBySlug = (slug) => news.find((item) => item.slug === slug)

export const getGalleryImages = ({ gallery }) => {
  if (!gallery) return []
  const { folder, count, ext = 'webp', local = false, exclude = [] } = gallery
  const base = local ? asset(`events/${folder}`) : cdn(`events/${folder}`)
  const images = []
  for (let number = 1; number <= count; number++) {
    if (!exclude.includes(number)) images.push(`${base}/foto_${number}.${ext}`)
  }
  return images
}
