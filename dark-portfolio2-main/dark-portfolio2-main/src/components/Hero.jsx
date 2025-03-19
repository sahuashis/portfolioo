import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from '../assets/m.jpg';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


const Hero = () => {
  const handleDownloadResume = () => {
    const doc = new jsPDF();

    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('ASHIS KUMAR SAHU', 10, 10);

    
    doc.setFontSize(10);
    doc.text('Email: sahuashis374@gmail.com | Mobile: (+91) 7735215292 / (+91) 8018885031', 10, 20);

    // Profile Summary
    doc.setFontSize(12);
    doc.text('PROFILE SUMMARY', 10, 30);
    doc.setFontSize(10);
    doc.text(
        'Motivated and detail-oriented Front-End Developer with 1 year of experience in building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS. Passionate about creating seamless user experiences and eager to contribute to innovative projects in a collaborative team environment.',
        10,
        35,
        { maxWidth: 180 }
    );

    // Key Skills
    doc.setFontSize(12);
    doc.text('KEY SKILLS', 10, 55);
    doc.setFontSize(10);
    doc.text('- React.js', 10, 60);
    doc.text('- Tailwind CSS', 10, 65);
    doc.text('- JavaScript', 10, 70);
    doc.text('- HTML/CSS', 10, 75);
    doc.text('- Bootstrap', 10, 80);
    doc.text('- API Integration', 10, 85);
    doc.text('- Responsive Web Design', 10, 90);

    // Languages
    doc.setFontSize(12);
    doc.text('LANGUAGES', 10, 100);
    doc.setFontSize(10);
    doc.text('- English', 10, 105);
    doc.text('- Hindi', 10, 110);

    // Education
    doc.setFontSize(12);
    doc.text('EDUCATION', 10, 120);
    doc.setFontSize(10);
    doc.text('- Graduation: BSc in Computer Science | Utkal University, Bhubaneswar, Odisha | 2021', 10, 125);
    doc.text('- 12th Science: Janata Junior College, Angul, Odisha | 2018', 10, 135);
    doc.text('- Matriculation: Radhakrishna High School, Angul, Odisha | 2016', 10, 145);

    
    doc.setFontSize(12);
    doc.text('WORK EXPERIENCE', 10, 155);
    doc.setFontSize(10);
    doc.text('Front-End Developer | Expert Solutions Pvt Ltd', 10, 160);
    doc.text('- Developed and maintained responsive web applications using React.js, JavaScript, and Tailwind CSS.', 10, 165, { maxWidth: 180 });
    doc.text('- Collaborated with cross-functional teams to design and implement user-friendly interfaces.', 10, 175, { maxWidth: 180 });
    doc.text('- Integrated RESTful APIs to fetch and display dynamic data.', 10, 185, { maxWidth: 180 });
    doc.text('- Optimized web applications for maximum speed and scalability.', 10, 195, { maxWidth: 180 });
    doc.text('- Conducted code reviews and debugging to ensure high-quality deliverables.', 10, 205, { maxWidth: 180 });

    
    if (doc.internal.getNumberOfPages() === 1 && doc.internal.getCurrentPageInfo().pageNumber === 1) {
        doc.addPage();
    }

    
    doc.setFontSize(12);
    doc.text('PROJECTS', 10, 10);
    doc.setFontSize(10);
    doc.text('1. E-Commerce Website | Duration: 1 Month', 10, 15);
    doc.text('- Designed and developed a fully responsive e-commerce platform using React.js, Tailwind CSS, and JavaScript.', 10, 20, { maxWidth: 180 });
    doc.text('- Implemented features such as product filtering, cart management, and user authentication.', 10, 30, { maxWidth: 180 });
    doc.text('- Integrated payment gateway for seamless transactions.', 10, 40, { maxWidth: 180 });
    doc.text('- Utilized REST APIs to fetch and display product details dynamically.', 10, 50, { maxWidth: 180 });
    doc.text('- Enhanced user experience with smooth animations and transitions.', 10, 60, { maxWidth: 180 });

    doc.text('2. News Website | Duration: 10 Days', 10, 70);
    doc.text('- Developed a responsive news website using HTML, CSS, JavaScript, and React.js.', 10, 75, { maxWidth: 180 });
    doc.text('- Implemented animations and transitions for an engaging user experience.', 10, 85, { maxWidth: 180 });
    doc.text('- Integrated APIs to fetch and display news articles dynamically.', 10, 95, { maxWidth: 180 });
    doc.text('- Ensured cross-browser compatibility and mobile responsiveness.', 10, 105, { maxWidth: 180 });

    doc.text('3. Travel Website | Duration: 2 Weeks', 10, 115);
    doc.text('- Built a travel booking website with a focus on user-friendly design and responsiveness.', 10, 120, { maxWidth: 180 });
    doc.text('- Utilized Tailwind CSS and JavaScript for layout and interactivity.', 10, 130, { maxWidth: 180 });
    doc.text('- Integrated third-party APIs for real-time travel data and booking functionality.', 10, 140, { maxWidth: 180 });

    
    doc.setFontSize(12);
    doc.text('INTERESTS', 10, 150);
    doc.setFontSize(10);
    doc.text('- Exploring new web technologies', 10, 155);

    doc.save('Ashis_Kumar_Sahu_Resume.pdf');
};
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
     
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
            
            src={Profile} alt="" className=' rounded-full border bg-cover border-blue-600 md:w-[490px] w-[300px] md:h-[490px] h-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;