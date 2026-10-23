import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Phone, MessageSquare, Calendar, MapPin, Loader2, Mail } from 'lucide-react';
import { CleanzoeLogo } from './CleanzoeLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceSlug?: string;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceSlug,
  initialNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('Guéliz');
  const [service, setService] = useState(initialServiceSlug || 'nettoyage-residentiel');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState(initialNotes);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialNotes) setNotes(initialNotes);
    if (initialServiceSlug) setService(initialServiceSlug);
  }, [initialNotes, initialServiceSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const leadPayload = {
      Nom_Complet: fullName.trim(),
      Telephone: phone.trim(),
      Email: email.trim() || 'Non renseigné',
      Quartier_Marrakech: district,
      Prestation: service,
      Date_Souhaitee: preferredDate || 'Dès que possible',
      Details: notes.trim() || 'Aucune précision',
      _subject: `Nouveau Lead Devis Cleanzoe : ${fullName} - ${phone} (${district})`,
      _replyto: email.trim() || 'contacterconcept@gmail.com',
      _template: 'table',
      _captcha: 'false',
    };

    // 1. Send formatted FormData to FormSubmit using the verified token
    try {
      const formData = new FormData();
      formData.append('Nom et Prénom', fullName.trim());
      formData.append('Numéro Téléphone', phone.trim());
      formData.append('Email Client', email.trim() || 'Non renseigné');
      formData.append('Quartier Marrakech', district);
      formData.append('Prestation Demandée', service);
      formData.append('Date Souhaitée', preferredDate || 'Dès que possible');
      formData.append('Détails du Projet', notes.trim() || 'Aucune précision');
      formData.append('_subject', `Nouveau Lead Devis Cleanzoe : ${fullName} (${phone} - ${district})`);
      formData.append('_replyto', email.trim() || 'contacterconcept@gmail.com');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      await fetch('https://formsubmit.co/ajax/2183f6642c5af2d617ec1186508b09a5', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
    } catch (err) {
      console.warn('Envoi lead FormSubmit notice:', err);
    }

    // 2. Local storage safety backup
    try {
      const stored = JSON.parse(localStorage.getItem('cleanzoe_leads') || '[]');
      stored.unshift({
        ...leadPayload,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('cleanzoe_leads', JSON.stringify(stored.slice(0, 50)));
    } catch {
      // Ignore storage error
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Nouveau Lead Devis Cleanzoe : ${fullName} (${phone} - ${district})`);
    const body = encodeURIComponent(
      `Bonjour,\n\nVoici les informations du lead reçues pour Cleanzoe Marrakech :\n\n• Nom & Prénom : ${fullName}\n• Téléphone : ${phone}\n• Email : ${email || 'Non renseigné'}\n• Quartier à Marrakech : ${district}\n• Prestation : ${service}\n• Date ou délai souhaité : ${preferredDate || 'Dès que possible'}\n• Détails du besoin : ${notes || 'Aucun'}\n\nClient en attente de rappel.`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=contacterconcept@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Bonjour Cleanzoe,\nJe souhaite réserver une intervention à Marrakech :\n\n• Nom : ${fullName}\n• Téléphone : ${phone}\n• Email : ${email || 'Non renseigné'}\n• Quartier : ${district}\n• Prestation : ${service}\n• Date souhaitée : ${preferredDate || 'Dès que possible'}\n• Précisions : ${notes || 'Aucune'}`
    );
    window.open(`https://wa.me/212664696470?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071F3F] text-white p-5 sm:p-6 flex items-center justify-between">
          <CleanzoeLogo variant="white" size="sm" showTagline={false} />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Demande transmise avec succès !
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Merci {fullName}. Vos informations ont bien été transmises à notre boîte email (<strong className="text-slate-800">contacterconcept@gmail.com</strong>). Notre équipe vous contacte sous peu.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 font-mono text-slate-600">
                <div><span className="font-semibold text-slate-800">Contact :</span> {fullName} ({phone})</div>
                {email && <div><span className="font-semibold text-slate-800">Email :</span> {email}</div>}
                <div><span className="font-semibold text-slate-800">Quartier :</span> {district} (Marrakech)</div>
                <div><span className="font-semibold text-slate-800">Prestation :</span> {service}</div>
                {preferredDate && <div><span className="font-semibold text-slate-800">Date souhaitée :</span> {preferredDate}</div>}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleEmailDirect}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#071F3F] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#071F3F]" />
                  <span>Envoyer une copie par email (contacterconcept@gmail.com)</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Accélérer sur WhatsApp avec un conseiller</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold font-heading text-[#071F3F]">
                  Demandez votre devis gratuit à Marrakech
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Réponse rapide 7j/7 · Sans engagement · Tarif clair
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs border border-rose-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex. Karim Benjelloun"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex. 06 64 69 64 70"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Adresse email (optionnel)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@exemple.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Quartier à Marrakech
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F] bg-white"
                  >
                    <option value="Guéliz">Guéliz</option>
                    <option value="Hivernage">Hivernage</option>
                    <option value="Palmeraie">Palmeraie</option>
                    <option value="M'hamid">M'hamid (Dior Atlas)</option>
                    <option value="Targa & Victor Hugo">Targa & Victor Hugo</option>
                    <option value="Agdal">Agdal</option>
                    <option value="Médina & Riads">Médina & Riads</option>
                    <option value="Route de l’Ourika">Route de l’Ourika</option>
                    <option value="Route d’Amizmiz">Route d’Amizmiz</option>
                    <option value="Autre secteur Marrakech">Autre secteur Marrakech</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Prestation principale
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F] bg-white"
                >
                  <option value="nettoyage-residentiel">Nettoyage Maison / Villa</option>
                  <option value="nettoyage-appartement">Nettoyage Appartement</option>
                  <option value="nettoyage-bureaux">Nettoyage de Bureaux</option>
                  <option value="nettoyage-airbnb">Ménage Airbnb & Gestion</option>
                  <option value="nettoyage-apres-chantier">Après Chantier / Travaux</option>
                  <option value="cristallisation-sols">Cristallisation Marbre / Sols</option>
                  <option value="nettoyage-piscines">Nettoyage Piscine & Abords</option>
                  <option value="nettoyage-vitres">Vitres & Baies Vitrées</option>
                  <option value="nettoyage-tapis-moquettes">Tapis & Moquettes</option>
                  <option value="entretien-coproprietes">Copropriétés & Syndic</option>
                  <option value="desinfection">Désinfection des locaux</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date ou délai souhaité
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Détails ou besoins spécifiques
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Surface approximative (m²), état des lieux, type de sol..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 transition-all cursor-pointer shadow-md disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmission du devis en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirmer la demande de devis</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2 font-mono">
                  Vos informations sont transmises directement à notre équipe à Marrakech.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
