import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "A starter website takes 1–2 weeks, a professional site takes 2–4 weeks, and an ecommerce store takes 3–6 weeks. Custom projects vary based on complexity.",
  },
  {
    question: "What AI solutions do you offer for businesses?",
    answer: "We build AI chatbots for customer support, business workflow automation, AI content generation tools, and custom AI integrations to streamline your operations.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment plans. Typically, we split payments into a deposit before starting and the balance upon completion.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely. Every website we build is fully responsive and mobile-first, meaning it looks and works great on phones, tablets, and desktops.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. All our packages include free post-launch support (1–6 months depending on the package). After that, we offer affordable monthly maintenance plans.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes! We specialize in website redesigns. We'll transform your outdated site into a modern, fast, and high-converting website while preserving your SEO rankings.",
  },
  {
    question: "How do I get started?",
    answer: "Simply click 'Get Started' or 'Book Consultation' on this page. We'll schedule a free call to discuss your needs and create a plan tailored to your business.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">FAQ</span>
            </span>
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-border/50 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
