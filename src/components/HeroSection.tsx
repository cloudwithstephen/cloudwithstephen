import { ArrowRight, Sparkles, Bot, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const floatingIcons = [
  { Icon: Bot, x: "10%", y: "20%", delay: 0, size: 28 },
  { Icon: Globe, x: "75%", y: "15%", delay: 0.3, size: 24 },
  { Icon: Zap, x: "85%", y: "55%", delay: 0.6, size: 22 },
  { Icon: Shield, x: "65%", y: "80%", delay: 0.9, size: 20 },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[180px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium tracking-wide text-primary">
                  AI-Powered Solutions
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              Build smarter.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Grow faster.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              We help businesses grow with AI automation, professional websites,
              and digital solutions that attract customers and cut costs.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12"
            >
              <Button
                size="lg"
                className="group relative px-8 py-6 text-sm sm:text-base w-full sm:w-auto overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
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
                className="px-8 py-6 text-sm sm:text-base w-full sm:w-auto border-border/60 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300"
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
              className="flex flex-wrap gap-8 sm:gap-10 md:gap-14 border-t border-border/50 pt-8"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Concentric rings */}
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute inset-0 rounded-full border border-border/20"
                  style={{
                    inset: `${ring * 12}%`,
                    animation: `pulse ${3 + ring}s ease-in-out infinite`,
                    opacity: 0.3 + (3 - ring) * 0.15,
                  }}
                />
              ))}

              {/* Core glow */}
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-primary/20 to-accent/15 blur-xl" />
              <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/10" />

              {/* Center icon */}
              <div className="absolute inset-[38%] rounded-full bg-card/80 border border-border/40 flex items-center justify-center shadow-2xl shadow-primary/10">
                <div className="text-primary">
                  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" strokeLinejoin="round" />
                    <path d="M4 14l20 10m0 0l20-10M24 24v20" opacity="0.5" />
                    <path d="M14 9l20 10M34 9L14 19" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Floating icons */}
              {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + delay }}
                  className="absolute"
                  style={{ left: x, top: y }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="p-2.5 rounded-xl bg-card/90 border border-border/40 shadow-lg shadow-primary/5 backdrop-blur-sm"
                  >
                    <Icon className="text-primary/70" size={size} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Floating dots */}
              {[
                { x: "5%", y: "50%", s: 6 },
                { x: "90%", y: "30%", s: 4 },
                { x: "50%", y: "5%", s: 5 },
                { x: "20%", y: "85%", s: 4 },
              ].map((dot, i) => (
                <motion.div
                  key={`dot-${i}`}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                  className="absolute rounded-full bg-primary/40"
                  style={{ left: dot.x, top: dot.y, width: dot.s, height: dot.s }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
