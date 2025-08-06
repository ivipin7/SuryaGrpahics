import { useEffect, useState } from 'react';
import { 
  Monitor, 
  Printer, 
  Zap, 
  Gauge, 
  Palette, 
  Clock,
  Award,
  CheckCircle,
  Cpu,
  HardDrive,
  Camera
} from 'lucide-react';
import imagepressv800 from "../assets/imagepressv800.jpg";
import computerImg from "../assets/computer.png";
import dyeCuttingImg from "../assets/dye-cutting.jpg";
import modernComputerImg from "../assets/modern-computer.jpg";

const Equipment = () => {
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

  const equipment = [
    {
      name: "Canon ImagePress V800",
      category: "Digital Press",
      icon: <Printer className="w-8 h-8 text-primary" />,
      description: "Professional digital press delivering exceptional color accuracy and consistency for all your printing needs.",
      features: [
        "Superior color reproduction",
        "High-speed printing",
        "Professional finishing options",
        "Consistent quality output"
      ],
      specs: {
        "Print Speed": "Up to 80 ppm",
        "Resolution": "2400 x 2400 dpi",
        "Paper Size": "Up to 330mm x 488mm",
        "Color Matching": "Advanced color management"
      }
    },
    {
      name: "High-Performance Design Computers",
      category: "Design Workstation",
      icon: <Monitor className="w-8 h-8 text-primary" />,
      description: "Powerful workstations equipped with latest design software for creating stunning visual communications.",
      features: [
        "Latest design software",
        "High-resolution displays",
        "Fast processing power",
        "Professional color calibration"
      ],
      specs: {
        "Processor": "Multi-core processors",
        "RAM": "32GB+ for smooth operation",
        "Graphics": "Professional graphics cards",
        "Storage": "SSD for fast file access"
      }
    },
    {
      name: "Professional Finishing Equipment",
      category: "Post-Press",
      icon: <Zap className="w-8 h-8 text-primary" />,
      description: "Complete finishing solutions including cutting, lamination, and binding for professional results.",
      features: [
        "Precision cutting",
        "Lamination services",
        "Professional binding",
        "Custom finishing options"
      ],
      specs: {
        "Cutting": "Automated precision cutting",
        "Lamination": "Hot & cold lamination",
        "Binding": "Multiple binding options",
        "Capacity": "High-volume processing"
      }
    }
  ];

  const capabilities = [
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Color Accuracy",
      description: "Advanced color matching system ensures consistent, vibrant colors across all print jobs."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Fast Delivery",
      description: "High-speed equipment enables quick turnaround times without compromising quality."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Professional Quality",
      description: "Commercial-grade equipment delivers professional results for every project."
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "High Volume",
      description: "Capable of handling both small custom orders and large production runs efficiently."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              Our Tools & Technology
            </h1>
            <p className="text-xl mb-8 slide-up">
              Advanced equipment and technology for superior printing results
            </p>
            <div className="flex items-center justify-center space-x-2 scale-in">
              <Zap className="w-6 h-6" />
              <span className="text-lg">Cutting-Edge • Reliable • Professional</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="overview"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('overview') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Professional Grade Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use advanced printers like the Canon ImagePress V800, along with high-performance 
              design computers, to ensure color precision and fast delivery. Our investment in 
              modern technology translates to superior quality for every project.
            </p>
          </div>

          {/* Equipment Cards */}
          <div className="space-y-16">
            {equipment.map((item, index) => (
              <div 
                key={index}
                id={`equipment-${index}`}
                className={`scroll-reveal ${
                  revealedSections.has(`equipment-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Equipment Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative">
                      {item.name === "Canon ImagePress V800" ? (
                        <div className="w-full h-96 rounded-lg shadow-card flex items-center justify-center overflow-hidden bg-white">
                          <img src={imagepressv800} alt="Canon ImagePress V800" className="object-cover w-full h-full" />
                        </div>
                      ) : item.name === "High-Performance Design Computers" ? (
                        <div className="w-full h-96 rounded-lg shadow-card flex items-center justify-center overflow-hidden bg-white">
                          <img src={computerImg} alt="High-Performance Design Computers" className="object-cover w-full h-full" />
                        </div>
                      ) : item.name === "Professional Finishing Equipment" ? (
                        <div className="w-full h-96 rounded-lg shadow-card flex items-center justify-center overflow-hidden bg-white">
                          <img src={dyeCuttingImg} alt="Professional Finishing Equipment" className="object-cover w-full h-full" />
                        </div>
                      ) : (
                        <div 
                          className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg shadow-card flex items-center justify-center"
                          style={{
                            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f8fafc"/><rect x="50" y="50" width="300" height="200" fill="%232E8BC0" opacity="0.2" rx="15"/><rect x="80" y="80" width="240" height="140" fill="%234B4B4B" opacity="0.1" rx="10"/><rect x="150" y="130" width="100" height="40" fill="%232E8BC0" opacity="0.4" rx="5"/><text x="200" y="270" text-anchor="middle" fill="%231F1F1F" font-family="Arial" font-size="12">${item.name}</text></svg>')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="text-center">
                            <div className="p-6 bg-white/90 rounded-lg backdrop-blur-sm">
                              <div className="flex justify-center mb-4">
                                {item.icon}
                              </div>
                              <h3 className="font-heading font-semibold text-lg">{item.category}</h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Equipment Details */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="space-y-6">
                      <div>
                        <span className="text-primary font-medium text-sm uppercase tracking-wide">
                          {item.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-3">Specifications</h4>
                        <div className="space-y-2">
                          {Object.entries(item.specs).map(([key, value], specIndex) => (
                            <div key={specIndex} className="flex justify-between items-center py-2 border-b border-border/50">
                              <span className="text-sm font-medium">{key}</span>
                              <span className="text-sm text-muted-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div 
            id="capabilities"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('capabilities') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology enables us to deliver exceptional results with 
              precision, speed, and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                id={`capability-${index}`}
                className={`scroll-reveal card-elegant text-center ${
                  revealedSections.has(`capability-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Investment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="investment"
              className={`scroll-reveal ${
                revealedSections.has('investment') ? 'revealed' : ''
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Continuous Innovation
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Since our founding in 2005, we have continuously invested in upgrading our 
                  equipment and technology. What started with basic printing equipment has 
                  evolved into a comprehensive setup featuring the latest in printing technology.
                </p>
                <p>
                  Our Canon ImagePress V800 represents the pinnacle of digital printing technology, 
                  offering unprecedented color accuracy and consistency. Combined with our 
                  high-performance design computers, we can handle everything from concept 
                  creation to final production.
                </p>
                <p>
                  This commitment to technology ensures that our clients receive the highest 
                  quality output while maintaining competitive turnaround times and pricing.
                </p>
              </div>
            </div>

            <div 
              id="tech-visual"
              className={`scroll-reveal ${
                revealedSections.has('tech-visual') ? 'revealed' : ''
              }`}
            >
              <div className="relative">
                <div className="w-full h-96 rounded-lg shadow-card flex items-center justify-center overflow-hidden bg-white">
                  <img src={modernComputerImg} alt="Modern Computer Setup" className="object-cover w-full h-full" />
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
            id="equipment-cta"
            className={`scroll-reveal max-w-3xl mx-auto ${
              revealedSections.has('equipment-cta') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Experience Professional Quality
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See the difference that professional equipment makes. Contact us today 
              to discuss your printing needs and experience our superior quality firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                Get In Touch
              </a>
              <a href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;