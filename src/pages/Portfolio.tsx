import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Filter, X } from 'lucide-react';
import weddingInvitation from "../portfolio_images/wedding_invitation.jpg";
import businessCard from "../portfolio_images/business_card.jpg";
import brochure from "../portfolio_images/brochure.jpg";
import productCatalog from "../portfolio_images/product catalog.jpg";
import label from "../portfolio_images/label.jpg";
import stickers from "../portfolio_images/sticekrs.jpg";
import functionInvitation from "../portfolio_images/function invitation.jpg";
import letterhead from "../portfolio_images/Letterhead Template.jpeg";

const Portfolio = () => {
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [magnifiedIndex, setMagnifiedIndex] = useState<number | null>(null);

  const samples = [
    {
      category: 'wedding',
      title: "Elegant Wedding Invitation",
      description: "Traditional design with gold foil and intricate patterns",
      image: weddingInvitation
    },
    {
      category: 'business',
      title: "Premium Business Cards",
      description: "Professional design with embossed logo and matte finish",
      image: businessCard
    },
    {
      category: 'brochure',
      title: "Corporate Brochure",
      description: "Multi-fold brochure with vibrant colors and clean layout",
      image: brochure
    },
    {
      category: 'labels',
      title: "Product Label Design",
      description: "Waterproof bottle labels with eye-catching graphics",
      image: label
    },
    {
      category: 'invitation',
      title: "Function Invitation",
      description: "Birthday party invitation with custom illustrations",
      image: functionInvitation
    },
    {
      category: 'business',
      title: "Corporate Letterhead",
      description: "Professional letterhead with company branding",
      image: letterhead
    },
    {
      category: 'stickers',
      title: "Custom Stickers",
      description: "Die-cut stickers with vibrant colors and UV coating",
      image: stickers
    },
    {
      category: 'catalog',
      title: "Product Catalog",
      description: "Multi-page catalog with professional photography",
      image: productCatalog
    }
  ];

  const filters = [
    { id: 'all', name: 'All Samples' },
    { id: 'wedding', name: 'Wedding Cards' },
    { id: 'business', name: 'Business Materials' },
    { id: 'brochure', name: 'Brochures' },
    { id: 'labels', name: 'Labels & Stickers' },
    { id: 'invitation', name: 'Invitations' }
  ];

  const filteredSamples = selectedFilter === 'all' 
    ? samples 
    : samples.filter(sample => sample.category === selectedFilter);

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredSamples.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredSamples.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredSamples.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredSamples.length) % filteredSamples.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              Our Sample Works
            </h1>
            <p className="text-xl mb-8 slide-up">
              Explore our portfolio of high-quality printing projects and creative designs
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="intro"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('intro') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Quality That Speaks For Itself
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each project in our portfolio represents our commitment to excellence. From intricate 
              wedding invitations to professional business materials, we bring creativity and precision 
              to every print job.
            </p>
          </div>

          {/* Filter Buttons */}
          <div 
            id="filters"
            className={`scroll-reveal mb-12 ${
              revealedSections.has('filters') ? 'revealed' : ''
            }`}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setSelectedFilter(filter.id);
                    setCurrentSlide(0);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedFilter === filter.id
                      ? 'bg-primary text-primary-foreground shadow-elegant'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{filter.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div 
            id="carousel"
            className={`scroll-reveal ${
              revealedSections.has('carousel') ? 'revealed' : ''
            }`}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Main Slide */}
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-hover flex items-center justify-center bg-white">
                {filteredSamples[currentSlide]?.image && (
                  <img
                    src={filteredSamples[currentSlide].image}
                    alt={filteredSamples[currentSlide]?.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 text-center p-8">
                  <div className="p-6 bg-white/90 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {filteredSamples[currentSlide]?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {filteredSamples[currentSlide]?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-4 flex items-center">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                  onClick={nextSlide}
                  className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </button>
              </div>

              {/* Autoplay Control */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-5 h-5 text-primary" />
                  ) : (
                    <Play className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {filteredSamples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary scale-125'
                        : 'bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div 
            id="grid-header"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('grid-header') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Sample Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Click on any sample to view it in the carousel above
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSamples.map((sample, index) => (
              <div 
                key={index}
                id={`sample-${index}`}
                className={`scroll-reveal card-service cursor-pointer ${
                  revealedSections.has(`sample-${index}`) ? 'revealed' : ''
                } ${currentSlide === index ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMagnifiedIndex(index)}
              >
                <div 
                  className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
                  style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                  {sample.title}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {sample.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="process"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('process') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Creative Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we follow a systematic approach to ensure 
              every project meets our high standards of quality and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Creating custom designs that reflect your brand' },
              { step: '03', title: 'Production', desc: 'Printing with precision using advanced equipment' },
              { step: '04', title: 'Delivery', desc: 'Quality check and timely delivery to you' }
            ].map((process, index) => (
              <div 
                key={index}
                id={`process-${index}`}
                className={`scroll-reveal text-center ${
                  revealedSections.has(`process-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div 
            id="portfolio-cta"
            className={`scroll-reveal max-w-3xl mx-auto ${
              revealedSections.has('portfolio-cta') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something amazing together. Contact us to discuss your project 
              and see how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                Start Your Project
              </a>
              <a href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
      {magnifiedIndex !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setMagnifiedIndex(null)}>
    <div className="relative bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
      <button className="absolute top-4 right-4 text-gray-500 hover:text-primary" onClick={() => setMagnifiedIndex(null)}>
        <X className="w-6 h-6" />
      </button>
      <img
        src={filteredSamples[magnifiedIndex].image}
        alt={filteredSamples[magnifiedIndex].title}
        className="object-contain w-full max-h-[60vh] rounded-lg mb-4"
      />
      <h3 className="font-heading font-semibold text-xl mb-2 text-center">
        {filteredSamples[magnifiedIndex].title}
      </h3>
      <p className="text-muted-foreground text-sm text-center">
        {filteredSamples[magnifiedIndex].description}
      </p>
    </div>
  </div>
)}
    </div>
  );
};

export default Portfolio;