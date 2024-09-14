import React from 'react';
import { FiFileText, FiBarChart2, FiDollarSign, FiSettings, FiBriefcase, FiClipboard } from 'react-icons/fi';

const All = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-12 md:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate__animated animate__fadeInDown">
            💼 Comprehensive Tax Services 🇦🇺
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 animate__animated animate__fadeInUp">
            🌟 Explore our range of tax services tailored for businesses and individuals in Australia! Let’s make taxes easy and maximize your returns! 💸
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Tax Filing Services */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeInLeft">
            <FiFileText className="text-5xl sm:text-6xl text-blue-500 mx-auto mb-4 animate__bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 text-gray-900">📄 Tax Filing & Compliance</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Effortless tax filing for individuals and businesses. Stay compliant with Australian Tax Office (ATO) regulations while maximizing your refunds! 📑
            </p>
          </div>
          {/* Tax Planning & Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeInRight">
            <FiBarChart2 className="text-5xl sm:text-6xl text-green-500 mx-auto mb-4 animate__bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 text-gray-900">📊 Tax Planning & Analysis</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Plan ahead with detailed tax analysis, optimize your financial strategies, and minimize your tax liabilities. 💡
            </p>
          </div>
          {/* Wealth Management */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeInLeft">
            <FiDollarSign className="text-5xl sm:text-6xl text-purple-500 mx-auto mb-4 animate__bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 text-gray-900">💼 Wealth Management & Investment</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Protect and grow your wealth with tax-efficient investment strategies. Our expert advice ensures your assets work for you. 💰
            </p>
          </div>
          {/* Business Tax Consulting */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeInRight">
            <FiSettings className="text-5xl sm:text-6xl text-yellow-500 mx-auto mb-4 animate__bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 text-gray-900">💼 Business Tax Consulting</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Expert advice on corporate taxes, GST, payroll taxes, and other business tax matters. We help you stay compliant and reduce costs. 📈
            </p>
          </div>
          {/* Corporate Finance */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeInLeft">
            <FiBriefcase className="text-5xl sm:text-6xl text-red-500 mx-auto mb-4 animate__bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 text-gray-900">🏢 Corporate Tax Solutions</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Specialized corporate tax solutions, including mergers, acquisitions, and complex tax structures for businesses of all sizes. 🏦
            </p>
          </div>
          {/* Tax Documentation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeInRight">
            <FiClipboard className="text-5xl sm:text-6xl text-pink-500 mx-auto mb-4 animate__bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-2 text-gray-900">📝 Tax Documentation & Record Keeping</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Accurate record-keeping and documentation services to ensure you're always prepared for tax audits and reviews. 🧾
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;

