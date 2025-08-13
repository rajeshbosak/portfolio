import React from "react";

const events = [
  {
    year: "2025",
    title: "Generative AI – COBOL → Java (Infosys)",
    desc: "Agent-based systems, LangGraph, Azure AI, frontend in Angular.",
  },
  {
    year: "2023",
    title: "Ultra-Storefront",
    desc: "Microfrontends, Next.js, React, STRAPI, Payment integrations.",
  },
  {
    year: "2019",
    title: "Equinox Studio",
    desc: "Low-code platform, schema-based rendering.",
  },
];

export default function CareerPath() {
  return (
    <div id="career">
      <h3 className="text-2xl font-semibold text-foreground">Career Path</h3>
      <p className="mt-2 text-muted-foreground">
        Selected milestones from my professional journey.
      </p>

      <div className="mt-6 space-y-6">
        {events.map((e, i) => (
          <div key={i} className="flex gap-6 items-start">
            <div className="w-20 text-indigo-400 font-semibold">{e.year}</div>
            <div className="card-glass flex-1">
              <div className="font-semibold text-foreground">{e.title}</div>
              <div className="text-sm text-muted-foreground mt-2">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
