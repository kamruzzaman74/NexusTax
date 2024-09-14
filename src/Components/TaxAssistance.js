import React, { useState } from 'react';
import { FaCalculator, FaHandHoldingUsd, FaFileContract, FaPhone } from 'react-icons/fa';
import './TaxAssistance.css'; // Importing CSS for animations

const TaxAssistance = () => {
  const [step, setStep] = useState(0);

  // Steps for the tax assistance process
  const steps = [
    {
      icon: <FaCalculator className="iconStyle" />,
      title: "Understand Your Tax Obligations",
      description:
        "We provide a comprehensive overview of Australian tax obligations, helping you understand what is required.",
    },
    {
      icon: <FaHandHoldingUsd className="iconStyle" />,
      title: "Find Deductions & Maximize Refunds",
      description:
        "Our tax agents ensure you don't miss out on any deductions and work to maximize your refund.",
    },
    {
      icon: <FaFileContract className="iconStyle" />,
      title: "Lodge Your Tax Return with Confidence",
      description:
        "We handle the paperwork and lodge your tax return accurately, following all Australian tax laws.",
    },
    {
      icon: <FaPhone className="iconStyle" />,
      title: "Speak with an Australian Tax Agent",
      description:
        "Get personalized advice from a licensed Australian tax agent to solve any complex tax issues you might have.",
    },
  ];

  // Next step handler
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="container">
      <div className="tax-assistance">
        <h1 className="title">Solve Your Tax Issues in Australia</h1>

        <div className={`step-box animate-step`}> {/* Applying CSS Animation */}
          <div className="icon-container">{steps[step].icon}</div>
          <h2 className="step-title">{steps[step].title}</h2>
          <p className="step-description">{steps[step].description}</p>

          {/* Next Step Button */}
          {step < steps.length - 1 ? (
            <button onClick={handleNext} className="next-button">
              Next Step
            </button>
          ) : (
            <a
              href="tel:0444540084"
              className="next-button call-button"
            >
              Contact a Tax Agent
            </a>
          )}
        </div>

        {/* Navigation Dots */}
        <div className="dots-container">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === step ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxAssistance;
