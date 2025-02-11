import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
const Hero = () => {

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content text-center">
                <div className="">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Hello, I am Maharon Nasa Marjan')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(1000)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />
                    <h1 className='text-3xl font-bold'>Frontend Developer</h1>
                    <p>Passionate about building interactive web applications and delivering exceptional user experiences.</p>



                    <p className='mt-4 text-lg'>Find With Me</p>
                    <div className="space-x-5 text-2xl">

                        <a href="https://www.facebook.com/meherunnesa.marjan" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaFacebook />
                            </button>
                        </a>

                        <a
                            href="https://github.com/meherun-nesa-marjan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <FaGithub />
                            </button>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/maharon-nasa-marjan/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <FaLinkedin />
                            </button>
                        </a>



                    </div>
                    <div className="md:space-x-4">
                        <a href="../assets/resume/resume of marjan.pdf" download='resume.pdf'>
                            <button className="bg-slate-600 text-white font-bold px-10 py-4 my-9 rounded-md">
                                Resume Download
                            </button>
                        </a>

                       
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <button className="bg-slate-600 text-white font-bold px-10 py-4 md:my-9 rounded-md">Let's Work Together</button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;