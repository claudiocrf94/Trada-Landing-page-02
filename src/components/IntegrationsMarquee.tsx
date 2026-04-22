import { motion } from 'motion/react';

const platforms = [
  'B3 BRASIL', 'FOREX', 'XAUUSD', 'EURUSD', 
  'EURJPY', 'BTCUSD', 'GBPUSD', 'MINI DÓLAR', 'MINI ÍNDICE', 'NASDAQ'
];

export default function IntegrationsMarquee() {
  return (
    <div className="py-8 bg-rich-black border-b border-dark-green overflow-hidden flex relative">
      {/* Soft gradient masks on edges for smooth entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-rich-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rich-black to-transparent z-10" />

      <motion.div 
        className="flex gap-16 whitespace-nowrap px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* We duplicate the array to create a seamless infinite loop */}
        {[...platforms, ...platforms, ...platforms].map((platform, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-basil" />
            <span className="text-xl font-bold text-pine/80 tracking-widest">{platform}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
