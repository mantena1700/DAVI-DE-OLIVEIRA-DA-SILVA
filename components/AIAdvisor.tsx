import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot, Terminal, X, Maximize2, Minus } from 'lucide-react';
import { getBusinessAdvice } from '../services/geminiService';
import { AdviserState } from '../types';

const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [state, setState] = useState<AdviserState>(AdviserState.IDLE);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setState(AdviserState.LOADING);
    setResponse('');

    try {
      const result = await getBusinessAdvice(input);
      setResponse(result);
      setState(AdviserState.SUCCESS);
    } catch (error) {
      setResponse("Erro na conexão com o mainframe. Tente novamente.");
      setState(AdviserState.ERROR);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 md:py-32 bg-black relative border-y border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-900/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
        
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM_ONLINE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">D7 Intelligence Core</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
            Conecte-se diretamente com nossa API estratégica. Descreva seu cenário atual e receba uma análise preliminar baseada em dados.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-colors">
                <div className="text-xl md:text-2xl font-bold text-white mb-1 font-sans">2.5 Flash</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Modelo Ativo</div>
             </div>
             <div className="p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="text-xl md:text-2xl font-bold text-white mb-1 font-sans">1M+</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Tokens/Request</div>
             </div>
          </div>
        </div>

        {/* Terminal Interface */}
        <div className="lg:col-span-3 relative group">
           <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 rounded-[2rem] opacity-30 blur transition duration-1000 group-hover:opacity-50 group-hover:blur-md"></div>
           
           <div className="relative bg-[#0c0c0c] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col min-h-[350px] md:min-h-[500px]">
              {/* Terminal Header */}
              <div className="bg-[#151515] px-6 py-4 flex items-center justify-between border-b border-white/5">
                 <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="ml-3 text-xs text-slate-500 font-mono flex items-center gap-2">
                       <Terminal className="w-3 h-3" />
                       root@dom-seven:~
                    </div>
                 </div>
                 <div className="text-xs text-slate-600 font-mono">BASH</div>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 p-4 md:p-6 font-mono text-xs md:text-sm overflow-y-auto custom-scrollbar relative max-h-[250px] md:max-h-[400px]">
                 {/* Grid background for terminal */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                 <div className="relative z-10 space-y-6">
                    <div className="text-slate-500">
                       <span className="text-fuchsia-500">➜</span> <span className="text-violet-400">~</span> inicializando protocolo de consultoria...<br/>
                       <span className="text-fuchsia-500">➜</span> <span className="text-violet-400">~</span> aguardando input do usuário...
                    </div>

                    {state === AdviserState.LOADING && (
                       <div className="flex items-center gap-2 text-cyan-400">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>processando dados via Gemini API...</span>
                       </div>
                    )}

                    {(state === AdviserState.SUCCESS || state === AdviserState.ERROR) && (
                       <div className="animate-fade-in-up">
                          <div className="border-l-2 border-fuchsia-500/50 pl-4 py-2 bg-fuchsia-900/10 rounded-r-xl mb-4">
                             <span className="text-xs text-slate-500 block mb-1">// RESPOSTA DO SISTEMA</span>
                             <p className="text-slate-300 whitespace-pre-line leading-relaxed">{response}</p>
                          </div>
                       </div>
                    )}
                    
                    <div ref={responseRef}></div>
                 </div>
              </div>

              {/* Input Area with Pulse Animation */}
              <div className="p-4 bg-[#0a0a0a] border-t border-white/10">
                 <form onSubmit={handleSubmit} className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-fuchsia-500 font-mono">➜</span>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Digite seu desafio de negócio..."
                      className="w-full bg-[#111] text-white font-mono text-base md:text-sm rounded-xl pl-10 pr-12 py-4 border border-white/10 transition-all shadow-inner animate-focus-pulse focus:border-fuchsia-500/50"
                      disabled={state === AdviserState.LOADING}
                    />
                    <button
                      type="submit"
                      disabled={state === AdviserState.LOADING || !input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                 </form>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AIAdvisor;