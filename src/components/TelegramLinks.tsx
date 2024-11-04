import React from 'react';
import { MessageCircle, Bot, ArrowUpRight } from 'lucide-react';

export function TelegramLinks() {
  return (
    <section className="py-4 sm:py-8 relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Grid Background Animation */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-animate" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Присоединяйтесь к CoinSkill</h3>
                <p className="text-gray-300">Получите доступ к эксклюзивным материалам</p>
              </div>

              {/* Telegram Links */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Telegram Channel */}
                <a 
                  href="https://t.me/coinskill" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 group"
                >
                  <div className="relative glass-effect bg-gradient-to-br from-blue-600/20 to-blue-400/10 hover:to-blue-500/20 p-4 rounded-xl transition-all flex items-center gap-3 hover:-translate-y-1 duration-300 border border-blue-500/10 hover:border-blue-500/30">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-500">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs sm:text-sm font-bold text-blue-400">@coinskill</span>
                        <div className="px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] text-blue-400 font-medium">
                          канал
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold mb-0.5 flex items-center gap-1.5 sm:gap-2 truncate text-white">
                        <span className="truncate">Telegram канал</span>
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 truncate">Аналитика и обучение</p>
                    </div>
                  </div>
                </a>

                {/* Telegram Bot */}
                <a 
                  href="https://t.me/coinskill_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 group"
                >
                  <div className="relative glass-effect bg-gradient-to-br from-blue-600/20 to-blue-400/10 hover:to-blue-500/20 p-4 rounded-xl transition-all flex items-center gap-3 hover:-translate-y-1 duration-300 border border-blue-500/10 hover:border-blue-500/30">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-500">
                      <Bot className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs sm:text-sm font-bold text-blue-400">@coinskill_bot</span>
                        <div className="px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] text-blue-400 font-medium">
                          бот
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold mb-0.5 flex items-center gap-1.5 sm:gap-2 truncate text-white">
                        <span className="truncate">Telegram бот</span>
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 truncate">Торговые сигналы 24/7</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">Уже более 50,000+ подписчиков</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}