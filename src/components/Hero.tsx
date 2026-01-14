import React from "react";

interface FloatingIcon {
  icon: string;
  text: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  shape: "rounded" | "hexagon" | "circle";
  color: string;
}

const Hero: React.FC = () => {
  const floatingIcons: FloatingIcon[] = [
    {
      icon: "/Assets/header/left-1.svg",
      text: "WORK WITH PICS",
      position: { top: "10%", left: "5%" },
      shape: "rounded",
      color: "bg-orange-500",
    },
    {
      icon: "/Assets/header/left-2.svg",
      text: "PDF • VPN • AD BLOCKER",
      position: { top: "28%", left: "5%" },
      shape: "circle",
      color: "bg-white border-2 border-purple-500",
    },
    {
      icon: "/Assets/header/left-3.svg",
      text: "BOOST TEAMWORK",
      position: { top: "26%", left: "12%" },
      shape: "hexagon",
      color: "bg-blue-400",
    },
    {
      icon: "/Assets/header/left-4.svg",
      text: "STAY SECURE",
      position: { top: "50%", left: "6%" },
      shape: "hexagon",
      color: "bg-blue-600",
    },
    {
      icon: "/Assets/header/left-5.svg",
      text: "STAY SECURE",
      position: { top: "62%", left: "6%" },
      shape: "rounded",
      color: "bg-blue-600",
    },
    {
      icon: "/Assets/header/right-1.svg",
      text: "FIX WIFI",
      position: { top: "15%", right: "5%" },
      shape: "rounded",
      color: "bg-orange-500",
    },
    {
      icon: "/Assets/header/right-2.svg",
      text: "PLAN YOUR DAY",
      position: { top: "24%", right: "14%" },
      shape: "rounded",
      color: "bg-blue-400",
    },

    {
      icon: "/Assets/header/right-4.svg",
      text: "MANAGE YOUR MAC",
      position: { top: "55%", right: "7%" },
      shape: "rounded",
      color: "bg-pink-500",
    },
    {
      icon: "/Assets/header/right-3.svg",
      text: "CONVERT HEIC TO JPG",
      position: { top: "39%", right: "5%" },
      shape: "circle",
      color: "bg-white border-2 border-blue-400 text-xs",
    },
    {
      icon: "/Assets/header/right-5.svg",
      text: "CODE EASIER",
      position: { top: "69%", right: "8%" },
      shape: "rounded",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-setapp-dark pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {floatingIcons.map((item, index) => {
          // Add rotation for some icons to make them look more dynamic
          const rotations = [0, -5, 3, -2, 4, -3, 2, -4, 5];
          const rotation = rotations[index % rotations.length];

          return (
            <div
              key={index}
              className="absolute hover:scale-110 transition-transform"
              style={{
                ...item.position,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <img src={item.icon} alt="" className="w-auto h-auto" />
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        <a
          href="/"
          className="cursor-pointer hover:opacity-80 transition-opacity mb-4 sm:mb-6"
        >
          <img
            src="/Assets/header/setapp-icon-birthday-15.svg.png"
            alt="Setapp"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
          />
        </a>
        <h1 className="hero-headline text-white mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] leading-tight sm:leading-normal">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          <span className="text-white">$9.99</span>
        </h1>

        <div className="flex flex-col items-center mb-4 w-full max-w-md">
          <div className="flex flex-col sm:flex-row items-stretch w-full sm:w-auto gap-3">
            <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Try free for 7 days
            </button>
            <div className="flex items-stretch justify-center gap-3">
              <button className="bg-white px-3 sm:px-4 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <img
                  src="/Assets/header/apple.svg.svg"
                  alt="Apple"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </button>
              <button className="bg-white px-3 sm:px-4 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <img
                  src="/Assets/header/google.svg.svg"
                  alt="Google Play"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-base sm:text-lg mb-4 max-w-sm mx-auto px-4">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>
    </section>
  );
};

export default Hero;
