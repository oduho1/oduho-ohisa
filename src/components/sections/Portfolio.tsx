import { useState, useEffect } from "react";

const Portfolio = () => {
  const categories = ["All", "Branding", "Print", "Digital", "Illustration"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Slideshow images (you can replace these with your own)
  const slides = [
    "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const projects = [
    {
      id: 1,
      title: "Eco Brand Identity",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Complete brand identity for an eco-friendly company including logo, color palette, and brand guidelines.",
    },
    {
      id: 2,
      title: "Magazine Layout",
      category: "Print",
      image:
        "https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Editorial design for a lifestyle magazine featuring custom typography and photography.",
    },
    {
      id: 3,
      title: "Mobile App UI",
      category: "Digital",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "User interface design for a fitness tracking mobile application with a focus on usability.",
    },
    {
      id: 4,
      title: "Character Illustrations",
      category: "Illustration",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Series of character illustrations for a children's book featuring vibrant colors and playful designs.",
    },
    {
      id: 5,
      title: "Product Packaging",
      category: "Print",
      image:
        "https://images.unsplash.com/photo-1634942536790-dad8f3c0d71b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Custom packaging design for a premium coffee brand with sustainable materials.",
    },
    {
      id: 6,
      title: "Website Redesign",
      category: "Digital",
      image:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Complete redesign of an e-commerce website focusing on user experience and conversion optimization.",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Slideshow at the top */}
        <div className="relative w-full max-w-5xl mx-auto mb-12">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-64 sm:h-96 object-cover rounded-xl shadow-lg transition-all duration-700"
          />

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? slides.length - 1 : currentSlide - 1
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
          >
            ‹
          </button>
          <button
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % slides.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 w-full flex justify-center space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium inline-block mb-3">
            My Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
            Explore my recent design projects spanning various categories from
            branding to digital design.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image with hover effect */}
              <div className="relative overflow-hidden h-56 sm:h-64 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                  <span className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider bg-blue-600 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group text-sm sm:text-base"
                  aria-label={`View details of ${project.title} project`}
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

