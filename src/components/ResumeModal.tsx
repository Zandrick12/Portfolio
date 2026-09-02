"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { X, Download, FileText, GraduationCap, ShieldCheck } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-mono text-sm font-bold text-slate-900 uppercase tracking-wider">
              {portfolioConfig.person.name} — Technical Resume
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.person.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono text-white bg-blue-600 hover:bg-blue-700 font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg glass-pill text-slate-500 hover:text-slate-900"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 font-sans text-sm">
          
          {/* Candidate Profile Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-slate-900 font-mono">
              {portfolioConfig.person.name}
            </h1>
            <p className="text-xs font-mono text-blue-600 font-semibold">
              {portfolioConfig.person.role} • {portfolioConfig.person.location}
            </p>
            <p className="text-xs text-slate-600 font-mono">
              Email: {portfolioConfig.person.email} | GitHub: {portfolioConfig.person.githubUrl}
            </p>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2 border-t border-slate-200 pt-4">
            <h2 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
              TECHNICAL PROFILE
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {portfolioConfig.person.bioSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2 border-t border-slate-200 pt-4">
            <h2 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  {portfolioConfig.person.degree}
                </h3>
                <p className="text-xs text-slate-600 font-mono">{portfolioConfig.person.university}</p>
              </div>
              <span className="font-mono text-xs font-bold text-blue-600">2023 – Present</span>
            </div>
          </div>

          {/* ROTC Leadership Experience */}
          <div className="space-y-3 border-t border-slate-200 pt-4">
            <h2 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
              ROTC LEADERSHIP & SERVICE
            </h2>
            <div className="flex justify-between items-start bg-blue-50/60 p-3.5 rounded-xl border border-blue-200">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Bn S7 Designation & Cadet Officer
                </h3>
                <p className="text-xs text-blue-800 font-mono">ESSUC ROTC Maragap Unit</p>
                <p className="text-xs text-slate-700 pt-1">Managed cadet officer coordination, Saturday instruction (Signal Comm, Map Reading), and ROTC QR Attendance platform development.</p>
              </div>
              <span className="font-mono text-xs font-bold text-blue-600">2024 – Present</span>
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-3 border-t border-slate-200 pt-4">
            <h2 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
              FEATURED PROJECTS
            </h2>

            {portfolioConfig.projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-blue-700 font-mono text-sm">{proj.title}</h3>
                  <span className="font-mono text-[10px] text-slate-500 font-bold">{proj.category}</span>
                </div>
                <p className="text-xs text-slate-700">{proj.shortDescription}</p>
                <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px] text-slate-600">
                  <span>Stack: {proj.techStack.join(" • ")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2 border-t border-slate-200 pt-4">
            <h2 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">PROGRAMMING</span>
                <span className="text-slate-900 font-bold">JavaScript, TypeScript, Python, PHP, C++, Java</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">FRAMEWORKS & APIS</span>
                <span className="text-slate-900 font-bold">FastAPI, React, Next.js, Vite, Laravel, Node.js</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">DATABASES</span>
                <span className="text-slate-900 font-bold">PostgreSQL, MySQL, SQLite, MongoDB</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">GIS & TOOLS</span>
                <span className="text-slate-900 font-bold">QGIS, GPS Mapping, WGS 84, Git/GitHub, Docker</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end pt-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-mono text-xs text-slate-500 hover:text-slate-900"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
