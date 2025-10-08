import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Cloud, Cpu, Users, ArrowRight, Code } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Talent Acquisition",
      description: "Find the perfect talent with our AI-powered recruitment solutions and expert hiring services. We streamline your hiring process and connect you with top-tier professionals.",
      path: "/services/talent-acquisition",
      features: ["AI-Powered Matching", "Executive Search", "Technical Recruiting", "Onboarding Support"],
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly transition to the cloud with our comprehensive migration and optimization services. We ensure minimal downtime and maximum performance.",
      path: "/services/cloud-migration",
      features: ["AWS & Azure Migration", "Cloud Architecture", "Cost Optimization", "Security & Compliance"],
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Custom embedded solutions for IoT, automation, and next-generation connected devices. We bring your hardware ideas to life.",
      path: "/services/embedded-systems",
      features: ["IoT Solutions", "Firmware Development", "Hardware Design", "System Integration"],
    },
    {
      icon: Users,
      title: "HR Solutions",
      description: "Modern HR management systems to streamline your workforce operations and employee engagement. Digital transformation for your HR department.",
      path: "/services/hr-solutions",
      features: ["HRMS Implementation", "Payroll Management", "Performance Tracking", "Employee Engagement"],
    },
    {
      icon: Code,
      title: "Web & Mobile Development",
      description: "Build powerful, scalable web and mobile applications using the latest technologies. From concept to deployment, we deliver exceptional digital experiences.",
      path: "/services/web-mobile-development",
      features: ["React & React Native", "Progressive Web Apps", "API Development", "UI/UX Design"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Services" }]} />

        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card
              key={service.path}
              className="overflow-hidden hover:shadow-hard transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Icon & Title Section */}
                  <div className="bg-gradient-to-br from-primary to-accent p-8 lg:p-12 text-white flex flex-col justify-center">
                    <div className="mb-6">
                      <service.icon className="h-16 w-16" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <Link to={service.path}>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary mt-4"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Description Section */}
                  <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss how we can tailor our services to meet your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary text-white">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
