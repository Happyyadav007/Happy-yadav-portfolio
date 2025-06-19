import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../common/Button';
import DUMMY_USER_DATA from '../../../constants/data';

export const HeroSection = ({ navigateTo }) => (
  <div className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden pt-20">
    {/* <div className="absolute inset-0 -z-10"> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div> */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-purple-700/40 rounded-full filter blur-3xl opacity-60 animate-blob"></div>
      {/* <div className="absolute top-1/2 left-1/2 w-60 h-60 md:w-96 md:h-96 bg-pink-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div> */}
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
    {/* </div> */}
    
    
    <div className="relative z-10 fade-in-section">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
        Hi, I'm {DUMMY_USER_DATA.name}
      </h1>
      <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-medium">{DUMMY_USER_DATA.title}</p>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        {DUMMY_USER_DATA.heroSummary}
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-6">
        <Button onClick={() => navigateTo("ProjectListPage")} variant="primary" className="w-full sm:w-auto text-lg !px-10 !py-4">
          View My Work
        </Button>
        <Button onClick={() => navigateTo("ContactPage")} variant="outline" className="w-full sm:w-auto text-lg !px-10 !py-4">
          Get In Touch
        </Button>
      </div>
    </div>
  </div>
);

HeroSection.propTypes = {
  navigateTo: PropTypes.func.isRequired
};