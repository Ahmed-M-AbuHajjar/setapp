import React, { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-setapp-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Logo */}
          <a
            href="/"
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src="/Assets/header/navbar-logo-SVG.png"
              alt="Setapp"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </a>

          {/* Right side */}
          <div className="flex items-center">
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors nav-link text-xs lg:text-sm"
              >
                How it works
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors nav-link text-xs lg:text-sm"
              >
                All apps
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors nav-link text-xs lg:text-sm"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors nav-link text-xs lg:text-sm"
              >
                For Teams
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors nav-link text-xs lg:text-sm"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors nav-link text-xs lg:text-sm"
              >
                Podcast
              </a>
            </nav>
            <div className="hidden lg:block w-px h-5 bg-gray-700 ml-6 xl:ml-8 mr-6 xl:mr-8"></div>
            <div className="hidden lg:flex items-center">
              <div className="hidden lg:flex items-center">
                <img
                  src="/Assets/section 2/en.svg.png"
                  alt="US"
                  className="h-5 w-5 object-contain"
                />
              </div>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] lg:text-xs font-normal tracking-wide hidden lg:block ml-3 xl:ml-4"
              >
                Sign in
              </a>
              <button className="bg-transparent border border-white text-white px-3 xl:px-4 py-1.5 rounded-md font-normal text-[10px] lg:text-xs transition-colors ml-2 xl:ml-3 hover:bg-white/10">
                Try free
              </button>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-3 sm:space-y-4 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="/Assets/section 2/en.svg.png"
                  alt="US"
                  className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                />
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
                >
                  Sign in
                </a>
              </div>
              <button className="bg-transparent border border-white text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-normal text-[10px] sm:text-xs transition-colors w-fit hover:bg-white/10">
                Try free
              </button>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                How it works
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                All apps
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                For Teams
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                Podcast
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors text-[10px] sm:text-xs font-normal"
              >
                Sign in
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
