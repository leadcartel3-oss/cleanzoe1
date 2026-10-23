import { ZoneItem } from '../types';

export const MARRAKECH_ZONES: ZoneItem[] = [
  {
    name: 'Guéliz',
    slug: 'gueliz',
    type: 'Zone d’affaires',
    description: 'Cœur économique et commercial de Marrakech. Intervention rapide pour bureaux, commerces, showrooms et appartements.',
    servicesAvailable: ['Nettoyage de bureaux', 'Appartements', 'Vitres & vitrines', 'Désinfection'],
    travelDelay: 'Intervention sous 2h à 4h'
  },
  {
    name: 'Hivernage',
    slug: 'hivernage',
    type: 'Quartier résidentiel',
    description: 'Secteur hôtelier et résidentiel haut standing. Prestations haut de gamme pour résidences, conciergeries et locations de prestige.',
    servicesAvailable: ['Nettoyage résidentiel', 'Airbnb & conciergerie', 'Cristallisation marbre', 'Vitres'],
    travelDelay: 'Intervention sous 2h à 4h'
  },
  {
    name: 'Palmeraie',
    slug: 'palmeraie',
    type: 'Zone villas & riads',
    description: 'Grandes propriétés, domaines privés et villas d’exception. Équipes équipées pour les grandes surfaces intérieures et parcs piscines.',
    servicesAvailable: ['Nettoyage de villas', 'Piscines & terrasses', 'Cristallisation sols', 'Après chantier'],
    travelDelay: 'Planification sur rendez-vous 7j/7'
  },
  {
    name: 'Targa & Victor Hugo',
    slug: 'targa',
    type: 'Quartier résidentiel',
    description: 'Zone pavillonnaire calme appréciée des familles. Contrats réguliers de ménage pour villas et maisons individuelles.',
    servicesAvailable: ['Nettoyage de maisons', 'Nettoyage moquettes', 'Vitres', 'Entretien régulier'],
    travelDelay: 'Intervention sous 24h'
  },
  {
    name: 'Agdal',
    slug: 'agdal',
    type: 'Zone d’affaires',
    description: 'Quartier dynamique abritant complexes résidentiels fermés, bureaux modernes et hébergements touristiques.',
    servicesAvailable: ['Copropriétés', 'Bureaux', 'Airbnb', 'Désinfection'],
    travelDelay: 'Intervention sous 2h à 4h'
  },
  {
    name: 'Médina & Riad',
    slug: 'medina',
    type: 'Zone villas & riads',
    description: 'Rénovations soignées de riads historiques, maisons d’hôtes et locations touristiques au cœur de la ville ocre.',
    servicesAvailable: ['Ménage Airbnb & Riads', 'Zelliges & marbre', 'Nettoyage fin de chantier', 'Linge'],
    travelDelay: 'Accompagnement logistique dédié'
  },
  {
    name: 'Route de l’Ourika & Route d’Amizmiz',
    slug: 'peripherie-villas',
    type: 'Périphérie',
    description: 'Domaines résidentiels, villas de vacances et réceptions en périphérie sud de Marrakech.',
    servicesAvailable: ['Grandes villas', 'Piscines & extérieurs', 'Remise en état après travaux'],
    travelDelay: 'Intervention planifiée avec véhicule équipé'
  }
];

export const SERVICE_AREA_CONFIG = {
  city: 'Marrakech',
  region: 'Marrakech-Safi',
  country: 'Maroc',
  travelPolicy: 'Déplacement sans frais supplémentaires sur l’ensemble du périmètre urbain de Marrakech.',
  disclaimer: '[ZONES D’INTERVENTION À CONFIRMER PAR LA DIRECTION CLEANZOE SELON PLANNING DU MOIS]'
};
