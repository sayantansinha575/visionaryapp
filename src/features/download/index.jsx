import React from "react";
import { motion } from "framer-motion";
import { Apple, Download as DownloadIcon } from "lucide-react";

export default function Download() {
  const platforms = [
    {
      name: "macOS",
      icon: Apple,
      description: "For Mac computers",
      link: "#",
      color: "#000000"
    },
    {
      name: "Windows",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
        </svg>
      ),
      description: "For Windows PCs",
      link: "#",
      color: "#0078D4"
    },
    {
      name: "App Store",
      icon: Apple,
      description: "For iPhone & iPad",
      link: "#",
      color: "#000000"
    },
    {
      name: "Google Play",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
        </svg>
      ),
      description: "For Android devices",
      link: "#",
      color: "#34A853"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <DownloadIcon size={16} />
              <span>Download Visionary</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-gray-900 mb-6 leading-tight"
            style={{ fontWeight: 400 }}
          >
            Choose your
            <br />
            platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-16"
          >
            Available on all your devices
          </motion.p>
        </div>
      </section>

      {/* Download Options */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              
              return (
                <motion.a
                  key={platform.name}
                  href={platform.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${platform.color}10` }}
                      >
                        <div style={{ color: platform.color }}>
                          <IconComponent />
                        </div>
                      </div>
                      
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all">
                        <DownloadIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-all" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-medium text-gray-900 mb-2">
                      {platform.name}
                    </h3>
                    
                    <p className="text-gray-600">
                      {platform.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              System requirements: macOS 11+, Windows 10+, iOS 14+, Android 8+
            </p>
            <p className="text-sm text-gray-500">
              Free to download • Premium features available
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}