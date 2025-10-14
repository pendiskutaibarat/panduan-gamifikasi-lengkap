import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TheoryPage from './pages/TheoryPage';
import PlatformsPage from './pages/PlatformsPage';
import BenefitsPage from './pages/BenefitsPage';
import ImplementationPage from './pages/ImplementationPage';
import AIIntegrationPage from './pages/AIIntegrationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={handlePageChange} />;
      case 'theory':
        return <TheoryPage setCurrentPage={handlePageChange} />;
      case 'platforms':
        return <PlatformsPage setCurrentPage={handlePageChange} />;
      case 'benefits':
        return <BenefitsPage setCurrentPage={handlePageChange} />;
      case 'implementation':
        return <ImplementationPage setCurrentPage={handlePageChange} />;
      case 'ai-integration':
        return <AIIntegrationPage setCurrentPage={handlePageChange} />;
      default:
        return <HomePage setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
      {renderPage()}
      
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-2xl font-black mb-3">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Panduan Gamifikasi</span>
            <span className="text-gray-300"> untuk Madrasah</span>
          </h3>
          <p className="text-xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Smart Play</span>
            <span className="text-gray-400">, </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Smart Learn</span>
            <span className="text-gray-400">!</span>
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Dikembangkan untuk meningkatkan kualitas pembelajaran di madrasah melalui teknologi gamifikasi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;