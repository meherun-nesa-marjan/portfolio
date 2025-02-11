import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import projects from "../Json/Projects.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section className="py-12 bg-gray-200" id="projects">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-black mb-8">Projects</h2>
        <p className="text-lg text-gray-600 mb-8">
          Here are some of my best projects. Click "View More" for details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
              <Tilt tiltEnable={false} scale={1.3} transitionSpeed={2500}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </Tilt>
              <div className="p-4 mt-8">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.name}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <button
                  className="btn bg-slate-500 px-4 py-2 text-slate-50 my-4"
                  onClick={() => setSelectedProject(project)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="modal modal-open flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={(e) =>
              e.target.classList.contains("modal-open") &&
              setSelectedProject(null)
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="modal-box bg-white shadow-xl rounded-lg p-6 max-w-lg w-full"
            >
              <h3 className="text-2xl font-bold text-gray-600">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 mt-2">{selectedProject.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Detailed Description:</h4>
                <p className="text-gray-600">{selectedProject.details}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">Main Technologies:</h4>
                <ul className="grid grid-cols-3 gap-2 text-black my-4">
                  {selectedProject.stack.map((tech, index) => (
                    <li
                      className="bg-slate-400 py-2 px-3 rounded-md border border-black"
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mt-6">Challenges Faced</h3>
                <p className="text-gray-700">{selectedProject.challenges}</p>

                <h3 className="text-xl font-semibold mt-6">
                  Potential Improvements
                </h3>
                <p className="text-gray-700">{selectedProject.improvements}</p>
              </div>

              <div className="mt-4 space-x-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-slate-500 text-slate-100"
                >
                  Live Link
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-slate-500 text-slate-100"
                >
                  GitHub
                </a>
              </div>
              <div className="modal-action">
                <button
                  className="btn btn-error"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
