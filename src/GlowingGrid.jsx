import { useEffect, useRef } from "react";

export default function GlowingGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const mouse = { x: -9999, y: -9999, active: false };
    const grid = 56;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(198, 243, 106, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(canvas.width, y + 0.5);
        ctx.stroke();
      }

      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
        glow.addColorStop(0, "rgba(12, 232, 244, 0.15)");
        glow.addColorStop(0.45, "rgba(12, 232, 244, 0.06)");
        glow.addColorStop(1, "rgba(12, 232, 244, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cx = Math.floor(mouse.x / grid) * grid;
        const cy = Math.floor(mouse.y / grid) * grid;
        ctx.fillStyle = "rgba(198, 243, 106, 0.12)";
        ctx.fillRect(cx, cy, grid, grid);
        ctx.strokeStyle = "rgba(198, 243, 106, 0.4)";
        ctx.lineWidth = 1;
        ctx.strokeRect(cx + 0.5, cy + 0.5, grid - 1, grid - 1);
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas className="glowing-grid" aria-hidden="true" ref={canvasRef} />;
}
