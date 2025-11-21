import React, { useState } from 'react';
import { Check, Mail, MapPin, Phone, ArrowRight, TrendingUp } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulation
    setTimeout(() => {
      setFormStatus('sent');
      if(formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-900/20 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase mb-6 tracking-widest">
                <TrendingUp className="w-3 h-3" />
                Pronto para crescer?
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">Vamos escalar sua operação.</h2>
             <p className="text-slate-400 text-base md:text-xl mb-10 md:mb-12 font-light">
                Agende um diagnóstico gratuito de 30 minutos. Vamos identificar oportunidades claras de ganho financeiro com IA no seu negócio.
             </p>

             <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fuchsia-600 transition-colors border border-white/5 shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                   </div>
                   <div className="overflow-hidden">
                      <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-wider font-sans">Email Comercial</div>
                      <div className="text-base md:text-xl text-white font-medium truncate">{CONTACT_EMAIL}</div>
                   </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-600 transition-colors border border-white/5 shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                   </div>
                   <div>
                      <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-wider font-sans">Telefone / WhatsApp</div>
                      <div className="text-base md:text-xl text-white font-medium">(85) 98701-2368</div>
                   </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-600 transition-colors border border-white/5 shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                   </div>
                   <div>
                      <div className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-wider font-sans">Headquarters</div>
                      <div className="text-base md:text-xl text-white font-medium">Fortaleza - CE</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-white/10 relative shadow-2xl neon-border-gradient mt-8 lg:mt-0">
             {formStatus === 'sent' ? (
               <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up py-12">
                 <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/30">
                   <Check className="w-10 h-10"/>
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4 font-sans">Solicitação Recebida</h3>
                 <p className="text-slate-400 text-lg">Nossos consultores analisarão seu perfil e entrarão em contato em breve para agendar a reunião.</p>
                 <button onClick={() => setFormStatus('idle')} className="mt-8 text-fuchsia-400 font-bold hover:text-white transition-colors font-sans uppercase text-sm">
                    Enviar nova solicitação
                 </button>
               </div>
             ) : (
               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest font-sans">Nome Completo</label>
                    <input required className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white text-base transition-all animate-focus-pulse focus:bg-white/5" placeholder="Ex: João Silva" />
                 </div>
                 
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest font-sans">Email Corporativo</label>
                    <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white text-base transition-all animate-focus-pulse focus:bg-white/5" placeholder="joao@suaempresa.com" />
                 </div>
                 
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest font-sans">Desafio de Negócio</label>
                    <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white text-base transition-all resize-none animate-focus-pulse focus:bg-white/5" placeholder="Qual o principal gargalo ou meta de faturamento atual?"></textarea>
                 </div>
                 
                 <button 
                   type="submit" 
                   disabled={formStatus === 'sending'} 
                   className="w-full py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-fuchsia-50 transition-all flex items-center justify-center gap-2 mt-4 group shadow-[0_0_30px_rgba(255,255,255,0.2)] font-sans uppercase tracking-wide"
                 >
                   {formStatus === 'sending' ? 'Processando...' : 'Agendar Diagnóstico Gratuito'}
                   {!formStatus && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                 </button>
               </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;