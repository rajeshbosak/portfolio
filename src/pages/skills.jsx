import React, { useState } from "react";
import skills from "../data/skills.json";
import certificates from "../data/certificates.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Skills() {
  // By default, all categories open
  const [openCategories, setOpenCategories] = useState(
    skills.map((cat) => cat.category)
  );

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Certificates section
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        {/* Skills Header */}
        <h2 className="text-2xl font-bold mb-2 text-foreground">Skills</h2>
        <p className="text-muted-foreground mb-10">
          A collection of technologies I've worked with.
        </p>

        {/* Skills Categories */}
        {skills.map((category) => {
          const isOpen = openCategories.includes(category.category);

          return (
            <div key={category.category} className="mb-6">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full flex justify-between items-center cursor-pointer text-xl font-semibold py-3 border-b border-white/10"
              >
                {category.category}
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {/* Category Items */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-3 overflow-visible">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="card-glass tilt-hover flex flex-col items-center justify-center"
                      // className="card-glass flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-16 h-16 object-contain mb-4 transition-transform duration-300 hover:rotate-6 ${
                          [
                            "GitHub",
                            "LangGraph",
                            "Strapi",
                            "Express.js",
                          ].includes(skill.name)
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
            </div>
          );
        })}

        {/* Certificates Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            Certificates
          </h2>
          <p className="text-muted-foreground mb-10">
            A curated list of certifications I've earned over my career.
          </p>

          <div className="space-y-4">
            {visibleCertificates.map((cert, idx) => (
              <div
                key={idx}
                className="card-glass tilt-hover p-4 flex justify-between items-center rounded-xl"
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

          {/* See More / See Less Button */}
          {certificates.length > 3 && (
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
      </div>
    </section>
  );
}
