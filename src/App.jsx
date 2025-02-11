import React from 'react';
import Navbar from './Components/Navbar';
import Bannar from './Components/Bannar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skill from './Components/Skill';
import Educations from './Components/Educations';
import SkillsSection from './Components/Skill';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full lg:w-10/12 mx-auto">
        <div id='home' className="">
          <Bannar />
        </div>
        <div id='about' className="">
          <About />
        </div>
        <div id='skills' className="">
        <SkillsSection />
          
          <Educations />
          
        </div>
        <div id='projects' className="">
          <Projects />
        </div>
        <div id='contact' className="">
          <Contact />
        </div>
      </div>


    </div>
  );
};

export default App;
