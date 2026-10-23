import React, { useState, useRef } from 'react';
import { useLogo } from '../context/LogoContext';
import { X, Upload, Palette, Type, RefreshCw, Check, Image, Download, Sliders } from 'lucide-react';
import { CleanzoeLogo } from './CleanzoeLogo';

export const LogoCustomizerModal: React.FC = () => {
  const {
    config,
    setMode,
    setCustomImage,
    removeCustomImage,
    updateColors,
    updateTexts,
    resetToDefault,
    isCustomizerOpen,
    closeCustomizer,
  } = useLogo();

  const [activeTab, setActiveTab] = useState<'upload' | 'customize' | 'guide'>('upload');
  const [localPrimary, setLocalPrimary] = useState(config.primaryColor);
  const [localAccent, setLocalAccent] = useState(config.accentColor);
  const [localBrandName, setLocalBrandName] = useState(config.brandName);
  const [localTagline, setLocalTagline] = useState(config.tagline);
  const [localShowTagline, setLocalShowTagline] = useState(config.showTagline);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isCustomizerOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner un fichier image valide (PNG, JPG, SVG, WebP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImage(result);
          setSaveSuccess(true);
          setTimeout(() => setSaveSuccess(false), 2500);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyColors = () => {
    updateColors(localPrimary, localAccent);
    updateTexts(localBrandName, localTagline, localShowTagline);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleReset = () => {
    resetToDefault();
    setLocalPrimary('#052652');
    setLocalAccent('#0082E6');
    setLocalBrandName('Cleanzoe');
    setLocalTagline('On nettoie, vous respirez');
    setLocalShowTagline(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#052652] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-[#0082E6]" />
            <div>
              <h2 className="text-base sm:text-lg font-bold font-heading">
                Studio Logo · Personnalisation & Import
              </h2>
              <p className="text-[11px] text-slate-300 font-mono">
                Personnalisez les couleurs ou uploadez votre propre logo manuellement
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeCustomizer}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Preview Box */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
              Aperçu en Direct :
            </span>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center">
              <CleanzoeLogo size="lg" showTagline={localShowTagline} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {saveSuccess && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 font-mono">
                <Check className="w-3.5 h-3.5" />
                <span>Enregistré !</span>
              </span>
            )}
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Réinitialiser</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-6 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'upload'
                ? 'border-[#052652] text-[#052652]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>1. Importer votre Image de Logo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('customize')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'customize'
                ? 'border-[#052652] text-[#052652]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>2. Couleurs & Textes</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'border-[#052652] text-[#052652]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>3. Guide Développeur</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: UPLOAD YOUR OWN LOGO IMAGE MANUALLY */}
          {activeTab === 'upload' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold font-heading text-[#052652]">
                  Ajouter votre logo manuellement depuis votre appareil
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Sélectionnez n'importe quel fichier logo (PNG avec fond transparent, SVG, JPG, WebP). Le site se mettra à jour instantanément sur toutes les pages !
                </p>
              </div>

              {/* Upload Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-[#0082E6] hover:bg-sky-50/40 rounded-2xl p-8 text-center cursor-pointer transition-all space-y-3"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  className="hidden"
                />

                <div className="w-14 h-14 rounded-full bg-slate-100 text-[#052652] flex items-center justify-center mx-auto">
                  <Upload className="w-7 h-7 text-[#0082E6]" />
                </div>

                <div>
                  <span className="text-sm font-bold text-slate-800 block">
                    Cliquez ici pour choisir votre logo sur votre ordinateur / téléphone
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Formats acceptés : PNG transparent, SVG, JPG, WebP
                  </span>
                </div>
              </div>

              {/* Active Mode Selector */}
              {config.customImageUrl && (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={config.customImageUrl}
                      alt="Logo personnalisé"
                      className="w-12 h-12 object-contain bg-white rounded-lg p-1 border border-emerald-300"
                    />
                    <div>
                      <span className="text-xs font-bold text-emerald-900 block">
                        Votre image personnalisée est actuellement active !
                      </span>
                      <span className="text-[11px] text-emerald-700">
                        Elle s'affiche dans la barre de menu, le pied de page et les formulaires.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removeCustomImage}
                    className="px-3 py-1.5 text-xs font-semibold text-rose-700 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    Supprimer & Revenir au logo SVG
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CUSTOMIZE COLORS & TEXTS */}
          {activeTab === 'customize' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold font-heading text-[#052652]">
                  Personnaliser les Couleurs & Textes du Logo Vectoriel
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Ajustez les teintes officielles ou modifiez le nom et slogan de la marque.
                </p>
              </div>

              {/* Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    Couleur Principale (Maison, Arche C, Lettre Z)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={localPrimary}
                      onChange={(e) => setLocalPrimary(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-slate-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={localPrimary}
                      onChange={(e) => setLocalPrimary(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs font-mono uppercase border border-slate-300 rounded-xl bg-white"
                    />
                  </div>
                  {/* Quick presets */}
                  <div className="flex gap-1.5 pt-1">
                    {['#052652', '#0A192F', '#000000', '#1E3A8A', '#064E3B'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setLocalPrimary(c)}
                        style={{ backgroundColor: c }}
                        className="w-5 h-5 rounded-full border border-slate-300 cursor-pointer"
                        title={c}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    Couleur d'Accent (Étoile & Vague d'eau)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={localAccent}
                      onChange={(e) => setLocalAccent(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-slate-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={localAccent}
                      onChange={(e) => setLocalAccent(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs font-mono uppercase border border-slate-300 rounded-xl bg-white"
                    />
                  </div>
                  {/* Quick presets */}
                  <div className="flex gap-1.5 pt-1">
                    {['#0082E6', '#40C6D9', '#F5BF23', '#10B981', '#8B5CF6'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setLocalAccent(c)}
                        style={{ backgroundColor: c }}
                        className="w-5 h-5 rounded-full border border-slate-300 cursor-pointer"
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nom de marque
                  </label>
                  <input
                    type="text"
                    value={localBrandName}
                    onChange={(e) => setLocalBrandName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#052652]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Slogan / Tagline
                  </label>
                  <input
                    type="text"
                    value={localTagline}
                    onChange={(e) => setLocalTagline(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#052652]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="show-tagline-check"
                  checked={localShowTagline}
                  onChange={(e) => setLocalShowTagline(e.target.checked)}
                  className="w-4 h-4 rounded text-[#052652]"
                />
                <label htmlFor="show-tagline-check" className="text-xs text-slate-700 font-medium cursor-pointer">
                  Afficher le slogan sous le nom de marque
                </label>
              </div>

              <button
                type="button"
                onClick={handleApplyColors}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#052652] hover:bg-[#052652]/90 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Enregistrer & Appliquer au site</span>
              </button>
            </div>
          )}

          {/* TAB 3: GUIDE DARIJA & FRANÇAIS */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 space-y-2">
                <span className="font-bold text-[#052652] block text-sm">
                  🇲🇦 Kifach t-modifi logo dialk manullement (Guide Darija) :
                </span>
                <p className="leading-relaxed">
                  1. <strong>Directement hna f l'application :</strong> Khtar l'onglet <strong>"1. Importer votre Image"</strong> lfouq, w uploadé ay tsawra dial logo 3ndk f l-PC wla téléphone (PNG transparent, JPG wla SVG). Ghadi t-baddal automatique f ga3 les pages !
                  <br /><br />
                  2. <strong>Bghiti t-baddal l-fichier f l-code :</strong> L-fichier dial logo officiel kayn f :
                  <code className="bg-white px-2 py-0.5 rounded-md border border-slate-300 font-mono mx-1">
                    /public/cleanzoe-logo.svg
                  </code>
                  w l-composant React kayn f :
                  <code className="bg-white px-2 py-0.5 rounded-md border border-slate-300 font-mono mx-1">
                    /src/components/CleanzoeLogo.tsx
                  </code>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block text-sm">
                  🇫🇷 Guide Technique & Remplacement de Fichier :
                </span>
                <p className="leading-relaxed">
                  Toutes les modifications effectuées dans ce studio sont sauvegardées automatiquement dans votre navigateur via <code className="font-mono">localStorage</code>.
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href="/cleanzoe-logo.svg"
                    download="cleanzoe-logo.svg"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <Download className="w-3.5 h-3.5 text-[#0082E6]" />
                    <span>Télécharger le SVG Master officiel</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 font-mono">
            Cleanzoe Marrakech · Brand Studio
          </span>
          <button
            type="button"
            onClick={closeCustomizer}
            className="px-5 py-2 bg-[#052652] text-white rounded-xl font-bold cursor-pointer hover:bg-[#052652]/90"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
