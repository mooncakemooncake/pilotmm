import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Settings, Lock, AlertTriangle, Lightbulb, Zap, Award } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Strategic Content & IP Provider',
    subtitle: 'Beyond Software: Your Strategic Content Partner',
    body: 'We differentiate ourselves by acting as a \'content\' provider, delivering the essential intellectual property—including proprietary scorecards, data models, and methodologies—that make a risk platform truly effective.',
    edge: '\'No Black Boxes.\' Models are developed with 100% transparency and full documentation, ensuring you own and understand every dimension of your risk architecture.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment & Self-Autonomy',
    subtitle: 'Unrivaled Flexibility & Total Autonomy',
    body: 'Our unified architecture allows your team to configure financial templates and deploy complex rating models in minutes without constant external vendor assistance.',
    edge: '\'Highly Automated.\' We utilize proprietary software to automate model development and validation using R and Python scripts, ensuring rapid knowledge transfer.',
  },
  {
    icon: Award,
    title: '30+ Years of Proven Industry Leadership',
    subtitle: 'Proven Expertise Since 1992',
    body: 'Established in 1992, we offer a proven track record across Asia with deep expertise in commercial, SME, and retail portfolios. Our solutions are built with institutional-grade security to maintain absolute data confidentiality.',
    edge: '\'MSC Status Excellence.\' Recognized by the Multimedia Super Corridor (MSC) since 2002 for excellence in technology innovation.',
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
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="font-black">PILOT</span>
                <span className="font-light">MULTIMEDIA</span>
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

        {/* The Challenge Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-dark-section text-dark-section-foreground">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  The Challenge
                </h2>
                <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                  Financial institutions face the challenge of assessing and managing credit risk effectively.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.15}>
                  <div className={`p-8 rounded-2xl h-full space-y-4 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-default ${
                    index === 2
                      ? 'bg-primary/20 border-primary/40 hover:bg-primary/25 hover:border-primary/60'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      index === 2 ? 'bg-primary/30' : 'bg-white/10'
                    }`}>
                      <item.icon className={`w-7 h-7 ${index === 2 ? 'text-primary' : 'text-white/70'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold tracking-wide ${index === 2 ? 'text-primary' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Pilot Multimedia - Premium Fintech Section */}
        <section className="py-28 md:py-36 px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <ScrollReveal>
              <div className="text-center mb-20 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Advantage</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                  Why Choose Pilot Multimedia?
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 0.15}>
                  <motion.div
                    className="group p-10 rounded-2xl border border-border/60 bg-card h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    {/* Icon with gradient background */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                      <benefit.icon className="size-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary mb-2 tracking-wide">{benefit.title}</h3>

                    {/* Subtitle */}
                    <p className="text-base font-semibold text-foreground leading-snug mb-4">{benefit.subtitle}</p>

                    {/* Body */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{benefit.body}</p>

                    {/* The Edge - distinct bottom section */}
                    <div className="border-t border-primary/15 pt-5 mt-auto">
                      <div className="rounded-xl bg-primary/[0.04] border border-primary/10 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">✦ The Edge</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.edge}</p>
                      </div>
                    </div>
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