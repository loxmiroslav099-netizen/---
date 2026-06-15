import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-12 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-white italic">ШІ-Каталог</h2>
              <p className="text-[11px] text-white/40">Оновлюється щотижня</p>
            </div>
          </div>
          
          <div className="flex gap-6 text-[11px] font-bold tracking-widest uppercase text-white/40">
            <a href="#" className="hover:text-indigo-400 transition-colors">Про нас</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Правила</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Додати ШІ</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Контакти</a>
          </div>

          <div className="text-[11px] text-white/40 flex items-center gap-1.5">
            Зроблено з <Heart className="w-3 h-3 text-pink-500" /> для ком'юніті
          </div>
        </div>
      </div>
    </footer>
  );
}
