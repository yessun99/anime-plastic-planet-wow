
import React from 'react';
import { cn } from '@/lib/utils';

const AboutSection = ({ className }: { className?: string }) => {
  return (
    <section id="about" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto">
        <h2 className="text-5xl font-heading text-center mb-16 text-ocean-dark">
          What Are <span className="text-plastic">Microplastics?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="comic-border rounded-xl overflow-hidden">
            <img 
              src="https://i.imgur.com/4j5pHm5.jpg" 
              alt="Anime style illustration of microplastics" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="speech-bubble mb-8">
              <h3 className="text-2xl font-heading mb-2 text-plastic-dark">Tiny Plastic Particles</h3>
              <p className="font-anime">
                Microplastics are tiny plastic particles less than 5mm in size. 
                They're everywhere! In our oceans, drinking water, food, and even the air we breathe!
              </p>
            </div>
            
            <div className="speech-bubble">
              <h3 className="text-2xl font-heading mb-2 text-plastic-dark">Where Do They Come From?</h3>
              <p className="font-anime">
                Some are deliberately manufactured (like microbeads in cosmetics), 
                while others form when larger plastic items break down in the environment.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-ocean-light p-8 rounded-xl comic-border">
          <h3 className="text-3xl font-heading mb-6 text-center text-ocean-dark">The Microplastic Life Cycle</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Creation",
                description: "Plastics are manufactured and products are used",
                image: "https://i.imgur.com/vCkxJcZ.jpg"
              },
              {
                title: "Breakdown",
                description: "Products degrade into smaller and smaller pieces",
                image: "https://i.imgur.com/EZ21kQs.jpg"
              },
              {
                title: "Dispersion",
                description: "Microplastics spread through water, air, and soil",
                image: "https://i.imgur.com/y3lrfaF.jpg"
              },
              {
                title: "Consumption",
                description: "We inadvertently consume microplastics every day",
                image: "https://i.imgur.com/rZlmyOq.jpg"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-4 rounded-lg comic-border transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h4 className="text-xl font-heading text-plastic-dark">{step.title}</h4>
                <p className="font-anime text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block comic-border rounded-lg overflow-hidden transform rotate-2">
            <img 
              src="https://i.imgur.com/qbdXRqD.jpg" 
              alt="Anime meme about microplastics" 
              className="w-full max-w-md"
            />
          </div>
          <p className="font-anime text-gray-600 mt-4 max-w-lg mx-auto">
            Did you know? An average person could be consuming about a credit card's weight of plastic every week!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
