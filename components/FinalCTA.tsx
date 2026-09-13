'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-secondary text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6">Your Table Awaits.</h2>
          <p className="text-xl text-primary/70 mb-10 max-w-2xl mx-auto font-light">
            Come together over good vegetarian food, warm hospitality and memorable moments at Ustadi's.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" href="#reservation">
              Reserve a Table
            </Button>
            <Button variant="outline" size="lg" href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer">
              Order on Swiggy
            </Button>
            <Button variant="ghost" size="lg" href="#location">
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
