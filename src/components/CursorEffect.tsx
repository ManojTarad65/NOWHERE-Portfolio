
import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-hover')) {
        setHoveredElement(target.textContent || '');
      }
    };

    const handleMouseLeave = () => {
      setHoveredElement(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: hoveredElement ? 'scale(3)' : 'scale(1)',
        }}
      />
      
      {/* Large Circle Effect */}
      {hoveredElement && (
        <div 
          className="fixed pointer-events-none z-40 transition-all duration-300"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
          }}
        >
          <div className="w-48 h-48 border-2 border-blue-400/30 rounded-full animate-pulse bg-blue-400/5 backdrop-blur-sm flex items-center justify-center">
            <span className="text-blue-400 font-semibold text-sm text-center">
              {hoveredElement}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CursorEffect;
