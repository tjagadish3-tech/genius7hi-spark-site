import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Users, Cloud, Cpu, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import embeddedSystemsImg from "@/assets/embedded-systems.jpg";
import cloudMigrationImg from "@/assets/cloud-migration.jpg";
import webMobileDevImg from "@/assets/web-mobile-dev.jpg";
import hrSolutionsImg from "@/assets/hr-solutions.jpg";

interface ServiceInfo {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
  process: { title: string; description: string }[];
  subServices?: { name: string; description: string }[];
}

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData: Record<string, ServiceInfo> = {
    "iot-embedded-systems": {
      title: "IoT and Embedded Systems Development",
      description: "Complete IoT ecosystem development from concept to deployment. We design and develop smart devices, gateways, sensors, and embedded systems that power the connected world. Our solutions enable real-time monitoring, control, and automation across industries.",
      icon: Cpu,
      image: embeddedSystemsImg,
      benefits: [
        "Custom IoT hardware design and development",
        "Low-power, high-efficiency embedded solutions",
        "Secure device-to-cloud connectivity",
        "Real-time data processing and edge computing",
        "Scalable architecture supporting thousands of devices",
        "Complete starter kits for rapid prototyping",
      ],
      process: [
        {
          title: "IoT Strategy & Planning",
          description: "Define your IoT use case, device requirements, and ecosystem architecture.",
        },
        {
          title: "Hardware Design",
          description: "Custom PCB design for gateways, sensors, smart plugs, relays, and meter interfaces.",
        },
        {
          title: "Firmware Development",
          description: "Robust embedded software with RTOS, secure boot, and OTA update capabilities.",
        },
        {
          title: "Cloud Integration",
          description: "Seamless integration with cloud platforms for data management and analytics.",
        },
        {
          title: "Testing & Certification",
          description: "Comprehensive testing and regulatory certification support.",
        },
        {
          title: "Production & Support",
          description: "Manufacturing support, deployment, and ongoing maintenance.",
        },
      ],
      subServices: [
        { name: "Gateways", description: "Industrial-grade IoT gateways with multi-protocol support" },
        { name: "Sensors & Alarms", description: "Smart sensors for temperature, motion, environmental monitoring" },
        { name: "Smart Plugs", description: "Energy monitoring and control smart plug solutions" },
        { name: "Meter Interfaces", description: "Smart meter interfaces for utility monitoring" },
        { name: "Smart Relays", description: "Intelligent relay systems for automation and control" },
        { name: "Starter Kits", description: "Complete development kits for rapid IoT prototyping" },
      ],
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      description: "End-to-end cloud services that transform your IT infrastructure. From strategic planning to migration, modernization, and ongoing management, we help you leverage cloud technology to drive innovation, reduce costs, and scale efficiently across AWS, Azure, and Google Cloud.",
      icon: Cloud,
      image: cloudMigrationImg,
      benefits: [
        "30-40% reduction in infrastructure costs",
        "Zero-downtime migration strategies",
        "Multi-cloud and hybrid cloud expertise",
        "Enhanced security and compliance frameworks",
        "24/7 managed services and support",
        "Continuous cost optimization and performance tuning",
      ],
      process: [
        {
          title: "Engineering Overview & Assessment",
          description: "Comprehensive analysis of your current infrastructure, applications, and cloud readiness.",
        },
        {
          title: "Cloud Strategy",
          description: "Develop a customized cloud roadmap aligned with your business objectives.",
        },
        {
          title: "Migration & Modernization",
          description: "Execute phased migration with application modernization and refactoring.",
        },
        {
          title: "Cloud-Native Architecture",
          description: "Design and implement scalable, resilient cloud-native solutions.",
        },
        {
          title: "Operations & Management",
          description: "Implement modern DevOps practices and monitoring frameworks.",
        },
        {
          title: "Optimization & Support",
          description: "Continuous cost management, performance tuning, and 24/7 support.",
        },
      ],
      subServices: [
        { name: "Engineering Overview", description: "Cloud readiness assessment and architecture design" },
        { name: "Cloud Migration & Modernization", description: "Seamless migration with application modernization" },
        { name: "Modern Cloud Operations", description: "DevOps, CI/CD, and infrastructure automation" },
        { name: "Cloud Cost Management", description: "Optimization and FinOps best practices" },
        { name: "Managed Services", description: "24/7 monitoring, support, and maintenance" },
      ],
    },
    "web-mobile-development": {
      title: "Web & Mobile Application Development",
      description: "Custom software development specializing in IoT device software and enterprise applications. We build scalable, high-performance web and mobile solutions that seamlessly integrate with your IoT infrastructure and business systems, delivering exceptional user experiences.",
      icon: Code,
      image: webMobileDevImg,
      benefits: [
        "IoT device software with real-time connectivity",
        "Cross-platform mobile apps (iOS, Android, Web)",
        "Custom built software tailored to your needs",
        "Cloud-native architecture for scalability",
        "Secure API development and integration",
        "Continuous deployment and monitoring",
      ],
      process: [
        {
          title: "Discovery & Requirements",
          description: "Define project scope, IoT integration needs, and technical requirements.",
        },
        {
          title: "Architecture Design",
          description: "Design scalable architecture with IoT connectivity and cloud integration.",
        },
        {
          title: "UI/UX Design",
          description: "Create intuitive interfaces for device control and data visualization.",
        },
        {
          title: "Development",
          description: "Agile development with focus on IoT protocols and real-time features.",
        },
        {
          title: "Testing & QA",
          description: "Comprehensive testing including device connectivity and performance.",
        },
        {
          title: "Deployment & Support",
          description: "Launch support, monitoring, and continuous improvement.",
        },
      ],
      subServices: [
        { name: "IoT Device Software", description: "Custom software for IoT device control and monitoring" },
        { name: "Custom Built Software", description: "Tailored enterprise applications and platforms" },
        { name: "Progressive Web Apps", description: "Modern web apps with offline capabilities" },
        { name: "Mobile Applications", description: "Native and cross-platform mobile apps" },
        { name: "API Development", description: "RESTful and GraphQL API design and implementation" },
        { name: "Cloud Integration", description: "Seamless integration with cloud platforms and IoT backends" },
      ],
    },
    "hr-talent-acquisition": {
      title: "HR Solutions & Talent Acquisition",
      description: "Comprehensive HR management combined with AI-powered recruitment solutions. We transform your HR operations with modern HRMS platforms while helping you find, attract, and retain the best talent. End-to-end solutions for workforce management and talent acquisition.",
      icon: Users,
      image: hrSolutionsImg,
      benefits: [
        "AI-powered candidate matching and recruitment",
        "Automated HR workflows reducing admin time by 70%",
        "Real-time analytics for data-driven decisions",
        "Improved employee experience and engagement",
        "Compliance management and audit trails",
        "Seamless integration with enterprise systems",
      ],
      process: [
        {
          title: "HR Needs Assessment",
          description: "Analyze your HR processes, recruitment needs, and organizational requirements.",
        },
        {
          title: "System Selection & Design",
          description: "Recommend and customize HRMS and recruitment platforms.",
        },
        {
          title: "Talent Strategy",
          description: "Develop AI-powered recruitment strategy and employer branding.",
        },
        {
          title: "Implementation",
          description: "Deploy HRMS, configure recruitment workflows, and integrate systems.",
        },
        {
          title: "Training & Adoption",
          description: "Comprehensive training for HR teams and hiring managers.",
        },
        {
          title: "Support & Optimization",
          description: "Ongoing support, recruitment services, and continuous improvement.",
        },
      ],
      subServices: [
        { name: "AI-Powered Recruitment", description: "Advanced candidate matching and sourcing technology" },
        { name: "HRMS Implementation", description: "Modern HR management system deployment" },
        { name: "Payroll Management", description: "Automated payroll processing and compliance" },
        { name: "Performance Tracking", description: "Goal setting, reviews, and performance analytics" },
        { name: "Executive Search", description: "Leadership and executive recruitment services" },
        { name: "Onboarding Support", description: "Structured onboarding programs for new hires" },
      ],
    },
  };

  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

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

  const ServiceIcon = service.icon;

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
        <div className="mb-16 animate-fade-in">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-hard mb-8">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay flex items-end">
              <div className="p-8 md:p-12 text-white">
                <div className="mb-4 inline-block p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <ServiceIcon className="h-12 w-12" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-white/90 max-w-3xl">{service.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Services Section */}
        {service.subServices && service.subServices.length > 0 && (
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="text-gradient">Offerings</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.subServices.map((subService, index) => (
                <Card key={index} className="border-t-4 border-t-primary hover:shadow-hard transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{subService.name}</h3>
                    <p className="text-muted-foreground">{subService.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Key <span className="text-gradient">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-accent hover:shadow-medium transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our <span className="text-gradient">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-hard transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-hero text-white rounded-2xl p-8 md:p-12 text-center animate-fade-in shadow-glow">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can transform your business and drive innovation
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
