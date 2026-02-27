import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import pilotOfficeImg from '@/assets/pilot-office-kl.jpg';

export default function OurStory() {
  return (
    <>
      <SEOHead
        title="Our Story - PilotMultimedia"
        description="The Evolution of Pilot Multimedia: Building Trust in Credit Risk Since 1992"
      />

      <div className="min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-6 lg:px-8 pt-8">
          <ol className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-foreground font-medium">Our Story</li>
          </ol>
        </nav>

        {/* Article Header */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Company History</p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                The Evolution of Pilot Multimedia: Building Trust in Credit Risk Since 1992
              </h1>
              <p className="text-muted-foreground text-sm">Published by Pilot Multimedia</p>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 md:py-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose-style space-y-8 text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pilot Multimedia (M) Sdn Bhd (PILOT) is a premier Malaysian private limited company founded in 1992. With over three decades of proven expertise, PILOT has established a distinguished track record across Asia in commercial, SME, corporate, and retail portfolios.
            </p>

            <div className="rounded-xl overflow-hidden my-10">
              <img
                src={pilotOfficeImg}
                alt="PILOT office at Menara UOA Bangsar, Kuala Lumpur"
                className="w-full h-64 md:h-96 object-cover"
              />
              <p className="text-sm text-muted-foreground/70 mt-3 italic">Our operations center at Menara UOA Bangsar, Kuala Lumpur</p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              In 2002, the company achieved Multimedia Super Corridor (MSC) Status for its excellence in technology development and innovation in Risk Management Solutions. This status, recognized by the Malaysian government, reflects our long-standing commitment to R&D and financial technology leadership. Through this journey, PILOT developed its flagship homegrown Credit Scoring and Risk Management products, which have been successfully implemented across numerous financial institutions.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Expanding our regional footprint, Pilot Multimedia Pte Ltd was incorporated in Singapore in 2013. Our solutions, including our specialized Risk Management product 'Risk Predix', have been successfully deployed in leading regional institutions such as OCBC Bank in Singapore. Today, our versatile credit scoring solutions also empower MNCs and wholesalers through 'Trade Credit' management for businesses operating on credit terms.
            </p>
          </div>
        </article>

        {/* Home button */}
        <div className="px-6 lg:px-8 pb-20">
          <div className="max-w-3xl mx-auto border-t border-border pt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
