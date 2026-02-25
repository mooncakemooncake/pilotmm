import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Eye, MapPin } from 'lucide-react';
import { useState } from 'react';
import logoPyramid from '@/assets/logo-pyramid.png';
import visionImg from '@/assets/vision-lightbulb.jpg';
import petronasImg from '@/assets/petronas-towers.jpg';
import merlionImg from '@/assets/merlion-park.jpg';
import ourStoryImg from '@/assets/our-story.jpg';

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

const locations = [
  {
    country: 'Malaysia',
    image: petronasImg,
    address: [
      'PILOT MULTIMEDIA (M) SDN BHD (582627-V)',
      'A-29-2 Menara UOA Bangsar,',
      'No.5, Jalan Bangsar Utama 1,',
      '59000 Kuala Lumpur, Malaysia',
    ],
  },
  {
    country: 'Singapore',
    image: merlionImg,
    address: [
      'PILOT MULTIMEDIA PTE. LTD.',
      '160 Robinson Road',
      '#10-09 SBF Center',
      'Singapore (068914)',
    ],
  },
];

/* Location cards that expand on hover like the reference image */
function LocationCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-3 h-[400px] md:h-[500px]">
      {locations.map((loc, index) => {
        const isHovered = hoveredIndex === index;
        const hasHover = hoveredIndex !== null;

        return (
          <motion.div
            key={loc.country}
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ flex: isHovered ? 4 : hasHover ? 1 : 1 }}
            animate={{ flex: isHovered ? 4 : hasHover ? 1 : 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={loc.image}
              alt={loc.country}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            {/* Collapsed state: vertical text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-white text-2xl font-bold tracking-widest uppercase"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {loc.country}
              </h3>
            </motion.div>

            {/* Expanded state: full info */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-8"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.15 : 0 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-3xl font-bold text-white">{loc.country}</h3>
              </div>
              <div className="space-y-1 text-sm text-white/90">
                {loc.address.map((line, i) => (
                  <p key={i} className={i === 0 ? 'font-semibold text-base' : ''}>{line}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function About() {
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
              <img src={logoPyramid} alt="Pilot Logo" className="h-16 mx-auto mb-6 object-contain" />
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
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                    Our Story
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-5 text-base">
                    <p>
                      Pilot Multimedia Pte Ltd, a company incorporated in Singapore, was established in 2013. PILOT has developed a Credit Scoring Solution/Risk Management product which has been successfully implemented in a number of financial institutions; including OCBC Bank which is incorporated and domiciled in Singapore.
                    </p>
                    <p>
                      Pilot Singapore is also related to Pilot Multimedia (M) Sdn Bhd (PILOT), which is a Malaysian private limited company. PILOT was founded in the year 1992 and has achieved Multimedia Supercorridor Status (MSC) in 2002 for the development of Risk Management Solutions.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img src={ourStoryImg} alt="Our Story" className="w-full rounded-2xl border border-border shadow-lg" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 text-muted-foreground leading-relaxed space-y-5 text-base max-w-4xl">
                <p>
                  This status accords PILOT tax-free status for 10 years, and the Malaysian government also actively provides support to MSC companies in terms of R&D, marketing, and other financial incentives.
                </p>
                <p>
                  In the process, PILOT has developed a Credit Scoring Solution/Risk Management product that has been successfully implemented in a number of financial institutions. 'Risk Predix' is our specific Risk Management product for the Financial Services sector. Our homegrown credit scoring solution also allows expansion into non-financial institution industries, as 'Trade Credit' is also provided by large MNCs and wholesalers that sell on credit terms.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-dark-section text-dark-section-foreground">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Our Vision
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Beyond Software & Integration</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg">
                    We differentiate ourselves by acting as not just a software vendor or solution integrator, but as a "content" provider. We provide the intellectual property — the scorecards, models, data schemas, and methodologies — that makes a risk platform useful and effective for your business.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img src={visionImg} alt="Our Vision" className="w-full rounded-2xl border border-primary/30 shadow-lg shadow-primary/10" />
                </div>
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

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left gap-12 items-center w-max">
                {scrollClients.map((client, i) => (
                  <div
                    key={`${client.name}-${i}`}
                    className="shrink-0 h-16 md:h-20 w-40 md:w-48 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
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

        {/* We are located at */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-dark-section text-dark-section-foreground">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  We are located at
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <LocationCards />
            </ScrollReveal>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
