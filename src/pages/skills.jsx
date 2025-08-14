import React from "react";
import skills from "../data/skills.json";
import certificates from "../data/certificates.json";

export default function Skills() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Skills</h2>
        <p className="text-muted-foreground mb-10">
          A collection of technologies I've worked with.
        </p>

        {skills.map((category) => (
          <div key={category.category} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.items.map((skill) => (
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
                  <h4 className="text-lg font-semibold text-center text-foreground">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Certificates Section */}
        {/* Certificates Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            Certificates
          </h2>
          <p className="text-muted-foreground mb-10">
            A curated list of certifications I've earned over my career.
          </p>

          <div className="space-y-4">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="card-glass p-4 flex justify-between items-center rounded-xl"
              >
                {/* Left side - Title & Issuer */}
                <div>
                  <div className="font-semibold text-lg text-foreground">
                    {cert.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </div>
                </div>

                {/* Right side - Date & Link */}
                <div className="flex flex-col items-end text-right gap-1">
                  <span className="text-sm text-slate-300">
                    {cert.duration}
                  </span>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-400 text-sm hover:underline"
                    >
                      View Certificate
                    </a>
                  ) : (
                    <span className="text-slate-500 text-sm italic opacity-60"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
