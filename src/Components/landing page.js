import React from 'react';
import pic1 from '../photo/k.webp';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      
      {/* Left side - Heading and Description */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center lg:items-start">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate__animated animate__fadeInLeft">
          💼 Maximize Your Tax Returns, Simplify Your Finances 💵
        </h1>
        <p className="text-md sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-700 animate__animated animate__fadeInLeft">
          ⚡ <span className="text-green-500 font-semibold">Expert Tax Solutions</span> for Australian Businesses and Individuals. Our certified tax agents provide personalized tax planning, compliance, and advisory services, ensuring you get the most out of your tax returns while staying compliant with <span className="text-blue-600 font-bold">Australian Tax Laws</span> 🇦🇺.
        </p>
        <ul className="list-disc ml-4 sm:ml-5 space-y-3 sm:space-y-4 text-md sm:text-lg lg:text-xl animate__animated animate__fadeInLeft">
          <li className="text-purple-600 font-semibold">📊 Comprehensive Tax Planning</li>
          <li className="text-blue-500 font-semibold">📝 Stress-Free Tax Compliance</li>
          <li className="text-green-500 font-semibold">💡 Expert Financial Advisory</li>
          <li className="text-yellow-500 font-semibold">💼 Business Tax Services</li>
        </ul>
      </div>

      {/* Right side - Picture */}
      <div className="w-full lg:w-1/2 relative overflow-hidden mt-6 lg:mt-0 flex items-center justify-center">
        <img
          src={pic1}
          alt="Australian Tax Agent"
          className="w-full h-64 sm:h-80 lg:h-full object-cover transform scale-105 hover:scale-110 transition duration-500 ease-in-out rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 hover:opacity-0 transition duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default LandingPage;
