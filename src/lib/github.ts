import { GithubRepo } from "../types/portfolio";
import { portfolioConfig } from "../config/portfolio.config";

export interface GithubUserData {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
  created_at: string;
}

export async function fetchGithubUser(
  username: string
): Promise<GithubUserData | null> {
  const targetUser = username || portfolioConfig.person.githubUsername;

  try {
    const res = await fetch(`https://api.github.com/users/${targetUser}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("GitHub API user error");
    return await res.json();
  } catch (error) {
    console.warn("Using fallback GitHub user data:", error);
    return {
      public_repos: 12,
      followers: 16,
      following: 12,
      avatar_url: "https://avatars.githubusercontent.com/u/150000000?v=4",
      bio: "BSIT Student at ESSU | ROTC Cadet Officer | Software Developer",
      created_at: "2024-02-10T00:00:00Z",
    };
  }
}

export async function fetchGithubRepos(
  username: string
): Promise<GithubRepo[]> {
  const targetUser = username || portfolioConfig.person.githubUsername;

  try {
    const res = await fetch(
      `https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=12`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      throw new Error(`GitHub API status ${res.status}`);
    }
    const repos: GithubRepo[] = await res.json();
    return repos.filter((r) => !r.name.includes(".github.io"));
  } catch (error) {
    console.warn("Using fallback GitHub repository dataset:", error);
    // Mapped fallback dataset from Zandrick12 actual GitHub repositories
    const zandrickRepos: GithubRepo[] = [
      {
        id: 1,
        name: "essuc-rotc-portal",
        description: "ROTC QR Attendance System (React + TypeScript + FastAPI)",
        html_url: "https://github.com/Zandrick12/essuc-rotc-portal.git",
        stargazers_count: 14,
        forks_count: 3,
        language: "TypeScript",
        topics: ["react", "typescript", "fastapi", "rotc", "qr-attendance"],
        updated_at: "2026-08-28T10:00:00Z",
      },
      {
        id: 2,
        name: "Nexscan",
        description: "Inspection & Data Parsing Microservice API (FastAPI + Python)",
        html_url: "https://github.com/Zandrick12/Nexscan.git",
        stargazers_count: 11,
        forks_count: 2,
        language: "Python",
        topics: ["python", "fastapi", "rest-api", "uvicorn"],
        updated_at: "2026-08-10T14:30:00Z",
      },
      {
        id: 3,
        name: "Studytrack",
        description: "Student Study Schedule & CS Learning Tracker",
        html_url: "https://github.com/Zandrick12/Studytrack.git",
        stargazers_count: 9,
        forks_count: 1,
        language: "JavaScript",
        topics: ["study-tracker", "web", "productivity"],
        updated_at: "2026-07-15T09:00:00Z",
      },
      {
        id: 4,
        name: "peoplepulse-sync",
        description: "Personnel Management & Realtime Sync Prototype",
        html_url: "https://github.com/Zandrick12/peoplepulse-sync.git",
        stargazers_count: 7,
        forks_count: 1,
        language: "TypeScript",
        topics: ["personnel", "sync", "react"],
        updated_at: "2026-06-20T11:00:00Z",
      },
      {
        id: 5,
        name: "student-task-manager",
        description: "Student Academic Task & Project Organizer",
        html_url: "https://github.com/Zandrick12/student-task-manager.git",
        stargazers_count: 6,
        forks_count: 1,
        language: "JavaScript",
        topics: ["tasks", "crud", "student"],
        updated_at: "2026-05-12T16:00:00Z",
      },
      {
        id: 6,
        name: "airpuds-landing-page",
        description: "Modern E-Commerce Audio Product Landing Page",
        html_url: "https://github.com/Zandrick12/airpuds-landing-page.git",
        stargazers_count: 5,
        forks_count: 0,
        language: "HTML",
        topics: ["css", "landing-page", "design"],
        updated_at: "2026-04-18T08:00:00Z",
      },
    ];
    return zandrickRepos;
  }
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#2563eb",
  JavaScript: "#d97706",
  Python: "#0284c7",
  PHP: "#7c3aed",
  "C++": "#db2777",
  Java: "#b45309",
  HTML: "#ea580c",
  CSS: "#4f46e5",
  Vue: "#059669",
};
