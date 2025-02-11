import React from 'react';
import Hero from './Hero';
import Lottie from "lottie-react";
import lottieData from "../assets/lottie/lottie.json";
const Bannar = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
             <div className="lg:order-last">
            <Lottie animationData={lottieData}  />
            </div>
            <Hero/>
           
            
           
            
        </div>
    );
};

export default Bannar;