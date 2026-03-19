import React from "react";
import { CONTACT_EMAIL } from "@/constants/config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const CommingSoonDialog = ({
  isOpen,
  onClose,
  message = "This feature is coming soon! Stay tuned for updates.",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl min-h-[320px] flex flex-col justify-center">
        <DialogHeader>
          <div className="flex flex-col items-center mb-6">
            {/* <img 
              src="/assets/Visionary_logo.png" 
              alt="Visionary Logo" 
              className="h-12 w-auto mb-4"
            /> */}
            <h2 className="text-center text-5xl font-semibold">Coming Soon</h2>
          </div>
          <DialogDescription className="text-center pt-3 text-xl leading-relaxed">
            {message}
          </DialogDescription>
        </DialogHeader>

        {/* Feature highlights */}
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#4285F4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-800">
              AI-Powered Learning
            </p>
            <p className="text-xs text-gray-500">
              Personalised to every learner
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  stroke="#34A853"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="#34A853"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                  stroke="#34A853"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-800">For Everyone</p>
            <p className="text-xs text-gray-500">
              Students, teachers & organization
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8h1a4 4 0 0 1 0 8h-1"
                  stroke="#A855F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                  stroke="#A855F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="6"
                  y1="1"
                  x2="6"
                  y2="4"
                  stroke="#A855F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="4"
                  stroke="#A855F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="14"
                  y1="1"
                  x2="14"
                  y2="4"
                  stroke="#A855F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-800">
              Expert Support
            </p>
            <p className="text-xs text-gray-500">Guidance when you need it</p>
          </div>
        </div>

        {/* Notify / Contact row */}
        <div className="mt-8 flex items-center justify-center gap-3 border-t border-gray-100 pt-6">
          <span className="text-sm text-gray-500">Questions? Reach us at</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommingSoonDialog;
