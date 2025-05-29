
import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with React, TypeScript, and modern CSS frameworks.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Animation Libraries"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, databases, and cloud services.",
      features: ["Node.js & Express", "PostgreSQL", "MongoDB", "AWS & Supabase"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver native performance and user experience.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that users love, from wireframes to pixel-perfect designs.",
      features: ["Figma & Adobe XD", "User Research", "Prototyping", "Design Systems"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web3 Development",
      description: "Building decentralized applications and smart contracts for the future of the web.",
      features: ["Ethereum & Solidity", "DeFi Protocols", "NFT Marketplaces", "Web3 Integration"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Making your applications blazingly fast with advanced optimization techniques.",
      features: ["Code Splitting", "Lazy Loading", "CDN Setup", "Performance Monitoring"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cursor-hover">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack development services to bring your digital vision to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-hover"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
