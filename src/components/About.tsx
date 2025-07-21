import React from 'react';
import { Code, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '3+', label: 'Years of Study', icon: <Code size={24} /> },
    { number: '10+', label: 'Technologies', icon: <Zap size={24} /> },
    { number: '5+', label: 'Projects', icon: <Target size={24} /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            About Me
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                I'm a passionate <strong className="text-blue-600">Full-Stack Developer</strong> and 3rd-year Information Technology student at Agni College of Technology, Chennai, with an unwavering dedication to building real-world tech solutions that create meaningful impact. My journey in technology is driven by curiosity and the desire to solve complex problems through elegant code.
              </p>
              
              <p className="text-lg leading-relaxed">
                Specializing in <strong className="text-purple-600">web development</strong> and <strong className="text-orange-600">Data Structures & Algorithms in Java</strong>, I combine strong technical fundamentals with creative problem-solving abilities. My quick learning skills and adaptability allow me to rapidly master new technologies and frameworks, ensuring I stay at the forefront of modern development practices.
              </p>
              
              <p className="text-lg leading-relaxed">
                My goal is to become a versatile full-stack developer who contributes to impactful projects that push the boundaries of what's possible with technology. I believe in writing clean, efficient code and creating user experiences that are both functional and delightful.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;