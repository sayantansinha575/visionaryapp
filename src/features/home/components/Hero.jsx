import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef(null);
  // Background video in /assets (uploaded as background_hero_video.mp4)
  const videoSrc = '/assets/background_hero_video.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {videoSrc && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            poster="/assets/background_hero_poster.svg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-20">
        <div className="max-w-4xl">


          {/* Main Headline */}
          <h1 className="mb-6 tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            <span
              className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.9] text-[#202124]"
              style={{
                fontFamily: 'Google Sans',
                fontWeight: 500,
              }}
            >
              Learn Ask Practice Build.
            </span>
            <span
              className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.9] text-[#202124] mt-2"
              style={{
                fontFamily: 'Product Sans',
                fontWeight: 400,
              }}
            >
              In your Language.
            </span>
          </h1>



          {/* Subheading */}
          <p
            className="text-xl text-[#5f6368] mb-9 max-w-1xl leading-relaxed"
            style={{
              fontFamily: 'Product Sans',
              fontWeight: 400
            }}
          >
            The all-in-one platform built for success. Visionary empowers every student,<br></br> educator, and organization to learn, build, and achieve more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-7">
            <button
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#202124] text-white text-[17px] font-medium hover:bg-[#3c4043] transition-colors"
              style={{ fontFamily: 'Product Sans' }}
            >
              Start free now
            </button>

            <button
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#f1f3f4] text-[#202124] text-[17px] font-medium hover:bg-[#e8eaed] transition-colors"
              style={{ fontFamily: 'Product Sans' }}
            >
              Explore more
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}