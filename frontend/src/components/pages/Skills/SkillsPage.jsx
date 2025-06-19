import React from 'react';
import PropTypes from 'prop-types';
import { CubeTransparentIcon } from '../../icons'
import DUMMY_USER_DATA from '../../../constants/data';
import { Button } from '../../common/Button';
import { SectionTitle } from '../../common/SectionTitle';
import { PageWrapper } from '../../common/PageWrapper';

export const SkillsPage = ({ navigateTo }) => (
  <PageWrapper title="Skills">
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      <div className="container mx-auto px-6">
        <SectionTitle title="My Technical Toolkit" icon={<CubeTransparentIcon />} subtitle="A comprehensive overview of the technologies and tools I work with." />
        <div className="space-y-12">
          {Object.values(DUMMY_USER_DATA.skills).map((category, catIdx) => (
            <div key={category.name} className={`fade-in-section delay-${catIdx * 150}`}>
              <div className="flex items-center mb-6">
                {React.cloneElement(category.icon(), {className: "w-8 h-8 text-purple-400 mr-3"})}
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-300">{category.name}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((skill, skillIdx) => (
                  <div key={skill} className={`bg-slate-800/70 backdrop-blur-md rounded-xl shadow-xl overflow-hidden p-4 text-center transition-all duration-300 hover:bg-purple-600/20 fade-in-section delay-${catIdx * 150 + skillIdx * 50}`}>
                    <p className="font-medium text-slate-200 text-base">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 fade-in-section delay-600">
          <p className="text-xl text-slate-300 mb-6">Interested in how these skills can benefit your project?</p>
          <Button onClick={() => navigateTo("ContactPage")} variant="primary" className="text-lg">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  </PageWrapper>
);

SkillsPage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};