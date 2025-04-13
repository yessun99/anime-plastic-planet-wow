
import React from 'react';
import { cn } from '@/lib/utils';

const SolutionsSection = ({ className }: { className?: string }) => {
  return (
    <section id="solutions" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto">
        <h2 className="text-5xl font-heading text-center mb-16 text-ocean-dark">
          What Can <span className="text-plastic">We Do?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col justify-center">
            <div className="speech-bubble mb-8">
              <h3 className="text-2xl font-heading mb-2 text-plastic-dark">Individual Actions</h3>
              <ul className="font-anime list-disc pl-5 space-y-2">
                <li>Reduce single-use plastics</li>
                <li>Use reusable bags, bottles, and containers</li>
                <li>Choose natural fabric clothing over synthetic</li>
                <li>Support plastic-free and zero-waste products</li>
                <li>Properly recycle all plastic waste</li>
              </ul>
            </div>
            
            <div className="speech-bubble">
              <h3 className="text-2xl font-heading mb-2 text-plastic-dark">Community Efforts</h3>
              <ul className="font-anime list-disc pl-5 space-y-2">
                <li>Participate in beach and waterway cleanups</li>
                <li>Support legislation that reduces plastic production</li>
                <li>Educate others about microplastic pollution</li>
                <li>Encourage businesses to use sustainable packaging</li>
              </ul>
            </div>
          </div>
          
          <div className="comic-border rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed" 
              alt="Mountain landscape" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="bg-ocean-light p-8 rounded-xl comic-border mb-16">
          <h3 className="text-3xl font-heading mb-8 text-center text-ocean-dark">Be the Hero Our Planet Needs!</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Refuse",
                description: "Say no to single-use plastics and unnecessary packaging",
                image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
              },
              {
                title: "Reduce",
                description: "Minimize your overall plastic consumption when possible",
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
              },
              {
                title: "Reuse",
                description: "Use durable alternatives that can be used many times",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
              },
              {
                title: "Recycle",
                description: "Properly sort and recycle all eligible plastic waste",
                image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632"
              }
            ].map((action, index) => (
              <div key={index} className="bg-white p-6 rounded-lg comic-border transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={action.image} 
                  alt={action.title} 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 comic-border"
                />
                <h4 className="text-xl font-heading text-center text-plastic-dark mb-2">{action.title}</h4>
                <p className="font-anime text-sm text-center">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-heading mb-6 text-plastic-dark">Join the Movement!</h3>
          
          <div className="inline-block comic-border rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
              alt="Deer in natural habitat" 
              className="w-full max-w-lg"
            />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="font-anime text-lg mb-8">
              The battle against microplastics needs everyone! 
              Small changes in our daily lives can make a huge difference for our oceans and planet.
            </p>
            
            <a 
              href="https://www.plasticpollutioncoalition.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-plastic hover:bg-plastic-dark text-white font-bold font-anime py-3 px-8 rounded-lg transition-colors duration-300 comic-border inline-block transform hover:-translate-y-1 hover:scale-105"
            >
              Learn More & Take Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
