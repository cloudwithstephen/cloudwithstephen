import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Heart, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description:
      "We don't just ship features — we ship results. Every line of code is tied to a business outcome that moves your numbers.",
  },
  {
    icon: Zap,
    title: "Built to Scale",
    description:
      "Modern stacks, clean architecture, and AI-first thinking. Your product will perform on day one and on day one thousand.",
  },
  {
    icon: Heart,
    title: "Partner, Not Vendor",
    description:
      "We embed with your team, share the wins, and stay long after launch. Your growth is the only KPI that matters.",
  },
];

const stats = [
  { value: "50+", label: "Products Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Satisfaction" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/[0.08] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/[0.08] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                About CWS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              We build the{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                digital infrastructure
              </span>{" "}
              behind growing businesses.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              CWS (CloudWithStephen) is a small, senior team of engineers and
              designers shipping AI-powered products and high-performance
              websites for founders who care about craft.
            </p>
          </motion.div>

          {/* Two-column: story + visual */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                We started CWS with a simple belief:{" "}
                <span className="text-foreground font-medium">
                  most businesses don't need more software — they need software
                  that actually works.
                </span>{" "}
                Fast, reliable, and built for the way modern teams operate.
              </p>
              <p>
                Today we partner with startups, ecommerce brands, and growing
                companies across Africa and beyond — combining product
                engineering with AI automation to remove friction, cut costs,
                and unlock new revenue.
              </p>
              <p>
                No bloated agencies. No endless retainers. Just a focused team
                that ships work you'd be proud to put your name on.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-foreground font-medium group"
              >
                <span className="border-b border-foreground/30 group-hover:border-foreground transition-colors pb-0.5">
                  Start a conversation
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Visual / quote card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/30 backdrop-blur-sm p-8 md:p-10 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/15 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-accent/15 blur-2xl" />

                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold text-primary/30 leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-6">
                    Build fast. Ship clean. Treat every project like it's our
                    own.
                  </p>
                  <div className="h-px bg-border mb-5" />
                  <div>
                    <div className="font-semibold">Stephen James</div>
                    <div className="text-sm text-muted-foreground">
                      Founder, CWS
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5 md:gap-6 mb-20 md:mb-24"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 hover:border-primary/40 hover:bg-card/70 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-10 md:pt-12 border-t border-border/60"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1.5 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
