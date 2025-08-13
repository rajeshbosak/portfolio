import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground({ theme = "dark" }) {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Only render particles on desktop
    if (window.innerWidth >= 768) {
      setShowParticles(true);
    }
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  if (!showParticles) return null;

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    detectRetina: false, // faster rendering on high-DPI
    fpsLimit: 30,
    interactivity: {
      events: { onHover: { enable: false } }, // no hover interaction
    },
    particles: {
      color: {
        value:
          theme === "dark"
            ? ["#6ee7b7", "#60a5fa", "#a78bfa"]
            : ["#2563eb", "#db2777", "#10b981"],
      },
      links: { enable: false }, // no links
      move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
      number: { value: 20, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 2 } },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
