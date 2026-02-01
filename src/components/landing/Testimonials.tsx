import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Lovable completely transformed how we build products. What used to take weeks now takes hours.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    avatar: "SC",
  },
  {
    quote: "The AI understands exactly what I want. It's like having a senior developer who reads my mind.",
    author: "Marcus Johnson",
    role: "Founder, StartupX",
    avatar: "MJ",
  },
  {
    quote: "We shipped our MVP in a weekend. Our investors couldn't believe how fast we moved.",
    author: "Elena Rodriguez",
    role: "Product Lead, Innovate",
    avatar: "ER",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="gradient-text">developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who are shipping faster with Lovable.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-card gradient-border"
            >
              {/* Quote */}
              <p className="text-lg mb-8 leading-relaxed">"{testimonial.quote}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
