import { motion } from 'motion/react';
import { TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="benefits" className="py-24 bg-dark-green relative border-t border-pine/50">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-caribbean/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-flash-white">
            Resultados que Falam por Si
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Traders que implementam o Trada eliminam até 80% das falhas operacionais por descontrole emocional em 30 dias.
          </p>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-4xl font-black text-flash-white mb-2">+42%</div>
            <p className="text-stone text-sm">Aumento médio de assertividade no 1º mês monitorado.</p>
          </div>
          
          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <Target className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-4xl font-black text-flash-white mb-2">94%</div>
            <p className="text-stone text-sm">De redução em execuções de Over-Trading identificadas.</p>
          </div>

          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <Users className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-4xl font-black text-flash-white mb-2">+10k</div>
            <p className="text-stone text-sm">Contas e portfólios orquestrados ativamente.</p>
          </div>

          <div className="bg-caribbean/10 border border-caribbean/30 p-8 rounded-3xl backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-xl font-bold text-flash-white mb-2 mt-2">Tecnologia Validada</div>
            <p className="text-mint text-sm">Algoritmo testado por traders prop e analistas CMT globais.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "O Trada me forçou a ser profissional. As estatísticas de Fuga de Plano me mostraram que eu entregava 60% do meu lucro na hora errada do dia.",
              name: "Marcelo F.",
              role: "Trader de B3 (Índice)",
              initials: "MF"
            },
            {
              quote: "Achei que o Excel resolvia minha vida até ver o cruzamento de dados de setup vs. meu estado emocional. É um divisor de águas absurdo.",
              name: "Eduardo S.",
              role: "Forex & XAUUSD",
              initials: "ES"
            },
            {
              quote: "A possibilidade de visualizar todas as estatísticas dos meus alunos em tempo real otimizou minhas mentorias e cortou meu tempo de análise pela metade.",
              name: "Camila T.",
              role: "Mentora de Traders",
              initials: "CT"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-pine/20 border border-pine p-8 rounded-3xl flex flex-col justify-between">
              <p className="text-stone italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-basil flex items-center justify-center text-caribbean font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-flash-white text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-mint uppercase tracking-wider">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
