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
    name: "Starter",
    description: "Perfect for small businesses looking to establish their online presence.",
    price: "£999",
    period: "one-time",
    features: [
      "Professional website (up to 5 pages)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month of post-launch support",
      "Domain & hosting guidance",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For businesses ready to scale with custom web apps and cloud infrastructure.",
    price: "£2,499",
    period: "starting at",
    features: [
      "Custom web application",
      "Cloud infrastructure setup (AWS)",
      "CI/CD pipeline configuration",
      "Database design & integration",
      "3 months of support & maintenance",
      "Performance monitoring",
      "SEO & analytics integration",
    ],
    cta: "Let's Talk",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Full-service partnership for complex systems, DevOps, and ongoing management.",
    price: "Custom",
    period: "monthly retainer",
    features: [
      "Full-stack development & architecture",
      "Cloud migration & optimization",
      "DevOps automation & monitoring",
      "Dedicated support & SLA",
      "Security audits & compliance",
      "Scalable infrastructure design",
      "Priority response times",
    ],
    cta: "Contact Us",
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
            <h2 className="section-heading">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              No hidden fees. Choose a plan that fits your business, or reach out for a custom quote.
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
