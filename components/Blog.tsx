import React from 'react';
import { BlogPost } from '../types';
import { Reveal } from './Reveal';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts: BlogPost[] = [
  { title: "Make Your Business More Profitable", author: "Ham Brook", date: "Jan 18, 2024", excerpt: "Learn the top strategies to increase margins without sacrificing quality in today's volatile market.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { title: "The Future of AI in SEO", author: "Sarah Connor", date: "Feb 22, 2024", excerpt: "AI is changing search forever. Here is how you can prepare your site for the next generation of algorithms.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
  { title: "Content Marketing Mastery", author: "Mike Ross", date: "Mar 10, 2024", excerpt: "Why storytelling is the most powerful tool in your marketing arsenal and how to wield it effectively.", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800" },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <Reveal width="100%">
            <h2 className="text-4xl font-bold text-secondary mb-4">Latest Insights</h2>
            <p className="text-slate-500 max-w-xl text-lg">Deep dives into marketing strategies, tech trends, and business growth.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#" className="px-6 py-2 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                View All Posts <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <Reveal key={index} delay={index * 0.1}>
                    <div className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                        <div className="overflow-hidden h-60 relative">
                            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                                News
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                                <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                            <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                Read Article <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};