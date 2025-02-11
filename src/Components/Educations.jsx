import React from 'react';

const Educations = () => {
    return (
        <div>
            <section id="education" className='mb-5' >
            <h2 class="text-3xl font-bold text-center mb-4">Education</h2>
                <div className="lg:flex lg:space-x-3"> 
                <div class="container mx-auto text-center mb-6 lg:mb-0 px-4 border-2 py-5">
                    <h2 class="text-3xl font-bold text-center mb-8">Bachelor</h2>
                    <h3 class="text-xl font-semibold">Bachelor's of Mathematics</h3>
                    <p class="text-sm text-gray-500">Alamgir Monsur Memorial College, Mymensingh</p>
                    <p>session: 20-21</p>
                </div>
                <div class="container mx-auto text-center px-4 border-2 py-5">
                    <h2 class="text-3xl font-bold text-center mb-8">Hsc</h2>
                    <h3 class="text-xl font-semibold">Science</h3>
                    <p class="text-sm text-gray-500">Muslim Girls High School and Collage</p>
                    <p>Year: 2020</p>
                </div>
                </div>
            </section>

        </div>
    );
};

export default Educations;