'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Map, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export default function LocationSection() {
  return (
    <section className="py-24 bg-secondary text-primary" id="location">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-accent uppercase tracking-widest text-sm font-bold mb-4">Find Us</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Ustadi's</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="text-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Location</h3>
                  <address className="not-italic text-primary/70 leading-relaxed">
                    <strong>Ustadi's</strong><br/>
                    Trishul Food Park,<br/>
                    Opp. Krupal Heritage,<br/>
                    Makarba, Ahmedabad,<br/>
                    Gujarat 380051, India
                  </address>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="text-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Hours</h3>
                  <p className="text-primary/70 leading-relaxed">
                    Opens at 6:00 PM<br/>
                    <span className="text-sm opacity-80">(Specific closing time details available on Google)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="text-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Contact</h3>
                  <p className="text-primary/70 leading-relaxed italic text-sm">
                    Direct phone number to be added soon. Walk-ins are always welcome!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="primary" href="https://maps.google.com/?q=Ustadi's+Trishul+Food+Park+Makarba+Ahmedabad" target="_blank" rel="noopener noreferrer">
                <Map className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] bg-primary/5 rounded-3xl overflow-hidden relative"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x395e84004975e54d%3A0x67396c9cbe71981e!2sTrishul%20food%20park!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 contrast-125"
                title="Google Maps Location"
              ></iframe>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center justify-between">
               <div>
                  <h4 className="font-bold text-primary">Ustadi's Veg Restaurant</h4>
                  <p className="text-xs text-primary/60">Trishul Food Park, Makarba</p>
               </div>
               <a href="https://maps.google.com/?q=Ustadi's+Trishul+Food+Park+Makarba+Ahmedabad" target="_blank" rel="noopener noreferrer" className="text-accent bg-accent/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                 <MapPin size={20} />
               </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
