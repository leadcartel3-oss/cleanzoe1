import React from 'react';
import { MARRAKECH_ZONES, SERVICE_AREA_CONFIG } from '../data/zonesData';
import { MapPin, Clock, CheckCircle2, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface ZonesPageProps {
  onOpenBooking: () => void;
  onNavigate: (tab: string, serviceSlug?: string) => void;
}

export const ZonesPage: React.FC<ZonesPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>Cleanzoe Marrakech</span>
          <span aria-hidden="true">·</span>
          <span>Périmètre Géographique</span>
          <span aria-hidden="true">·</span>
          <span>Local SEO Target</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071F3F] tracking-tight">
          Zones d'Intervention à Marrakech & Région
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Cleanzoe déploie ses équipes mobiles équipées dans les principaux quartiers résidentiels, zones d'affaires et domaines privés de Marrakech.
        </p>

        {/* Configurable disclaimer notice per prompt instructions */}
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs font-mono text-amber-900">
          <strong>Note de configuration :</strong> {SERVICE_AREA_CONFIG.disclaimer}
        </div>
      </div>

      {/* Grid of Marrakech Districts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MARRAKECH_ZONES.map((zone) => (
          <div
            key={zone.slug}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>{zone.type}</span>
                <span className="text-emerald-700 font-medium">{zone.travelDelay}</span>
              </div>

              <h2 className="text-xl font-bold font-heading text-[#071F3F] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#40C6D9]" />
                <span>{zone.name}</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {zone.description}
              </p>

              <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-semibold">
                  Services fréquemment demandés :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {zone.servicesAvailable.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] text-slate-700"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="tel:+212664696470"
              className="w-full py-2.5 px-3 text-xs font-bold text-[#071F3F] bg-slate-100 hover:bg-[#071F3F] hover:text-white rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Appeler pour ce secteur</span>
            </a>
          </div>
        ))}
      </div>

      {/* Travel Policy & Flexibility */}
      <div className="bg-[#071F3F] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9]">
            Politique de déplacement
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Votre bien est situé en dehors du périmètre affiché ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Nous organisons des déplacements spécifiques pour les domaines privés, haras et résidences de villégiature aux alentours de Marrakech.
          </p>
        </div>

        <a
          href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20intervenez-vous%20dans%20mon%20secteur%20hors%20centre%20%C3%A0%20Marrakech%20?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Vérifier mon adresse sur WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
