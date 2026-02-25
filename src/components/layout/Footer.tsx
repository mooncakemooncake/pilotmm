import { Mail, Phone } from 'lucide-react';
import logoPyramid from '@/assets/logo-pyramid.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoPyramid} alt="Pilot Multimedia" className="h-12 object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Financial Stability through Advanced Risk Management Solutions
            </p>
          </div>

          {/* Offices */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Offices</h4>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
              <div>
                <p className="font-medium text-foreground">PILOT MULTIMEDIA PTE. LTD.</p>
                <p>160 Robinson Road</p>
                <p>#10-09 SBF Center</p>
                <p>Singapore (068914)</p>
              </div>
              <div>
                <p className="font-medium text-foreground">PILOT MULTIMEDIA (M) SDN BHD (582627-V)</p>
                <p>A-29-2 Menara UOA Bangsar,</p>
                <p>No.5, Jalan Bangsar Utama 1,</p>
                <p>59000 Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-3">
              <a
                href="mailto:ADMINISTRATOR@PILOTMM.COM?cc=philip@pilotmm.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="size-4 shrink-0" />
                ADMINISTRATOR@PILOTMM.COM
              </a>
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <span>+60-3-2201-6219 | +60-1-9332-2315</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Pilot Multimedia Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
