import React from 'react'
const education = [
  {
    degree: "Bachelor of Science (BSc) in Computer Science (Honours)",
    institution: "Utkal University",
    year: "2018 - 2021",
    description: "Graduated with a strong foundation in computer science, critical thinking, and problem-solving skills.",
    icon: "🎓"
  },
  {
    degree: "Higher Secondary (11th-12th)",
    institution: "Janata Junior College, Boinda, Angul, Odisha",
    year: "2016 - 2018",
    description: "Completed higher secondary education with a focus on science and mathematics, laying the groundwork for future technical studies.",
    icon: "🎓"
  },
  {
    degree: "Secondary (10th)",
    institution: "RadhaKrishna High School, Tapadhol, Angul",
    year: "2016",
    description: "Completed secondary education with a strong academic performance, emphasizing foundational knowledge in all subjects.",
    icon: "🎓"
  }
];
const experience = [
  {
    role: "Frontend Developer (Intern)",
    company: "Xtute Technology Private Limited",
    year: "2024",
    description: "Worked on developing and maintaining responsive web applications using modern frontend technologies like React.js, HTML, CSS, and JavaScript. Collaborated with the team to implement user-friendly interfaces and improve overall user experience.",
    icon: "💻"
  },
  {
    role: "Frontend Developer",
    company: "Msimaya Software Pvt Ltd",
    year: "2025",
    description:"Contributed to the design and development of scalable and efficient frontend solutions for client projects. Utilized frameworks like React.js and Next.js to build dynamic and interactive web applications. Also familiar with Node.js and MongoDB, enabling effective collaboration on full-stack development tasks and backend integration.",
    icon: "💻"
  }
];
const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 data-aos='zoom-in' className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>

          <div data-aos="fade-right"
            data-aos-offset="300">
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                  <p className='text-gray-300'>{edu.institution}</p>
                  <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                  <p className='text-gray-300 mt-2'>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Experience Section */}
          <div data-aos="fade-left"
            data-aos-offset="300">
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                  <p className='text-gray-300'>{exp.company}</p>
                  <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                  <p className='text-gray-300 mt-2'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
