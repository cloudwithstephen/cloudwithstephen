import { Briefcase, Award, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Founder & Lead Developer — CWS',
    company: 'CloudWithStephen',
    location: 'Remote / Lagos',
    period: '2023 - Present',
    description: 'Founded CWS as a web development agency helping businesses build professional websites, e-commerce stores, and custom web applications.',
    highlights: [
      'Delivered 50+ websites for businesses across Nigeria and internationally',
      'Specialized in React, Next.js, and modern frontend technologies',
      'Built e-commerce stores generating revenue for small businesses',
    ],
  },
  {
    type: 'work',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Worked with startups and small businesses to design and develop responsive websites, landing pages, and web applications.',
    highlights: [
      'Built 20+ client websites with React & TypeScript',
      'Implemented payment systems with Paystack and Stripe',
      'Achieved top Lighthouse scores for client sites',
    ],
  },
  {
    type: 'work',
    title: 'Junior Frontend Developer',
    company: 'Tech Startup',
    location: 'Lagos, Nigeria',
    period: '2021 - 2022',
    description: 'Started career building frontend interfaces and learning modern web development practices in a fast-paced startup environment.',
    highlights: [
      'Built reusable UI component libraries',
      'Contributed to customer-facing web applications',
      'Developed strong foundation in JavaScript and React',
    ],
  },
];

const specialties = [
  'React & Next.js',
  'E-Commerce Development',
  'Landing Page Design',
  'Responsive Web Design',
  'SEO Optimization',
  'Payment Integration',
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-primary mb-4">// our journey</span>
            <h2 className="section-heading">Experience & Track Record</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Years of building websites and web applications for real businesses—here's our story.
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
                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <Briefcase className="w-5 h-5" />
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

            {/* Specialties Sidebar */}
            <div>
              <div className="glass-card glow-border p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Our Specialties</h3>
                </div>
                <div className="space-y-3">
                  {specialties.map((specialty) => (
                    <div key={specialty} className="p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                      <h4 className="font-medium text-sm">{specialty}</h4>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium text-sm mb-3">Industries We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {['E-Commerce', 'SaaS', 'Real Estate', 'Education', 'Healthcare', 'Startups'].map((industry) => (
                      <span key={industry} className="skill-badge text-xs">{industry}</span>
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
