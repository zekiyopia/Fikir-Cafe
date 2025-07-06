import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: '../../images/Traditional Coffee Ceremony.jfif',
      alt: 'Traditional Coffee Ceremony',
      category: 'ceremony',
      title: 'Traditional Bunna Ceremony',
      titleAmharic: 'ባህላዊ ቡና ሥነ ሥርዓት'
    },
    {
      id: 2,
      src: '../../images/Coffee Processing Station.jfif',
      alt: 'Coffee Roasting Process',
      category: 'process',
      title: 'Coffee Roasting',
      titleAmharic: 'ቡና ማብሰል'
    },
    {
      id: 3,
      src: '../../images/Incense and Coffee.jfif',
      alt: 'Jebena and Traditional Cups',
      category: 'tools',
      title: 'Jebena & Cups',
      titleAmharic: 'ጀበና እና ኩባያዎች'
    },
    {
      id: 4,
      src: '../../images/Cafe Interior Design.jfif',
      alt: 'Café Interior',
      category: 'cafe',
      title: 'Café Ambiance',
      titleAmharic: 'የካፌ ሁኔታ'
    },
    {
      id: 5,
      src: '../../images/Shade-Grown Coffee Forest.jfif',
      alt: 'Coffee Beans',
      category: 'beans',
      title: 'Ethiopian Coffee Beans',
      titleAmharic: 'የኢትዮጵያ ቡና ፍሬ'
    },
    {
      id: 6,
      src: '../../images/Ethiopian coffee farmers.jfif',
      alt: 'Traditional Dress',
      category: 'culture',
      title: 'Traditional Ethiopian Attire',
      titleAmharic: 'ባህላዊ የኢትዮጵያ ልብስ'
    },
    {
      id: 7,
      src: '../../images/Incense and Coffee.jfif',
      alt: 'Smoke and Steam',
      category: 'atmosphere',
      title: 'Coffee Ceremony Atmosphere',
      titleAmharic: 'የቡና ሥነ ሥርዓት ሁኔታ'
    },
    {
      id: 8,
      src: '../../images/Ethiopian coffee farmers.jfif',
      alt: 'Traditional Table Setting',
      category: 'ceremony',
      title: 'Ceremony Table',
      titleAmharic: 'የሥነ ሥርዓት ጠረጴዛ'
    },
    {
      id: 9,
      src: '../../images/Coffee Processing Station.jfif',
      alt: 'Coffee Preparation',
      category: 'process',
      title: 'Coffee Preparation',
      titleAmharic: 'ቡና ማዘጋጀት'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', nameAmharic: 'ሁሉም ፎቶዎች' },
    { id: 'ceremony', name: 'Ceremony', nameAmharic: 'ሥነ ሥርዓት' },
    { id: 'process', name: 'Process', nameAmharic: 'ሂደት' },
    { id: 'cafe', name: 'Café', nameAmharic: 'ካፌ' },
    { id: 'culture', name: 'Culture', nameAmharic: 'ባህል' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

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
              left: `${15 + i * 15}%`,
              bottom: `${5 + Math.random() * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${7 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent/20 via-background to-primary/20">
        <div className="absolute inset-0 animated-bg-about"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-crimson font-bold text-primary mb-4">
              Gallery
            </h1>
            <p className="amharic-text text-xl sm:text-2xl md:text-3xl mb-6">ክብሮች</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in the beauty of Ethiopian coffee culture and traditions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm amharic-text opacity-70">
                  {category.nameAmharic}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-crimson font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="amharic-text text-sm opacity-90">
                      {image.titleAmharic}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;