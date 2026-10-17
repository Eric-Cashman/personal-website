export default function Contact() {
  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
        Get In Touch
      </h2>
      
      <p className="text-gray-400 max-w-lg text-center mb-12 text-lg">
        Feel free to contact me for oppotunities! My Linkedin is on the bottom right of the screen, or my email right here I'll try my best to get back to you.
      </p>

      <a 
        href="mailto:EricJCashman@outlook.com"
        className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors font-medium tracking-wide text-lg"
      >
        Email
      </a>
    </section>
  );
}