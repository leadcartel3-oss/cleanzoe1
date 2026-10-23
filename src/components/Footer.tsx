import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, serviceSlug?: string) => void;
  onOpenLegal?: (tab: 'mentions' | 'privacy') => void;
  onOpenLeadsInbox?: () => void;
  onOpenSeoDrawer?: () => void;
  onOpenBrandDrawer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenLeadsInbox,
}) => {
  return (
    <footer className="bg-[#fbd64a] text-[#172126] pt-16 pb-12 border-t border-[#172126]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#172126]/20">
          {/* Col 1: Brand & Présentation */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="flex flex-col select-none">
              <span className="font-heading font-extrabold tracking-tight leading-none text-[#172126] text-3xl">
                Cleanzoe
              </span>
              <span className="text-[12px] tracking-wide font-bold mt-1.5 leading-none text-[#172126]/85">
                On nettoie, vous respirez
              </span>
            </div>

            <p className="text-sm text-[#172126]/90 max-w-lg leading-relaxed font-normal">
              Cleanzoe est une société spécialisée dans le nettoyage résidentiel et professionnel à Marrakech. Nous intervenons pour les villas, appartements, bureaux, hébergements Airbnb et après chantier.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-[#172126]">
              <span className="inline-block px-2.5 py-1 bg-[#172126]/10 rounded-md border border-[#172126]/15">
                Marrakech · Maroc
              </span>
              <span className="inline-block px-2.5 py-1 bg-[#172126]/10 rounded-md border border-[#172126]/15">
                Intervention 7j/7
              </span>
              <span className="inline-block px-2.5 py-1 bg-[#172126] text-white font-semibold rounded-md shadow-xs">
                « Une propreté visible, une tranquillité durable »
              </span>
            </div>
          </div>

          {/* Col 2: Coordonnées (sans le titre 'Coordonnées Marrakech') */}
          <div className="lg:col-span-5 space-y-3 pt-1">
            <ul className="space-y-2.5 text-sm text-[#172126]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#172126] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-[#172126]/90">
                  Dior Atlas, M'hamid
                  <br />
                  Marrakech, Maroc
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#172126] shrink-0" />
                <a href="tel:+212664696470" className="text-xs font-semibold text-[#172126] hover:underline">
                  06 64 69 64 70
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#172126] shrink-0" />
                <a href="mailto:contactcleanzoe@gmail.com" className="text-xs font-medium text-[#172126]/90 hover:underline">
                  contactcleanzoe@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#172126] shrink-0 mt-0.5" />
                <span className="text-xs text-[#172126]/85">
                  Lundi – Samedi : 08h00 – 19h00
                  <br />
                  Dimanche sur réservation
                </span>
              </li>
            </ul>

            {/* Réseaux Sociaux - Directement sous les horaires */}
            <div className="pt-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#172126] font-bold block mb-2.5">
                Suivez-nous
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/cleanzoe.marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Cleanzoe Marrakech"
                  className="w-10 h-10 rounded-full bg-[#172126] text-[#fbd64a] hover:bg-[#071F3F] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 active:scale-95"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://facebook.com/cleanzoe.marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Cleanzoe Marrakech"
                  className="w-10 h-10 rounded-full bg-[#172126] text-[#fbd64a] hover:bg-[#071F3F] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 active:scale-95"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://tiktok.com/@cleanzoe.marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Cleanzoe Marrakech"
                  className="w-10 h-10 rounded-full bg-[#172126] text-[#fbd64a] hover:bg-[#071F3F] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 active:scale-95 font-heading font-black text-xs tracking-wider"
                >
                  TK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Mentions Légales & Politique de Confidentialité */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#172126]/85">
          <span className="font-medium">© 2026 Cleanzoe Marrakech. Tous droits réservés.</span>

          <div className="flex items-center gap-3 font-semibold text-[#172126]">
            <button
              type="button"
              onClick={() => (onOpenLegal ? onOpenLegal('mentions') : onNavigate('contact'))}
              className="hover:underline transition-all cursor-pointer"
            >
              Mentions Légales
            </button>
            <span aria-hidden="true" className="text-[#172126]/40">·</span>
            <button
              type="button"
              onClick={() => (onOpenLegal ? onOpenLegal('privacy') : onNavigate('contact'))}
              className="hover:underline transition-all cursor-pointer"
            >
              Politique de Confidentialité
            </button>
            {onOpenLeadsInbox && (
              <>
                <span aria-hidden="true" className="text-[#172126]/40">·</span>
                <button
                  type="button"
                  onClick={onOpenLeadsInbox}
                  className="hover:underline transition-all cursor-pointer font-bold inline-flex items-center gap-1 text-[#172126]"
                >
                  <span>📥 Boîte des Devis</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
