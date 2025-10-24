import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "IoT and Embedded Systems Development", path: "/services/iot-embedded-systems" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Web & Mobile Application Development", path: "/services/web-mobile-development" },
    { name: "HR Solutions & Talent Acquisition", path: "/services/hr-talent-acquisition" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-foreground">Genius</span>
              <span className="text-accent">XT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors text-primary hover:text-accent ${
                  isActive ? "font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors text-primary hover:text-accent ${
                  isActive ? "font-semibold" : ""
                }`
              }
            >
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-sm font-medium transition-colors text-primary hover:text-accent flex items-center gap-1"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-hard border border-border animate-fade-in z-50">
                  <div className="py-2">
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-secondary/50 transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-border my-2"></div>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-secondary/50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors text-primary hover:text-accent ${
                  isActive ? "font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>

            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium text-primary ${
                    isActive ? "font-semibold" : ""
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium text-primary ${
                    isActive ? "font-semibold" : ""
                  }`
                }
              >
                About Us
              </NavLink>

              <div>
                <NavLink
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium block mb-2 text-primary ${
                      isActive ? "font-semibold" : ""
                    }`
                  }
                >
                  Services
                </NavLink>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-primary hover:text-accent"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium text-primary ${
                    isActive ? "font-semibold" : ""
                  }`
                }
              >
                Contact
              </NavLink>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gradient-primary text-white">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
