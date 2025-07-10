import React, { useRef, useEffect } from 'react';

const NetworkCanvas = () => {
  const canvasRef = useRef();
  const mouse = { x: null, y: null, radius: 120 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    // Particle class with motion
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = 2;
      }

      draw() {
        ctx.fillStyle = '#27ae60';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    // Initialize moving particles
    const init = () => {
      particlesArray = [];
      const numParticles = 80;
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 30000) {
            ctx.strokeStyle = 'rgba(180, 180, 180, 0.3)';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Connect mouse to nearby particles
    const connectToMouse = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const dx = particlesArray[i].x - mouse.x;
        const dy = particlesArray[i].y - mouse.y;
        const distance = dx * dx + dy * dy;

        if (distance < mouse.radius * mouse.radius) {
          ctx.strokeStyle = 'rgba(39, 174, 96, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
          ctx.stroke();
        }
      }
    };

    // Animate everything
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      if (mouse.x && mouse.y) connectToMouse();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    // Event listeners
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -2,
        background: 'transparent',
        pointerEvents: 'none',
      }}
    />
  );
};

export default NetworkCanvas;
