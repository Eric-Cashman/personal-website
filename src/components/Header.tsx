import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' 
          : 'bg-[#050505] py-6' 
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-[#64ffda] font-mono text-xl font-bold hover:text-white transition-colors">
          EC
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-[#64ffda] text-sm font-mono transition-colors">About</a>
          <a href="#experience" className="text-gray-300 hover:text-[#64ffda] text-sm font-mono transition-colors">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-[#64ffda] text-sm font-mono transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-[#64ffda] text-sm font-mono transition-colors">Contact</a>
          <a href="https://Eric-Cashman.github.io/personal-website/resume.pdf?v=1" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded text-sm font-mono hover:bg-[#64ffda]/10 transition-colors">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}