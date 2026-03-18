import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Video, BarChart } from "lucide-react";

export default function InteractiveDemo() {
  const features = [
    { icon: Sparkles, label: "AI Visualizations", color: "#4285F4" },
    { icon: Brain, label: "Smart Learning", color: "#34A853" },
    { icon: Video, label: "Live Classes", color: "#FBBC04" },
    { icon: BarChart, label: "Progress Tracking", color: "#EA4335" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Feature Pills */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 px-6 py-4 rounded-full transition-all cursor-pointer"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color, strokeWidth: 2 }} />
                </div>
                <span className="text-base font-medium text-gray-900">{feature.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Section Content */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-gray-900 mb-8"
            style={{ fontWeight: 500, letterSpacing: '-0.02em' }}
          >
            All in one platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            From interactive visualizations to AI mentorship, everything you need for effective learning is in one place. No switching between apps or platforms.
          </motion.p>
        </div>
      </div>
    </section>
  );
}