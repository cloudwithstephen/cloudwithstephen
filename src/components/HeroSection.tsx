import { ArrowRight, Download, Github, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-500" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name & Role */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in animation-delay-100">
            <span className="block text-foreground">Front-End Developer</span>
            <span className="block gradient-text mt-2">DevOps & Cloud Engineer</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-200">
            I build scalable web experiences and automate cloud infrastructure. 
            Transforming ideas into production-ready applications with modern DevOps practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">
                Hire Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Terminal Preview */}
          <div className="terminal max-w-xl mx-auto text-left animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-accent/70" />
              <span className="ml-2 text-xs text-muted-foreground">terminal</span>
            </div>
            <div className="space-y-1">
              <p>
                <span className="terminal-prompt">$ </span>
                <span className="text-foreground">whoami</span>
              </p>
              <p className="text-muted-foreground">→ Full-stack developer with DevOps expertise</p>
              <p>
                <span className="terminal-prompt">$ </span>
                <span className="text-foreground">cat skills.txt</span>
              </p>
              <p className="text-muted-foreground">→ React, TypeScript, Docker, AWS, CI/CD</p>
              <p>
                <span className="terminal-prompt">$ </span>
                <span className="text-primary">_</span>
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in animation-delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
