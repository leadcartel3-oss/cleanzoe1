import React from 'react';

interface HeroGeometricCompositionProps {
  villaImage: string;
}

export const HeroGeometricComposition: React.FC<HeroGeometricCompositionProps> = ({
  villaImage,
}) => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Main Visual Display Container */}
      <div className="relative w-full aspect-square max-h-[500px] rounded-3xl bg-[#FAFAF8] border border-slate-200/60 p-2 sm:p-3 flex items-center justify-center overflow-hidden shadow-xl shadow-slate-200/40">
        {/* Villa Marrakech Photography view */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner group">
          <img
            src={villaImage}
            alt="Intérieur lumineux d'une villa de luxe nettoyée par Cleanzoe à Marrakech"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F3F]/85 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#40C6D9] block mb-1 font-bold">
              Cleanzoe · Marrakech
            </span>
            <p className="text-sm sm:text-base font-semibold leading-snug drop-shadow-sm">
              Sols cristallisés, baies vitrées sans traces et villas de prestige prêtes à vivre.
            </p>
          </div>
        </div>
      </div>

      {/* Trust pill beneath image */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-2 font-mono">
        <span>Marrakech · 2026</span>
        <span>« On nettoie, vous respirez »</span>
      </div>
    </div>
  );
};
