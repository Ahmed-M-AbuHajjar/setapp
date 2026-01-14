import React, { useState } from "react";

const Journey: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.",
      author: "Jason Staczek",
      image: "/Assets/section 2/image 67.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-setapp-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
            <h2 className="section-heading text-white text-2xl sm:text-3xl lg:text-4xl">
              Your Setapp journey.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg lg:max-w-none">
              Type in your task into Setapp search and get instant app
              recommendations.
            </p>
          </div>
        </div>

        <div className="mx-auto relative">
          <div
            className="rounded-2xl overflow-hidden shadow-2xl p-0 sm:pl-3 sm:pr-3 sm:pt-3 relative z-10"
            style={{ backgroundColor: "#765070" }}
          >
            {/* Navigation arrows */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex items-center space-x-2">
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev > 0 ? prev - 1 : testimonials.length - 1
                  )
                }
                className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev < testimonials.length - 1 ? prev + 1 : 0
                  )
                }
                className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
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
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-end">
              {/* Left side - Text */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1">
                <p className="text-white text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                  {testimonials[currentSlide].quote}
                </p>
                <p className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                  {testimonials[currentSlide].author}
                </p>
                <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-400 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Right side - Image */}
              <div className="relative order-1 md:order-2 flex items-end">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].author}
                  className="w-full h-80 sm:h-96 md:h-[400px] lg:h-full object-contain sm:object-cover rounded-lg md:rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center space-x-4 mt-6 relative z-10">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* White background starting from middle of card */}
      <div
        className="absolute left-0 right-0 bottom-0 bg-white"
        style={{ top: "calc(40% + 200px)" }}
      ></div>
    </section>
  );
};

export default Journey;
