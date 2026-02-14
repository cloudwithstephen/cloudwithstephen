import { Briefcase, GraduationCap, Award, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Agency Founded — CWS',
    company: 'CloudWithStephen',
    location: 'Remote / Lagos',
    period: '2023 - Present',
    description: 'Launched CloudWithStephen as a full-service digital agency delivering web development, cloud infrastructure, and DevOps automation for businesses.',
    highlights: [
      'Delivered 15+ client projects across eCommerce, SaaS, and startups',
      'Built automated deployment pipelines for every project',
      'Achieved 100% client satisfaction rate',
    ],
  },
  {
    type: 'work',
    title: 'Freelance Developer & Cloud Engineer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Built custom web applications and set up cloud infrastructure for clients. Laid the foundation for what became CWS.',
    highlights: [
      'Built production-ready apps with React & TypeScript',
      'Set up Docker, CI/CD, and AWS deployments for clients',
      'Reduced client deployment time by 40% with automation',
    ],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Tech Startup',
    location: 'Lagos, Nigeria',
    period: '2021 - 2022',
    description: 'Contributed to web applications using React and Node.js. First exposure to DevOps and cloud workflows.',
    highlights: [
      'Built reusable component libraries',
      'Introduced automated testing practices',
      'Mentored interns on React best practices',
    ],
  },
];

const certifications = [
  { name: 'AWS Cloud Practitioner', status: 'In Progress', year: '2024' },
  { name: 'Docker Certified Associate', status: 'In Progress', year: '2024' },
  { name: 'GitHub Actions Fundamentals', status: 'Completed', year: '2023' },
  { name: 'React Developer Certification', status: 'Completed', year: '2022' },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-primary mb-4">// our track record</span>
            <h2 className="section-heading">Experience & Credentials</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From freelancing to founding CWS—our journey of building reliable systems for real businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-2 space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.title + exp.company} className="relative group">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-border group-hover:bg-primary/30 transition-colors" />
                  )}
                  <div className="flex gap-6">
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      exp.type === 'work' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {exp.type === 'work' ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                    <div className="glass-card glow-border p-6 flex-1 hover:bg-card/70 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm">
                            <ArrowUpRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="glass-card glow-border p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm">{cert.name}</h4>
                        <span className="text-xs text-muted-foreground">{cert.year}</span>
                      </div>
                      <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                        cert.status === 'Completed'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium text-sm mb-3">Currently Exploring</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'Terraform', 'AWS Solutions Architect'].map((topic) => (
                      <span key={topic} className="skill-badge text-xs">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
