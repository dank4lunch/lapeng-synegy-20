import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCard3DProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  iconColor: string;
  className?: string;
  delay?: number;
}

const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  title,
  description,
  features,
  icon,
  gradient,
  iconColor,
  className,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(20px)
      scale3d(1.05, 1.05, 1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
      scale3d(1, 1, 1)
    `;
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="group perspective-1000">
      <div
        ref={cardRef}
        className={cn(
          "relative transform-gpu transition-all duration-700 ease-out",
          "hover:shadow-2xl hover:shadow-black/20",
          "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className={cn(
            "rounded-3xl p-8 h-full relative overflow-hidden",
            "border border-white/10 backdrop-blur-sm",
            gradient,
            "transform-gpu transition-all duration-700",
          )}
        >
          {/* Animated background gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500",
              "bg-gradient-to-br from-white/10 via-transparent to-white/5",
              isHovered && "opacity-100",
            )}
          />

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-1 h-1 bg-white/30 rounded-full",
                  "animate-pulse transition-all duration-1000",
                  isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0",
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* 3D Icon */}
            <div
              className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                "transition-all duration-500 transform-gpu",
                "shadow-lg shadow-black/20",
                iconColor,
                "group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl",
              )}
              style={{
                transform: isHovered
                  ? "translateZ(30px) rotateY(15deg)"
                  : "translateZ(0px)",
                transition:
                  "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            >
              <span className="text-white font-bold text-2xl drop-shadow-lg">
                {icon}
              </span>
            </div>

            {/* Content */}
            <div
              className="transform-gpu transition-all duration-500"
              style={{
                transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
              }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {description}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={cn(
                      "transition-all duration-300 transform",
                      isHovered && "translate-x-2 text-foreground",
                    )}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Glow effect */}
            <div
              className={cn(
                "absolute inset-0 rounded-3xl transition-opacity duration-500",
                "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10",
                "blur-xl opacity-0",
                isHovered && "opacity-100",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard3D;
