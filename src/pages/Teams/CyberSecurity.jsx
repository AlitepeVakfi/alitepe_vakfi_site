import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShieldAlt, FaBug, FaLock, FaCode, FaNetworkWired, FaArrowLeft, FaUsers, FaProjectDiagram } from 'react-icons/fa'
import { GiHackerDark, GiDigitalTrace } from 'react-icons/gi'
import { MdSecurity, MdForensics } from 'react-icons/md'

const CyberSecurity = () => {
  const navigate = useNavigate();

  const specializations = [
    {
      id: 1,
      name: "Penetration Testing",
      icon: <GiHackerDark className="text-3xl" />,
      description: "Web uygulamaları, ağ altyapıları ve mobil uygulamalarda güvenlik açıklarını tespit etmek için etik hackleme teknikleri uyguluyoruz.",
      tools: ["Metasploit", "Burp Suite", "Nmap", "OWASP ZAP", "Kali Linux"],
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-400"
    },
    {
      id: 2,
      name: "Digital Forensics",
      icon: <MdForensics className="text-3xl" />,
      description: "Dijital kanıtları toplama, analiz etme ve siber suçları araştırma konusunda uzmanlaşmış çalışmalar yürütüyoruz.",
      tools: ["Autopsy", "Volatility", "Wireshark", "Cellebrite", "EnCase"],
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      id: 3,
      name: "Malware Analysis",
      icon: <FaBug className="text-3xl" />,
      description: "Zararlı yazılımları analiz ederek işleyişlerini anlama ve koruma yöntemleri geliştirme üzerinde çalışıyoruz.",
      tools: ["IDA Pro", "Ghidra", "x64dbg", "Cuckoo Sandbox", "VirusTotal"],
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-400"
    },
    {
      id: 4,
      name: "Network Security",
      icon: <FaNetworkWired className="text-3xl" />,
      description: "Ağ altyapılarının güvenliğini sağlama, ağ tabanlı saldırıları tespit etme ve önleme konularında çalışıyoruz.",
      tools: ["Wireshark", "pfSense", "Snort", "Nagios", "Nessus"],
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400"
    }
  ];

  const projects = [
    {
      name: "CTF Platformu",
      description: "Üniversite öğrencileri için özel olarak tasarlanmış Capture The Flag yarışma platformu geliştiriyoruz.",
      status: "Aktif"
    },
    {
      name: "Güvenlik Tarayıcısı",
      description: "Web uygulamaları için otomatik güvenlik açığı tespit eden araç geliştirme projesi.",
      status: "Geliştirme"
    },
    {
      name: "Phishing Simülatörü",
      description: "Kurumlar için farkındalık eğitimi amaçlı phishing saldırısı simülasyon aracı.",
      status: "Planlama"
    }
  ];

  const achievements = [
    "USOM Siber Güvenlik Yarışması - 1. Yer (2024)",
    "TÜBİTAK Siber Güvenlik Kampı Katılımcısı",
    "Hack The Box University Ranking - Top 10",
    "OWASP Top 10 Eğitim Sertifikasyonu"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/teams')}
          className="mb-8 flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Takımlara Geri Dön</span>
        </button>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl border border-blue-500/30">
              <FaShieldAlt className="text-6xl text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            CyberSecurity Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Siber güvenlik alanında araştırma, geliştirme ve eğitim faaliyetleri yürüten ana takımımız. 
            Penetrasyon testleri, güvenlik açığı analizi, dijital adli tıp ve güvenlik araçları geliştirme 
            konularında çalışmaktadır.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-xl">
            <FaUsers className="text-3xl text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-400 mb-1">25</div>
            <div className="text-foreground/70 text-sm">Aktif Üye</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl">
            <FaProjectDiagram className="text-3xl text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyan-400 mb-1">12</div>
            <div className="text-foreground/70 text-sm">Aktif Proje</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-400/10 to-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl">
            <MdSecurity className="text-3xl text-blue-300 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-300 mb-1">150+</div>
            <div className="text-foreground/70 text-sm">CTF Çözümü</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
            <FaLock className="text-3xl text-cyan-300 mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyan-300 mb-1">50+</div>
            <div className="text-foreground/70 text-sm">Güvenlik Açığı</div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Uzmanlık Alanlarımız</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializations.map((spec) => (
              <div
                key={spec.id}
                className={`group relative bg-gradient-to-br ${spec.color} backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl bg-white/10 ${spec.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {spec.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-300 mb-3">
                      {spec.name}
                    </h3>
                    <p className="text-foreground/80 group-hover:text-foreground/90 leading-relaxed mb-4 transition-colors duration-300">
                      {spec.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {spec.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-full text-foreground/80 hover:text-foreground transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Güncel Projelerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-foreground/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Aktif' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Geliştirme' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Başarılarımız</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Takıma Katıl</h2>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            Siber güvenlik alanında kendini geliştirmek, gerçek projeler üzerinde çalışmak ve 
            sektör deneyimi kazanmak istiyorsan ekibimize katıl!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Başvuru Yap
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full font-semibold transition-all duration-300">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity
