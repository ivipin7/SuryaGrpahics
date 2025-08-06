import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Star, 
  Clock, 
  Award, 
  Printer, 
  Palette, 
  FileText,
  CreditCard,
  Zap,
  Shield
} from 'lucide-react';

const Home = () => {
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealedSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Wedding Invitations",
      description: "Beautiful, custom-designed wedding cards that make your special day memorable."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Business Cards",
      description: "Professional visiting cards that leave a lasting impression on your clients."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Brochures & Catalogs",
      description: "Eye-catching marketing materials that showcase your business effectively."
    },
    {
      icon: <Printer className="w-8 h-8 text-primary" />,
      title: "Digital Printing",
      description: "High-quality digital printing with vibrant colors and sharp details."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Timely Delivery",
      description: "We understand deadlines matter. Your orders are completed on time, every time."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Quality Assured",
      description: "Using modern equipment like Canon ImagePress V800 for superior print quality."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you to exceed expectations."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Fast Service",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%232E8BC0;stop-opacity:0.8" /><stop offset="100%" style="stop-color:%234B4B4B;stop-opacity:0.6" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad)"/><path d="M0,400 C300,300 600,500 900,400 C1000,350 1100,450 1200,400 L1200,800 L0,800 Z" fill="white" fill-opacity="0.1"/></svg>')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 fade-in">
              SS Surya Graphics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 slide-up">
              Your Trusted Printing Partner in Erode Since 2005
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto scale-in">
              Quality printing services with modern equipment, professional design, and 
              customer-first approach for all your printing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scale-in">
              <Link to="/contact" className="btn-primary flex items-center justify-center">
                Contact Us Today
              </Link>
              <a href="tel:9842733001" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="intro"
            className={`scroll-reveal max-w-4xl mx-auto text-center ${
              revealedSections.has('intro') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Committed to Excellence Since 2005
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At SS Surya Graphics, we believe in delivering more than just printing services – 
              we deliver experiences. Our commitment to quality, customer satisfaction, and 
              innovative design has made us Erode's trusted printing partner for nearly two decades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">19+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div 
            id="why-choose"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('why-choose') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose SS Surya Graphics?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver 
              exceptional printing solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                id={`feature-${index}`}
                className={`scroll-reveal card-elegant text-center ${
                  revealedSections.has(`feature-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="services"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('services') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Featured Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From wedding invitations to business cards, we offer comprehensive 
              printing solutions for all your personal and professional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                className={`scroll-reveal card-service ${
                  revealedSections.has(`service-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div 
            id="cta"
            className={`scroll-reveal max-w-3xl mx-auto ${
              revealedSections.has('cta') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Start Your Printing Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a consultation and let's bring your vision to life 
              with our professional printing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                Get In Touch
              </Link>
              <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;