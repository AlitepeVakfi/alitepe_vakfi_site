
import React from 'react'
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock,
  FaInstagram, FaFacebook, FaTwitter,
  FaWhatsapp
} from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      icon: <FaEnvelope className="text-3xl" />,
      title: "E-posta",
      value: "alitepevakfi@gmail.com",
      description: "7/24 mesaj gönderebilirsiniz",
      link: "mailto:alitepevakfi@gmail.com",
      color: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      icon: <FaPhone className="text-3xl" />,
      title: "Telefon",
      value: "+90 537 925 88 32",
      description: "Hafta içi 09:00 - 18:00",
      link: "tel:+905379258832",
      color: "from-green-50 to-green-100"
    },
    {
      id: 3,
      icon: <FaWhatsapp className="text-3xl" />,
      title: "WhatsApp",
      value: "+90 537 925 88 32",
      description: "Hızlı destek hattı",
      link: "https://wa.me/905379258832",
      color: "from-emerald-50 to-emerald-100"
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Adres",
      value: "Ankara, Türkiye",
      description: "Vakıf merkez ofisi",
      link: "https://maps.google.com/maps?q=Mithat+Paşa+Caddesi+No+47+Daire+3+Ankara",
      color: "from-red-50 to-red-100"
    }
  ];

  const socialMediaAccounts = [
    {
      id: 1,
      platform: "Instagram",
      username: "@alitepevakfi",
      url: "https://instagram.com/alitepevakfi",
      icon: <FaInstagram className="text-3xl" />,
      color: "from-pink-50 to-purple-100"
    },
    {
      id: 2,
      platform: "Facebook",
      username: "Ali Tepe Vakfı",
      url: "https://facebook.com/alitepevakfi",
      icon: <FaFacebook className="text-3xl" />,
      color: "from-blue-50 to-blue-100"
    },
    {
      id: 3,
      platform: "Twitter",
      username: "@alitepevakfi",
      url: "https://twitter.com/alitepevakfi",
      icon: <FaTwitter className="text-3xl" />,
      color: "from-sky-50 to-sky-100"
    }
  ];

  const ContactMethodCard = ({ method }) => (
    <a 
      href={method.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-gradient-to-br ${method.color} border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer block`}
    >
      <div className="text-center">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
          {method.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300" style={{ color: '#2c3e7e' }}>
          {method.title}
        </h3>
        <p className="font-medium mb-2" style={{ color: '#2c3e7e' }}>
          {method.value}
        </p>
        <p className="text-sm" style={{ color: '#2c3e7e', opacity: 0.7 }}>
          {method.description}
        </p>
      </div>
    </a>
  );

  const SocialMediaCard = ({ social }) => (
    <a 
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-gradient-to-br ${social.color} border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer block`}
    >
      <div className="text-center">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
          {social.icon}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300" style={{ color: '#2c3e7e' }}>
          {social.platform}
        </h3>
        <p className="text-sm font-medium" style={{ color: '#2c3e7e', opacity: 0.8 }}>
          {social.username}
        </p>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2c3e7e' }}>
            İletişim
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#2c3e7e' }}>
            Ali Tepe Vakfı ile iletişime geçin, sorularınızı sorun veya 
            bizimle işbirliği yapın. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
              İletişim Bilgileri
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2c3e7e', opacity: 0.8 }}>
              Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => (
              <ContactMethodCard key={method.id} method={method} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
              Sosyal Medya
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2c3e7e', opacity: 0.8 }}>
              Sosyal medya hesaplarımızdan bizi takip edin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaAccounts.map((social) => (
              <SocialMediaCard key={social.id} social={social} />
            ))}
          </div>
        </div>
      </section>

      {/* Map / Office Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
              Ofis Bilgileri
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <FaClock className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <span style={{ color: '#2c3e7e' }}>Pazartesi - Cuma</span>
                      <span className="font-bold text-primary">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <span style={{ color: '#2c3e7e' }}>Cumartesi</span>
                      <span className="font-bold text-primary">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span style={{ color: '#2c3e7e' }}>Pazar</span>
                      <span className="font-bold" style={{ color: '#2c3e7e', opacity: 0.6 }}>Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#2c3e7e' }}>
                    Adres
                  </h3>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: '#2c3e7e' }}>
                    Ali Tepe Vakfı<br />
                    Mithat Paşa Caddesi No: 47 Daire: 3<br />
                    Kızılay / Çankaya, 06400 Ankara
                  </p>
                  <a 
                    href="https://maps.google.com/maps?q=Mithat+Paşa+Caddesi+No+47+Daire+3+Ankara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <FaMapMarkerAlt />
                    Haritada Görüntüle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact