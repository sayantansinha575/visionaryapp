import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { X } from "lucide-react";
import { CONTACT_EMAIL } from "@/constants/config";

const UI_FONT = '"Product Sans", "Google Sans", Roboto, Arial, sans-serif';

const MobileMenu = ({
  isOpen,
  onClose,
  onOpenDownloadDialog,
  onOpenDemoDialog,
}) => {
  return (
    /* Always mounted — visibility driven by CSS transitions */
    <div
      className={`fixed inset-0 z-[100] xl:hidden transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-[101] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Close button */}
          <button onClick={onClose} className="mb-6">
            <X size={24} />
          </button>

          <div className="space-y-4">
            {/* Top nav items */}
            <button
              onClick={onOpenDownloadDialog}
              className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
              style={{ fontFamily: UI_FONT }}
            >
              Where to start?
            </button>
            <button
              onClick={onOpenDownloadDialog}
              className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
              style={{ fontFamily: UI_FONT }}
            >
              Solutions
            </button>
            <button
              onClick={onOpenDownloadDialog}
              className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
              style={{ fontFamily: UI_FONT }}
            >
              Learning &amp; insights
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
              style={{ fontFamily: UI_FONT }}
            >
              Contact us
            </a>

            {/* Who you are links */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <Link
                to={createPageUrl("Students")}
                onClick={onClose}
                className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                style={{ fontFamily: UI_FONT }}
              >
                Students
              </Link>
              <Link
                to={createPageUrl("Teachers")}
                onClick={onClose}
                className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                style={{ fontFamily: UI_FONT }}
              >
                Teachers
              </Link>
              <Link
                to={createPageUrl("Professionals")}
                onClick={onClose}
                className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                style={{ fontFamily: UI_FONT }}
              >
                Professionals
              </Link>
              <Link
                to={createPageUrl("Parents")}
                onClick={onClose}
                className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                style={{ fontFamily: UI_FONT }}
              >
                Parents
              </Link>
              <button
                onClick={onOpenDownloadDialog}
                className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
                style={{ fontFamily: UI_FONT }}
              >
                Expert support
              </button>
            </div>

            {/* Demo CTA */}
            <div className="border-t border-gray-200 pt-4 mt-2 space-y-3">
              <button
                onClick={onOpenDemoDialog}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium px-6 py-2.5 rounded-full transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: UI_FONT }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
