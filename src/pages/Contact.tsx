import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      titleAmharic: 'ይጎብኙን',
      details: ['Bole Road, Addis Ababa', 'Near Edna Mall', 'Ethiopia'],
      detailsAmharic: 'ቦሌ ጎዳና፣ አዲስ አበባ'
    },
    {
      icon: '📞',
      title: 'Call Us',
      titleAmharic: 'ይደውሉልን',
      details: ['+251 11 123 4567', '+251 91 234 5678'],
      detailsAmharic: 'ስልክ'
    },
    {
      icon: '⏰',
      title: 'Hours',
      titleAmharic: 'የስራ ሰአት',
      details: ['Mon-Sun: 7:00 AM - 10:00 PM', 'Coffee Ceremonies: 9:00 AM - 8:00 PM'],
      detailsAmharic: 'ሰኞ-እሁድ፡ ጠዋት 7፡00 - ምሽት 10፡00'
    },
    {
      icon: '✉️',
      title: 'Email',
      titleAmharic: 'ኢሜይል',
      details: ['info@bunnasmoke.et', 'ceremony@bunnasmoke.et'],
      detailsAmharic: 'ኢሜይል'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      
      {/* Enhanced Smoke Effects for Contact Page */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="steam-particle absolute"
            style={{
              left: `${5 + i * 12}%`,
              bottom: `${Math.random() * 30}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-terracotta/20 via-background to-forest/30">
        <div className="absolute inset-0 animated-bg-about"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-crimson font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="amharic-text text-xl sm:text-2xl md:text-3xl mb-6">አድራሻ</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's connect over coffee. Reach out to book your ceremony or simply say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`coffee-card text-center fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-crimson font-semibold text-primary mb-2">
                  {info.title}
                </h3>
                <p className="amharic-text text-sm text-accent mb-4">
                  {info.titleAmharic}
                </p>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="coffee-card">
                <h2 className="text-3xl font-crimson font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <p className="amharic-text text-lg text-accent mb-8">መልእክት ይላኩልን</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name / ስም
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject / ርዕስ
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message / መልእክት
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-ceremony w-full md:w-auto">
                    Send Message
                    <span className="ml-2">📧</span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="coffee-card h-full min-h-[500px]">
                <h2 className="text-3xl font-crimson font-bold text-primary mb-6">
                  Find Us
                </h2>
                <p className="amharic-text text-lg text-accent mb-6">ቦታችን</p>
                
                {/* Placeholder for interactive map */}
                <div className="bg-muted rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/api/placeholder/600/320"
                    alt="Map showing location in Addis Ababa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-8">
                    <div className="text-center text-primary-foreground">
                      <div className="text-2xl mb-2">📍</div>
                      <p className="font-medium">Bole Road, Addis Ababa</p>
                      <p className="text-sm opacity-90">Near Edna Mall</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🚗</span>
                    <div>
                      <p className="font-medium text-foreground">Parking Available</p>
                      <p className="text-sm text-muted-foreground">Free parking for ceremony guests</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🚌</span>
                    <div>
                      <p className="font-medium text-foreground">Public Transport</p>
                      <p className="text-sm text-muted-foreground">Bus stops nearby on Bole Road</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">♿</span>
                    <div>
                      <p className="font-medium text-foreground">Accessible</p>
                      <p className="text-sm text-muted-foreground">Wheelchair accessible entrance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;