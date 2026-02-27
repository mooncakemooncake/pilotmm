import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ end, suffix = '', prefix = '', label, duration }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const value = useMotionValue(0);
  const spring = useSpring(value, { damping: 30, stiffness: 80, duration: duration || undefined });
  const display = useTransform(spring, (num) => `${prefix}${Math.round(num)}${suffix}`);

  useEffect(() => {
    if (isInView) value.set(end);
  }, [isInView, end, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary block">
        {display}
      </motion.span>
      <span className="text-sm md:text-base text-muted-foreground mt-2 block">{label}</span>
    </div>
  );
}
