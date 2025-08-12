import React, { useState, useEffect } from "react";

// Moving Dots Background Component
export default function MovingDotsBackground({ theme = "dark" }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const dotsArray = [];
    let dotId = 0;

    const createDot = () => {
      const dot = {
        id: dotId++,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 20,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.8 + 0.3),
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      };
      dotsArray.push(dot);
      setDots([...dotsArray]);
    };

    const updateDots = () => {
      for (let i = dotsArray.length - 1; i >= 0; i--) {
        const dot = dotsArray[i];
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        if (dot.y < -50 || dot.x < -50 || dot.x > window.innerWidth + 50) {
          dotsArray.splice(i, 1);
        }
      }
      setDots([...dotsArray]);
    };

    for (let i = 0; i < 60; i++) {
      setTimeout(() => createDot(), i * 50);
    }

    const animate = () => {
      updateDots();
      requestAnimationFrame(animate);
    };

    const interval = setInterval(createDot, 150);
    animate();

    return () => clearInterval(interval);
  }, []);

  const lightModeColor = `radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)`;
  const darkModeColor = `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.3) 70%, transparent 100%)`;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: "0px",
            top: "0px",
            transform: `translate(${dot.x}px, ${dot.y}px)`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: theme === "light" ? lightModeColor : darkModeColor,
            opacity: dot.opacity,
            boxShadow:
              theme === "light"
                ? `0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.4), 0 0 24px rgba(0,0,0,0.2), 0 0 32px rgba(0,0,0,0.1)`
                : `0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(255,255,255,0.4), 0 0 24px rgba(255,255,255,0.2), 0 0 32px rgba(255,255,255,0.1)`,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );
}
