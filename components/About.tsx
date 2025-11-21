import React from 'react';
import { CheckCircle, TrendingUp, Target, Globe, Lock } from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'Google Cloud Vertex AI', 'AWS SageMaker', 'Docker', 'Kubernetes', 'LangChain', 'PostgreSQL'
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-b from-cyan-900/10 to-purple-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl">
            <div className="grid lg:grid-cols-2">
               {/* Image Section */}
               <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                  <img 
                    // Imagem profissional de reunião executiva / estratégica
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
                    alt="Executive Strategic Meeting" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                  />
                  
                  <div className="absolute bottom-10 left-6 md:left-10 z-20">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-full border border-white/10 mb-4">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Estratégia & Resultados</span>
                    </div>
                  </div>
               </div>

               {/* Content Section */}
               <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center relative">
                  {/* Subtle grid background */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Seu Parceiro de Negócios</h2>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 relative z-10 font-light">
                     Enquanto o mercado foca em "prompts", nós focamos em <strong>vantagem competitiva sustentável</strong>. A Dom Seven combina engenharia de software de elite com visão estratégica de negócios para entregar soluções que se pagam em meses, não anos.
                  </p>
                  
                  <div className="space-y-4 md:space-y-6 relative z-10 mb-10 md:mb-12">
                     {[
                        {icon: TrendingUp, text: 'Aumento real de Margem de Lucro'},
                        {icon: Lock, text: 'Modelos proprietários e Auditáveis (White-box)'},
                        {icon: Globe, text: 'Integração com SAP, Salesforce e Oracle'}
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                           <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <item.icon className="w-5 h-5 text-cyan-400" />
                           </div>
                           <span className="text-slate-200 text-sm md:text-base font-medium">{item.text}</span>
                        </div>
                     ))}
                  </div>

                  {/* Tech Stack Ticker */}
                  <div className="relative z-10 border-t border-white/10 pt-6 md:pt-8">
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">Tecnologias Enterprise</p>
                      <div className="flex flex-wrap gap-3">
                          {techStack.map((tech, i) => (
                              <span key={i} className="text-xs font-mono text-slate-500 px-3 py-1 rounded border border-white/5 bg-black hover:border-cyan-500/30 transition-colors">
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default About;