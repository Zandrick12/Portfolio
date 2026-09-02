"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { RotcExperience } from "@/components/RotcExperience";
import { TechConstellation } from "@/components/TechConstellation";
import { Journey } from "@/components/Journey";
import { ExploreSection } from "@/components/ExploreSection";
import { GithubActivity } from "@/components/GithubActivity";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-blue-500/20 selection:text-blue-900">
      {/* Sticky Header Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <RotcExperience />
      <TechConstellation />
      <Journey />
      <ExploreSection />
      <GithubActivity />
      <Achievements />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
