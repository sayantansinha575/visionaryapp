import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeatureCarousel() {
  const scrollRef = useRef(null);

  const features = [
    {
      title: "3D Visual Learning",
      description: "See molecules rotate, physics in motion, geometry in 3D",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&q=80",
      color: "#4285F4"
    },
    {
      title: "AI Mentor 24×7",
      description: "Get instant help via text, voice, or video in your language",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
      color: "#34A853"
    },
    {
      title: "Live Classes",
      description: "Interactive sessions with top teachers and peers",
      image: "https://images.unsplash.com/photo-1588072432904-76e8cb5b9c5f?w=800&h=600&fit=crop&q=80",
      color: "#FBBC04"
    },
    {
      title: "Exam Preparation",
      description: "JEE, NEET, UPSC prep with previous papers and mock tests",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
      color: "#EA4335"
    },
    {
      title: "Practice Tests",
      description: "Unlimited practice with instant AI feedback",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop&q=80",
      color: "#4285F4"
    },
    {
      title: "Progress Tracking",
      description: "Detailed analytics to improve your weak areas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      color: "#34A853"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-2" style={{ fontWeight: 500 }}>
              Everything you need to excel
            </h2>
            <p className="text-xl text-gray-600">Swipe to explore all features</p>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Cards - Google Photos Style */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] snap-start group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: feature.color }}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div 
                    className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <div 
                      className="w-5 h-5 rounded-lg"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                  </div>

                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Hint */}
        <div className="flex md:hidden justify-center mt-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex gap-1">
              {features.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
            <span>Swipe to see more</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}