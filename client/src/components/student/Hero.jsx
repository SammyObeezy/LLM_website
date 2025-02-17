import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>UpSkill your career with the courses designed to <span className='text-blue-600'> help you succeed. </span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' />
      </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We bring together top world-class instructors, interactive content, and an exteremely supportive community to help you achieve your personal and professional goals.</p>
      <p className='md:block hidden text-gray-500 max-w-sm mx-auto'>We bring together top worl-class instructors to help you achieve your goals</p>
    </div>
  )
}

export default Hero