import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials: Testimonial[] = [
  { name: "Roger Spears", role: "CEO, TechFlow", content: "Imagine helped us scale from a startup to a market leader in under two years. Their strategic input was invaluable and the ROI has been unmatched.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Kyle McDonald", role: "Founder, DesignCo", content: "The attention to detail and data-driven approach is what sets Imagine apart. They don't just guess; they analyze, execute, and deliver.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Robert Aguilar", role: "Marketing VP, BigCorp", content: "Professional, punctual, and highly effective. They delivered results that exceeded our quarterly expectations by 150%.", image: "https://randomuser.me/api/portraits/men/85.jpg" },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full border-[100px] border-white/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="relative min-h-[400px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute left-0 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hidden md:block">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hidden md:block">
            <ArrowRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-lg opacity-50 rounded-full" />
                    <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl relative z-10 object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2 z-20">
                        <Quote className="w-4 h-4 fill-current" />
                    </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>

              <p className="text-xl md:text-3xl font-light italic mb-8 leading-relaxed text-slate-200">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div>
                <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-primary font-medium">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};