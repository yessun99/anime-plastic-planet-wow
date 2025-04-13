
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("w-full py-4 bg-ocean-dark text-white", className)}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-plastic text-ocean-dark font-heading text-2xl px-3 py-1 rounded-md rotate-3">
            Plastic
          </div>
          <div className="font-heading text-2xl -rotate-2">
            Planet
          </div>
        </div>
        <ul className="flex space-x-6 font-anime">
          <li className="hover:text-plastic transition-colors duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-plastic transition-colors duration-300">
            <a href="#impact">Impact</a>
          </li>
          <li className="hover:text-plastic transition-colors duration-300">
            <a href="#solutions">Solutions</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
