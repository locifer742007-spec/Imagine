import React from 'react';
import { Reveal } from './Reveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="relative text-white pt-24 pb-12 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Office background" 
            className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-slate-900/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Info */}
            <Reveal>
                <div>
                    <span className="text-primary font-bold tracking-wider uppercase mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk About Your Project</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-md">
                        Ready to take your business to the next level? Fill out the form or reach out directly. We usually respond within 24 hours.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary shrink-0 border border-white/10">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email Us</h4>
                                <p className="text-slate-400">hello@imagine.agency</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary shrink-0 border border-white/10">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Call Us</h4>
                                <p className="text-slate-400">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary shrink-0 border border-white/10">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Visit Us</h4>
                                <p className="text-slate-400">123 Innovation Dr, Tech City, TC 90210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="left" delay={0.2}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-800">
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-600">
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Career Opportunity</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </Reveal>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>Copyright © 2025 Imagine Agency. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};