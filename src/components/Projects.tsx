
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "COOKARO",
      
      description: "",
      image: "/Cookaro1.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Lovable","React"],
      githubUrl: "https://github.com/manojtarad/recipe-generator-cookaro",
      liveUrl: "https://recipe-generator-cookaro.vercel.app/"
    },
    {
      title: "",
      description: "",
      image: "",
      technologies: [""],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "",
      description: "",
      image: "",
      technologies: [""],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "",
      description: "",
      image: "",
      technologies: [""],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
