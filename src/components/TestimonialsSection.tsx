import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adebayo O.",
    role: "CEO, TechVenture Lagos",
    content: "CloudWithStephen built us a beautiful website and set up an AI chatbot that handles 80% of our customer inquiries. Our response time went from hours to seconds.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Founder, StyleHouse NG",
    content: "Our ecommerce store was delivered on time and looks amazing. Sales increased by 40% in the first month. Stephen and his team are incredibly professional.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Operations Manager, LogiPro",
    content: "The workflow automation they set up saves us over 20 hours per week. It's like having an extra team member. Highly recommend their AI solutions.",
    rating: 5,
  },
  {
    name: "Chioma E.",
    role: "Real Estate Agent",
    content: "My property listing website looks premium and generates quality leads every day. The SEO work they did has my site ranking on Google's first page.",
    rating: 5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Testimonials</span>
            </span>
            <h2 className="section-heading mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from real businesses we've helped grow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 lg:p-8 relative"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
