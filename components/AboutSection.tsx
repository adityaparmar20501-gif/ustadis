'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Users, Heart } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-secondary text-primary" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h4 variants={itemVariants} className="text-accent uppercase tracking-widest text-sm font-bold mb-4">Welcome to Ustadi's</motion.h4>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Good Food. <br/>
              Great Company. <br/>
              <span className="italic text-gold">Memorable Moments.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-primary/70 text-lg mb-8 leading-relaxed max-w-xl">
              Located in the heart of Makarba at Trishul Food Park, Ustadi's is a premium vegetarian family restaurant dedicated to bringing you the finest flavors of India. We believe that good food is the foundation of genuine hospitality.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Leaf className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">100% Vegetarian</h3>
                  <p className="text-sm text-primary/60 leading-relaxed">Pure, flavorful, and crafted with the freshest ingredients for an authentic dining experience.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Family Friendly</h3>
                  <p className="text-sm text-primary/60 leading-relaxed">A comfortable, welcoming atmosphere perfect for family gatherings and celebrations.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                alt="Elegant Indian dining setup"
                className="w-full h-full object-cover"
                data-cursor-text="VIEW"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-effect rounded-xl text-primary">
                <Heart className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-serif text-2xl mb-2">Quality & Value</h3>
                <p className="text-sm opacity-90">Enjoy generous portions of meticulously prepared dishes at reasonable prices.</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
