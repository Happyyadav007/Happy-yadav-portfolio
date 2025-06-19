import React from 'react';
import PropTypes from 'prop-types';
import { NewspaperIcon } from '../../icons';
import DUMMY_USER_DATA from '../../../constants/data';
import { Button } from '../../common/Button';
import { SectionTitle } from '../../common/SectionTitle';
import { PageWrapper } from '../../common/PageWrapper';
import { Card } from '../../common/Card';

export const BlogListPage = ({ navigateTo }) => (
  <PageWrapper title="Blog">
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      <div className="container mx-auto px-6">
        <SectionTitle title="My Blog" icon={<NewspaperIcon />} subtitle="Insights on web development, technology trends, and personal projects." />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DUMMY_USER_DATA.blogPosts.map((post, idx) => (
            <Card key={post.id} className={`flex flex-col fade-in-section delay-${idx * 150}`}>
              <img src={post.imageUrl} alt={post.title} className="w-full h-52 object-cover group-hover:opacity-90 transition-opacity" onError={(e) => e.target.src='https://placehold.co/600x400/0F172A/E0E7FF?text=Blog+Image&font=inter'}/>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-slate-400 mb-1.5">{post.date}</p>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">{post.title}</h3>
                <p className="text-slate-300 text-sm mb-4 flex-grow leading-relaxed">{post.excerpt}</p>
                <div className="mb-5">
                  {post.tags.slice(0,3).map(tag => <span key={tag} className="text-xs bg-slate-700 text-purple-300 px-2.5 py-1 rounded-full mr-1.5 shadow-sm">{tag}</span>)}
                </div>
                <Button onClick={() => navigateTo("BlogPostPage", { postId: post.id })} variant="outline" className="text-sm mt-auto w-full !py-2">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </PageWrapper>
);

BlogListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};