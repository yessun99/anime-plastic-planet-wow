
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("py-10 bg-ocean-dark text-white", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading mb-4">Plastic Planet</h3>
            <p className="font-anime text-sm">
              An educational resource about microplastics, 
              presented with anime and memes to make learning about environmental issues fun!
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-heading mb-4">Resources</h3>
            <ul className="font-anime text-sm space-y-2">
              <li><a href="https://www.nationalgeographic.com/environment/article/plastic-pollution" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">National Geographic: Plastic Pollution</a></li>
              <li><a href="https://oceanservice.noaa.gov/facts/microplastics.html" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">NOAA: Microplastics</a></li>
              <li><a href="https://www.unep.org/interactive/beat-plastic-pollution/" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">UN Environment: Beat Plastic Pollution</a></li>
              <li><a href="https://www.5gyres.org/" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">5 Gyres Institute</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-heading mb-4">Take Action</h3>
            <ul className="font-anime text-sm space-y-2">
              <li><a href="https://www.oceanconservancy.org/trash-free-seas/international-coastal-cleanup/" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">Join a Beach Cleanup</a></li>
              <li><a href="https://www.plasticpollutioncoalition.org/" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">Plastic Pollution Coalition</a></li>
              <li><a href="https://www.breakfreefromplastic.org/" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">Break Free From Plastic</a></li>
              <li><a href="https://www.surfrider.org/" className="hover:text-plastic-light" target="_blank" rel="noopener noreferrer">Surfrider Foundation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ocean pt-6 text-center">
          <p className="font-anime text-sm">
            Note: All images are for educational purposes. This website is meant to raise awareness about the serious issue of microplastic pollution using familiar anime-style imagery.
          </p>
          <p className="font-anime text-sm mt-2">
            © 2025 Plastic Planet | Made with 💙 for our oceans
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
