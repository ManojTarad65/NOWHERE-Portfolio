
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingSteps = [
    'Initializing...',
    'Loading Assets...',
    'Preparing Experience...',
    'Almost Ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1.5;
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(loadingSteps[1]);
        } else if (newProgress >= 40 && newProgress < 70) {
          setLoadingText(loadingSteps[2]);
        } else if (newProgress >= 70 && newProgress < 90) {
          setLoadingText(loadingSteps[3]);
        } else if (newProgress >= 90) {
          setLoadingText(loadingSteps[4]);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-1000 ${isComplete ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center relative z-10">
        {/* Main logo/progress circle */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer rings */}
            <div className="absolute inset-0 border-2 border-gray-800 rounded-full"></div>
            <div className="absolute inset-2 border-2 border-gray-700 rounded-full opacity-60"></div>
            
            {/* Progress ring */}
            <div 
              className="absolute inset-0 border-4 border-transparent rounded-full transition-all duration-300"
              style={{ 
                borderTopColor: '#3B82F6',
                borderRightColor: '#8B5CF6',
                borderBottomColor: '#EC4899',
                borderLeftColor: '#10B981',
                transform: `rotate(${progress * 3.6}deg)`,
              }}
            ></div>
            
            {/* Inner gradient circle */}
            <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/30">
              <div className="text-center">
                <span className="text-white font-bold text-2xl block">
                  {Math.round(progress)}
                </span>
                <span className="text-gray-400 text-xs">%</span>
              </div>
            </div>
            
            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse" />
          </div>
        </div>
        
        {/* Portfolio title with enhanced animations */}
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 relative">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>P</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>o</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>r</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>t</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>f</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>o</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>l</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>i</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>o</span>
          </h1>
          
          {/* Animated underline */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto animate-pulse" />
        </div>
        
        {/* Enhanced progress bar */}
        <div className="w-80 h-3 bg-gray-800 rounded-full mx-auto overflow-hidden relative border border-gray-700">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          
          {/* Progress bar glow */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-full blur-sm transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading text with typewriter effect */}
        <p className="text-gray-300 mt-8 text-2xl font-medium tracking-wide">
          {loadingText}
        </p>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-3 mt-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
        </div>

        {/* Completion message */}
        {isComplete && (
          <div className="mt-8 animate-fade-in">
            <p className="text-green-400 text-xl font-semibold">Experience Ready!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
