/**
 * Contenu et paramètres de la landing page.
 * WhatsApp est l'unique canal de réservation : pas de formulaire, pas d'appel.
 */
export const site = {
  name: "SenegalDrive",
  tagline: "Chauffeur privé",
  baseline: "Arrivez sereinement. Partout au Sénégal.",
  whatsappNumber: "+33 6 98 51 16 69",
  location: "Dakar — Sénégal",
  url: "https://senegaldrive.vercel.app",
} as const;

/** Lien wa.me avec message pré-rempli. */
export function waLink(text: string): string {
  const digits = site.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export const defaultWaText =
  "Bonjour SenegalDrive, je souhaite un devis pour un transfert.";

export const benefits = [
  {
    icon: "tag",
    title: "Prix fixe garanti",
    text: "Pas de surprise à l'arrivée.",
  },
  {
    icon: "plane-landing",
    title: "Ponctualité suivie",
    text: "On suit votre vol en temps réel.",
  },
  {
    icon: "snowflake",
    title: "Véhicules récents",
    text: "Climatisés, wifi, eau offerte.",
  },
  {
    icon: "user-check",
    title: "Chauffeurs formés",
    text: "Discrets, ponctuels, bilingues.",
  },
] as const;

export const services = [
  {
    photo: "accueil AIBD, pancarte",
    title: "Transfert aéroport AIBD",
    text: "Accueil personnalisé avec pancarte à votre nom, aide aux bagages, trajet direct vers votre hôtel ou votre résidence.",
  },
  {
    photo: "van en attente, Plateau",
    title: "Mise à disposition",
    text: "Un van et son chauffeur à l'heure, à la demi-journée ou à la journée. Idéal pour enchaîner plusieurs rendez-vous.",
  },
  {
    photo: "route de Saint-Louis",
    title: "Excursions et régions",
    text: "Saly, Saint-Louis, Lac Rose, Sine Saloum, Touba. Aller-retour ou circuit sur plusieurs jours.",
  },
  {
    photo: "délégation, hôtel de séminaire",
    title: "Corporate et événementiel",
    text: "Délégations, séminaires, ONG, mariages. Facturation entreprise et devis sur mesure.",
  },
] as const;

export const fares = [
  {
    route: "AIBD → Dakar",
    detail: "(Plateau, Almadies, Ngor)",
    duration: "~1h10",
    price: "40 000 FCFA",
  },
  { route: "AIBD → Saly / Mbour", duration: "~1h", price: "55 000 FCFA" },
  { route: "Dakar → Saint-Louis", duration: "~4h", price: "150 000 FCFA" },
  {
    route: "Dakar → Lac Rose",
    detail: "(aller-retour + attente)",
    duration: "demi-journée",
    price: "65 000 FCFA",
  },
  {
    route: "Mise à disposition Dakar",
    duration: "journée (8h)",
    price: "90 000 FCFA",
  },
] as const;

export const vehicleFeatures = [
  "7 passagers",
  "Climatisation",
  "Eau offerte",
] as const;

export const steps = [
  {
    number: "01",
    title: "Vous demandez",
    text: "Un message WhatsApp. Réponse sous 15 minutes.",
  },
  {
    number: "02",
    title: "On confirme",
    text: "Prix fixe, chauffeur assigné, contact partagé la veille.",
  },
  {
    number: "03",
    title: "On vous conduit",
    text: "Le chauffeur est là avant vous. Vous montez, c'est tout.",
  },
] as const;

export const destinations = [
  { photo: "plage de Saly", name: "Saly", meta: "1h15 depuis Dakar · dès 55 000 FCFA" },
  { photo: "pont Faidherbe", name: "Saint-Louis", meta: "4h depuis Dakar · dès 150 000 FCFA" },
  { photo: "Lac Rose", name: "Lac Rose", meta: "50 min depuis Dakar · dès 65 000 FCFA" },
  { photo: "bolong du Sine Saloum", name: "Sine Saloum", meta: "3h depuis Dakar · sur devis" },
  { photo: "grande mosquée de Touba", name: "Touba", meta: "2h30 depuis Dakar · sur devis" },
  { photo: "lagune de la Somone", name: "Somone", meta: "1h20 depuis Dakar · dès 45 000 FCFA" },
] as const;

export const faq = [
  {
    question: "Que se passe-t-il si mon vol a du retard ?",
    answer:
      "Nous suivons votre vol en temps réel et ajustons l'heure d'arrivée du chauffeur. 60 minutes d'attente sont incluses après l'atterrissage, sans supplément.",
  },
  {
    question: "Comment puis-je payer ?",
    answer:
      "Wave, Orange Money ou espèces au chauffeur. Pour les entreprises, facturation avec virement possible.",
  },
  {
    question: "Combien de valises puis-je emporter ?",
    answer:
      "Jusqu'à 6 grandes valises et les bagages à main correspondants. Aucun supplément bagage. Au-delà, dites-le nous : nous adaptons.",
  },
  {
    question: "Puis-je réserver pour plusieurs jours ?",
    answer:
      "Oui. Mise à disposition à la journée ou circuit sur plusieurs jours, avec le même chauffeur du début à la fin.",
  },
  {
    question: "Puis-je annuler ma réservation ?",
    answer:
      "Annulation gratuite jusqu'à 12 heures avant le départ. Aucun prépaiement n'est exigé pour bloquer un créneau.",
  },
  {
    question: "Intervenez-vous en dehors de Dakar ?",
    answer:
      "Partout au Sénégal : Saly, Mbour, Somone, Saint-Louis, Lac Rose, Sine Saloum, Touba, et toute destination sur devis.",
  },
] as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#vehicule", label: "Le véhicule" },
  { href: "#faq", label: "FAQ" },
] as const;
