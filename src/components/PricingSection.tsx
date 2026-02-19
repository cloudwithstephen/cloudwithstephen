import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const plans = [
  {
    name: "Basic Website",
    description: "Perfect for small businesses and personal brands getting started online.",
    price: "₦300,000",
    period: "starting at",
    features: [
      "Up to 5 pages (Home, About, Services, etc.)",
      "Mobile-responsive design",
      "Contact form & WhatsApp integration",
      "Basic SEO setup",
      "Social media links",
      "1 month free support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business Pro",
    description: "For growing businesses that need a professional website with advanced features.",
    price: "₦800,000",
    period: "starting at",
    features: [
      "Up to 10 pages with custom design",
      "E-commerce / product catalog",
      "Payment integration (Paystack/Stripe)",
      "Blog or news section",
      "SEO & Google Analytics setup",
      "Admin dashboard",
      "3 months free support",
    ],
    cta: "Let's Talk",
    highlighted: true,
  },
  {
    name: "Custom Web App",
    description: "Full-stack web applications, SaaS platforms, and complex digital products.",
    price: "Custom",
    period: "project-based",
    features: [
      "Custom web application development",
      "User authentication & roles",
      "Database design & API integration",
      "Real-time features & dashboards",
      "Third-party integrations",
      "Hosting & deployment setup",
      "Ongoing maintenance & support",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-mono text-sm text-primary mb-4">
              // pricing
            </span>
            <h2 className="section-heading">Affordable Web Development</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every project includes responsive design, SEO, and post-launch support.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
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

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {plan.period}
                  </span>
                  <div className="text-4xl font-bold mt-1">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
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
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            All plans include a free consultation call. Need something different?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Get a custom quote
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
