import React from 'react';
import { RefreshCcw, TrendingUp, ShoppingCart, Smile, Plug, Activity, ArrowUpRight } from 'lucide-react';
import { Feature } from '../types';
import { Reveal } from './Reveal';

const features: Feature[] = [
  { icon: <Activity />, title: "Marketing Consulting", description: "Strategic guidance to navigate complex landscapes and optimize your brand's trajectory." },
  { icon: <TrendingUp />, title: "Market Analysis", description: "Deep-dive data analytics to understand competition and uncover hidden opportunities." },
  { icon: <ShoppingCart />, title: "Conversion Optimization", description: "Streamlined checkout flows and UX improvements to turn visitors into loyal buyers." },
  { icon: <RefreshCcw />, title: "Continuous Updates", description: "Agile campaign iterations ensuring your strategy evolves with the market trends." },
  { icon: <Smile />, title: "Client Satisfaction", description: "We prioritize your happiness with transparent, real-time reporting and tangible results." },
  { icon: <Plug />, title: "Seamless Integration", description: "Our proprietary tools plug directly into your existing workflow without friction." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Imagine Features</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Comprehensive solutions designed to scale your business operations and visibility in a digital-first world.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
                <div className="group h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-3 pr-8">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6 text-sm">{feature.description}</p>
                        
                        <a href="#" className="inline-flex items-center text-primary font-semibold text-sm group-hover:underline">
                            Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};