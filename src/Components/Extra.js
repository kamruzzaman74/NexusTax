import React from 'react';
import { FiTrendingUp, FiDollarSign, FiClipboard, FiThumbsUp } from 'react-icons/fi';

const Extra = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-400 to-blue-600 text-white py-8 px-4 sm:px-6 md:py-12 md:px-8 rounded-2xl shadow-xl text-center overflow-hidden z-50">

      {/* Header Section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold animate__animated animate__bounceInDown">
          🌟 Premier Tax Solutions for Australians 🌟
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl font-light animate__animated animate__fadeInUp animate__delay-1s">
          Simplify your tax experience with our expert services. From planning to consultation, we provide comprehensive solutions for Australian taxpayers.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
        
        {/* Tax Consultation */}
        <div className="p-4 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-30"></div>
          <div className="relative z-10">
            <FiClipboard className="text-4xl sm:text-5xl md:text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Tax Consultation</h3>
            <p className="text-base sm:text-lg">Get tailored advice from our experts to maximize your tax benefits and stay compliant with Australian regulations.</p>
          </div>
        </div>
        
        {/* Tax Planning */}
        <div className="p-4 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 opacity-30"></div>
          <div className="relative z-10">
            <FiDollarSign className="text-4xl sm:text-5xl md:text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Tax Planning</h3>
            <p className="text-base sm:text-lg">Strategic planning to minimize tax liabilities and optimize your financial outcomes throughout the year.</p>
          </div>
        </div>

        {/* Audit Support */}
        <div className="p-4 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-30"></div>
          <div className="relative z-10">
            <FiTrendingUp className="text-4xl sm:text-5xl md:text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Audit Support</h3>
            <p className="text-base sm:text-lg">Comprehensive support during audits to ensure accuracy and compliance with all tax obligations.</p>
          </div>
        </div>

        {/* Client Success */}
        <div className="p-4 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-30"></div>
          <div className="relative z-10">
            <FiThumbsUp className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client Success</h3>
            <p className="text-base sm:text-lg">We focus on your success with tailored solutions that align with your financial goals and ensure satisfaction.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 sm:mt-12">
        <p className="text-base sm:text-lg md:text-xl font-light animate__animated animate__fadeInUp animate__delay-2s">
          Don’t let tax concerns hold you back. Connect with us today to discover how our expert team can help you navigate the complexities of the Australian tax system and achieve financial peace of mind. 📞
        </p>
      </div>
    </div>
  );
};

export default Extra;
