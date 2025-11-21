import React from 'react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/5 text-center text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} Consultancy. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;