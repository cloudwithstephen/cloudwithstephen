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
        <title>Front-End Developer | DevOps & Cloud Engineer Portfolio</title>
        <meta
          name="description"
          content="Experienced Front-End Developer transitioning to DevOps & Cloud Engineering. Building scalable web experiences and automating cloud infrastructure."
        />
        <meta
          name="keywords"
          content="front-end developer, devops engineer, cloud engineer, react developer, aws, docker, ci/cd, portfolio"
        />
        <meta property="og:title" content="Front-End Developer | DevOps & Cloud Engineer" />
        <meta
          property="og:description"
          content="Building scalable web experiences and automating cloud infrastructure."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourname.dev" />
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
