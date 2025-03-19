import React from 'react'
import AboutImg from '../assets/log.png.jpg'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 data-aos='zoom-in' className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>

          <div data-aos="fade-right"
            data-aos-offset="300" className='relative border hidden lg:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <img src={AboutImg} alt="" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 ' />
          </div>
          
          <div data-aos="fade-left"
            data-aos-offset="300" className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <p className='text-lg leading-7 mb-6'>I specialize in creating beautiful, responsive websites that deliver seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript and React.js, I am committed to crafting visually appealing and high-performance solutions. Eager to contribute to innovative projects, I thrive in collaborative, fast-paced environments, continuously seeking opportunities to expand my skill set and drive meaningful results.</p>
            <p className='text-lg leading-7 mb-6'>  I have embraced every challenge to hone my skills in development, problem-solving, and teamwork. I’m always eager to learn and explore new technologies .</p>

            <div className='mt-5'>
              <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
              <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Html</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Css</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind Css</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Bootstrap</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Javascript</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React.js</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Next.js</p>

                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Github</p>
              </div>
              <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
