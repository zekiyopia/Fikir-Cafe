import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ceremonySetup from '@/assets/ceremony-setup.jpg';

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ceremony');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('menu');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const categories = {
    ceremony: {
      title: 'Coffee Ceremony',
      amharic: 'የቡና ሥነ ሥርዓት',
      items: [
        {
          name: 'Traditional Ceremony',
          amharic: 'ባህላዊ ሥነ ሥርዓት',
          description: 'Full 3-round ceremony with roasting, grinding, and brewing',
          price: '500 ETB'
        },
        {
          name: 'Express Ceremony',
          amharic: 'አጭር ሥነ ሥርዓት',
          description: 'Shortened version perfect for busy schedules',
          price: '300 ETB'
        },
        {
          name: 'Group Ceremony',
          amharic: 'የቡድን ሥነ ሥርዓት',
          description: 'For 8+ people, includes traditional snacks',
          price: '200 ETB/person'
        }
      ]
    },
    coffee: {
      title: 'Coffee Selection',
      amharic: 'የቡና ምርጫ',
      items: [
        {
          name: 'Yirgacheffe',
          amharic: 'ይርጋቸፈ',
          description: 'Floral and citrusy, medium roast',
          price: '80 ETB'
        },
        {
          name: 'Sidamo',
          amharic: 'ሲዳሞ',
          description: 'Rich and full-bodied, dark roast',
          price: '75 ETB'
        },
        {
          name: 'Harar',
          amharic: 'ሐረር',
          description: 'Wine-like and fruity, traditional roast',
          price: '85 ETB'
        }
      ]
    },
    food: {
      title: 'Traditional Snacks',
      amharic: 'ባህላዊ መክሰስ',
      items: [
        {
          name: 'Popcorn',
          amharic: 'ፖፕኮርን',
          description: 'Freshly popped with berbere spice',
          price: '40 ETB'
        },
        {
          name: 'Roasted Barley',
          amharic: 'የተጠበሰ ገብስ',
          description: 'Traditional ceremony accompaniment',
          price: '35 ETB'
        },
        {
          name: 'Honey Cake',
          amharic: 'የማር ኬክ',
          description: 'Sweet Ethiopian honey cake',
          price: '60 ETB'
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-crimson font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="amharic-text text-base sm:text-lg md:text-xl mb-4 sm:mb-6">ምናሌያችን</p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Authentic Ethiopian coffee experiences and traditional accompaniments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Category Tabs */}
          <div className={`lg:col-span-1 mb-6 lg:mb-0 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="coffee-card">
              <img
                src={ceremonySetup}
                alt="Coffee Ceremony Setup"
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6"
              />
              <div className="space-y-2 sm:space-y-3">
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                      activeCategory === key
                        ? 'bg-gradient-coffee text-primary-foreground shadow-warm'
                        : 'bg-muted hover:bg-secondary'
                    }`}
                  >
                    <h3 className="font-crimson text-base sm:text-lg font-semibold mb-1">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-80 italic">
                      {category.amharic}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className={`lg:col-span-2 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="coffee-card">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-crimson font-bold text-primary mb-2">
                  {categories[activeCategory as keyof typeof categories].title}
                </h3>
                <p className="amharic-text text-sm sm:text-base md:text-lg">
                  {categories[activeCategory as keyof typeof categories].amharic}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {categories[activeCategory as keyof typeof categories].items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-3 sm:p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 border border-border/50"
                  >
                    <div className="flex-1 mb-2 sm:mb-0">
                      <h4 className="font-crimson text-lg sm:text-xl font-semibold text-primary mb-1">
                        {item.name}
                      </h4>
                      <p className="text-accent text-xs sm:text-sm italic mb-2">
                        {item.amharic}
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-lg sm:text-xl font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <Button className="btn-coffee w-full sm:w-auto">
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;