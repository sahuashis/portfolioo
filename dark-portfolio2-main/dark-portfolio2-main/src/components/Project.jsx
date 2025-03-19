import React from 'react'
import Digital from '../assets/travel.jpg'
import Nike from '../assets/Nike.png'
import Nikee from '../assets/car.jpg'
import Ecom from '../assets/ecom.jpeg'


import Clothify from '../assets/Clothify.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "Travel Site",
         
          techStack: ["React.js", "Tailwindcss","Javascript"],
          link: "https://yogitravelsraipur.com",
          github: 'https://github.com/sahuashis',
          image: Digital, 
        },
        {
          title: "Ecommrce site",
          techStack: ["React", "Tailwind css", "Redux", "Javascript"],
          link: "https://ecommerce-alpha-self-66.vercel.app/",
          github: 'https://github.com/sahuashis/AGRICONIC',
          image: Nike, 
        },
        {
          title: "Car Rental Site",
          techStack: ["React", "Tailwind css",  "Javascript"],
          link: "https://vermacars.com/",
          github: 'https://github.com/sahuashis/travels/tree/main/vermatravels/vermatravels',
          image: Nikee, 
        },
        {
          title: "E-Commerce Site",
          techStack: ["React", "Tailwind css",  "Javascript","Redux"],
          link: "https://shoppingsite-rkwf.vercel.app/",
          github: 'https://github.com/sahuashis/shoppingsite',
          image: Ecom, 
        },
        
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950  rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
