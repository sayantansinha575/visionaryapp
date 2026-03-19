import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import CommingSoonDialog from "@/components/CommingSoonDialog";

export default function Hero() {
  // const videoRef = useRef(null);
  const typedRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Background video in /assets (uploaded as background_hero_video.mp4)
  // const videoSrc = '/assets/background_hero_video.mp4';

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Learn", "Ask", "Practice", "Build"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.load();
  //     videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
  //   }
  // }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Video Background — commented out for now
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
      */}
      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-20">
        <div className="max-w-4xl lg:max-w-6xl">
          {/* Main Headline */}
          <h1
            className="mb-6 tracking-tight flex flex-col"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span
              className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.9] text-[#202124] whitespace-nowrap"
              style={{
                fontFamily: "Google Sans",
                fontWeight: 500,
              }}
            >
              <span ref={typedRef} className="text-[#4285F4]"></span> Anything.
            </span>
            <span
              className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.9] text-[#202124] mt-2"
              style={{
                fontFamily: "Product Sans",
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
              fontFamily: "Product Sans",
              fontWeight: 400,
            }}
          >
            The all-in-one platform built for success. Visionary empowers every
            student,
            <br /> educator, and organization to learn, build, and achieve more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-7">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#202124] text-white text-[17px] font-medium hover:bg-[#3c4043] transition-colors"
              style={{ fontFamily: "Product Sans" }}
            >
              Start free now
            </button>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#f1f3f4] text-[#202124] text-[17px] font-medium hover:bg-[#e8eaed] transition-colors"
              style={{ fontFamily: "Product Sans" }}
            >
              Explore more
            </button>
          </div>
        </div>
      </div>

      <CommingSoonDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        message="Visionary is launching soon! Get ready to revolutionize your learning experience with AI-powered education."
      />
    </section>
  );
}
