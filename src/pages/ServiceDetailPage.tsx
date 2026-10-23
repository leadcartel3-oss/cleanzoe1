import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ArrowLeft, CheckCircle2, ArrowRight, Phone, MessageSquare, Clock, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (tab: string, serviceSlug?: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs font-mono text-slate-500">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="hover:text-[#071F3F] cursor-pointer"
        >
          Accueil
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <button
          type="button"
          onClick={() => onNavigate('services')}
          className="hover:text-[#071F3F] cursor-pointer"
        >
          Services
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-none">
          {service.name}
        </span>
      </nav>

      {/* Main Service Presentation Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: H1, Presentation, Included Items */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
              <span>{service.audience}</span>
              <span aria-hidden="true">·</span>
              <span>Marrakech</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#071F3F] font-semibold">{service.primaryKeyword}</span>
            </div>

            {/* Exactly ONE H1 per service page targeting service + location */}
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#071F3F] tracking-tight leading-tight">
              {service.name} à Marrakech
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
              {service.shortDesc}
            </p>
          </div>

          {/* Target Audience & Problems Solved */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#071F3F] font-bold">
              À qui s’adresse cette prestation ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {service.targetAudience}
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {service.idealFor.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 text-xs font-medium text-slate-600"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Included Checklist */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-[#071F3F]">
              Ce que comprend l’intervention Cleanzoe
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {service.includes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#40C6D9] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold font-heading text-[#071F3F]">
              Déroulement de l’intervention
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
                >
                  <span className="text-xs font-mono font-bold text-[#40C6D9] block">{p.step}.</span>
                  <h3 className="text-sm font-bold font-heading text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specific FAQs */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold font-heading text-[#071F3F]">
              Questions fréquentes sur ce service
            </h2>
            <div className="space-y-3">
              {service.faqs.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xs sm:text-sm font-bold text-[#071F3F] mb-1">{f.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Card: Image, Pricing, Booking CTA */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
            {/* Visual Header */}
            <div className="bg-[#071F3F] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#40C6D9]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#40C6D9] block font-bold">
                  Standard d'Excellence Cleanzoe
                </span>
                <h3 className="text-lg font-bold font-heading text-white">
                  {service.name}
                </h3>
                <span className="text-xs text-slate-300 block">
                  Intervention 7j/7 sur tout Marrakech & environs
                </span>
              </div>
            </div>

            {/* Price & Action */}
            <div className="p-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">Tarification</span>
                <div className="text-2xl font-bold font-heading text-[#071F3F] font-mono mt-1">
                  {service.estimatedStartingPrice}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Matériel technique et produits professionnels homologués 100% inclus.
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href="tel:+212664696470"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 active:scale-[0.99] transition-all cursor-pointer shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appel direct</span>
                </a>

                <a
                  href={`https://wa.me/212664696470?text=${encodeURIComponent(
                    `Bonjour Cleanzoe, je souhaite réserver la prestation : ${service.name} à Marrakech.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Échanger directement sur WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#40C6D9] shrink-0" />
                  <span>Personnel formé & en uniforme officiel Cleanzoe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#40C6D9] shrink-0" />
                  <span>Respect strict des horaires convenus</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#40C6D9] shrink-0" />
                  <span>Tous quartiers de Marrakech desservis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
