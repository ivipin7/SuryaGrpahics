import { useEffect, useState } from 'react';
import { 
  Award, 
  Target, 
  Zap, 
  Users, 
  Calendar,
  TrendingUp,
  Heart,
  CheckCircle
} from 'lucide-react';
import modernWorkspace from "../assets/modern_workspace_new.jpg";

const About = () => {
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

  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality",
      description: "We never compromise on quality. Every print job receives our complete attention to detail and craftsmanship."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Customization",
      description: "Your vision is unique, and so are our solutions. We work closely with you to create personalized designs."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast Turnaround",
      description: "Time is valuable. We ensure quick delivery without sacrificing the quality you deserve."
    }
  ];

  const milestones = [
    {
      year: "2005",
      title: "Founded",
      description: "Started with basic equipment and a vision to serve Erode's printing needs."
    },
    {
      year: "2010",
      title: "First Expansion",
      description: "Upgraded equipment and expanded service offerings to meet growing demand."
    },
    {
      year: "2015",
      title: "Digital Revolution",
      description: "Introduced digital printing capabilities and modern design software."
    },
    {
      year: "2020",
      title: "Canon ImagePress",
      description: "Invested in Canon ImagePress V800 for superior color accuracy and quality."
    },
    {
      year: "2024",
      title: "Today",
      description: "Leading printing service provider in Erode with cutting-edge technology."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 fade-in">
              About SS Surya Graphics
            </h1>
            <p className="text-xl mb-8 slide-up">
              Nearly two decades of excellence in printing services
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="story"
              className={`scroll-reveal ${
                revealedSections.has('story') ? 'revealed' : ''
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  SS Surya Graphics was founded in 2005 with a simple vision: to provide 
                  high-quality printing services to the people of Erode. We started with 
                  limited equipment but unlimited passion for excellence.
                </p>
                <p>
                  Over the years, we have continuously invested in modern technology and 
                  upgraded our systems. Today, we operate with high-end equipment including 
                  the Canon ImagePress V800 and state-of-the-art computers for design and output.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each client's unique 
                  needs and delivering personalized solutions. Whether it's a wedding invitation 
                  or a business catalog, we treat every project with the same level of care 
                  and attention to detail.
                </p>
              </div>
            </div>

            <div 
              id="about-image"
              className={`scroll-reveal ${
                revealedSections.has('about-image') ? 'revealed' : ''
              }`}
            >
              <div className="relative">
                <div 
                  className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg shadow-card flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={modernWorkspace}
                    alt="Modern Workspace"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div 
            id="values-header"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('values-header') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                id={`value-${index}`}
                className={`scroll-reveal card-elegant text-center ${
                  revealedSections.has(`value-${index}`) ? 'revealed' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="timeline-header"
            className={`scroll-reveal text-center mb-16 ${
              revealedSections.has('timeline-header') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Erode's trusted printing partner.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  id={`milestone-${index}`}
                  className={`scroll-reveal relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${revealedSections.has(`milestone-${index}`) ? 'revealed' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card-elegant">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-primary mr-2" />
                        <span className="text-primary font-semibold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div 
            id="stats"
            className={`scroll-reveal text-center mb-12 ${
              revealedSections.has('stats') ? 'revealed' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div 
              id="stat-1"
              className={`scroll-reveal text-center ${
                revealedSections.has('stat-1') ? 'revealed' : ''
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-white/80">Years of Experience</div>
            </div>
            <div 
              id="stat-2"
              className={`scroll-reveal text-center ${
                revealedSections.has('stat-2') ? 'revealed' : ''
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div 
              id="stat-3"
              className={`scroll-reveal text-center ${
                revealedSections.has('stat-3') ? 'revealed' : ''
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Services Offered</div>
            </div>
            <div 
              id="stat-4"
              className={`scroll-reveal text-center ${
                revealedSections.has('stat-4') ? 'revealed' : ''
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;