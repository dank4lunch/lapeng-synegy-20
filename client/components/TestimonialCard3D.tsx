import React, { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCard3DProps {
  quote: string;
  name: string;
  title: string;
  initials: string;
  delay?: number;
}

const TestimonialCard3D: React.FC<TestimonialCard3DProps> = ({
  quote,
  name,
  title,
  initials,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const floatingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(30px)
      scale3d(1.08, 1.08, 1.08)
    `;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      // Start floating animation
      floatingIntervalRef.current = setInterval(() => {
        if (cardRef.current && isHovered) {
          const randomX = (Math.random() - 0.5) * 4;
          const randomY = (Math.random() - 0.5) * 4;
          const currentTransform = cardRef.current.style.transform;
          
          if (currentTransform.includes('translate3d')) {
            cardRef.current.style.transform = currentTransform.replace(
              /translate3d\([^)]*\)/,
              `translate3d(${randomX}px, ${randomY}px, 30px)`
            );
          } else {
            cardRef.current.style.transform += ` translate3d(${randomX}px, ${randomY}px, 30px)`;
          }
        }
      }, 2000);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (floatingIntervalRef.current) {
      clearInterval(floatingIntervalRef.current);
    }
    
    if (!cardRef.current) return;
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
      translate3d(0px, 0px, 0px)
      scale3d(1, 1, 1)
    `;
  };

  return (
    <div className="group perspective-1000 h-full">
      <div
        ref={cardRef}
        className={cn(
          "relative transform-gpu transition-all duration-700 ease-out h-full",
          "hover:shadow-2xl hover:shadow-primary/10",
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100"
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        <Card className={cn(
          "p-8 bg-gradient-to-br from-white to-muted/30 h-full relative overflow-hidden",
          "border border-white/20 backdrop-blur-sm",
          "transform-gpu transition-all duration-700"
        )}>
          <CardContent className="pt-6 h-full flex flex-col relative z-10">
            {/* Floating sparkles effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute w-1 h-1 bg-yellow-400 rounded-full",
                    "transition-all duration-1000",
                    isHovered ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-0"
                  )}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 200}ms`,
                  }}
                />
              ))}
            </div>

            {/* 3D Stars */}
            <div 
              className="flex mb-4"
              style={{
                transform: isHovered ? 'translateZ(20px) rotateY(5deg)' : 'translateZ(0px)',
                transition: 'transform 0.5s ease-out',
              }}
            >
              {[1, 2, 3, 4, 5].map((star, index) => (
                <Star 
                  key={star} 
                  className={cn(
                    "h-5 w-5 text-yellow-400 fill-current transition-all duration-300",
                    isHovered && "scale-110 rotate-12"
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                />
              ))}
            </div>

            {/* Quote */}
            <div 
              className="flex-1"
              style={{
                transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
                transition: 'transform 0.5s ease-out 0.1s',
              }}
            >
              <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                "{quote}"
              </p>
            </div>

            {/* Author section */}
            <div 
              className="flex items-center mt-auto"
              style={{
                transform: isHovered ? 'translateZ(25px) rotateY(-3deg)' : 'translateZ(0px)',
                transition: 'transform 0.5s ease-out 0.2s',
              }}
            >
              <div className={cn(
                "w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4",
                "transition-all duration-500 shadow-lg",
                isHovered && "scale-125 rotate-12 shadow-2xl shadow-primary/30"
              )}>
                <span className="text-white font-bold drop-shadow-sm">
                  {initials}
                </span>
              </div>
              <div>
                <p className={cn(
                  "font-semibold text-foreground transition-colors duration-300",
                  isHovered && "text-primary"
                )}>
                  {name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {title}
                </p>
              </div>
            </div>

            {/* Glow effect */}
            <div className={cn(
              "absolute inset-0 rounded-lg transition-opacity duration-500",
              "bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5",
              "blur-xl opacity-0",
              isHovered && "opacity-100"
            )} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestimonialCard3D;
