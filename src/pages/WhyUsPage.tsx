import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  FileCheck, 
  HeartHandshake, 
  CheckCircle2, 
  XCircle, 
  Star, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Award,
  Zap,
  Lock
} from 'lucide-react';

interface WhyUsPageProps {
  onNavigate: (tab: string, serviceSlug?: string) => void;
  onOpenBooking: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const pillars = [
    {
      icon: Clock,
      title: 'Ponctualité & Fiabilité 100%',
      desc: 'À Marrakech, le respect des délais est capital. Nos agents arrivent à l’heure convenue avec l’équipement complet et respectent scrupuleusement la durée programmée.',
      badge: 'Engagement strict',
    },
    {
      icon: Users,
      title: 'Personnel Formé & Déclaré',
      desc: 'Tous nos intervenants sont sélectionnés avec rigueur, formés aux protocoles professionnels d’hygiène, assurés et équipés de la tenue officielle Cleanzoe.',
      badge: 'Confiance & Sécurité',
    },
    {
      icon: Award,
      title: 'Produits & Matériel Pro de Pointe',
      desc: 'Nous utilisons des autolaveuses, injecteurs-extracteurs haute pression et des produits neutres écologiques préservant les matériaux nobles (marbre, zellige, bejmat, bois).',
      badge: 'Protection des surfaces',
    },
    {
      icon: Lock,
      title: 'Discrétion Totale en Villa & Riad',
      desc: 'Nos équipes interviennent avec tact et discrétion dans vos résidences privées, demeures d’hôtes et propriétés de luxe, dans le respect absolu de votre vie privée.',
      badge: 'Confidentialité',
    },
    {
      icon: FileCheck,
      title: 'Tarifs Clairs & Devis Sans Surprise',
      desc: 'Pas de frais cachés. Nos tarifs sont établis en amont sur devis détaillé et transparent en Dirhams (MAD). Ce qui est convenu est ce qui est facturé.',
      badge: 'Transparence totale',
    },
    {
      icon: HeartHandshake,
      title: 'Garantie Satisfaction ou Ré-intervention',
      desc: 'Votre sérénité est notre priorité absolue. Si un détail ne vous convient pas, notre équipe revient gratuitement sous 24h pour y remédier immédiatement.',
      badge: 'Garantie Cleanzoe',
    },
  ];

  const comparisonData = [
    {
      criterion: 'Encadrement & Protocole Méthodique',
      cleanzoe: 'Check-list de contrôle rigoureuse en 40 points',
      others: 'Nettoyage aléatoire et superficiel',
    },
    {
      criterion: 'Équipement & Machines Spécialisées',
      cleanzoe: 'Injecteurs-extracteurs industriels & matériel pro Kärcher/Taski',
      others: 'Balai traditionnel et serpillière ordinaire',
    },
    {
      criterion: 'Produits Adaptés aux Matériaux de Marrakech',
      cleanzoe: 'Produits pro non agressifs pour marbre, zellige, bejmat & cuir',
      others: 'Eau de Javel et décapants risquant d’abîmer les sols',
    },
    {
      criterion: 'Statut du Personnel & Assurances',
      cleanzoe: 'Équipes 100% déclarées, formées et couvertes par assurance RC',
      others: 'Personnel informel sans couverture en cas d’accident ou de casse',
    },
    {
      criterion: 'Garantie Post-Prestation',
      cleanzoe: 'Ré-intervention offerte sous 24h si insatisfaction',
      others: 'Aucun recours après le départ de l’intervenant',
    },
    {
      criterion: 'Disponibilité & Réactivité',
      cleanzoe: 'Service disponible 7j/7, devis sous 15 minutes sur WhatsApp',
      others: 'Difficulté à joindre et retards fréquents',
    },
  ];

