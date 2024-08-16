// src/Header.js
import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Header = () => {
  return (
    <header className=" bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-6">
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-10 ml-10">
              <a href="#aboutme" className="text-base font-medium text-blue1 hover:text-gray-900">
                Tentang Saya
              </a>
              <a href="#experience" className="text-base font-medium text-blue1 hover:text-gray-900">
                Pengalaman 
              </a>
              <a href="#skill" className="text-base font-medium text-blue1 hover:text-gray-900">
                Skill
              </a>
              <a href="#portofolio" className="text-base font-medium text-blue1 hover:text-gray-900">
                Portofolio
              </a>
              <a href="#contact" className="text-base font-medium text-blue1 hover:text-gray-900">
                Kontak Saya
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
