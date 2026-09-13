'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

// Complete menu data from user request
const menuData = [
  {
    category: 'Main Course',
    items: [
      { name: 'Mutter Paneer', price: '245.00' },
      { name: 'Paneer Bhurji', price: '245.00' },
      { name: 'Paneer Basanda', price: '350.00' },
      { name: 'Divani Handi', price: '260.00' },
      { name: 'Paneer Do Payaja', price: '260.00' },
      { name: 'Paneer Butter Masala', price: '290.00', desc: 'Soft paneer cooked in a buttery masala gravy, perfect with naan or rice.' },
      { name: 'Veg Egg Curry', price: '329.00' },
      { name: 'Palak Paneer', price: '265.00' },
      { name: 'Dal Fry', price: '130.00' },
      { name: 'Paneer Chingari', price: '280.00' },
      { name: 'Navratan Corma', price: '320.00' },
      { name: 'Anguri Kofta', price: '345.00' },
      { name: 'Mix Veg', price: '155.00' },
    ]
  },
  {
    category: 'Biryani & Rice',
    items: [
      { name: 'Jeera Rice', price: '120.00' },
      { name: 'Plain Rice', price: '99.00' },
      { name: 'Veg Biryani', price: '190.00' },
      { name: 'Dal Khichdi', price: '169.00', desc: 'A homely, comforting rice and dal meal, perfect for a simple and filling bite.' },
    ]
  },
  {
    category: 'Chole Bhature',
    items: [
      { name: 'Chole Bhature', price: '149.00' },
      { name: 'Chole Extra', price: '70.00' },
      { name: 'Bhature Extra (1)', price: '40.00', desc: '1 piece Bhatura' },
    ]
  },
  {
    category: 'Roti & Naan',
    items: [
      { name: 'Tandoori Roti', price: '15.00', desc: 'Soft, warm tandoori roti made fresh, perfect to pair with curries or dal.' },
      { name: 'Garlic Naan', price: '70.00' },
      { name: 'Cheese Naan', price: '95.00' },
      { name: 'Plain Naan', price: '50.00' },
      { name: 'Tandoori Kulcha', price: '40.00' },
    ]
  },
  {
    category: 'Kababs & Seekh',
    items: [
      { name: 'Ustadis Special Kabab', price: '449.00' },
      { name: 'Veg Gloffy Seekh Kabab', price: '289.00' },
      { name: 'Sweet Corn Kabab', price: '279.00' },
      { name: 'Cheese Seekh Kabab', price: '399.00' },
      { name: 'Dahi Ke Shole', price: '279.00' },
      { name: 'Paneer Ke Shole', price: '329.00' },
      { name: 'Multani Mashroom', price: '260.00' },
      { name: 'Veg Seekh Kabab', price: '260.00' },
      { name: 'Hara Bhara Kabab', price: '260.00' },
      { name: 'Dahi Ke Kabab', price: '319.00' },
      { name: 'Afghani Seekh Kabab', price: '380.00' },
    ]
  },
  {
    category: 'Paneer & Veg Tikka',
    items: [
      { name: 'Sizzling Paneer Tikka', price: '380.00' },
      { name: 'Paneer Tikka', price: '260.00' },
      { name: 'Paneer Cheese Staffing Tikka', price: '320.00' },
      { name: 'Paneer Bhuna Tikka', price: '289.00' },
      { name: 'Pudina Paneer Tikka', price: '260.00' },
      { name: 'Achari Paneer Tikka', price: '260.00' },
      { name: 'Makhmali Mashroom Tikka', price: '289.00' },
      { name: 'Paneer Banjara Tikka', price: '279.00' },
      { name: 'Paneer Reshmi Tikka', price: '299.00' },
      { name: 'Pahadi Paneer Tikka', price: '260.00' },
      { name: 'Paneer Angara Tikka', price: '350.00' },
      { name: 'Lasooni Paneer Tikka', price: '330.00' },
      { name: 'Gajab Malai Tikka', price: '289.00' },
      { name: 'Mushroom Tikka', price: '250.00' },
      { name: 'Kashmiri Paneer Tikka', price: '289.00' },
    ]
  },
  {
    category: 'Veg Combos',
    items: [
      { name: 'Combo-1', price: '160.00', desc: '(2pc Tandoori Roti)(mix veg)(salad)(papad)(dessert)' },
      { name: 'Combo-2', price: '199.00', desc: '(3pc tandoori roti)(veg kolapuri / paneer masala)(jeera rice)(papad)(salad)(dessert)' },
      { name: 'Combo-3', price: '249.00', desc: '(1pc tandoori roti)(paneer chingari)(mix veg)(2pc seekh kabab)(dal fry)(jeera rice)(papad)(salad)(dessert)' },
    ]
  },
  {
    category: 'Special Dishes',
    items: [
      { name: 'Ustadis Veg Platter', price: '649.00' },
      { name: 'Pepper Cheese Corn Tikki', price: '299.00' },
      { name: 'Veg Burrata', price: '399.00' },
      { name: 'Veg Bullet', price: '380.00' },
    ]
  },
  {
    category: 'Papad & Salad',
    items: [
      { name: 'Roasted Papad', price: '15.00' },
      { name: 'Veg Raita', price: '149.00' },
      { name: 'Fry Papad', price: '20.00' },
    ]
  }
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const currentCategoryData = menuData.find(cat => cat.category === activeCategory);

  return (
    <section className="py-24 md:py-32 bg-secondary" id="menu">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent uppercase tracking-widest text-sm font-bold mb-4">Culinary Delights</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Explore Our Menu</h2>
          <p className="text-primary/70">From traditional curries to sizzling tikkas, every dish is prepared with authentic spices and pure vegetarian ingredients.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              suppressHydrationWarning
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeCategory === cat.category 
                  ? 'bg-accent text-secondary shadow-md scale-105' 
                  : 'bg-primary/5 text-primary hover:bg-primary/10'
              }`}
              data-cursor-text="SELECT"
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-primary/5 max-w-5xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {currentCategoryData?.items.map((item, index) => (
                <div key={index} className="group relative flex flex-col justify-center py-2" data-cursor-text="TASTY">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary flex items-center gap-3">
                      <span className="w-4 h-4 rounded border-[1.5px] border-green-600 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      </span>
                      {item.name}
                    </h3>
                    <div className="flex-1 border-b-2 border-dotted border-primary/30 mx-4 relative top-[-6px] transition-colors group-hover:border-gold/50"></div>
                    <span className="font-bold text-xl md:text-2xl text-primary">₹{item.price}</span>
                  </div>
                  {item.desc && (
                    <p className="text-base text-primary/80 pl-7 pr-12 leading-relaxed font-medium">{item.desc}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" size="lg" href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer">
            Order on Swiggy
          </Button>
        </div>
      </div>
    </section>
  );
}
