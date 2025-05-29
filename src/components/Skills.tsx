
import React, { useEffect, useRef } from 'react';
import { Code2, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 95, icon: <Code2 className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, icon: <Code2 className="w-6 h-6" />, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', level: 85, icon: <Database className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 88, icon: <Palette className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Mobile Dev', level: 80, icon: <Smartphone className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
    { name: 'Web3', level: 75, icon: <Globe className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-fill');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cursor-hover">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise across the full development spectrum with cutting-edge technologies.
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="text-white font-semibold text-lg cursor-hover">{skill.name}</span>
                </div>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className={`skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 transform origin-left scale-x-0`}
                  style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 cursor-hover">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Fast</h3>
            <p className="text-gray-400">Optimized for performance and speed</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 cursor-hover">
            <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Responsive</h3>
            <p className="text-gray-400">Works perfectly on all devices</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 cursor-hover">
            <Code2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Modern</h3>
            <p className="text-gray-400">Built with latest technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
