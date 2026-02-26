import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MessageCircle, Send, MapPin, Clock, ArrowUpRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const EMAILJS_SERVICE_ID = "service_eujwij9";
const EMAILJS_TEMPLATE_ID = "template_z0samzh";
const EMAILJS_PUBLIC_KEY = "Bj-s7E_G9IWYJerCR";

const contactLinks = [
  { icon: Mail, label: "Email", value: "cloudwithstephen@gmail.com", href: "mailto:cloudwithstephen@gmail.com", color: "text-primary" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 813 312 2252", href: "https://wa.me/2348133122252", color: "text-green-500" },
  { icon: Linkedin, label: "LinkedIn", value: "CloudWithStephen", href: "https://www.linkedin.com/in/stephen-james-215907322", color: "text-blue-400" },
  { icon: Github, label: "GitHub", value: "@cloudwithstephen", href: "https://github.com/cloudwithstephen", color: "text-foreground" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      toast({ title: "Message sent!", description: "Thanks for reaching out. We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Failed to send", description: "Something went wrong. Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </span>
          <h2 className="section-heading mb-6">
            Ready to Grow Your Business{" "}
            <span className="gradient-text">Online?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Book a free consultation or send us a message. Let's build something great together.
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://wa.me/2348133122252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <Calendar className="w-5 h-5" />
            Book Consultation
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Lagos, Nigeria (Remote-first)</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="font-medium">Accepting new projects</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Connect With Us</h3>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className={`w-5 h-5 ${link.color}`} />
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            id="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
              <form ref={formRef} onSubmit={handleSubmit} className="relative p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Your Name</label>
                    <Input type="text" name="from_name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required maxLength={100} className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Your Email</label>
                    <Input type="email" name="from_email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required maxLength={255} className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <label className="text-sm font-medium text-foreground/80">What do you need?</label>
                  <Input type="text" name="subject" placeholder="Website / AI Chatbot / Automation / Other" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required maxLength={200} className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl" />
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-foreground/80">Tell us more</label>
                  <Textarea name="message" placeholder="Describe your project, goals, and timeline..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} maxLength={2000} className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg shadow-primary/20">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Free consultation included. We respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
