import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import aboutOffice from "@/assets/about-office.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and efficiency.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading technology partner for businesses seeking digital transformation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our priority. We build lasting partnerships through dedication and results.",
    },
  ];

  const milestones = [
    { year: "2024", event: "Company Founded", description: "GeniusXT 7HI established with a vision to innovate" },
    { year: "2024", event: "Core Services Launched", description: "IoT, Cloud Solutions, Web Development & HR Services" },
    { year: "2025", event: "Growing Strong", description: "Building partnerships and delivering excellence" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">GeniusXT 7HI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            GeniusXT 7HI was founded in 2024 with a vision to deliver innovative technology solutions in embedded systems, 
            cloud migration, and HR talent acquisition. We focus on helping businesses grow through digital transformation, 
            modern software development, and professional workforce solutions.
          </p>
        </div>

        {/* Office Image */}
        <div className="mb-16 animate-fade-in">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-hard">
            <img
              src={aboutOffice}
              alt="GeniusXT 7HI Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-16 bg-secondary rounded-2xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Founded in 2024, GeniusXT 7HI (OPC) Private Limited emerged with a vision to deliver innovative technology 
              solutions in embedded systems, cloud migration, and HR talent acquisition. Based in the heart of Bengaluru's 
              tech ecosystem, we focus on helping businesses grow through digital transformation, modern software development, 
              and professional workforce solutions.
            </p>
            <p>
              Our team of passionate engineers, designers, and consultants brings together expertise in cloud computing, 
              IoT & embedded systems, web & mobile development, and HR technology. We don't just build solutions; 
              we build lasting partnerships.
            </p>
            <p>
              Technology should empower businesses, not complicate them. That's the principle that drives everything we do 
              at GeniusXT 7HI.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-background shadow-medium z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Registered Office Address</h3>
              <p className="text-white/90 text-lg">
                GeniusXT 7HI (OPC) Private Limited<br />
                Regus Office, Tejas Arcade<br />
                Rajajinagar<br />
                Bengaluru, Karnataka 560010<br />
                India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-white/90 text-lg mb-2">
                <strong>📞 Phone:</strong> <a href="tel:+916366967493" className="hover:underline">+91-6366967493</a>
              </p>
              <p className="text-white/90 text-lg">
                <strong>✉️ Email:</strong> <a href="mailto:sales@genius7hi.com" className="hover:underline">sales@genius7hi.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
