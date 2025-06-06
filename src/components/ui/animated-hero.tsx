"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  name: string;
  description: string;
  adjectives?: string[];
  ctaContact?: {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  ctaProjects?: {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  schoolInfo?: string;
}

export function Hero({
  name,
  description,
  adjectives = ["developer", "student", "creator"],
  ctaContact,
  ctaProjects,
  schoolInfo
}: HeroProps) {
  const [wordNumber, setWordNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordNumber((prev) => (prev + 1) % adjectives.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [wordNumber, adjectives]);

  return (
    <div className="hero w-full min-h-screen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-center flex-col">

          {schoolInfo && (
            <div className="mb-6 px-4 py-2 rounded-full bg-background/5 border border-border backdrop-blur-lg text-sm text-muted-foreground">
              {schoolInfo}
            </div>
          )}

          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular text-white">
              Hi, I&apos;m {name}
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {adjectives.map((word, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold whitespace-nowrap"
                    initial={{ opacity: 0, y: "-1000" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      wordNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: wordNumber > index ? 1050 : -1000,
                            opacity: 0,
                          }
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            {ctaContact && (
              <Button
                size="lg"
                className="gap-2"
                variant="outline"
                onClick={ctaContact.onClick}
              >
                {ctaContact.text} {ctaContact.icon ? ctaContact.icon : <Mail className="w-4 h-4" />}
              </Button>
            )}
            {ctaProjects && (
              <Button
                size="lg"
                className="gap-2"
                onClick={ctaProjects.onClick}
              >
                {ctaProjects.text} {ctaProjects.icon ? ctaProjects.icon : <Briefcase className="w-4 h-4" />}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 