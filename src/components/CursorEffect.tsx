
import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-hover')) {
        setHoveredElement(target.textContent || target.getAttribute('aria-label') || 'Interactive Element');
      }
    };

    const handleMouseLeave = () => {
      setHoveredElement(null);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        className="fixed w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `scale(${isClicking ? 1.5 : hoveredElement ? 0.5 : 1})`,
        }}
      />
      
      {/* Outer Cursor Ring */}
      <div 
        className="fixed w-8 h-8 border-2 border-blue-400/50 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${hoveredElement ? 4 : isClicking ? 0.8 : 1})`,
          opacity: hoveredElement ? 0.8 : 0.6,
        }}
      />
      
      {/* Large Interactive Circle */}
      {hoveredElement && (
        <div 
          className="fixed pointer-events-none z-30 transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 120,
            top: mousePosition.y - 120,
          }}
        >
          <div className="w-60 h-60 border-2 border-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full animate-pulse bg-gradient-to-r from-blue-400/5 to-purple-500/5 backdrop-blur-lg flex items-center justify-center relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 animate-spin" style={{ animationDuration: '8s' }} />
            
            {/* Text content */}
            <div className="relative z-10 text-center">
              <span className="text-white font-bold text-lg tracking-wider drop-shadow-lg">
                {hoveredElement}
              </span>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-2 animate-pulse" />
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-8 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="absolute top-12 right-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-8 left-12 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-4 right-8 w-1 h-1 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CursorEffect;
