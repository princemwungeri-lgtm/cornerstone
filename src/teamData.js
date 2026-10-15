// Official member list of The Cornerstone (source: organisation's member table)

export const leadership = [
  { n: "01", name: "Olive UMULISA", role: "Founder, President & Legal Representative", fr: "Présidente & Représentante Légale", href: "/founder" },
  { n: "02", name: "Patrick Nshimiyimana", role: "Vice President", fr: "Vice-Président" },
  { n: "03", name: "Claude Habimana", role: "Deputy Legal Representative", fr: "Représentant Légal Suppléant" },
  { n: "04", name: "Gatsinzi Marcel", role: "Programmes, Community & Beneficiaries", fr: "Programmes / Communauté & Bénéficiaires" },
  { n: "05", name: "Aisha Muganga", role: "Communication & Spokesperson", fr: "Communication / Porte-parole" },
  { n: "06", name: "Ingabire Esther", role: "Treasurer", fr: "Trésorière" },
  { n: "07", name: "Louise Mukaturatsinze", role: "Secretary", fr: "Secrétaire" },
];

export const ethicsCommittee = [
  { n: "08", name: "Leon Uwurukundo" },
  { n: "09", name: "Umuhire Denyse" },
  { n: "10", name: "Eric Uwonisunze" },
  { n: "11", name: "Ingabire Jean Marie Vianey" },
  { n: "12", name: "Niyonsaba Anastase" },
];

export const advisoryCouncil = [
  { n: "13", name: "Mungwasingizwe Tony" },
  { n: "14", name: "Kalinda Theoneste" },
  { n: "15", name: "Kayitare Alex" },
  { n: "16", name: "Fransine Mukahigiro" },
  { n: "17", name: "Antoine Karega" },
  { n: "18", name: "Terrance Muhirwa" },
  { n: "19", name: "Mutuyimana Janvière" },
];

export const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
