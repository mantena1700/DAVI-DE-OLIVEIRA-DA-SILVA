import React from 'react';
import { ArrowRight, ChevronDown, DollarSign, ShieldCheck, Activity, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Video & Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse-glow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          // Vídeo mais leve e focado em "connections/data" em vez de globo
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-network-connection-lines-2999-large.mp4"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in-up mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-slate-200 uppercase tracking-[0.2em] font-sans">Consultoria Estratégica B2B</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] md:leading-[1] tracking-tight font-sans">
              Escale seu <br/>
              EBITDA com <br/>
              <div className="relative inline-block mt-2 md:mt-0 animate-slow-zoom origin-left">
                {/* Blur Backing for Glow Effect */}
                <span className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 opacity-30 blur-xl animate-pulse"></span>
                {/* Main Text with Moving Gradient */}
                <span className="relative animate-gradient-text pb-2 block">
                  Inteligência Artificial
                </span>
              </div>
            </h1>

            <p className="text-base md:text-xl text-slate-400 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
              Transformamos dados brutos em <strong className="text-white">inteligência de mercado</strong>. Nossa metodologia proprietária implementa agentes autônomos que reduzem o custo operacional (OpEx) e multiplicam a receita recorrente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="group w-full sm:w-auto px-8 py-4 md:py-5 bg-white text-black font-bold rounded-full transition-all hover:bg-cyan-50 hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase tracking-wider text-xs md:text-sm"
              >
                Agendar Reunião
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </button>
              
              <button 
                onClick={() => document.getElementById('roi-calculator')?.scrollIntoView({behavior: 'smooth'})}
                className="w-full sm:w-auto px-8 py-4 md:py-5 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3 group uppercase tracking-wider text-xs md:text-sm border border-white/20 hover:border-fuchsia-500/50"
              >
                Simular meu ROI
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 md:pt-8 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <ShieldCheck className="w-4 h-4"/> Enterprise Security
                </div>
                <div className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors">
                    <Activity className="w-4 h-4"/> 99.9% Uptime SLA
                </div>
                <div className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                    <Lock className="w-4 h-4"/> LGPD Compliant
                </div>
            </div>
          </div>

          {/* Right Visual Abstract - Financial Focus */}
          <div className="hidden lg:block relative h-[600px]">
             {/* ROI Card */}
             <div className="absolute top-20 right-0 w-80 p-6 glass-panel rounded-2xl rounded-tr-[4rem] animate-float shadow-2xl border-t border-l border-white/20 z-20 backdrop-blur-xl bg-black/60">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-fuchsia-900/20">
                      <DollarSign className="w-6 h-6 text-white" />
                   </div>
                   <div>
                      <div className="text-sm text-slate-400 font-bold uppercase tracking-wide">Projeção de ROI</div>
                      <div className="text-3xl text-white font-bold tracking-tight font-sans">+320% <span className="text-xs text-green-400 font-normal">/ano</span></div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between text-xs text-slate-400 font-medium uppercase">
                      <span>OpEx (Custo)</span>
                      <span className="text-fuchsia-400 flex items-center gap-1"><span className="rotate-180">▲</span> -45%</span>
                   </div>
                   <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 h-full rounded-full" style={{width: '30%'}}></div>
                   </div>
                   
                   <div className="flex justify-between text-xs text-slate-400 font-medium uppercase pt-2">
                      <span>MRR (Receita)</span>
                      <span className="text-cyan-400 flex items-center gap-1">▲ +112%</span>
                   </div>
                   <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{width: '85%'}}></div>
                   </div>
                </div>
             </div>

             {/* Efficiency Graph */}
             <div className="absolute bottom-20 left-10 w-80 p-6 bg-[#0a0a0a] rounded-2xl rounded-bl-[3rem] border border-white/10 animate-float shadow-2xl z-30" style={{animationDelay: '2s'}}>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Eficiência de Processos</div>
                  <div className="px-2 py-1 bg-violet-900/30 rounded text-xs text-violet-300 font-mono border border-violet-500/30">LIVE DATA</div>
                </div>
                <div className="flex items-end gap-2 h-28 mb-2">
                   {[30, 45, 40, 60, 55, 85, 95, 100].map((h, i) => (
                      <div key={i} style={{height: `${h}%`}} className="flex-1 bg-gradient-to-t from-violet-900/20 to-fuchsia-500 rounded-t-sm relative group hover:opacity-100 opacity-80 transition-all">
                      </div>
                   ))}
                </div>
                <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-2 uppercase">
                   <span>Q1</span>
                   <span>Q2</span>
                   <span>Q3</span>
                   <span>Q4 (PREV)</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block cursor-pointer" onClick={() => document.getElementById('expertise')?.scrollIntoView({behavior: 'smooth'})}>
        <ChevronDown className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity hover:text-fuchsia-400"/>
      </div>
    </section>
  );
};

export default Hero;