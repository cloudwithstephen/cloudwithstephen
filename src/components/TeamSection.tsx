import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const team: TeamMember[] = [
  {
    name: "Stephen James",
    role: "Founder & Lead Developer",
    bio: "AI solutions builder and full-stack web developer with a passion for helping businesses scale through technology.",
    image: "https://ui-avatars.com/api/?name=Stephen+James&background=3b82f6&color=fff&size=256&font-size=0.4&bold=true",
    linkedin: "https://linkedin.com/in/stephen-james-215907322",
  },
  {
    name: "Sarah Chen",
    role: "AI Engineer",
    bio: "Specializes in building intelligent automation workflows and custom AI chatbots for business applications.",
    image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=14b8a6&color=fff&size=256&font-size=0.4&bold=true",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Adeyemi",
    role: "UI/UX Designer",
    bio: "Crafts beautiful, conversion-focused interfaces with a keen eye for detail and user experience.",
    image: "https://ui-avatars.com/api/?name=David+Adeyemi&background=8b5cf6&color=fff&size=256&font-size=0.4&bold=true",
    linkedin: "#",
  },
  {
    name: "Amara Okafor",
    role: "Project Manager",
    bio: "Keeps every project on track with clear communication and efficient delivery timelines.",
    image: "https://ui-avatars.com/api/?name=Amara+Okafor&background=f59e0b&color=fff&size=256&font-size=0.4&bold=true",
    linkedin: "#",
    twitter: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TeamSection = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3 block">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              A passionate group of engineers, designers, and strategists dedicated to building intelligent solutions that drive real results.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-20 h-20 rounded-full object-cover border-2 border-border/50 group-hover:border-primary/40 transition-colors duration-300"
                  loading="lazy"
                />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-0.5">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-2">
                {member.role}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social icons */}
              <div className="flex items-center justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
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
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
