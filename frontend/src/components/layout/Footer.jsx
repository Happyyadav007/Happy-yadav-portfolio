import React from 'react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../icons';
import DUMMY_USER_DATA from '../../constants/data';

export const Footer = () => (
   <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-700/50">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-6 mb-8">
        <a href={DUMMY_USER_DATA.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"><GithubIcon className="w-7 h-7" /></a>
        <a href={DUMMY_USER_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"><LinkedinIcon className="w-7 h-7" /></a>
        <a href={DUMMY_USER_DATA.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"><LeetcodeIcon className="w-7 h-7" /></a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} {DUMMY_USER_DATA.name}. All rights reserved.</p>
      <p className="text-xs mt-2">Crafted with <span className="text-purple-400">React</span> & <span className="text-pink-400">Tailwind CSS</span>. Inspired by innovation.</p>
    </div>
  </footer>
);