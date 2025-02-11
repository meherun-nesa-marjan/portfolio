import React from "react";
import { SiTemporal } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
const Skills = () => {
    return (
        <div className="max-w-7xl mx-auto text-center py-5">
            <h2 className="text-3xl font-bold text-black mb-8">My Skills</h2>
          <div className="flex gap-5">
          <div className="mb-10 border p-6 ">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">Frontend</h3>
               <div className="grid grid-cols-2 gap-10">
               <div className="flex items-center px-4 space-x-2">
                <p className="text-2xl"><FaHtml5 /></p>
                    <span className="text-xl">HTML5</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <p  className="text-2xl"><FaCss3Alt /></p>
                    <span className="text-xl">CSS3</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <p  className="text-2xl"><FaBootstrap /></p>
                    <span className="text-xl">BootStrap</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <p  className="text-2xl"><RiTailwindCssFill /></p>
                   <span className="text-xl">Tailwind CSS</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                <p  className="text-2xl"><IoLogoJavascript /></p>
                    <span className="text-xl">JavaScript</span>
                </div>
              
              
                <div className="flex items-center px-4 space-x-2">
                <p  className="text-2xl"><FaReact /></p><span className="text-xl">ReactJS</span>
                </div>
               </div>
            </div>
            <div className="mb-10 border p-6  ">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">Backend</h3>
               <div className="grid grid-cols-2 gap-10">
               <div className="flex items-center px-4 space-x-2">
                <p className="text-2xl"><FaNodeJs /></p>
                    <span className="text-xl">NodeJS</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <p className="text-2xl"><SiMongodb /></p><span className="text-xl">MongoDB</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <p className="text-2xl"><SiFirebase /></p><span className="text-xl">FireBase</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <p className="text-2xl"><IoLogoNodejs /></p><span className="text-xl">Express</span>
                </div>
               </div>
            </div>
            <div className="mb-10 border p-6 ">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">Tools</h3>
               <div className="grid grid-cols-2 gap-10">
               <div className="flex items-center px-4 space-x-2">
                    <SiTemporal /><span className="text-xl">Git</span>
                </div>
                <div className="flex items-center px-4 space-x-2">
                    <SiTemporal /><span className="text-xl">Figma</span>
                </div>
               </div>
            </div>
          </div>
        </div>








    );
};

export default Skills;
