'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export default function ReservationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const time = formData.get('time');
    const guests = formData.get('guests');
    const special = formData.get('special') || 'None';

    const message = `*New Table Reservation Request* 🍽️\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${date}\n*Time:* ${time}\n*Guests:* ${guests}\n*Special Requests:* ${special}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918780457149?text=${encodedMessage}`;

    // Small delay for UI feedback before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const form = e.target as HTMLFormElement;
      form.reset();
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="py-24 bg-primary text-secondary relative overflow-hidden" id="reservation">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto glass-effect-dark p-8 md:p-12 rounded-3xl border border-secondary/10">
          
          <div className="text-center mb-10">
            <Calendar className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Planning Your Next Meal?</h2>
            <p className="text-secondary/70 max-w-xl mx-auto">
              Reserve your table in advance to ensure a perfect dining experience with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-secondary/80 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  suppressHydrationWarning
                  placeholder="Your full name"
                  className="w-full bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-secondary/80 ml-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required
                  suppressHydrationWarning
                  placeholder="Your phone number"
                  className="w-full bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm text-secondary/80 ml-1">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date"
                  required
                  suppressHydrationWarning
                  className="w-full bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm text-secondary/80 ml-1">Time</label>
                <select 
                  id="time" 
                  name="time"
                  required
                  defaultValue=""
                  suppressHydrationWarning
                  className="w-full bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                >
                  <option value="" disabled>Select time</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm text-secondary/80 ml-1">Guests</label>
                <select 
                  id="guests" 
                  name="guests"
                  required
                  defaultValue=""
                  suppressHydrationWarning
                  className="w-full bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                >
                  <option value="" disabled>Number of guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7+ People (Large Group)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="special" className="text-sm text-secondary/80 ml-1">Special Requests</label>
              <textarea 
                id="special" 
                name="special"
                rows={3}
                placeholder="Any special requests or dietary requirements?"
                className="w-full bg-secondary/5 border border-secondary/20 rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <Button type="submit" variant="secondary" size="lg" className="w-full md:w-auto min-w-[240px]" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : isSubmitted ? 'Request Sent Successfully' : 'Request a Reservation'}
              </Button>
              
              <p className="text-xs text-secondary/40 mt-4">
                Note: This is a reservation request. Our team will contact you to confirm.
              </p>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}
