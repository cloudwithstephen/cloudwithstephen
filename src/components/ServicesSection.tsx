import { Bot, MessageSquare, Cog, Sparkles, Workflow, Globe, ShoppingCart, Layout, Paintbrush, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const aiServices = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "24/7 customer support chatbots that handle inquiries, book appointments, and close sales automatically.",
  },
  {
    icon: Cog,
    title: "Business Automation",
    description: "Automate repetitive tasks like data entry, invoicing, email responses, and report generation.",
  },
  {
    icon: Sparkles,
    title: "AI Content & Marketing",
    description: "AI-powered content creation, social media scheduling, and marketing campaign automation.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect your tools and create automated workflows that save hours of manual work every week.",
  },
];

const webServices = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional, mobile-first websites that establish credibility and attract customers online.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Websites",
    description: "Full-featured online stores with payment integration, inventory management, and order tracking.",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    description: "Stunning portfolio sites that showcase your work and personal brand beautifully.",
  },
  {
    icon: Paintbrush,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, fast, conversion-optimized experience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </span>
            <h2 className="section-heading mb-4">What We Build For You</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two powerful service lines designed to help your business grow faster and operate smarter.
            </p>
          </motion.div>

          {/* AI Solutions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI Solutions</h3>
                <p className="text-sm text-muted-foreground">Automate, optimize, and scale with artificial intelligence</p>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {aiServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className="glass-card glow-border p-6 group hover:border-accent/40 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 w-fit mb-4">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Website Development</h3>
                <p className="text-sm text-muted-foreground">Beautiful, high-performing websites built to convert</p>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {webServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className="glass-card glow-border p-6 group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-fit mb-4">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-16"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
