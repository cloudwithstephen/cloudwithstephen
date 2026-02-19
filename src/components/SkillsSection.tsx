import { 
  Code2, 
  Layout, 
  Paintbrush,
  Smartphone,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'primary',
    skills: [
      { name: 'React & Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Animations & Interactions', level: 85 },
    ],
    badges: ['Vite', 'Framer Motion', 'shadcn/ui', 'Material UI'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    color: 'accent',
    skills: [
      { name: 'Node.js & Express', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'PostgreSQL & MySQL', level: 75 },
      { name: 'Firebase & Supabase', level: 80 },
      { name: 'Authentication & Auth', level: 80 },
      { name: 'Payment Integration', level: 75 },
    ],
    badges: ['Stripe', 'Paystack', 'JWT', 'OAuth'],
  },
  {
    title: 'Design & Optimization',
    icon: Paintbrush,
    color: 'primary',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Figma to Code', level: 85 },
      { name: 'SEO Optimization', level: 80 },
      { name: 'Performance Tuning', level: 80 },
      { name: 'Accessibility (a11y)', level: 75 },
      { name: 'Brand & Visual Design', level: 80 },
    ],
    badges: ['Figma', 'Google Analytics', 'Lighthouse', 'Core Web Vitals'],
  },
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
      staggerChildren: 0.1,
    },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            <span className="inline-block font-mono text-sm text-primary mb-4">// our expertise</span>
            <h2 className="section-heading">Our Tech Stack</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We use modern, battle-tested technologies to build fast, scalable, and beautiful web experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className="glass-card glow-border p-6 hover:bg-card/70 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4 mb-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {category.badges.map((badge) => (
                    <span key={badge} className="skill-badge text-xs">
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-lg font-semibold mb-6">Tools & Platforms We Use</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { icon: Code2, label: 'VS Code' },
                { icon: Layout, label: 'Figma' },
                { icon: Globe, label: 'Vercel' },
                { icon: Database, label: 'Supabase' },
                { icon: Shield, label: 'Cloudflare' },
                { icon: Zap, label: 'Stripe' },
                { icon: Search, label: 'SEO Tools' },
                { icon: Smartphone, label: 'Mobile-First' },
                { icon: Server, label: 'Node.js' },
              ].map((tool) => (
                <motion.div
                  key={tool.label}
                  variants={fadeInUp}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  <tool.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{tool.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
