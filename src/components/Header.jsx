const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-yellow-600">
              RTV Solutions
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              How it Works
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              Benefits
            </a>
            <a href="#about" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              FAQ
            </a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium">
              Contact
            </a>
            
            {/* CTA Button */}
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;