"use client";

import React, { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Project, GithubRepo } from "@/types/portfolio";
import { fetchGithubRepos, LANGUAGE_COLORS } from "@/lib/github";
import { ProjectModal } from "./ProjectModal";
import { SkeletonRepoGrid } from "./SkeletonLoader";
import { ArchitectureTopologyIllustration } from "./VectorArt";
import { Github, ExternalLink, Cpu, Layers, Star, GitFork, ArrowRight, MapPin, BarChart3, RefreshCw } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(false);

  useEffect(() => {
    async function loadRepos() {
      setLoadingRepos(true);
      const data = await fetchGithubRepos(portfolioConfig.person.githubUsername);
      setGithubRepos(data);
      setLoadingRepos(false);
    }
    loadRepos();
  }, []);

  const categories = ["Featured", "Full Stack", "GIS & Spatial Data", "Data & Systems", "Backend", "Live GitHub (@Zandrick12)"];

  const flagshipProject = portfolioConfig.projects.find((p) => p.isFlagship) || portfolioConfig.projects[0];
  const secondaryProjects = portfolioConfig.projects.filter((p) => !p.isFlagship);

  const filteredProjects =
    activeCategory === "Featured"
      ? portfolioConfig.projects
      : activeCategory === "Live GitHub (@Zandrick12)"
      ? []
      : portfolioConfig.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-tech-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[SECTION.02]</span>
            <span className="text-slate-400">//</span>
            <span>REAL-WORLD PROJECTS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Featured Projects & Repositories
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1">
                Practical IT systems built for ROTC cadet management, GIS disaster risk analysis, student survey data, and open-source repositories.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 glass-pill p-1.5 rounded-xl border border-slate-200 bg-white/80">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FLAGSHIP SHOWCASE CARD: ROTC QR ATTENDANCE */}
        {(activeCategory === "Featured" || activeCategory === flagshipProject.category) && (
          <div className="mb-16">
            <div className="glass-panel rounded-2xl border-2 border-blue-200 p-6 sm:p-10 shadow-xl relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-50">
              
              {/* Flagship Badge Overlay */}
              <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Cpu className="w-3.5 h-3.5" /> FLAGSHIP SYSTEM SHOWCASE
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                
                {/* Left Side: Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                      FEATURED PROJECT 01
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 font-mono">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-sm text-blue-800 font-mono font-medium">
                      {flagshipProject.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {flagshipProject.shortDescription}
                  </p>

                  {/* Problem & Solution Callout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-white border border-red-200 space-y-1 shadow-sm">
                      <span className="font-mono text-[10px] font-bold text-red-600">WHAT I SOLVED</span>
                      <p className="text-xs text-slate-700 line-clamp-2 font-sans">
                        {flagshipProject.problemStatement}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200 space-y-1 shadow-sm">
                      <span className="font-mono text-[10px] font-bold text-emerald-600">STACK & APPROACH</span>
                      <p className="text-xs text-slate-700 line-clamp-2 font-sans">
                        {flagshipProject.solutionSummary}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {flagshipProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                    >
                      <span>Explore Architecture & Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm"
                    >
                      <Github className="w-4 h-4 text-slate-900" />
                      <span>Repository (@Zandrick12)</span>
                    </a>
                  </div>
                </div>

                {/* Right Side: Architecture Diagram Card */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="cursor-pointer glass-panel p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all space-y-4 group bg-white shadow-sm"
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-slate-600">
                      <span className="text-blue-600 font-bold flex items-center gap-1.5">
                        <Layers className="w-4 h-4" /> Architecture Topology
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-blue-600">Click to enlarge &rarr;</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                      <ArchitectureTopologyIllustration className="w-full" />
                    </div>

                    <p className="font-mono text-[11px] text-slate-600 text-center">
                      React Scanner &rarr; Python FastAPI (127.0.0.1:8000) &rarr; Cadet Store
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* SECONDARY FEATURED PROJECTS GRID */}
        {activeCategory !== "Live GitHub (@Zandrick12)" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter((p) => !p.isFlagship)
              .map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between cursor-pointer group shadow-sm"
                >
                  <div className="space-y-4">
                    
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-blue-600 transition-colors">
                        0{idx + 2} &rarr;
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-sans">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-600 font-medium group-hover:text-blue-600 transition-colors">
                      View Deep Dive &rarr;
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg glass-pill hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4 text-slate-700" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* LIVE GITHUB REPOSITORIES TAB WITH SKELETON LOADER */}
        {activeCategory === "Live GitHub (@Zandrick12)" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between font-mono text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-blue-600" />
                Repositories for <strong className="text-slate-900">@Zandrick12</strong>
              </span>
              <span>Sorted by Recent Activity</span>
            </div>

            {loadingRepos ? (
              /* Render Skeleton Loaders while fetching */
              <div className="space-y-4">
                <div className="text-center font-mono text-xs text-blue-600 flex items-center justify-center gap-2 pb-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
                  <span>Loading GitHub repositories for Zandrick12...</span>
                </div>
                <SkeletonRepoGrid />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-base font-bold text-slate-900 hover:text-blue-600 transition-colors truncate"
                        >
                          {repo.name}
                        </a>
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-3 font-sans">
                        {repo.description || "Public software repository."}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{
                                backgroundColor:
                                  LANGUAGE_COLORS[repo.language] || "#2563eb",
                              }}
                            />
                            <span>{repo.language}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-blue-600" />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
