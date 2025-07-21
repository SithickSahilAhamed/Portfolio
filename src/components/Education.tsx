import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Education
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center min-h-[200px] md:w-1/3">
                <div className="text-center text-white">
                  <div className="bg-white/20 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={48} />
                  </div>
                  <div className="text-2xl font-bold">B.Tech</div>
                  <div className="text-white/90">2022-2026</div>
                </div>
              </div>
              
              <div className="flex-1 p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Bachelor of Technology
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      Information Technology
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <MapPin size={20} className="mr-3 text-blue-600" />
                      <span className="font-medium">Agni College of Technology, Chennai</span>
                    </div>
                    
                    <div className="flex items-center text-orange-600 font-semibold">
                      <Calendar size={20} className="mr-3" />
                      <span>Currently in 3rd Year</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      Pursuing comprehensive studies in Information Technology with focus on software development, 
                      data structures, algorithms, and modern web technologies. Actively engaged in practical 
                      projects and continuous learning to bridge the gap between academic knowledge and 
                      industry requirements.
                    </p>
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    {['Software Development', 'Data Structures', 'Algorithms', 'Web Technologies', 'Database Management'].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;