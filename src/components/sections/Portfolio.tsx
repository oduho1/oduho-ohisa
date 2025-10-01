import React, { useState, lazy } from 'react';
const Portfolio = () => {
  const categories = ['All', 'Branding', 'Print', 'Digital', 'Illustration'];
  const [activeCategory, setActiveCategory] = useState('All');
  const projects = [{
    id: 1,
    title: 'Eco Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete brand identity for an eco-friendly company including logo, color palette, and brand guidelines.'
  }, {
    id: 2,
    title: 'Magazine Layout',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Editorial design for a lifestyle magazine featuring custom typography and photography.'
  }, {
    id: 3,
    title: 'Mobile App UI',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'User interface design for a fitness tracking mobile application with a focus on usability.'
  }, {
    id: 4,
    title: 'Character Illustrations',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: "Series of character illustrations for a children's book featuring vibrant colors and playful designs."
  }, {
    id: 5,
    title: 'Product Packaging',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1634942536790-dad8f3c0d71b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Custom packaging design for a premium coffee brand with sustainable materials.'
  }, {
    id: 6,
    title: 'Website Redesign',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete redesign of an e-commerce website focusing on user experience and conversion optimization.'
  }];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent design projects spanning various categories from
            branding to digital design.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`} aria-pressed={activeCategory === category}>
              {category}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative overflow-hidden h-64 group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" width="400" height="300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider bg-blue-600 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group" aria-label={`View details of ${project.title} project`}>
                  View Details
                  <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;