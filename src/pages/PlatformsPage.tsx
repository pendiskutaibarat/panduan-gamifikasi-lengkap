import React from 'react';
import { Monitor, Smartphone, Globe, Users, Trophy, Star, Zap, Target, BookOpen, Award, ArrowUp, ArrowRight, Play, Settings, CheckCircle, ExternalLink } from 'lucide-react';

interface PlatformsPageProps {
  setCurrentPage?: (page: string) => void;
}

const PlatformsPage: React.FC<PlatformsPageProps> = ({ setCurrentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const platforms = [
    {
      name: 'Kahoot!',
      icon: <Monitor className="w-8 h-8" />,
      description: 'Platform kuis interaktif yang memungkinkan guru membuat kuis menyenangkan dengan sistem poin dan peringkat real-time.',
      features: ['Kuis Real-time', 'Sistem Poin', 'Papan Peringkat', 'Analitik Pembelajaran'],
      color: 'bg-purple-500',
      suitable: 'Semua Mata Pelajaran',
      website: 'https://kahoot.com',
      pricing: 'Gratis (Basic) / $7/bulan (Pro)',
      videoUrl: 'https://www.youtube.com/embed/Bl7M4keRanw',
      steps: [
        {
          phase: 'Persiapan Akun',
          duration: '5-10 menit',
          tasks: [
            'Kunjungi situs web kahoot.com',
            'Klik "Sign up for free" untuk membuat akun guru',
            'Pilih "Teacher" sebagai jenis akun',
            'Isi informasi profil lengkap dan verifikasi email',
            'Login ke dashboard Kahoot dan jelajahi fitur-fitur yang tersedia'
          ]
        },
        {
          phase: 'Membuat Kuis Pertama',
          duration: '15-30 menit',
          tasks: [
            'Klik tombol "Create" di dashboard utama',
            'Pilih "Kahoot" untuk membuat kuis baru',
            'Masukkan judul kuis yang menarik dan deskripsi singkat',
            'Tambahkan pertanyaan (minimal 2, maksimal 100 pertanyaan)',
            'Untuk setiap pertanyaan: tulis soal, tambahkan 2-4 pilihan jawaban',
            'Tentukan jawaban yang benar dan atur waktu per soal (5-120 detik)',
            'Tambahkan gambar atau video untuk memperkaya konten',
            'Preview kuis dan test semua fitur sebelum menyimpan'
          ]
        },
        {
          phase: 'Menjalankan Kuis di Kelas',
          duration: '20-45 menit',
          tasks: [
            'Buka kuis yang sudah dibuat dari library',
            'Klik "Play" dan pilih mode "Live" untuk kelas',
            'Tampilkan Game PIN di layar proyektor atau papan tulis',
            'Minta siswa buka kahoot.it di perangkat mereka',
            'Siswa masukkan Game PIN dan nama mereka',
            'Tunggu semua siswa bergabung, lalu klik "Start"',
            'Baca soal dengan lantang dan biarkan siswa menjawab',
            'Tampilkan leaderboard setelah setiap soal untuk memotivasi',
            'Rayakan pemenang di akhir kuis dan berikan apresiasi'
          ]
        },
        {
          phase: 'Analisis Hasil',
          duration: '10-15 menit',
          tasks: [
            'Setelah kuis selesai, klik "Get results"',
            'Download laporan dalam format Excel atau PDF',
            'Analisis soal mana yang paling sulit bagi siswa',
            'Identifikasi siswa yang perlu bantuan tambahan',
            'Gunakan data untuk perbaikan pembelajaran selanjutnya',
            'Simpan hasil untuk dokumentasi progress siswa'
          ]
        }
      ]
    },
    {
      name: 'Quizizz',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Platform kuis gamifikasi dengan avatar, musik, dan meme yang membuat belajar lebih menyenangkan dan engaging.',
      features: ['Avatar Kustom', 'Musik Latar', 'Meme Rewards', 'Mode Pekerjaan Rumah'],
      color: 'bg-pink-500',
      suitable: 'Review & Penilaian',
      website: 'https://quizizz.com',
      pricing: 'Gratis (Basic) / $5/bulan (Super)',
      videoUrl: 'https://www.youtube.com/embed/tDggg1sran0',
      steps: [
        {
          phase: 'Setup Akun Guru',
          duration: '5-10 menit',
          tasks: [
            'Buka quizizz.com dan klik "Sign up"',
            'Pilih "Teacher" dan isi data profil lengkap',
            'Verifikasi email dan login ke dashboard',
            'Lengkapi profil dengan foto dan informasi sekolah',
            'Jelajahi dashboard dan familiarisasi dengan fitur-fitur'
          ]
        },
        {
          phase: 'Membuat Quiz Interaktif',
          duration: '20-40 menit',
          tasks: [
            'Klik "Create" dan pilih "Quiz" dari menu',
            'Beri nama quiz dan pilih mata pelajaran yang sesuai',
            'Tambahkan pertanyaan dengan berbagai tipe (pilihan ganda, benar/salah, dll)',
            'Upload gambar atau gunakan dari library Quizizz yang tersedia',
            'Atur waktu per soal dan poin untuk setiap jawaban',
            'Tambahkan meme atau GIF untuk feedback jawaban yang menarik',
            'Preview quiz dan test semua fitur untuk memastikan berfungsi',
            'Simpan dan publish quiz untuk digunakan'
          ]
        },
        {
          phase: 'Menjalankan Live Quiz',
          duration: '15-30 menit',
          tasks: [
            'Pilih quiz dari library dan klik "Play Live"',
            'Atur pengaturan game (waktu, musik, avatar, dll)',
            'Bagikan kode game kepada siswa melalui layar atau papan',
            'Siswa join melalui joinmyquiz.com dengan kode yang diberikan',
            'Siswa pilih avatar favorit dan masukkan nama mereka',
            'Start game dan pantau progress real-time dari dashboard',
            'Gunakan fitur "Freeze" jika perlu memberikan penjelasan',
            'Tampilkan leaderboard final dan rayakan pencapaian siswa'
          ]
        },
        {
          phase: 'Mode Homework Assignment',
          duration: '10-15 menit setup',
          tasks: [
            'Pilih quiz dan klik "Assign HW" untuk tugas rumah',
            'Atur deadline dan jumlah attempt yang diizinkan',
            'Pilih kelas atau siswa spesifik yang akan mengerjakan',
            'Bagikan link atau kode homework kepada siswa',
            'Pantau progress siswa melalui dashboard teacher',
            'Review hasil dan berikan feedback individual kepada siswa'
          ]
        }
      ]
    },
    {
      name: 'Wordwall',
      icon: <Globe className="w-8 h-8" />,
      description: 'Platform untuk membuat berbagai jenis aktivitas interaktif seperti word search, crossword, matching games, dan quiz dengan template yang beragam.',
      features: ['Template Beragam', 'Word Games', 'Matching Activities', 'Printable Worksheets'],
      color: 'bg-blue-500',
      suitable: 'Bahasa & Kosakata',
      website: 'https://wordwall.net',
      pricing: 'Gratis (5 aktivitas) / $5/bulan (Unlimited)',
      videoUrl: 'https://www.youtube.com/embed/E5bwQQjmdio',
      steps: [
        {
          phase: 'Registrasi dan Setup',
          duration: '5-10 menit',
          tasks: [
            'Kunjungi wordwall.net dan klik "Sign up"',
            'Pilih "Teacher" dan isi informasi profil',
            'Verifikasi email dan login ke akun',
            'Jelajahi berbagai template yang tersedia',
            'Pahami perbedaan akun gratis dan premium'
          ]
        },
        {
          phase: 'Membuat Aktivitas Pertama',
          duration: '15-25 menit',
          tasks: [
            'Klik "Create Activity" dari dashboard utama',
            'Pilih template yang sesuai (Quiz, Match up, Word search, dll)',
            'Masukkan konten sesuai mata pelajaran (kata, pertanyaan, gambar)',
            'Customize tampilan dengan tema dan warna yang menarik',
            'Atur pengaturan game (waktu, scoring, difficulty)',
            'Preview aktivitas untuk memastikan berfungsi dengan baik',
            'Save dan publish aktivitas untuk digunakan siswa'
          ]
        },
        {
          phase: 'Berbagi dengan Siswa',
          duration: '5-10 menit',
          tasks: [
            'Copy link aktivitas dari dashboard',
            'Bagikan link melalui Google Classroom, WhatsApp, atau email',
            'Atau gunakan fitur "Assign" untuk mengirim langsung',
            'Siswa dapat mengakses tanpa perlu membuat akun',
            'Monitor aktivitas siswa melalui dashboard results',
            'Download hasil dalam format yang diinginkan'
          ]
        },
        {
          phase: 'Variasi dan Pengembangan',
          duration: '20-30 menit',
          tasks: [
            'Eksplorasi template lain seperti Crossword, Anagram',
            'Buat seri aktivitas untuk satu topik pembelajaran',
            'Gunakan fitur "Switch template" untuk variasi dari konten sama',
            'Buat worksheet printable sebagai backup offline',
            'Organize aktivitas dalam folder berdasarkan mata pelajaran',
            'Share aktivitas dengan guru lain dalam komunitas'
          ]
        }
      ]
    },
    {
      name: 'Blooket',
      icon: <Users className="w-8 h-8" />,
      description: 'Platform gamifikasi dengan berbagai mode permainan yang unik seperti Tower Defense, Battle Royale, dan Racing yang membuat pembelajaran sangat engaging.',
      features: ['Multiple Game Modes', 'Blook Collection', 'Team Collaboration', 'Homework Mode'],
      color: 'bg-emerald-500',
      suitable: 'Engagement & Motivasi',
      website: 'https://blooket.com',
      pricing: 'Gratis (Basic) / $2.99/bulan (Plus)',
      videoUrl: 'https://www.youtube.com/embed/paLBnNPWUOY',
      steps: [
        {
          phase: 'Pembuatan Akun',
          duration: '5-10 menit',
          tasks: [
            'Buka blooket.com dan klik "Sign Up"',
            'Pilih "Teacher" dan isi informasi yang diperlukan',
            'Verifikasi email dan complete profile setup',
            'Jelajahi dashboard dan pahami konsep "Blooks" (karakter)',
            'Lihat berbagai game mode yang tersedia'
          ]
        },
        {
          phase: 'Membuat Question Set',
          duration: '15-30 menit',
          tasks: [
            'Klik "Create" dan pilih "Question Set"',
            'Beri nama set dan pilih kategori mata pelajaran',
            'Tambahkan pertanyaan dengan pilihan jawaban',
            'Upload gambar untuk memperkaya konten visual',
            'Atur tingkat kesulitan dan poin untuk setiap soal',
            'Import dari platform lain atau gunakan template tersedia',
            'Save question set untuk digunakan dalam berbagai game mode'
          ]
        },
        {
          phase: 'Hosting Game Live',
          duration: '20-40 menit',
          tasks: [
            'Pilih question set dan klik "Host"',
            'Pilih game mode (Gold Quest, Battle Royale, Tower Defense, dll)',
            'Atur pengaturan game (waktu, team size, dll)',
            'Bagikan Game ID kepada siswa',
            'Siswa join melalui blooket.com/play dengan Game ID',
            'Siswa pilih Blook (karakter) favorit mereka',
            'Start game dan nikmati interaksi siswa yang antusias',
            'Pantau leaderboard dan berikan encouragement'
          ]
        },
        {
          phase: 'Homework dan Analytics',
          duration: '10-15 menit',
          tasks: [
            'Gunakan "Homework" mode untuk assignment take-home',
            'Set deadline dan attempt limits untuk siswa',
            'Monitor progress melalui dashboard analytics',
            'Review detailed results dan identify learning gaps',
            'Export data untuk dokumentasi dan parent communication',
            'Plan follow-up activities berdasarkan hasil'
          ]
        }
      ]
    }
  ];

  const implementationTips = [
    {
      title: "Mulai dengan Platform yang Familiar",
      description: "Pilih satu platform terlebih dahulu dan kuasai sebelum mencoba yang lain",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Libatkan Siswa dalam Pemilihan",
      description: "Minta feedback siswa tentang platform mana yang paling mereka sukai",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Variasikan Penggunaan",
      description: "Gunakan platform yang berbeda untuk aktivitas yang berbeda agar tidak monoton",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Manfaatkan Fitur Analytics",
      description: "Gunakan data dari platform untuk memahami progress dan kesulitan siswa",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Platform Gamifikasi Terbaik</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              4 Platform gamifikasi pilihan terbaik untuk meningkatkan keterlibatan dan hasil belajar siswa di madrasah, 
              lengkap dengan panduan penggunaan step-by-step dari awal hingga akhir
            </p>
          </div>
        </div>
      </div>

      {/* Platform Cards with Detailed Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Rekomendasi dengan Panduan Lengkap</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Setiap platform telah terbukti efektif dalam meningkatkan motivasi dan hasil belajar siswa, 
            dilengkapi dengan panduan implementasi yang mudah diikuti
          </p>
        </div>

        <div className="space-y-12">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Platform Header */}
              <div className={`${platform.color} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {platform.icon}
                    <h3 className="text-2xl font-bold ml-4">{platform.name}</h3>
                  </div>
                  <span className="text-sm font-medium bg-white bg-opacity-20 px-4 py-2 rounded-full">
                    {platform.suitable}
                  </span>
                </div>
                <p className="text-white text-opacity-90 text-lg mb-4">{platform.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Fitur Utama:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature, idx) => (
                        <span key={idx} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Informasi:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <a 
                          href={platform.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {platform.website}
                        </a>
                      </div>
                      <div className="text-white text-opacity-80">
                        💰 {platform.pricing}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Detailed Implementation Steps */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-6">📋 Panduan Implementasi Step-by-Step</h4>
                
                <div className="space-y-6">
                  {platform.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="border-l-4 border-blue-500 pl-6">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-lg font-semibold text-gray-800">{step.phase}</h5>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {step.duration}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Tutorial */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">🎥 Video Tutorial Penggunaan</h4>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={platform.videoUrl}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      title={`Tutorial ${platform.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center italic">
                    Credit and Copyright to Ruang Edukator
                  </p>
                </div>

                {/* Quick Access Button */}
                <div className="mt-6 text-center">
                  <a
                    href={platform.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${platform.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition duration-300`}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Kunjungi {platform.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Tips */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips Implementasi Sukses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Panduan praktis untuk memaksimalkan penggunaan platform gamifikasi di kelas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perbandingan Platform</h2>
            <p className="text-lg text-gray-600">Pilih platform yang paling sesuai dengan kebutuhan pembelajaran Anda</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelebihan Utama</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cocok Untuk</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Monitor className="h-5 w-5 text-purple-500 mr-2" />
                        <span className="font-medium">Kahoot!</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Real-time interaction, mudah digunakan</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Review materi, ice breaker</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Gratis - $7/bulan</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 text-pink-500 mr-2" />
                        <span className="font-medium">Quizizz</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Self-paced, homework mode, meme rewards</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Penilaian, tugas rumah</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Gratis - $5/bulan</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="font-medium">Wordwall</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Template beragam, word games, printable</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Bahasa, kosakata, matching</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Gratis (terbatas) - $5/bulan</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-emerald-500 mr-2" />
                        <span className="font-medium">Blooket</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Multiple game modes, character collection</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Engagement tinggi, motivasi</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Gratis - $2.99/bulan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Memulai Gamifikasi?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Pilih platform yang paling sesuai dengan kebutuhan Anda dan mulai transformasi pembelajaran hari ini!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('implementation')}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Panduan Implementasi
            </button>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('benefits')}
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Lihat Manfaat
            </button>
          </div>
        </div>
      </div>

      {/* Navigation and Back to Top */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={scrollToTop}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
            >
              <ArrowUp className="h-5 w-5 mr-2" />
              Kembali ke Atas
            </button>
            
            {setCurrentPage && (
              <button
                onClick={() => setCurrentPage('benefits')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
              >
                Next: Manfaat Gamifikasi
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsPage;