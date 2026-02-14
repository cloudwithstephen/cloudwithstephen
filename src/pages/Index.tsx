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
        <title>CWS | CloudWithStephen — Web Development, DevOps & Cloud Agency</title>
        <meta
          name="description"
          content="CWS (CloudWithStephen) is a digital agency specializing in web development, DevOps automation, and cloud infrastructure. We build reliable systems that scale."
        />
        <meta
          name="keywords"
          content="CWS, CloudWithStephen, web development agency, devops agency, cloud agency, react, aws, docker, ci/cd, web app development"
        />
        <meta name="author" content="CWS - CloudWithStephen" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CWS | CloudWithStephen — Web Development, DevOps & Cloud Agency" />
        <meta
          property="og:description"
          content="A full-service digital agency delivering web development, cloud infrastructure, and DevOps automation for businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cloudwithstephen.com" />
        <meta property="og:site_name" content="CWS - CloudWithStephen" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CWS | CloudWithStephen — Web Dev, DevOps & Cloud Agency" />
        <meta name="twitter:description" content="We build reliable systems that scale. Web development, cloud, and DevOps." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.cloudwithstephen.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CWS - CloudWithStephen",
            "url": "https://www.cloudwithstephen.com",
            "description": "A digital agency specializing in web development, DevOps automation, and cloud infrastructure for growing businesses.",
            "sameAs": [
              "https://github.com/cloudwithstephen",
              "https://linkedin.com/in/stephen-james-215907322"
            ],
            "knowsAbout": ["Web Development", "React", "TypeScript", "AWS", "Docker", "CI/CD", "DevOps", "Cloud Engineering"],
            "serviceType": ["Web Development", "DevOps Automation", "Cloud Infrastructure"]
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
