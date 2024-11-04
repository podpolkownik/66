import React from 'react';
import { Zap } from 'lucide-react';

export function BrandBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-gradient"></div>
        <div className="relative bg-black rounded-full p-3 flex items-center gap-2 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <Zap className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pr-1">
            CoinSkill
          </span>
        </div>
      </div>
    </div>
  );
}