"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { ArchitectureTopologyIllustration } from "./VectorArt";
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Lightbulb, ArrowUpRight, Code, Server } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl glass-pill hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {project.category}
            </span>
            {project.isFlagship && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5" /> Flagship System Showcase
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">
            {project.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal font-sans">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-slate-500 font-bold block">TECHNOLOGY STACK</span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
            <h3 className="font-mono text-xs font-bold text-red-600 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> THE ENGINEERING PROBLEM
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {project.problemStatement}
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
            <h3 className="font-mono text-xs font-bold text-emerald-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> THE IMPLEMENTED SOLUTION
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {project.solutionSummary}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Diagram (If available) */}
        {project.architectureDiagram && (
          <div className="space-y-3 glass-panel p-6 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-blue-600 flex items-center gap-2">
                <Server className="w-4 h-4" /> SYSTEM TOPOLOGY ARCHITECTURE
              </span>
              <span className="font-mono text-[10px] text-slate-400">DATA FLOW MAP</span>
            </div>
            <p className="font-mono text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
              {project.architectureDiagram.flowDescription}
            </p>
            <div className="pt-2 bg-slate-900 p-4 rounded-xl border border-slate-800">
              <ArchitectureTopologyIllustration />
            </div>
          </div>
        )}

        {/* Technical Highlights */}
        {project.technicalHighlights && (
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold text-slate-900 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600" /> TECHNICAL HIGHLIGHTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans">
              {project.technicalHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-mono font-bold mt-0.5">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lessons Learned & Future Improvements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {project.lessonsLearned && (
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-purple-700 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> LESSONS LEARNED
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.futureImprovements && (
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <ArrowUpRight className="w-4 h-4" /> FUTURE IMPROVEMENTS
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-white" />
              <span>View Source on GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo ({project.liveDemoUrl})</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-mono text-xs text-slate-500 hover:text-slate-900"
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
}
