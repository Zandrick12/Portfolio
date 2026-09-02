"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-tech-grid-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>[SECTION.10]</span>
              <span className="text-slate-400">//</span>
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight font-mono">
              Let&apos;s build something useful.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I am open for software engineering internships, ROTC IT projects, Networking, Cybersecurity and technical collaboration. Feel free to reach out directly via email or connect on GitHub.
            </p>

            {/* Email Copy Box */}
            <div className="p-4 rounded-xl glass-panel border border-slate-200 bg-white flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 font-mono text-xs truncate">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-slate-900 font-medium truncate">{portfolioConfig.person.email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-600" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={portfolioConfig.person.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioConfig.person.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioConfig.person.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 shadow-sm transition-all"
              >
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-sm">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <span className="font-mono text-xs text-blue-600 font-bold">
                  DIRECT TRANSMISSION FORM
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-mono">
                  Send Zandrick a Message
                </h3>
              </div>

              {messageSent ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                  <Sparkles className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-mono text-sm font-bold text-slate-900">Message Transmitted!</h4>
                  <p className="text-xs text-slate-600">Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-semibold">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-semibold">YOUR EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-600 mb-1 font-semibold">MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="What project or collaboration would you like to discuss?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-mono text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
