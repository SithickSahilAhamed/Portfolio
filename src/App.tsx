import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add custom animations and styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes float-delayed {
        0%, 100% { transform: translateY(-10px); }
        50% { transform: translateY(10px); }
      }
      
      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
      }
      
      .animation-delay-200 {
        animation-delay: 200ms;
      }
      
      .animation-delay-400 {
        animation-delay: 400ms;
      }
      
      .animation-delay-600 {
        animation-delay: 600ms;
      }
      
      .animation-delay-800 {
        animation-delay: 800ms;
      }
      
      .animation-delay-1000 {
        animation-delay: 1000ms;
      }
      
      .animate-shimmer {
        animation: shimmer 2s ease-in-out;
      }
      
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        overflow-x: hidden;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;