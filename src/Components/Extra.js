import React from 'react';
import { FiTrendingUp, FiDollarSign, FiClipboard, FiThumbsUp } from 'react-icons/fi';

const Extra = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-400 to-blue-600 text-white py-12 px-6 sm:px-8 md:py-16 md:px-12 rounded-2xl shadow-xl max-w-7xl mx-auto mt-16 text-center overflow-hidden">

      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate__animated animate__bounceInDown">
          🌟 Premier Tax Solutions for Australians 🌟
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light animate__animated animate__fadeInUp animate__delay-1s">
          Simplify your tax experience with our expert services. From planning to consultation, we provide comprehensive solutions for Australian taxpayers.
        </p>
      </div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Tax Consultation */}
        <div className="flex-1 p-6 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-30"></div>
          <div className="relative z-10">
            <FiClipboard className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Tax Consultation</h3>
            <p className="text-lg">Get tailored advice from our experts to maximize your tax benefits and stay compliant with Australian regulations.</p>
          </div>
        </div>
        
        {/* Tax Planning */}
        <div className="flex-1 p-6 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 opacity-30"></div>
          <div className="relative z-10">
            <FiDollarSign className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Tax Planning</h3>
            <p className="text-lg">Strategic planning to minimize tax liabilities and optimize your financial outcomes throughout the year.</p>
          </div>
        </div>

        {/* Audit Support */}
        <div className="flex-1 p-6 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-30"></div>
          <div className="relative z-10">
            <FiTrendingUp className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Audit Support</h3>
            <p className="text-lg">Comprehensive support during audits to ensure accuracy and compliance with all tax obligations.</p>
          </div>
        </div>

        {/* Client Success */}
        <div className="flex-1 p-6 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-30"></div>
          <div className="relative z-10">
            <FiThumbsUp className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Client Success</h3>
            <p className="text-lg">We focus on your success with tailored solutions that align with your financial goals and ensure satisfaction.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <p className="text-lg sm:text-xl md:text-2xl font-light animate__animated animate__fadeInUp animate__delay-2s">
          Don’t let tax concerns hold you back. Connect with us today to discover how our expert team can help you navigate the complexities of the Australian tax system and achieve financial peace of mind. 📞
        </p>
      </div>
    </div>
  );
};

export default Extra;
