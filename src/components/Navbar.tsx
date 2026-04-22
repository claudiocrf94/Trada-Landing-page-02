import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-rich-black/60 backdrop-blur-xl border-b border-pine/30">
      <a href="#" className="flex items-center gap-3">
        <img 
          src="/logo-trada-new.png" 
          alt="Trada Logo" 
          className="h-[36px] w-auto object-contain scale-[2.5] md:scale-[3] origin-left"
        />
      </a>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone">
        <a href="#features" className="hover:text-caribbean transition-colors">Sistema</a>
        <a href="#benefits" className="hover:text-caribbean transition-colors">Benefícios</a>
        <a href="#pricing" className="hover:text-caribbean transition-colors">Planos</a>
      </div>

      <a href="https://app.trada.app.br/login" className="px-6 py-2.5 text-sm font-bold bg-flash-white text-rich-black rounded-full hover:bg-caribbean transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,223,129,0.3)]">
        Conecte-se
      </a>
    </nav>
  );
}
