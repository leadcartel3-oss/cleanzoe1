import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, ShieldCheck, Palette } from 'lucide-react';
import { CleanzoeLogo } from './CleanzoeLogo';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, serviceSlug?: string) => void;
  onOpenBooking: () => void;
  onOpenSeoDrawer: () => void;
  onOpenBrandDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenBooking,
  onOpenSeoDrawer,
  onOpenBrandDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À Propos' },
    { id: 'why-us', label: 'Pourquoi Nous' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbd64a] border-b border-[#172126]/20 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single cohesive logo mark) */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#172126] rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90 cursor-pointer"
        >
          <CleanzoeLogo
            variant="color"
            size="md"
            showTagline={true}
            imgStyle={{
              height: '93.9805px',
              width: '143.004px',
              marginLeft: '-42px',
              marginTop: '6px',
              marginRight: '-4px',
              marginBottom: '-15px',
              paddingLeft: '10px',
              paddingRight: '10px',
              paddingTop: '-10px',
              paddingBottom: '20px',
            }}
            brandNameStyle={{
              width: '101.77px',
              height: '23.9844px',
              paddingLeft: '6px',
              paddingRight: '5px',
              paddingTop: '-1px',
              paddingBottom: '10px',
              marginLeft: '-50px',
              marginRight: '-9px',
              marginTop: '21px',
              marginBottom: '-1px',
            }}
            taglineStyle={{
              width: '85.6055px',
              height: '5.98828px',
              marginLeft: '-42px',
              marginTop: '-2px',
              marginBottom: '25px',
              paddingLeft: '0px',
              paddingTop: '2px',
              paddingRight: '3px',
              paddingBottom: '6px',
              marginRight: '-11px',
            }}
          />
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#172126]/85">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 cursor-pointer relative ${
                  isActive
                    ? 'text-[#172126] font-extrabold'
                    : 'hover:text-[#172126]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#172126] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Brand Identity / Guideline Quick Inspector Button */}
          <button
            type="button"
            onClick={onOpenBrandDrawer}
            title="Consulter la charte graphique et la palette Cleanzoe"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#172126] bg-[#172126]/10 hover:bg-[#172126]/15 rounded-lg border border-[#172126]/15 transition-colors cursor-pointer"
          >
            <Palette className="w-3.5 h-3.5 text-[#172126]" />
            <span>Charte & Palette</span>
          </button>

          {/* Technical SEO Audit Button */}
          <button
            type="button"
            onClick={onOpenSeoDrawer}
            title="Inspecter le SEO technique (Sitemap, Robots.txt, Schema.org LocalBusiness)"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#172126] bg-[#172126]/10 hover:bg-[#172126]/15 rounded-lg border border-[#172126]/15 transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#172126]" />
            <span>SEO & Schema</span>
          </button>

          {/* Direct WhatsApp Call-to-Action */}
          <a
            href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-emerald-950 bg-white/90 hover:bg-white border border-emerald-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Action Button -> Direct Phone Call */}
          <a
            href="tel:+212664696470"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#172126] hover:bg-[#071F3F] active:scale-98 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Appel direct</span>
          </a>
        </div>

        {/* Mobile Header Actions (Replaced Devis CTA with WhatsApp & Appel buttons) */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Cleanzoe"
            className="inline-flex items-center justify-center p-2 text-emerald-950 bg-white/90 hover:bg-white border border-emerald-300 rounded-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
          </a>

          <a
            href="tel:+212664696470"
            aria-label="Appeler directement Cleanzoe"
            className="inline-flex items-center justify-center p-2 text-[#172126] bg-white/90 hover:bg-white border border-[#172126]/20 rounded-lg transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#172126]" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#172126] hover:bg-[#172126]/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Ouvrir le menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#172126]/20 bg-[#fbd64a] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#172126] text-white font-bold'
                      : 'text-[#172126] hover:bg-[#172126]/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#172126]/20 flex flex-col gap-2.5">
            {/* 2 CTA Buttons: WhatsApp & Appel Normal */}
            <a
              href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="tel:+212664696470"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-[#172126] bg-white hover:bg-slate-50 border border-[#172126]/20 active:scale-[0.99] transition-all"
            >
              <Phone className="w-4 h-4 text-[#172126]" />
              <span>Appel direct</span>
            </a>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandDrawer();
                }}
                className="w-full py-2 text-xs font-semibold text-[#172126] bg-[#172126]/10 hover:bg-[#172126]/15 rounded-lg text-center border border-[#172126]/20"
              >
                Charte Graphique
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
