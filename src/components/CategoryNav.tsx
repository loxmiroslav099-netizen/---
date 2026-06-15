import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

export function CategoryNav({ categories, activeCategory, setActiveCategory }: CategoryNavProps) {
  return (
    <div className="flex overflow-x-auto pb-4 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
            activeCategory === category
              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
              : 'bg-white/5 text-white/50 border border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
