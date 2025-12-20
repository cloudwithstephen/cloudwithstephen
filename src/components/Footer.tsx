import { Cloud, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">
                <span className="text-primary">cloud</span>
                <span className="text-foreground">withstephen</span>
              </span>
            </a>

            {/* Quick Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/cloudwithstephen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/cloudwithstephen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@cloudwithstephen.com"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Built with <Heart className="w-3 h-3 text-destructive" /> using React, TypeScript & Tailwind
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {currentYear} cloudwithstephen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
