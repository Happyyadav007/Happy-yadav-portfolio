import React from 'react';
import PropTypes from 'prop-types';
import { HeroSection, AboutSection, HomePageExperienceSection, HomePageEducationSection } from './';

export const HomePage = ({ navigateTo }) => (
  <div className="relative overflow-hidden">
    {/* Unified Background for entire HomePage */}
     <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-purple-700/40 rounded-full filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 md:w-96 md:h-96 bg-pink-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>

    <HeroSection navigateTo={navigateTo} />
    <AboutSection navigateTo={navigateTo} />
    <HomePageExperienceSection navigateTo={navigateTo} />
    <HomePageEducationSection navigateTo={navigateTo} />
  </div>
);

HomePage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};