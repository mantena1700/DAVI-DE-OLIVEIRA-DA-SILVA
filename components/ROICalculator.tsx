import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, ArrowRight, PieChart } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(500000);
  const [employees, setEmployees] = useState(50);
  const [inefficiency, setInefficiency] = useState(20);
  
  const [savings, setSavings] = useState(0);
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    const avgCostPerEmployee = 8000;
    const operationalCost = employees * avgCostPerEmployee;
    const calculatedSavings = (operationalCost * (inefficiency / 100)) * 12;
    const calculatedGrowth = (revenue * 12) * 0.15;

    setSavings(calculatedSavings);
    setGrowth(calculatedGrowth);
  }, [revenue, employees, inefficiency]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section id="roi-calculator" className="py-16 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-xs font-bold uppercase mb-6 tracking-widest">
            <Calculator className="w-3 h-3" />
            Simulador Financeiro
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">Quanto dinheiro você está <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">deixando na mesa?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-light">
            A ineficiência operacional custa caro. Use nossa calculadora proprietária baseada em dados de 50+ implementações para estimar seu potencial de ganho com IA.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden group neon-border-gradient">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-600/20 transition-colors duration-700"></div>
            
            <div className="space-y-8 md:space-y-10 relative z-10">
              
              {/* Input 1 */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 font-medium flex items-center gap-2 font-sans text-sm md:text-base">
                    <DollarSign className="w-4 h-4 text-fuchsia-500"/> Faturamento Mensal
                  </label>
                  <span className="text-white font-mono font-bold text-base md:text-lg">{formatCurrency(revenue)}</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="5000000" 
                  step="50000" 
                  value={revenue} 
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 hover:accent-fuchsia-400 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-600 mt-2 font-mono">
                  <span>R$ 50k</span>
                  <span>R$ 5M+</span>
                </div>
              </div>

              {/* Input 2 */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 font-medium flex items-center gap-2 font-sans text-sm md:text-base">
                    <PieChart className="w-4 h-4 text-violet-500"/> Número de Colaboradores
                  </label>
                  <span className="text-white font-mono font-bold text-base md:text-lg">{employees}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  step="5" 
                  value={employees} 
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-500 hover:accent-violet-400 transition-all"
                />
              </div>

              {/* Input 3 */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 font-medium flex items-center gap-2 font-sans text-sm md:text-base">
                    <TrendingUp className="w-4 h-4 text-cyan-400"/> Taxa de Processos Manuais (%)
                  </label>
                  <span className="text-white font-mono font-bold text-base md:text-lg">{inefficiency}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="5" 
                  value={inefficiency} 
                  onChange={(e) => setInefficiency(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
                />
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  *Estimativa de tempo gasto pela equipe em tarefas repetitivas (ex: data entry, relatórios manuais, atendimento L1).
                </p>
              </div>

            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Savings */}
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500 group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <DollarSign className="w-24 h-24 text-fuchsia-500" />
              </div>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 font-sans">Redução de Custo Anual (OpEx)</h3>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight font-sans break-words">
                {formatCurrency(savings)}
              </div>
              <p className="text-fuchsia-400 text-sm flex items-center gap-1 font-medium">
                <TrendingUp className="w-4 h-4" />
                Dinheiro recuperado
              </p>
            </div>

            {/* Card 2: Growth */}
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp className="w-24 h-24 text-cyan-500" />
              </div>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 font-sans">Potencial de Receita Extra / Ano</h3>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight font-sans break-words">
                {formatCurrency(growth)}
              </div>
              <p className="text-cyan-400 text-sm font-medium">
                Impacto em Vendas & Retenção
              </p>
            </div>

            {/* CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-slate-300 mb-4 text-sm">
                Esses números são conservadores. Nossos clientes frequentemente superam essas marcas em <strong className="text-white">3 a 6 meses</strong>.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 font-sans uppercase tracking-wide text-sm"
              >
                Validar números com consultor
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;