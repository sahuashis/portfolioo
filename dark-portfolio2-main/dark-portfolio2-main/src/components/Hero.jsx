import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from '../assets/log.png.jpg';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


const Hero = () => {
  const handleDownloadResume = () => {
    const doc = new jsPDF();
  
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('ASHIS KUMAR SAHU', 10, 10);
  
    doc.setFontSize(8);
    doc.text('+91 8018885031 || sahuashis374@gmail.com', 10, 20);
    doc.text('Bhubaneswar, ODISHA, INDIA', 10, 25);
  
    doc.setFontSize(10);
    doc.text('Objective', 10, 35);
    doc.setFontSize(8);
    doc.text(
      '- Motivated and detail-oriented front-end developer seeking to leverage skills in HTML, CSS, JavaScript and React.js to contribute to innovative projects. Eager to learn and collaborate in a dynamic team environment.',
      10,
      40,
      { maxWidth: 180 }
    );
  
    doc.setFontSize(10);
    doc.text('Experience', 10, 55);
    doc.setFontSize(8);
    doc.text('- SIX months internship in Xtute technology private limited.', 10, 60);
    doc.text('- Now i am working in Export Solution  private limited.', 10, 65);
  
    doc.setFontSize(10);
    doc.text('Education', 10, 70);
    doc.setFontSize(8);
    doc.text('- Graduation: BSc in Computer Science, Utkal University, Bhubaneswar, Odisha', 10, 75);
    doc.text('- 12th Science: Janata Junior College, Boinda, Angul, Odisha', 10, 85);
    doc.text('- Matriculation: RadhaKrishna High school, Tapadhol, Angul', 10, 95);
  
    doc.setFontSize(10);
    doc.text('Skills', 10, 105);
    doc.setFontSize(8);
    doc.text('- Technical Skills: HTML, CSS, JAVASCRIPT', 10, 110);
    doc.text('- Framework: React.js, Bootstrap', 10, 115);
    doc.text('- Tools: Git, Visual Studio Code', 10, 120);
    doc.text('- Responsive Design: Media Queries, Flexbox, Grid', 10, 125);
    doc.text('- Version Control: Git/GitHub', 10, 130);
  
    doc.setFontSize(10);
    doc.text('Projects', 10, 140);
    doc.setFontSize(8);
    doc.text(
      '- Developed a responsive News website using HTML, CSS, JavaScript and React.js to showcase projects and skills.',
      10,
      145,
      { maxWidth: 180 }
    );
    doc.text('- Implemented animations and transitions for an engaging user experience.', 10, 155, { maxWidth: 180 });
    doc.text('- Integrated API to fetch product details and handle user interactions.', 10, 165, { maxWidth: 180 });
  
    doc.setFontSize(10);
    doc.text('Strengths', 10, 175);
    doc.setFontSize(8);
    doc.text('- Positive attitude', 10, 180);
    doc.text('- Ability to work in the team', 10, 185);
    doc.text('- Excellent interpersonal and communication skill', 10, 190);
    doc.text('- Ability to grasp new skills quickly', 10, 195);
  
    doc.setFontSize(10);
    doc.text('Declaration', 10, 205);
    doc.setFontSize(8);
    doc.text(
      '- I hereby declare that the statement in this resume is true, complete, and correct to the best of my knowledge and belief.',
      10,
      210,
      { maxWidth: 180 }
    );
  
    doc.save('Ashis_Kumar_Sahu_Resume.pdf');
  };
  
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
      {/* Starry Background */}
      <div className="starry-background">
      
        <div className="moon"></div>
      
        {[...Array(10)].map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
       
      <div data-aos='zoom-in' className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
        <div className='md:space-y-6 px-4'>
            <div 
           
            className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Ashis Sahu</p></div>
            <p 
           
            className='md:text-2xl text-lg mb-3'>Front-End Developer</p>
            <p 
            
            className='lg:w-[600px] mb-4 md:mb-0 text-md text-gray-300'>I am a Front-End Developer passionate about creating beautiful and responsive websites.</p>
            <button 
            onClick={handleDownloadResume}
            className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] '> Download CV</button>
            <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
                <FaFacebook className='hover:text-blue-400' />
                <FaInstagram className='hover:text-blue-400' />
                <FaLinkedin className='hover:text-blue-400' />
                <FaSquareXTwitter className='hover:text-blue-400' />
            </div>
        </div>
        <div className='relative group'>
            <img 
            
            src={Profile} alt="" className='rounded-full border border-blue-600 md:w-[450px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;