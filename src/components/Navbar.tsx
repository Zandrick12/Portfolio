"use client";

import React, { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Github, FileText, Menu, X, Cpu } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoIdx, setLogoIdx] = useState(0);

  const logoSources = ["/logo.png", "/logo.jpg", "/logo.jpeg", "/logo.svg"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "ROTC Leadership", href: "#rotc" },
    { name: "Constellation", href: "#constellation" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm shadow-slate-200/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity with Prominent Logo Support */}
          <a
            href="#hero"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:border-blue-500 transition-colors shadow-sm overflow-hidden p-1.5 shrink-0">
              {logoIdx < logoSources.length ? (
                <img
                  src={logoSources[logoIdx]}
                  alt="Zandrick Quiloña Logo"
                  onError={() => setLogoIdx((prev) => prev + 1)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Cpu className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-slate-900 flex items-center gap-2">
                ZANDRICK QUILOÑA
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-slate-500 tracking-wider font-semibold">
                ESSU BSIT • ROTC Bn S7
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 text-xs font-mono text-slate-600 hover:text-blue-600 transition-colors rounded-full hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-700 glass-pill hover:bg-slate-100 border border-slate-200 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Resume</span>
            </button>

            <a
              href={portfolioConfig.person.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1.5 rounded-xl text-xs font-mono text-blue-600 hover:bg-blue-50 border border-slate-200 transition-all"
              title="Facebook Profile"
            >
              Facebook
            </a>

            <a
              href={portfolioConfig.person.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-white" />
              <span>@Zandrick12</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 glass-pill rounded-lg border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 px-4 py-6 mt-2 space-y-4 animate-in slide-in-from-top-2 bg-white/95">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-slate-800 glass-pill border border-slate-200"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>View Resume</span>
            </button>

            <a
              href={portfolioConfig.person.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-white bg-slate-900"
            >
              <Github className="w-4 h-4 text-white" />
              <span>GitHub (@Zandrick12)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
