import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <span>&copy; 2025 Sithick Sahil Ahamed Z. All rights reserved.</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;