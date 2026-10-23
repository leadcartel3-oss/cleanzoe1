import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Clock, MapPin, ChevronRight, Phone, MessageSquare, Star, Quote } from 'lucide-react';
import { HeroGeometricComposition } from '../components/HeroGeometricComposition';
import { SERVICES_DATA } from '../data/servicesData';
import { BeforeAfterShowcase } from '../components/BeforeAfterShowcase';
import villaImage from '../assets/images/cleanzoe_marrakech_villa_1791047035603.jpg';

interface HomePageProps {
  onNavigate: (tab: string, serviceSlug?: string) => void;
  onOpenBooking: (serviceSlug?: string, notes?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const featuredServices = SERVICES_DATA.slice(0, 6);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION (Directly inspired by COLOR PALLETE VISUALISED.png) */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Swatch Pill matching the user's reference image */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 shadow-xs">
                <span className="w-3.5 h-3.5 rounded-sm bg-[#40C6D9]" />
                <span className="font-semibold text-[#071F3F]">Cleanzoe Marrakech</span>
                <span className="text-slate-400">·</span>
                <span>Nettoyage Résidentiel & Professionnel</span>
              </div>

              {/* Primary H1 with Local SEO and Distinctive Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071F3F] leading-[1.12] tracking-tight">
                Une propreté visible, une{' '}
                <span className="text-[#F5BF23] underline decoration-[#40C6D9]/40 decoration-wavy underline-offset-6">
                  tranquillité
                </span>{' '}
                durable à Marrakech.
              </h1>

              {/* Natural Local Description without Keyword Stuffing */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                Notre entreprise de nettoyage intervient à Marrakech pour accompagner particuliers, propriétaires de villas, gestionnaires Airbnb et professionnels avec des prestations rigoureuses, discrètes et soignées.
              </p>

              {/* Actions & Conversion CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="tel:+212664696470"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 active:scale-98 shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appel direct</span>
                </a>

                <a
                  href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Contacter sur WhatsApp</span>
                </a>
              </div>

              {/* Key Indicators / Stats matching the layout from visual image */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071F3F] font-mono">
                    300+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Interventions à Marrakech
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071F3F] font-mono">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Engagements tenus
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#F5BF23] font-mono">
                    7j/7
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Disponibilité & Devis rapide
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Composition (Exact match to COLOR PALLETE VISUALISED.png) */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroGeometricComposition villaImage={villaImage} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONFIRMED SERVICES SECTION (Structured Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-semibold mb-2">
              Prestations confirmées · Marrakech
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#071F3F]">
              Des solutions adaptées à chaque surface et exigence
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071F3F] hover:text-[#40C6D9] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Consulter les 10 services détaillés</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                {/* Clean unboxed metadata with bullet separator (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                  <span>{service.audience}</span>
                  <span aria-hidden="true">·</span>
                  <span>Marrakech</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#071F3F] group-hover:text-[#071F3F] transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-500 border-t border-slate-100 pt-3">
                  {service.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-slate-700">
                  {service.estimatedStartingPrice}
                </span>

                <button
                  type="button"
                  onClick={() => onNavigate('service-detail', service.slug)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#071F3F] hover:text-[#40C6D9] transition-colors cursor-pointer"
                >
                  <span>Détails & Devis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEFORE / AFTER INTERACTIVE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterShowcase />
      </section>

      {/* 4. BRAND FOUNDATION & TRUST PILLARS (Directly from PDF Page 4-6) */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-semibold mb-2">
              L'ADN Cleanzoe · Marrakech
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#071F3F]">
              Un service premium accessible, attentif aux détails
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              « Une méthode claire, une relation directe et des interventions exécutées avec rigueur pour une tranquillité absolue. »
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fiabilité',
                desc: 'Ponctualité stricte, engagements tenus et respect scrupuleux des créneaux horaires à Marrakech.',
              },
              {
                title: 'Précision',
                desc: 'Chaque surface (marbre, zellige, verre, boiserie) reçoit le traitement et le produit adapté.',
              },
              {
                title: 'Fraîcheur',
                desc: 'Résultat immédiatement visible, atmosphère purifiée et espaces pleinement prêts à vivre.',
              },
              {
                title: 'Respect',
                desc: 'Respect des lieux, de l’intimité des résidents et emploi de solutions professionnelles certifiées.',
              },
              {
                title: 'Simplicité',
                desc: 'Réservation fluide en quelques clics, contact WhatsApp direct et facturation sans surprise.',
              },
              {
                title: 'Discrétion',
                desc: 'Agents courtois en tenue Cleanzoe officielle, formés aux exigences de discrétion en résidence privée.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-1 bg-[#40C6D9] rounded-full mb-3" />
                <h3 className="text-base font-bold font-heading text-[#071F3F] mb-1.5">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Public principal section from PDF page 5 */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Publics & Clientèles Servis à Marrakech
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Propriétaires de villas · Appartements · Locations Airbnb & Riads · Bureaux & Showrooms · Copropriétés
              </p>
            </div>
            <a
              href="tel:+212664696470"
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#071F3F] rounded-xl whitespace-nowrap cursor-pointer hover:bg-[#071F3F]/90 inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Appel direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. AVIS CLIENTS & RETOURS D'EXPÉRIENCE (3 CLIENTS DE MARRAKECH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-3 shadow-xs">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Note 4.9/5 · Retours d'expérience vérifiés à Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#071F3F]">
            Ce que disent nos clients
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Découvrez les avis de propriétaires de villas, gestionnaires Airbnb et professionnels qui font confiance à Cleanzoe à Marrakech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Client 1: Karim B. - Villa Palmeraie */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-200" />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                « Un professionnalisme exemplaire. Les baies vitrées et le marbre du salon sont impeccables à chaque passage. Nos équipes apprécient particulièrement la discrétion et la ponctualité des agents Cleanzoe. »
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#071F3F] text-white flex items-center justify-center font-bold text-sm">
                  KB
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071F3F]">Karim B.</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#40C6D9]" />
                    <span>Villa · La Palmeraie</span>
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                Vérifié
              </span>
            </div>
          </div>

          {/* Client 2: Sarah L. - Superhôte Airbnb */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-200" />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                « Dans la location courte durée à Marrakech, le créneau 11h-15h est ultra serré. Cleanzoe ne m'a jamais fait défaut : lits dressés au millimètre, sanitaires étincelants et photos de contrôle envoyées sur WhatsApp. »
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#40C6D9] text-[#071F3F] flex items-center justify-center font-bold text-sm">
                  SL
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071F3F]">Sarah L.</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#40C6D9]" />
                    <span>Superhôte Airbnb · Guéliz</span>
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                Vérifié
              </span>
            </div>
          </div>

          {/* Client 3: Youssef T. - Architecte & Fin de Chantier */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-200" />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                « Après 6 mois de gros travaux sur une villa de 450 m², il restait des voiles de ciment et des résidus de peinture. Cleanzoe a mobilisé ses monobrosses professionnelles et nous a livré un chantier d'une propreté exemplaire. »
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5BF23] text-[#071F3F] flex items-center justify-center font-bold text-sm">
                  YT
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071F3F]">Youssef T.</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#40C6D9]" />
                    <span>Architecte d'intérieur · Hivernage</span>
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                Vérifié
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-semibold mb-2">
            Questions fréquentes
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#071F3F]">
            Tout ce que vous devez savoir sur nos services à Marrakech
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Comment s’organise une intervention de nettoyage à Marrakech ?',
              a: 'Dès votre demande transmise via notre simulateur ou sur WhatsApp, nous convenons d’un horaire d’intervention précis. Notre équipe arrive sur place avec l’équipement complet (aspirateurs, monobrosses, produits homologués) pour réaliser la prestation en toute autonomie.',
            },
            {
              q: 'Proposez-vous des forfaits réguliers pour les propriétaires de villas ?',
              a: 'Oui, nous proposons des contrats hebdomadaires, bimensuels ou personnalisés avec remise tarifaire dédiée. Un agent de confiance attitré est affecté à votre bien pour assurer une parfaite continuité.',
            },
            {
              q: 'Comment gérez-vous le ménage pour les locations Airbnb ?',
              a: 'Nous intervenons sur le créneau 11h-15h entre le départ des anciens voyageurs et l’arrivée des nouveaux. Nous assurons le ménage hôtelier approfondi, la gestion du linge lavé/repassé et vous envoyons un compte-rendu photo complet.',
            },
            {
              q: 'Quels produits utilisez-vous pour préserver le marbre et les zelliges ?',
              a: 'Les pierres nobles et le zellige marocain requièrent un pH strictement neutre pour éviter toute attaque acide. Nous utilisons des détergents spécialisés professionnels et des cristalliseurs thermochimiques certifiés respectant l’intégrité des matériaux.',
            },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-sm font-bold font-heading text-[#071F3F] mb-2">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071F3F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#40C6D9]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-semibold">
              Disponibilité immédiate à Marrakech
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading leading-tight">
              Prêt à retrouver un espace étincelant et serein ?
            </h2>
            <p className="text-sm text-slate-300">
              Contactez nos équipes dès aujourd'hui pour une estimation claire ou une intervention rapide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto z-10">
            <a
              href="tel:+212664696470"
              className="px-6 py-3.5 rounded-xl text-xs font-bold text-[#071F3F] bg-white hover:bg-slate-100 transition-colors cursor-pointer text-center inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#071F3F]" />
              <span>Appel direct</span>
            </a>
            <a
              href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
