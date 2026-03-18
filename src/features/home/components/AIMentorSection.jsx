import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AIMentorSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-blue-600 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8">
            <Sparkles className="w-10 h-10" strokeWidth={2} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl mb-6 leading-tight tracking-tight"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
        >
          Your personal AI mentor
          <br />
          available 24×7
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
        >
          No more waiting days for doubt clearing. Get instant help in your language via text, voice, or video — like having a personal tutor in your pocket.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-medium px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          Try AI mentor free
        </motion.button>
      </div>
    </section>
  );
}