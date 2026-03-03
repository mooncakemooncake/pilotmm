import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, ChevronRight, Database, BarChart3, Shield, AlertTriangle, Plug, PieChart, Brain, CheckCircle, Leaf, Lock, FileSpreadsheet } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';
import logoPyramid from '@/assets/logo-pyramid.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  anchor: string;
  hasSubmenu?: boolean;
}

const cprsItems: MenuItem[] = [
  { icon: Database, title: 'Obligor Information', subtitle: 'Client data & LOS integration', anchor: 'cprs' },
  { icon: BarChart3, title: 'FINAnalytics', subtitle: 'Financial analysis & projections', anchor: 'cprs' },
  { icon: Shield, title: 'Scorecard & Risk Rule', subtitle: 'Configurable risk rating', anchor: 'cprs', hasSubmenu: true },
  { icon: AlertTriangle, title: 'Early Warning System', subtitle: 'Proactive risk monitoring', anchor: 'cprs' },
  { icon: Plug, title: 'Integration Services', subtitle: 'Connect your systems', anchor: 'cprs' },
  { icon: PieChart, title: 'BI & Reporting', subtitle: 'Business intelligence insights', anchor: 'cprs' },
];

const modelDevItems: MenuItem[] = [
  { icon: Brain, title: 'Model Development', subtitle: 'Custom risk models', anchor: 'model-dev', hasSubmenu: true },
  { icon: CheckCircle, title: 'Model Validation', subtitle: 'Independent validation', anchor: 'model-dev' },
];

const additionalItems: MenuItem[] = [
  { icon: Leaf, title: 'ESG', subtitle: 'Environmental, Social & Governance', anchor: 'additional-services' },
  { icon: Lock, title: 'Cybersecurity', subtitle: 'Security assessments', anchor: 'additional-services' },
  { icon: FileSpreadsheet, title: 'Automated Financial Spreading', subtitle: 'AI-powered data extraction', anchor: 'additional-services' },
];

const scorecardSubs = [
  'Scorecard & Risk Rules',
  'Quantitative Factors',
  'Qualitative Factors',
  'External Data',
  'Adjustments',
  'Parent & Guarantor Support',
  'Portfolio Stress Testing',
];

const modelDevSubs = [
  'Model Development',
  'Model Validation',
];

