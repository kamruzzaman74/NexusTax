import React from 'react';
import { FiPercent } from 'react-icons/fi';

const Discount = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-red-500 to-pink-500 text-white py-16 md:py-20 px-6 sm:px-8 text-center rounded-2xl shadow-xl max-w-3xl mx-auto mt-12 transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
      
      {/* Glowing Background Pulses */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 via-transparent to-pink-500 opacity-20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -top-16 left-8 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-20 right-16 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-400 rounded-full blur-3xl opacity-30 animate__animated animate__zoomIn animate__delay-1s"></div>

      {/* Discount Icon */}
      <div className="relative z-10 mb-4 flex justify-center items-center animate__animated animate__zoomIn animate__faster">
        <FiPercent className="text-7xl sm:text-8xl md:text-9xl text-yellow-400 drop-shadow-2xl transform rotate-12" />
      </div>

      {/* Main Discount Heading */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide animate__animated animate__lightSpeedInRight">
        🎉 25% Tax Discount! 🎉
      </h1>

      {/* Subtext */}
      <p className="relative z-10 mt-4 text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-white animate__animated animate__fadeInUp animate__delay-1s">
        Get 25% off on all tax services from your trusted Australian Tax Agency. Filing, consulting, and more! 💸
      </p>

      {/* Decorative Line */}
      <div className="relative z-10 mt-6 sm:mt-8 w-3/4 mx-auto h-1 bg-gradient-to-r from-yellow-300 to-red-500 animate-pulse"></div>

      {/* Offer Badge */}
      <div className="relative z-10 mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold bg-yellow-300 text-gray-900 py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 inline-block rounded-full shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300 ease-in-out animate__animated animate__rubberBand">
        OFFER VALID THIS MONTH ONLY! 🕒
      </div>
    </div>
  );
};

export default Discount;
