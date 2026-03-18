import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import CommingSoonDialog from "@/components/CommingSoonDialog";
import {
  X,
  User,
  Download as DownloadIcon,
  HelpCircle,
  Youtube,
  Facebook,
  Linkedin,
  ArrowRight,
  Menu,
} from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set document title and PWA meta tags
  useEffect(() => {
    document.title = currentPageName
      ? `${currentPageName} - Visionary`
      : "Visionary - AI-Powered Education Platform";

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = "#4285F4";

    let metaAppleTitle = document.querySelector(
      'meta[name="apple-mobile-web-app-title"]',
    );
    if (!metaAppleTitle) {
      metaAppleTitle = document.createElement("meta");
      metaAppleTitle.name = "apple-mobile-web-app-title";
      document.head.appendChild(metaAppleTitle);
    }
    metaAppleTitle.content = "Visionary";

    let metaAppTitle = document.querySelector('meta[name="application-name"]');
    if (!metaAppTitle) {
      metaAppTitle = document.createElement("meta");
      metaAppTitle.name = "application-name";
      document.head.appendChild(metaAppTitle);
    }
    metaAppTitle.content = "Visionary";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Visionary - AI-Powered Education Platform for Students, Teachers, and Professionals";

    // Security headers (meta CSP for browsers; stronger policy encouraged on server)
    let metaCSP = document.querySelector(
      'meta[http-equiv="Content-Security-Policy"]',
    );
    if (!metaCSP) {
      metaCSP = document.createElement("meta");
      metaCSP.httpEquiv = "Content-Security-Policy";
      document.head.appendChild(metaCSP);
    }
    // Allow external images from Unsplash and other trusted sources
    metaCSP.content =
      "default-src 'self'; img-src 'self' data: blob: https://images.unsplash.com; media-src 'self' blob:; connect-src 'self' https:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self'; base-uri 'self';";

    // Referrer policy
    let metaReferrer = document.querySelector('meta[name="referrer"]');
    if (!metaReferrer) {
      metaReferrer = document.createElement("meta");
      metaReferrer.name = "referrer";
      document.head.appendChild(metaReferrer);
    }
    metaReferrer.content = "strict-origin-when-cross-origin";

    // Note: X-Frame-Options and frame-ancestors should be set via HTTP headers, not meta tags
    // Removing meta tag implementation as it's not effective and causes console warnings

    // Performance optimizations
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement("meta");
      metaViewport.name = "viewport";
      document.head.appendChild(metaViewport);
    }
    metaViewport.content =
      "width=device-width, initial-scale=1, viewport-fit=cover";

    // Avoid unnecessary external preconnects now that fonts are self-hosted.

    // Preload self-hosted fonts (using uploaded .ttf files in /public/fonts/)
    const createPreload = (href, type = "font/ttf") => {
      const l = document.createElement("link");
      l.rel = "preload";
      l.href = href;
      l.as = "font";
      l.type = type;
      l.crossOrigin = "anonymous";
      document.head.appendChild(l);
    };

    createPreload("/fonts/ProductSans-Regular.ttf");
    createPreload("/fonts/ProductSans-Medium.ttf");
    createPreload("/fonts/ProductSans-Bold.ttf");
  }, [currentPageName]);

  return (
    <div className="min-h-screen bg-white">
      <link rel="icon" href="/favicon.png" />

      {/* Navigation - Default State (Not Scrolled) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isScrolled ? "bg-white" : ""}`}
      >
        {/* Top Bar - Single Consolidated Row */}
        {!isScrolled && (
          <div className="bg-white border-b border-gray-200">
            <div className="w-full px-6 md:px-12">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center gap-4 lg:gap-8">
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="xl:hidden text-gray-700 hover:text-gray-900"
                  >
                    <Menu size={24} />
                  </button>

                  <Link
                    to="/"
                    className="flex items-center gap-3"
                  >
                    <img
                      src="/assets/Visionary_logo.png"
                      alt="Visionary Logo"
                      className="h-6 w-auto logo-text"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </Link>

                  <div className="hidden xl:flex items-center gap-6">
                    {/* Who you are Dropdown */}
                    <div className="relative group">
                      <button
                        className="flex items-center gap-1 text-[15px] font-medium text-[#5f6368] hover:text-gray-900 transition-colors whitespace-nowrap"
                        style={{ fontFamily: "var(--ui-font)" }}
                      >
                        Who you are
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 mt-1 hidden group-hover:block z-50">
                        <Link
                          to={createPageUrl("Students")}
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Students
                        </Link>
                        <Link
                          to={createPageUrl("Teachers")}
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Teachers
                        </Link>
                        <Link
                          to={createPageUrl("Professionals")}
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Professionals
                        </Link>
                        <Link
                          to={createPageUrl("Parents")}
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Parents
                        </Link>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsDownloadDialogOpen(true)}
                      className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 transition-colors whitespace-nowrap"
                      style={{ fontFamily: "var(--ui-font)" }}
                    >
                      Where to start?
                    </button>
                    <button
                      onClick={() => setIsDownloadDialogOpen(true)}
                      className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 transition-colors whitespace-nowrap"
                      style={{ fontFamily: "var(--ui-font)" }}
                    >
                      Solutions
                    </button>
                    <button
                      onClick={() => setIsDownloadDialogOpen(true)}
                      className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 transition-colors whitespace-nowrap"
                      style={{ fontFamily: "var(--ui-font)" }}
                    >
                      Learning & insights
                    </button>
                    <button
                      onClick={() => setIsDownloadDialogOpen(true)}
                      className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 transition-colors whitespace-nowrap"
                      style={{ fontFamily: "var(--ui-font)" }}
                    >
                      Get support
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="hidden xl:flex items-center gap-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 bg-transparent transition-colors whitespace-nowrap"
                    style={{ fontFamily: "var(--ui-font)" }}
                  >
                    <User size={16} />
                    Sign in
                  </button>

                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="bg-black hover:bg-gray-800 text-white text-[15px] font-medium px-5 py-2.5 rounded-full transition-all flex items-center gap-2 whitespace-nowrap"
                    style={{ fontFamily: "var(--ui-font)" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
                        fill="currentColor"
                      />
                    </svg>
                    Download Now
                  </button>

                  <div className="xl:hidden">
                    <button
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      style={{
                        fontFamily: '"Product Sans", "Google Sans", sans-serif',
                      }}
                    >
                      <User size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Rectangle Navigation (When Scrolled) - Hidden on Mobile */}
        {isScrolled && (
          <div className="hidden lg:flex justify-center pt-4 pb-4">
            <div className="bg-white rounded-full shadow-lg px-8 py-4 flex items-center gap-6">
              <Link
                to={createPageUrl("Students")}
                className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-[90%] transition-all"
                style={{
                  fontFamily:
                    '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                }}
              >
                Students
              </Link>
              <Link
                to={createPageUrl("Teachers")}
                className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-[90%] transition-all"
                style={{
                  fontFamily:
                    '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                }}
              >
                Teachers
              </Link>
              <Link
                to={createPageUrl("Professionals")}
                className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-[90%] transition-all"
                style={{
                  fontFamily:
                    '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                }}
              >
                Professionals
              </Link>
              <Link
                to={createPageUrl("Parents")}
                className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-[90%] transition-all"
                style={{
                  fontFamily:
                    '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                }}
              >
                Parents
              </Link>

              <button
                onClick={() => setIsDownloadDialogOpen(true)}
                className="bg-black hover:bg-gray-800 text-white text-[15px] font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2"
                style={{
                  fontFamily:
                    '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
                    fill="currentColor"
                  />
                </svg>
                Download Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-[101]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button onClick={() => setMobileMenuOpen(false)} className="mb-6">
                <X size={24} />
              </button>

              <div className="space-y-4">
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
                  style={{
                    fontFamily:
                      '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                  }}
                >
                  Where to start?
                </button>
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
                  style={{
                    fontFamily:
                      '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                  }}
                >
                  Solutions
                </button>
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
                  style={{
                    fontFamily:
                      '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                  }}
                >
                  Learning & insights
                </button>
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
                  style={{
                    fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
                  }}
                >
                  Get support
                </button>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <Link
                    to={createPageUrl("Students")}
                    className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                    style={{
                      fontFamily:
                        '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                    }}
                  >
                    Students
                  </Link>
                  <Link
                    to={createPageUrl("Teachers")}
                    className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                    style={{
                      fontFamily:
                        '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                    }}
                  >
                    Teachers
                  </Link>
                  <Link
                    to={createPageUrl("Professionals")}
                    className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                    style={{
                      fontFamily:
                        '"Product Sans", "Google Sans", Roboto, Arial, sans-serif',
                    }}
                  >
                    Professionals
                  </Link>
                  <Link
                    to={createPageUrl("Parents")}
                    className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2"
                    style={{
                      fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
                    }}
                  >
                    Parents
                  </Link>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="block text-[15px] font-medium text-[#5f6368] hover:text-gray-900 py-2 text-left"
                    style={{
                      fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
                    }}
                  >
                    Expert support
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-2 space-y-3">
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium px-6 py-2.5 rounded-full transition-all flex items-center justify-center gap-2"
                    style={{
                      fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
                        fill="currentColor"
                      />
                    </svg>
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={!isScrolled ? "pt-20" : "pt-20"}>{children}</main>

      {/* Footer - Minimalist Google Style */}
      <footer className="bg-white border-t border-gray-200 mt-32">
        <div className="w-full px-6 md:px-12 py-16">
          {/* Social Media */}
          <div className="mb-16 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-600 font-medium">
                Follow us
              </span>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Youtube size={20} />
                </button>
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
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
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Facebook size={20} />
                </button>
                <button
                  onClick={() => setIsDownloadDialogOpen(true)}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>

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
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Students
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Teachers")}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Professionals")}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Professional
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Parents")}
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
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    For Schools
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    For Institutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
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
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
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
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    About Visionary
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDownloadDialogOpen(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <img
                  src="/assets/Visionary_logo.png"
                  alt="Visionary"
                  className="h-5 w-auto opacity-60"
                  loading="lazy"
                />
                <Link to="/privacy-policy" className="hover:text-gray-900">
                  Privacy
                </Link>
                <Link to="/terms-of-service" className="hover:text-gray-900">
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
        isOpen={isDownloadDialogOpen}
        onClose={() => setIsDownloadDialogOpen(false)}
        message="The Visionary app is coming soon! We're putting the finishing touches on an amazing learning experience."
      />
    </div>
  );
}
