import React from 'react';
import PropTypes from 'prop-types';
import { ChatBubbleLeftRightIcon } from '../../icons';
import DUMMY_USER_DATA from '../../../constants/data';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { SectionTitle } from '../../common/SectionTitle';
import { PageWrapper } from '../../common/PageWrapper';

export const TestimonialsPage = ({ navigateTo }) => (
  <PageWrapper title="Testimonials">
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      <div className="container mx-auto px-6">
        <SectionTitle title="Client & Colleague Feedback" icon={<ChatBubbleLeftRightIcon />} subtitle="What others say about my work and collaboration." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_USER_DATA.testimonials.map((testimonial, idx) => (
            <Card key={testimonial.id} className={`p-6 md:p-8 flex flex-col items-center text-center fade-in-section delay-${idx * 150}`}>
              <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-24 h-24 rounded-full mb-6 shadow-lg border-2 border-purple-500/50" onError={(e) => e.target.src='https://placehold.co/100x100/0F172A/E0E7FF?text=??&font=inter'}/>
              <blockquote className="text-slate-300 italic mb-6 text-lg leading-relaxed relative">
                <span className="absolute -top-2 -left-3 text-6xl text-purple-500/30 font-serif">&ldquo;</span>
                {testimonial.quote}
                <span className="absolute -bottom-5 -right-1 text-6xl text-purple-500/30 font-serif">&rdquo;</span>
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-purple-300 text-lg">{testimonial.author}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 fade-in-section delay-450">
          <p className="text-xl text-slate-300 mb-6">Ready to start a project or have questions?</p>
          <Button onClick={() => navigateTo("ContactPage")} variant="primary" className="text-lg">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  </PageWrapper>
);

TestimonialsPage.propTypes = {
  navigateTo: PropTypes.func.isRequired
};