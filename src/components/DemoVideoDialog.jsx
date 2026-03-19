import React, { useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
} from './ui/dialog';
import { X } from 'lucide-react';

const DemoVideoDialog = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);

  // Pause & reset video when dialog closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-0 rounded-2xl">
        {/* Custom close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-1.5 transition-all"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Video player */}
        <video
          ref={videoRef}
          src="/videos/167386.mp4"
          controls
          autoPlay
          className="w-full max-h-[80vh] object-contain rounded-2xl"
          style={{ display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
};

export default DemoVideoDialog;
