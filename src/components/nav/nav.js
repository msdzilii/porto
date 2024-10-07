// src/Header.js
import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Header = () => {
  return (
    <header className="nav-section fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-6">
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-10 ml-10">
              <a href="#aboutme" className="text-base font-medium">
                About Me
              </a>
              <a href="#experience" className="text-base font-medium">
                Experience
              </a>
              <a href="#portofolio" className="text-base font-medium">
                Portofolio
              </a>
              <a href="#contact" className="text-base font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
