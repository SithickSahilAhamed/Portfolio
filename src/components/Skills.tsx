import React, { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'Java', percentage: 88 },
        { name: 'C++', percentage: 80 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', percentage: 82 },
        { name: 'Angular', percentage: 75 },
        { name: 'Tailwind CSS', percentage: 92 },
        { name: 'Bootstrap', percentage: 88 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', percentage: 78 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'Git', percentage: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800">{skill.name}</span>
        <span className="font-bold text-blue-600">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Technical Skills
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8 text-center relative">
                {category.title}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;