import React from 'react';
import { Brain, Cpu, ShieldCheck, Database, Zap, BarChart3, TrendingUp, DollarSign, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const items = [
    { 
      icon: Brain, 
      title: 'Business Intelligence & LLMs', 
      desc: 'Transforme sua base de dados em um Oráculo Corporativo. Treinamos modelos que analisam P&L, Fluxo de Caixa e Tendências de Mercado em tempo real.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      accent: 'from-violet-600 to-fuchsia-600',
      impact: 'Redução de CAC e Aumento de Conversão',
      stat: '+35% Taxa de Conversão'
    },
    { 
      icon: Cpu, 
      title: 'Automação de Processos (RPA+AI)', 
      desc: 'Elimine o "back-office" manual. Agentes autônomos que operam ERPs e CRMs para faturamento, folha e logística sem intervenção humana.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      accent: 'from-cyan-500 to-blue-600',
      impact: 'Redução de Custo Operacional (OpEx)',
      stat: '-40% Folha Administrativa'
    },
    { 
      icon: Database, 
      title: 'Data Lakes & Infraestrutura', 
      desc: 'Arquitetura de dados pronta para escala global. Unifique fontes de dados fragmentadas para criar uma "Single Source of Truth" para a diretoria.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      accent: 'from-fuchsia-500 to-pink-600',
      impact: 'Velocidade de Tomada de Decisão',
      stat: 'Reports em Real-time'
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-fuchsia-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm font-sans">Resultados Comprovados</h2>
            <h3 className="text-3xl md:text-6xl font-bold text-white leading-tight font-sans">
              Tecnologia focada em <br/>
              <span className="neon-text-gradient">Performance Financeira.</span>
            </h3>
          </div>
          <p className="text-slate-400 text-base md:text-lg max-w-md mt-6 md:mt-0 border-l-2 border-violet-900/50 pl-6">
            Não vendemos hype. Entregamos infraestrutura de IA que impacta diretamente a última linha do seu balanço (Bottom Line).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-auto min-h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black border border-white/5 flex flex-col"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-20 lg:opacity-40 lg:group-hover:opacity-20 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col justify-end z-10 flex-grow h-full">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform border border-white/20`}>
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white"/>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors leading-tight font-sans">
                  {item.title}
                </h4>
                
                <p className="text-slate-300 leading-relaxed mb-6 text-base md:text-lg opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-75 font-light">
                  {item.desc}
                </p>

                {/* Business Impact Box */}
                <div className="bg-white/5 border-t border-white/10 pt-4 mt-auto opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-100 rounded-xl p-4 lg:p-0 lg:bg-transparent lg:border-none lg:pt-4">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-sans">Impacto no Negócio</div>
                    <div className="text-white font-medium text-sm mb-3">{item.impact}</div>
                    <div className="flex items-center gap-2 text-fuchsia-400 font-bold text-lg font-sans">
                        <TrendingUp className="w-5 h-5" />
                        {item.stat}
                    </div>
                </div>
              </div>
              
              {/* Bottom Border Gradient */}
              <div className={`h-1 w-full lg:w-0 lg:group-hover:w-full bg-gradient-to-r ${item.accent} transition-all duration-700 absolute bottom-0 left-0 z-20`}></div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none group-hover:border-white/30 transition-colors z-20"></div>
            </div>
          ))}
        </div>

        {/* Secondary Grid - Key Business Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
           {[
             {icon: BarChart3, label: 'KPIs em Tempo Real', text: 'Dashboards executivos automatizados.'},
             {icon: ShieldCheck, label: 'Segurança Enterprise', text: 'Dados protegidos e compliance LGPD.'},
             {icon: Zap, label: 'Time-to-Value', text: 'Resultados visíveis em < 30 dias.'},
           ].map((mini, i) => (
             <div key={i} className="flex items-center gap-4 p-4 md:p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-fuchsia-500/30 transition-all group">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-fuchsia-500/20 transition-colors shrink-0">
                    <mini.icon className="w-6 h-6 text-slate-400 group-hover:text-fuchsia-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-base md:text-lg font-sans">{mini.label}</div>
                  <div className="text-slate-500 text-xs md:text-sm mt-1">{mini.text}</div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Services;