  const testimonials = [
    {
      author: 'Karim B.',
      role: 'Propriétaire de Villa · Palmeraie Marrakech',
      quote: 'Cleanzoe intervient deux fois par mois dans notre villa de 450 m². Le marbre est étincelant et l’équipe est extrêmement discrète et polie. Un vrai service 5 étoiles.',
      rating: 5,
    },
    {
      author: 'Sophie L.',
      role: 'Superhost Airbnb · Hivernage & Guéliz',
      quote: 'Gérer 4 appartements en location courte durée à Marrakech était un casse-tête avant Cleanzoe. Draps, sanitaires, vitres : tout est impeccable entre deux arrivées. Zéro plainte voyageur !',
      rating: 5,
    },
    {
      author: 'Mehdi A.',
      role: 'Directeur d’Agence & Showroom · Sidi Ghanem',
      quote: 'Nos bureaux et notre espace d’exposition sont impeccables chaque matin. Le devis a été clair dès le départ et la facturation est parfaitement professionnelle.',
      rating: 5,
    },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200/80 rounded-lg text-xs font-mono font-semibold text-[#0082E6]">
          <Award className="w-3.5 h-3.5" />
          <span>Pourquoi Choisir Cleanzoe · Marrakech</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071F3F] tracking-tight leading-[1.15]">
          Pourquoi Nous Faire Confiance pour le Nettoyage de Vos Espaces ?
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          À Marrakech, trouver un service de nettoyage à la fois ponctuel, méticuleux et respectueux de vos biens précieux n’a jamais été aussi simple. Cleanzoe allie standard hôtelier de luxe et relation de confiance de proximité.
        </p>
      </div>

      {/* 2. STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#071F3F] font-mono">
            300+
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Villas & locaux nettoyés à Marrakech
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0082E6] font-mono">
            99.4%
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Clients satisfaits et fidélisés
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#F5BF23] font-mono">
            7j/7
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Disponibilité et interventions d’urgence
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-600 font-mono">
            100%
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Équipes formées, déclarées & assurées
          </div>
        </div>
      </div>

      {/* 3. LES 6 PILIERS D'EXCELLENCE CLEANZOE */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-bold">
            Les Engagements Cleanzoe
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071F3F]">
            Nos 6 Piliers d'Excellence & de Sérénité
          </h2>
          <p className="text-sm text-slate-600">
            Chaque intervention répond à des règles strictes qui font la différence dès la première heure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 hover:border-[#40C6D9]/50 hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#071F3F] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0082E6]" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-heading text-[#071F3F]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. COMPARISON TABLE */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#0082E6] font-bold">
            Comparatif Objectif
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071F3F]">
            Pourquoi Cleanzoe fait la différence à Marrakech
          </h2>
          <p className="text-sm text-slate-600">
            Comparez notre niveau de rigueur professionnelle avec les solutions de nettoyage informelles.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4 w-1/3">Critère de Qualité</th>
                <th className="py-3 px-4 w-1/3 text-[#071F3F] bg-sky-100/60 rounded-t-xl">
                  ✨ Avec Cleanzoe
                </th>
                <th className="py-3 px-4 w-1/3 text-slate-400">
                  Nettoyage ordinaire / informel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-100/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    {row.criterion}
                  </td>
                  <td className="py-4 px-4 bg-sky-50/50 text-[#071F3F] font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.cleanzoe}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. TÉMOIGNAGES CLIENTS VÉRIFIÉS */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#F5BF23] font-bold">
            Retours d'Expérience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071F3F]">
            Ce que disent nos clients à Marrakech
          </h2>
          <p className="text-sm text-slate-600">
            Des avis réels de propriétaires et professionnels qui nous confient leurs espaces toute l'année.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#F5BF23]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  « {t.quote} »
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <div className="text-sm font-bold text-[#071F3F] font-heading">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CALL TO ACTION FINAL */}
      <div className="bg-[#071F3F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#40C6D9]/10 blur-2xl pointer-events-none" />
        <div className="max-w-2xl space-y-4 relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-bold">
            Passez à la vitesse supérieure
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            Offrez à vos espaces le soin Cleanzoe qu'ils méritent.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Devis gratuit sans engagement, réponse en quelques minutes et intervention rapide partout à Marrakech.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <a
              href="tel:+212664696470"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#071F3F] bg-white hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#071F3F]" />
              <span>Appel direct</span>
            </a>
            <a
              href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
