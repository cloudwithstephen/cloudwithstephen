import { Clock, DollarSign, Zap, Rocket, Headphones, Shield } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Clock,
    title: "Saves Business Time",
    description: "AI automation handles repetitive tasks so you can focus on growing your business.",
  },
  {
    icon: DollarSign,
    title: "Reduces Operational Cost",
    description: "Cut overhead costs with smart automation and efficient digital systems.",
  },
  {
    icon: Zap,
    title: "Modern Scalable Technology",
    description: "Built with the latest tech stack that grows with your business needs.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Get your project launched quickly without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch. You get dedicated support and maintenance.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project is tested, optimized, and built to professional standards.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />

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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">Why Choose Us</span>
            </span>
            <h2 className="section-heading mb-4">Why CloudWithStephen?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine AI expertise and modern web development to deliver results that matter.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 group hover:border-accent/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 w-fit mb-4">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
