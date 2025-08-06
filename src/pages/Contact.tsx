import { useEffect, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Navigation,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a non-functional form as requested
    console.log('Form data:', formData);
    alert('Thank you for your message! This is a demo form. Please call us directly at 9842733001.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: "9842733001",
      action: "tel:9842733001",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: "suryagraphics7@gmail.com",
      action: "mailto:suryagraphics7@gmail.com",
      description: "Send us an email and we'll respond quickly"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Address",
      details: "66, Muthuvelappa Street, Brough Road, Erode, Tamil Nadu – 638001",
      action: "#",
      description: "Visit our location for in-person consultation"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      details: "Monday – Saturday: 08:30 AM – 09:30 PM",
      action: "#",
      description: "We're available during these hours for your convenience"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              Get in Touch
            </h1>
            <p className="text-xl mb-8 slide-up">
              Ready to start your printing project? We're here to help bring your vision to life
            </p>
            <div className="flex items-center justify-center space-x-2 scale-in">
              <MessageSquare className="w-6 h-6" />
              <span className="text-lg">Let's discuss your printing needs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="contact-intro"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('contact-intro') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to get in touch. We're committed to responding 
              promptly and providing the information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                id={`contact-${index}`}
                className={`scroll-reveal card-elegant text-center group hover:border-primary/20 ${
                  revealedSections.has(`contact-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-foreground font-medium mb-2 text-sm">
                  {info.details}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {info.description}
                </p>
                {(info.action.startsWith('tel:') || info.action.startsWith('mailto:')) && (
                  <div className="mt-4">
                    <a 
                      href={info.action}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-medium transition-colors"
                    >
                      <span className="text-sm">Contact Now</span>
                      <Navigation className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div 
              id="location-info"
              className={`scroll-reveal space-y-8 ${
                revealedSections.has('location-info') ? 'revealed' : ''
              } max-w-xl w-full`}
            >
              {/* Replace the two separate card divs with a flex container */}
              <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
                  {/* Our Location */}
                  <div className="flex-1 card-elegant border border-gray-200 shadow-sm bg-white rounded-xl">
                    <div className="px-6 py-8">
                      <h3 className="text-xl font-heading font-semibold mb-4">Our Location</h3>
                      <div className="flex flex-col items-center">
                        <div className="mb-4 flex flex-col items-center">
                          <MapPin className="w-8 h-8 text-primary mb-2" />
                          <p className="font-medium text-sm">SS Surya Graphics</p>
                          <p className="text-xs text-muted-foreground">Erode, Tamil Nadu</p>
                        </div>
                        <iframe
                          src="https://www.google.com/maps?q=11.337676528810603,77.72287939643401&z=17&output=embed"
                          width="100%"
                          height="300"
                          style={{ border: 0, borderRadius: '0.75rem' }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="SS Surya Graphics Location"
                        ></iframe>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Located in the heart of Erode, we're easily accessible and ready to serve 
                        your printing needs.
                      </p>
                    </div>
                  </div>
                  {/* Quick Contact */}
                  <div className="flex-1 card-elegant border border-gray-200 shadow-sm bg-white rounded-xl">
                    <div className="px-6 py-8">
                      <h3 className="text-xl font-heading font-semibold mb-6">Quick Contact</h3>
                      <div className="flex flex-col md:flex-row gap-4 w-full mb-6">
                        <a 
                          href="tel:9842733001"
                          className="flex-1 btn-primary flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Call Now: 9842733001</span>
                        </a>
                        <a 
                          href="mailto:suryagraphics7@gmail.com"
                          className="flex-1 btn-outline flex items-center justify-center space-x-2"
                        >
                          <Mail className="w-5 h-5" />
                          <span>Email Us</span>
                        </a>
                      </div>
                      <div className="mt-12">
                        <a 
                          href="tel:9487133001"
                          className="w-full btn-primary flex items-center justify-center space-x-2 mb-6"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Alternate Mobile: 9487133001</span>
                        </a>
                        <h4 className="font-heading font-semibold text-lg mb-3 flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>Business Hours</span>
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="font-medium">Monday - Saturday</span>
                            <span className="text-primary">8:30 AM - 09:30 PM</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="font-medium">Sunday</span>
                            <span className="text-muted-foreground">Closed</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          We operate in the evening hours to accommodate your schedule. 
                          Feel free to call during business hours for immediate assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="faq"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('faq') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical turnaround time?",
                answer: "Most standard projects are completed within 2-3 business days. Rush orders can often be accommodated with advance notice."
              },
              {
                question: "Do you provide design services?",
                answer: "Yes, we offer complete design services using professional software and equipment to create custom designs for all your printing needs."
              },
              {
                question: "What file formats do you accept?",
                answer: "We accept most common formats including PDF, AI, PSD, JPEG, and PNG. Our design team can work with you on file preparation if needed."
              },
              {
                question: "Do you offer bulk printing discounts?",
                answer: "Yes, we provide competitive pricing for large volume orders. Contact us with your requirements for a custom quote."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                id={`faq-${index}`}
                className={`scroll-reveal card-elegant ${
                  revealedSections.has(`faq-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-heading font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;