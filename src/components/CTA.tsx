import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Light beige card */}
        <div
          className="rounded-2xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="flex flex-col">
            {/* Icon */}
            <div className="mb-6 sm:mb-8">
              <img
                src="/Assets/section 2/super.svg"
                alt="Superpowers icon"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>

            {/* Text content */}
            <div className="mb-6 sm:mb-8">
              <h2 className="cta-headline text-gray-900 mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight sm:leading-normal">
                Superpowers starting $9.99/month.
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Free for 7 days.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-setapp-dark text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                Get started now
              </button>
              <button className="bg-transparent text-gray-900 border-2 border-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto">
                More about Setapp
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* White background starting from middle of card */}
      <div
        className="absolute left-0 right-0 bottom-0 bg-setapp-dark"
        style={{ top: "calc(15% + 200px)" }}
      ></div>
    </section>
  );
};

export default CTA;
