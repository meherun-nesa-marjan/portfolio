import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'animate.css'

const About = () => {
    return (
        <div className="py-12 bg-gray-100 px-8">
            <h1 className="text-5xl font-bold mb-8">About Me</h1>
            <div className="py-6 animate__animated animate__delay-2s animate__fadeInDown">
                <p className="text-lg">
                    Hello! I'm <strong>Marjan</strong>, a Frontend Developer dedicated to crafting error-free websites that exceed expectations and deliver 100% client satisfaction. I have a strong passion for solving real-world problems through innovative and efficient solutions while continually exploring and adopting new technologies to stay ahead in the field.
                    <br />
                    I specialize in building responsive and dynamic applications using <strong>ReactJS, Node.js, JavaScript, MongoDB, Firebase, and Tailwind CSS.</strong> Whether it's creating user-friendly interfaces or tackling complex development challenges, I thrive on delivering high-quality results that make an impact.
                </p>
            </div>
            <ScrollLink to="contact" smooth={true} duration={500}>
                <button
                    className="bg-slate-600 text-white font-bold px-10 py-4 my-9 rounded-md hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-400"
                    aria-label="Contact Me"
                >
                    Let's Work Together
                </button>
            </ScrollLink>
        </div>
    );
};

export default About;
