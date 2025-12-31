import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const menuItems = [
    { label: 'Casos', href: '#casos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detectar si se ha scrolleado para cambiar el estilo del navbar
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up (only after scrolling 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current + 10) {
          setHidden(true);
        } else if (currentScrollY < lastScrollY.current - 10) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;

      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(targetId);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-purple-900/10 border-b border-purple-500/10'
          : 'bg-transparent'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#inicio"
              className="flex items-center space-x-2 group"
              onClick={(e) => handleNavClick(e, '#inicio')}
            >
              <Logo
                width={140}
                height={30}
                className="transition-all duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Background glow on hover/active */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-100'
                        : 'bg-purple-500/0 group-hover:bg-purple-500/10 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'w-8'
                        : 'w-0 group-hover:w-4'
                    }`}
                  />
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}

              {/* CTA Button */}
              <a
                href="https://wa.me/5491136579967?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20automatización%20con%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="relative ml-4 px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group"
              >
                {/* Gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300" />
                {/* Hover effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar propuesta
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg text-gray-300 hover:text-white transition-colors overflow-hidden group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors rounded-lg" />
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="mx-4 mt-2 p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-900/20">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-purple-600/20 to-pink-600/20'
                    : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/5491136579967?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20automatización%20con%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full py-3 rounded-xl text-center text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </nav>
  );
}
