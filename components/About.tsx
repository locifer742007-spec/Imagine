import React from 'react';
import { Reveal } from './Reveal';

const sections = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    name: "Strategic Planning",
    role: "Core Service",
    quote: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
    title: "Communicate & Gather Feedback",
    desc: "Effective communication is the cornerstone of our strategy. We establish clear loops of feedback to ensure we are always aligned with your goals. We listen, adapt, and execute."
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    name: "Data Analytics",
    role: "Growth Engine",
    quote: "In God we trust. All others must bring data.",
    title: "Analyze & Optimize",
    desc: "We don't just guess; we use data. Our analytical approach ensures every dollar you spend yields the maximum return on investment. Real-time dashboards keep you in the loop."
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    name: "Global Scaling",
    role: "Expansion",
    quote: "Growth is never by mere chance; it is the result of forces working together.",
    title: "Scale & Grow",
    desc: "Once we find the winning formula, we help you scale aggressively but sustainably. We ensure your infrastructure and brand can handle the growth without breaking."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <Reveal direction={index % 2 === 1 ? 'right' : 'left'}>
                <div className="relative">
                    <div className={`absolute top-0 ${index % 2 === 0 ? '-left-4' : '-right-4'} w-full h-full border-2 border-primary/20 rounded-2xl transform translate-y-4`}></div>
                    <img 
                        src={section.image} 
                        alt={section.title} 
                        className="rounded-2xl shadow-2xl w-full object-cover h-[400px] z-10 relative"
                    />
                    {/* Floating Card */}
                    <div className={`absolute -bottom-8 ${index % 2 === 1 ? '-left-8' : '-right-8'} w-72 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block z-20`}>
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-primary font-bold">
                                {section.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-secondary text-sm">{section.name}</h4>
                                <p className="text-xs text-primary font-medium">{section.role}</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 italic leading-relaxed">"{section.quote}"</p>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="w-12 h-1 bg-primary mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">{section.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">{section.desc}</p>
                <div className="space-y-4">
                    {['Strategic Planning', 'Execution Excellence', 'Result Driven'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm group-hover/item:bg-green-500 group-hover/item:text-white transition-colors">✓</div>
                            <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};