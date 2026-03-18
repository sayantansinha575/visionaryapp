import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, Sparkles, TrendingUp, Award } from "lucide-react";

export default function LearningJourney() {
  const steps = [
    {
      number: "01",
      title: "Sign up free",
      description: "Create your account in 30 seconds. No credit card needed.",
      icon: BookOpen,
      color: "#4285F4"
    },
    {
      number: "02",
      title: "Choose your goal",
      description: "Select JEE, NEET, UPSC, or any subject you want to master.",
      icon: Target,
      color: "#34A853"
    },
    {
      number: "03",
      title: "Start learning",
      description: "Watch 3D visualizations, practice questions, get instant AI help.",
      icon: Sparkles,
      color: "#FBBC04"
    },
    {
      number: "04",
      title: "Track progress",
      description: "See your improvement daily with detailed analytics and insights.",
      icon: TrendingUp,
      color: "#EA4335"
    },
    {
      number: "05",
      title: "Achieve success",
      description: "Crack your exam with confidence. Join thousands of successful students.",
      icon: Award,
      color: "#4285F4"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Blur White Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700">
              <span style={{ fontFamily: '"Product Sans", "Google Sans", Roboto, Arial, sans-serif' }}>Your learning journey</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-[#202124] mb-4 tracking-tight"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
          >
            Your learning journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5f6368] max-w-xl mx-auto"
            style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
          >
            From confusion to clarity in 5 simple steps
          </motion.p>
        </div>

        {/* Journey Steps - Horizontal Flow - Centered */}
        <div className="relative flex justify-center">
          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-6 relative max-w-6xl">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                    {/* Google Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <IconComponent 
                        className="w-8 h-8"
                        style={{ color: step.color }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Step Number */}
                    <div 
                      className="text-sm font-bold mb-3 text-center"
                      style={{ color: step.color }}
                    >
                      STEP {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: step.color }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-4 rounded-full transition-all shadow-sm hover:shadow-lg">
            Start your journey now
          </button>
          <p className="mt-4 text-sm text-gray-500">Join 50,000+ students already learning with Visionary</p>
        </motion.div>
      </div>
    </section>
  );
}