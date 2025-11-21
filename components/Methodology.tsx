import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { 
      number: '01', 
      title: 'Diagnóstico de Lucratividade', 
      desc: 'Mapeamos onde você está perdendo dinheiro ou tempo. Identificamos gargalos que a IA pode resolver imediatamente.' 
    },
    { 
      number: '02', 
      title: 'Arquitetura de Solução', 
      desc: 'Desenhamos a solução técnica com foco em custo-benefício. Definimos o ROI esperado antes de escrever uma linha de código.' 
    },
    { 
      number: '03', 
      title: 'Desenvolvimento Ágil', 
      desc: 'Sprints curtos de 15 dias. Você vê o sistema funcionando e gerando valor rapidamente, sem esperar meses pelo "go-live".' 
    },
    { 
      number: '04', 
      title: 'Escala & Otimização', 
      desc: 'Colocamos em produção, monitoramos métricas financeiras e refinamos os modelos para aumentar a margem continuamente.' 
    }
  ];

  return (
    <section id="methodology" className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">Metodologia <span className="neon-text-gradient">Dom Seven</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">Um processo estruturado para mitigar riscos e acelerar o retorno sobre o investimento (ROI) da sua empresa.</p>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-600 to-transparent -translate-y-1/2 z-0"></div>

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-transparent via-violet-600 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((m, i) => (
              <div key={i} className="relative group pl-14 md:pl-0">
                {/* Dot on line (Desktop) */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-fuchsia-500 rounded-full z-10 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(232,121,249,0.8)]"></div>
                
                {/* Dot on line (Mobile) */}
                <div className="md:hidden absolute top-8 left-6 -translate-x-1/2 w-4 h-4 bg-black border-2 border-fuchsia-500 rounded-full z-10 shadow-[0_0_10px_rgba(232,121,249,0.8)]"></div>
                
                <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-4 h-full flex flex-col relative z-20 backdrop-blur-sm md:mt-12 md:group-odd:-mt-24 shadow-lg">
                   <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent absolute top-4 right-4 select-none font-sans">
                    {m.number}
                  </span>
                  
                  <div className="mt-auto pt-8 md:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 font-sans">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;