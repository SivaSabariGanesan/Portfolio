{/* Same file but replacing cyan-500 with primary and cyan-400 with primary-light */}
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-primary/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Siva Sabari Ganesan. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="/resume.pdf"
            className="text-primary hover:text-primary-light transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;