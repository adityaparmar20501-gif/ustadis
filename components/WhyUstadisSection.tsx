'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Star, Users, Wind, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "100% Vegetarian",
    description: "Pure, authentic, and meticulously prepared vegetarian cuisine."
  },
  {
    icon: Star,
    title: "4.8★ Rated",
    description: "Consistently rated excellent by our patrons on Google."
  },
  {
    icon: Users,
    title: "Family Restaurant",
    description: "A welcoming, comfortable environment suitable for all ages."
  },
  {
    icon: Wind,
    title: "Outdoor Seating",
    description: "Options to dine inside or enjoy the fresh air outdoors."
  },
  {
    icon: Wallet,
    title: "Great Value",
    description: "Generous portions with an approximate price of ₹200–₹400 per person."
  }
];

export default function WhyUstadisSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Why Choose Ustadi's?</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-accent/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-accent group-hover:text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">{benefit.title}</h3>
              <p className="text-primary/60 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
