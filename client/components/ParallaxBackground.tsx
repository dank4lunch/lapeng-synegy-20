import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  className = '',
  speed = 0.5,
  offset = 0,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transform = `translateY(${(scrollY - offset) * speed}px)`;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
