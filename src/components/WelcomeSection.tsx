import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="welcome" 
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden"
    >
      {/* Animated Background with Moving Gradients */}
      <div className="absolute inset-0 animated-bg-welcome"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 coffee-bean-pattern animate-spin-slow"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 coffee-bean-pattern animate-spin-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="decorative-divider-large mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-crimson font-bold text-primary mb-4 sm:mb-6 px-4">
            Welcome to Bunna Fiker
          </h2>
          <p className="amharic-text text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4">
            እንኳን ወደ ቡናፍቅር በድኅረ ቀን መጡ
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Step into the heart of Ethiopian coffee culture, where every cup tells a story 
            and every ceremony connects souls across generations.
          </p>
        </div>

        {/* Three-Column Feature Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
          {/* Tradition Column */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-coffee rounded-full flex items-center justify-center shadow-warm">
              <span className="text-2xl sm:text-3xl">🔥</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-crimson font-semibold text-primary mb-3 sm:mb-4">
              Ancient Tradition
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
              Experience the 1,000-year-old coffee ceremony, roasted fresh over charcoal, 
              blessed with frankincense, and served with love.
            </p>
          </div>

          {/* Community Column */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '0.4s' }}>
            <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-cream rounded-full flex items-center justify-center shadow-warm">
              <span className="text-2xl sm:text-3xl">🤝</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-crimson font-semibold text-primary mb-3 sm:mb-4">
              Community Gathering
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
              Join our communal table where strangers become friends, stories are shared, 
              and the spirit of Ethiopian hospitality lives.
            </p>
          </div>

          {/* Heritage Column */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-forest to-accent rounded-full flex items-center justify-center shadow-warm">
              <span className="text-2xl sm:text-3xl">🌿</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-crimson font-semibold text-primary mb-3 sm:mb-4">
              Living Heritage
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
              From the birthplace of coffee in Kaffa, we bring you authentic beans 
              and timeless brewing methods passed down through generations.
            </p>
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '0.8s' }}>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Ready to immerse yourself in the world's most beautiful coffee ritual?
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 sm:flex sm:justify-center px-4">
            <Button className="btn-ceremony group w-full sm:w-auto text-sm sm:text-base">
              <span className="mr-2">☕</span>
              Book Your Ceremony
              <div className="btn-glow"></div>
            </Button>
            <Button className="btn-cream group w-full sm:w-auto text-sm sm:text-base">
              <span className="mr-2">📖</span>
              Learn Our Story
              <div className="btn-glow"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="coffee-particle-large absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + Math.random() * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;