
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
             Manoj Tarad
            </h3>
            <p className="text-gray-400 mb-4">
              Passionate developer creating amazing digital experiences with modern technologies and clean design.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/manojtarad65" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/manoj-tarad-0b779625a/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:manojtarad65@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Web Development</span></li>
              <li><span className="text-gray-400">UI/UX Design</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by Manoj Tarad © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
