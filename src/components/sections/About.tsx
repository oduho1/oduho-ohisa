import React from 'react';
const About = () => {
  return <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img src="/src/assets/1744807324266 (1).jpg" alt="Portrait of oduho ohisa, Graphic Designer" className="relative z-10 rounded-lg w-full h-auto object-cover shadow-lg border border-white" width="500" height="600" />
            </div>
          </div>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold mb-3">oduho ohisa</h3>
            <h4 className="text-xl text-blue-600 mb-6">
              Graphic Designer & Visual Artist
            </h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 3 years of experience in graphic design, I specialize in
              creating visual identities, print materials, and digital assets
              that help brands stand out in today's competitive market. My
              design philosophy centers on combining aesthetics with
              functionality to deliver impactful results.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I've had the pleasure of working with clients across various
              industries, from startups to established corporations. My approach
              involves deep collaboration, understanding the client's vision,
              and translating it into compelling visual stories.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center text-gray-800">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Education
                </h5>
                <ul className="text-gray-600 space-y-2 ml-7">
                  <li className="list-disc">
                    UI/UX Design in Graphic Design, Design Academy
                  </li>
                  <li className="list-disc">
                    certificate in Visual Arts, 
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center text-gray-800">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experience
                </h5>
                <ul className="text-gray-600 space-y-2 ml-7">
                  <li className="list-disc">
                    Senior Designer, Creative Studio
                  </li>
                  <li className="list-disc">Art Director, Design Agency</li>
                  <li className="list-disc">Freelance Designer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;