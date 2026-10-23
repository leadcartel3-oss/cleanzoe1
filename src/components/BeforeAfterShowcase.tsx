import React from 'react';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import villaImg from '../assets/images/cleanzoe_marrakech_villa_1791047035603.jpg';
import marbleImg from '../assets/images/cleanzoe_marble_floor_1791047072471.jpg';
import glassImg from '../assets/images/cleanzoe_glass_cleaning_1791047062400.jpg';

export const BeforeAfterShowcase: React.FC = () => {
  const realisations = [
    {
      id: 'villa',
      title: 'Nettoyage Résidentiel Villa de Prestige',
      location: 'La Palmeraie · Marrakech',
      desc: 'Préparation et dépoussiérage méticuleux des pièces de réception, salons et terrasses pour un cadre prêt à vivre.',
      highlight: 'Finition soignée & discrétion absolue',
      image: villaImg,
      alt: 'Villa de prestige nettoyée par Cleanzoe à Marrakech',
    },
    {
      id: 'marble',
      title: 'Cristallisation & Rénovation du Marbre',
      location: 'Guéliz & Hivernage · Marrakech',
      desc: 'Décapage en profondeur, effacement des ternissures et lustrage thermo-chimique pour un effet miroir durable.',
      highlight: 'Brillance miroir haute durabilité',
      image: marbleImg,
      alt: 'Sol en marbre cristallisé avec éclat miroir à Marrakech',
    },
    {
      id: 'windows',
      title: 'Lavage Grandes Baies Vitrées & Vitres',
      location: 'Villas & Bureaux · Marrakech',
      desc: 'Élimination du voile de sable et des dépôts calcaires sur vitrages, encadrements et rails sans la moindre trace.',
      highlight: 'Transparence cristalline 100% nette',
      image: glassImg,
      alt: 'Grandes baies vitrées étincelantes nettoyées par Cleanzoe à Marrakech',
    },
  ];

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="inline-block px-3 py-1 bg-[#071F3F]/10 text-[#071F3F] rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
          Galerie Réalisations Marrakech
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071F3F] tracking-tight">
          Nos 3 Réalisations de Référence
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          La preuve de notre savoir-faire sur le terrain à Marrakech : villas d'exception, sols en marbre et grandes baies vitrées.
        </p>
      </div>

      {/* Grid des 3 réalisations réelles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {realisations.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Photo réelle */}
              <div className="relative aspect-16/11 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#071F3F]/90 backdrop-blur-xs text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                  0{index + 1}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Réel Cleanzoe</span>
                </div>
              </div>

              {/* Détails */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-base font-bold font-heading text-[#071F3F] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#071F3F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#40C6D9]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="p-5 pt-0">
              <a
                href="tel:+212664696470"
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-[#071F3F] bg-slate-100 hover:bg-[#071F3F] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Appel direct</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
