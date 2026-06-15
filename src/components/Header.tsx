import { Search, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="bg-[#0a0a0a] border-b border-white/10 sticky top-0 z-10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white italic">ШІ-Каталог</h1>
              <p className="text-xs text-white/40">Найкращі нейромережі та сервіси</p>
            </div>
          </div>
          
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-white/40" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 sm:text-sm transition-colors"
              placeholder="Пошук нейромереж..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
