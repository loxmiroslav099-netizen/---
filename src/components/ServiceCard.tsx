import { motion } from 'motion/react';
import { ExternalLink, Users } from 'lucide-react';
import { AIService } from '../types';
import React from 'react';

interface ServiceCardProps {
  service: AIService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Безкоштовно': return 'bg-emerald-400/10 text-emerald-400';
      case 'Є безкоштовний тариф': return 'bg-indigo-400/10 text-indigo-400';
      case 'Платно': return 'bg-white/5 text-white/60';
      default: return 'bg-white/5 text-white/60';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="group bg-[#0f0f0f] border border-white/5 rounded-2xl p-5 hover:border-indigo-500/50 transition-all flex flex-col h-full relative cursor-pointer"
    >
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
            <span className="text-xl font-bold bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {service.name.charAt(0)}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {service.isTrending && (
               <span className="text-[9px] font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full border border-orange-400/20 flex items-center gap-1">
                 <span className="text-[10px]">🔥</span> Хіт
               </span>
            )}
            {service.isNew && (
               <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">Новинка</span>
            )}
            <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-widest border border-white/5 ${getPricingColor(service.pricing)}`}>
              {service.pricing}
            </span>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-white mb-1">{service.name}</h4>

        <p className="text-xs text-white/50 leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        <div className="text-white/40 text-[11px] mb-6 line-clamp-2 leading-relaxed">
          {service.longDescription}
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className="text-[9px] px-2 py-1 bg-white/5 rounded text-white/60">
              {service.category}
            </span>
            {service.monthlyUsers && (
              <span className="text-[9px] text-white/40 flex items-center gap-1">
                <Users className="w-3 h-3" /> {service.monthlyUsers}
              </span>
            )}
          </div>
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Відвідати <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
