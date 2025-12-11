import React from 'react';
import { CheckCircle2, Target, Zap, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

export const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
                <Reveal direction="left">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Our Mission" className="rounded-3xl shadow-2xl relative z-10" />
                    
                    <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block z-20">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                                <Heart className="w-6 h-6 fill-current" />
                            </div>
                            <div>
                                <p className="font-bold text-2xl text-secondary">4.9/5</p>
                                <p className="text-sm text-slate-500">Customer Rating</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
            <div className="w-full lg:w-1/2">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-primary mb-6 uppercase tracking-wider">
                        <Target className="w-3 h-3" /> Our Purpose
                    </div>
                    <h2 className="text-4xl font-bold text-secondary mb-6">Our Mission</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                        We strive to empower businesses with the tools and strategies they need to succeed in the digital age. Our mission is to democratize access to high-end marketing consultancy.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {[
                            {text: 'Data-driven decisions', icon: <CheckCircle2 className="w-5 h-5" />},
                            {text: 'Customer-centric', icon: <Heart className="w-5 h-5" />},
                            {text: 'Transparent reporting', icon: <Target className="w-5 h-5" />},
                            {text: 'Rapid Innovation', icon: <Zap className="w-5 h-5" />}
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-primary/30 transition-colors">
                                <div className="text-primary">{item.icon}</div>
                                <span className="text-slate-700 font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <a href="#about" className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg">
                        Read Our Story
                    </a>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};