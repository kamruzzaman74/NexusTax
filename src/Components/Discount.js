import React from 'react';
import { FiPercent } from 'react-icons/fi';

const Discount = () => {
  return (
    <div className="relative bg-white text-gray-900 py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 text-center rounded-2xl shadow-xl max-w-3xl mx-auto mt-12 transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
      
      {/* Glowing Background Pulses */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 via-transparent to-white opacity-20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -top-12 left-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-12 right-4 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-blue-400 rounded-full blur-3xl opacity-30 animate__animated animate__zoomIn animate__delay-1s"></div>

      {/* Discount Icon */}
      <div className="relative z-10 mb-4 flex justify-center items-center animate__animated animate__zoomIn animate__faster">
        <FiPercent className="text-5xl sm:text-6xl md:text-7xl text-yellow-500 drop-shadow-2xl" />
      </div>

      {/* Main Discount Heading */}
      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide animate__animated animate__lightSpeedInRight">
        🎉 20% Tax Discount! 🎉
      </h1>

      {/* Subtext */}
      <p className="relative z-10 mt-4 text-base sm:text-lg md:text-xl font-medium tracking-wide text-gray-700 animate__animated animate__fadeInUp animate__delay-1s">
        Get 20% off on all tax services from your trusted Australian Tax Agency. Filing, consulting, and more! 💸
      </p>

      {/* Decorative Line */}
      <div className="relative z-10 mt-6 sm:mt-8 w-3/4 mx-auto h-1 bg-gradient-to-r from-yellow-300 to-red-500 animate-pulse"></div>

      {/* Offer Badge */}
      <div className="relative z-10 mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl font-bold bg-yellow-300 text-gray-900 py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 inline-block rounded-full shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300 ease-in-out animate__animated animate__rubberBand">
        OFFER VALID THIS MONTH ONLY! 🕒
      </div>
    </div>
  );
};

export default Discount;

