import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import CommingSoonDialog from "@/components/CommingSoonDialog";
import DemoVideoDialog from "@/components/DemoVideoDialog";
import MobileMenu from "@/components/MobileMenu";
import Footer from "./Footer";
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
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

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

                  <Link to="/" className="flex items-center gap-3">
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
                    <a
                      href="mailto:raj@visionary.org.in"
                      className="text-[15px] font-medium text-[#5f6368] hover:text-gray-900 transition-colors whitespace-nowrap"
                      style={{ fontFamily: "var(--ui-font)" }}
                    >
                      Contact us
                    </a>
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
                    onClick={() => setIsDemoDialogOpen(true)}
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
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                    Demo
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
                onClick={() => setIsDemoDialogOpen(true)}
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
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
                Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenDownloadDialog={() => setIsDownloadDialogOpen(true)}
        onOpenDemoDialog={() => setIsDemoDialogOpen(true)}
      />

      {/* Main Content */}
      <main className={!isScrolled ? "pt-20" : "pt-20"}>{children}</main>

      <Footer />

      <CommingSoonDialog
        isOpen={isDownloadDialogOpen}
        onClose={() => setIsDownloadDialogOpen(false)}
        message="The Visionary app is coming soon! We're putting the finishing touches on an amazing learning experience."
      />
      <DemoVideoDialog
        isOpen={isDemoDialogOpen}
        onClose={() => setIsDemoDialogOpen(false)}
      />
    </div>
  );
}
