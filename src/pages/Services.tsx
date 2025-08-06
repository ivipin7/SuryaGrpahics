import { useEffect, useState } from 'react';
import { 
  FileText, 
  CreditCard, 
  Palette, 
  Printer, 
  Star,
  Heart,
  Building,
  Bookmark,
  Tag,
  Shield,
  Scissors,
  Layers,
  Image,
  Zap
} from 'lucide-react';
import imagepressv800 from "../assets/imagepressv800.jpg";

const Services = () => {
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      category: 'invitations',
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Wedding Invitations",
      description: "Beautiful, custom-designed wedding cards that make your special day memorable with elegant typography and premium materials."
    },
    {
      category: 'invitations',
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Function Invitations",
      description: "Eye-catching invitations for all occasions - birthdays, anniversaries, corporate events, and special celebrations."
    },
    {
      category: 'marketing',
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Brochures",
      description: "Professional marketing brochures that effectively communicate your message with stunning visuals and compelling content."
    },
    {
      category: 'marketing',
      icon: <Bookmark className="w-8 h-8 text-primary" />,
      title: "Catalogues",
      description: "Comprehensive product catalogs with high-quality images and detailed descriptions to showcase your offerings."
    },
    {
      category: 'business',
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Letterheads",
      description: "Professional letterheads that represent your brand with consistent design elements and corporate identity."
    },
    {
      category: 'business',
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Well Books",
      description: "Custom-designed well books for businesses with professional layouts and durable binding options."
    },
    {
      category: 'labels',
      icon: <Tag className="w-8 h-8 text-primary" />,
      title: "Stickers",
      description: "Custom stickers for branding, products, or promotional purposes with waterproof and durable materials."
    },
    {
      category: 'labels',
      icon: <Tag className="w-8 h-8 text-primary" />,
      title: "Bottle Labels",
      description: "Professional bottle labels for beverages, cosmetics, and products with water-resistant materials."
    },
    {
      category: 'business',
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "ID Cards",
      description: "Professional ID cards for employees, students, and members with security features and custom designs."
    },
    {
      category: 'business',
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Visiting Cards",
      description: "Premium business cards that leave a lasting impression with high-quality materials and professional design."
    },
    {
      category: 'finishing',
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Dye Cutting",
      description: "Precision dye cutting services for custom shapes and designs to make your prints stand out."
    },
    {
      category: 'finishing',
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Lamination",
      description: "Professional lamination services to protect and enhance your documents with glossy or matte finishes."
    },
    {
      category: 'printing',
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Multicolor Printing",
      description: "Vibrant multicolor printing with precise color matching and superior quality using advanced printing technology."
    },
    {
      category: 'printing',
      icon: <Printer className="w-8 h-8 text-primary" />,
      title: "Digital Printing",
      description: "High-resolution digital printing for quick turnaround times without compromising on quality or detail."
    },
    {
      category: 'design',
      icon: <Image className="w-8 h-8 text-primary" />,
      title: "Designing",
      description: "Creative design services for all your print materials with professional layouts and visual appeal."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'invitations', name: 'Invitations' },
    { id: 'marketing', name: 'Marketing Materials' },
    { id: 'business', name: 'Business Essentials' },
    { id: 'labels', name: 'Labels & Stickers' },
    { id: 'printing', name: 'Printing Services' },
    { id: 'finishing', name: 'Finishing Services' },
    { id: 'design', name: 'Design Services' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              Our Services
            </h1>
            <p className="text-xl mb-8 slide-up">
              Comprehensive printing solutions for all your personal and business needs
            </p>
            <div className="flex items-center justify-center space-x-2 scale-in">
              <Zap className="w-6 h-6" />
              <span className="text-lg">Fast • Quality • Affordable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="overview"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('overview') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Complete Printing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              From traditional wedding invitations to modern digital printing, we offer a comprehensive 
              range of services to meet all your printing requirements. Our state-of-the-art equipment 
              and experienced team ensure exceptional quality every time.
            </p>
          </div>

          {/* Category Filter */}
          <div 
            id="filter"
            className={`scroll-reveal mb-12 ${
              revealedSections.has('filter') ? 'revealed' : ''
            }`}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-elegant'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                className={`scroll-reveal card-service ${
                  revealedSections.has(`service-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="quality"
              className={`scroll-reveal ${
                revealedSections.has('quality') ? 'revealed' : ''
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Quality You Can Trust
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Canon ImagePress V800</h3>
                    <p className="text-muted-foreground">State-of-the-art printing technology for superior color accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Premium Materials</h3>
                    <p className="text-muted-foreground">High-quality papers and materials for long-lasting results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">Experienced professionals ensuring every detail is perfect</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Control</h3>
                    <p className="text-muted-foreground">Rigorous quality checks before every delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="equipment-preview"
              className={`scroll-reveal ${
                revealedSections.has('equipment-preview') ? 'revealed' : ''
              }`}
            >
              <div className="relative">
                <div className="w-full h-96 rounded-lg shadow-card flex items-center justify-center overflow-hidden bg-white">
                  <img src={imagepressv800} alt="Canon ImagePress V800" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div 
            id="service-cta"
            className={`scroll-reveal max-w-3xl mx-auto ${
              revealedSections.has('service-cta') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your printing needs and get a personalized solution 
              that meets your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                Get In Touch
              </a>
              <a href="tel:9842733001" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Call Now: 9842733001
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;