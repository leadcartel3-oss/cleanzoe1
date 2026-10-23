import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Instagram, Facebook, Loader2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Nettoyage Résidentiel');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadPayload = {
      Nom_Complet: name.trim(),
      Telephone: phone.trim(),
      Email: email.trim() || 'Non renseigné',
      Service_Demande: service,
      Message: message.trim(),
      _subject: `Nouveau Message Contact Cleanzoe : ${name} - ${phone}`,
      _replyto: email.trim() || 'contacterconcept@gmail.com',
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const formData = new FormData();
      formData.append('Nom Complet', name.trim());
      formData.append('Numéro Téléphone', phone.trim());
      formData.append('Email Client', email.trim() || 'Non renseigné');
      formData.append('Prestation Demandée', service);
      formData.append('Message & Précisions', message.trim());
      formData.append('_subject', `Nouveau Message Contact Cleanzoe : ${name} (${phone})`);
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
      console.warn('Envoi lead Contact notice:', err);
    }

    try {
      const stored = JSON.parse(localStorage.getItem('cleanzoe_leads') || '[]');
      stored.unshift({
        ...leadPayload,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('cleanzoe_leads', JSON.stringify(stored.slice(0, 50)));
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setIsSent(true);
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>Cleanzoe Marrakech</span>
          <span aria-hidden="true">·</span>
          <span>Contact Direct</span>
          <span aria-hidden="true">·</span>
          <span>Service Client 7j/7</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071F3F] tracking-tight">
          Contacter Notre Société de Nettoyage à Marrakech
        </h1>

        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Une question sur nos prestations, une demande de devis sur mesure ou une intervention urgente ? Notre équipe marrakchie vous répond avec réactivité.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info & NAP */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold font-heading text-[#071F3F]">
              Coordonnées Officielles
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#40C6D9]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Adresse commerciale (NAP)
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    Dior Atlas, M'hamid
                  </p>
                  <p className="text-xs text-slate-500">
                    Marrakech, Région Marrakech-Safi, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#40C6D9]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Téléphone (Click-to-Call)
                  </span>
                  <a
                    href="tel:+212664696470"
                    className="text-sm font-semibold text-[#071F3F] hover:underline mt-0.5 block"
                  >
                    06 64 69 64 70
                  </a>
                  <p className="text-xs text-slate-500">Appel direct 7j/7</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#40C6D9]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Email officiel
                  </span>
                  <a
                    href="mailto:contactcleanzoe@gmail.com"
                    className="text-sm font-semibold text-[#071F3F] hover:underline mt-0.5 block"
                  >
                    contactcleanzoe@gmail.com
                  </a>
                  <p className="text-xs text-slate-500">Réponse sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-700 block font-semibold">
                    WhatsApp Professionnel
                  </span>
                  <a
                    href="https://wa.me/212664696470?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20%C3%A0%20Marrakech."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-800 hover:underline mt-0.5 block"
                  >
                    06 64 69 64 70 (WhatsApp)
                  </a>
                  <p className="text-xs text-slate-500">Réponse rapide & devis instantané</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#071F3F] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#40C6D9]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Horaires d'intervention
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    Lundi au Samedi : 08h00 – 19h00
                  </p>
                  <p className="text-xs text-slate-500">
                    Dimanche et créneaux de nuit : sur réservation
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Mobile Call Button */}
            <div className="pt-2">
              <a
                href="tel:+212664696470"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Appel direct</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                Retrouvez Cleanzoe sur les réseaux
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/cleanzoe.marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Cleanzoe Marrakech"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#40C6D9] text-slate-700 hover:text-[#071F3F] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://facebook.com/cleanzoe.marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Cleanzoe Marrakech"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#40C6D9] text-slate-700 hover:text-[#071F3F] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://tiktok.com/@cleanzoe.marrakech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Cleanzoe Marrakech"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#40C6D9] text-slate-700 hover:text-[#071F3F] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95 font-heading font-black text-xs tracking-wider"
                >
                  TK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {isSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Message envoyé avec succès !
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Merci {name}. Votre demande est bien enregistrée par notre équipe à Marrakech. Un conseiller vous contacte sous peu.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-bold text-[#071F3F] bg-slate-100 rounded-xl hover:bg-slate-200 cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold font-heading text-[#071F3F] mb-1">
                  Envoyez-nous un message
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Remplissez ce formulaire pour recevoir un devis détaillé sans engagement.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Karim Tazi"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Téléphone mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+212 6 XX XX XX XX"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email professionnel ou personnel
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service concerné
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F] bg-white"
                    >
                      <option value="Nettoyage Résidentiel">Nettoyage Résidentiel (Villas & Maisons)</option>
                      <option value="Nettoyage Appartement">Nettoyage Appartement</option>
                      <option value="Nettoyage Bureaux">Nettoyage Bureaux & Locaux Pro</option>
                      <option value="Nettoyage Airbnb">Nettoyage Airbnb & Conciergerie</option>
                      <option value="Après Chantier">Remise en état après travaux</option>
                      <option value="Cristallisation Sols">Cristallisation Marbre & Sols</option>
                      <option value="Nettoyage Piscines">Nettoyage de Piscines</option>
                      <option value="Nettoyage Vitres">Nettoyage Baies Vitrées</option>
                      <option value="Autre demande">Autre demande spécifique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Votre message ou détails de votre besoin *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Surface en m², localisation à Marrakech (Guéliz, Palmeraie...), état des lieux, date souhaitée..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#071F3F]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 transition-all cursor-pointer shadow-md disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer la demande d'information</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
