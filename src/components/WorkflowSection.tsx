import { MessageSquare, Paintbrush, Code, TestTube, Rocket, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

const workflowSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We learn about your business, goals, and vision for the project',
    details: ['Requirements gathering', 'Target audience', 'Timeline & budget'],
    color: 'primary',
  },
  {
    icon: Paintbrush,
    title: 'Design & Wireframe',
    description: 'We create mockups and prototypes so you see it before we build it',
    details: ['UI/UX design', 'Mobile & desktop layouts', 'Brand alignment'],
    color: 'primary',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build your site with clean, modern code and best practices',
    details: ['React & TypeScript', 'Responsive design', 'SEO optimization'],
    color: 'accent',
  },
  {
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Thorough testing across devices and browsers before launch',
    details: ['Cross-browser testing', 'Performance audit', 'Accessibility check'],
    color: 'accent',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We deploy your site and make sure everything runs smoothly',
    details: ['Domain setup', 'SSL certificate', 'Analytics integration'],
    color: 'primary',
  },
  {
    icon: Headphones,
    title: 'Support & Growth',
    description: 'Ongoing maintenance, updates, and support to keep you growing',
    details: ['Bug fixes', 'Content updates', 'Feature additions'],
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
            <span className="inline-block font-mono text-sm text-primary mb-4">// our process</span>
            <h2 className="section-heading">How We Work</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A simple, transparent process from initial conversation to a live website you're proud of.
            </p>
          </div>

          {/* Workflow Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="relative group">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary z-10">
                    {index + 1}
                  </div>
                  <div className="glass-card glow-border p-6 h-full hover:bg-card/70 transition-all duration-300 pt-8">
                    <div className={`inline-flex p-3 rounded-lg bg-${step.color}/10 mb-4`}>
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < workflowSteps.length - 1 && index !== 2 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <ArrowRight className="w-5 h-5 text-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Ready to start your project?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
