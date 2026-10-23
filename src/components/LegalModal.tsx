import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, Building, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'mentions' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'mentions',
}) => {
  const [activeTab, setActiveTab] = useState<'mentions' | 'privacy'>(defaultTab);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab, isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#071F3F] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#40C6D9]">
              {activeTab === 'mentions' ? (
                <FileText className="w-5 h-5" />
              ) : (
                <ShieldCheck className="w-5 h-5" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold font-heading text-white">
                {activeTab === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
              </h2>
              <p className="text-xs text-slate-300">Cleanzoe · Société de nettoyage à Marrakech</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('mentions')}
            className={`pb-3 px-4 text-xs font-bold transition-all relative flex items-center gap-2 cursor-pointer ${
              activeTab === 'mentions'
                ? 'text-[#071F3F] border-b-2 border-[#071F3F]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Mentions Légales</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-4 text-xs font-bold transition-all relative flex items-center gap-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'text-[#071F3F] border-b-2 border-[#071F3F]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Politique de Confidentialité</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {activeTab === 'mentions' ? (
            <div className="space-y-6">
              {/* Identification */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#40C6D9]" />
                  <span>1. Éditeur du site & Identification</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Dénomination commerciale :</span>
                    <strong className="text-slate-800 font-semibold">Cleanzoe Marrakech</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Activité principale :</span>
                    <span className="text-slate-800">Nettoyage professionnel & résidentiel</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Siège / Adresse :</span>
                    <span className="text-slate-800 font-medium">Dior Atlas, M'hamid, Marrakech, Maroc</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Téléphone officiel :</span>
                    <a href="tel:+212664696470" className="text-[#071F3F] font-bold hover:underline">
                      06 64 69 64 70
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-400 block">Courrier électronique :</span>
                    <a href="mailto:contactcleanzoe@gmail.com" className="text-[#071F3F] font-bold hover:underline">
                      contactcleanzoe@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Objet du service */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
                  2. Activités & Services proposés
                </h3>
                <p className="text-xs text-slate-600">
                  Cleanzoe propose des services de nettoyage haut de gamme à Marrakech et ses environs : entretien régulier de villas et riads, nettoyage d'appartements, remises en état après travaux de chantier, entretien de bureaux et locaux commerciaux, conciergerie Airbnb et rotations de linge, cristallisation du marbre et traitement des sols.
                </p>
              </div>

              {/* Hébergement */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
                  3. Hébergement du site
                </h3>
                <p className="text-xs text-slate-600">
                  Le présent site internet est hébergé sur une infrastructure Cloud sécurisée, garantissant une disponibilité optimale, des protocoles de chiffrement HTTPS (SSL/TLS) et la protection des données de navigation des visiteurs.
                </p>
              </div>

              {/* Propriété intellectuelle */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
                  4. Propriété Intellectuelle
                </h3>
                <p className="text-xs text-slate-600">
                  L'ensemble des marques, logos, graphismes, textes, photographies et supports multimédias présents sur ce site constituent la propriété exclusive de Cleanzoe Marrakech. Toute reproduction, diffusion ou réutilisation intégrale ou partielle sans accord écrit préalable est strictement interdite.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Introduction CNDP / Loi 09-08 */}
              <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Conformité légale au Maroc (Loi 09-08)</span>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Cleanzoe s'engage à respecter la vie privée de ses clients conformément aux dispositions de la <strong>loi marocaine n° 09-08</strong> relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.
                </p>
              </div>

              {/* Données collectées */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
                  1. Données personnelles collectées
                </h3>
                <p className="text-xs text-slate-600">
                  Dans le cadre de l’utilisation de notre simulateur de devis, du formulaire de réservation ou des échanges via WhatsApp, nous collectons uniquement les données strictement nécessaires au bon déroulement des prestations :
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Nom et prénom du demandeur</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Numéro de téléphone marocain / WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Adresse ou quartier à Marrakech</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Type de bien et superficie estimée (m²)</span>
                  </li>
                </ul>
              </div>

              {/* Finalité */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
                  2. Finalité du traitement des données
                </h3>
                <p className="text-xs text-slate-600">
                  Vos informations personnelles sont exclusivement employées pour :
                </p>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li>L'établissement et la transmission de devis clairs et personnalisés.</li>
                  <li>L'organisation logistique et le suivi opérationnel de nos équipes d'intervention sur site.</li>
                  <li>La communication directe avec le client (confirmation de créneau, photos de fin d'intervention).</li>
                </ul>
                <p className="text-xs font-semibold text-slate-800 pt-1">
                  En aucun cas vos coordonnées ne sont cédées, vendues ou louées à des tiers.
                </p>
              </div>

              {/* Vos droits */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
                  3. Vos droits d’accès, de rectification et d’opposition
                </h3>
                <p className="text-xs text-slate-600">
                  Vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit à tout moment par simple message électronique à :
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                  <span className="font-semibold text-[#071F3F]">contactcleanzoe@gmail.com</span>
                  <a
                    href="mailto:contactcleanzoe@gmail.com?subject=Demande%20d'exercice%20de%20droit%20des%20donn%C3%A9es"
                    className="text-[#071F3F] font-bold underline hover:text-[#40C6D9]"
                  >
                    Envoyer un courriel
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400">
            Dernière mise à jour : Octobre 2026 · Cleanzoe Marrakech
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
