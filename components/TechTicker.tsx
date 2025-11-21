import React from 'react';

const TechTicker: React.FC = () => {
  // Using SVGs for cleaner look and no external image dependencies
  const logos = [
    {
      name: "Microsoft",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/></svg>
    },
    {
      name: "AWS",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M16.3 10.6c-1.1-.5-2.3-.8-3.5-.8-3.2 0-5.1 1.8-5.1 4.6s1.7 4.6 4.8 4.6c1.4 0 2.5-.3 3.4-.7v-2c-1 .5-2 .8-3 .8-1.5 0-2.3-.8-2.3-2.5 0-1.6.9-2.4 2.4-2.4.8 0 1.7.2 2.4.5v-2.1zM22.5 18.4h-2.2v-8h2.2v8zm-17-8h-2.3l-2.8 8h2.3l.6-2h2.8l.6 2h2.3l-3.5-8z"/></svg>
    },
    {
      name: "Google Cloud",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#4285F4" opacity="0.2"/><path d="M16 11.5h-3.5v2.5h2.3c-.3 1.1-1.3 2-2.3 2-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c.6 0 1.2.2 1.7.6l1.7-1.7C14.8 8.3 13.5 7.8 12 7.8c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2c2.6 0 4.9-1.8 5.2-4.2V11.5z"/></svg>
    },
    {
      name: "OpenAI",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1 .6765 6.1645 4.4585 4.4585 0 0 1-2.3419 1.9775V11.7608a.7664.7664 0 0 0-.3879-.6765zm-3.6627-6.9441l-2.0154-1.1686a.0804.0804 0 0 1-.038-.0568v-5.5873a4.4992 4.4992 0 0 1 7.3764-3.0516l-.142.0805-4.7783 2.7582a.7759.7759 0 0 0-.3927.6813zm-5.4298-.7144l5.8428 3.3685v-2.3324a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7913a4.4992 4.4992 0 0 1-2.3986-1.9965 4.4803 4.4803 0 0 1-3.7422 3.6429zM12 11.0537l-2.8717 1.6562 2.8717 1.6609 2.8717-1.6609z"/></svg>
    },
    {
      name: "Anthropic",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.4 19.2h-2.3l-3.6-10-3.6 10H5.6L10.6 5h1.8l5 14.2zm-8.4-2.9h5l-2.5-7-2.5 7z"/></svg>
    },
    {
      name: "Python",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M14.25.75l-.9.45.45 3.45h-5.1L6 7.5v2.4l3.3.15 2.1-2.1h3.6l.15 2.4-2.4 2.4H9.6l-2.4-.3-3.3 3.45.15 4.5 2.7 3.15 2.55.15.9-.45-.45-3.45h5.1l2.7-2.85v-2.4l-3.3-.15-2.1 2.1h-3.6l-.15-2.4 2.4-2.4h3.15l2.4.3 3.3-3.45-.15-4.5-2.7-3.15z" opacity="0.8"/></svg>
    },
    {
      name: "Databricks",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M21.9 4.5L12 0 2.1 4.5v15L12 24l9.9-4.5v-15zM12 2.2l8.1 3.7-8.1 3.7-8.1-3.7 8.1-3.7zm-9 4.6l8.1 3.7v8.4l-8.1-3.7V6.8zm9.9 12.1V10.5l8.1-3.7v7.4l-8.1 4.7z" opacity="0.7"/></svg>
    },
    {
      name: "Meta",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 6.6c-2.3 0-4.1 1.7-4.9 3.6-.5-1.6-2-2.7-3.8-2.7C1.5 7.5 0 9 0 10.8c0 1.9 1.5 3.4 3.3 3.4 1.7 0 3.2-1.1 3.7-2.7.8 1.9 2.6 3.6 4.9 3.6s4.1-1.7 4.9-3.6c.5 1.6 2 2.7 3.8 2.7 1.8 0 3.3-1.5 3.3-3.4s-1.5-3.4-3.3-3.4c-1.7 0-3.2 1.1-3.7 2.7-.8-1.9-2.6-3.6-4.9-3.6zm0 5c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7z"/></svg>
    }
  ];

  return (
    <div className="w-full bg-black border-b border-white/10 py-6 overflow-hidden relative z-20">
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        <div className="flex w-[200%] animate-scroll">
            {/* First Set */}
            <div className="flex w-1/2 justify-around items-center px-4">
                {logos.map((logo, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default group mx-6">
                        <div className="text-white group-hover:text-cyan-400 transition-colors">
                            {logo.svg}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors">
                            {logo.name}
                        </span>
                    </div>
                ))}
            </div>
            {/* Duplicate Set for Infinite Scroll */}
            <div className="flex w-1/2 justify-around items-center px-4">
                {logos.map((logo, index) => (
                    <div key={`dup-${index}`} className="flex flex-col items-center justify-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default group mx-6">
                         <div className="text-white group-hover:text-cyan-400 transition-colors">
                            {logo.svg}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors">
                            {logo.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TechTicker;