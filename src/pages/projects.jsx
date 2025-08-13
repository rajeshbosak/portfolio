import React from "react";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div id="projects">
      <h3 className="text-2xl font-semibold text-foreground">Projects</h3>
      <p className="mt-2 text-muted-foreground">
        Highlighted projects across commerce and AI.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="card-glass hover:scale-[1.02] transition-transform p-6"
          >
            <div className="font-semibold text-lg text-foreground">
              {p.name}
            </div>
            <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>
            <div className="mt-4 font-medium text-primary">View Repo →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
