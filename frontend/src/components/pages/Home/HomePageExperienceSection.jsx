// HomePageExperienceSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { BriefcaseIcon } from '../../icons';
import { Card, Button, SectionTitle } from '../../common';
import DUMMY_USER_DATA from '../../../constants/data';

export const HomePageExperienceSection = ({ navigateTo }) => (
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
        title="Career Snapshot" 
        icon={<BriefcaseIcon />} 
        subtitle="A glimpse into my professional journey."
      />
      <div className="space-y-10 max-w-3xl mx-auto">
        {DUMMY_USER_DATA.experience.slice(0, 1).map((exp, idx) => (
          <Card key={exp.id} className={`p-6 md:p-8 fade-in-section delay-${idx * 200}`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-purple-300">{exp.role}</h3>
              <p className="text-sm text-slate-400 mt-1 sm:mt-0">{exp.period}</p>
            </div>
            <p className="text-lg text-slate-300 mb-4 font-medium">{exp.company}</p>
            <p className="text-slate-400 mb-5 line-clamp-3">{exp.description.join(" ")}</p>
            <Button onClick={() => navigateTo("ResumePage")} variant="outline" className="text-sm !py-2">
              View Full Resume
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

HomePageExperienceSection.propTypes = {
  navigateTo: PropTypes.func.isRequired
};