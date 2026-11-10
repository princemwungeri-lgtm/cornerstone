// Official member list of The Cornerstone (source: organisation's member table)
import aishaImage from "./staff/Aisha.jpeg";
import habimanaImage from "./staff/Habimana.jpeg";
import estherImage from "./staff/esther.jpeg";
import louiseImage from "./staff/Louise.jpeg";
import patrickImage from "./staff/patrick.jpeg";
import theonesteImage from "./staff/Theoneste.jpeg";
import umulisaImage from "./staff/Umulisa.jpeg";
import vianeyImage from "./staff/vianey.jpeg";
import maurice from "./staff/maurice.jpeg";

export const leadership = [
  { n: "01", name: "Olive UMULISA", role: "Founder, President & Legal Representative", fr: "Présidente & Représentante Légale", href: "/founder", image: umulisaImage },
  { n: "02", name: "Patrick Nshimiyimana", role: "Vice President", fr: "Vice-Président", image: patrickImage },
  { n: "03", name: "Claude Habimana", role: "Deputy Legal Representative", fr: "Représentant Légal Suppléant", image: habimanaImage },
  { n: "04", name: "Gatsinzi Maurice", role: "Programmes, Community & Beneficiaries", fr: "Programmes / Communauté & Bénéficiaires", image: maurice },
  { n: "05", name: "Aisha Muganga", role: "Communication & Spokesperson", fr: "Communication / Porte-parole", image: aishaImage },
  { n: "06", name: "Ingabire Esther", role: "Treasurer", fr: "Trésorière", image: estherImage },
  { n: "07", name: "Louise Mukaturatsinze", role: "Secretary", fr: "Secrétaire", image: louiseImage },
];

export const ethicsCommittee = [
  { n: "08", name: "Leon Uwurukundo" },
  { n: "09", name: "Umuhire Denyse" },
  { n: "10", name: "Eric Uwonisunze" },
  { n: "11", name: "Ingabire Jean Marie Vianey", image: vianeyImage },
  { n: "12", name: "Niyonsaba Anastase" },
];

export const advisoryCouncil = [
  { n: "13", name: "Mungwasingizwe Tony" },
  { n: "14", name: "Kalinda Theoneste", image: theonesteImage },
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
