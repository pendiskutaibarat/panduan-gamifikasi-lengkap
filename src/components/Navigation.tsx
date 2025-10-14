import React from 'react';
import { Menu, Home, Lightbulb, Zap, Award, Rocket, Sparkles, Brain, X, Gamepad2 } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'theory', label: 'Apa itu Gamifikasi?', icon: Lightbulb },
    { id: 'platforms', label: 'Aplikasi Game Belajar', icon: Zap },
    { id: 'benefits', label: 'Manfaat', icon: Award },
    { id: 'implementation', label: 'Cara Menerapkan', icon: Rocket },
    { id: 'ai-integration', label: 'AI & Gamifikasi', icon: Brain },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => setCurrentPage('home')} className="flex items-center group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-xl mr-3 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Panduan Gamifikasi</span>
              <span className="text-xs text-gray-600 font-medium">Untuk Guru Madrasah</span>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 hover:from-cyan-100 hover:to-blue-100 focus:outline-none transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;