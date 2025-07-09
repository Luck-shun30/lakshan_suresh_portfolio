"use client";

import { Home, User, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Hero } from "@/components/ui/animated-hero";
import { TiltedCard } from "@/components/ui/tilted-card";
import { SparklesCore } from "@/components/ui/sparkles";
import { ContactForm } from "@/components/ui/contact-form";
import { siteConfig } from "@/config/site";
import { ChromeGrid } from "@/components/ui/chrome-grid";

export default function HomePage() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob bg-purple-500/30 w-[500px] h-[500px] -top-48 -left-48" />
      <div className="blob bg-blue-500/30 w-[500px] h-[500px] -bottom-48 -right-48" />
      <div className="blob bg-pink-500/30 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <NavBar items={navItems} />
      
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ChromeGrid />
        </div>
        <Hero
          name={siteConfig.name}
          description={siteConfig.description}
          adjectives={siteConfig.adjectives}
          schoolInfo={siteConfig.role}
          ctaProjects={{
            text: "View Projects",
            icon: <Briefcase className="w-4 h-4" />,
            onClick: () => scrollToSection("projects"),
          }}
          ctaContact={{
            text: "Contact Me",
            icon: <Mail className="w-4 h-4" />,
            onClick: () => scrollToSection("contact"),
          }}
        />
      </section>

      <section id="about" className="py-20 bg-zinc-900/50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{siteConfig.about.title}</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={siteConfig.about.image}
                alt="About Me"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              {siteConfig.about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {siteConfig.projects.map((project, index) => (
              <TiltedCard
                key={index}
                {...project}
                containerHeight="250px"
                containerWidth="100%"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{siteConfig.contact.title}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-zinc-300 mb-8 text-center">
              {siteConfig.contact.content}
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
