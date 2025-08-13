import React from "react";
import { FiBriefcase } from "react-icons/fi";
import experiences from "../data/experiences.json";

export default function CareerPath() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Career Path</h2>
        <p className="text-muted-foreground mb-10">
          A timeline of my professional experience and roles.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-6 w-0.5 bg-gray-300 dark:bg-gray-700 h-full"></div>

          {experiences.map((item, idx) => {
            const isCurrent = item.end === "Current";

            return (
              <div key={idx} className="mb-10 relative pl-16">
                {/* Dot - positioned to align with the vertical line */}
                <div
                  className={`absolute w-4 h-4 rounded-full flex items-center justify-center border-2 ${
                    isCurrent
                      ? "bg-blue-500 border-blue-300 animate-pulse"
                      : "bg-gray-300 border-gray-500 dark:bg-gray-600 dark:border-gray-400"
                  }`}
                  style={{ left: "17px", top: "24px" }}
                >
                  {isCurrent && (
                    <FiBriefcase className="text-white w-2.5 h-2.5" />
                  )}
                </div>

                {/* Card */}
                <div className="card-glass tilt-hover p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                    />
                    {/* <h3 className="text-lg font-semibold text-foreground">
                      {item.role} @ {item.company}
                    </h3>  */}
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.start} - {item.end}
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
