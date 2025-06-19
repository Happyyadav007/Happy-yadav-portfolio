import React from 'react';
import PropTypes from 'prop-types';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  CubeTransparentIcon,
  TrophyIcon,
  DocumentTextIcon,
  DownloadIcon
} from '../../icons';
import DUMMY_USER_DATA from '../../../constants/data';
import { Button } from '../../common/Button';
import { SectionTitle } from '../../common/SectionTitle';
import { PageWrapper } from '../../common/PageWrapper';

export const ResumePage = ({ navigateTo }) => (
  <PageWrapper title="Resume">
    <div className="relative py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Resume" icon={<DocumentTextIcon />} subtitle="A detailed overview of my professional background, skills, and achievements." />
        
        <div className="text-center mb-12 fade-in-section">
          <Button href={DUMMY_USER_DATA.cvLink} target="_blank" rel="noopener noreferrer" variant="primary" icon={DownloadIcon} className="text-lg">
            Download CV
          </Button>
        </div>

        {/* Experience Section */}
        <div className="mb-16 fade-in-section delay-100">
          <h3 className="text-3xl font-semibold text-purple-300 mb-8 flex items-center"><BriefcaseIcon className="w-8 h-8 mr-3 text-purple-400" />Experience</h3>
          <div className="space-y-10 border-l-2 border-purple-500/50 pl-8 relative">
            {DUMMY_USER_DATA.experience.map((exp, idx) => (
              <div key={exp.id} className="relative pl-4 group">
                <div className="absolute -left-[34px] top-1 w-4 h-4 bg-slate-700 border-2 border-purple-500 rounded-full group-hover:bg-purple-500 transition-colors"></div>
                <p className="text-xs text-slate-400 mb-1">{exp.period} {exp.location && `| ${exp.location}`}</p>
                <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
                <p className="text-md text-purple-300 mb-3">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-sm">
                  {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16 fade-in-section delay-200">
          <h3 className="text-3xl font-semibold text-purple-300 mb-8 flex items-center"><AcademicCapIcon className="w-8 h-8 mr-3 text-purple-400" />Education</h3>
          <div className="space-y-8">
            {DUMMY_USER_DATA.education.map(edu => (
              <div key={edu.id} className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow-xl overflow-hidden p-6">
                <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                <p className="text-md text-purple-300">{edu.institution}</p>
                <p className="text-xs text-slate-400 mb-2">{edu.period}</p>
                <p className="text-sm text-slate-400">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16 fade-in-section delay-300">
          <h3 className="text-3xl font-semibold text-purple-300 mb-8 flex items-center"><CubeTransparentIcon className="w-8 h-8 mr-3 text-purple-400" />Skills</h3>
          <div className="space-y-8">
            {Object.values(DUMMY_USER_DATA.skills).map((category) => (
              <div key={category.name}>
                <div className="flex items-center mb-4">
                  {React.cloneElement(category.icon(), {className: "w-7 h-7 text-purple-400 mr-2.5"})}
                  <h4 className="text-xl font-semibold text-slate-200">{category.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(skill => (
                    <span key={skill} className="bg-slate-700 text-purple-300 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="fade-in-section delay-400">
          <h3 className="text-3xl font-semibold text-purple-300 mb-8 flex items-center"><TrophyIcon className="w-8 h-8 mr-3 text-purple-400" />Achievements & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {DUMMY_USER_DATA.achievements.map(ach => (
              <div key={ach.id} className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow-xl overflow-hidden p-6">
                <h4 className="text-lg font-bold text-slate-100">{ach.name}</h4>
                <p className="text-sm text-purple-300 mb-1">{ach.issuer} - {ach.date}</p>
                <p className="text-sm text-slate-400">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

ResumePage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};