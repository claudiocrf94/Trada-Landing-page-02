import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Activity, BarChart3, RotateCcw, LayoutDashboard } from 'lucide-react';

const benefits = [
  {
    title: "Operacional Definido",
    description: "Regras claras de entrada e saída. Chega de achismos. O sistema mapeia sua técnica de ponta a ponta.",
    icon: Target,
    number: "01",
    screenshot: "/screenshots/screenshot-operacao.png"
  },
  {
    title: "Equilíbrio Emocional",
    description: "Check-in emocional diário, stop de perda automático e pausa obrigatória para te proteger nos dias de fúria e ansiedade do mercado.",
    icon: Activity,
    number: "02",
    screenshot: "/screenshots/screenshot-emocional.png"
  },
  {
    title: "Análises Completas",
    description: "Identifique fuga de plano, erros recorrentes e escale sua performance com dados institucionais.",
    icon: BarChart3,
    number: "03",
    screenshot: "/screenshots/screenshot-analytics.png"
  },
  {
    title: "Motor de Backtest",
    description: "Valide estratégias e otimize setups com a máquina de processamento de histórico e simulações.",
    icon: RotateCcw,
    number: "04",
    screenshot: "/screenshots/screenshot-backtest.png"
  },
  {
    title: "Plano de Trading",
    description: "Seu manual de regras pessoais. Defina limites e horários de operação e o sistema avisa quando você está saindo do plano.",
    icon: LayoutDashboard,
    number: "05",
    screenshot: "/screenshots/screenshot-plano.png"
  }
];

export default function FeaturesHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the exact amount of pixels we need to slide left
  // (Total Width of the cards) minus (Viewport width)
  useEffect(() => {
    const updateScrollRange = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section id="features" ref={targetRef} className="relative h-[400vh] bg-dark-green">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* Background Accent Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 h-px w-full bg-caribbean blur-sm" />
          <div className="absolute top-3/4 h-px w-full bg-caribbean blur-sm" />
        </div>

        <motion.div 
          ref={scrollRef}
          style={{ x }} 
          className="flex w-max pl-4 md:pl-16 pr-4 md:pr-16"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="w-[90vw] md:w-[60vw] lg:w-[45vw] px-4 flex-shrink-0"
              >
                <div className="group relative rounded-3xl border border-bang-green hover:border-caribbean transition-all duration-[400ms] ease h-[70vh] min-h-[420px] max-h-[600px] overflow-hidden flex flex-col justify-end p-8 md:p-12 hover:scale-[1.02]">
                  
                  {/* Background Image Layer */}
                  <div 
                    className="absolute inset-0 bg-cover transition-all duration-[400ms] ease bg-top group-hover:bg-center z-0"
                    style={{ backgroundImage: `url(${benefit.screenshot})` }}
                  />

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-[400ms] ease opacity-100 group-hover:opacity-80 z-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 20, 10, 0.92) 0%, rgba(0, 20, 10, 0.75) 50%, rgba(0, 20, 10, 0.4) 100%)'
                    }}
                  />

                  {/* Content - Bottom Left */}
                  <div className="relative z-10 w-full max-w-lg">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-dark-green/90 backdrop-blur-md border border-fog flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,223,129,0.1)] group-hover:shadow-[0_0_25px_rgba(0,223,129,0.3)] transition-all duration-[400ms] ease">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-caribbean" />
                    </div>
                    
                    <h3 
                      className="text-3xl md:text-5xl font-bold mb-4 text-white"
                      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                    >
                      {benefit.title}
                    </h3>
                    
                    <p 
                      className="text-lg md:text-xl font-light leading-relaxed"
                      style={{ color: 'rgba(255, 255, 255, 0.8)', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                    >
                      {benefit.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
          <div className="w-[10vw] md:w-[5vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
