import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos de Éxito', href: '#casos-exito' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Increased navbar height to account for padding
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
    <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center space-x-2" onClick={(e) => handleNavClick(e, '#inicio')}>
              <Zap className="h-8 w-8 text-purple-400" strokeWidth={2} />
              <span className="text-white font-bold text-xl tracking-tight">
                TRAID<span className="text-purple-400">.</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-purple-500/10 hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-purple-500/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}