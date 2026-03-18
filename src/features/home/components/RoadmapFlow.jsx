import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RoadmapFlow() {
  const steps = [
    { label: "Choose your path", color: "#4285F4" },
    { label: "Learn visually", color: "#34A853" },
    { label: "Get AI support", color: "#FBBC04" },
    { label: "Achieve success", color: "#EA4335" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Flow Steps */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                    <span className="text-base font-medium text-gray-900">{step.label}</span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, proven path to mastery — used by thousands of successful learners across India
          </p>
        </motion.div>
      </div>
    </section>
  );
}