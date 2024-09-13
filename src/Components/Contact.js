import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaGlobeAmericas, FaRegHandshake, FaUserShield } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Connect with Us
          </h2>
          <p className="text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-2s">
            Ready to take the next step towards financial clarity? Reach out to us—we’re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <div className="flex items-center mb-6">
              <FiPhone className="text-3xl text-blue-500 mr-4 animate__animated animate__fadeIn animate__delay-4s" />
              <p className="text-lg text-gray-700">📞 0444 540 084</p>
            </div>
            <div className="flex items-center mb-6">
              <FiMail className="text-3xl text-green-500 mr-4 animate__animated animate__fadeIn animate__delay-5s" />
              <p className="text-lg text-gray-700">📧 contact@nexus.com</p>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-3xl text-red-500 mr-4 animate__animated animate__fadeIn animate__delay-6s" />
              <p className="text-lg text-gray-700">📍 8 Gamble St, Campbelltown, NSW-2560</p>
            </div>
          </div>

          {/* Engaging Content */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 animate__animated animate__fadeIn animate__delay-7s">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
            <div className="mb-6 flex items-start">
              <FaGlobeAmericas className="text-3xl text-purple-500 mr-4 animate__animated animate__fadeIn animate__delay-8s" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Global Expertise 🌍</h4>
                <p className="text-gray-700 mt-2">Our team brings global knowledge to navigate complex tax situations and provide tailored solutions for businesses of all sizes.</p>
              </div>
            </div>
            <div className="mb-6 flex items-start">
              <FaRegHandshake className="text-3xl text-orange-500 mr-4 animate__animated animate__fadeIn animate__delay-9s" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Personalized Service 🤝</h4>
                <p className="text-gray-700 mt-2">We value personal relationships and offer customized support to ensure your financial needs are met with precision.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaUserShield className="text-3xl text-teal-500 mr-4 animate__animated animate__fadeIn animate__delay-10s" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Trusted Security 🔒</h4>
                <p className="text-gray-700 mt-2">Our commitment to safeguarding your data and providing reliable advice is backed by our extensive experience and industry standards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-11s">
            Our Location
          </h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Nexus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.284234332923!2d150.80178531555686!3d-34.06516062212666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdcb11fc8a8f%3A0xa2539cb7a65d682e!2s8%20Gamble%20St%2C%20Campbelltown%20NSW%202560%2C%20Australia!5e0!3m2!1sen!2s!4v1647581890042!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
