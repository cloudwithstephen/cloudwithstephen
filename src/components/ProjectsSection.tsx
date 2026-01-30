import { ExternalLink, Github, ArrowUpRight, Cloud, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product management, cart functionality, and secure checkout. Deployed with CI/CD pipeline and containerized architecture.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Docker'],
    devops: 'GitHub Actions CI/CD, Docker containers, AWS EC2 deployment',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'School Management System',
    description: 'Comprehensive platform for managing students, teachers, courses, and grades. Features role-based access control and real-time updates.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
    tech: ['React', 'Redux', 'Express', 'PostgreSQL', 'Docker'],
    devops: 'Automated testing, Docker Compose, Nginx reverse proxy',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Business Landing Pages',
    description: 'Collection of high-converting landing pages for various clients. Optimized for SEO, performance, and accessibility.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    devops: 'Vercel deployment, automated builds, performance monitoring',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cloud Monitoring Dashboard',
    description: 'Real-time monitoring dashboard for tracking server health, application metrics, and infrastructure status.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tech: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    devops: 'AWS CloudWatch integration, automated alerts, Docker',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DevOps Pipeline Template',
    description: 'Reusable CI/CD pipeline templates for modern web applications. Includes testing, building, and deployment stages.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
    tech: ['GitHub Actions', 'Docker', 'Bash', 'YAML'],
    devops: 'Multi-stage builds, parallel jobs, artifact caching',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio! Built with modern technologies and deployed using best DevOps practices.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    devops: 'Vercel deployment, automated previews, performance optimization',
    liveUrl: '#',
    githubUrl: '#',
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
      staggerChildren: 0.15,
    },
  },
};

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      
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
            <span className="inline-block font-mono text-sm text-primary mb-4">// featured work</span>
            <h2 className="section-heading">Projects & Deployments</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of real-world projects highlighting both development skills and DevOps practices.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card glow-border overflow-hidden group ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {/* DevOps Highlight */}
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20 mb-6">
                      <Cloud className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <p className="text-sm text-accent">{project.devops}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold mb-8 text-center"
          >
            More Projects
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="glass-card glow-border p-6 group hover:bg-card/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Workflow className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="View live demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
