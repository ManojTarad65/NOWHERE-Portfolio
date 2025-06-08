
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCVDownload = () => {
    // This would typically link to your actual CV file
    const cvUrl = '/Manoj Tarad CV.pdf';
    // For now, it shows an alert - replace with actual CV download
    window.open(cvUrl, '_blank');

  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-xl">My</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl opacity-20 blur-md"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
               Portfolio
              </h1>
              <p className="text-xs text-gray-400 font-medium"></p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                  activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></div>
                )}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'group-hover:w-3/4'
                }`}></div>
              </button>
            ))}
            
            {/* CV Download Button */}
            <button
              onClick={handleCVDownload}

              className="ml-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={handleCVDownload}
              className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-800/50 mt-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
