import { ArrowRight, Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground/80">
                Open to opportunities
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-muted-foreground">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Stephen
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-medium text-primary">
                <span>Front-End Developer</span>
                <span className="text-muted-foreground">•</span>
                <span>DevOps Engineer</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build <span className="text-foreground font-medium">scalable web experiences</span> and 
              automate <span className="text-foreground font-medium">cloud infrastructure</span> for 
              modern applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto group px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-2"
                asChild
              >
                <a href="#contact">
                  Let's Talk
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto px-6 py-5 sm:py-6 text-base sm:text-lg"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Link */}
            <div className="flex items-center justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/cloudwithstephen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">@cloudwithstephen</span>
              </a>
            </div>
          </div>

          {/* Right Content - Terminal Card */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none">
            <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">stephen@cloud ~ </span>
                <div className="w-16" />
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-left space-y-3 bg-card">
                <div className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">npx</span>
                  <span className="text-foreground">cloudwithstephen</span>
                </div>
                <div className="pl-4 sm:pl-6 space-y-1.5 text-muted-foreground">
                  <p>✓ Building responsive UIs with React & TypeScript</p>
                  <p>✓ Deploying to AWS, Docker & Kubernetes</p>
                  <p>✓ Automating with CI/CD pipelines</p>
                  <p>✓ Managing cloud infrastructure</p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-primary">→</span>
                  <span className="animate-pulse text-primary">▊</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-card rounded-xl border border-border p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">3+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Exp</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">15+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Committed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
