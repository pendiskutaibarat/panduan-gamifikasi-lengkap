import React from 'react';
import { BookOpen, Users, Trophy, Target, Lightbulb, Brain, Heart, Zap, ArrowUp, ArrowRight } from 'lucide-react';

interface TheoryPageProps {
  setCurrentPage?: (page: string) => void;
}

const TheoryPage: React.FC<TheoryPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Apa itu Gamifikasi?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mari kenali apa itu gamifikasi dan bagaimana cara kerjanya dalam pembelajaran
          </p>
        </div>

        {/* Definisi */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Gamifikasi itu Apa Sih?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Gamifikasi adalah cara membuat kegiatan belajar jadi seperti bermain game. 
            Kita pakai hal-hal yang ada di game seperti poin, lencana, level, dan ranking 
            untuk membuat siswa lebih semangat belajar. Jadi belajar tidak membosankan lagi!
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ide ini mulai populer sekitar tahun 2010 ketika banyak aplikasi dan website 
            mulai menggunakan cara ini untuk membuat penggunanya lebih aktif.
          </p>
        </section>

        {/* Teori Dasar */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kenapa Gamifikasi Bisa Berhasil?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Brain className="h-5 w-5 text-blue-500 mr-2" />
                Kebutuhan Dasar Manusia
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manusia punya 3 kebutuhan dasar: <strong>kebebasan memilih</strong>, 
                <strong>merasa mampu</strong>, dan <strong>terhubung dengan orang lain</strong>. 
                Gamifikasi memenuhi semua ini dengan memberi pilihan, tantangan yang pas, dan interaksi dengan teman.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Heart className="h-5 w-5 text-green-500 mr-2" />
                Kondisi "Flow" atau Fokus Total
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ini adalah kondisi ketika kita sangat fokus dan menikmati apa yang sedang dikerjakan. 
                Gamifikasi membuat kondisi ini dengan memberikan tantangan yang pas - tidak terlalu mudah, 
                tidak terlalu sulit.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Zap className="h-5 w-5 text-purple-500 mr-2" />
                Sistem Reward dan Punishment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ketika kita melakukan sesuatu yang baik dan mendapat hadiah, kita akan mengulanginya lagi. 
                Gamifikasi pakai cara ini dengan memberikan <strong>poin, lencana, dan pujian</strong> 
                ketika siswa belajar dengan baik.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Lightbulb className="h-5 w-5 text-orange-500 mr-2" />
                Belajar dari Teman
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kita bisa belajar dengan melihat dan meniru teman. Gamifikasi pakai cara ini 
                dengan ranking dan kerja sama tim, jadi siswa bisa belajar dari temannya.
              </p>
            </div>
          </div>
        </section>

        {/* Elemen Gamifikasi */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bagian-Bagian Gamifikasi</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                Poin, Lencana, dan Ranking
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Poin</h4>
                  <p className="text-sm text-gray-600">Angka yang didapat siswa ketika berhasil mengerjakan sesuatu</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Lencana</h4>
                  <p className="text-sm text-gray-600">Gambar atau simbol yang didapat ketika mencapai target tertentu</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Ranking</h4>
                  <p className="text-sm text-gray-600">Daftar urutan siswa berdasarkan pencapaian mereka</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Target className="h-6 w-6 text-red-500 mr-2" />
                Level dan Misi
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Level</h4>
                  <p className="text-sm text-gray-600">Tingkatan yang naik seiring kemajuan belajar siswa</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Misi</h4>
                  <p className="text-sm text-gray-600">Tugas atau tantangan yang harus diselesaikan siswa</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Users className="h-6 w-6 text-blue-500 mr-2" />
                Bermain Bersama Teman
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Kerja Tim</h4>
                  <p className="text-sm text-gray-600">Mengerjakan tugas bersama-sama dengan teman</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Saling Memberi Pujian</h4>
                  <p className="text-sm text-gray-600">Siswa bisa memberikan apresiasi kepada temannya</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prinsip Desain */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips Membuat Gamifikasi yang Berhasil</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-2">1. Tujuan yang Jelas</h3>
                <p className="text-green-700 text-sm">Siswa harus tahu apa yang mau dicapai</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">2. Kasih Tahu Hasilnya Cepat</h3>
                <p className="text-blue-700 text-sm">Langsung beritahu siswa apakah jawabannya benar atau salah</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2">3. Tantangan Bertahap</h3>
                <p className="text-purple-700 text-sm">Mulai dari yang mudah, lalu semakin sulit sedikit demi sedikit</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-800 mb-2">4. Penghargaan Bermakna</h3>
                <p className="text-orange-700 text-sm">Hadiah yang diberikan harus yang disukai siswa</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">5. Pilihan Siswa</h3>
                <p className="text-red-700 text-sm">Biarkan siswa memilih cara belajar yang mereka suka</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-semibold text-indigo-800 mb-2">6. Bermain Bersama</h3>
                <p className="text-indigo-700 text-sm">Buat siswa bisa berinteraksi dan bekerja sama</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Evidence */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bukti dari Penelitian</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Penelitian Besar-besaran</h3>
              <p className="text-gray-600 text-sm mb-2">
                Para peneliti menemukan bahwa gamifikasi memang bisa meningkatkan semangat belajar siswa, 
                tapi hasilnya tergantung bagaimana cara menggunakannya.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Hasil di Sekolah</h3>
              <p className="text-gray-600 text-sm mb-2">
                Penelitian menunjukkan bahwa gamifikasi bisa meningkatkan keaktifan siswa sampai 48% 
                dan nilai mereka bisa naik sampai 35%.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Efek Jangka Panjang</h3>
              <p className="text-gray-600 text-sm">
                Yang bagusnya, manfaat gamifikasi bisa bertahan lama kalau diterapkan dengan cara yang benar.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation and Back to Top */}
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-end items-center">
            {setCurrentPage && (
              <button
                onClick={() => setCurrentPage('platforms')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
              >
                Selanjutnya: Aplikasi Game Belajar
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryPage;