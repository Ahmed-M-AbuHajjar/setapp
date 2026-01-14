import React from "react";

const Footer: React.FC = () => {
  const footerLinks = {
    home: [
      "Home",
      "How It Works",
      "All Apps",
      "Pricing",
      "Setapp for Teams",
      "Blog",
      "Podcast",
      "Download",
    ],
    about: [
      "About",
      "Support",
      "Education Discount",
      "Family Plan",
      "For Developers",
      "Gift Cards",
      "Redeem Card or Code",
      "Setapp Reviews",
      "Affiliate Program",
      "Mac Developer Survey 2023",
    ],
    gettingStarted: [
      "Getting started with Setapp",
      "Remote access to other Mac",
      "Fix macOS Ventura",
      "problems",
      "Best productivity apps",
      "Best YouTube downloaders",
      "Uninstall apps",
    ],
  };

  const socialIcons = [
    { icon: "/Assets/section 2/svg-2.svg", name: "Facebook" },
    { icon: "/Assets/section 2/svg.svg", name: "Twitter" },
    { icon: "/Assets/section 2/svg-1.svg", name: "Instagram" },
    { icon: "/Assets/section 2/yt.svg", name: "YouTube" },
  ];

  return (
    <footer className="bg-setapp-dark text-white pb-8 sm:pb-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Newsletter Section */}
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/Assets/section 2/setapp-logo.svg.svg"
                  alt="Setapp"
                  className="h-6 sm:h-8"
                />
                <span className="text-lg sm:text-xl font-bold text-white">
                  SETAPP
                </span>
              </div>
              <p className="text-white mb-4 sm:mb-6 text-xs sm:text-sm">
                Updates from our team, written with love{" "}
                <span className="text-orange-500">❤️</span>
              </p>
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:flex-none sm:w-80 lg:w-96 text-gray-300 placeholder-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none"
                  style={{ backgroundColor: "#404547" }}
                />
                <button className="bg-white hover:bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 transition-colors flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links - 3 columns in 50% width */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-14">
              <div>
                <ul className="space-y-2">
                  {footerLinks.home.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-white hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {footerLinks.about.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-white hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {footerLinks.gettingStarted.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-white hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DMCA and Language Selector Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div className="flex items-center">
            <div className="px-2 py-1" style={{ backgroundColor: "#969799" }}>
              <span className="text-white text-xs font-semibold">DMCA</span>
            </div>
            <div className="px-2 py-1" style={{ backgroundColor: "#404547" }}>
              <span className="text-white text-xs font-semibold">
                PROTECTED
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="/Assets/section 2/en.svg.png"
              alt="English"
              className="w-5 h-3 sm:w-6 sm:h-4"
            />
            <span className="text-xs sm:text-sm text-white">English</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 gap-4">
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              <p className="text-white">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
                P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-500">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2 sm:space-x-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 hover:bg-gray-400 flex items-center justify-center transition-colors"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      style={{ filter: "brightness(0) invert(0.4)" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
