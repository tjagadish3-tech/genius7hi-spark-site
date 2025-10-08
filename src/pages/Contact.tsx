import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { toast } from "sonner";
import contactBanner from "@/assets/contact-banner.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Contact Us" }]} />

        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-hard mb-8">
            <img
              src={contactBanner}
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
                <p className="text-xl text-white/90">Let's discuss how we can help your business grow</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 1234567890"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your Company"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="talent-acquisition">Talent Acquisition</SelectItem>
                        <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                        <SelectItem value="embedded-systems">Embedded Systems</SelectItem>
                        <SelectItem value="hr-solutions">HR Solutions</SelectItem>
                        <SelectItem value="other">Other / General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary text-white">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-white/90">
                        GeniusXT 7HI (OPC) Pvt Ltd<br />
                        Bengaluru, Karnataka<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:info@genius7hi.com"
                        className="text-white/90 hover:text-white"
                      >
                        info@genius7hi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a
                        href="tel:+911234567890"
                        className="text-white/90 hover:text-white"
                      >
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
                <p className="text-sm text-muted-foreground">
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
