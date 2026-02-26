import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Settings, Lock, AlertTriangle, Lightbulb } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Strategic Content & IP Provider',
    headline: 'Beyond Software: Your Strategic Content Partner',
    body:
      'We differentiate ourselves by acting as a content provider rather than just a software vendor. We deliver essential intellectual property—including proprietary scorecards, data models, schemas, and methodologies—that makes a risk platform truly effective for your business.',
    edge:
      'No Black Boxes. Our models are developed with full transparency and comprehensive documentation, so your team owns and understands every dimension of your risk architecture.',
  },
  {
    icon: Settings,
    title: 'Rapid Deployment & Self-Autonomy',
    headline: 'Unrivaled Flexibility & Total Autonomy',
    body:
      'Our unified architecture allows your team to configure financial templates and deploy complex rating models in minutes without the need for constant external vendor assistance.',
    edge:
      'Highly Automated. We utilize proprietary software to automate model development and validation processes using R and Python scripts, ensuring seamless workflow integration and rapid knowledge transfer.',
  },
  {
    icon: Lock,
    title: 'Proven Expertise & Security',
    headline: '30+ Years of Proven Industry Leadership',
    body:
      'Established in 1992, we offer a proven track record across Asia with deep expertise in commercial, SME, corporate, and retail portfolios. Our solutions are built with a security-first mindset to ensure regulatory compliance and absolute data confidentiality.',
    edge:
      'MSC Status Excellence. We have been recognized by the Multimedia Super Corridor (MSC) since 2002 for our excellence in technology development and innovation.',
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
                className="text-5xl md:text-7xl lg:text-8xl tracking-widest text-white"
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
                  <div className={`p-8 rounded-2xl h-full space-y-4 border transition-all duration-300 ${
                    index === 2
                      ? 'bg-primary/20 border-primary/40'
                      : 'bg-white/5 border-white/10'
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

        {/* Benefits Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Purple accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto relative">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                  Why Choose Pilot Multimedia?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 0.15}>
                  <motion.div
                    className="p-8 rounded-2xl border border-border bg-card h-full space-y-5 shadow-sm"
                    whileHover={{ scale: 1.03, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-center justify-between">
                      <benefit.icon className="size-8 text-primary" />
                      <span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-wide text-foreground">{benefit.title}</h3>
                    <p className="text-xl font-medium text-foreground leading-snug">{benefit.headline}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{benefit.body}</p>
                    <div className="pt-4 border-t border-border/60">
                      <p className="text-sm font-semibold text-primary">The Edge</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{benefit.edge}</p>
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
