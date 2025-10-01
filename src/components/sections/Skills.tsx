import React from 'react';
const Skills = () => {
  const designSkills = [{
    name: 'Adobe Photoshop',
    level: 95
  }, {
    name: 'Adobe Illustrator',
    level: 90
  }, {
    name: 'Adobe InDesign',
    level: 85
  }, {
    name: 'Figma',
    level: 92
  }, {
    name: 'Sketch',
    level: 88
  }];
  const otherSkills = [{
    name: 'UI/UX Design',
    level: 90
  }, {
    name: 'Typography',
    level: 95
  }, {
    name: 'Color Theory',
    level: 92
  }, {
    name: 'Brand Strategy',
    level: 85
  }, {
    name: 'Motion Graphics',
    level: 75
  }];
  return <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise & Proficiency
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical proficiencies and design expertise that enable me to
            deliver exceptional results.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-8 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Design Tools
            </h3>
            <div className="space-y-8">
              {designSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out" style={{
                  width: `${skill.level}%`
                }} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} skill level: ${skill.level}%`}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-8 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Design Knowledge
            </h3>
            <div className="space-y-8">
              {otherSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out" style={{
                  width: `${skill.level}%`
                }} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} skill level: ${skill.level}%`}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{
            number: '120+',
            label: 'Projects Completed',
            icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          }, {
            number: '15+',
            label: 'Awards Received',
            icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
          }, {
            number: '3+',
            label: 'Years Experience',
            icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          }, {
            number: '40+',
            label: 'Happy Clients',
            icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          }].map((stat, index) => <div key={index} className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;