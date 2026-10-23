import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ArrowRight, CheckCircle2, Search, Filter, Phone } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: string, serviceSlug?: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'Toutes les prestations' },
    { id: 'residential', label: 'Résidentiel & Villas' },
    { id: 'commercial', label: 'Bureaux & Pro' },
    { id: 'airbnb', label: 'Airbnb & Riads' },
    { id: 'renovation', label: 'Après Travaux' },
    { id: 'specialized', label: 'Sols, Vitres & Piscines' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesFilter = selectedFilter === 'all' || s.category === selectedFilter;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        {/* Unboxed metadata kicker */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>Cleanzoe Marrakech</span>
          <span aria-hidden="true">·</span>
          <span>Catalogue Officiel</span>
          <span aria-hidden="true">·</span>
          <span>100% Prestations Confirmées</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071F3F] tracking-tight">
          Services de Nettoyage Professionnel & Résidentiel à Marrakech
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Chaque espace a ses spécificités. Découvrez l'ensemble de nos interventions spécialisées pour particuliers, entreprises et hébergeurs touristiques à Marrakech.
        </p>
      </div>

      {/* Filter Bar & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        {/* Segmented Filter Control (buttons allowed per zero-pill discipline) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#071F3F] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une prestation..."
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F] bg-white"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="p-6 pb-0 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-mono text-slate-500">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium text-slate-700">{service.audience}</span>
                    <span className="mx-1.5">·</span>
                    <span>Marrakech</span>
                  </div>
                  <div className="bg-[#071F3F]/5 px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#071F3F] font-bold border border-slate-200">
                    {service.estimatedStartingPrice}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-mono text-slate-500">
                  <span>{service.audience}</span>
                  <span className="mx-1.5">·</span>
                  <span>Marrakech</span>
                </div>

                <h2 className="text-xl font-bold font-heading text-[#071F3F]">
                  {service.name}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {service.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <button
                type="button"
                onClick={() => onNavigate('service-detail', service.slug)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071F3F] hover:text-[#40C6D9] transition-colors cursor-pointer"
              >
                <span>Fiche complète & Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+212664696470"
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#071F3F] rounded-xl hover:bg-[#071F3F]/90 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Appeler</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-700">Aucune prestation ne correspond à votre recherche.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedFilter('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-2 text-xs font-bold text-[#071F3F] bg-white border border-slate-300 rounded-lg cursor-pointer"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};
