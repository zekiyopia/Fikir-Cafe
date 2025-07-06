import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const BookingSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('booking');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const ceremonyTypes = [
    {
      title: 'In-Café Ceremony',
      amharic: 'በካፌ ውስጥ ሥነ ሥርዓት',
      description: 'Experience the ceremony in our traditional setting',
      features: ['Traditional seating', 'Frankincense included', 'Professional guide'],
      price: 'From 500 ETB'
    },
    {
      title: 'Home Service',
      amharic: 'የቤት አገልግሎት',
      description: 'We bring the ceremony to your location',
      features: ['Equipment provided', 'Travel within Addis', 'Group discounts'],
      price: 'From 800 ETB'
    },
    {
      title: 'Cultural Workshop',
      amharic: 'የባህል ወርክሾፕ',
      description: 'Learn the art of coffee ceremony',
      features: ['Hands-on learning', 'Take home kit', 'Certificate'],
      price: 'From 1200 ETB'
    }
  ];

  return (
    <section id="booking" className="py-16 sm:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-crimson font-bold text-primary mb-4">
            Book a Ceremony
          </h2>
          <p className="amharic-text text-base sm:text-lg md:text-xl mb-4 sm:mb-6">ሥነ ሥርዓት ይመዝግቡ</p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Experience the authentic Ethiopian coffee ceremony, where coffee is more than a drink—it's a ritual of community and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {ceremonyTypes.map((ceremony, index) => (
            <Card 
              key={index}
              className={`coffee-card text-center fade-in-up ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-4 sm:p-6">
                <h3 className="font-crimson text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">
                  {ceremony.title}
                </h3>
                <p className="amharic-text text-xs sm:text-sm mb-3 sm:mb-4">
                  {ceremony.amharic}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  {ceremony.description}
                </p>
                
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {ceremony.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs sm:text-sm text-foreground flex items-center justify-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  {ceremony.price}
                </div>

                <Button className="btn-coffee w-full text-sm sm:text-base">
                  Select This Option
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Booking Form */}
        <div className={`max-w-2xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <Card className="coffee-card">
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="font-crimson text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 sm:mb-6 text-center">
                Quick Booking Form
              </h3>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name / ሙሉ ስም
                    </label>
                    <Input 
                      placeholder="Enter your name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number / ስልክ ቁጥር
                    </label>
                    <Input 
                      placeholder="+251..."
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Preferred Date / ቀን
                    </label>
                    <Input 
                      type="date"
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Number of Guests / የእንግዶች ቁጥር
                    </label>
                    <Input 
                      type="number"
                      placeholder="1-20"
                      min="1"
                      max="20"
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Special Requests / ልዩ ጥያቄዎች
                  </label>
                  <Textarea 
                    placeholder="Any dietary restrictions, special occasions, or other requests..."
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    rows={4}
                  />
                </div>

                <Button className="btn-coffee w-full text-sm sm:text-base lg:text-lg py-3">
                  Book Your Ceremony • ሥነ ሥርዓት ይመዝግቡ
                </Button>
              </form>

              <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground">
                <p>We'll contact you within 24 hours to confirm your booking</p>
                <p className="amharic-text">በ24 ሰዓት ውስጥ እናነጋግራለን</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;