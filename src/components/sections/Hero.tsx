import React from 'react';
const Hero = () => {
  return <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-6">
              Graphic Designer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Creative <span className="text-blue-600">Design</span> Solutions
              for Your Brand
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Hi, I'm Oduho ohisa. I create meaningful designs that help brands
              connect with their audience and achieve their business goals.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#portfolio" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg" aria-label="View my work">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" aria-label="Contact me">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full z-0 animate-pulse animation-delay-2000"></div>
              <img src="/src/assets/photoroom.png" alt="Designer workspace with staff, tablet a" className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100" width="600" height="450" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;