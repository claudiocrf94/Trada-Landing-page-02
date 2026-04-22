import { Instagram } from 'lucide-react';
// We will use a custom SVG for WhatsApp since lucide doesn't have an official brand one, 
// but wait, let's use a generic MessageCircle for Whatsapp for now, or build an SVG path for it.
// Actually, Lucide doesn't have Whatsapp or Instagram officially as brand icons, let's check.
// Wait, Lucide DOES have Instagram. No WhatsApp. So we use an SVG.

export default function Footer() {
  return (
    <footer className="bg-rich-black border-t border-dark-green pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src="/logo-trada-new.png" 
              alt="Trada Logo" 
              className="h-[32px] w-auto object-contain scale-[2.5] md:scale-[3] origin-left mb-8"
            />
            <p className="text-stone text-sm max-w-sm mb-6 leading-relaxed">
              Sistema profissional de gestão e performance para operadores do mercado financeiro. Transforme dados em consistência métrica.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/trada.app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-green border border-pine flex items-center justify-center hover:bg-pine hover:border-caribbean transition-colors group">
                <Instagram className="w-4 h-4 text-stone group-hover:text-caribbean transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-green border border-pine flex items-center justify-center hover:bg-pine hover:border-caribbean transition-colors group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-stone group-hover:text-caribbean transition-colors">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-flash-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-stone">
              <li><a href="https://app.trada.app.br/backtest" className="hover:text-caribbean transition-colors">Sistema de Backtest</a></li>
              <li><a href="https://app.trada.app.br/trades" className="hover:text-caribbean transition-colors">Diário de Trading</a></li>
              <li><a href="https://app.trada.app.br/analytics" className="hover:text-caribbean transition-colors">Análises de Performance</a></li>
              <li><a href="https://app.trada.app.br/planos" className="hover:text-caribbean transition-colors">Planos de Assinatura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-flash-white font-bold mb-6">Suporte e Legal</h4>
            <ul className="space-y-4 text-sm text-stone">
              <li><a href="#" className="hover:text-caribbean transition-colors">Central de Ajuda (FAQ)</a></li>
              <li><a href="#" className="hover:text-flash-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-flash-white transition-colors">Política de Privacidade</a></li>
              <li><a href="mailto:contato@trada.app" className="hover:text-flash-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Risk Warning Disclaimer */}
        <div className="border-t border-pine pt-8 pb-6">
          <h5 className="text-xs uppercase font-bold text-stone mb-3 tracking-widest">Aviso de Risco Legal</h5>
          <p className="text-[11px] text-stone/60 leading-relaxed text-justify mb-4">
            A negociação de instrumentos financeiros como B3 (Ações, Mini Índice, Mini Dólar), Forex e CFDs envolve um alto grau de risco e pode não ser adequada para todos os investidores. O alto grau de alavancagem pode trabalhar tanto contra você quanto a seu favor. Antes de decidir investir ou operar nestes mercados, você deve considerar cuidadosamente seus objetivos de investimento, nível de experiência e apetite ao risco. Existe a possibilidade de que você possivelmente venha a perder parte ou a totalidade de seu investimento inicial, portanto você não deve investir dinheiro que não possa perder. 
          </p>
          <p className="text-[11px] text-stone/60 leading-relaxed text-justify">
            O <strong>TRADA</strong> é um software de gestão pessoal e análise estatística para traders independentes e educadores. Nenhuma métrica gerada pela nossa plataforma deve ser caracterizada como recomendação de compra, venda ou retenção de ativos (call). Rendimentos passados documentados em backtests ou contas simuladas não são garantia de desempenho futuro ao vivo no mercado financeiro real.
          </p>
        </div>

        <div className="border-t border-pine pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone/80">
          <p>&copy; {new Date().getFullYear()} Trada System. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            Desenvolvido com tecnologia de alta performance.
          </div>
        </div>
      </div>
    </footer>
  );
}
