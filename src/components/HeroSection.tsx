import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.07] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[120px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-muted/30 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground">
                AI-Powered Solutions for Modern Business
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Build smarter.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Grow faster.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We help businesses grow with AI automation, professional websites,
            and digital solutions that attract customers and cut costs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16"
          >
            <Button
              size="lg"
              className="group relative px-8 py-6 text-sm sm:text-base w-full sm:w-auto overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-sm sm:text-base w-full sm:w-auto border-border/60 hover:bg-muted/40 transition-colors duration-300"
              asChild
            >
              <a href="#contact">Book a Call →</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
                {i < 2 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
