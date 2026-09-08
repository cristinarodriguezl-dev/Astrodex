import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef(null);
  const shootingContainerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animationFrameId;
    const stars = [];
    const numStars = 140;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.03 + 0.008,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.35 ? "#ffffff" : Math.random() > 0.5 ? "#d8b4fe" : "#fef08a",
      });
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!prefersReduced) {
          s.phase += s.speed;
        }
        const brightness = s.alpha + Math.sin(s.phase) * 0.35;
        const clampedAlpha = Math.max(0.1, Math.min(1, brightness));

        ctx.save();
        ctx.globalAlpha = clampedAlpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        if (s.size > 1.6) {
          ctx.globalAlpha = clampedAlpha * 0.3;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();

    let timeoutId;
    const shootingContainer = shootingContainerRef.current;
    if (shootingContainer && !prefersReduced) {
      const launchShootingStar = () => {
        const star = document.createElement("div");
        star.className = "shooting-star";
        const startX = Math.random() * (window.innerWidth - 200) + 150;
        const startY = Math.random() * (window.innerHeight * 0.45);
        const starWidth = Math.random() * 90 + 70;
        const duration = Math.random() * 1.5 + 1.2;

        star.style.left = startX + "px";
        star.style.top = startY + "px";
        star.style.width = starWidth + "px";
        star.style.animation = `shootingStar ${duration}s ease-out forwards`;

        shootingContainer.appendChild(star);
        setTimeout(() => {
          star.remove();
        }, duration * 1000);

        const nextDelay = Math.random() * 4000 + 4000;
        timeoutId = setTimeout(launchShootingStar, nextDelay);
      };
      timeoutId = setTimeout(launchShootingStar, 2000);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" id="starfield-canvas" />
      <div className="absolute -top-40 left-1/4 w-[750px] h-[550px] bg-gradient-to-br from-purple-900/30 via-indigo-950/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-violet-900/25 via-fuchsia-950/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[70%] -left-32 w-[650px] h-[500px] bg-gradient-to-tr from-purple-950/30 via-cyan-950/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div ref={shootingContainerRef} className="absolute inset-0" id="shooting-stars-container" />
    </div>
  );
}
