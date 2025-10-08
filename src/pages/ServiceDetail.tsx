import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import talentImage from "@/assets/talent-acquisition.jpg";
import cloudImage from "@/assets/cloud-migration.jpg";
import embeddedImage from "@/assets/embedded-systems.jpg";
import hrImage from "@/assets/hr-solutions.jpg";
import webMobileImage from "@/assets/web-mobile-dev.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const servicesData = {
    "talent-acquisition": {
      title: "Talent Acquisition",
      subtitle: "Find the Right Talent, Faster",
      image: talentImage,
      description: [
        "In today's competitive market, finding the right talent can make or break your business. Our Talent Acquisition services leverage cutting-edge AI technology combined with human expertise to connect you with exceptional professionals who align with your company culture and goals.",
        "We understand that hiring is more than just filling positions—it's about building teams that drive innovation and growth. Our comprehensive approach includes candidate sourcing, screening, interviewing, and onboarding support.",
        "Whether you're looking for technical specialists, executives, or specialized roles, our extensive network and proven methodologies ensure you get access to the best talent in the market.",
      ],
      benefits: [
        "AI-powered candidate matching for optimal fit",
        "Access to exclusive talent pool and networks",
        "Reduced time-to-hire by up to 50%",
        "Comprehensive background verification",
        "Cultural fit assessment and evaluation",
        "Onboarding and integration support",
        "Flexible engagement models (contract, permanent, contract-to-hire)",
        "Industry-specific expertise across sectors",
      ],
      process: [
        "Requirements Analysis: Understanding your needs and company culture",
        "Candidate Sourcing: Leveraging our network and AI tools",
        "Screening & Assessment: Technical and cultural fit evaluation",
        "Interview Coordination: Managing the entire interview process",
        "Offer Management: Negotiation and closure support",
        "Onboarding Support: Ensuring smooth integration",
      ],
    },
    "cloud-migration": {
      title: "Cloud Migration",
      subtitle: "Accelerate Your Digital Transformation",
      image: cloudImage,
      description: [
        "Cloud migration is no longer optional—it's essential for businesses looking to stay competitive. Our Cloud Migration services help you seamlessly transition from legacy systems to modern cloud infrastructure, ensuring minimal disruption and maximum performance.",
        "We specialize in AWS, Azure, and Google Cloud platforms, providing end-to-end migration services including assessment, planning, execution, and optimization. Our team ensures your data remains secure throughout the migration process while improving accessibility and scalability.",
        "Beyond just moving data, we architect cloud solutions that reduce costs, improve performance, and enable innovation. Our expertise spans infrastructure migration, application modernization, and hybrid cloud setups.",
      ],
      benefits: [
        "Reduced infrastructure costs by 30-60%",
        "Enhanced scalability and flexibility",
        "Improved disaster recovery and business continuity",
        "Better security and compliance",
        "Increased operational efficiency",
        "Access to cutting-edge cloud services",
        "24/7 monitoring and support",
        "Zero downtime migration strategies",
      ],
      process: [
        "Assessment: Analyzing your current infrastructure and requirements",
        "Strategy: Developing a customized migration roadmap",
        "Planning: Detailed execution plan with timelines and milestones",
        "Migration: Phased migration with minimal disruption",
        "Optimization: Fine-tuning for performance and cost efficiency",
        "Support: Ongoing monitoring and maintenance",
      ],
    },
    "embedded-systems": {
      title: "Embedded Systems",
      subtitle: "Bringing Innovation to Connected Devices",
      image: embeddedImage,
      description: [
        "The future is connected, and embedded systems are at the heart of this revolution. Our Embedded Systems services help you design, develop, and deploy intelligent devices that power the Internet of Things (IoT), industrial automation, and consumer electronics.",
        "From concept to production, we provide comprehensive embedded solutions including hardware design, firmware development, testing, and integration. Our team has expertise in various microcontrollers, sensors, communication protocols, and real-time operating systems.",
        "Whether you're building smart home devices, industrial sensors, medical equipment, or automotive systems, we bring the technical expertise and innovation needed to turn your vision into reality.",
      ],
      benefits: [
        "Custom hardware and firmware solutions",
        "End-to-end development from prototype to production",
        "Expertise in ARM, AVR, PIC, and other architectures",
        "IoT integration and connectivity solutions",
        "Real-time operating system (RTOS) implementation",
        "Low-power and energy-efficient designs",
        "Rigorous testing and quality assurance",
        "Post-deployment support and updates",
      ],
      process: [
        "Concept & Requirements: Understanding your product vision",
        "Design: Hardware schematic and firmware architecture",
        "Prototyping: Building and testing proof of concept",
        "Development: Full-scale firmware and hardware development",
        "Testing: Comprehensive validation and certification",
        "Production: Manufacturing support and deployment",
      ],
    },
    "hr-solutions": {
      title: "HR Solutions",
      subtitle: "Modern HR for Modern Businesses",
      image: hrImage,
      description: [
        "Your employees are your most valuable asset, and managing them effectively requires the right tools and strategies. Our HR Solutions provide comprehensive human resource management systems that streamline operations, improve employee engagement, and drive organizational growth.",
        "We implement and customize leading HRMS platforms, or develop custom solutions tailored to your unique workflows. From recruitment to retirement, we cover the entire employee lifecycle with integrated, user-friendly systems.",
        "Beyond software, we provide strategic HR consulting to help you build better workplace cultures, improve retention, and maximize employee productivity. Our solutions are designed to scale with your business.",
      ],
      benefits: [
        "Automated payroll and attendance management",
        "Centralized employee data and records",
        "Performance management and tracking",
        "Self-service portals for employees",
        "Advanced analytics and reporting",
        "Compliance management and documentation",
        "Training and development modules",
        "Mobile-friendly access anywhere, anytime",
      ],
      process: [
        "Consultation: Understanding your HR challenges and goals",
        "Analysis: Assessing current processes and systems",
        "Design: Customizing solutions to your requirements",
        "Implementation: Deploying and configuring the system",
        "Training: Comprehensive user training and documentation",
        "Support: Ongoing maintenance and updates",
      ],
    },
    "web-mobile-development": {
      title: "Web & Mobile Development",
      subtitle: "Building Digital Experiences That Matter",
      image: webMobileImage,
      description: [
        "In today's digital-first world, your web and mobile applications are often the primary touchpoints with your customers. Our Web & Mobile Development services combine cutting-edge technology with exceptional user experience design to create applications that users love and businesses rely on.",
        "We specialize in building responsive web applications using modern frameworks like React, Next.js, and Vue.js, as well as native and cross-platform mobile apps using React Native and Flutter. Whether you need a customer-facing app, an internal business tool, or a complex enterprise solution, we have the expertise to deliver.",
        "Our development process is agile and collaborative, ensuring that your vision is realized while maintaining flexibility for improvements. From MVP development to full-scale production deployment, we guide you through every step of the journey with transparency and expertise.",
      ],
      benefits: [
        "Modern, responsive design across all devices",
        "Native and cross-platform mobile development",
        "Progressive Web Apps (PWA) for offline capability",
        "RESTful and GraphQL API development",
        "Real-time features and notifications",
        "Secure authentication and data protection",
        "Performance optimization and SEO",
        "Continuous integration and deployment",
      ],
      process: [
        "Discovery: Understanding your business goals and user needs",
        "Design: Creating intuitive UI/UX designs and prototypes",
        "Development: Building with best practices and clean code",
        "Testing: Comprehensive QA across devices and platforms",
        "Deployment: Smooth launch to production environments",
        "Maintenance: Ongoing support, updates, and feature additions",
      ],
    },
  };

  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Services", path: "/services" },
            { label: service.title },
          ]}
        />

        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-hard mb-8">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-2xl text-white/90">{service.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-6">
            {service.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Key <span className="text-gradient">Benefits</span>
          </h2>
          <Card className="bg-secondary">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our <span className="text-gradient">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.split(":")[0]}
                  </h3>
                  <p className="text-muted-foreground">{step.split(":")[1]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-hero text-white rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} services can transform your business
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
