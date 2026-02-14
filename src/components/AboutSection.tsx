import { Code2, Cloud, Cog, Users, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications, responsive websites, and modern frontends that deliver fast, intuitive user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud architecture, deployment, and management on AWS—designed to scale with your business without surprise costs.",
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, containerization, and automation that eliminate manual work and speed up your delivery cycle.",
  },
];

const traits = [
  { icon: Users, label: "Collaborative Team" },
  { icon: Rocket, label: "Fast Delivery" },
  { icon: Shield, label: "Reliable Systems" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-mono text-sm text-primary mb-4">
              // our services
            </span>
            <h2 className="section-heading">What We Do</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We deliver end-to-end digital solutions for businesses—from concept to deployment and beyond.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">
                  CloudWithStephen (CWS)
                </span>{" "}
                is a digital agency that combines{" "}
                <span className="text-primary font-medium">
                  web development
                </span>
                ,{" "}
                <span className="text-primary font-medium">
                  cloud engineering
                </span>
                , and{" "}
                <span className="text-primary font-medium">
                  DevOps automation
                </span>{" "}
                to help businesses build, deploy, and scale their digital products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've built real-world systems for eCommerce platforms, business management tools, and growing startups. Our approach is hands-on, transparent, and focused on delivering measurable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a new web application, cloud migration, or automated deployment pipeline—we bring the expertise and the execution.
              </p>

              {/* Traits */}
              <div className="flex flex-wrap gap-3 pt-4">
                {traits.map((trait, index) => (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border"
                  >
                    <trait.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{trait.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {services.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className="glass-card glow-border p-6 group hover:bg-card/70 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
          >
            {[
              { value: "3+", label: "Years in Business" },
              { value: "15+", label: "Projects Delivered" },
              { value: "10+", label: "Happy Clients" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
