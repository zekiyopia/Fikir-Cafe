import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: 'Almaz Tadesse',
      nameAmharic: 'አልማዝ ታደሰ',
      role: 'Master Coffee Ceremony Host',
      roleAmharic: 'የቡና ሥነ ሥርዓት ዋና አስተማሪ',
      image: '/api/placeholder/300/300',
      experience: '25 years of traditional coffee ceremony experience'
    },
    {
      name: 'Dawit Bekele',
      nameAmharic: 'ዳዊት በቀለ',
      role: 'Head Roaster',
      roleAmharic: 'ዋና የቡና ማብሰያ',
      image: '/api/placeholder/300/300',
      experience: 'Expert in traditional Ethiopian coffee roasting techniques'
    },
    {
      name: 'Hanan Mohammed',
      nameAmharic: 'ሀናን መሀመድ',
      role: 'Cultural Consultant',
      roleAmharic: 'የባህል አማካሪ',
      image: '/api/placeholder/300/300',
      experience: 'Historian specializing in Ethiopian coffee traditions'
    }
  ];

  const values = [
    {
      title: 'Authenticity',
      titleAmharic: 'ትክክለኛነት',
      description: 'We preserve and honor the ancient Ethiopian coffee ceremony traditions',
      icon: '🏺'
    },
    {
      title: 'Community',
      titleAmharic: 'ማህበረሰብ',
      description: 'Bringing people together through the sacred act of sharing coffee',
      icon: '👥'
    },
    {
      title: 'Quality',
      titleAmharic: 'ጥራት',
      description: 'Using only the finest Ethiopian coffee beans from their birthplace',
      icon: '☕'
    },
    {
      title: 'Heritage',
      titleAmharic: 'ቅርስ',
      description: 'Celebrating and preserving Ethiopian cultural heritage for future generations',
      icon: '🌱'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      
      {/* Smoke Effects */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="steam-particle absolute"
            style={{
              left: `${10 + i * 20}%`,
              bottom: `${15 + Math.random() * 20}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-forest/20 via-background to-accent/30">
        <div className="absolute inset-0 animated-bg-welcome"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-crimson font-bold text-primary mb-6">
                About Us
              </h1>
              <p className="amharic-text text-xl sm:text-2xl md:text-3xl mb-8">ስለ እኛ</p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Bunna Smoke Experience Café was born from a deep passion for preserving and sharing 
                the sacred Ethiopian coffee ceremony tradition. Located in the heart of Addis Ababa, 
                we are more than just a café - we are guardians of a cultural heritage that spans over 
                a thousand years.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Every cup we serve carries the wisdom of our ancestors, the aroma of our homeland, 
                and the warmth of Ethiopian hospitality. Join us in celebrating the birthplace of coffee.
              </p>
            </div>
            
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Traditional Ethiopian Coffee Ceremony"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-warm"
                />
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-2xl">☕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={sectionRef} className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-crimson font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="amharic-text text-lg sm:text-xl">የእኛ እሴቶች</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`coffee-card text-center fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-crimson font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="amharic-text text-sm text-accent mb-4">
                  {value.titleAmharic}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-crimson font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="amharic-text text-lg sm:text-xl mb-6">የእኛ ቡድን</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of coffee ceremony experts, cultural historians, and hospitality professionals 
              are dedicated to sharing the authentic Ethiopian coffee experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`coffee-card text-center group fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h3 className="text-xl font-crimson font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="amharic-text text-sm text-accent mb-3">
                  {member.nameAmharic}
                </p>
                <p className="text-forest font-medium mb-2">
                  {member.role}
                </p>
                <p className="amharic-text text-xs text-accent mb-4">
                  {member.roleAmharic}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-accent/20 via-background to-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-crimson font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="amharic-text text-lg sm:text-xl mb-8">የእኛ ተልእኮ</p>
            <blockquote className="text-xl sm:text-2xl font-light text-primary italic leading-relaxed">
              "To preserve, celebrate, and share the sacred Ethiopian coffee ceremony tradition while 
              creating a space where culture, community, and coffee converge in perfect harmony."
            </blockquote>
            <div className="decorative-divider-large mt-8 mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;