import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ResultsSection from '@/components/ResultsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CWS | CloudWithStephen — AI Solutions & Web Development</title>
        <meta name="description" content="CWS (CloudWithStephen) helps businesses grow online with AI automation, professional websites, and smart digital solutions. Get more customers, save time, and reduce costs." />
        <meta name="keywords" content="CWS, CloudWithStephen, Cloud With Stephen, AI solutions, web development, AI chatbot, business automation, website design, ecommerce, Lagos, Nigeria" />
        <meta name="author" content="CWS — CloudWithStephen" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        
        <meta property="og:title" content="CWS | CloudWithStephen — AI Solutions & Web Development" />
        <meta property="og:description" content="CWS helps businesses grow faster with AI automation and smart websites. Professional web development and AI solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cloudwithstephen.com" />
        <meta property="og:site_name" content="CWS | CloudWithStephen" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CWS | CloudWithStephen — AI Solutions & Web Development" />
        <meta name="twitter:description" content="CWS — AI automation & professional websites for business growth." />
        
        <link rel="canonical" href="https://www.cloudwithstephen.com" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CWS — CloudWithStephen",
            "alternateName": ["CWS", "Cloud With Stephen", "CloudWithStephen"],
            "url": "https://www.cloudwithstephen.com",
            "logo": "https://www.cloudwithstephen.com/favicon.png",
            "founder": {
              "@type": "Person",
              "name": "Stephen James",
              "jobTitle": "AI Solutions Builder & Web Developer"
            },
            "sameAs": [
              "https://github.com/cloudwithstephen",
              "https://linkedin.com/in/stephen-james-215907322"
            ],
            "areaServed": { "@type": "Country", "name": "Nigeria" },
            "knowsAbout": ["AI Automation", "Web Development", "AI Chatbots", "Ecommerce", "Business Websites"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Solutions", "description": "AI chatbots, automation workflows, and intelligent business tools" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Professional websites, ecommerce stores, and web applications" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation", "description": "Streamline operations with smart digital solutions" }}
              ]
            }
          })}
        </script>

        {/* WebSite Schema for Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CWS — CloudWithStephen",
            "alternateName": "CWS",
            "url": "https://www.cloudwithstephen.com",
            "description": "CWS — AI Solutions & Web Development Agency"
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CWS — CloudWithStephen",
            "alternateName": "CWS",
            "url": "https://www.cloudwithstephen.com",
            "description": "CWS — AI automation and web development services for businesses in Nigeria and worldwide.",
            "priceRange": "₦₦",
            "address": { "@type": "PostalAddress", "addressCountry": "NG", "addressLocality": "Lagos" },
            "serviceType": ["AI Solutions", "Web Development", "AI Chatbots", "Business Automation"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TeamSection />
          <HowItWorksSection />
          <WhyChooseUsSection />
          <ResultsSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
