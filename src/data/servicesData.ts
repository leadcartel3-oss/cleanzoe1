import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residentiel',
    slug: 'nettoyage-residentiel',
    name: 'Nettoyage Résidentiel (Maisons & Villas)',
    shortDesc: 'Entretien minutieux et régulier de votre villa ou maison à Marrakech pour un intérieur sain, soigné et prêt à vivre.',
    primaryKeyword: 'nettoyage maison Marrakech',
    secondaryKeywords: ['nettoyage villa Marrakech', 'nettoyage résidentiel Marrakech', 'femme de ménage villa Marrakech'],
    audience: 'Particuliers',
    category: 'residential',
    image: '/src/assets/images/cleanzoe_marrakech_villa_1791047035603.jpg',
    imageAlt: 'Nettoyage professionnel dans une villa lumineuse à Marrakech avec vue terrasse',
    highlights: ['Équipes discrètes et expérimentées', 'Produits respectueux des matériaux nobles', 'Contrats flexibles ou passages ponctuels'],
    includes: [
      'Dépoussiérage et désinfection approfondie de toutes les pièces de vie',
      'Nettoyage et dégraissage complet des cuisines (plans de travail, électroménager extérieur)',
      'Détartrage et assainissement complet des salles de bains et sanitaires',
      'Aspiration et lavage des sols adaptés (marbre, travertin, carreaux de ciment, parquets)',
      'Nettoyage des boiseries, plinthes, portes et interrupteurs'
    ],
    process: [
      { step: '01', title: 'Évaluation des besoins', desc: 'Prise de contact rapide pour estimer la superficie et vos attentes particulières.' },
      { step: '02', title: 'Intervention planifiée', desc: 'Arrivée ponctuelle de nos agents en tenue officielle Cleanzoe avec matériel professionnel.' },
      { step: '03', title: 'Contrôle qualité', desc: 'Revue point par point des espaces pour garantir un résultat net et durable.' }
    ],
    targetAudience: 'Propriétaires de villas, résidents secondaires et familles à Marrakech recherchant un service régulier et fiable.',
    idealFor: ['Entretien hebdomadaire', 'Grand ménage de printemps', 'Préparation avant arrivée des propriétaires'],
    faqs: [
      {
        question: 'Fournissez-vous les produits et le matériel de nettoyage ?',
        answer: 'Oui, Cleanzoe fournit l’ensemble des produits professionnels certifiés et le matériel technique (aspirateurs professionnels, microfibres dédiées par zone, mono-brosses si nécessaire).'
      },
      {
        question: 'Intervenez-vous dans les villas en dehors du centre de Marrakech ?',
        answer: 'Absolument. Nous couvrons l’ensemble de Marrakech ainsi que la Palmeraie, l’Agdal, la Route de l’Ourika et la Route d’Amizmiz.'
      }
    ],
    estimatedStartingPrice: 'À partir de 350 MAD'
  },
  {
    id: 'appartements',
    slug: 'nettoyage-appartement',
    name: 'Nettoyage d’Appartements',
    shortDesc: 'Un nettoyage sur-mesure pour appartements et penthouses à Marrakech. Efficacité, rapidité et finition soignée.',
    primaryKeyword: 'nettoyage appartement Marrakech',
    secondaryKeywords: ['ménage appartement Marrakech', 'nettoyage penthouse Marrakech', 'société nettoyage appartement Marrakech'],
    audience: 'Particuliers',
    category: 'residential',
    image: '/src/assets/images/cleanzoe_marrakech_villa_1791047035603.jpg',
    imageAlt: 'Nettoyage soigné d’un appartement moderne au cœur de Marrakech',
    highlights: ['Formules ponctuelles ou régulières', 'Respect strict de vos biens et de votre intimité', 'Tarification claire et sans surprise'],
    includes: [
      'Nettoyage des surfaces, meubles et étagères',
      'Désinfection des sanitaires et dégraissage cuisine',
      'Nettoyage des vitres intérieures et miroirs',
      'Lavage et lustrage des sols'
    ],
    process: [
      { step: '01', title: 'Réservation simplifiée', desc: 'Indiquez le nombre de pièces et votre créneau souhaité via WhatsApp ou notre formulaire.' },
      { step: '02', title: 'Nettoyage méticuleux', desc: 'Nos intervenants traitent chaque zone avec méthode.' },
      { step: '03', title: 'Restitution impeccable', desc: 'Un appartement frais et prêt à vivre.' }
    ],
    targetAudience: 'Locataires, propriétaires résidents et expatriés à Marrakech (Guéliz, Hivernage, Majorelle, Victor Hugo).',
    idealFor: ['Ménage régulier', 'Nettoyage d’état des lieux', 'Après déménagement'],
    faqs: [
      {
        question: 'Combien de temps dure une intervention pour un appartement ?',
        answer: 'En moyenne entre 2h et 4h selon la superficie et l’état initial des lieux.'
      }
    ],
    estimatedStartingPrice: 'À partir de 250 MAD'
  },
  {
    id: 'bureaux',
    slug: 'nettoyage-bureaux',
    name: 'Nettoyage de Bureaux & Espaces Professionnels',
    shortDesc: 'Garantissez un environnement de travail sain, ordonné et valorisant pour vos collaborateurs et clients à Marrakech.',
    primaryKeyword: 'nettoyage bureaux Marrakech',
    secondaryKeywords: ['nettoyage professionnel Marrakech', 'société nettoyage locaux Marrakech', 'entretien bureaux Marrakech'],
    audience: 'Professionnels',
    category: 'commercial',
    image: '/src/assets/images/cleanzoe_glass_cleaning_1791047062400.jpg',
    imageAlt: 'Équipe Cleanzoe assurant le nettoyage professionnel de bureaux à Marrakech',
    highlights: ['Horaires décalés (tôt le matin ou en soirée)', 'Personnel sous contrat et formé', 'Facturation d’entreprise transparente'],
    includes: [
      'Désinfection des postes de travail, claviers, combinés et poignées',
      'Vidage et tri des corbeilles à papier et poubelles',
      'Nettoyage des salles de réunion, banques d’accueil et réceptions',
      'Entretien approfondi et réapprovisionnement des sanitaires',
      'Aspiration des moquettes et lavage des sols durs'
    ],
    process: [
      { step: '01', title: 'Visite technique', desc: 'Analyse du cahier des charges et des contraintes d’horaires.' },
      { step: '02', title: 'Devis sur mesure', desc: 'Proposition détaillée avec fréquence hebdomadaire ou quotidienne.' },
      { step: '03', title: 'Supervision continue', desc: 'Suivi rigoureux par un responsable dédié Cleanzoe.' }
    ],
    targetAudience: 'Entreprises, cabinets d’avocats, agences, espaces de coworking, cliniques et commerces à Marrakech.',
    idealFor: ['Entretien quotidien ou 3x/semaine', 'Nettoyage de sièges sociaux', 'Espaces recevant du public'],
    faqs: [
      {
        question: 'Pouvez-vous intervenir en dehors des heures de bureau ?',
        answer: 'Oui, nous adaptons nos plannings pour intervenir tôt le matin avant l’ouverture ou le soir après la fermeture des bureaux.'
      }
    ],
    estimatedStartingPrice: 'Sur devis personnalisé'
  },
  {
    id: 'airbnb',
    slug: 'nettoyage-airbnb',
    name: 'Nettoyage Airbnb & Gestion des Rotations',
    shortDesc: 'Service hôtelier clé-en-main pour hôtes et conciergeries Airbnb à Marrakech. Zéro stress, notes 5 étoiles en propreté.',
    primaryKeyword: 'nettoyage Airbnb Marrakech',
    secondaryKeywords: ['ménage Airbnb Marrakech', 'conciergerie nettoyage Airbnb Marrakech', 'service rotation Airbnb Marrakech'],
    audience: 'Airbnb',
    category: 'airbnb',
    image: '/src/assets/images/cleanzoe_marrakech_villa_1791047035603.jpg',
    imageAlt: 'Chambre et villa préparées selon les standards de propreté Airbnb par Cleanzoe Marrakech',
    highlights: ['Coordination sur calendrier d’arrivées/départs', 'Gestion du linge de lit et de bain', 'Rapport photo systématique après passage'],
    includes: [
      'Nettoyage et désinfection complète entre chaque séjour de voyageurs',
      'Changement et mise en place soignée des draps et serviettes',
      'Réapprovisionnement des consommables d’accueil (savon, papier, café)',
      'Vérification des équipements et signalement immédiat d’éventuelles anomalies',
      'Préparation de la terrasse et des extérieurs privatifs'
    ],
    process: [
      { step: '01', title: 'Synchronisation', desc: 'Partage du calendrier de réservations Airbnb / Booking.' },
      { step: '02', title: 'Rotation express', desc: 'Intervention entre 11h et 15h par des agents formés aux standards hôteliers.' },
      { step: '03', title: 'Validation photo', desc: 'Envoi d’un compte-rendu avec photos attestant de la perfection des lieux.' }
    ],
    targetAudience: 'Propriétaires de riads, appartements et villas en location courte durée à Marrakech.',
    idealFor: ['Rotations de voyageurs', 'Check-out le matin / Check-in l’après-midi', 'Préparation haute saison'],
    faqs: [
      {
        question: 'Prenez-vous en charge le blanchissage du linge ?',
        answer: 'Oui, nous proposons une formule intégrant la collecte, le lavage, le repassage et la réinstallation du linge hôtelier.'
      }
    ],
    estimatedStartingPrice: 'Formules au séjour ou pack mensuel'
  },
  {
    id: 'apres-chantier',
    slug: 'nettoyage-apres-chantier',
    name: 'Remise en État Après Chantier & Travaux',
    shortDesc: 'Élimination radicale des poussières de plâtre, résidus de peinture, colle et ciment après construction ou rénovation.',
    primaryKeyword: 'nettoyage après chantier Marrakech',
    secondaryKeywords: ['remise en état après travaux Marrakech', 'nettoyage fin de chantier Marrakech', 'décapage après travaux Marrakech'],
    audience: 'Tous',
    category: 'renovation',
    image: '/src/assets/images/cleanzoe_marble_floor_1791047072471.jpg',
    imageAlt: 'Sol en marbre et baies vitrées après remise en état complète post-travaux à Marrakech',
    highlights: ['Matériel industriel de haute puissance', 'Équipes rodées aux chantiers exigeants', 'Locaux livrés prêts à habiter ou à meubler'],
    includes: [
      'Aspiration industrielle des micro-poussières fines sur murs, plafonds et plinthes',
      'Gratte et élimination des résidus de colle, silicone, ciment et peinture',
      'Décapage mécanique des sols et élimination de la laitance de ciment',
      'Lavage en profondeur des châssis, encadrements et vitrages',
      'Désinfection complète des pièces sanitaires et cuisines nouvellement installées'
    ],
    process: [
      { step: '01', title: 'Diagnostic sur site', desc: 'Mesure des surfaces et identification des types de salissures de chantier.' },
      { step: '02', title: 'Plan d’attaque technique', desc: 'Mobilisation d’aspirateurs à filtration HEPA et monobrosses adaptées.' },
      { step: '03', title: 'Livraison clé en main', desc: 'Validation conjointe avant signature du procès-verbal de livraison.' }
    ],
    targetAudience: 'Architectes, promoteurs immobiliers, décorateurs d’intérieur et propriétaires rénovateurs à Marrakech.',
    idealFor: ['Fin de travaux de peinture', 'Réception d’appartement neuf', 'Rénovation totale de villa'],
    faqs: [
      {
        question: 'À quel moment faire intervenir l’équipe de nettoyage après chantier ?',
        answer: 'Dès que le dernier artisan a quitté le chantier et que tous les travaux de gros œuvre et de finitions sont terminés.'
      }
    ],
    estimatedStartingPrice: 'Sur devis après métré'
  },
  {
    id: 'cristallisation-sols',
    slug: 'cristallisation-sols',
    name: 'Cristallisation & Décapage des Sols',
    shortDesc: 'Restaurez l’éclat miroir et la noblesse de vos sols en marbre, travertin, zellige, carrelage et dalles béton à Marrakech.',
    primaryKeyword: 'cristallisation sols Marrakech',
    secondaryKeywords: ['décapage sols Marrakech', 'lustrage marbre Marrakech', 'ponçage marbre Marrakech', 'nettoyage béton Marrakech'],
    audience: 'Tous',
    category: 'specialized',
    image: '/src/assets/images/cleanzoe_marble_floor_1791047072471.jpg',
    imageAlt: 'Sol en marbre cristallisé avec éclat miroir éclatant dans une villa de Marrakech',
    highlights: ['Traitement thermo-chimique non glissant', 'Protection anti-taches longue durée', 'Monobrosses haute vitesse professionnelles'],
    includes: [
      'Diagnostic du type de pierre naturelle ou revêtement (marbre de Thala, Carrare, zellige)',
      'Décapage en profondeur pour retirer anciennes cires et impuretés incrustées',
      'Montée en brillance par cristallisation par réaction mécano-chimique',
      'Application d’un hydrofuge-oléofuge de protection contre les infiltrations',
      'Lustrage final pour un reflet miroir incomparable'
    ],
    process: [
      { step: '01', title: 'Décapage préalable', desc: 'Élimination des couches ternies à l’aide d’un décapant neutre professionnel.' },
      { step: '02', title: 'Cristallisation', desc: 'Passage de la monobrosse avec disque de laine d’acier et produit cristallisant.' },
      { step: '03', title: 'Finition protectrice', desc: 'Lustrage et scellement des pores pour une durabilité maximale.' }
    ],
    targetAudience: 'Propriétaires de riads, villas de luxe, hôtels et résidences recherchant des sols éclatants.',
    idealFor: ['Marbre terni par le calcaire', 'Rénovation de zelliges traditionnels', 'Traitement des bétons cirés'],
    faqs: [
      {
        question: 'Le sol devient-il glissant après la cristallisation ?',
        answer: 'Non, la cristallisation Cleanzoe modifie la structure superficielle du marbre par polissage mécanique sans créer de film glissant, assurant une parfaite sécurité.'
      }
    ],
    estimatedStartingPrice: 'Tarif au m² après diagnostic'
  },
  {
    id: 'piscines',
    slug: 'nettoyage-piscines',
    name: 'Nettoyage & Protection des Piscines',
    shortDesc: 'Entretien approfondi des bassins, margelles, plages et équilibre de l’eau sous le soleil généreux de Marrakech.',
    primaryKeyword: 'nettoyage piscines Marrakech',
    secondaryKeywords: ['entretien piscine Marrakech', 'lavage margelles piscine Marrakech', 'traitement eau piscine Marrakech'],
    audience: 'Particuliers',
    category: 'specialized',
    image: '/src/assets/images/cleanzoe_marrakech_villa_1791047035603.jpg',
    imageAlt: 'Piscine turquoise et terrasse nettoyée par Cleanzoe dans une propriété de Marrakech',
    highlights: ['Eau cristalline toute l’année', 'Détartrage des lignes d’eau et zelliges', 'Nettoyage haute pression des plages'],
    includes: [
      'Brossage des parois, du fond de bassin et de la ligne d’eau',
      'Nettoyage haute pression et décapage doux des margelles et plages de piscine',
      'Contrôle et équilibrage des paramètres chimiques (pH, chlore, anti-algues)',
      'Nettoyage des paniers de skimmers et contre-lavage des filtres',
      'Évacuation des dépôts de poussière du désert et feuilles'
    ],
    process: [
      { step: '01', title: 'Contrôle visuel & chimique', desc: 'Vérification de la limpidité de l’eau et des filtres.' },
      { step: '02', title: 'Aspiration & brossage', desc: 'Aspiration robotisée ou manuelle de chaque recoin.' },
      { step: '03', title: 'Nettoyage des abords', desc: 'Dégraissage et lavage des dalles et transats environnants.' }
    ],
    targetAudience: 'Villas avec piscine privée, riads d’hôtes et copropriétés à Marrakech.',
    idealFor: ['Contrat d’entretien régulier', 'Remise en route estivale', 'Après tempête de sable / Chergui'],
    faqs: [
      {
        question: 'Proposez-vous des passages réguliers pour la piscine ?',
        answer: 'Oui, nous proposons des forfaits d’entretien 1 à 2 fois par semaine garantissant un bassin toujours prêt à la baignade.'
      }
    ],
    estimatedStartingPrice: 'Forfaits à partir de 400 MAD/mois'
  },
  {
    id: 'vitres',
    slug: 'nettoyage-vitres',
    name: 'Nettoyage des Vitres & Baies Vitrées',
    shortDesc: 'Lavage sans traces des vitrages panoramiques, verrières et garde-corps pour une luminosité maximale dans votre intérieur.',
    primaryKeyword: 'nettoyage vitres Marrakech',
    secondaryKeywords: ['nettoyage baies vitrées Marrakech', 'lavage vitres sans traces Marrakech', 'nettoyage verrière Marrakech'],
    audience: 'Tous',
    category: 'specialized',
    image: '/src/assets/images/cleanzoe_glass_cleaning_1791047062400.jpg',
    imageAlt: 'Technicien Cleanzoe nettoyant les baies vitrées d’une résidence à Marrakech',
    highlights: ['Technique professionnelle au mouilleur et raclette', 'Traitement anti-poussière spécifique climat sec', 'Intervention en hauteur sécurisée'],
    includes: [
      'Dépoussiérage méticuleux des coulisses, rails et rainures de baies vitrées',
      'Nettoyage des châssis, encadrements et poignées',
      'Lavage des deux faces vitrées avec solution dégraissante neutre',
      'Séchage précis à la raclette professionnelle et microfibre sans peluches',
      'Traitement déperlant réduisant l’adhérence des poussières'
    ],
    process: [
      { step: '01', title: 'Dépoussiérage des rails', desc: 'Aspiration des résidus pour préserver le mécanisme des coulissants.' },
      { step: '02', title: 'Savonnage technique', desc: 'Application homogène sans coulures sur les sols.' },
      { step: '03', title: 'Finition cristal', desc: 'Contrôle à contre-jour pour une transparence absolue.' }
    ],
    targetAudience: 'Villas contemporaines, magasins, showrooms et bureaux dotés de grandes ouvertures vitrées.',
    idealFor: ['Grandes baies vitrées de villa', 'Vitrines de boutiques à Guéliz', 'Verrières de riad'],
    faqs: [
      {
        question: 'Comment gérez-vous la poussière fréquente à Marrakech ?',
        answer: 'Nous utilisons des produits antistatiques spécifiques qui retardent l’accroche de la poussière fine et prolongent la netteté de vos vitres.'
      }
    ],
    estimatedStartingPrice: 'À partir de 150 MAD'
  },
  {
    id: 'tapis-moquettes',
    slug: 'nettoyage-tapis-moquettes',
    name: 'Nettoyage des Tapis & Moquettes',
    shortDesc: 'Dépoussiérage en profondeur, shampouinage par injection-extraction et désodorisation des fibres textiles et tapis orientaux.',
    primaryKeyword: 'nettoyage tapis Marrakech',
    secondaryKeywords: ['nettoyage moquettes Marrakech', 'détachage canapé Marrakech', 'shampouinage tapis Marrakech'],
    audience: 'Tous',
    category: 'specialized',
    image: '/src/assets/images/cleanzoe_marrakech_villa_1791047035603.jpg',
    imageAlt: 'Nettoyage et rafraîchissement d’un tapis berbère soigné dans un salon à Marrakech',
    highlights: ['Respect des laines locales (Beni Ouarain, Kilim, Azilal)', 'Élimination des acariens et allergènes', 'Séchage rapide'],
    includes: [
      'Brossage et aspiration haute dépression des fibres',
      'Détachage ciblé (café, thé, graisse, tanins)',
      'Nettoyage par injection-extraction à l’eau tiède et shampoing doux',
      'Désodorisation et neutralisation des odeurs',
      'Redressement du poil pour redonner volume et douceur'
    ],
    process: [
      { step: '01', title: 'Test de tenue des couleurs', desc: 'Vérification préalable sur une zone non visible.' },
      { step: '02', title: 'Injection-extraction', desc: 'Pénétration de la solution active et extraction immédiate des saletés dissoutes.' },
      { step: '03', title: 'Séchage aéré', desc: 'Remise en place avec temps de séchage optimisé.' }
    ],
    targetAudience: 'Propriétaires de tapis marocains, salons marocains traditionnels, bureaux moquettés.',
    idealFor: ['Tapis de salon', 'Canapés et fauteuils en tissu', 'Moquettes d’hôtels et bureaux'],
    faqs: [
      {
        question: 'Peut-on nettoyer les tapis directement chez nous ?',
        answer: 'Oui, notre matériel compact d’injection-extraction permet un traitement à domicile propre et sans éclaboussures.'
      }
    ],
    estimatedStartingPrice: 'À partir de 25 MAD / m²'
  },
  {
    id: 'coproprietes',
    slug: 'entretien-coproprietes',
    name: 'Entretien de Copropriétés & Parties Communes',
    shortDesc: 'Contrats d’entretien réguliers pour immeubles et résidences : halls, cages d’escaliers, ascenseurs, parkings et cours intérieures.',
    primaryKeyword: 'entretien copropriété Marrakech',
    secondaryKeywords: ['nettoyage immeubles Marrakech', 'entretien parties communes Marrakech', 'syndic nettoyage Marrakech'],
    audience: 'Professionnels',
    category: 'commercial',
    image: '/src/assets/images/cleanzoe_glass_cleaning_1791047062400.jpg',
    imageAlt: 'Entretien soigné des parties communes et halls d’immeuble à Marrakech',
    highlights: ['Contrats sur-mesure pour syndics et conseils syndicaux', 'Cahier de passage et contrôle qualité', 'Gestion des conteneurs poubelles'],
    includes: [
      'Balayage et lavage régulier des paliers, halls et marches d’escaliers',
      'Nettoyage et désinfection des cabines d’ascenseurs et miroirs',
      'Dépoussiérage des rampes, boîtes aux lettres et plinthes',
      'Sortie et rentrée des bacs à ordures ménagères et désinfection du local poubelle',
      'Balayage des accès extérieurs et parkings sous-sol'
    ],
    process: [
      { step: '01', title: 'Visite de la résidence', desc: 'Relevé des superficies et du nombre d’étages avec le syndic.' },
      { step: '02', title: 'Élaboration du calendrier', desc: 'Définition des fréquences (1x, 2x ou 3x par semaine).' },
      { step: '03', title: 'Émargement régulier', desc: 'Feuille d’intervention visible pour tous les copropriétaires.' }
    ],
    targetAudience: 'Syndics de copropriété, gestionnaires de patrimoine et présidents de résidences à Marrakech.',
    idealFor: ['Immeubles résidentiels', 'Résidences fermées', 'Petits collectifs'],
    faqs: [
      {
        question: 'Délivrez-vous des factures officielles pour le syndic de copropriété ?',
        answer: 'Oui, nous fournissons chaque mois une facture détaillée conforme aux normes comptables et fiscales marocaines.'
      }
    ],
    estimatedStartingPrice: 'Contrats à partir de 600 MAD/mois'
  },
  {
    id: 'desinfection',
    slug: 'desinfection',
    name: 'Désinfection & Assainissement',
    shortDesc: 'Désinfection antimicrobienne certifiée des surfaces pour un cadre de vie et de travail sain, purifié et protecteur.',
    primaryKeyword: 'désinfection Marrakech',
    secondaryKeywords: ['assainissement locaux Marrakech', 'désinfection virus Marrakech', 'nettoyage sanitaire Marrakech'],
    audience: 'Tous',
    category: 'specialized',
    image: '/src/assets/images/cleanzoe_glass_cleaning_1791047062400.jpg',
    imageAlt: 'Technicien de désinfection Cleanzoe traitant les points de contact à Marrakech',
    highlights: ['Produits virucides et bactéricides homologués', 'Nébulisation fine sans résidu gras', 'Protocole sanitaire rigoureux'],
    includes: [
      'Traitement minutieux de tous les points de contact fréquents (poignées, interrupteurs, rampes)',
      'Nébulisation des espaces fermés pour assainir l’air et les surfaces inaccessibles',
      'Désinfection des blocs sanitaires et vestiaires',
      'Certificat d’intervention de désinfection fourni sur demande'
    ],
    process: [
      { step: '01', title: 'Isolement de la zone', desc: 'Mise en sécurité et préparation des locaux.' },
      { step: '02', title: 'Application certifiée', desc: 'Vaporisation et nébulisation selon le temps de contact recommandé.' },
      { step: '03', title: 'Aération & restitution', desc: 'Remise à disposition rapide des lieux après aération.' }
    ],
    targetAudience: 'Établissements scolaires, cabinets médicaux, restaurants, bureaux et résidences privées.',
    idealFor: ['Après maladie', 'Locaux recevant du public', 'Prévention saisonnière'],
    faqs: [
      {
        question: 'Les produits de désinfection sont-ils dangereux pour les animaux ?',
        answer: 'Nous utilisons des formulations homologuées qui ne présentent aucun risque une fois les surfaces sèches et la pièce aérée.'
      }
    ],
    estimatedStartingPrice: 'Sur devis selon volume'
  }
];
