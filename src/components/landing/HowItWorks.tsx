import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Describe your vision",
    description: "Tell Lovable what you want to build in plain English. Be as detailed or high-level as you like.",
  },
  {
    number: "02",
    title: "Watch it build",
    description: "Our AI generates production-ready code in real-time. See your app come to life as you iterate.",
  },
  {
    number: "03",
    title: "Deploy & share",
    description: "Go live with one click. Share your creation with the world on your custom domain.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
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
            Three steps to{" "}
            <span className="gradient-text">launch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building with Lovable is as simple as having a conversation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center lg:text-left"
              >
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold mb-6 glow">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
