"use client";

import React, { useEffect, useRef } from "react";

export default function RosePetals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Rose petals pool (Fresh floral luxury palette)
    const petalColors = [
      { fill: "rgba(245, 221, 227, 0.75)", stroke: "rgba(201, 130, 145, 0.35)" },
      { fill: "rgba(235, 178, 190, 0.8)", stroke: "rgba(201, 130, 145, 0.4)" },
      { fill: "rgba(255, 240, 245, 0.7)", stroke: "rgba(245, 221, 227, 0.5)" },
      { fill: "rgba(201, 130, 145, 0.65)", stroke: "rgba(115, 84, 91, 0.35)" },
      { fill: "rgba(244, 227, 201, 0.55)", stroke: "rgba(201, 130, 145, 0.25)" },
    ];

    const PETAL_COUNT = Math.min(30, Math.floor(width / 45));
    const petals = [];

    class Petal {
      constructor(isInitial = true) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        this.x = Math.random() * width;
        this.y = isInitial ? Math.random() * height : -20 - Math.random() * 50;
        this.size = 10 + Math.random() * 14;
        this.speedY = 0.6 + Math.random() * 1.2;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1.5;
        this.oscillationSpeed = 0.01 + Math.random() * 0.02;
        this.oscillationDistance = 20 + Math.random() * 35;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = 0.02 + Math.random() * 0.03;
      }

      update() {
        this.y += this.speedY;
        this.angle += this.oscillationSpeed;
        this.x += Math.sin(this.angle) * 0.7 + this.speedX;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        if (this.y > height + 30 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.scale(Math.cos(this.flip), 1);

        // Draw organic curved rose petal
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.bezierCurveTo(
          this.size * 0.7,
          -this.size * 0.6,
          this.size * 0.8,
          this.size * 0.4,
          0,
          this.size * 0.8
        );
        ctx.bezierCurveTo(
          -this.size * 0.8,
          this.size * 0.4,
          -this.size * 0.7,
          -this.size * 0.6,
          0,
          -this.size / 2
        );
        ctx.fillStyle = this.color.fill;
        ctx.fill();
        ctx.strokeStyle = this.color.stroke;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      }
    }

    // Sparkles
    const sparkles = [];
    const SPARKLE_COUNT = 18;

    class Sparkle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = 1 + Math.random() * 2.5;
        this.opacity = Math.random() * 0.8;
        this.speed = 0.015 + Math.random() * 0.02;
        this.rising = Math.random() > 0.5;
      }

      update() {
        if (this.rising) {
          this.opacity += this.speed;
          if (this.opacity >= 0.85) this.rising = false;
        } else {
          this.opacity -= this.speed;
          if (this.opacity <= 0.1) {
            this.reset();
          }
        }
        this.y -= 0.2;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235, 185, 195, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 205, 215, 0.8)";
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push(new Petal(true));
    }

    for (let i = 0; i < SPARKLE_COUNT; i++) {
      sparkles.push(new Sparkle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render sparkles first (background depth)
      sparkles.forEach((s) => {
        s.update();
        s.draw();
      });

      // Render falling petals
      petals.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Subtle click to spawn gentle petal flurry
    const handlePointerDown = (e) => {
      for (let i = 0; i < 3; i++) {
        const extraPetal = new Petal(false);
        extraPetal.x = e.clientX + (Math.random() - 0.5) * 30;
        extraPetal.y = e.clientY + (Math.random() - 0.5) * 30;
        extraPetal.speedY = 0.8 + Math.random() * 1.2;
        petals.push(extraPetal);
        if (petals.length > PETAL_COUNT + 10) {
          petals.shift();
        }
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    />
  );
}
