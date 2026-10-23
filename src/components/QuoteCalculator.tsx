import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare, Check, Wrench, Building, Home, Hotel, Shield, ArrowRight, Phone } from 'lucide-react';

interface QuoteCalculatorProps {
  onOpenBookingWithDetails?: (details: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  onOpenBookingWithDetails,
}) => {
  const [propertyType, setPropertyType] = useState<'villa' | 'appartement' | 'bureau' | 'airbnb' | 'chantier'>('villa');
  const [surfaceM2, setSurfaceM2] = useState<number>(180);
  const [frequency, setFrequency] = useState<'once' | 'weekly' | 'biweekly' | 'monthly'>('once');
  
  const [extraVitres, setExtraVitres] = useState<boolean>(true);
  const [extraTapis, setExtraTapis] = useState<boolean>(false);
  const [extraPiscine, setExtraPiscine] = useState<boolean>(false);
  const [extraCristallisation, setExtraCristallisation] = useState<boolean>(false);

  // Pricing calculation in Moroccan Dirhams (MAD)
  const calculation = useMemo(() => {
    let ratePerM2 = 2.5; // Base rate in MAD

    if (propertyType === 'villa') ratePerM2 = 3.0;
    if (propertyType === 'appartement') ratePerM2 = 2.8;
    if (propertyType === 'bureau') ratePerM2 = 2.2;
    if (propertyType === 'airbnb') ratePerM2 = 3.2;
    if (propertyType === 'chantier') ratePerM2 = 6.0; // Post-construction requires heavy machinery

    let base = Math.max(250, surfaceM2 * ratePerM2);

    let extrasTotal = 0;
    if (extraVitres) extrasTotal += Math.max(120, surfaceM2 * 0.7);
    if (extraTapis) extrasTotal += 180;
    if (extraPiscine) extrasTotal += 250;
    if (extraCristallisation) extrasTotal += Math.max(300, surfaceM2 * 1.8);

    let subtotal = base + extrasTotal;

    // Frequency discount
    let discount = 0;
    if (frequency === 'weekly') discount = 0.20; // 20% discount on regular weekly contracts
    if (frequency === 'biweekly') discount = 0.12;
    if (frequency === 'monthly') discount = 0.05;

    const finalAmount = Math.round(subtotal * (1 - discount));
    const minRange = Math.round(finalAmount * 0.9);
    const maxRange = Math.round(finalAmount * 1.15);

    return {
      base: Math.round(base),
      extrasTotal: Math.round(extrasTotal),
      finalAmount,
      minRange,
      maxRange,
      discountPercent: Math.round(discount * 100),
    };
  }, [propertyType, surfaceM2, frequency, extraVitres, extraTapis, extraPiscine, extraCristallisation]);

  const propertyLabels = {
    villa: 'Villa avec jardin / patio',
    appartement: 'Appartement / Penthouse',
    bureau: 'Bureaux & Espace pro',
    airbnb: 'Logement Airbnb / Riad',
    chantier: 'Remise en état après travaux',
  };

  const frequencyLabels = {
    once: 'Intervention ponctuelle',
    weekly: 'Contrat régulier (1x par semaine)',
    biweekly: 'Contrat régulier (2x par mois)',
    monthly: 'Contrat mensuel',
  };

  const generateSummaryText = () => {
    const extrasList = [];
    if (extraVitres) extrasList.push('Baies vitrées');
    if (extraTapis) extrasList.push('Tapis & moquettes');
    if (extraPiscine) extrasList.push('Piscine & terrasse');
    if (extraCristallisation) extrasList.push('Cristallisation marbre');

    return `Devis Cleanzoe Marrakech:
• Type: ${propertyLabels[propertyType]}
• Surface: ${surfaceM2} m²
• Rythme: ${frequencyLabels[frequency]}
• Options: ${extrasList.length > 0 ? extrasList.join(', ') : 'Standard'}
• Estimation indicative: ~${calculation.minRange} à ${calculation.maxRange} MAD`;
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Bonjour Cleanzoe Marrakech,\nJe viens d'effectuer une estimation sur votre site :\n\n${generateSummaryText()}\n\nPourriez-vous me confirmer vos disponibilités pour une intervention ?`
    );
    window.open(`https://wa.me/212664696470?text=${text}`, '_blank');
  };

  const handleRequestQuoteForm = () => {
    if (onOpenBookingWithDetails) {
      onOpenBookingWithDetails(generateSummaryText());
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#071F3F] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#40C6D9] mb-1.5">
            <Calculator className="w-4 h-4" />
            <span>Simulateur en direct · Marrakech</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading">
            Estimez votre devis de nettoyage en 30 secondes
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Tarifs transparents en Dirhams marocains (MAD). Aucun engagement requis.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-xs text-slate-400 block font-mono">Fourchette indicative</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F5BF23] font-mono tabular-nums">
            {calculation.minRange} - {calculation.maxRange} <span className="text-sm font-normal text-white">MAD</span>
          </div>
          {calculation.discountPercent > 0 && (
            <span className="text-[11px] text-[#40C6D9] font-medium block">
              Remise contrat régulier de {calculation.discountPercent}% appliquée
            </span>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Type de bien */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
              1. Type de propriété à Marrakech
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'villa', label: 'Villa', icon: Home },
                { id: 'appartement', label: 'Appartement', icon: Building },
                { id: 'bureau', label: 'Bureaux', icon: Shield },
                { id: 'airbnb', label: 'Airbnb / Riad', icon: Hotel },
                { id: 'chantier', label: 'Fin de chantier', icon: Wrench },
              ].map((item) => {
                const isSelected = propertyType === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#071F3F] bg-[#071F3F] text-white shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#40C6D9]' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Surface en m² */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="surface-slider" className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                2. Surface approximative (m²)
              </label>
              <div className="flex items-center gap-1 font-mono text-sm font-bold text-[#071F3F]">
                <span>{surfaceM2}</span>
                <span className="text-xs text-slate-500 font-normal">m²</span>
              </div>
            </div>
            <input
              id="surface-slider"
              type="range"
              min="30"
              max="600"
              step="10"
              value={surfaceM2}
              onChange={(e) => setSurfaceM2(Number(e.target.value))}
              aria-label="Surface approximative en mètres carrés"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#071F3F]"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
              <span>Studio (30 m²)</span>
              <span>Appartement (100 m²)</span>
              <span>Villa (250 m²)</span>
              <span>Grande propriété (600+ m²)</span>
            </div>
          </div>

          {/* Step 3: Fréquence d'intervention */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
              3. Rythme souhaité
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'once', label: 'Ponctuel', badge: 'Unique' },
                { id: 'weekly', label: '1x / semaine', badge: '-20%' },
                { id: 'biweekly', label: '2x / mois', badge: '-12%' },
                { id: 'monthly', label: 'Mensuel', badge: '-5%' },
              ].map((f) => {
                const isSelected = frequency === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id as any)}
                    className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-[#071F3F] bg-slate-900 text-white font-semibold'
                        : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span>{f.label}</span>
                    {f.badge && (
                      <span
                        className={`block text-[10px] mt-0.5 ${
                          isSelected ? 'text-[#40C6D9]' : 'text-slate-400'
                        }`}
                      >
                        {f.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Prestations complémentaires */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
              4. Options recommandées pour Marrakech
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={extraVitres}
                  onChange={(e) => setExtraVitres(e.target.checked)}
                  className="w-4 h-4 rounded text-[#071F3F] accent-[#071F3F]"
                />
                <div className="flex-1">
                  <span className="font-semibold text-slate-800 block">Lavage baies vitrées</span>
                  <span className="text-[11px] text-slate-500">Sans traces + rails dépoussiérés</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={extraTapis}
                  onChange={(e) => setExtraTapis(e.target.checked)}
                  className="w-4 h-4 rounded text-[#071F3F] accent-[#071F3F]"
                />
                <div className="flex-1">
                  <span className="font-semibold text-slate-800 block">Shampouinage tapis</span>
                  <span className="text-[11px] text-slate-500">Injection-extraction approfondie</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={extraPiscine}
                  onChange={(e) => setExtraPiscine(e.target.checked)}
                  className="w-4 h-4 rounded text-[#071F3F] accent-[#071F3F]"
                />
                <div className="flex-1">
                  <span className="font-semibold text-slate-800 block">Margelles & piscine</span>
                  <span className="text-[11px] text-slate-500">Ligne d’eau + plage extérieure</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={extraCristallisation}
                  onChange={(e) => setExtraCristallisation(e.target.checked)}
                  className="w-4 h-4 rounded text-[#071F3F] accent-[#071F3F]"
                />
                <div className="flex-1">
                  <span className="font-semibold text-slate-800 block">Cristallisation marbre</span>
                  <span className="text-[11px] text-slate-500">Finition miroir protectrice</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Summary & Actions */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold font-heading text-[#071F3F] mb-4 flex items-center gap-2">
              <Check className="w-4 h-4 text-[#40C6D9]" />
              <span>Récapitulatif de votre configuration</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-600 border-b border-slate-200 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Type :</span>
                <span className="font-semibold text-slate-800">{propertyLabels[propertyType]}</span>
              </div>
              <div className="flex justify-between">
                <span>Superficie :</span>
                <span className="font-semibold text-slate-800 font-mono">{surfaceM2} m²</span>
              </div>
              <div className="flex justify-between">
                <span>Fréquence :</span>
                <span className="font-semibold text-slate-800">{frequencyLabels[frequency]}</span>
              </div>
              <div className="flex justify-between">
                <span>Matériel & produits :</span>
                <span className="font-semibold text-emerald-700">100% Inclus par Cleanzoe</span>
              </div>
              <div className="flex justify-between">
                <span>Zone d’intervention :</span>
                <span className="font-semibold text-slate-800">Marrakech & environs</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs mb-6">
              <div className="text-[11px] text-slate-500 uppercase tracking-wide font-mono">Estimation calculée :</div>
              <div className="text-2xl font-bold text-[#071F3F] font-mono mt-1">
                {calculation.minRange} - {calculation.maxRange} MAD
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                * Tarification ajustée sur place selon l’état réel et vos demandes spécifiques. Devis formel gratuit.
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              type="button"
              onClick={handleWhatsAppQuote}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Transmettre ce devis sur WhatsApp</span>
            </button>

            <a
              href="tel:+212664696470"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 transition-colors shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Appel direct</span>
            </a>

            <div className="text-center text-[10px] text-slate-400 font-mono pt-1">
              Réponse moyenne en moins de 15 minutes à Marrakech
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
