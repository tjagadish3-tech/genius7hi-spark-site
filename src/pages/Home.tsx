import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Cloud, Cpu, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Talent Acquisition",
      description: "Find the perfect talent with our AI-powered recruitment solutions and expert hiring services.",
      path: "/services/talent-acquisition",
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly transition to the cloud with our comprehensive migration and optimization services.",
      path: "/services/cloud-migration",
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Custom embedded solutions for IoT, automation, and next-generation connected devices.",
      path: "/services/embedded-systems",
    },
    {
      icon: Users,
      title: "HR Solutions",
      description: "Modern HR management systems to streamline your workforce operations and employee engagement.",
      path: "/services/hr-solutions",
    },
  ];

  const whyChooseUs = [
    "Innovative technology-driven solutions",
    "Expert team with industry experience",
    "Proven track record of successful projects",
    "Client-focused approach",
    "Scalable and future-proof solutions",
    "24/7 support and maintenance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Innovate. Transform. <span className="text-accent">Succeed.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in-up">
            We build cutting-edge technology solutions that drive business growth and digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.path}
                to={service.path}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full hover:shadow-hard transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary animate-fade-in">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">GeniusXT 7HI</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical excellence with business acumen to deliver solutions that truly make a difference.
                Our team of experts is committed to your success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">500+</div>
                  <div className="text-2xl font-semibold mb-2">Projects Delivered</div>
                  <div className="text-muted-foreground">Across multiple industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's discuss how our innovative solutions can help you achieve your goals
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
