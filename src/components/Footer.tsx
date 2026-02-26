import { Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";
import cwsLogo from "@/assets/cws-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <img src={cwsLogo} alt="CWS Logo" className="w-12 h-12 object-contain rounded-xl" />
                <span className="font-bold">
                  <span className="text-primary">Cloud</span>
                  <span className="text-foreground">WithStephen</span>
                </span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI Solutions & Web Development Agency helping businesses grow online, automate operations, and save money.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#services" className="hover:text-foreground transition-colors">Services</a>
                <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
                <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
                <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex items-center gap-3">
                <a href="https://wa.me/2348133122252" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="mailto:cloudwithstephen@gmail.com" className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/cloudwithstephen" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/stephen-james-215907322" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Built with <Heart className="w-3 h-3 text-destructive" /> by CloudWithStephen
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {currentYear} CloudWithStephen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
