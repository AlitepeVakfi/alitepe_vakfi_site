import React, { useState } from 'react';
import { FaCalendarDays } from "react-icons/fa6";
import Button from "../../components/ui/Button";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const LastEvents = () => {
  const events = [
    {
      id: 'hayati-bice-turk-dunyasi-konferansi',
      title: 'Türk Dünyasında Yesevi Hedefleri',
      date: '06.06.2026',
      time: '14:00',
      speaker: 'Dr. Hayati Bice',
      type: 'Konferans',
      description: 'Dr. Hayati Bice\'nin Türk dünyasının ortak kültürel mirasından hareketle gelecek vizyonunu ele aldığı, birlik, dayanışma ve kültürel kimliğin güçlendirilmesi ekseninde şekillenen değerli konferans.',
      image: '/events/hayati_bice_konferans/foto_1.jpeg',
      galleryFolder: 'hayati_bice_konferans'
    },
    {
      id: 'ali-tepe-anma-programi',
      title: 'Ali Tepe Vefat Yıl Dönümü Anma Programı',
      date: '18.04.2026',
      time: '14:00',
      type: 'Anma Programı',
      description: 'Eğitim ve sağlık alanında büyük hizmetler veren, okullar açan ve öğrencilere burs bağlayan Ali Tepe, vefat yıl dönümünde Kur\'an-ı Kerim eşliğinde düzenlenen anma programıyla rahmetle anıldı.',
      image: 'https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/ali_tepe_anma_kapak.webp',
      galleryFolder: 'ali_tepe_anma_programi'
    },
    {
      id: 'toplumsal-yasamda-hosgorunun-yeri',
      title: 'Toplumsal Yaşamda Hoşgörünün Yeri',
      date: '01.11.2025',
      time: '15:00',
      speaker: 'Prof. Dr. Mustafa Erdem',
      description: 'Toplumsal Yaşamda Hoşgörünün Yeri konferansında, Prof. Dr. Mustafa Erdem tarafından sunulan çok-kültürlü toplumlarda sosyal cohesion ve barış konuları ele alınmıştır.',
      image: 'https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri.webp',
      galleryFolder: 'toplumsal_yasamda_hosgorunun_yeri_konferans'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container my-12">
        <h6 className="text-center mb-16 text-4xl font-semibold text-gradient-br from-foreground to-foreground/40">
          Etkinlikler
        </h6>

        <div className="col-start gap-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`mx-auto xs:w-[90%] xls:w-[80%] w-full flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <img
                className="w-full md:w-84 lg:w-96 object-cover rounded-lg"
                src={event.image}
                alt={event.title}
              />
              <div className="bg-white ps-6 md:ps-12 py-6 pe-6 inset-shadow-sm inset-shadow-foreground/5">
                <h6 className="text-2xl font-semibold mb-3 text-gradient-br from-foreground to-foreground/40">
                  {event.title}
                </h6>
                <div className="row-center gap-3 mb-3">
                  <FaCalendarDays size={20} />
                  {event.date} • {event.time}
                </div>
                <div className="row-center gap-3 mb-3">
                  <span className="font-semibold text-primary">
                    {event.speaker ? `Konuşmacı: ${event.speaker}` : event.type}
                  </span>
                </div>
                <p>
                  {event.description}
                </p>
                <div className="row-center gap-6 mt-4">
                  <Link to={`/etkinlik/${event.id}`}>
                    <Button
                      className=" hover:-translate-y-1 transition-transform"
                      colorMode="primary"
                    >
                      Detaylar
                      <BiDetail />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastEvents;