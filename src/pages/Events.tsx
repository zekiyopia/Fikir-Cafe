import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [guests, setGuests] = useState(2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const ceremonies = [
    {
      id: 'traditional',
      name: 'Traditional Coffee Ceremony',
      nameAmharic: 'ባህላዊ ቡና ሥነ ሥርዓት',
      duration: '2-3 hours',
      price: '500 ETB per person',
      description: 'Complete traditional ceremony with roasting, grinding, and three rounds of coffee',
      image: '/api/placeholder/400/300',
      includes: ['Fresh green coffee beans', 'Traditional jebena', 'Popcorn and traditional snacks', 'Cultural storytelling']
    },
    {
      id: 'premium',
      name: 'Premium Ceremony Experience',
      nameAmharic: 'ልዩ ቡና ሥነ ሥርዓት',
      duration: '3-4 hours',
      price: '800 ETB per person',
      description: 'Enhanced ceremony with traditional music, dance, and authentic Ethiopian meal',
      image: '/api/placeholder/400/300',
      includes: ['Full traditional ceremony', 'Live traditional music', 'Ethiopian coffee tasting', 'Traditional Ethiopian meal']
    },
    {
      id: 'home',
      name: 'Home Ceremony Service',
      nameAmharic: 'የቤት ሥነ ሥርዓት አገልግሎት',
      duration: '2-3 hours',
      price: '1200 ETB (up to 10 people)',
      description: 'We bring the authentic ceremony experience to your home or office',
      image: '/api/placeholder/400/300',
      includes: ['Mobile ceremony setup', 'All equipment provided', 'Certified ceremony host', 'Transportation included within Addis Ababa']
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM', '7:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      guests
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      
      {/* Smoke Effects */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="steam-particle absolute"
            style={{
              left: `${12 + i * 15}%`,
              bottom: `${8 + Math.random() * 25}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-forest/20 via-background to-terracotta/30">
        <div className="absolute inset-0 animated-bg-welcome"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-crimson font-bold text-primary mb-4">
              Book Your Ceremony
            </h1>
            <p className="amharic-text text-xl sm:text-2xl md:text-3xl mb-6">ሥነ ሥርዓት ያስይዙ</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the authentic Ethiopian coffee ceremony. Reserve your sacred coffee journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Ceremony Options */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-crimson font-bold text-primary mb-4">
              Choose Your Experience
            </h2>
            <p className="amharic-text text-lg sm:text-xl">ልምድዎን ይምረጡ</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {ceremonies.map((ceremony, index) => (
              <div
                key={ceremony.id}
                className={`coffee-card cursor-pointer transition-all duration-300 ${
                  selectedService === ceremony.id ? 'ring-2 ring-accent shadow-glow' : ''
                } fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedService(ceremony.id)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={ceremony.image}
                    alt={ceremony.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {ceremony.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-crimson font-semibold text-primary mb-2">
                  {ceremony.name}
                </h3>
                <p className="amharic-text text-sm text-accent mb-3">
                  {ceremony.nameAmharic}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {ceremony.description}
                </p>
                <div className="text-lg font-bold text-forest mb-4">
                  {ceremony.price}
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Includes:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {ceremony.includes.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="coffee-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-crimson font-bold text-primary mb-4">
                Reserve Your Experience
              </h2>
              <p className="amharic-text text-lg text-accent">ቦታዎን ያስይዙ</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name / ሙሉ ስም
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email / ኢሜይል
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone / ስልክ
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+251..."
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Guests / የእንግዶች ቁጥር
                  </label>
                  <div className="flex items-center space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 p-0"
                    >
                      -
                    </Button>
                    <span className="text-lg font-medium w-8 text-center">{guests}</span>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setGuests(guests + 1)}
                      className="w-10 h-10 p-0"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date / ምረጫ ቀን
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        📅
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time / ምረጫ ሰዓት
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="text-sm"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Requests / ልዩ ጥያቄዎች
                </label>
                <Textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any dietary restrictions, celebration occasions, or special requirements..."
                  rows={4}
                  className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="btn-ceremony px-12 py-4 text-lg"
                  disabled={!selectedService || !selectedDate || !selectedTime}
                >
                  Book Your Ceremony
                  <span className="ml-3">☕</span>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 24 hours to confirm your booking
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;