import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Mission } from './components/Mission';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Mission />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}

export default App;