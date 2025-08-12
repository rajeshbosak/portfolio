import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground({ theme = "dark" }) {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const options = {
    fullScreen: { enable: true, zIndex: -1 }, // enable full-screen coverage
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 120 } },
    },
    particles: {
      color: {
        value:
          theme === "dark"
            ? ["#6ee7b7", "#60a5fa", "#a78bfa"]
            : ["#2563eb", "#db2777", "#10b981"],
      },
      links: {
        enable: true,
        color: "#334155",
        distance: 120,
        opacity: 0.12,
        width: 1,
      },
      move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
      number: {
        value: 80, // increased from 40 to 80 for more particles
        density: {
          enable: true,
          area: 800, // keeps spacing consistent across screen sizes
        },
      },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 5 } },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
