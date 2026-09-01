import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';

function About() {
  return (
    <section id="about" className="py-24 max-w-3xl mx-auto flex flex-col items-center text-center">
      <div className="flex items-center justify-center mb-10 w-full">
        <div className="h-[1px] bg-gray-800 flex-1 mr-6"></div>
        <h2 className="text-3xl font-bold text-white whitespace-nowrap">
          About Me
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1 ml-6"></div>
      </div>
      
      <div className="text-gray-400 text-lg leading-relaxed space-y-4 mx-auto">
        <p>
          Hello everyone! I am a developer based in the Seattle, Washington area!
        </p>
        <p>
          I am currently going for my Bachelor's in Application Development at North Seattle College. I became curious about programming while during High School when my friend built a mod for a game we played, and it completely made life easier for us. I wanted to learn how to do that, which brought me here today.
        </p>
        <p>
          Favorite hobbies include: Walking, hanging out with friends, and learning new things!
        </p>
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      id: 1,
      title: "Customer Service Representative",
      company: "North Seattle College",
      date: "Jul 2026 — Present",
      description: "Assist visitors with class registration and manage various administrative tasks within the Continuing Education office, ensuring a smooth and supportive experience for prospective and current students."
    },
    {
      id: 2,
      title: "Technician and Refurbisher",
      company: "SK Tes",
      date: "Feb 2023 — Jun 2023",
      description: "Diagnosed, repaired, and re-imaged a wide range of computer hardware components. Ensured equipment met strict quality standards before redistribution, contributing to efficient IT asset disposition and lifecycle management."
    },
    {
      id: 3,
      title: "Fulfillment Associate",
      company: "Amazon",
      date: "Oct 2019 — Dec 2019",
      description: "Managed inventory and processed orders in a high-volume fulfillment center environment. Maintained rigorous accuracy and speed metrics to ensure timely delivery of customer shipments."
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-12 w-full text-center">
        <div className="h-[1px] bg-gray-800 flex-1 mr-6"></div>
        <h2 className="text-3xl font-bold text-white whitespace-nowrap">
          Experience
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1 ml-6"></div>
      </div>
      <div className="space-y-12 w-full text-left">
        {jobs.map((job) => (
          <div key={job.id} className="flex flex-col sm:flex-row gap-4 sm:gap-8 group">
            <div className="w-full sm:w-1/4 pt-1">
              <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                {job.date}
              </p>
            </div>
            <div className="w-full sm:w-3/4">
              <h3 className="text-xl font-medium text-white mb-2 flex items-center">
                {job.title} 
                <span className="text-gray-400 mx-2">•</span> 
                <span className="text-gray-300 font-normal">{job.company}</span>
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {job.description}
              </p>
            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
}

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "Custom Personal Website",
      description: "Personal website use to showcase projects, and skills.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/Eric-Cashman/personal-website",
      external: "",
      image: "/photos/portfolio-shot.png" 
    },
    /*
    {
      id: 2,
      title: "",
      description: "",
      tech: [""],
      github: "",
      external: ""
    },
    {
      id: 3,
      title: "",
      description: "",
      tech: [""],
      github: "",
      external: ""
    },
    {
      id: 4,
      title: "",
      description: "",
      tech: [""],
      github: "",
      external: ""
    }
    */
  ];

  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-12 w-full text-center">
        <div className="h-[1px] bg-gray-800 flex-1 mr-6"></div>
        <h2 className="text-3xl font-bold text-white whitespace-nowrap">
          Projects
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1 ml-6"></div>
      </div>

      <div className="space-y-16 w-full">
        {projectsList.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            
            <div className="w-full md:w-1/3 flex-shrink-0 mt-1">
              <div className="aspect-[16/10] bg-[#232333]/80 rounded border border-gray-700/50 group-hover:border-[#64ffda]/50 transition-colors flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 group-hover:text-[#64ffda]/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col">
              <div className="flex items-center gap-4 mb-3">
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl font-bold text-white hover:text-[#64ffda] transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </h3>
                )}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((techItem, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#1c2a36] text-[#64ffda] border border-[#64ffda]/10"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#1a1a24] min-h-screen text-white font-sans antialiased relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />

        <main className="pt-32 max-w-5xl mx-auto px-6 pb-24">
          
          <Hero />
          <About />
          <Experience />
          <Projects />
          
        </main>
      </div>

    </div>
  );
}