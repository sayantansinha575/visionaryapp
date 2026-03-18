import React, { useState } from "react";
import { motion } from "framer-motion";
import CommingSoonDialog from "@/components/CommingSoonDialog";

export default function CTASection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-[#202124] mb-6 tracking-tight"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
        >
          Ready to get started?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#5f6368] mb-10 leading-relaxed"
          style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
        >
          Join thousands already learning smarter with Visionary
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onClick={() => setIsDialogOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-4 rounded-full transition-all shadow-sm hover:shadow-md"
        >
          Get started — it's free
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-gray-500"
        >
          No credit card required
        </motion.p>
      </div>

      <CommingSoonDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        message="We're almost ready to launch! Get ready for an incredible learning experience with Visionary."
      />
    </section>
  );
}