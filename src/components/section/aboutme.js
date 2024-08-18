import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const AboutMe = () => {
  return (
    <div>
      <section id='aboutme' className='section'>
        <div className='content mt-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-6'>
            Tentang Saya
          </h1>
          <p className='text-gray-600 mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className='md:w-1/2 flex justify-center mt-10 md:mt-0 relative'>
          <img
            src='https://via.placeholder.com/400x300'
            alt='Office'
            className='rounded-lg shadow-lg'
          />
        </div>
      </section>
    </div>
  )
}

export default AboutMe
