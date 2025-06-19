import React from 'react';
import PropTypes from 'prop-types';
import { SparklesIcon } from '../../icons';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { SectionTitle } from '../../common/SectionTitle';
import { PageWrapper } from '../../common/PageWrapper';
import DUMMY_USER_DATA from '../../../constants/data';

export const ServicesPage = ({ navigateTo }) => (
  <PageWrapper title="Services">
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      <div className="container mx-auto px-6">
        <SectionTitle title="What I Offer" icon={<SparklesIcon />} subtitle="Leveraging my MERN stack expertise to build impactful digital solutions." />
        <div className="grid md:grid-cols-2 gap-8">
          {DUMMY_USER_DATA.services.map((service, idx) => (
            <Card key={service.id} className={`p-6 md:p-8 flex flex-col fade-in-section delay-${idx * 150}`}>
              <div className="mb-5">{React.cloneElement(service.icon(), {className: "w-12 h-12 text-purple-400"})}</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-5 flex-grow text-base leading-relaxed">{service.description}</p>
              <div className="mt-auto pt-5 border-t border-slate-700/50">
                <h4 className="text-xs text-slate-500 uppercase font-semibold mb-2.5">Related Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 fade-in-section delay-600">
          <p className="text-xl text-slate-300 mb-6">Have a project in mind or need a skilled developer?</p>
          <Button onClick={() => navigateTo("ContactPage")} variant="primary" className="text-lg">
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  </PageWrapper>
);

ServicesPage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};