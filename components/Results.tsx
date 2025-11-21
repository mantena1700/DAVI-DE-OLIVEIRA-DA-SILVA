import React from 'react';
import { ArrowUpRight, Users, Database, Shield, Clock } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-sans">
              Não é mágica.<br/>
              É <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Engenharia de Negócios.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              Nossa abordagem é agnóstica à tecnologia e obcecada por resultados. Se não aumenta o faturamento ou reduz o custo, não implementamos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-[#0f0f0f] p-4 md:p-6 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors font-sans">40%</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">Média de Redução de OpEx</div>
            </div>
            <div className="bg-[#0f0f0f] p-4 md:p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors font-sans">3.5x</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">ROI Médio (12 meses)</div>
            </div>
            <div className="bg-[#0f0f0f] p-4 md:p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors font-sans">24/7</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">Disponibilidade Operacional</div>
            </div>
            <div className="bg-[#0f0f0f] p-4 md:p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors font-sans">0%</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">Alucinação em Dados Críticos</div>
            </div>
          </div>
        </div>

        {/* Market Sectors */}
        <div className="space-y-8">
            <h3 className="text-lg md:text-xl font-bold text-white border-l-4 border-fuchsia-500 pl-4 font-sans">Impacto por Setor</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        sector: "Fintech & Serviços Financeiros",
                        metric: "Automação de Compliance",
                        value: "+85%",
                        icon: Shield,
                        desc: "Redução drástica em falsos positivos de fraude e automação de onboarding KYC."
                    },
                    {
                        sector: "Varejo & E-commerce",
                        metric: "Aumento de LTV (Lifetime Value)",
                        value: "+22%",
                        icon: Users,
                        desc: "Hiper-personalização de ofertas em tempo real baseadas em histórico de compra."
                    },
                    {
                        sector: "Indústria & Logística",
                        metric: "Redução de Downtime",
                        value: "-30%",
                        icon: Clock,
                        desc: "Manutenção preditiva e otimização de rotas de supply chain com modelos de visão computacional."
                    }
                ].map((item, i) => (
                    <div key={i} className="p-6 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:bg-white/5 transition-all duration-300 cursor-default group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/5 rounded-xl text-slate-400 group-hover:text-white group-hover:bg-fuchsia-500/20 transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div className="text-right">
                                <div className="text-xl md:text-2xl font-bold text-white font-sans">{item.value}</div>
                                <div className="text-[10px] text-fuchsia-400 uppercase font-bold tracking-wider">{item.metric}</div>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 font-sans">{item.sector}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Results;