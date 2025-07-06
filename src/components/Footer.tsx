const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-crimson text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              Bunna Fiker • ቡናፍቅር
            </h3>
            <p className="amharic-text mb-3 sm:mb-4 text-sm sm:text-base">ቡና በፍቅር</p>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Where Ethiopian tradition meets modern café culture. Experience the birthplace of coffee in the heart of Addis Ababa.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-accent-foreground text-sm sm:text-base">📘</span>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-accent-foreground text-sm sm:text-base">📷</span>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-accent-foreground text-sm sm:text-base">🐦</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h4 className="font-crimson text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
              Contact Us • አድራሻችን
            </h4>
            <div className="space-y-2 sm:space-y-3 text-primary-foreground/80 text-sm sm:text-base">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <span className="mt-1 text-sm sm:text-base">📍</span>
                <div>
                  <p>Bole Medhanialem</p>
                  <p>Addis Ababa, Ethiopia</p>
                  <p className="amharic-text text-xs sm:text-sm">ቦሌ መድሃኒዓለም፣ አዲስ አበባ</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-sm sm:text-base">📞</span>
                <p>+251 911 123 456</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-sm sm:text-base">✉️</span>
                <p>hello@bunnafiker.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-crimson text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
              Opening Hours • የስራ ሰዓቶች
            </h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-xs sm:text-sm">7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-xs sm:text-sm">8:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-xs sm:text-sm">8:00 AM - 9:00 PM</span>
              </div>
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-primary-foreground/10 rounded-lg">
                <p className="text-xs sm:text-sm">
                  <strong>Coffee Ceremonies:</strong><br />
                  Daily 9:00 AM - 8:00 PM
                </p>
                <p className="amharic-text text-xs mt-1">
                  የቡና ሥነ ሥርዓት በየቀኑ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
              © 2024 Bunna Fiker. All rights reserved. • ሁሉም መብቶች የተጠበቁ ናቸው።
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;