'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.5 }}
        />
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Indian Vegetarian Dining at Ustadi's"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-secondary/20 text-secondary text-sm font-medium shadow-xl"
        >
          <Star className="w-4 h-4 text-gold fill-gold drop-shadow-md" />
          <span className="drop-shadow-md">4.8 Google Rating</span>
          <span className="text-secondary/60 mx-1">&bull;</span>
          <span className="drop-shadow-md">66 Reviews</span>
          <span className="text-secondary/60 mx-1">&bull;</span>
          <span className="drop-shadow-md">₹200–₹400 per person</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium tracking-tight mb-6 leading-tight max-w-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
        >
          Vegetarian Dining, <br/>
          <span className="text-gold italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Made Memorable</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/95 text-lg md:text-xl max-w-2xl mb-10 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed"
        >
          Discover a welcoming vegetarian dining experience in Makarba, Ahmedabad, where quality food, generous portions and warm hospitality come together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button variant="secondary" size="lg" href="#reservation" className="shadow-2xl">
            Reserve a Table
          </Button>
          <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-primary shadow-2xl bg-black/20 backdrop-blur-sm" href="#menu">
            Explore Menu
          </Button>
          <Button variant="ghost" size="lg" className="text-secondary hover:bg-secondary/20 hidden sm:flex gap-2 drop-shadow-md" href="#location">
            <MapPin size={18} /> Get Directions
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-secondary/60 text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-secondary/30 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-gold absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
