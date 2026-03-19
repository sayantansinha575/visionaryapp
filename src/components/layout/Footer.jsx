import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import CommingSoonDialog from "@/components/CommingSoonDialog";
import { Youtube, Facebook, Linkedin } from "lucide-react";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {/* Footer - Minimalist Google Style */}
      <footer className="bg-white border-t border-gray-200 mt-32">
        <div className="w-full px-6 md:px-12 py-16">
          {/* Social Media — commented out for now
          <div className="mb-16 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-600 font-medium">
                Follow us
              </span>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Youtube size={20} />
                </button>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Facebook size={20} />
                </button>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>
          */}

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                Visionary Family
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={createPageUrl("Students")}
                    onClick={scrollToTop}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Students
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Teachers")}
                    onClick={scrollToTop}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Professionals")}
                    onClick={scrollToTop}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Professional
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Parents")}
                    onClick={scrollToTop}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Parents
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                Enterprise
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    For Schools
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    For Institutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Enterprise Plans
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Community
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about-us"
                    onClick={scrollToTop}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    About Visionary
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:raj@visionary.org.in"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <Link to="/" onClick={scrollToTop}>
                  <img
                    src="/assets/Visionary_logo.png"
                    alt="Visionary"
                    className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                    loading="lazy"
                  />
                </Link>
                <Link
                  to="/privacy-policy"
                  onClick={scrollToTop}
                  className="hover:text-gray-900"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms-of-service"
                  onClick={scrollToTop}
                  className="hover:text-gray-900"
                >
                  Terms
                </Link>
              </div>
              <div className="text-sm text-gray-600">
                © 2025 Visionary. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CommingSoonDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        message="This feature is coming soon! We're working hard to bring you an amazing experience."
      />
    </>
  );
}
