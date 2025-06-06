"use client";

import type { SpringOptions } from "framer-motion";
import React, { useRef, useState, FC } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  title: string;
  description: string;
  link?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  className?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export const TiltedCard: FC<TiltedCardProps> = ({
  imageSrc,
  altText = "Project image",
  title,
  description,
  link,
  containerHeight = "300px",
  containerWidth = "100%",
  scaleOnHover = 1.02,
  rotateAmplitude = 5,
  showMobileWarning = true,
  showTooltip = true,
  className = "",
  gradientColors = {
    from: "from-purple-500/50",
    to: "to-blue-500/50",
  },
}) => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current || !isHovered) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetXPosition = e.clientX - rect.left - rect.width / 2;
    const offsetYPosition = e.clientY - rect.top - rect.height / 2;
    const rotationXValue = (offsetYPosition / (rect.height / 2)) * -rotateAmplitude;
    const rotationYValue = (offsetXPosition / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationXValue);
    rotateY.set(rotationYValue);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const velocityY = offsetYPosition - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetYPosition);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    scale.set(scaleOnHover);
    if (showTooltip) opacity.set(1);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    if (showTooltip) opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setLastY(0);
    x.set(0);
    y.set(0);
  }

  const CardContent = () => (
    <figure
      ref={ref}
      className={`relative [perspective:800px] flex flex-col items-center justify-center ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 block sm:hidden z-10 p-2 bg-white/80 dark:bg-black/80 rounded">
          Tilt effect best on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d] w-full h-full"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {imageSrc ? (
          <motion.img
            src={imageSrc}
            alt={altText}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px] will-change-transform [transform:translateZ(0)] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[15px] flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="text-white text-xl font-semibold">Coming Soon</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[15px]" />
        <div className={`absolute inset-0 bg-gradient-to-b ${gradientColors.from} ${gradientColors.to} rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </motion.div>

      {showTooltip && isHovered && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] 
                     px-[10px] py-[4px] text-[10px] 
                     opacity-0 z-[3] hidden sm:block shadow-md
                     bg-white/90 dark:bg-black/90 text-black dark:text-white"
          style={{
            x, y, opacity,
            rotate: rotateFigcaption,
          }}
        >
          {title}
        </motion.figcaption>
      )}
    </figure>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}; 