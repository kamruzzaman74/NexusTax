import React from 'react';
import './Animation.css'; // Ensure this CSS file exists with the styles below

function Annimation() {
  return (
    <div className="animation-container">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold animate__animated fancy-title">
          Taxpayer Benefits 💰
        </h1>
        <p className="mt-6 text-lg text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          Discover the latest tax deductions, benefits, and strategies for individuals and businesses in Australia. Stay ahead with valuable insights!
        </p>

        {/* Animated shapes for a fancy, engaging experience */}
        <div className="animation-box mt-12">
          <div className="tax-circle"></div>
          <div className="tax-square"></div>
          <div className="tax-triangle rotate-triangle"></div>
        </div>
      </div>

      {/* Additional animated content for tax insights */}
      <div className="info-box mt-12 animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="text-2xl text-blue-600 font-bold">Why Learn About Tax Benefits? 🌟</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Understanding tax strategies can save you money, whether you're based in Sydney, Melbourne, or Perth. Our insights are tailored to help you maximize your returns!
        </p>
      </div>

      {/* Man shape for a modern touch */}
      <div className="man-shape-container">
        <div className="man-shape"></div>
      </div>
    </div>
  );
}

export default Annimation;
