import React from 'react';

const AliTepeBio = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Ali Tepe
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-xl text-foreground/70 mb-2">(Kurucu Başkan)</p>
        <p className="text-lg text-foreground/60">(1930 - 2017)</p>
      </div>        {/* Biography Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Photo Section */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-4 shadow-xl">
                  <img
                    src="https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/ali-tepe-photo.webp"
                    alt="Ali Tepe"
                    className="w-full h-auto rounded-xl object-cover"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%236b7280' text-anchor='middle' dy='.3em'%3EAli Tepe%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
              </div>
              
              {/* Kısa Bilgi Kartı */}
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-center">Kısa Bilgi</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground/70">Doğum:</span>
                    <p className="text-foreground">1930, Tokat</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">Vefat:</span>
                    <p className="text-foreground">Mart 2017</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">Vakıf Kuruluş:</span>
                    <p className="text-foreground">1996</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">Meslek:</span>
                    <p className="text-foreground">İş İnsanı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Text Section - Single Paragraph */}
          <div className="md:col-span-2">
            <div className="bg-background/50 border border-primary/10 rounded-xl p-8 shadow-lg">
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                1930 yılında Tokat'ta doğdu. İlkokulu Tokat Gazipaşa İlk okulunda tamamladı. İlk okul yılları gazete satıcılığı, ayakkabı boyacılığı, çıraklık, bilet satıcılığı, inşaat işçiliği gibi birçok işte çalışarak yetim kardeşlerine bakma görev ve sorumluluğunu üstlenerek geçti. Ortaöğretimi ise Sivas Sanat Enstitüsünde başlayarak Kastamonu Erkek Sanat Torna Tesviye Bölümünde tamamladı. Hayatın acımasız zorluklarıyla ilk kez kız kardeşinin evlatlık verildiği Tokat'ın Turhal ilçesinin Çivril köyünde yaz tatillerinde tarla, hayvancılık ve çobanlık işlerinde çalışarak karşılaştı.
              </p>
              
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                İş hayatına ortaöğrenimi sırasında yaz tatillerinde İstanbul Mahmutpaşa yokuşunda işportacılıkla başladı. 1949-1950 yıllarında Ankara Makine Kimya Endüstrisi Kurumunda mecburi hizmet dolayısıyla işe başladı. Burada görev yaparken işçi temsilcisi seçildi. Arkadaşlarıyla Mekanik ve Kimya İşçileri Sendikasını kurdu. Aynı zamanda Türk-İş'in kurulmasına katkıda bulundu. Bu arada Bakkaliye, Parfümeri, Tuhafiye, Hediyelik eşya satıcılığı yaparken iş adamlarıyla yolu kesişti. Böylece Kundura ve Otomobil ticaretine başladı. Özel hayatında geçirdiği zor ve mücadele dolu yaşamı iş hayatında ona önemli tecrübeler kazandırdığı gibi ticari faaliyetlerde rehberlik yapmış olup ışık tutmuştur. İş hayatı boyunca Devletten ne mal aldı, ne de sattı. Zira Devletle iş yapmanın memleket için şart olduğunu bilmekle birlikte, devletle yapılan işlerde bilmeyerek ve istemeyerek tüyü bitmemiş yetim hakkı yeme ihtimali bulunması (Elbette her devlet işinde yetim hakkı yenmesi söz konusu olamaz) korkusu ile devletle iş yapmaktan kaçındı.
              </p>
              
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                Yaşamı boyunca hayal ettiği <strong>Ali Tepe Çağdaş Eğitim ve Sağlık Vakfı'nı 1996 yılında</strong> kurma mutluluğuna erişti. Vakfın kurulduğu tarihten itibaren hiçbir şahıs yada kurum ve kuruluştan yardım almamıştır. Aksine vakıf şahıslara, çeşitli eğitim ve sağlık kuruluşlarına imkanlar ölçüsünde yardım ve katkılarda bulunmuştur. Memleketi olan Tokat'ta ikisi kendi adına diğeri kendi ve kardeşi Osman Tepe adına toplam 3 okul yaptırdı. Ayrıca 1996 yılından itibaren yetim, öksüz ve fakir çocuklara düzenli olarak öğrenci bursu verilmektedir. Ayrıca Tokat'ta yine kendi adına ve temeli 2017 yılında atılacak olan kız öğrenci yurdunun yapımı için gerekli maddi ve manevi desteği sağlamış olmasına rağmen Mart 2017 tarihinde mücadele dolu yaşamı son bulmuş olup hakkın rahmetine kavuşmuş olup maalesef kız öğrenci yurdunu görmek kendine nasip olmamıştır.
              </p>
              
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                Hayatı boyunca ülkesi ve ülke insanı için yaptığı hizmetlerden dolayı birçok ödülle onurlandırıldı. Yaşama veda etmesine rağmen ticarette aktif olarak halen Ankara Büyük Çarşı'da Ayko Gümüşçülük adıyla ticari faaliyeti sürmektedir.
              </p>
              
              <p className="text-foreground/80 text-base leading-relaxed italic">
                Özellikle vakfın kuruluşundan sonra bu dünyadan kimsenin bir şey götüremeyeceği inancıyla çok zor ve meşakkatli geçen hayatında elde ettiği tüm gelirlerinin öldükten sonra vakfa kalması için gereken hukuki işlemleri yerine getirmenin mutluluğu ile yaşadı. Amacı sadece adının anılması değil, helal yoldan ve mücadele sonucu elde ettiği tüm mal varlığının insanlık yararına sonsuza dek hizmet etmesiydi.
              </p>
              
              <p className="text-foreground/60 text-sm text-center mt-8 italic">
                "Seni özleyeceğiz, ruhun şad olsun sayın başkanım. Saygılarımızla..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AliTepeBio;
