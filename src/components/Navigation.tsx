import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  const navItems = {
    en: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'About', href: '/about' },
      { label: 'Events', href: '/events' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    am: [
      { label: 'ቤት', href: '/' },
      { label: 'ምን አለ', href: '/menu' },
      { label: 'ፎቶዎች', href: '/gallery' },
      { label: 'ስለ እኛ', href: '/about' },
      { label: 'ሥነ ሥርዓት', href: '/events' },
      { label: 'ብሎግ', href: '/blog' },
      { label: 'አድራሻ', href: '/contact' },
    ],
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-warm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with Animation */}
          <div className="flex items-center space-x-3 group">
            <div className="logo-container relative">
              <div className={`text-3xl font-crimson font-bold transition-all duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              } group-hover:scale-105`}>
                {language === 'en' ? 'Bunna Fiker' : 'ቡናፍቅር'}
              </div>
              <div className="logo-underline absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></div>
            </div>
            <div className={`hidden sm:block text-sm transition-colors duration-300 amharic-text ${
              isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
            }`}>
              {language === 'en' ? 'Coffee with Love' : 'ቡና በፍቅር'}
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems[language].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link relative font-medium transition-all duration-300 ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground hover:text-accent'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="nav-underline absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className={`text-sm px-4 py-2 transition-all duration-300 hover:scale-105 bg-white/95 text-primary border-white/30 hover:bg-white hover:text-primary shadow-md backdrop-blur-sm`}
            >
              {language === 'en' ? '🇪🇹 አማርኛ' : '🇬🇧 English'}
            </Button>

            {/* Enhanced Mobile Menu Button */}
            <button
              className={`md:hidden p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'hover:bg-muted' : 'hover:bg-primary-foreground/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-foreground' : 'bg-primary-foreground'
                } ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                <span className={`w-5 h-0.5 transition-all duration-300 mt-1 ${
                  isScrolled ? 'bg-foreground' : 'bg-primary-foreground'
                } ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 transition-all duration-300 mt-1 ${
                  isScrolled ? 'bg-foreground' : 'bg-primary-foreground'
                } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems[language].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;