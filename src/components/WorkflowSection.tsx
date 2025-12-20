import { Code, GitBranch, TestTube, Container, Cloud, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const workflowSteps = [
  {
    icon: Code,
    title: 'Code',
    description: 'Write clean, tested code following best practices',
    details: ['TypeScript/JavaScript', 'React components', 'Unit tests'],
    color: 'primary',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Push to GitHub with meaningful commits',
    details: ['Feature branches', 'Pull requests', 'Code reviews'],
    color: 'primary',
  },
  {
    icon: TestTube,
    title: 'CI Pipeline',
    description: 'Automated testing and quality checks',
    details: ['Linting', 'Unit tests', 'Build verification'],
    color: 'accent',
  },
  {
    icon: Container,
    title: 'Containerize',
    description: 'Package application with Docker',
    details: ['Dockerfile', 'Multi-stage builds', 'Image optimization'],
    color: 'accent',
  },
  {
    icon: Cloud,
    title: 'Deploy',
    description: 'Push to cloud infrastructure',
    details: ['AWS/Vercel', 'Environment configs', 'Rollback support'],
    color: 'primary',
  },
  {
    icon: Globe,
    title: 'Live',
    description: 'Application served to users worldwide',
    details: ['CDN distribution', 'SSL/TLS', 'Monitoring'],
    color: 'primary',
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 md:py-32 relative bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-primary mb-4">// devops workflow</span>
            <h2 className="section-heading">From Code to Cloud</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A streamlined pipeline that takes your code from development to production with automation at every step.
            </p>
          </div>

          {/* Workflow Timeline */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="relative group">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="glass-card glow-border p-6 h-full hover:bg-card/70 transition-all duration-300 pt-8">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-lg bg-${step.color}/10 mb-4`}>
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < workflowSteps.length - 1 && index !== 2 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <ArrowRight className="w-5 h-5 text-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Demo */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="terminal">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="ml-2 text-xs text-muted-foreground">deployment-pipeline</span>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="terminal-prompt">$ </span>
                  <span className="text-foreground">git push origin main</span>
                </p>
                <p className="text-muted-foreground">→ Triggering CI/CD pipeline...</p>
                <p className="text-muted-foreground">→ Running tests... <span className="text-accent">✓ All tests passed</span></p>
                <p className="text-muted-foreground">→ Building Docker image... <span className="text-accent">✓ Build complete</span></p>
                <p className="text-muted-foreground">→ Deploying to production... <span className="text-accent">✓ Deployed successfully</span></p>
                <p>
                  <span className="terminal-prompt">$ </span>
                  <span className="text-primary">🚀 Application live at https://your-app.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
