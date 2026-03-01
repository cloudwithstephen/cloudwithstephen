import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash && location.pathname !== "/") {
      window.location.href = `/${href}`;
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm py-2"
            : "py-3 sm:py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0 relative z-[60]">
              <img
                src={cwsLogo}
                alt="CWS Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-bold text-sm sm:text-base">
                <span className="text-primary">Cloud</span>
                <span className="text-foreground">WithStephen</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5 bg-muted/40 backdrop-blur-sm rounded-full px-1.5 py-1 border border-border/40">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.href}
                    href={location.pathname === "/" ? link.href : `/${link.href}`}
                    onClick={() => handleNavClick(link.href, true)}
                    className="px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-full transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-full transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 relative z-[60]">
              <ThemeToggle />
              <div className="hidden lg:block">
                <Button size="sm" asChild className="rounded-full px-5 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>

              {/* Hamburger — animated */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between relative">
                  <span
                    className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                      isOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-3.5 bg-foreground rounded-full transition-all duration-300 ml-auto ${
                      isOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                      isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {link.isHash ? (
                    <a
                      href={location.pathname === "/" ? link.href : `/${link.href}`}
                      onClick={() => handleNavClick(link.href, true)}
                      className="block text-2xl sm:text-3xl font-medium text-muted-foreground hover:text-foreground py-3 transition-colors text-center"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl sm:text-3xl font-medium text-muted-foreground hover:text-foreground py-3 transition-colors text-center"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mt-6"
              >
                <Button size="lg" className="rounded-full px-10 py-6 text-base" asChild>
                  <a
                    href={location.pathname === "/" ? "#contact" : "/#contact"}
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
