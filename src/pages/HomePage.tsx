import React from 'react';
import { ArrowRight, Sparkles, Zap, Rocket, Award, Lightbulb, Brain, TrendingUp, BookOpen } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <header className="relative bg-white shadow-sm">
        <div className="w-full max-w-7xl mx-auto">
          <img 
            src="/images/banner-gamifikasi.png" 
            alt="Banner Gamifikasi untuk Madrasah" 
            className="w-full h-auto max-h-96 object-cover shadow-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop";
              target.alt = "Gamifikasi untuk Pembelajaran Madrasah";
            }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <Sparkles className="h-16 w-16 text-cyan-500 mx-auto mb-4 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Smart Play</span>
            <span className="text-gray-800">, </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Smart Learn</span>
            <span className="text-gray-800">!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto font-medium">
            Panduan Mudah Menggunakan Game untuk Belajar yang Lebih Seru di Madrasah
          </p>
          <button
            onClick={() => setCurrentPage('theory')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-2xl hover:shadow-cyan-500/50"
          >
            <Rocket className="mr-3 h-6 w-6" />
            Mulai Belajar Sekarang
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Apa itu Gamifikasi?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Gamifikasi adalah cara membuat belajar jadi seperti bermain game. 
            Kita pakai poin, lencana, ranking, dan tantangan untuk membuat siswa lebih semangat belajar. 
            Jadi belajar tidak membosankan, tapi seru seperti main game!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-cyan-100">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Menarik</h3>
              <p className="text-gray-600 leading-relaxed">Belajar jadi seru dan tidak membosankan</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-purple-100">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Memotivasi</h3>
              <p className="text-gray-600 leading-relaxed">Siswa jadi lebih semangat dan mau belajar</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Efektif</h3>
              <p className="text-gray-600 leading-relaxed">Nilai siswa jadi lebih bagus dan ingat lebih lama</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pelajari Semua Tentang Gamifikasi
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => setCurrentPage('theory')}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-400"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Apa itu Gamifikasi?</h3>
              <p className="text-sm text-gray-600">Kenali dasar-dasar gamifikasi dengan mudah</p>
            </button>

            <button
              onClick={() => setCurrentPage('platforms')}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-400"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Aplikasi Game Belajar</h3>
              <p className="text-sm text-gray-600">Kenali aplikasi terbaik untuk belajar sambil bermain</p>
            </button>

            <button
              onClick={() => setCurrentPage('benefits')}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-400"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Manfaat</h3>
              <p className="text-sm text-gray-600">Apa saja keuntungan menggunakan gamifikasi?</p>
            </button>

            <button
              onClick={() => setCurrentPage('implementation')}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-400"
            >
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Cara Menerapkan</h3>
              <p className="text-sm text-gray-600">Langkah mudah menerapkan gamifikasi di kelas</p>
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setCurrentPage('ai-integration')}
              className="group bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 max-w-md w-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="relative">
                <Brain className="h-14 w-14 mb-4 mx-auto animate-pulse" />
                <h3 className="text-xl font-bold mb-2">AI & Gamifikasi</h3>
                <p className="text-sm opacity-95">Gunakan AI untuk membuat belajar lebih pintar dan personal</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Flipbook Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              📖 Buku Digital Panduan Lengkap
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Baca panduan lengkap dalam bentuk buku digital yang menarik
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: '75%', height: 0 }}>
              <iframe
                src="https://simplebooklet.com/btrancanganaktualisasi"
                className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                title="Rancangan Aktualisasi Flipbook"
                allowFullScreen
              />
            </div>
            
            <div className="mt-6 text-center">
              <a
                href="https://simplebooklet.com/btrancanganaktualisasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Buka Flipbook di Tab Baru
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;