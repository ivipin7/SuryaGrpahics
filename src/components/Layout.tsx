import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from "../assets/logo.jpg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="SS Surya Graphics Logo" className="h-8 w-auto rounded" />
              <div className="text-2xl font-heading font-bold text-primary">
                SS Surya Graphics
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm">
                <a
                  href="tel:9842733001"
                  className="flex items-center space-x-1 text-primary hover:text-primary-hover transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>9842733001</span>
                </a>
                <a
                  href="mailto:suryagraphics7@gmail.com"
                  className="flex items-center space-x-1 text-primary hover:text-primary-hover transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link text-lg ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <a
                    href="tel:9842733001"
                    className="flex items-center space-x-2 text-primary mb-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>9842733001</span>
                  </a>
                  <a
                    href="mailto:suryagraphics7@gmail.com"
                    className="flex items-center space-x-2 text-primary"
                  >
                    <Mail className="w-4 h-4" />
                    <span>suryagraphics7@gmail.com</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                SS Surya Graphics
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Your trusted printing partner in Erode since 2005. Quality printing
                services with modern equipment and customer-first approach.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>66, Muthuvelappa Street</p>
                <p>Brough Road, Erode</p>
                <p>Tamil Nadu – 638001</p>
                <p>Phone: 9842733001</p>
                <p>Email: suryagraphics7@gmail.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Working Hours</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Monday – Saturday</p>
                <p>08:30 AM – 09:30 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>© 2025 SS Surya Graphics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;