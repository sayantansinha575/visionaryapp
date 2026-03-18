import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Learn visually",
      description: "Complex concepts become clear through interactive 3D visualizations",
    },
    {
      number: "02",
      title: "Practice & master",
      description: "Unlimited practice with instant AI feedback and step-by-step solutions",
    },
    {
      number: "03",
      title: "Get AI help anytime",
      description: "24×7 mentor support via text, voice, or video — in your language",
    },
    {
      number: "04",
      title: "Track progress",
      description: "Detailed analytics and personalized insights to improve faster",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-gray-900 mb-6"
            style={{ fontWeight: 500, letterSpacing: '-0.02em' }}
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Simple, proven method used by thousands of successful students
          </motion.p>
        </div>

        {/* Steps - Vertical Layout */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-8">
                <div className="text-5xl font-medium text-blue-600 opacity-40 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}