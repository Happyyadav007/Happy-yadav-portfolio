// HomePageEducationSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { AcademicCapIcon } from '../../icons';
import { Card, Button, SectionTitle } from '../../common';
import DUMMY_USER_DATA from '../../../constants/data';

export const HomePageEducationSection = ({ navigateTo }) => (
  <div className="relative py-16 md:py-20 overflow-hidden">
    {/* Unified Background */}
    {/* <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-purple-700/40 rounded-full filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 md:w-96 md:h-96 bg-pink-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue-700/40 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
    </div> */}
    
    {/* Grid overlay */}
    {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
    
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Education Highlights" 
        icon={<AcademicCapIcon />} 
        subtitle="Academic achievements and qualifications"
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {DUMMY_USER_DATA.education.slice(0,2).map((edu, idx) => (
          <Card key={edu.id} className={`p-6 fade-in-section delay-${idx * 200}`}>
            <AcademicCapIcon className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-bold text-purple-300">{edu.degree}</h3>
            <p className="text-slate-300 text-lg">{edu.institution}</p>
            <p className="text-sm text-slate-400 mb-3">{edu.period}</p>
            <p className="text-slate-400 text-sm line-clamp-2">{edu.details}</p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12 fade-in-section delay-400">
        <Button onClick={() => navigateTo("ResumePage")} variant="secondary">
          More About My Qualifications
        </Button>
      </div>
    </div>
  </div>
);

HomePageEducationSection.propTypes = {
  navigateTo: PropTypes.func.isRequired
};