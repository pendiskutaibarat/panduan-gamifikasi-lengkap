import React from 'react';
import { Trophy, TrendingUp, Users, Brain, Heart, Target, BookOpen, Award, ArrowUp, ArrowRight } from 'lucide-react';

interface BenefitsPageProps {
  setCurrentPage?: (page: string) => void;
}

const BenefitsPage: React.FC<BenefitsPageProps> = ({ setCurrentPage }) => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Siswa Jadi Lebih Semangat Belajar",
      description: "Dengan sistem poin dan hadiah, siswa jadi lebih mau belajar tanpa dipaksa.",
      details: [
        "Dapat poin langsung setelah menjawab benar",
        "Bisa lihat kemajuan belajar sendiri",
        "Merasa bangga ketika dapat lencana",
        "Termotivasi untuk mengalahkan teman (kompetisi sehat)"
      ],
      research: "Penelitian menunjukkan 73% siswa jadi lebih semangat belajar dengan gamifikasi.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Siswa Lebih Aktif di Kelas",
      description: "Dengan game yang seru, siswa jadi lebih mau ikut berpartisipasi dalam pelajaran.",
      details: [
        "Kuis yang seru membuat semua siswa mau ikut",
        "Tugas kelompok jadi lebih menyenangkan",
        "Langsung tahu hasilnya, jadi tetap fokus",
        "Banyak variasi kegiatan, tidak bosan"
      ],
      research: "Keaktifan siswa meningkat sampai 48% dengan gamifikasi yang tepat.",
      color: "bg-blue-500"
    },
    {
      icon: Brain,
      title: "Materi Pelajaran Tidak Mudah Lupa",
      description: "Belajar sambil bermain membuat siswa lebih mudah mengingat pelajaran.",
      details: [
        "Belajar dengan aktif membuat ingatan lebih kuat",
        "Mengulang lewat game membuat hafalan lebih awet",
        "Belajar dengan contoh nyata lebih mudah diingat",
        "Pakai mata, telinga, dan tangan sekaligus"
      ],
      research: "Siswa bisa mengingat pelajaran 75% lebih lama dengan gamifikasi.",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Belajar Sesuai Kemampuan Masing-masing",
      description: "Setiap siswa bisa belajar dengan kecepatan dan cara yang cocok untuk mereka.",
      details: [
        "Soal otomatis disesuaikan dengan kemampuan siswa",
        "Ada berbagai cara belajar untuk tipe siswa yang berbeda",
        "Guru bisa pantau kemajuan setiap siswa",
        "Target belajar bisa disesuaikan untuk tiap siswa"
      ],
      research: "Belajar yang disesuaikan bisa meningkatkan nilai sampai 35%.",
      color: "bg-orange-500"
    },
    {
      icon: Heart,
      title: "Belajar Jadi Tidak Stres",
      description: "Suasana belajar yang menyenangkan membuat siswa tidak takut atau cemas saat belajar.",
      details: [
        "Belajar sambil bermain jadi tidak tegang",
        "Salah jawab tidak apa-apa, bisa coba lagi",
        "Sering dipuji jadi percaya diri",
        "Teman-teman saling mendukung"
      ],
      research: "71% siswa jadi tidak takut belajar setelah pakai gamifikasi.",
      color: "bg-pink-500"
    },
    {
      icon: Award,
      title: "Belajar Keterampilan Hidup",
      description: "Selain pelajaran sekolah, siswa juga belajar kemampuan penting untuk kehidupan sehari-hari.",
      details: [
        "Belajar memecahkan masalah lewat misi dan tantangan",
        "Belajar jadi pemimpin saat kerja kelompok",
        "Belajar berkomunikasi dengan baik",
        "Belajar mengatur waktu saat ada deadline"
      ],
      research: "95% guru melihat siswa jadi lebih terampil dalam kehidupan sehari-hari.",
      color: "bg-indigo-500"
    }
  ];

  const statisticsData = [
    { metric: "Siswa Lebih Aktif", value: "48%", description: "Siswa jadi lebih semangat ikut pelajaran" },
    { metric: "Motivasi Naik", value: "73%", description: "Siswa lebih mau belajar sendiri" },
    { metric: "Ingat Lebih Lama", value: "75%", description: "Materi pelajaran tidak mudah lupa" },
    { metric: "Ikut Diskusi", value: "67%", description: "Lebih banyak siswa yang berani bicara di kelas" },
    { metric: "Tugas Selesai", value: "85%", description: "Siswa lebih rajin mengerjakan tugas" },
    { metric: "Senang Belajar", value: "89%", description: "Siswa merasa belajar jadi menyenangkan" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Manfaat Gamifikasi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apa saja keuntungan menggunakan gamifikasi untuk belajar di madrasah?
          </p>
        </div>

        {/* Statistics Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Hasil yang Sudah Terbukti</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statisticsData.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.metric}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Benefits */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className={`${benefit.color} md:w-1/3 p-8 text-white flex flex-col justify-center`}>
                    <Icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-white text-opacity-90">{benefit.description}</p>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Detail Manfaat:</h4>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {benefit.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <BookOpen className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">📊 Data Penelitian:</h5>
                      <p className="text-sm text-gray-600 italic">{benefit.research}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits for Different Stakeholders */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Siapa Saja yang Diuntungkan?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Untuk Siswa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Untuk Siswa</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belajar jadi seru dan tidak membosankan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Jadi lebih semangat belajar sendiri
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belajar memecahkan masalah
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Jadi lebih percaya diri
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Belajar kerja sama dan komunikasi yang baik
                </li>
              </ul>
            </div>

            {/* Untuk Guru */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Untuk Guru</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Bisa lihat perkembangan setiap siswa dengan mudah
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mengatur kelas jadi lebih mudah
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mengajar jadi lebih efektif
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Pekerjaan administrasi berkurang
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Langsung tahu respon siswa
                </li>
              </ul>
            </div>

            {/* Untuk Sekolah */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Untuk Sekolah/Madrasah</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Sekolah jadi terkenal sebagai sekolah modern
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Nilai siswa secara keseluruhan jadi lebih baik
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Siswa jadi jarang bolos
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Investasi teknologi jadi menguntungkan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Unggul dibanding sekolah lain di era digital
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Siap Merasakan Manfaatnya?</h2>
          <p className="text-xl mb-6 text-white text-opacity-90">
            Mulai pakai gamifikasi di kelas dan rasakan perubahan luar biasa dalam belajar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Mulai Sekarang
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Lihat Aplikasinya
            </button>
          </div>
        </section>
      </div>

      {/* Navigation and Back to Top */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end items-center">
            {setCurrentPage && (
              <button
                onClick={() => setCurrentPage('implementation')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
              >
                Selanjutnya: Cara Menerapkan
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;