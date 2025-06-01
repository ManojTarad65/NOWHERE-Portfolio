
import React from 'react';
import { Code, Palette, Globe,  } from 'lucide-react';
import { FaGithubAlt } from  "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, APIs ,Express.js, MongoDB, Next.js, Firebase",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Figma, Canva",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaGithubAlt className="w-8 h-8" />,
      title: "Version Control",
      description: "Git, GitHub",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          I'm a Computer Science student with hands-on experience in frontend web development. Proficient in JavaScript, TypeScript, React, Next.js, Tailwind CSS, and Node.js, I'm
passionate about creating clean, user-friendly web applications. While I have a strong
foundation in frontend development, I'm actively learning backend technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-4">
              Started as a curious student exploring the world of code, I've evolved into a 
              full-stack developer who loves crafting exceptional user experiences. My journey 
              has been filled with exciting challenges and continuous learning.
            </p>
            <p className="text-gray-300 mb-6">
              I believe in clean code, intuitive design, and the power of technology to solve 
              real-world problems. When I'm not coding, you'll find me exploring new technologies 
              or contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Firebase'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  
                <img src="/myPic.jpeg" alt="" className="w-60 h-60 rounded-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{skill.title}</h4>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
