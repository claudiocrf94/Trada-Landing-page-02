import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Activity, BarChart3, RotateCcw, LayoutDashboard } from 'lucide-react';

const benefits = [
  {
    title: "Operacional Definido",
    description: "Regras claras de entrada e saída. Chega de achismos. O sistema mapeia sua técnica de ponta a ponta.",
    icon: Target,
    number: "01"
  },
  {
    title: "Controle Emocional",
    description: "Travas de segurança e métricas ao vivo para te blindar nos dias de fúria e ansiedade do mercado.",
    icon: Activity,
    number: "02"
  },
  {
    title: "Análises Completas",
    description: "Identifique fuga de plano, erros recorrentes e escale sua performance com dados institucionais.",
    icon: BarChart3,
    number: "03"
  },
  {
    title: "Motor de Backtest",
    description: "Valide estratégias e otimize setups com a máquina de processamento de histórico e simulações.",
    icon: RotateCcw,
    number: "04"
  },
  {
    title: "Plano de Trade",
    description: "Seu mapa de execução diária. Metas, limites e checklist direto no seu painel antes da primeira boleta.",
    icon: LayoutDashboard,
    number: "05"
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
                <div className="group relative bg-pine/40 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-bang-green hover:border-caribbean transition-colors duration-500 overflow-hidden h-full">
                  
                  {/* Big Background Number */}
                  <div className="absolute -right-10 -bottom-10 text-[10rem] md:text-[15rem] font-bold text-rich-black opacity-40 font-mono tracking-tighter pointer-events-none selection:bg-transparent">
                    {benefit.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-dark-green border border-fog flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,223,129,0.1)] group-hover:shadow-[0_0_25px_rgba(0,223,129,0.3)] transition-all duration-300">
                      <Icon className="w-8 h-8 text-caribbean" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-flash-white">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-stone max-w-sm font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-caribbean opacity-10 blur-[50px] group-hover:opacity-30 transition-opacity duration-500 rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
