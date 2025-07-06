import { useState, useEffect, useRef } from 'react';
import coffeeBeans from '@/assets/coffee-beans.jpg';

const AboutSection = () => {
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

  const timeline = [
    {
      year: '850 AD',
      title: 'The Legend Begins',
      description: 'Kaldi the goat herder discovers coffee in the Kaffa region',
      amharic: 'የቡና አፈ ታሪክ ይጀምራል'
    },
    {
      year: '15th Century',
      title: 'Ceremony Tradition',
      description: 'Coffee ceremony becomes central to Ethiopian culture',
      amharic: 'የቡና ሥነ ሥርዓት ባህላዊ ወግ ይሆናል'
    },
    {
      year: '2020',
      title: 'Bunna Fiker Founded',
      description: 'Bringing authentic Ethiopian coffee culture to Addis Ababa',
      amharic: 'ቡናፍቅር በአዲስ አበባ ተመሠረተ'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="story" 
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-secondary/50 via-background to-accent/20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg-about"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-crimson font-bold text-primary mb-3 sm:mb-4">
                Our Story
              </h2>
              <p className="amharic-text mb-4 sm:mb-6 text-base sm:text-lg">ታሪካችን</p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Ethiopia is the birthplace of coffee, where the first coffee plant was discovered 
                in the ancient kingdom of Kaffa. At Bunna Fiker, we honor this rich heritage 
                while creating a modern space for coffee lovers to gather and connect.
              </p>
            </div>

            {/* Timeline - Mobile Optimized */}
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-coffee rounded-full flex items-center justify-center shadow-warm">
                    <span className="text-primary-foreground font-bold text-xs sm:text-sm">
                      {item.year.slice(-2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-crimson text-lg sm:text-xl font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent mb-1 italic">
                      {item.amharic}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Mobile Optimized */}
          <div className={`fade-in-up mt-8 lg:mt-0 ${isVisible ? 'animate' : ''}`}>
            <div className="relative">
              <div className="coffee-card overflow-hidden">
                <img
                  src={coffeeBeans}
                  alt="Ethiopian Coffee Beans"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-glow">
                <span className="text-accent-foreground font-bold text-sm sm:text-base md:text-lg">☕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;