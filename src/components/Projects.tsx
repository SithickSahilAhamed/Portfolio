import React from 'react';
import { ExternalLink, Github, Building2, Rocket, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Jafi Associates',
      description: 'A comprehensive auditing company website built from scratch to showcase professional services and facilitate customer engagement. Features a modern, responsive design with service portfolio and integrated contact functionality.',
      technologies: ['HTML', 'CSS', 'Tailwind CSS'],
      features: [
        'Professional service showcase',
        'Customer contact functionality', 
        'Responsive design',
        'Modern UI/UX'
      ],
      liveUrl: 'https://jafiassociates.netlify.app/',
      githubUrl: 'https://github.com/SithickSahilAhamed/JafiAssociates',
      icon: <Building2 size={48} />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      features: [
        'User authentication',
        'Shopping cart functionality',
        'Payment integration',
        'Admin dashboard'
      ],
      status: 'Coming Soon',
      icon: <Rocket size={48} />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard built with Angular and D3.js for data visualization and analytics. Includes real-time data processing and customizable chart components.',
      technologies: ['Angular', 'D3.js', 'TypeScript'],
      features: [
        'Real-time data processing',
        'Interactive charts',
        'Customizable components',
        'Analytics insights'
      ],
      status: 'In Development',
      icon: <BarChart3 size={48} />,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Featured Projects
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                {project.status && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.liveUrl || project.githubUrl ? (
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <Github size={16} className="group-hover:scale-110 transition-transform" />
                        GitHub
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                    <span className="text-gray-600 font-medium">{project.status}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;