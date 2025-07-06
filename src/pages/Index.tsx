import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <MenuSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
