import React from "react";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  gradient: string;
}

const WhatYouGet: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: "Keep your Mac clean",
      description: "Remove junk, scan for malware, wipe email attachments",
      image: "/Assets/section 2/cmm-big@2x.png.png",
      icon: "/Assets/section 2/icon-cmm.png.png",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Write code",
      description: "Create applications in more than 25 languages",
      image: "/Assets/section 2/coderunner@2x.png.png",
      icon: "/Assets/section 2/icon-coderunner.png.png",
      gradient: "from-gray-800 to-black",
    },
    {
      title: "Join meetings in a click",
      description: "Quickly access links to your meetings from menu bar",
      image: "/Assets/section 2/meeter@2x.png.png",
      icon: "/Assets/section 2/icon-meeter.png.png",
      gradient: "from-blue-600 to-purple-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-setapp-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
            <h2 className="section-heading text-white text-2xl sm:text-3xl lg:text-4xl">
              What you get on Setapp.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-lg lg:max-w-none">
              With a single monthly subscription at $9.99, you get 240+ apps for
              your Mac.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 mb-8">
          {/* First card - full width */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            style={{ backgroundColor: "#DF96AE" }}
          >
            <div className="p-4 sm:p-6 lg:mx-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div>
                  <img src={features[0].icon} alt="" className="w-12 h-12 sm:w-14 sm:h-14" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {features[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{features[0].description}</p>
                </div>
              </div>
            </div>
            <div className={`flex items-center justify-center px-4 sm:px-0`}>
              <img
                src={features[0].image}
                alt={features[0].title}
                className="w-[90%] h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Second and third cards - side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Second card */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              style={{ backgroundColor: "#F4F0E4" }}
            >
              <div className={`flex items-center justify-center pt-4 sm:pt-0`}>
                <img
                  src={features[1].image}
                  alt={features[1].title}
                  className="w-[95%] m-auto object-contain rounded-lg"
                />
              </div>
              <div className="pb-6 sm:pb-12 px-4 sm:px-8 lg:mx-20">
                <img src={features[1].icon} alt="" className="w-12 h-12 sm:w-14 sm:h-14 mb-2" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {features[1].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{features[1].description}</p>
              </div>
            </div>

            {/* Third card */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col"
              style={{ backgroundColor: "#384C75" }}
            >
              <div className="pt-6 sm:pt-12 px-4 sm:px-8 lg:mx-20">
                <img src={features[2].icon} alt="" className="w-12 h-12 sm:w-14 sm:h-14 mb-2" />
                <h3 className="text-lg sm:text-xl font-bold text-white">{features[2].title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{features[2].description}</p>
              </div>
              <div className={`flex justify-center mt-auto px-4 sm:px-0`}>
                <img
                  src={features[2].image}
                  alt={features[2].title}
                  className="w-[95%] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 sm:pt-8">
          <a
            href="#"
            className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            <img
              src="/Assets/section 2/arrow.svg"
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            />
            View all superpowers
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
