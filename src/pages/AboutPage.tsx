import React from 'react';
import { CleanzoeLogo } from '../components/CleanzoeLogo';
import { CheckCircle2, ShieldCheck, HeartHandshake, Eye, Award, Sliders } from 'lucide-react';
import { useLogo } from '../context/LogoContext';

interface AboutPageProps {
  onOpenBooking: () => void;
  onOpenBrandDrawer: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onOpenBrandDrawer }) => {
  const { openCustomizer } = useLogo();
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>Cleanzoe Marrakech</span>
          <span aria-hidden="true">·</span>
          <span>Charte & Fondations</span>
          <span aria-hidden="true">·</span>
          <span>Brand Guidelines 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071F3F] tracking-tight">
          La Marque Cleanzoe & Ses Engagements à Marrakech
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Une méthode claire, des équipes formées et un engagement permanent vers la discrétion et l'excellence du résultat.
        </p>
      </div>

      {/* Brand at a Glance (From PDF Page 4) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F]">
            <HeartHandshake className="w-5 h-5 text-[#40C6D9]" />
          </div>
          <h2 className="text-xl font-bold font-heading text-[#071F3F]">Notre Mission</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Créer des espaces propres, sains et prêts à vivre grâce à une méthode claire et régulière.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F]">
            <Eye className="w-5 h-5 text-[#40C6D9]" />
          </div>
          <h2 className="text-xl font-bold font-heading text-[#071F3F]">Notre Vision</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Devenir une référence locale du nettoyage fiable pour les maisons et les professionnels à Marrakech.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F]">
            <Award className="w-5 h-5 text-[#40C6D9]" />
          </div>
          <h2 className="text-xl font-bold font-heading text-[#071F3F]">Notre Positionnement</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Un service premium accessible, attentif aux détails et simple à réserver.
          </p>
        </div>
      </div>

      {/* Brand Essence Banner (Page 4) */}
      <div className="bg-[#071F3F] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9]">
            Brand Essence · Cleanzoe
          </span>
          <blockquote className="text-2xl sm:text-3xl font-bold font-heading italic">
            « Une propreté visible, une tranquillité durable »
          </blockquote>
          <p className="text-xs text-slate-400 font-mono pt-2">
            Signature : On nettoie, vous respirez.
          </p>
        </div>
      </div>

      {/* Values Grid (From PDF Page 5) */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-semibold">
            Nos 6 Piliers d'Action
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#071F3F] mt-1">
            Les valeurs qui guident chaque intervention
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Fiabilité', sub: 'Ponctualité, engagements tenus', desc: 'Nos intervenants sont rigoureusement ponctuels et respectent à la lettre le cahier des charges défini avec vous.' },
            { title: 'Précision', sub: 'Chaque surface reçoit le bon soin', desc: 'Des plinthes aux sommets de baies vitrées, aucun détail n’est négligé.' },
            { title: 'Fraîcheur', sub: 'Résultat visible & atmosphère saine', desc: 'Une sensation immédiate d’air purifié et de sérénité retrouvée.' },
            { title: 'Respect', sub: 'Lieux, personnes & produits', desc: 'Respect absolu de la vie privée de nos clients et protection des biens confiés.' },
            { title: 'Simplicité', sub: 'Réservation & communication claires', desc: 'Un contact direct sur WhatsApp, sans formalités complexes ni jargon technique.' },
            { title: 'Discrétion', sub: 'Intervention professionnelle et soignée', desc: 'Des équipes polies, calmes et discrètes, en uniforme officiel Cleanzoe.' },
          ].map((v) => (
            <div key={v.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-mono text-[#40C6D9] font-bold block mb-1">{v.sub}</span>
              <h3 className="text-lg font-bold font-heading text-[#071F3F] mb-2">{v.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Dédiée au Logo Officiel AZ Cleanzoe */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#0082E6] font-semibold">
            Signature Visuelle Officielle
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#052652] mt-1">
            L'Emblème AZ Cleanzoe
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Un symbole unique et mémorable unissant l'habitat, la pureté de l'eau et la signature dynamique Cleanzoe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Large Emblem Display */}
          <div className="md:col-span-5 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
            <CleanzoeLogo variant="color" size="xl" iconOnly={true} />
            <div className="mt-4 pt-3 border-t border-slate-100 w-full text-center space-y-2">
              <span className="text-sm font-bold font-heading text-[#052652] block">
                Emblème Vectoriel Officiel
              </span>
              <button
                type="button"
                onClick={openCustomizer}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-semibold text-[#052652] cursor-pointer transition-colors"
              >
                <Sliders className="w-3.5 h-3.5 text-[#0082E6]" />
                <span>Personnaliser ou Importer votre Logo</span>
              </button>
            </div>
          </div>

          {/* Symbol Meaning Breakdown */}
          <div className="md:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-[#052652] font-heading block">
                  1. La Maison & Fenêtre
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Représente le sanctuaire du foyer, les villas et appartements soignés ainsi que les espaces professionnels à Marrakech.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-[#0082E6] font-heading block">
                  2. L'Étoile de Propreté
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Symbole de l'éclat, de la clarté et de l'exigence de finition sans compromis.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-[#0082E6] font-heading block">
                  3. La Vague d'Eau
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Évoque la fraîcheur limpide, l'assainissement régulier et la circulation saine de l'énergie.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-[#052652] font-heading block">
                  4. La Lettre Z Stylisée
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  La signature vive et moderne de Cleanzoe, incarnant la rapidité d'intervention et l'efficacité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button to open brand guide drawer */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold font-heading text-[#071F3F]">
            Consulter l'ensemble de la charte visuelle Cleanzoe
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Typographies Montserrat & Inter, palette 55/25/15/5 et applications terrain.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenBrandDrawer}
          className="px-4 py-2.5 text-xs font-bold text-[#071F3F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
        >
          Ouvrir la charte graphique
        </button>
      </div>
    </div>
  );
};
