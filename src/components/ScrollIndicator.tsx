
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll Icon */}
      {isVisible && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" />
            <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center animate-bounce">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
            </div>
            <ChevronDown className="w-4 h-4 text-blue-400 animate-bounce" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
