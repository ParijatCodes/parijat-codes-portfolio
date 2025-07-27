
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Set loaded state after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      // Update header style based on scroll position
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const halfViewport = window.innerHeight / 2;
        
        if (sectionTop <= halfViewport && sectionBottom >= halfViewport) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "nav-blur shadow-glow" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className={cn(
            "text-xl font-bold gradient-text font-heading transform transition-all duration-500",
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95",
            isScrolled ? "scale-90" : "scale-100"
          )}
        >
          Parijat
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link",
                activeSection === item.href.substring(1) && "active-nav",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              )}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
              onClick={() => setActiveSection(item.href.substring(1))}
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="btn-glow animate-slide-down"
            style={{ animationDelay: '600ms' }}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <div className="animate-slide-down" style={{ animationDelay: '700ms' }}>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden text-navy transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-xl",
                activeSection === item.href.substring(1) && "active-nav",
                "transform transition-all duration-300",
                isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => {
                setActiveSection(item.href.substring(1));
                closeMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
