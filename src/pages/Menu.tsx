import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'Traditional Bunna Ceremony',
      nameAmharic: 'ባህላዊ ቡና ሥነ ሥርዓት',
      price: '150 ETB',
      category: 'ceremony',
      image: '/api/placeholder/400/300',
      description: 'Full traditional coffee ceremony with roasting, grinding, and three rounds of coffee'
    },
    {
      id: 2,
      name: 'Ethiopian Single Origin',
      nameAmharic: 'የኢትዮጵያ ቡና',
      price: '45 ETB',
      category: 'hot',
      image: '/api/placeholder/400/300',
      description: 'Premium Ethiopian coffee beans from Yirgacheffe region'
    },
    {
      id: 3,
      name: 'Macchiato Ethiopian Style',
      nameAmharic: 'ማኪያቶ',
      price: '55 ETB',
      category: 'hot',
      image: '/api/placeholder/400/300',
      description: 'Espresso with steamed milk, Ethiopian coffee blend'
    },
    {
      id: 4,
      name: 'Iced Coffee with Honey',
      nameAmharic: 'በረዶ ቡና በማር',
      price: '50 ETB',
      category: 'cold',
      image: '/api/placeholder/400/300',
      description: 'Cold brew coffee sweetened with Ethiopian honey'
    },
    {
      id: 5,
      name: 'Injera with Berbere Butter',
      nameAmharic: 'እንጀራ በበርበሬ ቅቤ',
      price: '35 ETB',
      category: 'snacks',
      image: '/api/placeholder/400/300',
      description: 'Traditional sourdough flatbread with spiced butter'
    },
    {
      id: 6,
      name: 'Honey Wine (Tej)',
      nameAmharic: 'ጠጅ',
      price: '80 ETB',
      category: 'special',
      image: '/api/placeholder/400/300',
      description: 'Traditional Ethiopian honey wine'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', nameAmharic: 'ሁሉም' },
    { id: 'ceremony', name: 'Ceremony', nameAmharic: 'ሥነ ሥርዓት' },
    { id: 'hot', name: 'Hot Coffee', nameAmharic: 'ሞቅ ያለ ቡና' },
    { id: 'cold', name: 'Cold Drinks', nameAmharic: 'ቀዝቃዛ መጠጦች' },
    { id: 'snacks', name: 'Snacks', nameAmharic: 'መክሰስ' },
    { id: 'special', name: 'Traditional', nameAmharic: 'ባህላዊ' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      
      {/* Smoke Effects */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="steam-particle absolute"
            style={{
              left: `${20 + i * 20}%`,
              bottom: `${10 + Math.random() * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/20 via-background to-secondary/30">
        <div className="absolute inset-0 animated-bg-welcome"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-crimson font-bold text-primary mb-4">
              Our Menu
            </h1>
            <p className="amharic-text text-xl sm:text-2xl md:text-3xl mb-6">ምን አለ</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience authentic Ethiopian flavors and traditional coffee ceremonies
            </p>
          </div>
        </div>
      </section>

      {/* Menu Filters */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                {category.name}
                <span className="ml-2 text-sm amharic-text opacity-70">
                  {category.nameAmharic}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section ref={sectionRef} className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`coffee-card group cursor-pointer fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-2xl font-bold">{item.price}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-crimson font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="amharic-text text-sm text-accent">
                    {item.nameAmharic}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button className="btn-ceremony text-sm">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;