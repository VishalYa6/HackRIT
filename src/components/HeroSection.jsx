// import React, { useState } from 'react';

const HeroSection = () => {
   // const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-gray-50">
            

            <section className="pt-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="px-6 text-lg text-gray-600 font-inter"></h1>
                        <p className="mt-14 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj">
                             Secure Your Digital World with 
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#bb6eee] via-[#ab2ed1] to-[#941eb8] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative"> Ethical Hackers</span>
                            </span>
                        </p>
                        <p className="mt-5 line-clamp-2">
                            HackRIT connects businesses with skilled, ethical hackers to find and fix vulnerabilities before they can be exploited. Efficient. Affordable. Secure.


                        </p>


                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <a href="#" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-purple-800 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Early Access</a>
                            <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Request Demo
                            </a>
                        </div>

                        <p className="mt-8 text-base text-gray-500 font-inter"></p>
                    </div>
                </div>

                
            </section>
        </div>
    );
};

export default HeroSection;
