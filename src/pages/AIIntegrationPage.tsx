import React from 'react';
import { Brain, Bot, Zap, Target, CheckCircle, ArrowRight, Lightbulb, Settings, TrendingUp, Users, BookOpen, Star, ArrowUp } from 'lucide-react';

interface AIIntegrationPageProps {
  setCurrentPage?: (page: string) => void;
}

const AIIntegrationPage: React.FC<AIIntegrationPageProps> = ({ setCurrentPage }) => {
  const aiTools = [
    {
      name: "ChatGPT for Education",
      description: "AI chatbot untuk membuat konten gamifikasi dan kuis interaktif",
      features: ["Pembuatan konten", "Pembuatan kuis", "Umpan balik personal", "Pembuatan cerita"],
      useCase: "Membuat narasi misi, dialog karakter, dan umpan balik yang personal",
      difficulty: "Pemula",
      color: "bg-green-500",
      steps: [
        "Daftar akun ChatGPT",
        "Gunakan perintah khusus untuk gamifikasi",
        "Hasilkan konten sesuai mata pelajaran",
        "Review dan edit hasil AI"
      ]
    },
    {
      name: "Canva AI",
      description: "Desain visual otomatis untuk lencana, avatar, dan elemen gamifikasi",
      features: ["Desain otomatis", "Pembuatan lencana", "Pembuat avatar", "Perpustakaan template"],
      useCase: "Membuat lencana, avatar siswa, dan visual sistem penghargaan",
      difficulty: "Pemula",
      color: "bg-purple-500",
      steps: [
        "Akses Canva dan pilih AI features",
        "Gunakan Magic Design untuk lencana",
        "Sesuaikan dengan identitas sekolah",
        "Ekspor dalam format yang sesuai"
      ]
    },
    {
      name: "Gradescope AI",
      description: "Penilaian bertenaga AI dan analitik untuk asesmen gamifikasi",
      features: ["Penilaian otomatis", "Dasbor analitik", "Pelacakan kemajuan", "Otomatisasi umpan balik"],
      useCase: "Otomatisasi penilaian dan pelacakan kemajuan siswa",
      difficulty: "Menengah",
      color: "bg-blue-500",
      steps: [
        "Siapkan akun Gradescope",
        "Unggah template tugas",
        "Konfigurasi rubrik penilaian AI",
        "Pantau analitik siswa"
      ]
    },
    {
      name: "Synthesia",
      description: "Pembuat video AI untuk membuat karakter virtual dan tutorial",
      features: ["Avatar AI", "Multi-bahasa", "Karakter kustom", "Video interaktif"],
      useCase: "Membuat karakter mentor virtual dan video pembelajaran",
      difficulty: "Lanjutan",
      color: "bg-orange-500",
      steps: [
        "Pilih atau buat AI avatar",
        "Tulis naskah konten pembelajaran",
        "Hasilkan video dengan AI",
        "Integrasikan ke platform gamifikasi"
      ]
    }
  ];

  const integrationSteps = [
    {
      phase: "Persiapan & Perencanaan",
      duration: "1-2 minggu",
      icon: Target,
      color: "bg-blue-500",
      tasks: [
        "Identifikasi kebutuhan AI dalam gamifikasi",
        "Pilih alat AI yang sesuai anggaran dan tingkat keahlian",
        "Pelatihan dasar alat AI untuk tim pengajar",
        "Siapkan akun dan konfigurasi awal"
      ],
      aiApplications: [
        "Analisis kebutuhan dengan alat survei AI",
        "Prediksi keterlibatan dengan pembelajaran mesin",
        "Personalisasi konten berdasarkan data siswa"
      ]
    },
    {
      phase: "Pembuatan Konten dengan AI",
      duration: "2-3 minggu",
      icon: Lightbulb,
      color: "bg-green-500",
      tasks: [
        "Hasilkan pertanyaan kuis dengan AI",
        "Buat alur cerita dan narasi misi",
        "Desain lencana dan penghargaan visual",
        "Kembangkan karakter mentor virtual"
      ],
      aiApplications: [
        "ChatGPT untuk membuat 100+ pertanyaan kuis",
        "DALL-E untuk menghasilkan lencana unik",
        "Suara AI untuk narasi audio",
        "Pembuatan prosedural untuk desain tingkatan"
      ]
    },
    {
      phase: "Personalisasi & Adaptasi",
      duration: "2-4 minggu",
      icon: Brain,
      color: "bg-purple-500",
      tasks: [
        "Implementasikan algoritma pembelajaran adaptif",
        "Siapkan sistem umpan balik personal",
        "Konfigurasi AI penyesuaian kesulitan",
        "Buat jalur pembelajaran individual"
      ],
      aiApplications: [
        "Pembelajaran mesin untuk kesulitan adaptif",
        "Pemrosesan bahasa alami untuk analisis jawaban siswa",
        "Sistem rekomendasi untuk konten",
        "Analitik prediktif untuk intervensi dini"
      ]
    },
    {
      phase: "Analitik & Optimisasi",
      duration: "Berkelanjutan",
      icon: TrendingUp,
      color: "bg-orange-500",
      tasks: [
        "Pantau metrik kinerja AI",
        "Analisis pola keterlibatan siswa",
        "Optimalkan algoritma AI berdasarkan data",
        "Siklus perbaikan berkelanjutan"
      ],
      aiApplications: [
        "Dasbor analitik waktu nyata",
        "Model prediktif untuk risiko putus sekolah",
        "Analisis sentimen dari umpan balik siswa",
        "Uji A/B dengan optimisasi AI"
      ]
    }
  ];

  const practicalExamples = [
    {
      subject: "Matematika",
      scenario: "Petualangan Matematika dengan AI",
      description: "Menggunakan AI untuk membuat petualangan matematika yang adaptif",
      implementation: [
        "ChatGPT membuat storyline petualangan matematika",
        "AI menghasilkan soal sesuai tingkat siswa",
        "Pembelajaran mesin menyesuaikan kesulitan secara real-time",
        "Mentor AI memberikan petunjuk personal"
      ],
      tools: ["ChatGPT", "Khan Academy AI", "Wolfram Alpha"],
      results: "85% peningkatan keterlibatan, 67% peningkatan dalam pemecahan masalah"
    },
    {
      subject: "Bahasa Arab",
      scenario: "Tutor Virtual Bahasa Arab",
      description: "AI chatbot yang berperan sebagai tutor bahasa Arab interaktif",
      implementation: [
        "Latih AI dengan kosakata dan gramatika Arab",
        "Buat skenario percakapan dengan AI",
        "Pengenalan suara untuk latihan pelafalan",
        "Umpan balik AI untuk latihan menulis"
      ],
      tools: ["OpenAI API", "Google Speech-to-Text", "Duolingo AI"],
      results: "73% peningkatan retensi kosakata, 58% peningkatan pelafalan"
    },
    {
      subject: "Sejarah Islam",
      scenario: "Simulasi Perjalanan Waktu Sejarah",
      description: "Simulasi perjalanan waktu dengan AI untuk eksplorasi sejarah Islam",
      implementation: [
        "AI menghasilkan skenario sejarah dan karakter",
        "Dialog interaktif dengan tokoh sejarah",
        "Konsekuensi keputusan berbasis AI",
        "Garis waktu sejarah yang dipersonalisasi"
      ],
      tools: ["ChatGPT", "Character.AI", "Midjourney"],
      results: "91% siswa lebih tertarik sejarah, 76% peningkatan retensi"
    }
  ];

  const bestPractices = [
    {
      category: "Penggunaan AI yang Etis",
      icon: CheckCircle,
      practices: [
        "Selalu tinjau dan verifikasi konten hasil AI",
        "Pertahankan pengawasan manusia dalam pengambilan keputusan",
        "Lindungi privasi siswa dan keamanan data",
        "Transparan tentang penggunaan AI kepada siswa",
        "Hindari ketergantungan berlebihan pada otomatisasi AI"
      ]
    },
    {
      category: "Implementasi Teknis",
      icon: Settings,
      practices: [
        "Mulai kecil dengan proyek percontohan",
        "Pastikan sistem cadangan dan pemulihan data",
        "Uji rutin dan jaminan kualitas",
        "Pantau kinerja dan akurasi AI",
        "Sediakan opsi cadangan manusia"
      ]
    },
    {
      category: "Integrasi Pedagogis",
      icon: BookOpen,
      practices: [
        "Selaraskan fitur AI dengan tujuan pembelajaran",
        "Seimbangkan otomasi AI dengan interaksi manusia",
        "Gunakan AI untuk meningkatkan, bukan menggantikan, pengajaran",
        "Berikan pelatihan untuk guru dalam literasi AI",
        "Evaluasi berkelanjutan hasil pembelajaran"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AI & Gamifikasi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrasikan kekuatan Artificial Intelligence dengan gamifikasi untuk menciptakan 
            pengalaman pembelajaran yang lebih personal, adaptif, dan efektif
          </p>
        </div>

        {/* Introduction to AI in Gamification */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Mengapa AI + Gamifikasi?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalisasi Otomatis</h3>
              <p className="text-gray-600 text-sm">
                AI dapat menganalisis pola belajar setiap siswa dan menyesuaikan konten, 
                tingkat kesulitan, dan penghargaan secara waktu nyata
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Efisiensi Maksimal</h3>
              <p className="text-gray-600 text-sm">
                Otomatisasi pembuatan konten, penilaian, dan umpan balik memungkinkan guru 
                fokus pada aspek pedagogis yang lebih penting
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Insights Mendalam</h3>
              <p className="text-gray-600 text-sm">
                Analitik AI memberikan wawasan mendalam tentang kemajuan siswa, 
                prediksi kesulitan, dan rekomendasi intervensi
              </p>
            </div>
          </div>
        </section>

        {/* AI Tools for Gamification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Tools AI untuk Gamifikasi</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${tool.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{tool.name}</h3>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {tool.difficulty}
                    </span>
                  </div>
                  <p className="text-white text-opacity-90">{tool.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Fitur Utama:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Use Case:</h4>
                    <p className="text-gray-600 text-sm">{tool.useCase}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Langkah Implementasi:</h4>
                    <ol className="space-y-1">
                      {tool.steps.map((step, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Phases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Tahapan Integrasi AI dengan Gamifikasi</h2>
          
          <div className="space-y-8">
            {integrationSteps.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className={`${phase.color} md:w-1/3 p-6 text-white`}>
                      <div className="text-center">
                        <Icon className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                        <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                          {phase.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Tasks Utama:</h4>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Aplikasi AI:</h4>
                          <ul className="space-y-2">
                            {phase.aiApplications.map((app, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <Bot className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Contoh Implementasi Praktis</h2>
          
          <div className="space-y-6">
            {practicalExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="md:flex md:items-start md:space-x-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
                      <h3 className="text-lg font-bold mb-1">{example.subject}</h3>
                      <h4 className="text-sm opacity-90">{example.scenario}</h4>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4">{example.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Implementasi:</h5>
                        <ul className="space-y-1">
                          {example.implementation.map((step, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <ArrowRight className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Tools yang Digunakan:</h5>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {example.tools.map((tool, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-1">📊 Hasil:</h5>
                          <p className="text-green-700 text-sm">{example.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Best Practices AI dalam Gamifikasi</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-center mb-4">
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-gray-800">{category.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.practices.map((practice, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <Star className="h-3 w-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Mulai Integrasi AI Hari Ini!</h2>
            <p className="text-xl text-white text-opacity-90">
              Ikuti panduan step-by-step untuk mengimplementasikan AI dalam gamifikasi pembelajaran
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">1</div>
              <h4 className="font-semibold mb-1">Pilih Alat</h4>
              <p className="text-sm text-white text-opacity-80">Mulai dengan ChatGPT atau Canva AI</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">2</div>
              <h4 className="font-semibold mb-1">Proyek Percontohan</h4>
              <p className="text-sm text-white text-opacity-80">Test dengan satu mata pelajaran</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">3</div>
              <h4 className="font-semibold mb-1">Ukur Hasil</h4>
              <p className="text-sm text-white text-opacity-80">Analisis keterlibatan dan hasil</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">4</div>
              <h4 className="font-semibold mb-1">Perluas</h4>
              <p className="text-sm text-white text-opacity-80">Kembangkan ke seluruh kurikulum</p>
            </div>
          </div>
        </section>
      </div>

      {/* Back to Top */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
            >
              <ArrowUp className="h-5 w-5 mr-2" />
              Kembali ke Atas
            </button>
            
            {setCurrentPage && (
              <button
                onClick={() => setCurrentPage('home')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
              >
                Kembali ke Beranda
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationPage;