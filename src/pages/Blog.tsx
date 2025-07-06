import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Sacred Art of Ethiopian Coffee Ceremony',
      titleAmharic: 'የኢትዮጵያ ቡና ሥነ ሥርዓት ቅዱስ ጥበብ',
      excerpt: 'Discover the spiritual and cultural significance behind every step of the traditional Ethiopian coffee ceremony...',
      category: 'tradition',
      author: 'Almaz Tadesse',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'From Kaffa to the World: The Journey of Coffee',
      titleAmharic: 'ከካፋ እስከ አለም፡ የቡናው ጉዞ',
      excerpt: 'Explore how coffee traveled from its birthplace in the Ethiopian highlands to become a global phenomenon...',
      category: 'history',
      author: 'Dawit Bekele',
      date: '2024-01-10',
      readTime: '12 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Perfect Home Brewing: Traditional Ethiopian Methods',
      titleAmharic: 'ፍጹም የቤት ማብሰያ፡ ባህላዊ የኢትዮጵያ ዘዴዎች',
      excerpt: 'Learn the authentic techniques to recreate the Ethiopian coffee experience at home...',
      category: 'brewing',
      author: 'Hanan Mohammed',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Understanding Ethiopian Coffee Regions',
      titleAmharic: 'የኢትዮጵያ ቡና አካባቢዎችን መረዳት',
      excerpt: 'A guide to the distinct flavors and characteristics of coffee from Yirgacheffe, Sidamo, and Harrar...',
      category: 'education',
      author: 'Almaz Tadesse',
      date: '2023-12-28',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'The Role of Women in Ethiopian Coffee Culture',
      titleAmharic: 'በኢትዮጵያ ቡና ባህል ውስጥ የሴቶች ሚና',
      excerpt: 'Celebrating the central role women play in Ethiopian coffee ceremonies and coffee production...',
      category: 'culture',
      author: 'Hanan Mohammed',
      date: '2023-12-20',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Modern Café Meets Ancient Tradition',
      titleAmharic: 'ዘመናዊ ካፌ ከጥንታዊ ባህል ጋር ይገናኛል',
      excerpt: 'How contemporary Ethiopian cafés are preserving traditional coffee culture while embracing modernity...',
      category: 'modern',
      author: 'Dawit Bekele',
      date: '2023-12-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', nameAmharic: 'ሁሉም ጽሁፎች' },
    { id: 'tradition', name: 'Tradition', nameAmharic: 'ባህል' },
    { id: 'history', name: 'History', nameAmharic: 'ታሪክ' },
    { id: 'brewing', name: 'Brewing', nameAmharic: 'ማብሰያ' },
    { id: 'education', name: 'Education', nameAmharic: 'ትምህርት' },
    { id: 'culture', name: 'Culture', nameAmharic: 'ባህል' },
    { id: 'modern', name: 'Modern', nameAmharic: 'ዘመናዊ' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              left: `${25 + i * 20}%`,
              bottom: `${12 + Math.random() * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent/20 via-background to-forest/30">
        <div className="absolute inset-0 animated-bg-about"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`cinematic-entrance ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-crimson font-bold text-primary mb-4">
              Coffee Stories
            </h1>
            <p className="amharic-text text-xl sm:text-2xl md:text-3xl mb-6">የቡና ታሪኮች</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deep into the rich heritage, traditions, and stories that make Ethiopian coffee culture extraordinary
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-crimson font-bold text-primary mb-4">
                Featured Story
              </h2>
              <p className="amharic-text text-lg text-accent">ዋና ታሪክ</p>
            </div>
            
            <div className={`coffee-card overflow-hidden fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">
                      {featuredPost.date} • {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-crimson font-bold text-primary mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="amharic-text text-sm text-accent mb-4">
                    {featuredPost.titleAmharic}
                  </p>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{featuredPost.author}</p>
                        <p className="text-muted-foreground text-xs">Author</p>
                      </div>
                    </div>
                    
                    <Button className="btn-ceremony">
                      Read Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
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

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className={`coffee-card group cursor-pointer fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-xs">
                    {post.category}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs text-muted-foreground">
                    {post.date} • {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-crimson font-semibold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="amharic-text text-xs text-accent line-clamp-1">
                    {post.titleAmharic}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-secondary-foreground font-medium text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground">
                      Read More →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-crimson font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="amharic-text text-lg text-accent mb-6">ዘመናዊ ይሁኑ</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest coffee stories, ceremony tips, and cultural insights 
              straight from the birthplace of coffee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="btn-ceremony whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;