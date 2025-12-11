import React from 'react';
import { Reveal } from './Reveal';
import { TeamMember } from '../types';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team: TeamMember[] = [
  { name: "Grey Simpson", role: "Co-Founder", bio: "Visionary leader with 15 years in digital transformation.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sarah Connor", role: "Head of Marketing", bio: "Expert in viral campaigns and brand positioning.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Ross", role: "Lead Consultant", bio: "Strategic thinker who solves complex business problems.", image: "https://randomuser.me/api/portraits/men/86.jpg" },
  { name: "Jessica Pearson", role: "Client Relations", bio: "Ensuring every client interaction is perfect.", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Harvey Specter", role: "Legal Advisor", bio: "Keeping everything compliant and secure.", image: "https://randomuser.me/api/portraits/men/64.jpg" },
  { name: "Louis Litt", role: "Financial Analyst", bio: "Master of numbers and financial forecasting.", image: "https://randomuser.me/api/portraits/men/22.jpg" },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h2 className="text-4xl font-bold text-secondary mb-4">Meet The Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                The brilliant minds behind the magic. A diverse group of professionals dedicated to your success.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <Reveal key={index} delay={index * 0.1}>
                <div className="group relative">
                    <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] mx-auto bg-slate-100">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                        />
                        {/* Overlay with socials */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                            <p className="text-white text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{member.bio}</p>
                            <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-primary rounded-full backdrop-blur-sm transition-colors"><Linkedin size={18} /></a>
                                <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-primary rounded-full backdrop-blur-sm transition-colors"><Twitter size={18} /></a>
                                <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-primary rounded-full backdrop-blur-sm transition-colors"><Mail size={18} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
                        <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};