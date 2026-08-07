import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarDays, FaMapPin, FaUser, FaMosque, FaBookQuran } from 'react-icons/fa6';
import Modal from '../../components/ui/Modal';
import PictureGalleryModal from '../../components/Home/PictureGalleryModal';

const EventDetails = () => {
  const { eventId } = useParams();
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [galleryViewMode, setGalleryViewMode] = useState('carousel');
  const [showAllImages, setShowAllImages] = useState(false);

  // Event data
  const events = {
    'orhan-ziya-diren-cenaze-toreni': {
      id: 'orhan-ziya-diren-cenaze-toreni',
      title: 'Mütevelli Heyeti Üyemiz Orhan Ziya Diren\'i Kaybettik',
      date: '01.08.2026',
      time: 'İkindi Namazı Sonrası',
      location: 'Alipaşa Camii, Tokat',
      type: 'Cenaze Töreni',
      coverImage: 'https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/orhan_ziya_diren_cenaze_kapak.webp',
      galleryFolder: 'orhan_ziya_diren_cenaze_toreni',
      galleryCount: 9,
      highlight: true,
      isAnma: true,
      description: `Vakfımız mütevelli heyeti asil üyesi, DİREN Holding Onursal Yönetim Kurulu Başkanı ve eski Tokat Milletvekili Orhan Ziya Diren'i kaybetmenin derin üzüntüsünü yaşıyoruz.`,
      descriptionFull: `
Vakfımızın mütevelli heyeti asil üyelerinden, DİREN Holding Onursal Yönetim Kurulu Başkanı ve 22. ile 23. Dönem Tokat Milletvekili Orhan Ziya Diren'i kaybetmenin derin üzüntüsü içindeyiz. Merhuma Allah'tan rahmet, ailesine, yakınlarına ve tüm sevenlerine sabır ve başsağlığı diliyoruz.

Ankara'da tedavi gördüğü hastanede vefat eden Orhan Ziya Diren'in naaşı Tokat'a getirildi. Öncelikle DİMES Tokat Fabrikası'nda düzenlenen törenle çalışma arkadaşları ve yakınları tarafından son kez uğurlanan merhum, ardından Tokat Alipaşa Camii'ne getirildi. İkindi namazını müteakip kılınan cenaze namazının ardından Orhan Ziya Diren, Tokat Merkez Erenler Mezarlığı'ndaki aile kabristanında dualarla toprağa verildi.

Cenaze törenine devlet erkanı, iş dünyası temsilcileri, siyasetçiler, vakfımız mütevelli heyeti üyeleri ve çok sayıda vatandaş katılarak merhuma son görevlerini yerine getirdi. Tören boyunca cami avlusuna çok sayıda çelenk gönderildi.

Sanayici ve siyasetçi kimliğiyle Tokat ekonomisine ve Türkiye sanayisine uzun yıllar önemli katkılar sunan, sivil toplum faaliyetleriyle de tanınan Orhan Ziya Diren, vakfımızın mütevelli heyetinde de değerli hizmetler vermiştir. Kendisini saygı, minnet ve rahmetle anıyoruz.

Allah rahmet eylesin. Mekanı cennet, makamı âli olsun.
      `,
    },
    'ali-tepe-anma-programi': {
      id: 'ali-tepe-anma-programi',
      title: 'Ali Tepe Vefat Yıl Dönümü Anma Programı',
      date: '18.04.2026',
      time: '14:00',
      location: 'Ali Tepe Eğitim ve Sağlık Vakfı',
      type: 'Anma Programı',
      coverImage: '/events/ali_tepe_anma_kapak.jpg',
      galleryFolder: 'ali_tepe_anma_programi',
      galleryCount: 36,
      highlight: true,
      isAnma: true,
      description: `Eğitim ve sağlık alanında büyük hizmetler veren, okullar açan ve öğrencilere burs bağlayan Ali Tepe, vefat yıl dönümünde rahmetle anıldı.`,
      descriptionFull: `
Ali Tepe Eğitim ve Sağlık Vakfı'nın kurucusu, hayırsever iş insanı merhum Ali Tepe, vefatının yıl dönümünde düzenlenen anma programıyla rahmet ve minnetle anıldı.

Hayatı boyunca eğitime ve sağlığa büyük önem veren, pek çok okul açılmasına öncülük eden, ihtiyaç sahibi öğrencilere burs bağlayan ve topluma sayısız hizmette bulunan Ali Tepe, geride bıraktığı eserlerle gönüllerde yaşamaya devam etmektedir.

Anma programı, Ali Tepe Eğitim ve Sağlık Vakfı'nda gerçekleştirildi. Programa vakıf mütevelli heyeti, sevenleri ve öğrenciler katılım sağladı.

Programda Yasin suresi, Nur suresi, İhlas, Felak ve Nas sureleri ile Fatihalar okunarak merhumun ruhuna hediye edildi, dualar edildi.

Eğitim ve sağlık alanında yaptığı eşsiz hizmetler, açtığı okullar ve binlerce öğrenciye sağladığı desteklerle anılan merhum Ali Tepe'yi bir kez daha sevgi, saygı ve özlemle yâd ediyoruz.

Allah rahmet eylesin. Mekanı cennet, makamı âli olsun.
      `,

    },
    'hayati-bice-turk-dunyasi-konferansi': {
      id: 'hayati-bice-turk-dunyasi-konferansi',
      title: 'Türk Dünyasında Yesevi Hedefleri',
      speaker: 'Dr. Hayati Bice',
      date: '06.06.2026',
      time: '14:00',
      location: 'Ali Tepe Vakfı Konferans Salonu',
      type: 'Konferans',
      coverImage: '/events/hayati_bice_konferans/foto_1.jpeg',
      localCover: true,
      galleryFolder: 'hayati_bice_konferans',
      galleryCount: 8,
      galleryExt: 'jpeg',
      localGallery: true,
      highlight: true,
      description: `Dr. Hayati Bice'nin Türk dünyasında Yesevi hedefleri üzerine gerçekleştirdiği değerli konferans.`,
      descriptionFull: `
Ali Tepe Vakfı, değerli düşünür ve yazar Dr. Hayati Bice'yi Türk dünyasının geleceğine dair son derece önemli bir konferans için ağırlamaktan büyük onur duydu.

"Türk Dünyasında Yesevi Hedefleri" başlıklı bu konferansta Dr. Bice, Türk milletinin ortak kültürel ve medeni mirasından hareketle gelecek vizyonunu ele aldı. Yüzyıllık birikimin ışığında şekillenen bu hedefler; birlik, dayanışma, eğitim ve kültürel kimliğin güçlendirilmesi ekseninde tartışıldı.

Konferans, Türk dünyasının farklı coğrafyalarındaki bağlarına ve bu bağları daha da derinleştirecek adımlara ilişkin önemli perspektifler sundu. Dr. Bice'nin zengin akademik birikimi ve saha deneyimiyle zenginleşen sunum, katılımcılara ilham verici bir bakış açısı kazandırdı.

Etkinlik; akademisyenler, araştırmacılar, sivil toplum temsilcileri ve konuya ilgi duyan tüm misafirlerin katılımıyla gerçekleşti. Soru-cevap bölümünde derinleşen tartışmalar, konferansın kalıcı bir iz bırakmasını sağladı.

Ali Tepe Vakfı olarak Dr. Hayati Bice'ye değerli katkıları için teşekkür ediyor, bu tür aydınlatıcı buluşmaları sürdürmeye devam edeceğimizi bildiriyoruz.
      `,
    },
    'toplumsal-yasamda-hosgorunun-yeri': {
      id: 'toplumsal-yasamda-hosgorunun-yeri',
      title: 'Toplumsal Yaşamda Hoşgörünün Yeri',
      speaker: 'Prof. Dr. Mustafa Erdem',
      date: '01.11.2025',
      time: '15:00',
      location: 'Ali Tepe Vakfı Konferans Salonu',
      type: 'Konferans',
      description: `Bu konferansda, Prof. Dr. Mustafa Erdem, modern toplumda hoşgörünün önemi ve sosyal cohesion üzerine detaylı bir sunum yapacaktır.`,
      descriptionFull: `
      Toplumsal Yaşamda Hoşgörünün Yeri konferansı, sosyal uyumun sağlanmasında hoşgörünün rolünü incelemektedir. 
      
      Prof. Dr. Mustafa Erdem tarafından sunulan bu etkinlikte, çok kültürlü toplumlarda barış ve istikrarın nasıl sağlanacağı, 
      hoşgörü kültürünün geliştirilmesi ve sosyal dayanışmanın önemi gibi kritik konular tartışılmıştır.
      
      Etkinlik, akademisyenler, öğrenciler ve sosyal sorumluluk faaliyetleriyle ilgilenen bireyler için bir araya gelme fırsatı sunmuştur.
      `,
      coverImage: '/events/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri.jpg',
      galleryFolder: 'toplumsal_yasamda_hosgorunun_yeri_konferans',
      galleryCount: 37,
      highlight: true
    }
  };

  useEffect(() => {
    const selectedEvent = events[eventId];
    if (selectedEvent) {
      setEvent(selectedEvent);
      loadGalleryImages(selectedEvent.galleryFolder, selectedEvent.galleryCount, selectedEvent.galleryExt || 'webp', selectedEvent.localGallery || false);
    }
  }, [eventId]);

  const loadGalleryImages = (folderName, count, ext = 'webp', local = false) => {
    const base = local
      ? `${import.meta.env.BASE_URL}events`
      : 'https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events';
    const imageArray = [];
    for (let i = 1; i <= count; i++) {
      imageArray.push(`${base}/${folderName}/foto_${i}.${ext}`);
    }
    setGalleryImages(imageArray);
  };

  if (!event) {
    return <div>Etkinlik bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <Modal
        className=" max-h-screen !px-0 bg-transparent backdrop-blur-none border-0"
        open={modal}
        closeModal={() => {
          setModal(false);
          setGalleryViewMode('carousel');
        }}
      >
        <PictureGalleryModal 
          images={galleryImages} 
          startAt={selectedImageIndex}
          viewMode={galleryViewMode}
          onImageClick={(idx) => {
            setSelectedImageIndex(idx);
            setGalleryViewMode('carousel');
          }}
          onClose={() => setModal(false)}
        />
      </Modal>

      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            {event.type}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-primary">
            {event.title}
          </h1>
          <div className="w-24 h-1 bg-primary mb-8"></div>
        </div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Image */}
          <div className="md:col-span-2">
            <img
              src={event.localCover
                ? `${import.meta.env.BASE_URL}${event.coverImage.replace(/^\//, '')}`
                : event.coverImage}
              alt={event.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Event Info Card */}
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 h-fit shadow-lg">
            <div className="space-y-6">
              {event.speaker && (
                <div>
                  <label className="text-sm font-semibold text-primary uppercase">Konuşmacı</label>
                  <div className="flex items-center gap-3 mt-2">
                    <FaUser className="text-primary text-xl" />
                    <p className="text-lg font-semibold text-primary">
                      {event.speaker}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-primary uppercase">Tarih</label>
                <div className="flex items-center gap-3 mt-2">
                  <FaCalendarDays className="text-primary text-xl" />
                  <div>
                    <p className="text-lg font-semibold text-primary">
                      {event.date}
                    </p>
                    <p className="text-sm text-primary">
                      Saat: {event.time}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary uppercase">Mekan</label>
                <div className="flex items-center gap-3 mt-2">
                  <FaMapPin className="text-primary text-xl" />
                  <p className="text-sm" style={{ color: '#2c3e7e' }}>
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Description Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Etkinlik Hakkında
          </h2>
          <div className="prose prose-lg max-w-none text-primary">
            {event.descriptionFull.split('\n').map((paragraph, idx) => (
              paragraph.trim() && (
                <p key={idx} className="mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Etkinlik Fotoğrafları
          </h2>

          {galleryImages.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.slice(0, showAllImages ? galleryImages.length : 8).map((image, displayIdx) => (
                  <div
                    key={displayIdx}
                    className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedImageIndex(displayIdx);
                      setGalleryViewMode('carousel');
                      setModal(true);
                    }}
                  >
                    <img
                      src={image}
                      alt={`Etkinlik foto ${displayIdx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {galleryImages.length > 8 && (
                <button
                  onClick={() => setShowAllImages(!showAllImages)}
                  className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {showAllImages ? `↑ Daha Az (8 Fotoğraf)` : `↓ Tüm Fotoğrafları Gör (${galleryImages.length} Fotoğraf)`}
                </button>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-lg text-gray-500">
                Fotoğraflar yakında eklenecektir.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
