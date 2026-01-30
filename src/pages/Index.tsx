import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkflowSection from '@/components/WorkflowSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CWS | CloudWithStephen - Frontend, DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="CWS (CloudWithStephen) helps businesses build reliable systems that scale. Expert in React, TypeScript, AWS, Docker, and CI/CD pipelines."
        />
        <meta
          name="keywords"
          content="CWS, CloudWithStephen, cloud with stephen, frontend developer, devops engineer, cloud engineer, react developer, aws, docker, ci/cd, portfolio"
        />
        <meta name="author" content="Stephen - CWS CloudWithStephen" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CWS | CloudWithStephen - Frontend, DevOps & Cloud Engineer" />
        <meta
          property="og:description"
          content="Helping businesses build reliable systems that scale. Frontend engineering, cloud infrastructure, and automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cloudwithstephen.com" />
        <meta property="og:site_name" content="CWS - CloudWithStephen" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CWS | CloudWithStephen - Frontend, DevOps & Cloud Engineer" />
        <meta name="twitter:description" content="Helping businesses build reliable systems that scale." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.cloudwithstephen.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Stephen (CWS - CloudWithStephen)",
            "url": "https://www.cloudwithstephen.com",
            "jobTitle": "Frontend Developer & DevOps Cloud Engineer",
            "description": "CWS helps businesses build reliable systems that scale through frontend engineering, cloud infrastructure, and automation.",
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
