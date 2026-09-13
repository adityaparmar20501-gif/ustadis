import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10 border-t border-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-widest uppercase mb-2">Ustadi's</h3>
            <p className="text-secondary/60 text-sm mb-6">Veg Restaurant</p>
            <p className="text-secondary/70 text-sm leading-relaxed mb-6">
              Trishul Food Park,<br/>
              Opp. Krupal Heritage,<br/>
              Makarba, Ahmedabad,<br/>
              Gujarat 380051
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors text-secondary/70">
                <span className="sr-only">Instagram</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors text-secondary/70">
                <span className="sr-only">Facebook</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Reviews', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-secondary/70 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold">Features</h4>
            <ul className="space-y-3">
              <li className="text-secondary/70 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                100% Vegetarian
              </li>
              <li className="text-secondary/70 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Family Restaurant
              </li>
              <li className="text-secondary/70 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Outdoor Seating
              </li>
              <li className="text-secondary/70 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Online Ordering
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold">Google Rating</h4>
            <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold font-serif">4.8</span>
                <div className="flex">
                   {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-4 h-4 ${star === 5 ? 'text-gold/50 fill-gold/50' : 'text-gold fill-gold'}`} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  ))}
                </div>
              </div>
              <p className="text-xs text-secondary/60">Based on 66 authentic reviews</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/50">
          <p>&copy; {new Date().getFullYear()} Ustadi's Veg Restaurant. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
