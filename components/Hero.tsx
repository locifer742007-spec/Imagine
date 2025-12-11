import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Accepting new clients for 2025
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-secondary leading-[1.1] mb-6 tracking-tight">
                Scale Your Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                    Without Limits
                </span>
                </h1>
            </Reveal>
            <Reveal delay={0.4}>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-light">
                Imagine empowers businesses with data-driven marketing strategies. We handle the complexity so you can focus on building your product.
                </p>
            </Reveal>
            <Reveal delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 group">
                        <PlayCircle className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                        Watch Demo
                    </button>
                </div>
            </Reveal>
            
            <Reveal delay={0.8}>
                <div className="mt-12 flex items-center gap-8 text-slate-400 grayscale opacity-70">
                    {/* Simple logo placeholders */}
                    <span className="text-xl font-bold">Acme.</span>
                    <span className="text-xl font-bold">Globex</span>
                    <span className="text-xl font-bold">Soylent</span>
                    <span className="text-xl font-bold">Initech</span>
                </div>
            </Reveal>
          </div>
          
          <Reveal direction="right" delay={0.4}>
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] rotate-6 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                    alt="Team collaboration" 
                    className="relative z-10 w-full rounded-[2rem] shadow-2xl border-4 border-white transform transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce [animation-duration:3s]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                            %
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Revenue Growth</p>
                            <p className="text-2xl font-bold text-secondary">+127%</p>
                        </div>
                    </div>
                </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};