import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRobot, FaBrain, FaEye, FaChartLine, FaArrowLeft, FaUsers, FaProjectDiagram, FaCogs, FaLightbulb } from 'react-icons/fa'
import { GiArtificialIntelligence, GiNeuralNetwork } from 'react-icons/gi'
import { MdPsychology, MdAutorenew } from 'react-icons/md'

const AITeam = () => {
  const navigate = useNavigate();

  const specializations = [
    {
      id: 1,
      name: "Machine Learning Security",
      icon: <FaBrain className="text-3xl" />,
      description: "ML modellerinin güvenliğini sağlama, adversarial saldırıları tespit etme ve savunma mekanizmaları geliştiriyoruz.",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Adversarial Robustness Toolbox"],
      color: "from-purple-500/20 to-indigo-600/20",
      iconColor: "text-purple-400"
    },
    {
      id: 2,
      name: "AI Threat Detection",
      icon: <FaEye className="text-3xl" />,
      description: "Yapay zeka algoritmalarını kullanarak siber tehditleri otomatik olarak tespit eden sistemler geliştiriyoruz.",
      tools: ["Keras", "OpenCV", "YOLO", "Elasticsearch", "Apache Spark"],
      color: "from-pink-500/20 to-purple-600/20",
      iconColor: "text-pink-400"
    },
    {
      id: 3,
      name: "Neural Network Analysis",
      icon: <GiNeuralNetwork className="text-3xl" />,
      description: "Derin sinir ağlarının iç yapısını analiz ederek güvenlik açıklarını tespit etme ve optimizasyon çalışmaları yapıyoruz.",
      tools: ["TensorBoard", "Netron", "ONNX", "PyTorch Lightning"],
      color: "from-cyan-500/20 to-blue-600/20",
      iconColor: "text-cyan-400"
    },
    {
      id: 4,
      name: "Automated Security Analysis",
      icon: <MdAutorenew className="text-3xl" />,
      description: "Güvenlik analizlerini otomatikleştiren AI destekli araçlar geliştirerek hızlı ve etkili çözümler sunuyoruz.",
      tools: ["AutoML", "MLflow", "Kubeflow", "Apache Airflow"],
      color: "from-green-500/20 to-teal-600/20",
      iconColor: "text-green-400"
    }
  ];

  const projects = [
    {
      name: "AI-Powered Malware Detector",
      description: "Makine öğrenmesi teknikleri kullanarak yeni nesil zararlı yazılımları tespit eden sistem geliştiriyoruz.",
      status: "Aktif",
      tech: ["Deep Learning", "Computer Vision", "NLP"]
    },
    {
      name: "Smart Phishing Detection",
      description: "E-posta içeriklerini analiz ederek phishing saldırılarını otomatik tespit eden AI modeli.",
      status: "Geliştirme",
      tech: ["NLP", "BERT", "Classification"]
    },
    {
      name: "Behavioral Analytics Platform",
      description: "Kullanıcı davranış analizleri yaparak anormal aktiviteleri tespit eden platform.",
      status: "Araştırma",
      tech: ["Time Series", "Anomaly Detection", "Real-time Processing"]
    }
  ];

  const researchAreas = [
    {
      title: "Adversarial Machine Learning",
      description: "ML modellerine yönelik saldırıları anlama ve savunma stratejileri geliştirme",
      icon: <GiArtificialIntelligence className="text-2xl" />
    },
    {
      title: "Explainable AI Security",
      description: "Güvenlik alanında kullanılan AI sistemlerinin açıklanabilirliğini artırma",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: "Federated Learning Security",
      description: "Dağıtık öğrenme sistemlerinin güvenliğini sağlama",
      icon: <FaCogs className="text-2xl" />
    },
    {
      title: "AI Model Privacy",
      description: "AI modellerinde veri gizliliğini koruma teknikleri geliştirme",
      icon: <MdPsychology className="text-2xl" />
    }
  ];

  const achievements = [
    "IEEE AI Security Conference - Best Paper Award (2024)",
    "Google AI for Good Challenge - Finalist",
    "NIST AI Risk Management Framework Contributor",
    "Microsoft AI Security Research Grant Recipient"
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
            <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl border border-purple-500/30">
              <FaRobot className="text-6xl text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            AI Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Yapay zeka ve makine öğrenmesi teknolojilerini siber güvenlik alanında uygulayan yenilikçi takımımız. 
            AI destekli güvenlik çözümleri, otomatik tehdit tespit sistemleri ve akıllı güvenlik araçları 
            geliştirmektedir.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl">
            <FaUsers className="text-3xl text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-400 mb-1">15</div>
            <div className="text-foreground/70 text-sm">Aktif Üye</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/10 backdrop-blur-sm border border-pink-500/20 rounded-xl">
            <FaProjectDiagram className="text-3xl text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-pink-400 mb-1">8</div>
            <div className="text-foreground/70 text-sm">AI Projesi</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl">
            <FaBrain className="text-3xl text-indigo-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-indigo-400 mb-1">25+</div>
            <div className="text-foreground/70 text-sm">Trained Model</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl">
            <FaChartLine className="text-3xl text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyan-400 mb-1">95%</div>
            <div className="text-foreground/70 text-sm">Accuracy Rate</div>
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
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Güncel AI Projelerimiz</h2>
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
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Araştırma Alanlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-purple-400 transition-colors duration-300 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {area.description}
                  </p>
                </div>
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
                  className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-foreground group-hover:text-purple-400 transition-colors duration-300">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">AI Takımına Katıl</h2>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            Yapay zeka ve siber güvenliğin kesişim noktasında çalışmak, yenilikçi projeler geliştirmek 
            ve geleceğin teknolojilerini şekillendirmek istiyorsan takımımıza katıl!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Başvuru Yap
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition-all duration-300">
              Araştırma Detayları
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AITeam
