import React from "react";

export function HeroWorkspaceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-[0_10px_30px_rgba(0,240,255,0.15)] ${className}`}
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00f0ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid Pattern Background */}
      <g opacity="0.15">
        <path d="M50 0V400 M150 0V400 M250 0V400 M350 0V400 M450 0V400 M550 0V400" stroke="#00f0ff" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M0 50H600 M0 150H600 M0 250H600 M0 350H600" stroke="#00f0ff" strokeWidth="1" strokeDasharray="4 4" />
      </g>

      {/* Central Terminal / IDE Monitor Frame */}
      <rect x="90" y="50" width="420" height="270" rx="12" fill="url(#heroGrad2)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      
      {/* Top Window Bar */}
      <rect x="90" y="50" width="420" height="32" rx="12" fill="rgba(255,255,255,0.05)" />
      <circle cx="115" cy="66" r="5" fill="#ef4444" opacity="0.8" />
      <circle cx="132" cy="66" r="5" fill="#eab308" opacity="0.8" />
      <circle cx="149" cy="66" r="5" fill="#22c55e" opacity="0.8" />
      <text x="300" y="71" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
        ~/system/main.py — (FastAPI + React)
      </text>

      {/* Code Editor Content Mockup */}
      <g fontSize="12" fontFamily="monospace">
        <text x="120" y="110" fill="#a855f7">import <tspan fill="#e2e8f0">fastapi</tspan> from <tspan fill="#00f0ff">&quot;core.system&quot;</tspan></text>
        <text x="120" y="132" fill="#38bdf8">const <tspan fill="#f1f5f9">app</tspan> = <tspan fill="#e2e8f0">FastAPI()</tspan></text>
        <text x="120" y="160" fill="#64748b"># [SYS.INIT] Verification Server Running...</text>

        <text x="120" y="190" fill="#00f0ff">@app.post<tspan fill="#e2e8f0">(&quot;/api/v1/scan&quot;)</tspan></text>
        <text x="120" y="212" fill="#38bdf8">async def <tspan fill="#facc15">verify_attendance</tspan><tspan fill="#e2e8f0">(token: QRToken):</tspan></text>
        <text x="140" y="234" fill="#cbd5e1">cadet = <tspan fill="#a855f7">await</tspan> db.cadets.find(token.id)</text>
        <text x="140" y="256" fill="#4ade80">return <tspan fill="#e2e8f0">&#123; &quot;status&quot;: &quot;VERIFIED&quot;, &quot;timestamp&quot;: now() &#125;</tspan></text>
      </g>

      {/* Connection Beam Line */}
      <path d="M100 300 H500" stroke="url(#glowLine)" strokeWidth="2" />

      {/* Floating Node Badges around monitor */}
      <g transform="translate(40, 120)">
        <rect x="0" y="0" width="110" height="50" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="#00f0ff" strokeWidth="1" />
        <circle cx="20" cy="25" r="8" fill="#00f0ff" opacity="0.3" />
        <circle cx="20" cy="25" r="4" fill="#00f0ff" />
        <text x="36" y="22" fill="#e2e8f0" fontSize="10" fontWeight="bold">FASTAPI</text>
        <text x="36" y="36" fill="#94a3b8" fontSize="9">REST API</text>
      </g>

      <g transform="translate(450, 80)">
        <rect x="0" y="0" width="110" height="50" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="#a855f7" strokeWidth="1" />
        <circle cx="20" cy="25" r="8" fill="#a855f7" opacity="0.3" />
        <circle cx="20" cy="25" r="4" fill="#a855f7" />
        <text x="36" y="22" fill="#e2e8f0" fontSize="10" fontWeight="bold">REACT UI</text>
        <text x="36" y="36" fill="#94a3b8" fontSize="9">Vite + TS</text>
      </g>

      <g transform="translate(430, 240)">
        <rect x="0" y="0" width="120" height="50" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="20" cy="25" r="8" fill="#38bdf8" opacity="0.3" />
        <circle cx="20" cy="25" r="4" fill="#38bdf8" />
        <text x="36" y="22" fill="#e2e8f0" fontSize="10" fontWeight="bold">POSTGRESQL</text>
        <text x="36" y="36" fill="#94a3b8" fontSize="9">Data Store</text>
      </g>

      {/* Connecting Circuit Vector Lines */}
      <path d="M150 145 Q 180 180 180 200" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <path d="M450 105 Q 400 130 380 150" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <path d="M430 265 Q 380 270 340 260" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  );
}

export function ArchitectureTopologyIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f0ff" />
        </marker>
      </defs>

      {/* Node 1: Cadet Camera Mobile Scan UI */}
      <g transform="translate(30, 70)">
        <rect x="0" y="0" width="130" height="90" rx="10" fill="#0f172a" stroke="#00f0ff" strokeWidth="1.5" />
        <text x="65" y="30" textAnchor="middle" fill="#00f0ff" fontSize="11" fontWeight="bold" fontFamily="monospace">[01] CLIENT SCANNER</text>
        <text x="65" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">React + Vite</text>
        <text x="65" y="68" textAnchor="middle" fill="#94a3b8" fontSize="10">QR Web Worker Scan</text>
      </g>

      {/* Connector 1 -> 2 */}
      <path d="M160 115 H210" stroke="#00f0ff" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Node 2: FastAPI REST Backend */}
      <g transform="translate(215, 70)">
        <rect x="0" y="0" width="140" height="90" rx="10" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
        <text x="70" y="30" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold" fontFamily="monospace">[02] REST API GATEWAY</text>
        <text x="70" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">Python FastAPI</text>
        <text x="70" y="68" textAnchor="middle" fill="#94a3b8" fontSize="10">Pydantic Auth & Validation</text>
      </g>

      {/* Connector 2 -> 3 */}
      <path d="M355 115 H405" stroke="#00f0ff" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Node 3: PostgreSQL Database */}
      <g transform="translate(410, 70)">
        <rect x="0" y="0" width="130" height="90" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="65" y="30" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">[03] DATA STORAGE</text>
        <text x="65" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">PostgreSQL / SQLite</text>
        <text x="65" y="68" textAnchor="middle" fill="#94a3b8" fontSize="10">Cadet Logs & Roster</text>
      </g>

      {/* Connector 3 -> 4 */}
      <path d="M540 115 H585" stroke="#00f0ff" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Node 4: Battalion Analytics Dashboard */}
      <g transform="translate(590, 70)">
        <rect x="0" y="0" width="100" height="90" rx="10" fill="#0f172a" stroke="#4ade80" strokeWidth="1.5" />
        <text x="50" y="30" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="monospace">[04] DASHBOARD</text>
        <text x="50" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="600">Live Analytics</text>
        <text x="50" y="68" textAnchor="middle" fill="#94a3b8" fontSize="9">CSV & Stats Sync</text>
      </g>
    </svg>
  );
}

export function FooterVectorArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
    >
      <path d="M0 40 H400 L440 70 H760 L800 40 H1200" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      <circle cx="440" cy="70" r="4" fill="#00f0ff" />
      <circle cx="760" cy="70" r="4" fill="#a855f7" />
      <circle cx="600" cy="70" r="3" fill="#38bdf8" />
    </svg>
  );
}
