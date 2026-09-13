'use client';

import React from 'react';
import { Menu as MenuIcon, MapPin, ShoppingBag, Calendar } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md border-t border-secondary/10 z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        
        <a href="#menu" className="flex flex-col items-center justify-center w-1/4 h-full text-secondary/70 hover:text-gold transition-colors">
          <MenuIcon size={20} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Menu</span>
        </a>
        
        <a href="#location" className="flex flex-col items-center justify-center w-1/4 h-full text-secondary/70 hover:text-gold transition-colors">
          <MapPin size={20} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Location</span>
        </a>
        
        <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-1/4 h-full text-secondary/70 hover:text-gold transition-colors relative">
          <div className="absolute -top-3 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
            <ShoppingBag size={18} />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-medium mt-6">Order</span>
        </a>
        
        <a href="#reservation" className="flex flex-col items-center justify-center w-1/4 h-full text-secondary/70 hover:text-gold transition-colors">
          <Calendar size={20} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Reserve</span>
        </a>
        
      </div>
    </div>
  );
}
