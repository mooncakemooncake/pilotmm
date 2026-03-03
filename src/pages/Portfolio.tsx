import { SEOHead } from '@/components/seo/SEOHead';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

import { Leaf, Shield, FileSpreadsheet, X } from 'lucide-react';
import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import obligorImg from '@/assets/obligor-information.png';
import projectionVideo from '@/assets/projection.mp4';
import finanalyticsImg from '@/assets/finanalytiks.png';
import scorecardImg from '@/assets/scorecard-risk-rule.png';
import quantitativeImg from '@/assets/quantitative-factors.png';
import qualitativeImg from '@/assets/qualitative-factors.png';
import externalDataImg from '@/assets/external-data.png';
import adjustmentsImg from '@/assets/adjustments.png';
import parentSupportImg from '@/assets/parent-support.png';
import guarantorSupportImg from '@/assets/guarantor-support.png';
import stressTestingImg from '@/assets/portfolio-stress-testing.png';
import earlyWarningImg from '@/assets/early-warning-system.png';
import integrationImg from '@/assets/integration-services.png';
import biImg from '@/assets/business-intelligence.png';
import modelDevImg from '@/assets/model-development.png';
import modelValImg from '@/assets/model-validation.png';
import esgImg from '@/assets/esg.png';
import cybersecurityImg from '@/assets/cybersecurity.png';
import afsImg from '@/assets/automated-financial-spreading.png';

/* ─── Types ─── */
interface ModuleInfo {
  key: string;
  title: string;
  description: string;
  media?: string;
  mediaType?: 'image' | 'video';
  extraMedia?: string;
}

interface ScorecardSub {
  title: string;
  description: string;
  images: string[];
}

/* ─── Data ─── */
const cprsModules: ModuleInfo[] = [
  { key: 'obligor', title: 'Obligor Information', description: "Captures relevant information of the bank's client, able to be integrated with other software such as the bank's Loan Origination System ('LOS').", media: obligorImg },
  { key: 'finanalytics', title: 'FINAnalytics', description: 'Highly configurable chart of accounts with financial projections, scenario simulation, stress testing, and automatic ratio calculations.', media: finanalyticsImg, extraMedia: projectionVideo },
  { key: 'scorecard', title: 'Scorecard & Risk Rule', description: 'Extremely flexible, configurable scorecard with quantitative, qualitative factors, external data, adjustments, and support modules.', media: scorecardImg },
  { key: 'earlywarning', title: 'Early Warning System', description: "Collates the collective knowledge of the bank and converts it to rules to assist loan officers when analyzing financial statements.", media: earlyWarningImg },
  { key: 'integration', title: 'Integration Services', description: 'Integrates with LOS, Enterprise Data Warehouse, Core Banking Systems, and other software in your organisation.', media: integrationImg },
  { key: 'bi', title: 'BI & Reporting', description: 'Business intelligence software enabling comprehensive analyses through beautifully presented data. Discover powerful insights and turn them into impact.', media: biImg },
];

const scorecardSubsections: ScorecardSub[] = [
  { title: "Scorecard & Risk Rules", description: "The Scorecard & Risk Rules is extremely flexible and configurable by the User. It provides a rating for the Borrower or Obligor and the Facility.", images: [scorecardImg] },
  { title: "Quantitative Factors", description: "Financial values are automatically mapped from financial spreadsheets. Values can be manually overridden with justification.", images: [quantitativeImg] },
  { title: "Qualitative Factors", description: "User selects the appropriate option via radio buttons. Scores are displayed as 'Item Formula Output'.", images: [qualitativeImg] },
  { title: "External Data", description: "Supports external ratings by Moody's, S&P, and Fitch. Incorporate Sovereign Ratings/Country Risks in your Scorecard.", images: [externalDataImg] },
  { title: "Adjustments", description: "Special Treatment and Overrides for adjustments based on bank policies — audited accounts, qualified financials, high-risk industry.", images: [adjustmentsImg] },
  { title: "Parent & Guarantor Support", description: "Flexibility to incorporate Parent Support and Guarantor Support in your Scorecard.", images: [parentSupportImg, guarantorSupportImg] },
  { title: "Portfolio Stress Testing", description: "Assess portfolio resilience under what-if scenarios. Stress test by industry, business unit, team, or country.", images: [stressTestingImg] },
];

