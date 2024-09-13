import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import 'animate.css';

const Footer = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 500); // Delay animation by 0.5 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="bg-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-lg fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        
        {/* Footer Header */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          NexusTax & Accounting Firm Pty Ltd. 🏦
        </p>
        
        {/* Contact Information */}
        <div className="mb-6">
          <p className="text-sm sm:text-md mb-2 text-gray-700">
            📞 Phone: <span className="text-green-600 font-semibold">0444 540 084</span>
          </p>
          <p className="text-sm sm:text-md mb-2 text-gray-700">
            ✉️ Email: <span className="text-yellow-600 font-semibold">kt@nexustax.com.au</span>
          </p>
          <p className="text-xs sm:text-sm mb-4 text-gray-600">
            ⚖️ All Rights Reserved by <span className="text-gray-500 font-semibold">@growMore19</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          <a 
            href="https://www.linkedin.com/in/kowser-talukder-647892252/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} sm={30} color="#0077B5" className={animation ? "hover:text-blue-500 animate__animated animate__pulse" : ""} />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61557386476440" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform duration-300 transform hover:scale-110"
          >
            <FaFacebook size={24} sm={30} color="#3b5998" className={animation ? "hover:text-blue-500 animate__animated animate__pulse" : ""} />
          </a>
        </div>

        {/* Footer Tagline */}
        <p className="text-xs sm:text-sm text-gray-500 animate__animated animate__fadeIn animate__delay-3s">
          Empowering Your Financial Future 🌟🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;


