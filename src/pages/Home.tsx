import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Settings, Lock, AlertTriangle, Lightbulb } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Accountability and Accuracy',
    description:
      'Credit Predix prioritizes accountability and accuracy with features like a Maker-Checker and Approver function for rigorous review and an Audit Trail that tracks all changes for complete transparency. These tools ensure precise, defensible decisions while fostering trust and reliability in credit risk management.',
  },
  {
    icon: Settings,
    title: 'Flexibility and Self-Autonomy',
    description:
      "The philosophy of Credit Predix is that it allows configuration of almost all aspects of the software. Rating models and financial templates are configurable by the users in minutes. Wide-ranging and complex models can be rapidly deployed by relationship managers and credit evaluators without external vendors' assistance. The essence of Credit Predix is customization and flexibility.",
  },
  {
    icon: Lock,
    title: 'Data Security and Confidentiality',
    description:
      "PILOT's risk management solutions are built with security in mind, ensuring that sensitive financial and personal data used in credit assessments is protected. This adherence to data protection standards helps clients avoid regulatory breaches and maintain client confidentiality.",
  },
];

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Data & Tracking Issues',
    description: 'Financial institutions struggle to keep track of data, ratings, and financials of their clients accurately.',
  },
  {
    icon: Settings,
    title: 'Module Modification',
    description: 'Creating new scoring modules or making modifications to current ones presents significant challenges.',
  },
  {
    icon: Lightbulb,
    title: 'Our Solution',
    description: "Credit Predix, Pilot's proprietary software, offers high customization, flexibility, and a robust DBMS for reliable credit risk management.",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.opacity = '0';
              }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-white"
                style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* The Challenge Section - Visual Cards */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                  The Challenge
                </h2>
                <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                  Financial institutions face the challenge of assessing and managing credit risk effectively.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.15}>
                  <div className={`p-8 rounded-2xl h-full space-y-4 border transition-all duration-300 ${
                    index === 2
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-card border-border'
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      index === 2 ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <item.icon className={`w-7 h-7 ${index === 2 ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-dark-section text-dark-section-foreground">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Why Choose PilotMultimedia?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 0.15}>
                  <motion.div
                    className="p-8 rounded-lg border border-white/10 bg-white/5 h-full space-y-4 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <benefit.icon className="size-8 text-primary" />
                    <h3 className="text-lg font-medium tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
