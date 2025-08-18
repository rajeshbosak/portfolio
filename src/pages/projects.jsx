import React, { useState } from "react";
import projects from "../data/projects.json";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects">
      <h3 className="text-2xl font-semibold text-foreground">Projects</h3>
      <p className="mt-2 text-muted-foreground">
        A showcase of key professional and personal projects I contributed to.
      </p>

      {/* Project List - Vertical Cards */}
      <div className="mt-6 space-y-6">
        {visibleProjects.map((p) => (
          <div key={p.name} className="card-glass tilt-hover p-6 flex flex-col">
            {/* Project Title */}
            <div className="font-semibold text-lg text-foreground">
              {p.name}
            </div>

            {/* Project Description */}
            <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>

            {/* Tech Stack Tags */}
            {p.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-muted-foreground/10 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* GitHub / External Link */}
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 font-medium text-primary hover:underline self-start"
              >
                View Repo →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      {projects.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-indigo-400 cursor-pointer hover:text-indigo-300 underline underline-offset-4 transition-colors"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
}
