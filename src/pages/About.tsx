import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Target, Eye } from 'lucide-react';
import logoPyramid from '@/assets/logo-pyramid.png';

import agrobankLogo from '@/assets/clients/agrobank.jpg';
import bsnLogo from '@/assets/clients/bsn.png';
import hongleongLogo from '@/assets/clients/hongleong.png';
import koperasiLogo from '@/assets/clients/koperasi-tentera.png';
import marcLogo from '@/assets/clients/marc.png';
import mbsbLogo from '@/assets/clients/mbsb.jpg';
import muamalatLogo from '@/assets/clients/muamalat.png';
import ocbcLogo from '@/assets/clients/ocbc.png';

const clients = [
  { name: 'Agrobank', logo: agrobankLogo },
  { name: 'BSN', logo: bsnLogo },
  { name: 'Hong Leong Bank', logo: hongleongLogo },
  { name: 'Koperasi Tentera', logo: koperasiLogo },
  { name: 'MARC', logo: marcLogo },
  { name: 'MBSB Bank', logo: mbsbLogo },
  { name: 'Bank Muamalat', logo: muamalatLogo },
  { name: 'OCBC', logo: ocbcLogo },
];

export default function About() {
  // Double the clients array for seamless infinite scroll
  const scrollClients = [...clients, ...clients];

  return (
    <>
      <SEOHead
        title="About - PilotMultimedia"
        description="Learn about Pilot Multimedia Pte Ltd, a Singapore-incorporated company providing credit risk management solutions to financial institutions."
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logoPyramid} alt="Pilot Logo" className="w-16 h-16 mx-auto mb-6 object-contain" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Empowering Financial Stability since 1992
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 md:py-28 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Our Story
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-5 text-base md:text-lg">
                  <p>
                    Pilot Multimedia Pte Ltd, a company incorporated in Singapore, was established in 2013. PILOT has developed a Credit Scoring Solution/Risk Management product which has been successfully implemented in a number of financial institutions; including OCBC Bank which is incorporated and domiciled in Singapore.
                  </p>
                  <p>
                    Pilot Singapore is also related to Pilot Multimedia (M) Sdn Bhd (PILOT), which is a Malaysian private limited company. PILOT was founded in the year 1992 and has achieved Multimedia Supercorridor Status (MSC) in 2002 for the development of Risk Management Solutions. This status accords PILOT tax-free status for 10 years, and the Malaysian government also actively provides support to MSC companies in terms of R&D, marketing, and other financial incentives.
                  </p>
                  <p>
                    In the process, PILOT has developed a Credit Scoring Solution/Risk Management product that has been successfully implemented in a number of financial institutions. 'Risk Predix' is our specific Risk Management product for the Financial Services sector. Our homegrown credit scoring solution also allows expansion into non-financial institution industries, as 'Trade Credit' is also provided by large MNCs and wholesalers that sell on credit terms.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Our Vision & Mission
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Beyond Software & Integration</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  We differentiate ourselves by acting as not just a software vendor or solution integrator, but as a "content" provider. We provide the intellectual property — the scorecards, models, data schemas, and methodologies — that makes a risk platform useful and effective for your business.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Clients */}
        <section className="py-20 md:py-28 px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Our Clients
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Trusted by leading financial institutions across the region
                </p>
              </div>
            </ScrollReveal>

            {/* Infinite scrolling logos */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left gap-12 items-center w-max">
                {scrollClients.map((client, i) => (
                  <div
                    key={`${client.name}-${i}`}
                    className="shrink-0 h-16 md:h-20 w-40 md:w-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
