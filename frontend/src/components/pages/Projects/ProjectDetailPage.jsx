import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, GithubIcon, LinkIcon } from '../../icons';
import DUMMY_USER_DATA from '../../../constants/data';
import { Button } from '../../common/Button';
import { PageWrapper } from '../../common/PageWrapper';

export const ProjectDetailPage = ({ navigateTo, projectId }) => {
  const project = DUMMY_USER_DATA.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <PageWrapper title="Project Not Found">
        <div className="relative py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <CodeBracketIcon className="w-12 h-12 mx-auto text-purple-400 mb-4" />
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">Error 404</h1>
              <p className="text-xl text-slate-300 mb-8">Oops! The project you're looking for doesn't seem to exist.</p>
              <Button onClick={() => navigateTo("ProjectListPage")} variant="primary">Back to Projects</Button>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={project.name}>
      <div className="relative py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 fade-in-section">
            <Button onClick={() => navigateTo("ProjectListPage")} variant="ghost" className="!px-3 !py-1.5 text-sm" icon={ChevronLeftIcon}>
              Back to All Projects
            </Button>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-3 fade-in-section">
              <img src={project.imageUrl.replace('600x400', '800x500')} alt={project.name} className="w-full rounded-lg shadow-2xl mb-8 border-2 border-slate-700" onError={(e) => e.target.src='https://placehold.co/800x500/0F172A/E0E7FF?text=Image+Error&font=inter'}/>
            </div>
            <div className="lg:col-span-2 fade-in-section delay-200">
              <p className="text-sm text-purple-400 uppercase font-semibold mb-1">{project.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">{project.name}</h1>
              <div className="prose prose-lg prose-custom max-w-none mb-6 space-y-4">
                <p>{project.longDescription}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => <span key={t} className="bg-slate-700 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">{t}</span>)}
                </div>
              </div>
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-slate-400 space-y-1.5 pl-1">
                    {project.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              )}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {project.sourceLink && <Button href={project.sourceLink} target="_blank" rel="noopener noreferrer" variant="primary" className="flex-1 text-center" icon={GithubIcon}>View Source</Button>}
                {project.liveLink && <Button href={project.liveLink} target="_blank" rel="noopener noreferrer" variant="secondary" className="flex-1 text-center" icon={LinkIcon}>Live Demo</Button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

ProjectDetailPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  projectId: PropTypes.string
};