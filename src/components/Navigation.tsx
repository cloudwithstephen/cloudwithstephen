import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import cwsLogo from "@/assets/cws-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

              {/* Modern hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-muted/50 border border-border/40 hover:bg-muted/80 hover:border-primary/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-[18px] h-[14px] flex flex-col justify-between relative">
                  <motion.span
                    animate={isOpen
                      ? { rotate: 45, y: 6, width: 18 }
                      : { rotate: 0, y: 0, width: 18 }
                    }
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="block h-[2px] bg-foreground rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen
                      ? { opacity: 0, x: 8 }
                      : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.2 }}
                    className="block h-[2px] w-3 bg-foreground rounded-full ml-auto"
                  />
                  <motion.span
                    animate={isOpen
                      ? { rotate: -45, y: -6, width: 18 }
                      : { rotate: 0, y: 0, width: 18 }
                    }
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="block h-[2px] bg-foreground rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu — modernized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/98 backdrop-blur-3xl" />

            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-primary/[0.06] blur-[100px]" />

            <div className="relative flex flex-col justify-center min-h-screen px-8 sm:px-12">
              {/* Nav links */}
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                  >
                    {link.isHash ? (
                      <a
                        href={location.pathname === "/" ? link.href : `/${link.href}`}
                        onClick={() => handleNavClick(link.href, true)}
                        className="group flex items-center justify-between py-4 border-b border-border/20 hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="text-2xl sm:text-3xl font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {link.label}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-border/20 hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="text-2xl sm:text-3xl font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {link.label}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, delay: 0.05 + navLinks.length * 0.05 }}
                className="mt-10"
              >
                <Button
                  size="lg"
                  className="w-full rounded-2xl px-8 py-7 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300"
                  asChild
                >
                  <a
                    href={location.pathname === "/" ? "#contact" : "/#contact"}
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>

              {/* Bottom tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-xs text-muted-foreground/50 text-center tracking-widest uppercase"
              >
                AI Solutions & Web Development
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
