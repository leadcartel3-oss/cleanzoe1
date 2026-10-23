import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ZonesPage } from './pages/ZonesPage';
import { AboutPage } from './pages/AboutPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteCalculator } from './components/QuoteCalculator';
import { BookingModal } from './components/BookingModal';
import { BrandGuideDrawer } from './components/BrandGuideDrawer';
import { SeoAuditDrawer } from './components/SeoAuditDrawer';
import { LegalModal } from './components/LegalModal';
import { LeadsInboxDrawer } from './components/LeadsInboxDrawer';

import { LogoProvider } from './context/LogoContext';
import { LogoCustomizerModal } from './components/LogoCustomizerModal';

export default function App() {
  return (
    <LogoProvider>
      <AppContent />
    </LogoProvider>
  );
}

function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('nettoyage-residentiel');
  
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingServiceSlug, setBookingServiceSlug] = useState<string | undefined>();
  const [bookingNotes, setBookingNotes] = useState<string | undefined>();

  const [isBrandDrawerOpen, setIsBrandDrawerOpen] = useState<boolean>(false);
  const [isSeoDrawerOpen, setIsSeoDrawerOpen] = useState<boolean>(false);

  const [isLegalModalOpen, setIsLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<'mentions' | 'privacy'>('mentions');
  const [isLeadsInboxOpen, setIsLeadsInboxOpen] = useState<boolean>(false);

  // Synchronize document title and canonical URL per page
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Entreprise de Nettoyage à Marrakech | Cleanzoe',
      services: 'Services de Nettoyage Professionnel & Résidentiel Marrakech | Cleanzoe',
      'service-detail': 'Prestation Spécialisée Nettoyage Marrakech | Cleanzoe',
      devis: 'Simulateur Devis Nettoyage Marrakech | Cleanzoe',
      zones: 'Zones d’Intervention Nettoyage à Marrakech | Cleanzoe',
      about: 'À Propos & Charte Qualité Cleanzoe Marrakech',
      'why-us': 'Pourquoi Choisir Cleanzoe Marrakech | Vos Garanties',
      contact: 'Contacter Société de Nettoyage Marrakech | Cleanzoe',
    };

    document.title = titles[currentTab] || 'Entreprise de Nettoyage à Marrakech | Cleanzoe';
  }, [currentTab, selectedServiceSlug]);

  const handleNavigate = (tab: string, serviceSlug?: string) => {
    if (serviceSlug) {
      setSelectedServiceSlug(serviceSlug);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceSlug?: string, notes?: string) => {
    setBookingServiceSlug(serviceSlug);
    setBookingNotes(notes);
    setIsBookingOpen(true);
  };

  const handleOpenLegal = (tab: 'mentions' | 'privacy' = 'mentions') => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-body selection:bg-[#40C6D9]/25 selection:text-[#071F3F]">
      {/* Top Navbar Contract */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenSeoDrawer={() => setIsSeoDrawerOpen(true)}
        onOpenBrandDrawer={() => setIsBrandDrawerOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'service-detail' && (
          <ServiceDetailPage
            slug={selectedServiceSlug}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'devis' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#40C6D9] font-bold">
                Estimation transparente · Marrakech
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#071F3F]">
                Simulateur de Devis en Ligne
              </h1>
              <p className="text-base text-slate-600">
                Ajustez votre superficie en m² et vos options pour obtenir immédiatement votre tarif indicatif en Dirhams (MAD).
              </p>
            </div>
            <QuoteCalculator
              onOpenBookingWithDetails={(notes) => handleOpenBooking(undefined, notes)}
            />
          </div>
        )}

        {currentTab === 'zones' && (
          <ZonesPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onOpenBooking={() => handleOpenBooking()}
            onOpenBrandDrawer={() => setIsBrandDrawerOpen(true)}
          />
        )}

        {currentTab === 'why-us' && (
          <WhyUsPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentTab === 'contact' && <ContactPage />}
      </main>

      {/* Interactive Drawers & Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceSlug={bookingServiceSlug}
        initialNotes={bookingNotes}
      />

      <BrandGuideDrawer
        isOpen={isBrandDrawerOpen}
        onClose={() => setIsBrandDrawerOpen(false)}
      />

      <SeoAuditDrawer
        isOpen={isSeoDrawerOpen}
        onClose={() => setIsSeoDrawerOpen(false)}
      />

      {/* In-App Logo Customizer & File Uploader */}
      <LogoCustomizerModal />

      {/* Mentions Légales & Politique de Confidentialité Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        defaultTab={legalModalTab}
      />

      {/* Boîte de Réception des Leads en direct */}
      <LeadsInboxDrawer
        isOpen={isLeadsInboxOpen}
        onClose={() => setIsLeadsInboxOpen(false)}
      />

      {/* Structured Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={handleOpenLegal}
        onOpenLeadsInbox={() => setIsLeadsInboxOpen(true)}
        onOpenSeoDrawer={() => setIsSeoDrawerOpen(true)}
        onOpenBrandDrawer={() => setIsBrandDrawerOpen(true)}
      />
    </div>
  );
}
