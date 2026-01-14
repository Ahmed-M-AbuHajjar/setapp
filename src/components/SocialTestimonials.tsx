import React, { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  handle: string;
  socialIcon: string;
  color: string;
}

const SocialTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
      author: "Arash Pourhabibi",
      handle: "@ArashPourhabibi",
      socialIcon: "/Assets/section 2/svg.svg",
      color: "#71719A",
    },
    {
      text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
      author: "Mauricio Sanchez",
      handle: "@m741s",
      socialIcon: "/Assets/section 2/svg-1.svg",
      color: "#D9AE89",
    },
    {
      text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Meredith Sweet",
      handle: "@meredith.sweet.alberstein",
      socialIcon: "/Assets/section 2/svg-2.svg",
      color: "#765070",
    },
  ];

  const socialIcons = [
    { icon: "/Assets/section 2/facebook.svg", name: "Facebook" },
    { icon: "/Assets/section 2/twitter.svg", name: "Twitter" },
    { icon: "/Assets/section 2/instagram.svg", name: "Instagram" },
    { icon: "/Assets/section 2/youtube.svg", name: "YouTube" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
          <h2 className="section-heading text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
            Setapp in your words.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-start sm:items-end">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-0 sm:mb-4">
              What you say about how Setapp powers you up.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation arrows - positioned above cards */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev > 0 ? prev - 1 : testimonials.length - 1
                  )
                }
                className="w-8 h-8 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-8 h-8 text-gray-400"
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
                className="w-8 h-8 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-8 h-8 text-gray-400"
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

          {/* Testimonials */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col min-h-[300px] sm:min-h-[350px]"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                {/* Quote panel */}
                <div
                  className="m-2 rounded-xl pb-6 sm:pb-10 text-white flex-1"
                  style={{ backgroundColor: testimonial.color }}
                >
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed p-4 sm:p-6">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author footer (full width, pinned to bottom) */}
                <div className="w-full mt-auto px-4 sm:px-6 py-4 sm:py-5 flex items-end justify-between">
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.handle}
                    </p>
                  </div>
                  <img
                    src={testimonial.socialIcon}
                    alt=""
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-gray-900 w-2" : "bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialTestimonials;
