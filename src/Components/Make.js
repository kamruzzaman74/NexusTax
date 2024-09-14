import React from 'react';
import { FiInfo } from 'react-icons/fi';
import pic5 from '../photo/la.webp'; // Ensure this image is relevant or replace it with a more suitable one

const Make = () => {
  // Define an array of tax-related tips for Australia
  const taxTips = [
    {
      title: "Understand Australian Tax Obligations",
      description: "Familiarize yourself with the Australian tax system, including GST, income tax, and other taxes. It's essential to stay compliant and understand your obligations.",
    },
    {
      title: "Keep Accurate Records",
      description: "Maintain detailed records of all income, expenses, and deductions. This will make tax time easier and ensure you can claim all eligible deductions.",
    },
    {
      title: "Utilize Tax Deductions",
      description: "Take advantage of available tax deductions such as work-related expenses, home office costs, and charitable donations. Consult the ATO website for a comprehensive list of deductions.",
    },
    {
      title: "Plan for Tax Changes",
      description: "Stay informed about changes in tax laws and rates. Adjust your financial planning accordingly to optimize your tax position and avoid surprises at tax time.",
    },
    {
      title: "Seek Professional Tax Advice",
      description: "Consider consulting a tax professional to get personalized advice and strategies for your specific situation. This can help maximize your tax benefits and ensure compliance.",
    },
  ];

  return (
    <div className="make-container bg-white p-6 md:flex md:items-center md:justify-between animate__animated animate__fadeIn animate__delay-1s">
      {/* Responsive text and padding */}
      <div className="md:w-1/2 md:pr-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Essential Tax Tips for Australians
        </h1>
        <div className="tips">
          {taxTips.map((tip, index) => (
            <div key={index} className="tip mb-6 animate__animated animate__fadeIn animate__delay-3s">
              {/* Adjusted text size and margin for mobile */}
              <h3 className="tip-title flex items-center text-lg sm:text-xl text-orange-500 mb-2">
                <FiInfo className="mr-2" /> {tip.title}
              </h3>
              <p className="tip-description text-sm sm:text-base text-gray-700 ml-4 sm:ml-8 md:ml-0">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image container with responsive padding */}
      <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
        <div className="image-container">
          <img 
            src={pic5} 
            alt="Tax Related Image" 
            className="financial-image w-full h-auto max-h-64 sm:max-h-96 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s" 
          />
        </div>
      </div>
    </div>
  );
};

export default Make;


