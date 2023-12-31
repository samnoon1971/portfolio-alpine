import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="about" className="ml-3 text-xl">
            S M Samnoon Abrar
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="education" className="mr-5 hover:text-white">
            Education
          </a>
          <a href="experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="achievements" className="mr-5 hover:text-white">
            Achievements
          </a>
        </nav>
        <a
          href="contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          
        </a>
      </div>
    </header>
  );
};

export default Navbar;
