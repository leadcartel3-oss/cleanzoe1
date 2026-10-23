import React, { useState, useEffect } from 'react';
import { X, Inbox, Phone, Mail, MapPin, Calendar, Clock, Trash2, Download, MessageSquare, CheckCircle } from 'lucide-react';

interface LeadItem {
  id?: string;
  Nom_Complet?: string;
  Telephone?: string;
  Email?: string;
  Quartier?: string;
  Quartier_Marrakech?: string;
  Prestation?: string;
  Service_Demande?: string;
  Date_Souhaitee?: string;
  Details?: string;
  Message?: string;
  date?: string;
  timestamp?: string;
}

interface LeadsInboxDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadsInboxDrawer: React.FC<LeadsInboxDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [leads, setLeads] = useState<LeadItem[]>([]);

  const loadLeads = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('cleanzoe_leads') || '[]');
      setLeads(stored);
    } catch {
      setLeads([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const handleClearAll = () => {
    if (window.confirm('Voulez-vous effacer l’historique des leads stockés localement ?')) {
      localStorage.removeItem('cleanzoe_leads');
      setLeads([]);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Date', 'Nom', 'Téléphone', 'Email', 'Quartier', 'Prestation', 'Détails'];
    const rows = leads.map((l) => [
      `"${l.date || l.timestamp || ''}"`,
      `"${l.Nom_Complet || ''}"`,
      `"${l.Telephone || ''}"`,
      `"${l.Email || ''}"`,
      `"${l.Quartier || l.Quartier_Marrakech || ''}"`,
      `"${l.Prestation || l.Service_Demande || ''}"`,
      `"${(l.Details || l.Message || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `leads_cleanzoe_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#071F3F] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#40C6D9]">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-heading text-white">
                Boîte de Réception des Leads & Devis
              </h2>
              <p className="text-xs text-slate-300">
                Transmis à : <strong className="text-[#40C6D9]">contacterconcept@gmail.com</strong>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span className="font-semibold text-slate-800">
            {leads.length} lead{leads.length > 1 ? 's' : ''} enregistré{leads.length > 1 ? 's' : ''}
          </span>
          <div className="flex items-center gap-2">
            {leads.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 font-semibold text-slate-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exporter CSV</span>
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="px-3 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Effacer</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Body list */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {leads.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Inbox className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">Aucun lead pour le moment</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Dès qu'un visiteur remplit le formulaire de devis sur le site, les détails complets s'afficheront ici et vous seront transmis par email.
              </p>
            </div>
          ) : (
            leads.map((lead, idx) => {
              const telClean = (lead.Telephone || '').replace(/\s+/g, '');
              const waUrl = `https://wa.me/212${telClean.replace(/^0/, '').replace(/^\+212/, '')}`;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs hover:border-[#40C6D9]/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                    <div>
                      <h3 className="text-sm font-bold font-heading text-[#071F3F]">
                        {lead.Nom_Complet || 'Client Inconnu'}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{lead.date || lead.timestamp || 'Récent'}</span>
                      </div>
                    </div>
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-bold self-start sm:self-auto">
                      {lead.Prestation || lead.Service_Demande || 'Devis Nettoyage'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Phone className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                      <strong className="font-semibold">{lead.Telephone || '-'}</strong>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700">
                      <Mail className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                      <span className="truncate">{lead.Email || 'Non renseigné'}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                      <span>{lead.Quartier || lead.Quartier_Marrakech || 'Marrakech'}</span>
                    </div>

                    {lead.Date_Souhaitee && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-[#40C6D9] shrink-0" />
                        <span>{lead.Date_Souhaitee}</span>
                      </div>
                    )}
                  </div>

                  {(lead.Details || lead.Message) && (
                    <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-600">
                      <strong className="block text-slate-700 font-semibold mb-0.5">Détails du besoin :</strong>
                      <p className="whitespace-pre-line">{lead.Details || lead.Message}</p>
                    </div>
                  )}

                  {/* Quick actions for the admin */}
                  <div className="pt-1 flex flex-wrap gap-2">
                    {lead.Telephone && (
                      <>
                        <a
                          href={`tel:${lead.Telephone}`}
                          className="px-3 py-1.5 rounded-lg bg-[#071F3F] text-white text-xs font-bold hover:bg-[#071F3F]/90 flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Appeler</span>
                        </a>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center gap-1.5 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </>
                    )}
                    {lead.Email && lead.Email !== 'Non renseigné' && (
                      <a
                        href={`mailto:${lead.Email}`}
                        className="px-3 py-1.5 rounded-lg bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 flex items-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500 font-mono">
            Cleanzoe Marrakech · Gestion des prospects
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#071F3F] hover:bg-[#071F3F]/90 rounded-xl transition-all cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
