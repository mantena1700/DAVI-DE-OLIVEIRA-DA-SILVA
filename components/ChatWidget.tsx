import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { getBusinessAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a IA da Dom Seven. Como posso ajudar a acelerar seu negócio hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getBusinessAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, tive um erro técnico. Tente novamente.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-in-up backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-950 to-black border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">D7 Assistant</div>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-black/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-cyan-600 text-white rounded-tr-sm' 
                      : 'bg-[#1a1a1a] text-slate-200 border border-white/10 rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-tl-sm border border-white/10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                  <span className="text-xs text-slate-500">Pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-[#050505] border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua pergunta..."
                className="w-full bg-[#111] text-white text-sm rounded-xl pl-4 pr-10 py-3 border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-cyan-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[10px] text-center text-slate-600 mt-2">
              Powered by Gemini 2.5 Flash
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen ? 'bg-[#1a1a1a] text-white rotate-90' : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white animate-pulse-glow'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;
