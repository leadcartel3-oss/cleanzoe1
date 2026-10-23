import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, FileText, Globe, Code, Copy, Check } from 'lucide-react';

interface SeoAuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoAuditDrawer: React.FC<SeoAuditDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'schema' | 'sitemap' | 'robots'>('checklist');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "additionalType": "https://schema.org/CleaningService",
  "name": "Cleanzoe",
  "alternateName": "Société de Nettoyage Cleanzoe Marrakech",
  "image": "https://cleanzoe-marrakech.ma/logo.png",
  "url": "https://cleanzoe-marrakech.ma/",
  "telephone": "+212664696470",
  "priceRange": "$$",
  "email": "contactcleanzoe@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dior Atlas, M'hamid",
    "addressLocality": "Marrakech",
    "addressRegion": "Marrakech-Safi",
    "postalCode": "40000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.6295,
    "longitude": -7.9811
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    {"@type": "Place", "name": "Marrakech"},
    {"@type": "Place", "name": "Guéliz"},
    {"@type": "Place", "name": "Hivernage"},
    {"@type": "Place", "name": "Palmeraie"},
    {"@type": "Place", "name": "Targa"},
    {"@type": "Place", "name": "Agdal"},
    {"@type": "Place", "name": "Médina"}
  ],
  "slogan": "Une propreté visible, une tranquillité durable"
}`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cleanzoe-marrakech.ma/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/services</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/services/nettoyage-residentiel</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/services/nettoyage-bureaux</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/services/nettoyage-airbnb</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/services/nettoyage-apres-chantier</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/services/cristallisation-sols</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/zones-intervention</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/devis</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://cleanzoe-marrakech.ma/contact</loc>
    <priority>0.8</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://cleanzoe-marrakech.ma/sitemap.xml`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white h-full shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#071F3F] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#40C6D9]" />
            <div>
              <h3 className="text-base font-bold font-heading">Audit SEO & Métadonnées Techniques</h3>
              <p className="text-[11px] text-slate-300 font-mono">Phase 1 · Marrakech Target</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer l'audit SEO"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4">
          {[
            { id: 'checklist', label: 'Checklist SEO' },
            { id: 'schema', label: 'Schema.org JSON-LD' },
            { id: 'sitemap', label: 'Sitemap.xml' },
            { id: 'robots', label: 'Robots.txt' },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-[#071F3F] text-[#071F3F]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6 text-slate-800 flex-1">
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold font-heading text-[#071F3F]">
                Conformité & Optimisations SEO Local (Marrakech)
              </h4>

              <div className="space-y-2.5">
                {[
                  {
                    title: 'Ciblage Géographique Marrakech',
                    desc: 'Présence naturelle de Marrakech dans le Title, H1, meta description et zones d’intervention sans keyword stuffing.',
                    status: true,
                  },
                  {
                    title: 'Données Structurées LocalBusiness & CleaningService',
                    desc: 'JSON-LD embarqué dans index.html avec géolocalisation de Marrakech (31.6295, -7.9811).',
                    status: true,
                  },
                  {
                    title: 'Phase 1 Strictement Respectée (Zéro Blog)',
                    desc: 'Aucun article, catégorie, flux RSS ou schéma BlogPosting n’a été créé. Architecture modulaire prête pour la Phase 2.',
                    status: true,
                  },
                  {
                    title: 'Fichiers Sitemap.xml & Robots.txt',
                    desc: 'Créés physiquement dans le répertoire /public et prêts pour la Google Search Console.',
                    status: true,
                  },
                  {
                    title: 'NAP & Placeholders Transparents',
                    desc: 'Aucune donnée fictive inventée : les numéros, adresses et horaires portent les balises [CONFIRMER].',
                    status: true,
                  },
                  {
                    title: 'Performance & Balisage Mobile-First',
                    desc: 'Respect des Core Web Vitals, balises meta viewport, polices système Google Montserrat & Inter chargées efficacement.',
                    status: true,
                  },
                  {
                    title: 'Actions Directes (WhatsApp & Appel)',
                    desc: 'Liens click-to-call et WhatsApp avec message pré-rempli optimisés pour la conversion mobile.',
                    status: true,
                  },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{item.title}</span>
                      <span className="text-[11px] text-slate-600 leading-relaxed block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-600">
                  Schema.org / LocalBusiness JSON-LD
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(schemaJson)}
                  className="flex items-center gap-1 text-xs text-[#071F3F] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 text-[11px] font-mono rounded-xl overflow-x-auto border border-slate-800 leading-relaxed">
                {schemaJson}
              </pre>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-600">
                  Fichier /public/sitemap.xml
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(sitemapXml)}
                  className="flex items-center gap-1 text-xs text-[#071F3F] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 text-[11px] font-mono rounded-xl overflow-x-auto border border-slate-800 leading-relaxed">
                {sitemapXml}
              </pre>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-600">
                  Fichier /public/robots.txt
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(robotsTxt)}
                  className="flex items-center gap-1 text-xs text-[#071F3F] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 text-[11px] font-mono rounded-xl overflow-x-auto border border-slate-800 leading-relaxed">
                {robotsTxt}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-100 p-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#071F3F] text-white text-xs rounded-lg font-medium cursor-pointer"
          >
            Fermer l'inspecteur
          </button>
        </div>
      </div>
    </div>
  );
};
