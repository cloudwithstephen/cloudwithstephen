import { ArrowRight, Download, Github, Sparkles, Cloud, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse animation-delay-500" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-float" />

      {/* Floating Tech Icons */}
      <div className="absolute top-32 left-[15%] p-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float animation-delay-200">
        <Cloud className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute top-48 right-[20%] p-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float animation-delay-500">
        <Code2 className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-48 left-[20%] p-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float animation-delay-300">
        <Sparkles className="w-6 h-6 text-primary" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80">
              Open to new opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in animation-delay-100">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Stephen
              </span>
            </span>
          </h1>

          {/* Role Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in animation-delay-150">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm">
              Front-End Developer
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-medium text-sm">
              DevOps Engineer
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm">
              Cloud Architect
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-200">
            I craft <span className="text-foreground font-medium">scalable web experiences</span> and 
            architect <span className="text-foreground font-medium">cloud infrastructure</span> that 
            powers modern applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-300">
            <Button 
              size="lg" 
              className="group relative px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
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
              className="px-8 py-6 text-lg border-2 hover:bg-primary/5"
              asChild
            >
              <a href="#contact">
                Let's Talk
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-6 py-6 text-lg hover:bg-muted/50"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Modern Terminal Card */}
          <div className="max-w-2xl mx-auto animate-fade-in animation-delay-400">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-accent/80" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">stephen@cloud ~ </span>
                  <div className="w-16" />
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm text-left space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span className="text-muted-foreground">npx</span>
                    <span className="text-foreground">cloudwithstephen</span>
                  </div>
                  <div className="pl-6 space-y-1.5 text-muted-foreground">
                    <p>✓ Building responsive UIs with React & TypeScript</p>
                    <p>✓ Deploying to AWS, Docker & Kubernetes</p>
                    <p>✓ Automating with CI/CD pipelines</p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-accent">→</span>
                    <span className="animate-pulse">▊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Link */}
          <div className="flex items-center justify-center mt-12 animate-fade-in animation-delay-500">
            <a
              href="https://github.com/cloudwithstephen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">@cloudwithstephen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
