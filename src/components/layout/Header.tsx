import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 shadow-md py-3' : 'bg-black bg-opacity-80 py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tight text-white" aria-label="Home">
            ODUHO<span className="text-blue-500">OHISA</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2 text-white rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-10">
            {['Home', 'About', 'Portfolio', 'Skills', 'Testimonials', 'Contact'].map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 mt-3 py-4 px-2 rounded-lg shadow-lg border border-gray-800 animate-fadeIn">
            <ul className="space-y-1">
              {['Home', 'About', 'Portfolio', 'Skills', 'Testimonials', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2.5 px-4 text-white hover:bg-gray-800 hover:text-blue-400 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

