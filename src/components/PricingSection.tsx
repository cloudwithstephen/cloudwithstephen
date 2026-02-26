import { Check, ArrowRight, Sparkles, Bot, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const websitePackages = [
  {
    name: "Starter Business Website",
    price: "₦300,000",
    period: "starting at",
    timeline: "1–2 weeks",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form & WhatsApp",
      "Basic SEO setup",
      "Social media links",
      "1 month free support",
    ],
    highlighted: false,
  },
  {
    name: "Professional Website",
    price: "₦800,000",
    period: "starting at",
    timeline: "2–4 weeks",
    features: [
      "Up to 10 custom pages",
      "Blog / news section",
      "SEO & Google Analytics",
      "Admin dashboard",
      "Payment integration ready",
      "3 months free support",
    ],
    highlighted: true,
  },
  {
    name: "Ecommerce Website",
    price: "₦1,200,000",
    period: "starting at",
    timeline: "3–6 weeks",
    features: [
      "Full online store",
      "Product management system",
      "Payment integration (Paystack/Stripe)",
      "Order tracking & notifications",
      "Inventory management",
      "6 months free support",
    ],
    highlighted: false,
  },
];

const aiPackages = [
  {
    name: "AI Starter Automation",
    price: "₦200,000",
    period: "starting at",
    timeline: "1 week",
    features: [
      "1 AI chatbot setup",
      "Basic workflow automation",
      "Email auto-responder",
      "Setup & configuration",
      "1 month support",
    ],
    highlighted: false,
  },
  {
    name: "Smart Business AI Setup",
    price: "₦500,000",
    period: "starting at",
    timeline: "2–3 weeks",
    features: [
      "Advanced AI chatbot",
      "3 workflow automations",
      "AI content generation tools",
      "CRM integration",
      "Training & documentation",
      "3 months support",
    ],
    highlighted: true,
  },
  {
    name: "Full AI Business Automation",
    price: "Custom",
    period: "project-based",
    timeline: "4–8 weeks",
    features: [
      "Complete AI infrastructure",
      "Unlimited automations",
      "Custom AI models & tools",
      "Full system integration",
      "Team training",
      "Ongoing support & maintenance",
    ],
    highlighted: false,
  },
];

const PricingCard = ({ plan }: { plan: typeof websitePackages[0] }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ duration: 0.4 }}
    className={`relative rounded-2xl border p-6 lg:p-8 flex flex-col transition-all duration-300 ${
      plan.highlighted
        ? "bg-card border-primary shadow-lg shadow-primary/10 scale-[1.02]"
        : "bg-card/50 border-border hover:border-primary/40"
    }`}
  >
    {plan.highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          <Sparkles className="w-3 h-3" />
          Most Popular
        </span>
      </div>
    )}
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
      <p className="text-xs text-muted-foreground">Delivery: {plan.timeline}</p>
    </div>
    <div className="mb-6">
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{plan.period}</span>
      <div className="text-3xl font-bold mt-1">{plan.price}</div>
    </div>
    <ul className="space-y-2.5 mb-6 flex-1">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm">
          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      size="lg"
      className="w-full group"
      variant={plan.highlighted ? "default" : "outline"}
      asChild
    >
      <a href="#contact">
        Get Started
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Pricing</span>
            </span>
            <h2 className="section-heading mb-4">Transparent, Affordable Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No hidden fees. Every package includes a free consultation call.
            </p>
          </motion.div>

          {/* Website Packages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Website Packages</h3>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {websitePackages.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </motion.div>
          </div>

          {/* AI Packages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Bot className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">AI Solutions Packages</h3>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {aiPackages.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </motion.div>
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            Need something custom?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Let's discuss your project
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
