export default function Contact() {
  return (
    <section id="contact" className="py-12 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-center mb-12 w-full text-center">
        <div className="h-[1px] bg-gray-800 flex-1 mr-6"></div>
        <h2 className="text-3xl font-bold text-white whitespace-nowrap">
          Get In Touch
        </h2>
        <div className="h-[1px] bg-gray-800 flex-1 ml-6"></div>
      </div>
      
      <p className="text-gray-200 max-w-lg text-center mb-12 text-lg">
        Feel free to contact me for opportunities! My LinkedIn & GitHub is on the bottom right of the screen, or my email right here I'll try my best to get back to you.
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