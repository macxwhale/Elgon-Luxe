import { motion } from "framer-motion";
import { Zap, Code2, Layers, Globe, Lock, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Go from idea to deployed app in minutes, not months. Our AI understands your vision instantly.",
  },
  {
    icon: Code2,
    title: "Production Ready",
    description: "Clean, maintainable code that follows best practices. Built on React, TypeScript, and Tailwind.",
  },
  {
    icon: Layers,
    title: "Full Stack Power",
    description: "Database, authentication, and APIs included. Everything you need in one platform.",
  },
  {
    icon: Globe,
    title: "Deploy Instantly",
    description: "One-click deployment to production. Custom domains and SSL certificates included.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC2 compliance. Your data is always protected.",
  },
  {
    icon: Rocket,
    title: "Scale Infinitely",
    description: "From prototype to millions of users. Our infrastructure grows with you.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Features = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_95%_65%/0.05),transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="gradient-text">ship faster</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lovable combines the power of AI with a complete development platform. 
            Build, deploy, and scale without the complexity.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl glass-card gradient-border hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
