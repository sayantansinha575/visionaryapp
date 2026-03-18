import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Video, MessageSquare, FileText, Award, Users, BarChart, Calendar } from "lucide-react";

export default function ConnectedApps() {
  // Apps positioned ON outer circle border - random angles
  const outerApps = [
    { name: "Learn", icon: BookOpen, color: "#4285F4", angle: 25 },
    { name: "Videos", icon: Video, color: "#EA4335", angle: 110 },
    { name: "AI Mentor", icon: MessageSquare, color: "#FBBC04", angle: 195 },
    { name: "Notes", icon: FileText, color: "#34A853", angle: 290 }
  ];

  // Apps positioned ON inner circle border - random angles
  const innerApps = [
    { name: "Tests", icon: Award, color: "#4285F4", angle: 60 },
    { name: "Community", icon: Users, color: "#EA4335", angle: 150 },
    { name: "Analytics", icon: BarChart, color: "#FBBC04", angle: 230 },
    { name: "Schedule", icon: Calendar, color: "#34A853", angle: 320 }
  ];

  const getPosition = (angle, radius) => {
    const radian = ((angle - 90) * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian)
    };
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chip */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700">
              <span style={{ fontFamily: '"Product Sans", "Google Sans", Roboto, Arial, sans-serif' }}>One platform</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile: 600px, Tablet: 800px, Desktop: 1000px */}
        <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]">
          
          {/* Large Outer Circle - Responsive Sizes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
          >
            {/* Dashed Circle Border - Responsive */}
            <div 
              className="rounded-full border-2 border-dashed border-gray-300"
              style={{
                width: 'clamp(400px, 80vw, 800px)',
                height: 'clamp(400px, 80vw, 800px)'
              }}
            />
          </motion.div>

          {/* Small Inner Circle - Responsive Sizes */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
          >
            {/* Dashed Circle Border - Responsive */}
            <div 
              className="rounded-full border-2 border-dashed border-gray-300"
              style={{
                width: 'clamp(240px, 48vw, 480px)',
                height: 'clamp(240px, 48vw, 480px)'
              }}
            />
          </motion.div>

          {/* Apps on Outer Circle - Responsive Positioning */}
          {outerApps.map((app, index) => {
            const IconComponent = app.icon;
            // Responsive radius: mobile 200px, tablet 300px, desktop 400px
            const mobileRadius = 200;
            const tabletRadius = 300;
            const desktopRadius = 400;
            
            const mobilePos = getPosition(app.angle, mobileRadius);
            const tabletPos = getPosition(app.angle, tabletRadius);
            const desktopPos = getPosition(app.angle, desktopRadius);

            return (
              <React.Fragment key={app.name}>
                {/* Mobile */}
                <motion.div
                  className="absolute md:hidden"
                  style={{
                    left: `calc(50% + ${mobilePos.x}px)`,
                    top: `calc(50% + ${mobilePos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <IconComponent className="w-5 h-5" style={{ color: app.color }} strokeWidth={2} />
                    </div>
                    <div className="text-xs font-medium text-gray-700 whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="absolute hidden md:block lg:hidden"
                  style={{
                    left: `calc(50% + ${tabletPos.x}px)`,
                    top: `calc(50% + ${tabletPos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <IconComponent className="w-6 h-6" style={{ color: app.color }} strokeWidth={2} />
                    </div>
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </motion.div>

                {/* Desktop */}
                <motion.div
                  className="absolute hidden lg:block"
                  style={{
                    left: `calc(50% + ${desktopPos.x}px)`,
                    top: `calc(50% + ${desktopPos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <IconComponent className="w-7 h-7" style={{ color: app.color }} strokeWidth={2} />
                    </div>
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Apps on Inner Circle - Responsive Positioning */}
          {innerApps.map((app, index) => {
            const IconComponent = app.icon;
            // Responsive radius: mobile 120px, tablet 180px, desktop 240px
            const mobileRadius = 120;
            const tabletRadius = 180;
            const desktopRadius = 240;
            
            const mobilePos = getPosition(app.angle, mobileRadius);
            const tabletPos = getPosition(app.angle, tabletRadius);
            const desktopPos = getPosition(app.angle, desktopRadius);

            return (
              <React.Fragment key={app.name}>
                {/* Mobile */}
                <motion.div
                  className="absolute md:hidden"
                  style={{
                    left: `calc(50% + ${mobilePos.x}px)`,
                    top: `calc(50% + ${mobilePos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 4) * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <IconComponent className="w-5 h-5" style={{ color: app.color }} strokeWidth={2} />
                    </div>
                    <div className="text-xs font-medium text-gray-700 whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="absolute hidden md:block lg:hidden"
                  style={{
                    left: `calc(50% + ${tabletPos.x}px)`,
                    top: `calc(50% + ${tabletPos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 4) * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <IconComponent className="w-6 h-6" style={{ color: app.color }} strokeWidth={2} />
                    </div>
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </motion.div>

                {/* Desktop */}
                <motion.div
                  className="absolute hidden lg:block"
                  style={{
                    left: `calc(50% + ${desktopPos.x}px)`,
                    top: `calc(50% + ${desktopPos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 4) * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                      <IconComponent className="w-7 h-7" style={{ color: app.color }} strokeWidth={2} />
                    </div>
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {app.name}
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Center Content - Fully Responsive */}
          <div className="relative z-20 text-center px-4 md:px-6 max-w-[280px] md:max-w-[340px] lg:max-w-[380px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl md:text-5xl font-normal text-[#202124] mb-4 leading-tight tracking-tight" 
                style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif', fontWeight: 400 }}
              >
                One platform,
                <br />
                endless possibilities
              </h2>
              
              <p 
                className="text-lg text-[#5f6368] leading-relaxed"
                style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
              >
                All apps work together seamlessly
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}