import React from 'react';
import { FiAlertTriangle, FiClock, FiHelpCircle, FiXCircle } from 'react-icons/fi';

const Mistakes = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-500 to-orange-600 text-white py-12 px-6 sm:px-8 md:py-16 md:px-12 rounded-2xl shadow-xl max-w-7xl mx-auto mt-16 text-center overflow-hidden">
      
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate__animated animate__bounceInDown">
          🚨 Common Tax Mistakes in Australia 🚨
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light animate__animated animate__fadeInUp animate__delay-1s">
          Avoid these critical tax pitfalls to ensure compliance and maximize your benefits. Learn from these common errors to stay ahead of your tax game!
        </p>
      </div>

      {/* Mistakes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 animate__animated animate__fadeInUp">
        
        {/* Mistake 1 */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-yellow-300 opacity-30"></div>
          <div className="relative z-10">
            <FiAlertTriangle className="text-6xl text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Failing to Keep Records</h3>
            <p className="text-lg">Neglecting to maintain proper records can lead to inaccuracies and penalties. Ensure you keep all receipts and documentation.</p>
          </div>
        </div>
        
        {/* Mistake 2 */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-blue-300 opacity-30"></div>
          <div className="relative z-10">
            <FiClock className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Missing Deadlines</h3>
            <p className="text-lg">Missing tax deadlines can result in fines and interest. Set reminders for key dates to avoid unnecessary penalties.</p>
          </div>
        </div>

        {/* Mistake 3 */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 opacity-30"></div>
          <div className="relative z-10">
            <FiHelpCircle className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Ignoring Professional Help</h3>
            <p className="text-lg">Attempting to navigate tax complexities without professional advice can be risky. Consult with tax experts to ensure accuracy.</p>
          </div>
        </div>

        {/* Mistake 4 */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 opacity-30"></div>
          <div className="relative z-10">
            <FiXCircle className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Incorrect Claims</h3>
            <p className="text-lg">Making incorrect claims can lead to audits and fines. Double-check all claims and consult with a professional if unsure.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <p className="text-lg sm:text-xl md:text-2xl font-light animate__animated animate__fadeInUp animate__delay-2s">
          Don’t let tax mistakes jeopardize your financial health. Reach out to our experts for guidance and ensure your tax affairs are handled correctly. 🌟📞
        </p>
      </div>
    </div>
  );
};

export default Mistakes;
