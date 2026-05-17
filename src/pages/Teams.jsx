import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShieldAlt, FaRobot, FaArrowRight } from 'react-icons/fa'
import { MdSecurity, MdPsychology } from 'react-icons/md'

const Teams = () => {
  const navigate = useNavigate();

  const teams = [
    {
      id: 1,
      name: "CyberSecurity Team",
      shortName: "CyberSec",
      description: "Siber güvenlik alanında araştırma, geliştirme ve eğitim faaliyetleri yürüten ana takımımız. Penetrasyon testleri, güvenlik açığı analizi, dijital adli tıp ve güvenlik araçları geliştirme konularında çalışmaktadır.",
      icon: <FaShieldAlt className="text-5xl" />,
      color: "from-blue-500/20 to-cyan-600/20",
      borderColor: "border-blue-500/30 hover:border-blue-400/50",
      iconColor: "text-blue-400",
      route: "/teams/cybersecurity",
      bgGlow: "bg-blue-500/10",
      specialties: ["Penetration Testing", "Digital Forensics", "Network Security", "Malware Analysis"],
      members: 25
    },
    {
      id: 2,
      name: "AI Team",
      shortName: "AI",
      description: "Yapay zeka ve makine öğrenmesi teknolojilerini siber güvenlik alanında uygulayan yenilikçi takımımız. AI destekli güvenlik çözümleri, otomatik tehdit tespit sistemleri ve akıllı güvenlik araçları geliştirmektedir.",
      icon: <FaRobot className="text-5xl" />,
      color: "from-purple-500/20 to-pink-600/20",
      borderColor: "border-purple-500/30 hover:border-purple-400/50",
      iconColor: "text-purple-400",
      route: "/teams/ai",
      bgGlow: "bg-purple-500/10",
      specialties: ["Machine Learning Security", "AI Threat Detection", "Automated Analysis", "Neural Networks"],
      members: 15
    }
  ];

  const TeamCard = ({ team }) => (
    <div 
      onClick={() => navigate(team.route)}
      className={`group relative bg-gradient-to-br ${team.color} backdrop-blur-sm border ${team.borderColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 cursor-pointer`}
    >
      {/* Decorative elements */}
      <div className={`absolute top-4 right-4 w-20 h-20 ${team.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className={`absolute bottom-4 left-4 w-16 h-16 ${team.bgGlow} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Click indicator */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
        <FaArrowRight className={`text-xl ${team.iconColor}`} />
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className={`p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ${team.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
            {team.icon}
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
              {team.members}
            </span>
            <p className="text-foreground/60 text-sm font-medium">Aktif Üye</p>
          </div>
        </div>
        
        {/* Team Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-foreground group-hover:text-white transition-colors duration-300 mb-3">
              {team.name}
            </h3>
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${team.iconColor} bg-white/10 group-hover:bg-white/20 transition-all duration-300 uppercase tracking-wider`}>
              {team.shortName}
            </span>
          </div>
          
          <p className="text-foreground/80 group-hover:text-foreground/90 leading-relaxed text-lg transition-colors duration-300">
            {team.description}
          </p>
          
          {/* Specialties */}
          <div>
            <h4 className="text-sm font-bold text-foreground/90 mb-4 uppercase tracking-wider">Uzmanlık Alanları</h4>
            <div className="grid grid-cols-2 gap-3">
              {team.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg text-foreground/80 hover:text-foreground transition-all duration-300 font-medium text-center"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="pt-4">
            <div className="flex items-center text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
              <span className="text-sm font-medium">Detayları görüntülemek için tıklayın</span>
              <FaArrowRight className="ml-2 text-xs transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Border glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none border-2 ${team.borderColor.replace('border-', 'border-').replace('/30', '/60')}`}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-6">
            Takımlarımız
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Gazi Üniversitesi Siber Güvenlik Topluluğu bünyesinde yer alan uzman takımlarımız, 
            farklı alanlarda araştırma, geliştirme ve eğitim faaliyetleri yürütmektedir.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-foreground/70">Uzman Takım</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border border-secondary/20 rounded-xl">
            <div className="text-4xl font-bold text-secondary mb-2">{teams.reduce((sum, team) => sum + team.members, 0)}</div>
            <div className="text-foreground/70">Toplam Üye</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-foreground/10 to-foreground/5 backdrop-blur-sm border border-foreground/20 rounded-xl">
            <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-foreground/70">Aktif Çalışma</div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>

        {/* Join Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-sm border border-foreground/20 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Takımlara Katıl</h2>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            İlgi alanına uygun takıma katılarak siber güvenlik ve yapay zeka alanında kendini geliştir. 
            Projeler üret, deneyim kazan ve sektörde tanınan bir uzman ol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Başvuru Yap
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all duration-300">
              İletişim Kur
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams