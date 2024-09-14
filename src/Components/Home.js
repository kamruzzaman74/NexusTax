import React from 'react';
import './Home.css';
import LandingPage from './landing page';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Mart from './Mart';
import Book from './Book';
import Make from './Make';
import TaxAgentComponent from './TaxAgentComponent';
import Footer from './Footer';
import WhyChooseUs from './WhyChooseUs';
import Discount from './Discount';
import Mistakes from './Mistakes';
import Extra from './Extra';
import Annimation from './Annimation';

function Home() {
  return (
    <>
      <div className="homepage-container bg-blue-900 text-white flex flex-col justify-center items-center py-32 md:py-40 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0"></div>
        <div className="text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 mt-20 md:mt-0 animate__animated animate__fadeInDown">
            Welcome to Our Company
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-10 animate__animated animate__fadeInDown animate__delay-500">
            Empowering Financial Solutions for a Better Tomorrow
          </p>
          <FaAngleDoubleDown className="text-white text-2xl md:text-3xl animate-bounce" />
        </div>
      </div>
      <LandingPage />
      <Discount />
      <Mart />
      <Book />
      <Make />
      <TaxAgentComponent />
      <WhyChooseUs />
      <Extra />
      <Mistakes />
      <Annimation />
      <Footer />
    </>
  );
}

export default Home;
