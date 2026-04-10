import { Linkedin, Twitter, Camera } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  icon?: React.ReactNode;
}

const team: TeamMember[] = [
  {
    name: "Stephen James",
    role: "Founder & Lead Developer",
    bio: "AI solutions builder and full-stack web developer passionate about helping businesses scale through technology.",
    image: "https://ui-avatars.com/api/?name=SJ&background=3b82f6&color=fff&size=256&font-size=0.45&bold=true",
    linkedin: "https://linkedin.com/in/stephen-james-215907322",
  },
  {
    name: "Sarah Chen",
    role: "AI Engineer",
    bio: "Builds intelligent automation workflows and custom AI chatbots for modern business applications.",
    image: "https://ui-avatars.com/api/?name=SC&background=14b8a6&color=fff&size=256&font-size=0.45&bold=true",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Adeyemi",
    role: "UI/UX Designer",
    bio: "Crafts beautiful, conversion-focused interfaces with a sharp eye for detail and user experience.",
    image: "https://ui-avatars.com/api/?name=DA&background=8b5cf6&color=fff&size=256&font-size=0.45&bold=true",
    linkedin: "#",
  },
  {
    name: "Amara Okafor",
    role: "Project Manager",
    bio: "Keeps projects on track with clear communication and efficient delivery timelines.",
    image: "https://ui-avatars.com/api/?name=AO&background=f59e0b&color=fff&size=256&font-size=0.45&bold=true",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Eze",
    role: "Photographer & Visual Director",
    bio: "Captures compelling visuals that elevate brand identity and create lasting impressions.",
    image: "https://ui-avatars.com/api/?name=ME&background=ec4899&color=fff&size=256&font-size=0.45&bold=true",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] mb-6">
              <span className="text-xs font-medium tracking-wide text-primary">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              A passionate group of engineers, designers, and creatives dedicated to building solutions that drive real results.
            </p>
          </motion.div>
        </div>

        {/* Grid — 5 members: 3 top, 2 bottom centered */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(0, 3).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
          {/* Row 2 — centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:w-2/3 lg:mx-auto">
            {team.slice(3).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-400 hover:border-primary/25 hover:bg-card/70 hover:shadow-[0_8px_40px_hsl(var(--primary)/0.08)]"
    >
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-md" />
          <img
            src={member.image}
            alt={member.name}
            className="relative w-16 h-16 rounded-full object-cover ring-2 ring-border/30 group-hover:ring-primary/30 transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="text-center sm:text-left flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-primary/80 mb-2">
            {member.role}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {member.bio}
          </p>

          {/* Social */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/[0.08] transition-all duration-200"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/[0.08] transition-all duration-200"
                aria-label={`${member.name} Twitter`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
}

export default TeamSection;
