import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function PersonaGrid() {
  const personas = [
    {
      title: "For Students",
      tagline: "Master every exam",
      description: "JEE, NEET, UPSC prep with AI-powered visual learning",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
      color: "#4285F4",
      path: "Students",
    },
    {
      title: "For Teachers",
      tagline: "Teach smarter",
      description: "Create engaging lessons and track student progress",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
      color: "#34A853",
      path: "Teachers",
    },
    {
      title: "For Professionals",
      tagline: "Upskill faster",
      description: "Learn in-demand skills without career breaks",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
      color: "#FBBC04",
      path: "Professionals",
    },
    {
      title: "For Parents",
      tagline: "Stay connected",
      description: "Track your child's learning journey and progress",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop&q=80",
      color: "#EA4335",
      path: "Parents",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700">
              <span style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}>Who is Visionary for</span>
            </div>
          </div>

          <h2
            className="text-3xl md:text-5xl text-[#202124] mb-4 tracking-tight"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
          >
            Choose your path
          </h2>
          <p 
            className="text-lg text-[#5f6368] max-w-xl mx-auto"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
          >
            Personalized learning for every journey
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <div key={persona.title}>
              <Link to={createPageUrl(persona.path)}>
                <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-[400px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={persona.image}
                      alt={persona.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <div className="mb-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
                        style={{ backgroundColor: persona.color }}
                      >
                        {persona.tagline}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-medium text-white mb-3">
                      {persona.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 mb-6">
                      {persona.description}
                    </p>

                    <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                      <span className="font-medium">Explore</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}