import React from 'react';
import PropTypes from 'prop-types';
import { NewspaperIcon, ChevronLeftIcon } from '../../icons';
import DUMMY_USER_DATA from '../../../constants/data';
import { Button } from '../../common/Button';
import { PageWrapper } from '../../common/PageWrapper';

export const BlogPostPage = ({ navigateTo, postId }) => {
  const post = DUMMY_USER_DATA.blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <PageWrapper title="Post Not Found">
        <div className="relative py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <NewspaperIcon className="w-12 h-12 mx-auto text-purple-400 mb-4" />
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">Error 404</h1>
              <p className="text-xl text-slate-300 mb-8">Sorry, this blog post could not be found.</p>
              <Button onClick={() => navigateTo("BlogListPage")} variant="primary">Back to Blog</Button>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={post.title}>
      <div className="relative py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 fade-in-section">
            <Button onClick={() => navigateTo("BlogListPage")} variant="ghost" className="!px-3 !py-1.5 text-sm" icon={ChevronLeftIcon}>
              Back to All Posts
            </Button>
          </div>
          <article className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3 tracking-tight">{post.title}</h1>
            <p className="text-sm text-slate-400 mb-8">{post.date}</p>
            {post.imageUrl && (
              <img 
                src={post.imageUrl.replace('600x400','800x400')} 
                alt={post.title} 
                className="w-full rounded-lg shadow-lg mb-10 max-h-[450px] object-cover border-2 border-slate-700" 
                onError={(e) => e.target.src='https://placehold.co/800x400/0F172A/E0E7FF?text=Image+Error&font=inter'}
              />
            )}
            <div 
              className="prose prose-lg prose-custom max-w-none" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            <div className="mt-10 pt-6 border-t border-slate-700">
              <h4 className="text-sm font-semibold text-slate-400 mb-3">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-slate-700 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </PageWrapper>
  );
};

BlogPostPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  postId: PropTypes.string
};