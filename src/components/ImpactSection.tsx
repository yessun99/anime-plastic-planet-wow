
import React from 'react';
import { cn } from '@/lib/utils';

const ImpactSection = ({ className }: { className?: string }) => {
  return (
    <section id="impact" className={cn("py-20 bg-gradient-to-b from-ocean-light to-ocean", className)}>
      <div className="container mx-auto">
        <h2 className="text-5xl font-heading text-center mb-16 text-white drop-shadow-lg">
          The <span className="text-plastic-dark">Global Impact</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Marine Life",
              description: "Microplastics are ingested by marine animals, causing physical harm and toxic effects",
              image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
              color: "bg-ocean-dark"
            },
            {
              title: "Human Health",
              description: "We consume microplastics through food, water, and air, with potential health risks",
              image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
              color: "bg-plastic"
            },
            {
              title: "Ecosystems",
              description: "Microplastics disrupt ecosystems and can transport invasive species",
              image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
              color: "bg-ocean-dark"
            }
          ].map((impact, index) => (
            <div key={index} className="comic-border rounded-xl overflow-hidden bg-white transform hover:rotate-1 transition-transform duration-300">
              <div className={`${impact.color} h-2`}></div>
              <div className="p-6">
                <img 
                  src={impact.image} 
                  alt={impact.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4 comic-border"
                />
                <h3 className="text-2xl font-heading mb-2 text-ocean-dark">{impact.title}</h3>
                <p className="font-anime">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-xl comic-border">
          <h3 className="text-3xl font-heading mb-6 text-center text-plastic-dark">Shocking Facts</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4 items-center p-4 bg-ocean-light rounded-lg comic-border">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                alt="Mountain landscape" 
                className="w-24 h-24 object-cover rounded-full comic-border"
              />
              <div>
                <h4 className="text-xl font-heading text-ocean-dark">8 Million Tons</h4>
                <p className="font-anime text-sm">Of plastic enter our oceans every year!</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-center p-4 bg-ocean-light rounded-lg comic-border">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                alt="Forest landscape" 
                className="w-24 h-24 object-cover rounded-full comic-border"
              />
              <div>
                <h4 className="text-xl font-heading text-ocean-dark">By 2050</h4>
                <p className="font-anime text-sm">There will be more plastic than fish in the oceans by weight!</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-center p-4 bg-ocean-light rounded-lg comic-border">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Sheep herd on grassland" 
                className="w-24 h-24 object-cover rounded-full comic-border"
              />
              <div>
                <h4 className="text-xl font-heading text-ocean-dark">100,000 Marine Animals</h4>
                <p className="font-anime text-sm">Die annually from plastic entanglement!</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-center p-4 bg-ocean-light rounded-lg comic-border">
              <img 
                src="https://images.unsplash.com/photo-1439886183900-e79ec0057170" 
                alt="Deer in forest" 
                className="w-24 h-24 object-cover rounded-full comic-border"
              />
              <div>
                <h4 className="text-xl font-heading text-ocean-dark">Up to 450 Years</h4>
                <p className="font-anime text-sm">Is how long it takes for plastic to decompose!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white comic-border rounded-lg p-4 transform -rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1504893524553-b855bce32c67" 
              alt="River and rock formation" 
              className="w-full max-w-md rounded-lg"
            />
            <p className="font-anime text-sm mt-2">
              When you realize how much plastic is in the ocean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
