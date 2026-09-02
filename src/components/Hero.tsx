"use client";

import React, { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { ArrowRight, Github, Terminal as TerminalIcon, ShieldCheck, GraduationCap, Code2, Sparkles, User, Camera } from "lucide-react";

export function Hero() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [photoIdx, setPhotoIdx] = useState(0);

  const photoSources = [
    portfolioConfig.person.photoUrl,
    "/zandrick-photo.png",
    "/zandrick-photo.jpeg",
    "/photo.jpg",
    "/photo.png",
    "/profile.jpg",
    "/profile.png",
  ];

  const currentCmdObj = portfolioConfig.terminalCommands[commandIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullCommand = currentCmdObj.command;

    if (isTyping) {
      if (displayedText.length < fullCommand.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullCommand.slice(0, displayedText.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2800);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIsTyping(true);
        setCommandIndex((prev) => (prev + 1) % portfolioConfig.terminalCommands.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, commandIndex, currentCmdObj]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid-light">
      {/* Background Soft Monochrome Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-slate-400/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Split Left Entrance Animation */}
          <div className="lg:col-span-7 space-y-6 animate-split-left">
            
            {/* Status Tags */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill border border-slate-300 text-xs font-mono text-slate-800 shadow-sm bg-white">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
              <span className="text-slate-900 font-bold">[ESSU BSIT STUDENT]</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 font-semibold text-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-900" /> ROTC Bn S7 Cadet Officer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Building systems.{" "}
              <span className="text-slate-900 underline decoration-slate-900 decoration-wavy decoration-1 underline-offset-4">
                Exploring technology.
              </span>{" "}
              Turning ideas into working solutions.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              I&apos;m <strong className="text-slate-900 font-bold">{portfolioConfig.person.name}</strong>, a BSIT student at Eastern Samar State University (ESSU). I build software solutions like the <strong className="text-slate-900">ROTC QR Attendance System</strong>, explore Python FastAPI backends, and analyze GIS spatial data.
            </p>

            {/* Micro Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-700">
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-slate-900" /> ESSU BSIT Student
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-slate-900" /> React & FastAPI
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-slate-900" /> ROTC QR Attendance
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md shadow-slate-900/20"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioConfig.person.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
              >
                <Github className="w-4 h-4 text-slate-900" />
                <span>GitHub (@Zandrick12)</span>
              </a>
            </div>

            {/* Light Mode Terminal Window */}
            <div className="pt-2">
              <div className="glass-panel rounded-xl overflow-hidden border border-slate-200 shadow-lg max-w-xl bg-white/90">
                {/* Window Header */}
                <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="w-3.5 h-3.5 text-slate-900" />
                    <span className="font-mono text-xs text-slate-600">terminal@zandrick-essu:~</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  </div>
                </div>

                {/* Window Body */}
                <div className="p-4 font-mono text-xs space-y-2 bg-slate-950 text-slate-100 min-h-[110px]">
                  <div className="flex items-center text-slate-200">
                    <span className="text-slate-500 mr-2">$</span>
                    <span>{displayedText}</span>
                    <span className="inline-block w-2 h-4 bg-slate-100 ml-1 animate-pulse" />
                  </div>

                  {!isTyping && (
                    <div className="space-y-1 pt-1 text-slate-300 animate-in fade-in duration-300">
                      {currentCmdObj.response.map((line, idx) => (
                        <p key={idx} className="leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Solid Black Frame Profile Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center text-center animate-split-right space-y-6 mx-auto w-full max-w-md lg:max-w-lg">
            
            {/* Centered Solid Black Profile Photo Frame */}
            <div className="relative group w-full flex justify-center">
              
              {/* Outer Solid Black Glow Ring */}
              <div className="absolute -inset-1.5 bg-slate-900 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500 max-w-[340px] sm:max-w-[400px] w-full" />

              {/* Main Photo Card — Solid Black Border Accent */}
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[400px] sm:h-[480px] rounded-2xl overflow-hidden glass-panel border-2 border-slate-900 bg-white shadow-2xl flex flex-col items-center justify-center p-3.5">
                {photoIdx < photoSources.length ? (
                  <img
                    src={photoSources[photoIdx]}
                    alt={portfolioConfig.person.name}
                    onError={() => setPhotoIdx((prev) => prev + 1)}
                    className="w-full h-full object-cover object-center rounded-xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  /* Fallback Profile Avatar Graphic */
                  <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center text-center p-6 space-y-4 border border-slate-200">
                    <div className="w-28 h-28 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-md text-slate-900">
                      <User className="w-14 h-14" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-mono text-lg font-bold text-slate-900">
                        {portfolioConfig.person.name}
                      </h3>
                      <p className="font-mono text-xs text-slate-900 font-bold">
                        ESSU BSIT Student • ROTC Bn S7
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[10px] font-mono text-slate-900 border border-slate-300 shadow-sm font-semibold">
                      <Camera className="w-3.5 h-3.5 text-slate-900" />
                      <span>Photo Container Ready (zandrick-photo.jpg)</span>
                    </div>
                  </div>
                )}

                {/* Floating Badge Overlay: Solid Black Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 text-white backdrop-blur-md p-3.5 rounded-xl border border-slate-800 shadow-xl flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="font-mono text-xs sm:text-sm font-bold text-white">
                      {portfolioConfig.person.name}
                    </h4>
                    <p className="font-mono text-[10px] sm:text-[11px] text-slate-300 font-medium">
                      Eastern Samar State University
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-white text-slate-900 shadow-sm shrink-0">
                    BSIT
                  </span>
                </div>
              </div>

            </div>

            {/* Supporting Micro Cards Centered below Photo */}
            <div className="w-full max-w-[340px] sm:max-w-[400px] grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="glass-panel p-3 rounded-xl border border-slate-200 bg-white text-center space-y-0.5 shadow-sm">
                <span className="text-[10px] text-slate-500 font-semibold">GITHUB REPOS</span>
                <span className="block text-sm font-bold text-slate-900 truncate">@Zandrick12</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-slate-200 bg-white text-center space-y-0.5 shadow-sm">
                <span className="text-[10px] text-slate-500 font-semibold">FLAGSHIP APP</span>
                <span className="block text-xs font-bold text-slate-900 truncate">ROTC QR Portal</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
