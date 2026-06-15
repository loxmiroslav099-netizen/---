/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useMemo, useState } from 'react';
import { CategoryNav } from './components/CategoryNav';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { Footer } from './components/Footer';
import { aiServices } from './data';
import { Category } from './types';

const CATEGORIES: Category[] = ['Всі', 'Текст', 'Зображення', 'Відео', 'Аудіо', 'Програмування', 'Інше'];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('Всі');

  const filteredServices = useMemo(() => {
    return aiServices.filter((service) => {
      const matchesCategory = activeCategory === 'Всі' || service.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        service.name.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.longDescription.toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#050505] bg-grid-pattern flex flex-col font-sans relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Hero Section */}
          <div className="relative mb-12 rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md p-8 md:p-12">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-wider uppercase text-indigo-400 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Оновлено сьогодні</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
                Знайдіть ідеальний <br />
                <span className="font-serif italic bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">ШІ-інструмент</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                Кураторська колекція найкращих нейромереж для роботи, творчості та розробки. Від генерації текстів до створення кінематографічних відео.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-white text-black rounded-lg text-sm font-bold hover:bg-neutral-200 transition-colors"
              >
                Почати дослідження
              </button>
            </div>
          </div>

          <CategoryNav 
            categories={CATEGORIES} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-lg font-light text-white mb-2">Нічого не знайдено</h3>
            <p className="text-white/40 text-sm">Спробуйте змінити пошуковий запит або категорію.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Всі');
              }}
              className="mt-6 px-5 py-2.5 bg-indigo-600/20 text-indigo-400 rounded-full text-xs font-bold hover:bg-indigo-600/30 transition-colors border border-indigo-500/20"
            >
              Скинути фільтри
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/40 to-black p-10 overflow-hidden text-center flex flex-col items-center">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
           <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 relative z-10">Творці нейромереж?</h2>
           <p className="text-white/50 max-w-lg mb-8 relative z-10 text-sm md:text-base">
             Додайте свій ШІ-інструмент до нашого каталогу, щоб отримати доступ до тисяч розробників та ентузіастів зі всієї країни.
           </p>
           <button className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
             Подати заявку <ArrowRight className="w-4 h-4" />
           </button>
        </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

