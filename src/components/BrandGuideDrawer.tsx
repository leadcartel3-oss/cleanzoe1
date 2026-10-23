import React from 'react';
import { X, Palette, Check, Download, ExternalLink, ShieldCheck, Sliders } from 'lucide-react';
import { CleanzoeLogo } from './CleanzoeLogo';
import { useLogo } from '../context/LogoContext';

interface BrandGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideDrawer: React.FC<BrandGuideDrawerProps> = ({ isOpen, onClose }) => {
  const { openCustomizer } = useLogo();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white h-full shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="sticky top-0 z-10 bg-[#071F3F] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Palette className="w-5 h-5 text-[#40C6D9]" />
            <div>
              <h3 className="text-base font-bold font-heading">Charte Graphique Cleanzoe</h3>
              <p className="text-[11px] text-slate-300 font-mono">Brand Identity · Marrakech · 2026</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer la charte graphique"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-slate-800">
          {/* Logo Mark Presentation */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">
                01 · Logo Officiel AZ Cleanzoe (Symbole Vectoriel)
              </span>
              <a
                href="/cleanzoe-logo.svg"
                download="cleanzoe-logo.svg"
                className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#0082E6] hover:underline"
              >
                <Download className="w-3 h-3" />
                <span>Télécharger SVG</span>
              </a>
            </div>

            {/* Standalone Emblem Showcase matching the user uploaded image */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-xs">
              <CleanzoeLogo variant="color" size="xl" iconOnly={true} />
              <span className="text-xs font-bold text-[#052652] mt-3 font-heading">
                Emblème Officiel Cleanzoe
              </span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5">
                Maison · Étoile de propreté · Vague d'eau · Lettre Z
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
                <CleanzoeLogo variant="color" size="md" showTagline={true} />
                <span className="text-[10px] font-mono text-slate-400 mt-3">Lockup sur fond clair</span>
              </div>
              <div className="p-4 bg-[#052652] rounded-xl flex flex-col items-center justify-center text-center">
                <CleanzoeLogo variant="white" size="md" showTagline={true} />
                <span className="text-[10px] font-mono text-slate-400 mt-3">Lockup sur fond sombre</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 italic">
              « Maison · étoile de propreté · vague d'eau · lettre Z dynamique. Le symbole reste inchangé sur tous les supports. »
            </p>

            <button
              type="button"
              onClick={() => {
                onClose();
                openCustomizer();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#052652] hover:bg-[#052652]/90 transition-all shadow-xs cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-[#0082E6]" />
              <span>Ouvrir le Studio pour Personnaliser / Importer votre Logo</span>
            </button>
          </div>

          {/* Color Palette from Guidelines */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[#071F3F] mb-3">
              02 · Palette de Couleurs Officielles (Page 14-16)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              <div className="p-3 rounded-xl border border-slate-200 bg-white text-center">
                <div className="w-full h-12 rounded-lg bg-white border border-slate-200 shadow-inner mb-2" />
                <span className="text-xs font-bold block">White</span>
                <span className="text-[10px] font-mono text-slate-500">#FFFFFF</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-white text-center">
                <div className="w-full h-12 rounded-lg bg-[#40C6D9] shadow-inner mb-2" />
                <span className="text-xs font-bold block">Fresh Aqua</span>
                <span className="text-[10px] font-mono text-slate-500">#40C6D9</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-white text-center">
                <div className="w-full h-12 rounded-lg bg-[#071F3F] shadow-inner mb-2" />
                <span className="text-xs font-bold block">Navy</span>
                <span className="text-[10px] font-mono text-slate-500">#071F3F</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-white text-center">
                <div className="w-full h-12 rounded-lg bg-[#172126] shadow-inner mb-2" />
                <span className="text-xs font-bold block">Anthracite</span>
                <span className="text-[10px] font-mono text-slate-500">#172126</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-white text-center">
                <div className="w-full h-12 rounded-lg bg-[#F5BF23] shadow-inner mb-2" />
                <span className="text-xs font-bold block">Accent Gold</span>
                <span className="text-[10px] font-mono text-slate-500">#F5BF23 / #C8F238</span>
              </div>
            </div>

            {/* Ratio visualization from page 16 */}
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex justify-between text-xs font-mono text-slate-600 mb-2">
                <span>Hiérarchie colorimétrique :</span>
                <span className="font-bold">55% / 25% / 15% / 5%</span>
              </div>
              <div className="h-4 rounded-lg overflow-hidden flex border border-slate-300">
                <div className="bg-white border-r border-slate-200" style={{ width: '55%' }} title="White 55%" />
                <div className="bg-[#40C6D9]" style={{ width: '25%' }} title="Fresh Aqua 25%" />
                <div className="bg-[#071F3F]" style={{ width: '15%' }} title="Navy 15%" />
                <div className="bg-[#F5BF23]" style={{ width: '5%' }} title="Accent 5%" />
              </div>
            </div>
          </div>

          {/* Typography from Guidelines Page 18-20 */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[#071F3F] mb-3">
              03 · Typographie (Page 18-20)
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                  Titres & Accroches
                </span>
                <p className="font-heading font-extrabold text-lg text-[#071F3F]">
                  Montserrat (Bold · Confident · Modern)
                </p>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  H1 (46-54pt) · H2 (30-36pt) · H3 (20-24pt)
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                  Corps de Texte & Documents
                </span>
                <p className="font-body text-sm text-slate-700">
                  Inter (Clean · Readable · Flexible)
                </p>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  Body (16-18pt) · Légendes & Métadonnées (11-13pt)
                </p>
              </div>
            </div>
          </div>

          {/* Brand Essence & Values */}
          <div>
            <h4 className="text-sm font-bold font-heading text-[#071F3F] mb-3">
              04 · Fondations de Marque (Page 4-6)
            </h4>
            <div className="p-4 bg-[#071F3F] text-white rounded-2xl mb-4">
              <span className="text-[10px] font-mono uppercase text-[#40C6D9] block mb-1">Brand Essence</span>
              <p className="text-base font-bold font-heading italic">
                « Une propreté visible, une tranquillité durable »
              </p>
              <p className="text-xs text-slate-300 mt-2">
                Tagline : « On nettoie, vous respirez »
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                { title: 'Fiabilité', desc: 'Ponctualité, engagements tenus' },
                { title: 'Précision', desc: 'Chaque surface reçoit le bon soin' },
                { title: 'Fraîcheur', desc: 'Résultat visible & atmosphère saine' },
                { title: 'Respect', desc: 'Lieux, personnes & produits' },
                { title: 'Simplicité', desc: 'Réservation & communication claires' },
                { title: 'Discrétion', desc: 'Intervention professionnelle et soignée' },
              ].map((v) => (
                <div key={v.title} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#071F3F] block">{v.title}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">{v.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Touchpoints (Page 25) */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-700 mb-2">
              05 · Applications Terrain (Page 25)
            </h4>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li><strong>Uniformes :</strong> Polo blanc ou navy, logo côté cœur. Casquette navy avec version blanche.</li>
              <li><strong>Véhicules :</strong> Fond blanc, logo couleur Cleanzoe, téléphone lisible à distance.</li>
              <li><strong>Matériel :</strong> Serviettes microfibres zonées, flacons et protocoles officiels.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-100 p-4 border-t border-slate-200 flex justify-between items-center text-xs font-mono text-slate-600">
          <span>Marrakech · Cleanzoe 2026</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#071F3F] text-white rounded-lg font-sans font-medium cursor-pointer"
          >
            Fermer l'aperçu
          </button>
        </div>
      </div>
    </div>
  );
};
