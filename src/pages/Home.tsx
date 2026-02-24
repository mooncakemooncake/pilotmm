import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ShieldCheck, Settings, Lock } from 'lucide-react';
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
      'The philosophy of Credit Predix is that it allows configuration of almost all aspects of the software. Rating models and financial templates are configurable by the users in minutes. Wide-ranging and complex models can be rapidly deployed by relationship managers and credit evaluators without external vendors\' assistance. The essence of Credit Predix is customization and flexibility.',
  },
  {
    icon: Lock,
    title: 'Data Security and Confidentiality',
    description:
      "PILOT's risk management solutions are built with security in mind, ensuring that sensitive financial and personal data used in credit assessments is protected. This adherence to data protection standards helps clients avoid regulatory breaches and maintain client confidentiality.",
  },
];

export default function Home() {
  return (
    <>
      <SEOHead />

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
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white"
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

        {/* Problem & Solution Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                  The Challenge
                </h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                  Financial institutions and companies that provide credit, both
                  in financial and non-financial sectors, face the challenge of
                  assessing and managing credit risk.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-xl font-medium text-foreground tracking-wide">
                    Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Credit Risk Assessment requires accuracy and reliability.
                    Financial institutions face issues with keeping track of
                    data, ratings (scorecards), and financials of their clients.
                    Creating new scoring modules or making modifications to
                    current modules presents another set of challenges unto
                    itself.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4 p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-xl font-medium text-foreground tracking-wide">
                    Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Credit Risk Management Solution that allows high
                    customization and flexibility and is equipped with a Database
                    Management System to ensure reliability and accuracy of data.
                    Credit Predix, Pilot's homegrown proprietary software,
                    encompasses all those features and more.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                  Why Choose PilotMultimedia?
                </h2>
                <p className="text-lg text-muted-foreground font-light tracking-wide">
                  Why Credit Predix stands apart
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 0.15}>
                  <div className="p-8 rounded-lg border border-border bg-card h-full space-y-4">
                    <benefit.icon className="size-8 text-primary" />
                    <h3 className="text-lg font-medium text-foreground tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
