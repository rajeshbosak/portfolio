import React from "react";

const projects = [
  {
    name: "Ultra-Storefront",
    desc: "White-labelled commerce platform with microfrontends and multilingual support.",
    link: "#",
  },
  {
    name: "Equinox Studio",
    desc: "Low-code platform for commerce experiences and demos.",
    link: "#",
  },
  {
    name: "COBOL→Java Automation",
    desc: "LLM-powered conversion tooling and frontend demos.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <p className="mt-2 text-slate-400">
        Highlighted projects across commerce and AI.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="card-glass hover:scale-[1.02] transition-transform p-6"
          >
            <div className="font-semibold text-lg">{p.name}</div>
            <div className="text-sm text-slate-400 mt-2">{p.desc}</div>
            <div className="mt-4 text-indigo-300 font-medium">View Repo →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
