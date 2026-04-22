import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    const mouse = { x: width / 2, y: height / 2, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00DF81';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 223, 129, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.radius) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 223, 129, ${0.8 - distanceMouse / mouse.radius})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation variants for staggered text entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Increased from 0.4: Time between each element appearing
        delayChildren: 0.6    // Increased from 0.5: Initial delay before the first element
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts slightly lower
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } // Even slower, dramatic float in (was 1.5)
    }
  };

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-rich-black flex flex-col items-center pt-36 md:pt-[160px] lg:pt-[22vh] pb-20 justify-start">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
      />
      
      {/* Radial fade for depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-rich-black)_80%)]" />

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-green bg-pine/30 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-caribbean animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-flash-white">Consistência. Disciplina. Resultado.</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
          Domine o Mercado<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean via-meadow to-mint">
            Sem Hesitar
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-stone max-w-2xl mx-auto mb-10 font-light">
          O diário inteligente para traders de <strong>B3, Forex e Crypto</strong>. 
          Organize suas operações, cuide do seu emocional e evolua com dados reais.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.trada.app.br/register" className="h-14 px-8 rounded-full bg-caribbean text-rich-black font-bold text-lg hover:bg-meadow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,223,129,0.3)] flex items-center justify-center gap-2">
            Acessar o Trada
            <ChevronRight className="w-5 h-5" />
          </a>
          <a href="#features" className="h-14 px-8 rounded-full border border-pine text-flash-white font-semibold text-lg hover:bg-pine/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
            Saiba Mais
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
