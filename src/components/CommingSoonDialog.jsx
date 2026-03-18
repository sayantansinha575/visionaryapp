import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const CommingSoonDialog = ({
  isOpen,
  onClose,
  message = "This feature is coming soon! Stay tuned for updates."
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex flex-col items-center mb-4">
            <img 
              src="/assets/Visionary_logo.png" 
              alt="Visionary Logo" 
              className="h-12 w-auto mb-4"
            />
            <h2 className="text-center text-3xl font-semibold">Coming Soon</h2>
          </div>
          <DialogDescription className="text-center pt-2 text-lg leading-relaxed">
            {message}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CommingSoonDialog;