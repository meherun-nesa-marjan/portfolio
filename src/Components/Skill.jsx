import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaCss3, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiFirebase, SiMaterialdesign } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML & Css", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 80 },
      { name: "React", icon: <FaReact className="text-blue-600" />, level: 80 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
      { name: "Express", icon: <FaNodeJs className="text-green-600" />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 75 },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" />, level: 70 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-gray-700" />, level: 90 },
      { name: "Figma", icon: <FaFigma className="text-red-500" />, level: 80 },
    ],
  },
];


export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto py-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        My Skills
      </motion.h2>

      <div className="">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.3 }} 
          >
           <div className="mb-10 border p-6 min-h-full bg-[#E5E7EB]">
           <h3 className="text-xl text-center font-semibold mb-4">{group.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-1   gap-6">
              {group.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: skillIndex * 0.2 }} 
                  className="card shadow-md bg-white p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm ">{skill.level}%</span>
                      </div>
                      <progress
                        className="progress progress-gray w-full mt-2"
                        value={skill.level}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
           </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
