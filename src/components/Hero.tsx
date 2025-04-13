
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("relative overflow-hidden py-20 bg-gradient-to-b from-ocean-light to-ocean", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-ocean-dark animate-wave opacity-30"></div>
        <div className="absolute bottom-5 left-20 w-full h-16 bg-ocean-dark animate-wave opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-heading mb-4 text-white drop-shadow-lg">
              The Invisible Threat: <span className="text-plastic-dark">Microplastics</span>
            </h1>
            <p className="text-xl font-anime text-white mb-8">
              Exploring how tiny plastic particles are invading our oceans, bodies, and future - through the lens of anime and memes!
            </p>
            <div className="flex gap-4">
              <a href="#about" className="bg-plastic hover:bg-plastic-dark text-white font-bold font-anime py-3 px-6 rounded-lg transition-colors duration-300 comic-border transform hover:-translate-y-1 hover:scale-105">
                Learn More
              </a>
              <a href="#solutions" className="bg-white text-ocean-dark hover:bg-gray-100 font-bold font-anime py-3 px-6 rounded-lg transition-colors duration-300 comic-border transform hover:-translate-y-1 hover:scale-105">
                Take Action
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-md comic-border rounded-xl overflow-hidden bg-white p-3 rotate-3">
            <img 
              src="https://i.imgur.com/DdPUhAL.png" 
              alt="Anime character looking worried about plastic pollution" 
              className="w-full rounded-lg"
            />
            <p className="text-center italic text-sm mt-2 font-anime">
              "The ocean called... it needs our help!"
            </p>
          </div>
        </div>
        
        {/* Floating plastic elements */}
        <div className="absolute top-20 right-10 plastic-floating">
          <div className="bg-plastic-light p-2 rounded-full w-12 h-12 opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 plastic-floating" style={{ animationDelay: '1s' }}>
          <div className="bg-plastic p-2 rounded-full w-8 h-8 opacity-40"></div>
        </div>
        <div className="absolute top-40 left-1/4 plastic-floating" style={{ animationDelay: '2s' }}>
          <div className="bg-plastic-dark p-2 rounded-full w-6 h-6 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
