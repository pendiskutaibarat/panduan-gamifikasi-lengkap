import React from 'react';
import { Target, CheckSquare, AlertCircle, Users, Calendar, BookOpen, Settings, TrendingUp, ArrowUp, ArrowRight } from 'lucide-react';

interface ImplementationPageProps {
  setCurrentPage?: (page: string) => void;
}

const ImplementationPage: React.FC<ImplementationPageProps> = ({ setCurrentPage }) => {
  const implementationSteps = [
    {
      step: 1,
      title: "Persiapan dan Perencanaan",
      description: "Kenali kebutuhan sekolah dan siapkan segala sesuatunya",
      tasks: [
        "Pilih mata pelajaran yang cocok untuk dijadikan game",
        "Kenali karakter dan kebutuhan siswa",
        "Cek apakah fasilitas teknologi sudah memadai",
        "Tentukan tujuan belajar yang jelas",
        "Lihat seberapa mahir guru dan siswa menggunakan teknologi"
      ],
      timeframe: "1-2 minggu",
      icon: Target,
      color: "bg-blue-500"
    },
    {
      step: 2,
      title: "Pilih Aplikasi yang Tepat",
      description: "Pilih aplikasi gamifikasi yang cocok dengan kebutuhan sekolah",
      tasks: [
        "Bandingkan aplikasi seperti Kahoot, Quizizz, dan lainnya",
        "Sesuaikan dengan budget dan fitur yang dibutuhkan",
        "Coba dulu aplikasinya dengan materi contoh",
        "Latih guru-guru cara menggunakannya",
        "Buat akun dan atur pengaturan dasar"
      ],
      timeframe: "1 minggu",
      icon: Settings,
      color: "bg-green-500"
    },
    {
      step: 3,
      title: "Buat Konten Game Belajar",
      description: "Siapkan materi pelajaran dalam bentuk game yang menarik",
      tasks: [
        "Ubah materi pelajaran jadi bentuk permainan",
        "Buat sistem poin, lencana, dan hadiah yang menarik",
        "Rancang misi dan tantangan dari mudah ke sulit",
        "Siapkan gambar, video, dan suara pendukung",
        "Buat cara penilaian yang mudah dipahami"
      ],
      timeframe: "2-3 minggu",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      step: 4,
      title: "Uji Coba dan Perbaikan",
      description: "Coba dulu dengan satu kelas, lalu perbaiki berdasarkan masukan",
      tasks: [
        "Coba dulu di satu kelas atau satu mata pelajaran",
        "Minta pendapat dari siswa dan guru",
        "Catat masalah teknis dan kesulitan yang dialami",
        "Perbaiki konten dan cara kerja berdasarkan masukan",
        "Catat hal-hal baik dan pelajaran yang didapat"
      ],
      timeframe: "2-4 minggu",
      icon: CheckSquare,
      color: "bg-orange-500"
    },
    {
      step: 5,
      title: "Terapkan ke Seluruh Sekolah",
      description: "Gunakan di semua kelas dengan pengawasan dan dukungan",
      tasks: [
        "Mulai gunakan di semua kelas dan mata pelajaran",
        "Terus latih dan bantu guru-guru",
        "Pantau perkembangan dengan data yang ada",
        "Adakan pertemuan rutin untuk evaluasi",
        "Sediakan bantuan untuk masalah yang muncul"
      ],
      timeframe: "4-6 minggu",
      icon: Users,
      color: "bg-red-500"
    },
    {
      step: 6,
      title: "Evaluasi dan Perbaikan Terus-menerus",
      description: "Lihat hasilnya dan terus perbaiki agar semakin baik",
      tasks: [
        "Lihat data keaktifan siswa dan nilai mereka",
        "Tanya kepuasan siswa dan guru lewat survei",
        "Bandingkan hasil sebelum dan sesudah pakai gamifikasi",
        "Cari tahu apa yang masih perlu diperbaiki",
        "Rencanakan pengembangan lebih lanjut"
      ],
      timeframe: "Ongoing",
      icon: TrendingUp,
      color: "bg-indigo-500"
    }
  ];

  const challenges = [
    {
      challenge: "Guru Tidak Mau Pakai",
      solution: "Mulai dengan guru yang semangat, latih dengan baik, dan tunjukkan hasilnya",
      prevention: "Ajak guru ikut merencanakan, bantu mereka kalau ada kesulitan"
    },
    {
      challenge: "Teknologi Terbatas",
      solution: "Pilih aplikasi yang tidak butuh internet kencang, pakai HP siswa, atau sediakan perangkat bersama",
      prevention: "Cek dulu fasilitas yang ada, siapkan rencana cadangan tanpa internet"
    },
    {
      challenge: "Terlalu Fokus pada Game",
      solution: "Seimbangkan antara bermain dan belajar, beri hadiah yang bermakna",
      prevention: "Tetap ingat tujuan belajar, evaluasi rutin apakah masih efektif"
    },
    {
      challenge: "Keberlanjutan",
      solution: "Jangan bergantung pada satu orang saja, catat semua prosedurnya",
      prevention: "Latih beberapa guru jadi ahli, buat catatan lengkap cara kerjanya"
    }
  ];

  const bestPractices = [
    {
      category: "Cara Mengajar",
      practices: [
        "Pastikan game sesuai dengan tujuan belajar",
        "Mulai dari mudah, lalu semakin sulit bertahap",
        "Gabungkan kerja sama dan kompetisi",
        "Beri tahu hasilnya langsung dan membangun",
        "Sesuaikan dengan gaya belajar siswa yang berbeda"
      ]
    },
    {
      category: "Teknis",
      practices: [
        "Pastikan bisa diakses di berbagai perangkat",
        "Rutin backup data dan jaga keamanannya",
        "Pantau kinerja sistem dan koneksi",
        "Selalu update konten agar tetap relevan",
        "Test fitur baru sebelum dipakai di kelas"
      ]
    },
    {
      category: "Sosial",
      practices: [
        "Ciptakan lingkungan yang mendukung semua siswa",
        "Seimbangkan pencapaian individu dan tim",
        "Pahami tingkat kemampuan teknologi yang berbeda",
        "Jaga privasi dan keamanan data siswa",
        "Dorong siswa saling belajar dan membantu"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Target className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cara Menerapkan Gamifikasi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Langkah mudah untuk mulai menggunakan gamifikasi di madrasah Anda
          </p>
        </div>

        {/* Implementation Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">6 Langkah Mudah Menerapkan Gamifikasi</h2>
          
          <div className="space-y-8">
            {implementationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className={`${step.color} md:w-1/4 p-6 text-white flex flex-col justify-center`}>
                      <div className="text-center">
                        <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="text-2xl font-bold mb-2">Langkah {step.step}</div>
                        <div className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                          {step.timeframe}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <h4 className="font-semibold text-gray-800 mb-3">Tugas-tugas kunci:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {step.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckSquare className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Masalah yang Sering Muncul dan Solusinya</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start mb-4">
                  <AlertCircle className="h-6 w-6 text-red-500 mr-3 mt-1" />
                  <h3 className="text-lg font-semibold text-gray-800">{item.challenge}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">💡 Solusi:</h4>
                    <p className="text-sm text-gray-600">{item.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">🛡️ Pencegahan:</h4>
                    <p className="text-sm text-gray-600">{item.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Tips Sukses Menerapkan Gamifikasi</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-2">
                  {category.practices.map((practice, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span className="text-sm text-gray-600">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Jadwal Penerapan yang Realistis</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Bulan 1</h3>
                <p className="text-sm text-gray-600">Perencanaan & Persiapan</p>
              </div>
              
              <div className="text-center">
                <Settings className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Bulan 2</h3>
                <p className="text-sm text-gray-600">Setup & Buat Konten</p>
              </div>
              
              <div className="text-center">
                <CheckSquare className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Bulan 3</h3>
                <p className="text-sm text-gray-600">Uji Coba</p>
              </div>
              
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Bulan 4+</h3>
                <p className="text-sm text-gray-600">Penerapan Penuh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Measurement & Evaluation */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cara Mengukur Keberhasilan</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Tingkat Keaktifan</h3>
              <p className="text-sm text-gray-600">Seberapa aktif siswa ikut berpartisipasi</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Hasil Belajar</h3>
              <p className="text-sm text-gray-600">Nilai ujian dan hasil penilaian</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Penyelesaian Tugas</h3>
              <p className="text-sm text-gray-600">Berapa banyak tugas yang diselesaikan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Survei Kepuasan</h3>
              <p className="text-sm text-gray-600">Pendapat siswa dan guru tentang gamifikasi</p>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation and Back to Top */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end items-center">
            {setCurrentPage && (
              <button
                onClick={() => setCurrentPage('ai-integration')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
              >
                Selanjutnya: AI & Gamifikasi
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationPage;