import { 
  Code2, 
  Layout, 
  Container,
  Terminal,
  Server,
  Cloud,
  Globe,
  Shield,
  Activity,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Front-End',
    icon: Code2,
    color: 'primary',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / SCSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    badges: ['Responsive Design', 'UI/UX Principles', 'Vite', 'Next.js'],
  },
  {
    title: 'DevOps',
    icon: Settings,
    color: 'accent',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Linux & Bash', level: 75 },
      { name: 'Nginx', level: 70 },
      { name: 'SSH', level: 80 },
    ],
    badges: ['GitHub Actions', 'Containers', 'Automation', 'Scripting'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    color: 'primary',
    skills: [
      { name: 'AWS Fundamentals', level: 65 },
      { name: 'Cloud Deployment', level: 70 },
      { name: 'VM Provisioning', level: 65 },
      { name: 'DNS & Domains', level: 75 },
      { name: 'SSL/TLS', level: 70 },
      { name: 'Monitoring', level: 60 },
    ],
    badges: ['EC2', 'S3', 'Route 53', 'CloudFlare'],
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
            <span className="inline-block font-mono text-sm text-primary mb-4">// skills & expertise</span>
            <h2 className="section-heading">Technical Arsenal</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit spanning front-end development, DevOps practices, and cloud infrastructure.
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
            <h3 className="text-lg font-semibold mb-6">Tools & Technologies</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { icon: Code2, label: 'VS Code' },
                { icon: Container, label: 'Docker' },
                { icon: Terminal, label: 'Terminal' },
                { icon: Server, label: 'Nginx' },
                { icon: Cloud, label: 'AWS' },
                { icon: Globe, label: 'Vercel' },
                { icon: Shield, label: 'Security' },
                { icon: Activity, label: 'Monitoring' },
                { icon: Layout, label: 'Figma' },
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
