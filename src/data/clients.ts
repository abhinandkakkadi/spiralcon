export interface Client {
  id: string;
  name: string;
  logo: string; // path relative to /public/images/clients/
  website?: string;
  sector: ClientSector;
  featured: boolean;
}

export type ClientSector =
  | "Government"
  | "Infrastructure"
  | "Energy"
  | "Industrial"
  | "Real Estate"
  | "Municipal";

export const clients: Client[] = [
  {
    id: "1",
    name: "National Highways Authority of India",
    logo: "/images/clients/nhai.png",
    sector: "Government",
    featured: true,
  },
  {
    id: "2",
    name: "Airport Authority of India",
    logo: "/images/clients/aai.png",
    sector: "Infrastructure",
    featured: true,
  },
  {
    id: "3",
    name: "Archaeological Survey of India",
    logo: "/images/clients/asi.png",
    sector: "Government",
    featured: true,
  },
  {
    id: "4",
    name: "State Infrastructure Authority",
    logo: "/images/clients/sia.png",
    sector: "Government",
    featured: true,
  },
  {
    id: "5",
    name: "Bruhat Bengaluru Mahanagara Palike",
    logo: "/images/clients/bbmp.png",
    sector: "Municipal",
    featured: true,
  },
  {
    id: "6",
    name: "State Water Resources Department",
    logo: "/images/clients/swrd.png",
    sector: "Government",
    featured: true,
  },
  {
    id: "7",
    name: "Leading Petrochemical Manufacturer",
    logo: "/images/clients/petrochem.png",
    sector: "Industrial",
    featured: false,
  },
  {
    id: "8",
    name: "Renewable Energy Developer",
    logo: "/images/clients/energy-dev.png",
    sector: "Energy",
    featured: false,
  },
  {
    id: "9",
    name: "Municipal Corporation of Pune",
    logo: "/images/clients/pune-mc.png",
    sector: "Municipal",
    featured: false,
  },
  {
    id: "10",
    name: "Leading Real Estate Developer",
    logo: "/images/clients/realestate.png",
    sector: "Real Estate",
    featured: false,
  },
  {
    id: "11",
    name: "Central Public Works Department",
    logo: "/images/clients/cpwd.png",
    sector: "Government",
    featured: false,
  },
  {
    id: "12",
    name: "Steel Authority of India",
    logo: "/images/clients/sail.png",
    sector: "Industrial",
    featured: false,
  },
];

export function getFeaturedClients(): Client[] {
  return clients.filter((c) => c.featured);
}

export function getClientsBySector(sector: ClientSector): Client[] {
  return clients.filter((c) => c.sector === sector);
}
