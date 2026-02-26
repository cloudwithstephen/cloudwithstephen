import { Users, MessageSquare, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const results = [
  {
    icon: Users,
    title: "More Customers",
    description: "Professional online presence that attracts and converts visitors into paying customers.",
    metric: "3x",
    metricLabel: "More leads on average",
  },
  {
    icon: MessageSquare,
    title: "Automated Responses",
    description: "AI chatbots handle customer inquiries 24/7 so you never miss a potential sale.",
    metric: "24/7",
    metricLabel: "Customer support coverage",
  },
  {
    icon: Globe,
    title: "Professional Online Presence",
    description: "Stand out from competitors with a modern, trustworthy website that builds credibility.",
    metric: "100%",
    metricLabel: "Mobile responsive",
  },
  {
    icon: TrendingUp,
    title: "Increased Efficiency",
    description: "Automation reduces manual work, letting you focus on strategy and growth.",
    metric: "60%",
    metricLabel: "Less manual work",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const ResultsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />

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
              <span className="text-sm font-medium text-primary">Results & Benefits</span>
            </span>
            <h2 className="section-heading mb-4">Real Outcomes for Your Business</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our solutions are designed to deliver measurable impact on your bottom line.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {results.map((result) => (
              <motion.div
                key={result.title}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className="glass-card glow-border p-8 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <result.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{result.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold gradient-text">{result.metric}</span>
                      <span className="text-sm text-muted-foreground">{result.metricLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get These Results
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
