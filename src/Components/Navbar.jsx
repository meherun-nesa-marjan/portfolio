import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div className={` bg-base-100 sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}> 
    <div className='navbar w-full lg:w-10/12 mx-auto' >
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <li key={section}>
                  <ScrollLink
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="text-black font-bold"
                    className="cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">Maharon</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-black font-bold"
                className="cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        
        <a href="../assets/resume/resume of marjan.pdf" download='resume.pdf'>
          <button className="bg-slate-600 text-white font-bold px-5 py-2 rounded-md">Resume</button>
        </a>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
