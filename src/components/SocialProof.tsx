import { motion } from 'motion/react';
import { Flag, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="benefits" className="py-24 bg-dark-green relative border-t border-pine/50">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-caribbean/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-flash-white">
            Números que Falam por Si
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Traders que implementam o Trada eliminam até 80% das falhas operacionais por descontrole emocional em 30 dias.
          </p>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <Flag className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-3xl font-black text-flash-white mb-2">100% PT-BR</div>
            <p className="text-stone text-sm">Primeiro diário profissional nativo para traders brasileiros</p>
          </div>
          
          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <Layers className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-3xl font-black text-flash-white mb-2">4 mercados</div>
            <p className="text-stone text-sm">B3, Forex, Crypto e Ações em um só lugar</p>
          </div>

          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-3xl font-black text-flash-white mb-2">IA Coach</div>
            <p className="text-stone text-sm">Relatório semanal personalizado gerado por inteligência artificial</p>
          </div>

          <div className="bg-rich-black/50 border border-bang-green p-8 rounded-3xl backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-caribbean mb-4" />
            <div className="text-3xl font-black text-flash-white mb-2">Plano de Trading</div>
            <p className="text-stone text-sm">Defina suas regras e o sistema garante que você as siga</p>
          </div>
        </div>

        {/* Testimonials Replacement CTA */}
        <div className="flex flex-col items-center text-center mt-12 bg-pine/10 border border-pine/30 p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-caribbean/5 to-transparent pointer-events-none" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-flash-white mb-4 relative z-10">
            O que os traders dizem
          </h3>
          
          <p className="font-serif italic text-xl md:text-2xl text-stone mb-10 max-w-xl relative z-10">
            "Depoimentos reais em breve. Seja um dos primeiros a usar o Trada."
          </p>

          <a 
            href="https://app.trada.app.br/register" 
            className="relative z-10 h-14 px-10 rounded-full bg-caribbean text-rich-black font-bold text-lg hover:bg-meadow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,223,129,0.3)] flex items-center justify-center"
          >
            Começar gratuitamente
          </a>
        </div>

      </div>
    </section>
  );
}
