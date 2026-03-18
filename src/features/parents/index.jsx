import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { ArrowRight, UserPlus, Eye, MessageCircle, Award, Heart, CheckCircle } from "lucide-react";

export default function Parents() {
  const journey = [
    {
      phase: "Connect",
      title: "Create parent account",
      description: "Link to your child's learning profile",
      icon: UserPlus,
      color: "#EA4335"
    },
    {
      phase: "Monitor",
      title: "Track daily progress",
      description: "See real-time learning activity and achievements",
      icon: Eye,
      color: "#4285F4"
    },
    {
      phase: "Engage",
      title: "Stay in touch",
      description: "Communicate with teachers and mentors",
      icon: MessageCircle,
      color: "#34A853"
    },
    {
      phase: "Support",
      title: "Guide their journey",
      description: "Set goals and celebrate milestones together",
      icon: Heart,
      color: "#FBBC04"
    },
    {
      phase: "Celebrate",
      title: "Watch them succeed",
      description: "From learning to career, be part of every achievement",
      icon: Award,
      color: "#9334E9"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
              For Parents
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-gray-900 mb-6 leading-tight"
            style={{ fontWeight: 400 }}
          >
            Be part of their
            <br />
            success story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Support your child's journey from learning to career success
          </motion.p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontWeight: 400 }}>
              Your parenting partnership
            </h2>
            <p className="text-xl text-gray-600">
              Stay connected through every milestone
            </p>
          </div>

          <div className="space-y-12">
            {journey.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-3">
                    {step.phase}
                  </div>
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < journey.length - 1 && (
                  <div className="hidden md:block w-12 h-12 rounded-full bg-white flex items-center justify-center ml-auto">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontWeight: 400 }}>
              Parent dashboard features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Real-time learning progress",
              "Teacher communication portal",
              "Weekly progress reports",
              "Goal setting & tracking",
              "Safe & secure platform",
              "Career milestone updates"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl"
              >
                <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0" />
                <span className="text-lg text-gray-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontWeight: 400 }}>
            Join your child's journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            10,000+ families trust Visionary
          </p>
          <Link to={createPageUrl("Download")}>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all inline-flex items-center gap-2">
              Get started free
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}