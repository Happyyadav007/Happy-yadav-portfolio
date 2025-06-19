import React from 'react';
import PropTypes from 'prop-types';
import { CodeBracketIcon } from '../../icons';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { SectionTitle } from '../../common/SectionTitle';
import { PageWrapper } from '../../common/PageWrapper';
import DUMMY_USER_DATA from '../../../constants/data';

export const ProjectListPage = ({ navigateTo }) => (
  <PageWrapper title="Projects">
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      <div className="container mx-auto px-6">
        <SectionTitle title="My Projects" icon={<CodeBracketIcon />} subtitle="A selection of my recent work and case studies." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_USER_DATA.projects.map((project, idx) => (
            <Card key={project.id} className={`flex flex-col fade-in-section delay-${idx * 150}`}>
              <img src={project.imageUrl} alt={project.name} className="w-full h-52 object-cover group-hover:opacity-90 transition-opacity" onError={(e) => e.target.src='https://placehold.co/600x400/0F172A/E0E7FF?text=Image+Error&font=inter'}/>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-purple-400 uppercase font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">{project.name}</h3>
                <p className="text-sm text-slate-400 mb-3">Tech: {project.tech.slice(0,3).join(', ')}{project.tech.length > 3 ? '...' : ''}</p>
                <p className="text-slate-300 mb-4 flex-grow text-sm leading-relaxed">{project.shortDescription}</p>
                <Button onClick={() => navigateTo("ProjectDetailPage", { projectId: project.id })} variant="primary" className="mt-auto w-full !py-2.5 text-sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </PageWrapper>
);

ProjectListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};