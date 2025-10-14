import { useState, useEffect, useCallback } from "react";

const Portfolio = () => {
  const categories = ["All", "Branding", "Print", "Digital", "Illustration"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Slideshow images (you can replace these with your own)
  const slides = [
    "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);

  // Auto slide every 5s
  useEffect(() => {
    if (isSlidePaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isSlidePaused]);

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

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const matchesSearch = (title: string, description: string) => {
    if (!normalizedQuery) return true;
    return (
      title.toLowerCase().includes(normalizedQuery) ||
      description.toLowerCase().includes(normalizedQuery)
    );
  };

  const filteredProjects = (activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory))
    .filter((p) => matchesSearch(p.title, p.description));

  // Load More pagination
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  useEffect(() => {
    // Reset visible count when filters change
    setVisibleCount(INITIAL_COUNT);
  }, [activeCategory, searchQuery]);

  const hasMore = filteredProjects.length > visibleCount;
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Lightbox modal state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeModal = useCallback(() => setActiveIndex(null), []);
  const openModalAt = useCallback((index: number) => setActiveIndex(index), []);
  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    const prev = (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveIndex(prev);
  }, [activeIndex, filteredProjects.length]);
  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    const next = (activeIndex + 1) % filteredProjects.length;
    setActiveIndex(next);
  }, [activeIndex, filteredProjects.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, closeModal, goPrev, goNext]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Slideshow at the top */}
        <div
          className="relative w-full max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsSlidePaused(true)}
          onMouseLeave={() => setIsSlidePaused(false)}
        >
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

          {/* Pause indicator */}
          {isSlidePaused && (
            <span className="absolute top-3 right-3 text-xs bg-black/50 text-white px-2 py-1 rounded-full">
              Paused
            </span>
          )}

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

        {/* Search + Filter */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 mb-10 md:mb-12">
          <div className="w-full max-w-xl">
            <label htmlFor="portfolio-search" className="sr-only">Search projects</label>
            <div className="relative">
              <input
                id="portfolio-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-full border border-gray-200 bg-white px-5 py-2.5 pr-10 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project, idx) => (
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
                <button
                  onClick={() => openModalAt(idx)}
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
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Project details"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="relative h-72 sm:h-96 bg-gray-100">
                <img
                  src={filteredProjects[activeIndex].image}
                  alt={filteredProjects[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{filteredProjects[activeIndex].title}</h3>
                <p className="text-gray-600 mt-2">{filteredProjects[activeIndex].description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 px-2.5 py-1 rounded-full">
                  {filteredProjects[activeIndex].category}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

