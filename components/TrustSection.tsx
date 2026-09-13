'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Excellent service and perfect dining experience. The quality of food is outstanding.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing vegetarian options with great portion sizes. Very reasonable pricing for the quality you get.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    id: 3,
    text: "The family atmosphere is wonderful. Good quality food at a good price. Highly recommended!",
    author: "Google Reviewer",
    rating: 5,
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-primary text-secondary relative overflow-hidden" id="reviews">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Loved by <br/>Our Guests</h2>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-gold font-serif">4.8</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star === 5 ? 'text-gold/50 fill-gold/50' : 'text-gold fill-gold'}`} />
                  ))}
                </div>
                <div className="text-sm text-secondary/70 uppercase tracking-wider">Out of 5 Stars</div>
              </div>
            </div>
            
            <p className="text-secondary/60 mb-8">Based on 66 authentic Google reviews from our amazing customers in Ahmedabad.</p>
            
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium border-b border-gold/30 hover:border-gold pb-1"
              data-cursor-text="READ"
            >
              Read all Google Reviews
            </a>
          </motion.div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`glass-effect-dark p-8 rounded-2xl ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
                data-cursor-text="DRAG"
              >
                <Quote className="text-gold/20 w-10 h-10 mb-4" />
                <p className="text-lg font-serif mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium tracking-wider uppercase">{review.author}</span>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
