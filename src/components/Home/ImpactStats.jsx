import React from 'react';
import { FaSchool, FaUsers, FaHeart, FaHandsHelping } from 'react-icons/fa';

const ImpactStats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaSchool className="w-12 h-12" />,
      number: "3",
      label: "Açılan Okul",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <FaUsers className="w-12 h-12" />,
      number: "2,250+",
      label: "Aktif Öğrenci",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: <FaHeart className="w-12 h-12" />,
      number: "100+",
      label: "Yıllık Burs",
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      icon: <FaHandsHelping className="w-12 h-12" />,
      number: "3,500+",
      label: "Yardım Alan Aile",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
            Rakamlarla Vakfımız
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl" style={{ color: '#2c3e7e' }}>
            28 yıldır topluma hizmet ediyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`bg-gradient-to-br ${stat.color} text-white p-4 rounded-full mb-6`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-3" style={{ color: '#2c3e7e' }}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold" style={{ color: '#2c3e7e' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
