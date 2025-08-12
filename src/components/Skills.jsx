import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 92 },
  { name: "Angular", level: 88 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "DSA", level: 86 },
];

export default function Skills() {
  return (
    <div id="skills">
      <h3 className="text-2xl font-semibold">Skills</h3>
      <p className="mt-2 text-slate-400">
        A snapshot of technologies I use daily.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div key={s.name} className="card-glass">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-slate-400">{s.level}%</div>
            </div>
            <div className="mt-3 progress-track">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
