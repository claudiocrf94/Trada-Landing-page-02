import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Gratuito",
    description: "Explore a plataforma e teste as ferramentas de diário essenciais.",
    price: "R$0",
    period: "/sempre",
    features: ["12 operações de teste vitalícias", "Diário de trades", "Check-in emocional diário"],
    buttonText: "Começar grátis"
  },
  {
    id: 2,
    name: "Trader",
    description: "Ideal para traders iniciantes buscando construir consistência diária.",
    price: "R$49",
    period: "/mês",
    features: ["Operações ilimitadas", "Diário completo de trades", "Analytics e análises de performance", "Backtest manual", "Relatório semanal com IA Coach", "Plano de trading pessoal"],
    buttonText: "Assinar Trader"
  },
  {
    id: 3,
    name: "Pro",
    description: "O ecossistema completo para traders avançados de alta performance.",
    price: "R$89",
    period: "/mês",
    features: ["Tudo do plano Trader", "Grupos de accountability", "Times de 3 a 5 traders", "Ranking público de consistência", "Acesso antecipado a novidades"],
    isPopular: true,
    buttonText: "Começar agora"
  },
  {
    id: 4,
    name: "Mentor",
    description: "Gestão profunda para professores, salas de sinal ou mesas proprietárias.",
    price: "R$199",
    period: "/mês",
    features: ["Tudo do plano Pro", "Painel de gestão de alunos", "Convide alunos pelo email", "Veja o resumo dos seus alunos", "Feedback direto nas operações", "Acompanhe evolução semanal"],
    buttonText: "Assinar Mentor"
  }
];

export default function PricingCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to 'Pro'

  return (
    <section id="pricing" className="py-32 bg-rich-black relative overflow-hidden flex flex-col items-center">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-caribbean/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-20 relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-flash-white tracking-tight">
          Escolha seu Plano de Ataque
        </h2>
        <p className="text-lg text-stone max-w-xl mx-auto">
          Ferramentas institucionais acessíveis para transformar sua relação de risco-retorno no mercado.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 h-[600px] flex items-center justify-center">
        {plans.map((plan, index) => {
          // Calculate offset relative to active card
          const diff = index - activeIndex;
          const absDiff = Math.abs(diff);
          const isCenter = diff === 0;

          // Determine scale, opacity, and Z-index based on offset
          const scale = isCenter ? 1 : 0.85 - (absDiff * 0.05);
          const xOffset = diff * 320; // Distance between cards
          const zIndex = 10 - absDiff;
          const opacity = isCenter ? 1 : 0.5 - (absDiff * 0.2);

          return (
            <motion.div
              key={plan.id}
              className="absolute w-[340px] md:w-[380px] cursor-pointer"
              animate={{
                x: xOffset,
                scale,
                zIndex,
                opacity
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div 
                className={`relative h-[500px] rounded-3xl p-8 border backdrop-blur-sm transition-colors duration-300 flex flex-col
                  ${isCenter 
                    ? 'bg-pine border-caribbean shadow-[0_20px_50px_rgba(0,223,129,0.15)] pointer-events-auto' 
                    : 'bg-dark-green border-bang-green hover:border-meadow pointer-events-auto'
                  }`}
              >
                {plan.isPopular && isCenter && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-caribbean text-rich-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    Mais Escolhido
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${isCenter ? 'text-pistachio' : 'text-stone'}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-stone"> {plan.period}</span>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${isCenter ? 'text-caribbean' : 'text-mint'}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="https://app.trada.app.br/register"
                  className={`mt-8 w-full py-4 rounded-xl font-bold transition-all duration-300 block text-center
                    ${isCenter 
                      ? 'bg-caribbean text-rich-black hover:bg-meadow shadow-lg shadow-caribbean/20' 
                      : 'bg-basil text-flash-white hover:bg-bang-green'
                    }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination dots for mobile awareness */}
      <div className="flex gap-3 mt-12 z-10">
        {plans.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-8 bg-caribbean' : 'w-2 bg-basil'
            }`}
            aria-label={`Go to plan ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
