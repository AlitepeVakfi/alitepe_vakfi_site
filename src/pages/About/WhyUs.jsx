import React from 'react'
import { FaShieldAlt, FaUsers, FaLightbulb, FaGraduationCap, FaHandshake, FaRocket } from 'react-icons/fa'
import { MdSecurity, MdGroup, MdSchool } from 'react-icons/md'
import { GiTargetArrows } from 'react-icons/gi'
import photosData from '../../data/whyUs_photos.json'

const WhyUs = () => {
  const values = [
    {
      id: 1,
      title: "Siber Güvenlik Uzmanlığı",
      description: "Siber güvenlik alanında derinlemesine bilgi ve deneyim sahibi uzman kadromuzla, güncel tehditler ve korunma yöntemlerinde lider olmaya devam ediyoruz.",
      icon: <FaShieldAlt className="text-4xl" />,
      color: "from-blue-500/20 to-cyan-600/20",
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      title: "Eğitim ve Geliştirme",
      description: "Öğrencilerimize ve topluma siber güvenlik bilincini yaygınlaştırmak için sürekli eğitimler, workshoplar ve seminerler düzenliyoruz.",
      icon: <FaGraduationCap className="text-4xl" />,
      color: "from-green-500/20 to-emerald-600/20",
      iconColor: "text-green-400"
    },
    {
      id: 3,
      title: "İnovasyun ve Araştırma",
      description: "Siber güvenlik alanındaki yeni teknolojiler ve yaklaşımları araştırarak, özgün çözümler geliştirmeye odaklanıyoruz.",
      icon: <FaLightbulb className="text-4xl" />,
      color: "from-purple-500/20 to-indigo-600/20",
      iconColor: "text-purple-400"
    },
    {
      id: 4,
      title: "Topluluk ve İşbirliği",
      description: "Sektörle, akademiyle ve diğer topluluklarla güçlü işbirlikleri kurarak, ortak projeler ve etkinlikler gerçekleştiriyoruz.",
      icon: <FaHandshake className="text-4xl" />,
      color: "from-orange-500/20 to-red-600/20",
      iconColor: "text-orange-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Aktif Üye", icon: <FaUsers /> },
    { number: "50+", label: "Gerçekleştirilen Etkinlik", icon: <FaRocket /> },
    { number: "25+", label: "Uzman Eğitmen", icon: <MdSchool /> },
    { number: "10+", label: "Sektör Ortağı", icon: <FaHandshake /> }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-br from-primary to-secondary">
                Biz Kimiz?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Gazi Üniversitesi Siber Güvenlik Topluluğu olarak, siber güvenlik alanında 
              bilgi paylaşımı, eğitim ve araştırma faaliyetleri yürüten dinamik bir topluluk.
            </p>
            
            {/* Hero Image Placeholder */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photosData.heroPhoto.src} 
                  alt={photosData.heroPhoto.alt}
                  className="w-full h-64 md:h-80 object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3ETakım Fotoğrafı%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{photosData.heroPhoto.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <GiTargetArrows className="text-3xl text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient-br from-primary to-primary/70">
                Misyonumuz
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Siber güvenlik alanında nitelikli bireyler yetiştirmek, toplumsal farkındalık yaratmak 
                ve ülkemizin siber savunma kapasitesine katkı sağlamak. Öğrencilerimizi sektörün 
                ihtiyaçlarına uygun şekilde hazırlamak ve akademik-sektör köprüsü olmak.
              </p>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm">
                <img 
                  src={photosData.missionVisionPhoto.src} 
                  alt={photosData.missionVisionPhoto.alt}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 300 250'%3E%3Crect width='300' height='250' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='40%25' font-size='14' fill='%234b5563' text-anchor='middle' dy='.3em'%3EMisyon %26 Vizyon%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='12' fill='%236b7280' text-anchor='middle' dy='.3em'%3EFotoğrafı%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20"></div>
              </div>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center">
                  <FaRocket className="text-3xl text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient-br from-secondary to-secondary/70">
                Vizyonumuz
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Türkiye'nin önde gelen siber güvenlik topluluğu olarak, ulusal ve uluslararası 
                arenada tanınan, yenilikçi projeler üreten ve sektöre nitelikli uzmanlar kazandıran 
                bir topluluk olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-br from-primary to-secondary">
                Değerlerimiz
              </span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Toplululuğumuzu yönlendiren temel değerler ve ilkeler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.id}
                className={`group relative bg-gradient-to-br ${value.color} backdrop-blur-sm border border-foreground/10 rounded-2xl p-8 hover:border-foreground/20 transition-all duration-500 hover:scale-105`}
              >
                <div className={`${value.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-br from-primary to-secondary">
                Rakamlarla Biz
              </span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Başarılarımızı ve büyüklüğümüzü gösteren istatistikler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-2xl text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-br from-primary to-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Photos Gallery */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Başarılarımızdan Kareler
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photosData.achievementPhotos.map((photo, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      const colors = ['%23f59e0b', '%2306b6d4', '%237c3aed', '%23ef4444'];
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='${colors[index]}'/%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='white' text-anchor='middle' dy='.3em'%3E${photo.title}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-br from-primary to-secondary">
                Neler Yapıyoruz?
              </span>
            </h2>
          </div>

          <div className="space-y-16">
            {/* Education and Workshops */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={photosData.activityPhotos.workshop.src} 
                    alt={photosData.activityPhotos.workshop.alt}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%233b82f6' text-anchor='middle' dy='.3em'%3EWorkshop Fotoğrafı%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full flex items-center justify-center">
                  <MdSecurity className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Eğitim ve Workshop</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Siber güvenlik alanında temel ve ileri düzey eğitimler, hands-on workshoplar 
                  ve sertifika programları düzenliyoruz. Penetrasyon testleri, malware analizi, 
                  ağ güvenliği gibi konularda pratik bilgiler sunuyoruz.
                </p>
              </div>
            </div>

            {/* Events and Competitions */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={photosData.activityPhotos.events.src} 
                    alt={photosData.activityPhotos.events.alt}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23dcfce7'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%2316a34a' text-anchor='middle' dy='.3em'%3EEtkinlik Fotoğrafı%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-green-500/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center">
                  <FaUsers className="text-3xl text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Etkinlik ve Yarışmalar</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  CTF yarışmaları, hackathonlar, konferanslar ve sektör buluşmaları organize ediyoruz. 
                  Öğrencilerimizin bilgilerini test etmeleri ve geliştirilmesi için çeşitli platformlar sağlıyoruz.
                </p>
              </div>
            </div>

            {/* Research and Development */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={photosData.activityPhotos.research.src} 
                    alt={photosData.activityPhotos.research.alt}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23f3e8ff'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%237c3aed' text-anchor='middle' dy='.3em'%3EAraştırma Fotoğrafı%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-full flex items-center justify-center">
                  <FaLightbulb className="text-3xl text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Araştırma ve Geliştirme</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Siber güvenlik alanındaki yeni teknolojileri takip ediyor, araştırma projeleri 
                  yürütüyor ve özgün çözümler geliştiriyoruz. Akademik çalışmalara da aktif olarak katkı sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-br from-primary to-secondary">
              Bizimle Birlikte Olun
            </span>
          </h2>
          <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
            Siber güvenlik alanında kendinizi geliştirmek, yeni insanlarla tanışmak ve 
            sektöre katkı sağlamak istiyorsanız, topluluğumuza katılın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
              Üye Ol
            </button>
            <button className="px-8 py-3 border border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-foreground/5 transition-colors duration-300">
              Etkinliklerimiz
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs