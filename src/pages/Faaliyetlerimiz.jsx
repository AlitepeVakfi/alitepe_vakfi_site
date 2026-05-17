import React from 'react';
import { FaSchool, FaHandsHelping, FaGraduationCap, FaHeart } from 'react-icons/fa';

const Faaliyetlerimiz = () => {
  // School Opening Projects
  const schools = [
    {
      id: 1,
      name: "Ali Tepe İlköğretim Okulu",
      location: "Tokat",
      year: "2005",
      students: "500+",
      description: "Modern eğitim altyapısıyla donatılmış tam donanımlı ilköğretim okulu",
      image: "/schools/ilkogretim-okulu.jpg"
    },
    {
      id: 2,
      name: "Ali Tepe Anadolu Lisesi",
      location: "Ankara",
      year: "2010",
      students: "750+",
      description: "Akademik başarıya odaklı, teknoloji destekli lise eğitimi",
      image: "/schools/anadolu-lisesi.jpg"
    },
    {
      id: 3,
      name: "Ali Tepe Meslek Yüksekokulu",
      location: "İstanbul",
      year: "2015",
      students: "1000+",
      description: "Mesleki eğitim ve kariyer geliştirme programları sunan yüksekokul",
      image: "/schools/meslek-yuksekokulu.jpg"
    }
  ];

  // Charity Activities
  const charityActivities = [
    {
      id: 1,
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: "Eğitim Bursu Programı",
      description: "Maddi imkanları yetersiz başarılı öğrencilere tam burs desteği",
      impact: "100+ öğrenci/yıl"
    },
    {
      id: 2,
      icon: <FaHandsHelping className="w-12 h-12" />,
      title: "Gıda ve Giyim Yardımı",
      description: "İhtiyaç sahibi ailelere düzenli gıda kolisi ve kıyafet desteği",
      impact: "1000+ aile/yıl"
    },
    {
      id: 3,
      icon: <FaHeart className="w-12 h-12" />,
      title: "Sağlık Yardımları",
      description: "Medikal tedavi masrafları ve ilaç desteği programları",
      impact: "500+ hasta/yıl"
    },
    {
      id: 4,
      icon: <FaSchool className="w-12 h-12" />,
      title: "Eğitim Materyali Desteği",
      description: "Öğrencilere kitap, defter ve kırtasiye malzemesi yardımı",
      impact: "2000+ öğrenci/yıl"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
            Faaliyetlerimiz
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2c3e7e' }}>
            Ali Tepe Vakfı olarak topluma değer katmak için sürdürdüğümüz çalışmalar
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg leading-relaxed" style={{ color: '#2c3e7e' }}>
            1996 yılından bu yana eğitim ve sosyal dayanışma alanlarında topluma hizmet eden vakfımız, 
            okul açılışları ve düzenli hayır faaliyetleriyle binlerce insanın hayatına dokunmuştur. 
            Ali Tepe'nin "Eğitim gelecektir" vizyonuyla hareket ederek, yeni nesillere umut olmaya devam ediyoruz.
          </p>
        </div>

        {/* Schools Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#2c3e7e' }}>
            Okul Açılışları
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {schools.map((school) => (
              <div 
                key={school.id}
                className="bg-white border-2 border-primary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={school.image} 
                    alt={school.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#2c3e7e' }}>
                    {school.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-lg font-semibold" style={{ color: '#2c3e7e' }}>
                      📍 {school.location}
                    </p>
                    <p className="text-base" style={{ color: '#2c3e7e' }}>
                      📅 Açılış: {school.year}
                    </p>
                    <p className="text-base font-semibold text-primary">
                      👨‍🎓 {school.students} Öğrenci
                    </p>
                  </div>
                  <p className="text-base" style={{ color: '#2c3e7e' }}>
                    {school.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2c3e7e' }}>
            Rakamlarla Faaliyetlerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">28</div>
              <div className="font-medium" style={{ color: '#2c3e7e' }}>Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3</div>
              <div className="font-medium" style={{ color: '#2c3e7e' }}>Açılan Okul</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,250+</div>
              <div className="font-medium" style={{ color: '#2c3e7e' }}>Aktif Öğrenci</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3,500+</div>
              <div className="font-medium" style={{ color: '#2c3e7e' }}>Yardım Alan Aile</div>
            </div>
          </div>
        </div>

        {/* Additional Programs Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2c3e7e' }}>
            Diğer Programlarımız
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📚</span>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#2c3e7e' }}>
                  Kütüphane Projeleri
                </h3>
                <p style={{ color: '#2c3e7e' }}>
                  Okullara ve köy odalarına kütüphane kurulumu ve kitap bağışları
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#2c3e7e' }}>
                  Mezuniyet Sonrası Destek
                </h3>
                <p style={{ color: '#2c3e7e' }}>
                  Üniversite sınavlarına hazırlık ve kariyer danışmanlığı
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🏥</span>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#2c3e7e' }}>
                  Tedavi Masrafları Desteği
                </h3>
                <p style={{ color: '#2c3e7e' }}>
                  Ağır hastalıklar için tedavi masrafı ve ilaç yardımı
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🏠</span>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#2c3e7e' }}>
                  Barınma ve Yakacak Yardımı
                </h3>
                <p style={{ color: '#2c3e7e' }}>
                  Kış aylarında ihtiyaç sahibi ailelere kömür ve yakacak desteği
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white border-l-4 border-primary rounded-xl p-8 shadow-lg">
            <p className="text-2xl italic mb-4" style={{ color: '#2c3e7e' }}>
              "Eğitim gelecektir. Bir çocuğa eğitim vermek, bir nesle umut vermektir."
            </p>
            <p className="font-semibold text-lg" style={{ color: '#2c3e7e' }}>
              - Ali Tepe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faaliyetlerimiz;
