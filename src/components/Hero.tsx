import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Passionate about building innovative tech solutions that make a difference";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative flex items-center min-h-screen overflow-hidden text-white bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        {/* Animated background elements */}
        <div className="absolute rounded-full top-20 left-20 w-72 h-72 bg-white/10 blur-3xl animate-float"></div>
        <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative overflow-hidden border-2 rounded-full w-80 h-80 bg-white/20 backdrop-blur-sm border-white/30 group">
                <img
                  src="./image/Sahil1.jpg"
                  alt="Sithick Sahil Ahamed Z - Full-Stack Developer"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></div>
                <div className="absolute inset-0 pointer-events-none animate-spin-slow">
                  <div className="w-full h-full border-2 border-transparent rounded-full border-t-white/50"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-xl opacity-90 animate-fade-in-up">Hello, I'm</p>
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl animate-fade-in-up animation-delay-200">
                Sithick Sahil Ahamed Z
              </h1>
              <h2 className="text-2xl font-semibold lg:text-3xl text-white/90 animate-fade-in-up animation-delay-400">
                Full-Stack Developer & DSA Expert
              </h2>
              <p className="flex items-center justify-center text-lg opacity-80 lg:justify-start animate-fade-in-up animation-delay-600">
                <span className="mr-2">📍</span>
                Chennai, India
              </p>
            </div>
            
            <div className="min-h-[3rem] animate-fade-in-up animation-delay-800">
              <p className="text-xl text-white/90">
                {displayText}
                <span className="text-orange-300 animate-pulse">|</span>
              </p>
            </div>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up animation-delay-1000">
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 transform bg-white rounded-lg shadow-lg group hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle size={20} className="group-hover:animate-bounce" />
                Let's Connect
              </button>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="transition-colors duration-300 text-white/70 hover:text-white"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;