import React from "react";
import skills from "../data/skills.json"; // import the JSON file

export default function Skills() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Skills</h2>
        <p className="text-muted-foreground mb-10">
          A snapshot of technologies I use daily.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-glass flex flex-col items-center justify-center hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-16 h-16 object-contain mb-4 transition-transform duration-300 hover:rotate-6 ${
                  ["GitHub", "LangGraph", "Strapi", "Express.js"].includes(
                    skill.name
                  )
                    ? "dark:invert"
                    : ""
                }`}
              />
              <h3 className="text-lg font-semibold text-center text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
