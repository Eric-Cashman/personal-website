export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 text-center relative">
      <p className="text-[#64ffda] font-mono mb-2 text-sm md:text-base tracking-widest">
        Hi! MY NAME IS
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1 leading-[1.1] tracking-tight">
        Eric Cashman
      </h1>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 mb-6 leading-[1.2] tracking-tight">
        Front-End Engineer
      </h2>
      
      <p className="text-base md:text-lg text-gray-400 max-w-2xl font-light leading-relaxed mb-10 mx-auto">
        I'm a front-end engineer who enjoys unraveling unique and challenging problems, solving them, and then turning them into clean, intuitive web experiences. Currently focused on building with React, TypeScript, Next.js, and Tailwind CSS.
      </p>

      <div className="mb-8">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-7 py-3 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors font-medium tracking-wide"
        >
          Check out my resume!
        </a>
      </div>

      {/* Social Icons Sidebar */}
      <div className="fixed bottom-10 right-10 hidden md:flex flex-col items-center space-y-6">
        <a href="https://github.com/Eric-Cashman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64ffda] transition-transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0 0-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.6 5 3 5 3a5.4 5.4 0 0 0 0 3.8A5.4 5.4 0 0 0 3.5 10.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
            </svg>
        </a>
        <a href="https://linkedin.com/in/Eric-Cashman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64ffda] transition-transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
      </div>

    </section>
  );
}