type HoveredGroup = 'scorecard' | 'modeldev' | null;

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState<HoveredGroup>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  const isTransparent = location.pathname === '/' && !isScrolled;

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => { setMegaOpen(false); setHoveredGroup(null); }, 200);
  };

  const scrollToSection = (anchor: string) => {
    setMegaOpen(false);
    setHoveredGroup(null);
    if (location.pathname === '/portfolio') {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate(`/portfolio#${anchor}`);
  };

  const renderItem = (item: MenuItem, onHover?: () => void) => (
    <button
      key={item.title}
      onMouseEnter={onHover}
      onClick={() => scrollToSection(item.anchor)}
      className="w-full flex items-center gap-3 px-5 py-2.5 text-left hover:bg-primary/10 transition-all duration-200 group/item"
    >
      <div className="w-8 h-8 rounded-lg bg-muted group-hover/item:bg-primary/20 group-hover/item:text-primary flex items-center justify-center flex-shrink-0 text-muted-foreground transition-colors">
        <item.icon className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">{item.title}</p>
        <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
      </div>
      {item.hasSubmenu && <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/item:text-primary flex-shrink-0" />}
    </button>
  );

  const rightPanelContent = hoveredGroup === 'scorecard' ? scorecardSubs : hoveredGroup === 'modeldev' ? modelDevSubs : null;
  const rightPanelTitle = hoveredGroup === 'scorecard' ? 'Scorecard Modules' : hoveredGroup === 'modeldev' ? 'Model Dev & Validation' : '';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-inherit">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'flex items-center gap-2 text-lg font-light tracking-widest transition-all duration-300',
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-foreground hover:text-foreground/80'
            )}
          >
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={logoPyramid} alt="Pilot Logo" className="h-10 object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Link
                  to={link.path}
                  className="relative text-lg leading-7 font-light tracking-wide transition-colors duration-300 text-inherit"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Products & Services Mega Menu Trigger */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
              ref={megaRef}
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <Link
                to="/portfolio"
                className="relative text-lg leading-7 font-light tracking-wide transition-colors duration-300 text-inherit flex items-center gap-1"
              >
                Products & Services
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', megaOpen && 'rotate-180')} />
                {location.pathname === '/portfolio' && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      'absolute top-full right-0 mt-2 rounded-xl bg-card/95 backdrop-blur-xl border border-border shadow-2xl overflow-hidden',
                      rightPanelContent ? 'w-[680px]' : 'w-[340px]'
                    )}
                  >
                    <div className="flex">
                      {/* Left: All items */}
                      <div className={cn('py-3 flex-shrink-0', rightPanelContent ? 'w-[340px] border-r border-border' : 'w-full')}>
                        <p className="px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">CPRS Platform</p>
                        {cprsItems.map((item) =>
                          renderItem(item, item.hasSubmenu ? () => setHoveredGroup('scorecard') : () => setHoveredGroup(null))
                        )}

                        <div className="mx-5 my-2 h-px bg-border" />

                        <p className="px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Model Development & Validation</p>
                        {modelDevItems.map((item) =>
                          renderItem(item, item.hasSubmenu ? () => setHoveredGroup('modeldev') : () => setHoveredGroup(null))
                        )}

                        <div className="mx-5 my-2 h-px bg-border" />

                        <p className="px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Additional Service</p>
                        {additionalItems.map((item) =>
                          renderItem(item, () => setHoveredGroup(null))
                        )}
                      </div>

                      {/* Right: Submenu panel */}
                      <AnimatePresence mode="wait">
                        {rightPanelContent && (
                          <motion.div
                            key={hoveredGroup}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.15 }}
                            className="w-[340px] py-3"
                          >
                            <p className="px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{rightPanelTitle}</p>
                            {rightPanelContent.map((sub) => (
                              <button
                                key={sub}
                                onClick={() => scrollToSection(hoveredGroup === 'scorecard' ? 'cprs' : 'model-dev')}
                                className="w-full px-5 py-2.5 text-left text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                              >
                                {sub}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'size-9',
                    isTransparent && 'text-white hover:bg-white/10'
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg leading-7 font-light tracking-wide text-foreground hover:text-foreground/80"
                    >
                      {link.name}
                    </Link>
                  ))}
                  {/* Mobile Products & Services accordion */}
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between text-lg leading-7 font-light tracking-wide text-foreground"
                  >
                    Products & Services
                    <ChevronDown className={cn('w-4 h-4 transition-transform', mobileServicesOpen && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 space-y-2"
                      >
                        <p className="text-xs font-semibold uppercase text-muted-foreground pt-1">CPRS Platform</p>
                        {cprsItems.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => { setMobileMenuOpen(false); scrollToSection(item.anchor); }}
                            className="flex items-center gap-2 py-1.5 text-sm text-foreground/80 hover:text-primary w-full text-left"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </button>
                        ))}
                        <p className="text-xs font-semibold uppercase text-muted-foreground pt-3">Model Development & Validation</p>
                        {modelDevItems.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => { setMobileMenuOpen(false); scrollToSection(item.anchor); }}
                            className="flex items-center gap-2 py-1.5 text-sm text-foreground/80 hover:text-primary w-full text-left"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </button>
                        ))}
                        <p className="text-xs font-semibold uppercase text-muted-foreground pt-3">Additional Service</p>
                        {additionalItems.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => { setMobileMenuOpen(false); scrollToSection(item.anchor); }}
                            className="flex items-center gap-2 py-1.5 text-sm text-foreground/80 hover:text-primary w-full text-left"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
