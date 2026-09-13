'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-primary text-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">The Atmosphere</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Dine In Style</h2>
          <p className="text-secondary/70">Whether you are planning a quiet family dinner or a festive gathering, our spaces are designed to provide the perfect backdrop for your memorable moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          <motion.div 
            className="md:col-span-8 rounded-3xl overflow-hidden relative group h-[300px] md:h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-cursor-text="VIEW"
          >
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant interior" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-serif mb-2">Elegant Interiors</h3>
              <p className="text-secondary/80">Spacious seating for a comfortable family dining experience.</p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-4 rounded-3xl overflow-hidden relative group h-[300px] md:h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-cursor-text="VIEW"
          >
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Outdoor seating" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-serif mb-2">Outdoor Seating</h3>
              <p className="text-secondary/80 text-sm">Enjoy your meal under the open sky.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
