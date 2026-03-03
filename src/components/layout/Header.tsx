import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, ChevronRight, Database, BarChart3, Shield, AlertTriangle, Plug, PieChart, Brain, CheckCircle, Leaf, Lock, FileSpreadsheet } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
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

const serviceItems = [
  { icon: Database, title: 'Obligor Information', subtitle: 'Client data & LOS integration', section: 'cprs' },
  { icon: BarChart3, title: 'FINAnalytics', subtitle: 'Financial analysis & projections', section: 'cprs' },
  { icon: Shield, title: 'Scorecard & Risk Rule', subtitle: 'Configurable risk rating', section: 'cprs' },
  { icon: AlertTriangle, title: 'Early Warning System', subtitle: 'Proactive risk monitoring', section: 'cprs' },
  { icon: Plug, title: 'Integration Services', subtitle: 'Connect your systems', section: 'cprs' },
  { icon: PieChart, title: 'BI & Reporting', subtitle: 'Business intelligence insights', section: 'cprs' },
];

const consultingItems = [
  { icon: Brain, title: 'Model Development', subtitle: 'Custom risk models' },
  { icon: CheckCircle, title: 'Model Validation', subtitle: 'Independent validation' },
  { icon: Leaf, title: 'ESG', subtitle: 'Environmental, Social & Governance' },
  { icon: Lock, title: 'Cybersecurity', subtitle: 'Security assessments' },
  { icon: FileSpreadsheet, title: 'Automated Financial Spreading', subtitle: 'AI-powered data extraction' },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  const isTransparent = location.pathname === '/' && !isScrolled;

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const handleServiceClick = (item: typeof serviceItems[0]) => {
    setMegaOpen(false);
    navigate('/portfolio');
  };

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
                    className="absolute top-full right-0 mt-2 w-[680px] rounded-xl bg-[hsl(var(--card))]/95 backdrop-blur-xl border border-border shadow-2xl overflow-hidden"
                  >
                    <div className="flex">
                      {/* Left: Service list */}
                      <div className="w-[340px] border-r border-border py-3">
                        <p className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">CPRS Platform</p>
                        {serviceItems.map((item, i) => (
                          <button
                            key={item.title}
                            onMouseEnter={() => setHoveredItem(i)}
                            onClick={() => handleServiceClick(item)}
                            className={cn(
                              'w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-200',
                              hoveredItem === i
                                ? 'bg-primary/10'
                                : 'hover:bg-accent/50'
                            )}
                          >
                            <div className={cn(
                              'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                              hoveredItem === i ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                            )}>
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className={cn('text-sm font-medium', hoveredItem === i ? 'text-primary' : 'text-foreground')}>{item.title}</p>
                              <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                            </div>
                            {hoveredItem === i && <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />}
                          </button>
                        ))}
                      </div>

                      {/* Right: Consulting & Advisory */}
                      <div className="w-[340px] py-3">
                        <p className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Consulting & Advisory</p>
                        {consultingItems.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => { setMegaOpen(false); navigate('/portfolio'); }}
                            className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-accent/50 transition-all duration-200"
                          >
                            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-muted-foreground">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-foreground">{item.title}</p>
                              <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                            </div>
                          </button>
                        ))}
                      </div>
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
                        {serviceItems.map((item) => (
                          <Link
                            key={item.title}
                            to="/portfolio"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-sm text-foreground/80 hover:text-primary"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </Link>
                        ))}
                        <p className="text-xs font-semibold uppercase text-muted-foreground pt-3">Consulting</p>
                        {consultingItems.map((item) => (
                          <Link
                            key={item.title}
                            to="/portfolio"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-sm text-foreground/80 hover:text-primary"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </Link>
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
