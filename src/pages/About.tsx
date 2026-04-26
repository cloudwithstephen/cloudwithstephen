import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const principles = [
  {
    n: "01",
    title: "Outcome over output",
    body: "We measure success in your numbers — not in features shipped or hours logged.",
  },
  {
    n: "02",
    title: "Built to scale",
    body: "Modern stacks, clean architecture, AI-first thinking. Performant on day one and day one thousand.",
  },
  {
    n: "03",
    title: "Partners, not vendors",
    body: "We embed with your team, share the wins, and stay long after launch.",
  },
];

const stats = [
  { value: "50+", label: "Products shipped" },
  { value: "30+", label: "Clients served" },
  { value: "3+", label: "Years building" },
  { value: "100%", label: "Satisfaction" },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CWS | CloudWithStephen — Our Story & Approach</title>
        <meta
          name="description"
          content="Meet CWS (CloudWithStephen) — a senior team of engineers and designers shipping AI-powered products and high-performance websites for growing businesses."
        />
        <link rel="canonical" href="https://www.cloudwithstephen.com/about" />
        <meta property="og:title" content="About CWS — CloudWithStephen" />
        <meta
          property="og:description"
          content="Senior engineers and designers shipping AI-powered products and high-performance websites."
        />
        <meta property="og:url" content="https://www.cloudwithstephen.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="pt-28 sm:pt-32">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full bg-primary/[0.07] blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                  backgroundSize: "72px 72px",
                  maskImage:
                    "radial-gradient(ellipse at top, black 30%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at top, black 30%, transparent 75%)",
                }}
              />
            </div>

            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto py-16 md:py-24">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fade}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                    — About
                  </span>
                </motion.div>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={fade}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
                >
                  A small team building{" "}
                  <span className="text-muted-foreground">
                    products that actually work.
                  </span>
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fade}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  CWS is a focused studio of engineers and designers shipping
                  AI-powered software and high-performance websites for
                  founders who care about craft.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="border-t border-border/60">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto py-16 md:py-24 grid md:grid-cols-12 gap-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fade}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-4"
                >
                  <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground sticky top-32">
                    Our story
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fade}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground"
                >
                  <p>
                    We started CWS with a simple belief:{" "}
                    <span className="text-foreground">
                      most businesses don't need more software — they need
                      software that actually works.
                    </span>
                  </p>
                  <p>
                    Today we partner with startups, ecommerce brands, and
                    growing companies across Africa and beyond — combining
                    product engineering with AI automation to remove friction,
                    cut costs, and unlock new revenue.
                  </p>
                  <p>
                    No bloated agencies. No endless retainers. Just a focused
                    team that ships work you'd be proud to put your name on.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Principles */}
          <section className="border-t border-border/60">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto py-16 md:py-24">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  transition={{ duration: 0.5 }}
                  className="mb-12 md:mb-16"
                >
                  <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                    Principles
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    How we operate.
                  </h2>
                </motion.div>

                <div className="divide-y divide-border/60 border-y border-border/60">
                  {principles.map((p, i) => (
                    <motion.div
                      key={p.n}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="grid md:grid-cols-12 gap-6 py-8 md:py-10 group"
                    >
                      <div className="md:col-span-2 text-sm font-mono text-muted-foreground/70">
                        {p.n}
                      </div>
                      <h3 className="md:col-span-4 text-xl md:text-2xl font-medium tracking-tight">
                        {p.title}
                      </h3>
                      <p className="md:col-span-6 text-muted-foreground leading-relaxed">
                        {p.body}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="border-t border-border/60">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="text-3xl md:text-5xl font-semibold tracking-tight mb-2">
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground tracking-wide">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Founder quote */}
          <section className="border-t border-border/60">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto py-20 md:py-28">
                <motion.blockquote
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-4xl font-medium tracking-tight leading-snug max-w-3xl"
                >
                  "Build fast. Ship clean. Treat every project like it's our
                  own."
                </motion.blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40" />
                  <div>
                    <div className="font-medium text-sm">Stephen James</div>
                    <div className="text-xs text-muted-foreground">
                      Founder, CWS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-border/60">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                    — Get in touch
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl">
                    Have a project in mind?
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors group"
                  >
                    Start a project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors"
                  >
                    Back to home
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
