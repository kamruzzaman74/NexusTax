import React, { useState, useEffect } from 'react';
import './Tcall.css'; // Import the CSS for animations

const Tcall = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step < 3) {
        setStep(step + 1);
      }
    }, 3000); // Automatically change steps every 3 seconds
    return () => clearInterval(interval);
  }, [step]);

  const steps = [
    {
      title: "Understanding Your Tax",
      message: "We analyze your tax situation and guide you through Australian tax obligations.",
      emoji: "📊",
    },
    {
      title: "Lodging Your Tax Return",
      message: "We lodge your tax return with accuracy, following Australian regulations.",
      emoji: "📝",
    },
    {
      title: "Maximizing Your Refund",
      message: "Our experts ensure you receive all eligible deductions and refunds.",
      emoji: "💰",
    },
    {
      title: "Meet Your Tax Agent",
      message: "Congratulations! You’ve successfully met with an Australian tax agent.",
      emoji: "😊",
    },
  ];

  return (
    <div className="tcall-container">
      <div className={`tax-card step-${step}`}>
        <h1 className="tax-title">{steps[step].title}</h1>
        <p className="tax-message">{steps[step].message}</p>
        <div className="emoji">{steps[step].emoji}</div>
      </div>

      {/* Satisfaction animation after the last step */}
      {step === 3 && (
        <div className="satisfaction-container">
          <h2 className="satisfaction-title">Satisfaction Guaranteed!</h2>
          <p className="satisfaction-message">
            You’ve successfully met with an Australian tax agent, ensuring your financial clarity and satisfaction.
          </p>
          <div className="emoji">🎉🥳</div>
        </div>
      )}
    </div>
  );
};

export default Tcall;


