import { MessageSquare, Target, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "We discuss your business goals, challenges, and what you need. This call is free and no-obligation.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy & Design",
    description: "We create a clear plan, wireframes, and design mockups tailored to your brand and business objectives.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development & AI Integration",
    description: "We build your website or AI solution using modern technology, with regular updates throughout the process.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project live and provide ongoing support, maintenance, and optimization post-launch.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorksSection = () => {
  return (
    <section id="workflow" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">How It Works</span>
            </span>
            <h2 className="section-heading mb-4">Simple 4-Step Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From idea to launch, we make it easy and stress-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                <div className="glass-card p-6 h-full relative z-10">
                  <span className="text-4xl font-black text-primary/20 absolute top-4 right-4">{step.step}</span>
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
