import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 py-4 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
                I
            </div>
            <a href="#" className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
              Imagine<span className="text-primary">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Features', 'Testimonials', 'Blog'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-full hover:bg-slate-50 transition-all"
              >
                {item}
              </a>
            ))}
            
            <div className="relative group px-4 py-2">
              <button className="flex items-center text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">
                About <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <a href="#team" className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">Our Team</a>
                  <a href="#mission" className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">Mission</a>
                </div>
              </div>
            </div>

            <div className="pl-4">
                <a 
                    href="#contact" 
                    className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5"
                >
                    Contact Us
                </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {['Home', 'Features', 'Team', 'Testimonials', 'Blog'].map((item) => (
             <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-primary hover:bg-indigo-50 transition-colors"
             >
                {item}
             </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-white bg-primary hover:bg-indigo-700 transition-colors shadow-md mt-4 text-center">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};