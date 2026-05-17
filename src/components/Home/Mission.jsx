import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Mission = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3"></div>
            <img 
              src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/mission-photo.webp" 
              alt="Ali Tepe Vakfı Misyonu"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2c3e7e' }}>
              Misyonumuz
            </h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#2c3e7e' }}>
                Ali Tepe Vakfı olarak, eğitim ve sosyal dayanışma alanlarında 
                topluma kalıcı değerler katmayı hedefliyoruz. Kurucumuz Ali Tepe'nin 
                vizyonuyla, her çocuğun eğitim hakkına sahip olduğuna inanıyoruz.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: '#2c3e7e' }}>
                1996 yılından bu yana sürdürdüğümüz çalışmalarımızla, binlerce 
                öğrenciye eğitim desteği sağladık, ihtiyaç sahibi ailelere umut olduk 
                ve toplumsal dayanışmayı güçlendirdik.
              </p>

              <div className="bg-white rounded-xl p-6 mt-8">
                <FaQuoteLeft className="text-primary mb-4" size={24} />
                <p className="text-xl italic font-medium mb-4" style={{ color: '#2c3e7e' }}>
                  "Eğitim gelecektir. Bir çocuğa eğitim vermek, bir nesle umut vermektir."
                </p>
                <p className="text-right font-bold" style={{ color: '#2c3e7e' }}>
                  - Ali Tepe
                </p>
                <FaQuoteRight className="text-primary ml-auto mt-2" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
