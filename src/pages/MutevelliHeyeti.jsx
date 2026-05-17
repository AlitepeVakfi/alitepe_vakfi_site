import React from 'react';
import { FaUsers } from 'react-icons/fa';

const MutevelliHeyeti = () => {
  // Ali Tepe - Founder
  const founder = {
    id: 1,
    name: "Ali Tepe",
    title: "Kurucu Başkanı",
    profession: "İş Adamı",
    years: "(1930-2017)",
    photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/ali-tepe.webp",
    memorial: "Vakıf kurucusu ve başkanımız 09/03/2017 tarihinde vefat etmiştir. Sevgisi yüreğimizde sonsuza dek yaşayacaktır. Mekanı cennet olsun."
  };

  // Board Members
  const members = [
    {
      id: 2,
      name: "Reşat Doğru",
      title: "Mütevelli Yönetim Kurulu Başkanı",
      profession: "Doktor - Eski Bakan",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/resat-dogru.webp"
    },
    {
      id: 3,
      name: "Ali Kaya",
      title: "Asil Üye",
      profession: "Avukat",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/ali-kaya.webp"
    },
    {
      id: 4,
      name: "Prof. Dr. Mustafa Erdem",
      title: "Asil Üye",
      profession: "Eski Milletvekili",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/mustafa-erdem.webp"
    },
    {
      id: 5,
      name: "Hasan Çalış",
      title: "Asil Üye",
      profession: "Doktor - Eski Milletvekili",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/hasan-calis.webp"
    },
    {
      id: 6,
      name: "Yaşar Karaaslan",
      title: "Asil Üye",
      profession: "Emekli Yönetici",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/yasar-karaaslan.webp"
    },
    {
      id: 7,
      name: "Orhan Ziya Diren",
      title: "Asil Üye",
      profession: "Eski Milletvekili - Ticaret",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/orhan-ziya-diren.webp"
    },
    {
      id: 8,
      name: "Mustafa Baş",
      title: "Asil Üye",
      profession: "Başmüfettiş",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/mustafa-bas.webp"
    },
    {
      id: 9,
      name: "Süha Şen",
      title: "Asil Üye",
      profession: "Uzman Doktor",
      photo: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/suha-sen.webp"
    }
  ];

  const FounderCard = ({ member }) => {
    return (
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-amber-50 to-background border-2 border-amber-300/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-amber-400/50 shadow-xl">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/logo-removebg-preview.png';
                  }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#2c3e7e' }}>
                {member.name}
              </h2>
              <p className="text-xl font-semibold text-amber-700 mb-2">
                {member.title}
              </p>
              <p className="text-lg mb-2" style={{ color: '#2c3e7e' }}>
                {member.profession}
              </p>
              <p className="text-lg font-medium text-gray-600 mb-4">
                {member.years}
              </p>
              <div className="bg-white/80 rounded-xl p-4 border border-amber-300/50">
                <p className="text-sm md:text-base italic leading-relaxed" style={{ color: '#2c3e7e' }}>
                  {member.memorial}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MemberCard = ({ member }) => {
    return (
      <div className="group relative bg-white border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Photo */}
          <div className="mb-6">
            <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = '/logo-removebg-preview.png';
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#2c3e7e' }}>
              {member.name}
            </h3>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-3">
              <span className="text-sm font-semibold">{member.title}</span>
            </div>
            
            <p className="font-medium mt-2" style={{ color: '#2c3e7e' }}>
              {member.profession}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaUsers className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
            Mütevelli Heyeti
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2c3e7e' }}>
            Ali Tepe Vakfı'nı yöneten ve yol gösteren değerli mütevelli heyet üyelerimiz
          </p>
        </div>

        {/* Founder Card - Ali Tepe */}
        <FounderCard member={founder} />

        {/* President Header */}
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#2c3e7e' }}>
          Başkan
        </h2>

        {/* President Card - Reşat Doğru */}
        <div className="max-w-2xl mx-auto mb-16">
          <MemberCard member={members[0]} />
        </div>

        {/* Board Members Header */}
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2c3e7e' }}>
          Mütevelli Heyeti Üyeleri
        </h2>

        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.slice(1).map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MutevelliHeyeti;
