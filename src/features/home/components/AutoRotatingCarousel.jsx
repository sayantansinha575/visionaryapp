import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, Briefcase, Heart } from "lucide-react";

export default function AutoRotatingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      chip: "Students",
      icon: GraduationCap,
      title: "Master every exam with confidence",
      description: "Get 24×7 AI mentor support for JEE, NEET, UPSC prep. Learn with 3D visuals, practice unlimited tests, and track your progress daily.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&q=80",
      color: "#4285F4"
    },
    {
      chip: "Teachers",
      icon: Users,
      title: "Teach smarter with AI assistance",
      description: "Get 24×7 support for lesson planning, create engaging 3D content, track student progress, and manage assignments effortlessly.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      color: "#34A853"
    },
    {
      chip: "Professionals",
      icon: Briefcase,
      title: "Upskill without career breaks",
      description: "Access 24×7 career guidance, learn job-ready skills with interactive courses, get certified, and receive placement support.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
      color: "#FBBC04"
    },
    {
      chip: "Parents",
      icon: Heart,
      title: "Track your child's learning journey",
      description: "Monitor progress 24×7, get instant alerts on performance, communicate with teachers, and ensure your child's safe online learning.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=800&fit=crop&q=80",
      color: "#EA4335"
    }
  ];

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  // Get visible items (current - 1, current, current + 1)
  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + features.length) % features.length;
      items.push({ ...features[index], position: i });
    }
    return items;
  };

  const visibleItems = getVisibleItems();
  const activeFeature = features[activeIndex];

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Subtle Background Blur Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-[#202124] mb-4 tracking-tight"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
          >
            For everyone's success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5f6368] max-w-2xl mx-auto"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
          >
            24×7 support tailored for students, teachers, professionals & parents
          </motion.p>
        </div>

        {/* Carousel Container - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Chip Badge with Google Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `${activeFeature.color}15`,
                  color: activeFeature.color
                }}
              >
                {React.createElement(activeFeature.icon, { 
                  className: "w-4 h-4",
                  strokeWidth: 2
                })}
                {activeFeature.chip}
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                {activeFeature.title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                {activeFeature.description}
              </p>

              <button 
                className="inline-flex items-center gap-2 text-base font-medium hover:gap-4 transition-all mt-4"
                style={{ color: activeFeature.color }}
              >
                Learn more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right Side - Simplified Card Stack */}
          <div className="relative h-[400px] lg:h-[450px]">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="sync">
                {visibleItems.map((item, idx) => {
                  const position = item.position;
                  
                  // Simplified positioning
                  let scale = 1;
                  let xOffset = 0;
                  let yOffset = 0;
                  let zIndex = 1;
                  let opacity = 1;
                  let blur = 0;

                  if (position === -1) {
                    // Left background card
                    scale = 0.75;
                    xOffset = -60;
                    yOffset = 20;
                    zIndex = 1;
                    opacity = 0.4;
                    blur = 2;
                  } else if (position === 0) {
                    // Center active card
                    scale = 1;
                    xOffset = 0;
                    yOffset = 0;
                    zIndex = 3;
                    opacity = 1;
                    blur = 0;
                  } else if (position === 1) {
                    // Right background card
                    scale = 0.75;
                    xOffset = 60;
                    yOffset = 20;
                    zIndex = 1;
                    opacity = 0.4;
                    blur = 2;
                  }

                  return (
                    <motion.div
                      key={`${item.chip}-${activeIndex}-${idx}`}
                      className="absolute"
                      initial={{ scale: 0.9, x: 0, opacity: 0 }}
                      animate={{ 
                        scale,
                        x: xOffset,
                        y: yOffset,
                        opacity,
                        zIndex
                      }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      style={{ zIndex }}
                    >
                      <div 
                        className="bg-white rounded-2xl overflow-hidden shadow-xl"
                        style={{ 
                          width: '320px',
                          height: '400px',
                          filter: blur > 0 ? `blur(${blur}px)` : 'none'
                        }}
                      >
                        <div className="relative w-full h-full">
                          <img 
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          {/* White overlay for background cards */}
                          {position !== 0 && (
                            <div className="absolute inset-0 bg-white/60" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Progress Dots - Centered Below */}
        <div className="flex justify-center gap-2 mt-16">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="transition-all"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div 
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-gray-800' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
