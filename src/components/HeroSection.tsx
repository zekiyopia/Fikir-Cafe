import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coffee-ceremony.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background with Dolly Zoom Effect */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `scale(${1 + scrollY * 0.0005}) translateZ(0)`,
        }}
      >
        <img
          src={heroImage}
          alt="Traditional Ethiopian Coffee Ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Animated Steam Effects */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="steam-particle absolute"
            style={{
              left: `${45 + i * 2}%`,
              bottom: `${20 + Math.random() * 30}%`,
              transform: `translateX(${mousePosition.x * 20 - 10}px)`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Coffee Bean Particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="coffee-particle absolute w-1 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content with Enhanced Mobile Responsiveness */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
          {/* Amharic Subtitle with Floating Animation */}
          <div className="mb-6 sm:mb-8">
            <p className="amharic-text text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 floating-text">
              ቡና በፍቅር
            </p>
            <div className="decorative-divider mx-auto mb-4 sm:mb-6" />
            
            {/* Main Title with Staggered Letter Animation - Mobile Optimized */}
            <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="letter-animate" style={{ animationDelay: '0.1s' }}>B</span>
              <span className="letter-animate" style={{ animationDelay: '0.2s' }}>u</span>
              <span className="letter-animate" style={{ animationDelay: '0.3s' }}>n</span>
              <span className="letter-animate" style={{ animationDelay: '0.4s' }}>n</span>
              <span className="letter-animate" style={{ animationDelay: '0.5s' }}>a</span>
              <span className="mx-2 sm:mx-4"></span>
              <span className="letter-animate" style={{ animationDelay: '0.6s' }}>F</span>
              <span className="letter-animate" style={{ animationDelay: '0.7s' }}>i</span>
              <span className="letter-animate" style={{ animationDelay: '0.8s' }}>k</span>
              <span className="letter-animate" style={{ animationDelay: '0.9s' }}>e</span>
              <span className="letter-animate" style={{ animationDelay: '1.0s' }}>r</span>
            </h1>
            
            <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-8 sm:mb-10 opacity-90 slide-up-delayed px-4">
              Coffee with Love • Where ceremony meets soul
            </p>
          </div>

          {/* Enhanced CTA Buttons - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 sm:flex sm:justify-center mb-8 sm:mb-12 px-4">
            <Button className="btn-ceremony group w-full sm:w-auto text-sm sm:text-base transform hover:scale-105 transition-all duration-300">
              <span className="mr-2">☕</span>
              Book a Ceremony
              <div className="btn-glow"></div>
            </Button>
            <Button className="btn-tradition group w-full sm:w-auto text-sm sm:text-base transform hover:scale-105 transition-all duration-300">
              <span className="mr-2">📜</span>
              Explore the Tradition
              <div className="btn-glow"></div>
            </Button>
          </div>

          {/* Cultural Message - Mobile Optimized */}
          <div className="cultural-message text-primary-foreground/80 text-xs sm:text-sm font-light px-4">
            <p className="fade-in-delayed">Experience the birthplace of coffee • ቡናን ወደ ወለደው ቦታ ነው</p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator group cursor-pointer" onClick={() => {
          document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="w-8 h-12 border-2 border-primary-foreground/60 rounded-full flex justify-center group-hover:border-primary-foreground transition-colors duration-300">
            <div className="w-1.5 h-4 bg-primary-foreground/80 rounded-full mt-2 floating-scroll" />
          </div>
          <p className="text-primary-foreground/60 text-xs mt-2 group-hover:text-primary-foreground transition-colors duration-300">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;