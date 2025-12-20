import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "cloudwithstephen@gmail.com",
    href: "mailto:cloudwithstephen@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@cloudwithstephen",
    href: "https://github.com/cloudwithstephen",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/Stephen James",
    href: "https://www.linkedin.com/in/stephen-james-215907322",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 813 312 2252",
    href: "https://wa.me/2348133122252",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-primary mb-4">
              // let's connect
            </span>
            <h2 className="section-heading">Get In Touch</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Let's build, deploy, and scale your next product together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <div className="glass-card glow-border p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you need a stunning web application, want to set up
                  your DevOps pipeline, or migrate to the cloud — I'm here to
                  help. Let's discuss your project.
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Available for freelance</span>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">
                          {link.label}
                        </div>
                        <div className="font-medium">{link.value}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card glow-border p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
