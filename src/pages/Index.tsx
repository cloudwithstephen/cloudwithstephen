import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import VideoSection from '@/components/VideoSection';
import WorkflowSection from '@/components/WorkflowSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Stephen | Front-End Developer & DevOps Cloud Engineer | cloudwithstephen</title>
        <meta
          name="description"
          content="Stephen is a Front-End Developer transitioning to DevOps & Cloud Engineering. Expert in React, TypeScript, AWS, Docker, and CI/CD pipelines. Available for hire."
        />
        <meta
          name="keywords"
          content="cloudwithstephen, stephen developer, front-end developer, devops engineer, cloud engineer, react developer, aws, docker, ci/cd, portfolio, web developer nigeria"
        />
        <meta name="author" content="Stephen - cloudwithstephen" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Stephen | Front-End Developer & DevOps Cloud Engineer" />
        <meta
          property="og:description"
          content="Building scalable web experiences and automating cloud infrastructure. Available for freelance and full-time opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cloudwithstephen.com" />
        <meta property="og:site_name" content="cloudwithstephen" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stephen | Front-End Developer & DevOps Cloud Engineer" />
        <meta name="twitter:description" content="Building scalable web experiences and automating cloud infrastructure." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.cloudwithstephen.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Stephen",
            "url": "https://www.cloudwithstephen.com",
            "jobTitle": "Front-End Developer & DevOps Cloud Engineer",
            "description": "Front-End Developer transitioning to DevOps & Cloud Engineering. Expert in React, TypeScript, AWS, Docker, and CI/CD.",
            "sameAs": [
              "https://github.com/cloudwithstephen",
              "https://linkedin.com/in/cloudwithstephen"
            ],
            "knowsAbout": ["React", "TypeScript", "AWS", "Docker", "CI/CD", "DevOps", "Cloud Engineering"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <VideoSection />
          <WorkflowSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
