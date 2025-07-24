import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="relative inline-block mb-4 text-4xl font-bold text-gray-900">
            Education
            <div className="absolute w-20 h-1 transform -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center min-h-[200px] md:w-1/3">
                <div className="text-center text-white">
                  <div className="inline-block p-4 mb-4 transition-transform duration-300 rounded-full bg-white/20 group-hover:scale-110">
                    <GraduationCap size={48} />
                  </div>
                  <div className="text-2xl font-bold">B.Tech</div>
                  <div className="text-white/90">2023-2027</div>
                </div>
              </div>
              
              <div className="flex-1 p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      Bachelor of Technology
                    </h3>
                    <h4 className="mb-4 text-xl font-semibold text-blue-600">
                      Information Technology
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <MapPin size={20} className="mr-3 text-blue-600" />
                      <span className="font-medium">Agni College of Technology, Chennai</span>
                    </div>
                    
                    <div className="flex items-center font-semibold text-orange-600">
                      <Calendar size={20} className="mr-3" />
                      <span>Currently in 3rd Year</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="leading-relaxed text-gray-700">
                      Pursuing comprehensive studies in Information Technology with focus on software development, 
                      data structures, algorithms, and modern web technologies. Actively engaged in practical 
                      projects and continuous learning to bridge the gap between academic knowledge and 
                      industry requirements.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {['Software Development', 'Data Structures', 'Algorithms', 'Web Technologies', 'Database Management'].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
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