/* ─── Image Lightbox ─── */
function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white">
        <X className="w-8 h-8" />
      </button>
    </motion.div>
  );
}

/* ─── Clickable Image ─── */
function ZoomableImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in hover:opacity-90 transition-opacity ${className || ''}`}
        onClick={() => setOpen(true)}
      />
      <AnimatePresence>
        {open && <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

/* ─── Module Popup (non-scorecard) ─── */
function ModulePopup({ module, onClose }: { module: ModuleInfo; onClose: () => void }) {
  const isScorecard = module.key === 'scorecard';
  if (isScorecard) return <ScorecardPanel onClose={onClose} />;

  const isFinanalytics = module.key === 'finanalytics';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-card rounded-2xl border border-border shadow-xl max-w-5xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-2xl font-semibold text-foreground">{module.title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-8">
          {isFinanalytics ? (
            <>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/2 space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Projection Module</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Enables financial projections with configurable assumption drivers, instantly reflecting results as assumptions are entered, allowing users to simulate various scenarios and conduct stress testing of financials effortlessly.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {module.extraMedia && (
                    <video src={module.extraMedia} autoPlay loop muted playsInline className="w-full rounded-xl border border-border" />
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <div className="md:w-1/2 space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Historical Module</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Highly configurable chart of accounts that can be tailored to specific industries, allowing analysis to be done easily. Financial ratios are automatically calculated to reduce human error.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {module.media && (
                    <ZoomableImage src={module.media} alt="Historical Financial" className="w-full rounded-xl border border-border" />
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/2">
                <p className="text-muted-foreground leading-relaxed">{module.description}</p>
              </div>
              <div className="md:w-1/2">
                {module.media && (
                  <ZoomableImage src={module.media} alt={module.title} className="w-full rounded-xl border border-border" />
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Scorecard Panel ─── */
function ScorecardPanel({ onClose }: { onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sub = scorecardSubsections[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-card rounded-2xl border border-border shadow-xl max-w-6xl w-full h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
          <h3 className="text-2xl font-semibold text-foreground">Scorecard & Risk Rule Module</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-1 min-h-0">
          <div className="w-64 shrink-0 border-r border-border overflow-y-auto bg-secondary/30">
            {scorecardSubsections.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-5 py-4 text-sm font-medium transition-colors border-b border-border ${
                  i === activeIndex ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-foreground">{sub.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{sub.description}</p>
                {sub.images.map((img, i) => (
                  <ZoomableImage key={i} src={img} alt={sub.title} className="w-full rounded-xl border border-border shadow-sm" />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── GSAP Horizontal Scroll ─── */
function HorizontalModuleScroll({ modules, onSelect }: { modules: ModuleInfo[]; onSelect: (m: ModuleInfo) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollDistance = () => Math.max(0, track.scrollWidth - section.clientWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          pin: true,
          scrub: 1,
          end: () => `+=${getScrollDistance() + section.clientWidth * 0.5}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <div ref={trackRef} className="flex gap-6 w-max py-4">
        {modules.map((m, index) => (
          <button
            key={m.key}
            onClick={() => onSelect(m)}
            className="group shrink-0 w-[300px] md:w-[360px] h-[260px] rounded-2xl border border-border bg-dark-section text-dark-section-foreground relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
          >
            {m.media && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <img src={m.media} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="relative z-10 flex flex-col items-start justify-between h-full p-6">
              <span className="text-7xl font-black opacity-20" style={{ fontFamily: 'Georgia, serif' }}>{String(index + 1).padStart(2, '0')}</span>
              <h4 className="text-2xl md:text-3xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>{m.title}</h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Model Development with Parallax ─── */
function ModelDevSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="model-dev" ref={sectionRef} className="py-20 md:py-28 px-6 lg:px-8 bg-dark-section text-dark-section-foreground scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Model Development & Validation</h2>
            <p className="mt-4 text-lg text-dark-section-foreground/60 max-w-3xl mx-auto">
              Our software automates the processes of model development and validation, significantly reducing the time required while enhancing the reliability and accuracy of the models.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Model Development</h3>
              <p className="text-dark-section-foreground/70 leading-relaxed">
                Our model development service offers a statistical approach with a supplement of a judgmental approach to develop a state-of-the-art credit risk model that accurately rates the risk of a client. Our software automates the process of model development. The pipeline ensures a swift and seamless cycle from development to deployment.
              </p>
            </div>
            <motion.div className="md:w-1/2" style={{ y: imgY1 }}>
              <ZoomableImage src={modelDevImg} alt="Model Development" className="w-full rounded-xl border border-dark-section-foreground/10 shadow-lg" />
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Model Validation</h3>
              <div className="text-dark-section-foreground/70 leading-relaxed space-y-3">
                <p className="font-medium text-dark-section-foreground">Features of Model Validation:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Model Validation Process</strong> — Ensures models are methodologically robust, compliant with regulations set by the Basel Committee on Banking Supervision (BCBS), and aligned with internal standards.</li>
                  <li><strong>Monitoring Framework</strong> — Guarantees reliability of models through effective monitoring.</li>
                  <li><strong>Benchmarking</strong> — Compares your models against industry best practices.</li>
                  <li><strong>Validation Report</strong> — Provides an independent and detailed evaluation of your models. Highlights strengths and weaknesses. Assesses model suitability for your business environment. Recommends actionable steps for improvement.</li>
                </ul>
              </div>
            </div>
            <motion.div className="md:w-1/2" style={{ y: imgY2 }}>
              <ZoomableImage src={modelValImg} alt="Model Validation" className="w-full rounded-xl border border-dark-section-foreground/10 shadow-lg" />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Portfolio() {
  const [selectedModule, setSelectedModule] = useState<ModuleInfo | null>(null);

  return (
    <>
      <SEOHead
        title="Products & Services - PilotMultimedia"
        description="Credit Predix Rating System, Model Development & Validation, and additional services by Pilot Multimedia."
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden bg-secondary/30">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 300 }}>Products <span className="italic text-primary">&</span> Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Comprehensive credit risk management solutions tailored for financial institutions
              </p>
            </motion.div>
          </div>
        </section>


        {/* Model Development & Validation */}
        <ModelDevSection />

        

        {/* The Tool that Powers the Strategy — dramatic transition */}
        <section className="relative overflow-hidden bg-dark-section text-dark-section-foreground">
          {/* Top fade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-section to-transparent z-10 pointer-events-none" />

          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
          </motion.div>

          <div className="relative z-10 py-40 md:py-56 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              {/* Staggered reveal */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-8"
              >
                Introducing
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12 max-w-md"
              />

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
                >
                  The Tool that Powers
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent"
                >
                  the Strategy
                </motion.h2>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-12 max-w-md"
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
                className="mt-10 text-lg text-dark-section-foreground/50 max-w-xl mx-auto"
              >
                From model to platform — meet Credit Predix
              </motion.p>
            </div>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>

        {/* CPRS Section */}
        <section id="cprs" className="py-16 md:py-20 px-6 lg:px-8 bg-background scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
                  Credit Predix —<br />
                  <span className="text-muted-foreground font-light">
                    Equipping you with the<br />
                    best tools for<br />
                    credit risk evaluation.
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <HorizontalModuleScroll modules={cprsModules} onSelect={setSelectedModule} />
          </div>
        </section>

        {/* Module Popup */}
        <AnimatePresence>
          {selectedModule && (
            <ModulePopup module={selectedModule} onClose={() => setSelectedModule(null)} />
          )}
        </AnimatePresence>

        {/* Additional Services */}
        <section id="additional-services" className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Additional Services</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="overflow-hidden"><img src={esgImg} alt="ESG" className="w-full object-contain" loading="lazy" /></div>
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Environment, Social & Governance (ESG)</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our ESG Rating Scorecard combines Bank Negara's CCPT for environmental metrics with EU-aligned social and governance assessments, ensuring global-standard compliance.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="overflow-hidden"><img src={cybersecurityImg} alt="Cybersecurity Training" className="w-full object-contain" loading="lazy" /></div>
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Cybersecurity Training</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In partnership with Cyber Ranges, Pilot offers advanced cybersecurity training using realistic simulations and cyber drills. Trusted by the UN since 2017.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="overflow-hidden"><img src={afsImg} alt="Automated Financial Spreading" className="w-full object-contain" loading="lazy" /></div>
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <FileSpreadsheet className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Automated Financial Spreading</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Transforms raw financial data into customizable charts of accounts. Powered by LLM with multilingual translation for global financial reporting.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
