import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import stephenHero from "@/assets/stephen-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" aria-label="Hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.15)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.15)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Text */}
          <div className="max-w-xl order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                CloudWithStephen
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.08] mb-4 sm:mb-6"
            >
              Build smarter.
              <br />
              <span className="text-muted-foreground">Grow faster.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed"
            >
              We help businesses grow with AI automation, professional websites, and digital solutions that attract customers and cut costs.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-10 sm:mb-14"
            >
              <Button
                size="lg"
                className="group px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
                asChild
              >
                <a href="#contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base text-muted-foreground hover:text-foreground w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Book a call →</a>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 border-t border-border pt-6 sm:pt-8"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image (visible on all devices) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
              <img
                src={stephenHero}
                alt="Stephen — founder of CloudWithStephen, AI solutions builder and web developer"
                className="relative rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover shadow-2xl shadow-primary/10 border-4 border-border/50"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-center"
            >
              <p className="text-lg sm:text-xl font-semibold text-foreground">Stephen James</p>
              <p className="text-sm text-muted-foreground">AI Solutions Builder & Web Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
