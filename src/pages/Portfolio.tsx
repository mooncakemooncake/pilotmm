import { SEOHead } from '@/components/seo/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Leaf, Shield, ChevronDown, FileSpreadsheet, AlertTriangle, Link2, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

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

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{children}</h2>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </ScrollReveal>
  );
}

function ServiceCard({ title, description, media, mediaType = 'image' }: {
  title: string;
  description: string;
  media?: string;
  mediaType?: 'image' | 'video';
}) {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {media && (
          <div className="w-full overflow-hidden bg-muted">
            {mediaType === 'video' ? (
              <video src={media} autoPlay loop muted playsInline className="w-full" />
            ) : (
              <img src={media} alt={title} className="w-full object-contain" />
            )}
          </div>
        )}
        <div className="p-6">
          <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function CollapsibleSubsection({ title, description, images }: {
  title: string;
  description: string;
  images: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/50 transition-colors"
      >
        <h5 className="text-base font-semibold text-foreground">{title}</h5>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          {images.map((img, i) => (
            <img key={i} src={img} alt={title} className="w-full rounded-lg border border-border" />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const scorecardSubsections = [
    {
      title: "Scorecard & Risk Rules",
      description: "The Scorecard & Risk Rules is extremely flexible and is configurable by the User. It provides a rating for the Borrower or Obligor and the Facility. The Scorecard can contain quantitative and qualitative factors.",
      images: [scorecardImg],
    },
    {
      title: "Quantitative Factors",
      description: "Quantitative Factors are usually the Financial Factors. The financial values are automatically mapped from financial spreadsheet \"attached\" to the Scorecard. Financial value of the factors can be manually override. However, User will need to provide a reason for the override.",
      images: [quantitativeImg],
    },
    {
      title: "Qualitative Factors",
      description: "For the qualitative factors, User selects the appropriate option by clicking on the radio button. The scores of the selected option are displayed as \"Item Formula Output\" on the right-hand side of the screenshot.",
      images: [qualitativeImg],
    },
    {
      title: "External Data",
      description: "Our System supports the use of external data such as external ratings by Moody's, S&P and Fitch in your Scorecard. For example, User can incorporate Sovereign Ratings/Country Risks in their Scorecard.",
      images: [externalDataImg],
    },
    {
      title: "Adjustments",
      description: "Our System has another feature of \"Special Treatment and Overrides\". This is to cater for Adjustments to the Borrower's Grade based on the Bank's policies. Examples of Adjustments are; \"Are the Financial Accounts Audited?\", \"Are the Financials Qualified?\" and \"High Risk Industry\".",
      images: [adjustmentsImg],
    },
    {
      title: "Parent Support & Guarantor Support",
      description: "User has the flexibility of incorporating Parent Support and Guarantor Support in their Scorecard.",
      images: [parentSupportImg, guarantorSupportImg],
    },
    {
      title: "Portfolio Stress Testing Module",
      description: "Portfolio Stress Testing in Credit Predix empowers financial institutions to assess the resilience of their borrower portfolios under various \"what-if\" scenarios. Users can stress test the entire portfolio or a filtered subset based on criteria such as industry, business unit, team, or country. Testing can focus on borrowers' financial statements, scorecards, or both, providing flexibility and insights into potential risks.",
      images: [stressTestingImg],
    },
  ];

  return (
    <>
      <SEOHead
        title="Products & Services - PilotMultimedia"
        description="Credit Predix Rating System, Model Development & Validation, and additional services by Pilot Multimedia."
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">Products & Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Comprehensive credit risk management solutions tailored for financial institutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* CPRS Section */}
        <section className="py-20 md:py-28 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Equipping you with the best tools for credit risk evaluation">
              Credit Predix Rating System (CPRS)
            </SectionTitle>

            <Tabs defaultValue="obligor" className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 rounded-xl mb-8">
                <TabsTrigger value="obligor" className="flex-1 min-w-[140px] text-xs md:text-sm py-2.5">1. Obligor Information</TabsTrigger>
                <TabsTrigger value="finanalytics" className="flex-1 min-w-[140px] text-xs md:text-sm py-2.5">2. FINAnalytics</TabsTrigger>
                <TabsTrigger value="scorecard" className="flex-1 min-w-[140px] text-xs md:text-sm py-2.5">3. Scorecard & Risk Rule</TabsTrigger>
                <TabsTrigger value="earlywarning" className="flex-1 min-w-[140px] text-xs md:text-sm py-2.5">4. Early Warning</TabsTrigger>
                <TabsTrigger value="integration" className="flex-1 min-w-[140px] text-xs md:text-sm py-2.5">5. Integration</TabsTrigger>
                <TabsTrigger value="bi" className="flex-1 min-w-[140px] text-xs md:text-sm py-2.5">6. BI & Reporting</TabsTrigger>
              </TabsList>

              <TabsContent value="obligor" className="mt-0">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Obligor Information Module</h3>
                  <p className="text-muted-foreground mb-6 max-w-4xl">
                    Captures relevant information of the bank's client, able to be integrated with other software such as the bank's Loan Origination System ('LOS').
                  </p>
                  <img src={obligorImg} alt="Obligor Information Module" className="w-full max-w-3xl rounded-xl border border-border shadow-sm" />
                </div>
              </TabsContent>

              <TabsContent value="finanalytics" className="mt-0">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">FINAnalytics Module</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <ServiceCard
                      title="Projection Module"
                      description="Enables financial projections with configurable assumption drivers, instantly reflecting results as assumptions are entered, allowing users to simulate various scenarios and conduct stress testing of financials effortlessly."
                      media={projectionVideo}
                      mediaType="video"
                    />
                    <ServiceCard
                      title="Historical Financial"
                      description="Highly configurable chart of accounts that can be tailored to specific industries, allowing analysis to be done easily. Financial ratios are automatically calculated to reduce human error."
                      media={finanalyticsImg}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="scorecard" className="mt-0">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Scorecard & Risk Rule Module</h3>
                  <div className="space-y-3">
                    {scorecardSubsections.map((sub) => (
                      <CollapsibleSubsection key={sub.title} {...sub} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="earlywarning" className="mt-0">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Early Warning System Module</h3>
                  <p className="text-muted-foreground mb-6 max-w-4xl">
                    Collates the collective knowledge of the bank and converts it to rules to assist loan officers when analyzing financial statements.
                  </p>
                  <img src={earlyWarningImg} alt="Early Warning System Module" className="w-full max-w-3xl rounded-xl border border-border shadow-sm" />
                </div>
              </TabsContent>

              <TabsContent value="integration" className="mt-0">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Integration Services</h3>
                  <p className="text-muted-foreground mb-6 max-w-4xl">
                    Our Credit Scoring System can integrate with other software system in your organisation. For example, our System can capture and push data to and from your Loan Origination System ("LOS"), Enterprise Data Warehouse ("EDW") and other Core Banking System.
                  </p>
                  <img src={integrationImg} alt="Integration Services" className="w-full max-w-3xl rounded-xl border border-border shadow-sm" />
                </div>
              </TabsContent>

              <TabsContent value="bi" className="mt-0">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Business Intelligence & Reporting</h3>
                  <p className="text-muted-foreground mb-6 max-w-4xl">
                    Credit Predix offers business intelligence software that enables users to perform comprehensive analyses through beautifully presented data. Discover powerful insights and turn them into impact.
                  </p>
                  <img src={biImg} alt="Business Intelligence & Reporting" className="w-full max-w-3xl rounded-xl border border-border shadow-sm" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Model Development & Validation */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <SectionTitle subtitle="Our software automates the processes of model development and validation, significantly reducing the time required while enhancing the reliability and accuracy of the models.">
              Model Development & Validation
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Model Development</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our model development service offers a statistical approach with a supplement of a judgmental approach to develop a state-of-the-art credit risk model that accurately rates the risk of a client. Our software automates the process of model development. The pipeline ensures a swift and seamless cycle from development to deployment.
                  </p>
                  <img src={modelDevImg} alt="Model Development" className="mt-6 w-full rounded-lg border border-border" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Model Validation</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
                    <p className="font-medium text-foreground">Features of Model Validation:</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong>Model Validation Process</strong> — Ensures models are methodologically robust, compliant with regulations set by the Basel Committee on Banking Supervision (BCBS), and aligned with internal standards.</li>
                      <li><strong>Monitoring Framework</strong> — Guarantees reliability of models through effective monitoring.</li>
                      <li><strong>Benchmarking</strong> — Compares your models against industry best practices.</li>
                      <li><strong>Validation Report</strong> — Provides an independent and detailed evaluation of your models. Highlights strengths and weaknesses. Assesses model suitability for your business environment. Recommends actionable steps for improvement.</li>
                    </ul>
                  </div>
                  <img src={modelValImg} alt="Model Validation" className="mt-6 w-full rounded-lg border border-border" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 md:py-28 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Additional Services</SectionTitle>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                  <img src={esgImg} alt="ESG" className="w-full object-contain" />
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Environment, Social & Governance (ESG)</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our ESG Rating Scorecard combines Bank Negara's CCPT for environmental metrics with EU-aligned social and governance assessments, ensuring global-standard compliance. Showcase your commitment to sustainability, attract ESG-conscious investors, and gain a competitive edge. Empower your business with actionable insights to drive resilience and long-term value.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                  <img src={cybersecurityImg} alt="Cybersecurity Training" className="w-full object-contain" />
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Cybersecurity Training</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In partnership with Cyber Ranges, Pilot offers advanced cybersecurity training to bolster organizational defenses. Using realistic simulations of real-world cyberattacks and cyber drills, the program identifies vulnerabilities and improves readiness. Trusted by the UN since 2017, it's a proven solution for national and regional cyber drills.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                  <img src={afsImg} alt="Automated Financial Spreading" className="w-full object-contain" />
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <FileSpreadsheet className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Automated Financial Spreading</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Automated Financial Spreading module transforms raw financial data into customizable charts of accounts. Powered by a Large Language Model, it adapts to varied formats and provides multilingual translation, making it versatile and efficient for global financial reporting.
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
