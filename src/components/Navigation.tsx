import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About", isHash: true },
  { href: "#skills", label: "Skills", isHash: true },
  { href: "#projects", label: "Projects", isHash: true },
  { href: "#workflow", label: "Workflow", isHash: true },
  { href: "#experience", label: "Experience", isHash: true },
  { href: "/blog", label: "Blog", isHash: false },
  { href: "/courses", label: "Courses", isHash: false },
  { href: "#contact", label: "Contact", isHash: true },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to handle navigation
  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash) {
      // For hash links, if we're not on home page, navigate there first
      if (location.pathname !== "/") {
        window.location.href = `/${href}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-glass-border py-2 md:py-3"
          : "py-3 md:py-5 bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-base sm:text-lg hidden sm:block">
              <span className="text-primary">cloud</span>
              <span className="text-foreground">withstephen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.href}
                  href={location.pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => handleNavClick(link.href, true)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button variant="hero" size="sm" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 sm:p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.href}
                    href={
                      location.pathname === "/" ? link.href : `/${link.href}`
                    }
                    onClick={() => handleNavClick(link.href, true)}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button variant="hero" size="sm" className="mt-1.5" asChild>
                <a
                  href={location.pathname === "/" ? "#contact" : "/#contact"}
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
