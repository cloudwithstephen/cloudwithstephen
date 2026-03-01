import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import cwsLogo from "@/assets/cws-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#services", label: "Services", isHash: true },
  { href: "#workflow", label: "How It Works", isHash: true },
  { href: "#pricing", label: "Pricing", isHash: true },
  { href: "#testimonials", label: "Testimonials", isHash: true },
  { href: "#faq", label: "FAQ", isHash: true },
  { href: "#contact", label: "Contact", isHash: true },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash && location.pathname !== "/") {
      window.location.href = `/${href}`;
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-glass-border py-2"
          : "py-3 bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={cwsLogo}
              alt="CWS Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-sm sm:text-base hidden xs:block">
              <span className="text-primary">Cloud</span>
              <span className="text-foreground">WithStephen</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.href}
                  href={location.pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => handleNavClick(link.href, true)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden lg:block">
              <Button size="sm" asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <a href="#contact">Get Started</a>
              </Button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 pb-4 animate-fade-in border-t border-border pt-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.href}
                    href={location.pathname === "/" ? link.href : `/${link.href}`}
                    onClick={() => handleNavClick(link.href, true)}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button size="default" className="mt-3 mx-4" asChild>
                <a
                  href={location.pathname === "/" ? "#contact" : "/#contact"}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
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
