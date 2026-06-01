export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescriptionPara1: string;
  fullDescriptionPara2?: string;
  heroImage: string; // path relative to /public/images/services/
  icon: string; // lucide icon name
  applications: string[];
  equipment?: string[];
  featured: boolean;
  category: ServiceCategory;
}


// TODO: Add application for each services:
export type ServiceCategory =
  | "Geotechnical"
  | "Environmental"
  | "Survey"
  | "Monitoring";

  // corporate-real-estate
  // sample-collection
  // geotechnical drilling
  // environmental drilling
  // monitoring well service

export const services: Service[] = [
    {
    id: "1",
    slug: "gpr-survey",
    title: "GPR Survey",
    shortDescription:
      "We provide Ground Penetrating Radar (GPR) surveys and subsurface clearance services to identify underground utilities, structures, and potential obstructions before intrusive works. Our surveys help improve site safety, reduce project risks, and support informed decision-making for environmental investigations and remediation activities.",
    fullDescriptionPara1:
      "Spiral constructions offer subsurface investigations using Ground Penetrating Radar survey (GPR Survey) is a non-destructive technique to produce a cross section profile of subsurface without any drilling, trenching or ground disturbances. The profiles are used for detecting buried utilities, such as, pipes, cables, etc in totally non-destructive manner. Additionally, subject to requirements, we also use Cable & Pipe Locators, and for precise definition of locations, we use DGPS and Electronic Total Stations.",
    heroImage: "/images/services/gpr.webp",
    icon: "Radar",
    applications: [
      "Pre-drilling utility clearance",
      "Construction and demolition planning",
      "Road and pavement assessment",
      "Archaeological investigations",
      "Bridge deck evaluation",
      "Groundwater monitoring network setup",
    ],
    equipment: [
    ],
    featured: false,
    category: "Survey",
  },
  {
    id: "2",
    slug: "soil-sample-collection",
    title: "Soil Sample Collection by Manual Augering",
    shortDescription:
      "Soil sample collection using manual augering for environmental and geotechnical investigations, ensuring accurate sample recovery, minimal site disturbance, and compliance with project specifications and safety requirements.",
    fullDescriptionPara1:
      "At Spiral Constructions, we provide reliable soil sampling services using manual augering techniques for environmental site assessments, contamination investigations, and geotechnical studies. Where surface access is restricted by concrete, asphalt, or paved areas, we first perform core cutting using specialized core cutting equipment to create safe and precise access points. Our trained field teams collect representative soil samples in accordance with project specifications and industry standards, ensuring sample integrity, accurate data collection, and full compliance with health and safety requirements.",
    heroImage: "/images/services/soil-sampling.webp", // new image
    icon: "Radar",
    applications: [
      "Environmental contamination assessment",
      "Geotechnical site investigation",
      "Agricultural soil sampling",
      "Groundwater monitoring well installation",
      "Landfill and waste site characterisation",
      "Pre-construction soil profiling"
    ],
    featured: false,
    category: "Environmental",
  },
  {
    id: "3",
    slug: "environmental-drilling",
    title: "Environmental Drilling",
    shortDescription:
      "Targeted drilling programs for environmental site assessments, contamination investigations, and soil/groundwater sampling across industrial and brownfield sites.",
    fullDescriptionPara1:
      "Environmental drilling is a way to investigate and delineate subsurface conditions and monitor them over time. The data collected may be used to identify areas of soil or groundwater contamination, log water table depths, or monitor and confirm the efficacy of remediation efforts. It’s important to choose the right drilling technology and sampling techniques based on the expected geologic conditions.",
      fullDescriptionPara2: " We have extensive experience in well installation, development, rehabilitation, abandonment, and groundwater monitoring installations. With our diverse drilling fleet and experienced crews, even the most difficult conditions can be overcome. Spiral also offers conventional and advanced drilling technologies. Our fleet includes track and truck mounted equipment and limited access rigs for tight spaces, low overhead conditions, and over-water work allowing us to access almost any drill site.",
    heroImage: "/images/services/environmental-drilling.webp",
    icon: "Leaf",
    applications: [
      "Brownfield land assessment and redevelopment",
      "Industrial site characterisation",
      "Landfill and waste site investigation",
      "Due diligence for property transactions",
      "Regulatory compliance investigations",
      "Contamination source zone delineation",
    ],
    featured: true,
    category: "Environmental",
  },
  {
    id: "4",
    slug: "monitoring-well-services",
    title: "Monitoring Well Services",
    shortDescription:
      "Design, installation, development, and long-term sampling of groundwater monitoring wells for environmental compliance and contamination tracking.",
    fullDescriptionPara1:
      "Spiral constructions specializes in the installation and development of monitoring, pumping, injection or extraction wells, soil and groundwater sampling equipment and the installation of remediation systems.",
    heroImage: "/images/services/monitoring-well-service.webp",
    icon: "Activity",
    applications: [
      "Long-term groundwater quality monitoring",
      "Remediation performance monitoring",
      "Regulatory compliance programmes",
      "Leachate monitoring at landfill sites",
      "Baseline groundwater characterisation",
      "Aquifer pump and slug testing",
    ],
    equipment: [
      "HDPE and stainless steel well casing and screens",
      "Dedicated bladder pumps",
      "Electronic water level meters",
      "Portable water quality field meters",
      "Automated pressure transducers and data loggers",
    ],
    featured: true,
    category: "Monitoring",
  },
    {
    id: "5",
    slug: "environmental-sample-collection",
    title: "Environmental Sample Collection",
    shortDescription:
      "Comprehensive environmental sample collection services, ensuring accurate and reliable data for your projects.",
    fullDescriptionPara1:
      "Spiral Constructions Get results you can trust. Our experts understand the importance of accurate samples regardless of geologic conditions. Whether it’s discrete or representative sampling you’re after, Cascade has the tools and technologies to get it. Soil, rock and even the most difficult ground conditions are no match for our experienced crews.",
    heroImage: "/images/services/sample-collection.webp",
    icon: "Shield",
    applications: [
      "Brownfield land regeneration",
      "Industrial site decommissioning",
      "Petroleum hydrocarbon remediation",
      "Heavy metals and inorganic contamination",
      "Chlorinated solvent remediation",
      "Post-remediation validation and regulatory closure",
    ],
    featured: false,
    category: "Environmental",
  },
   {
    id: "6",
    slug: "top-of-casing-survey",
    title: "Top of Casing Survey (TOC)",
    shortDescription:
      "Top of Casing (TOC) Survey services provide precise elevation measurements of well casings, delivering accurate reference data for groundwater monitoring, environmental assessments, and regulatory compliance projects.",
    fullDescriptionPara1:
      "Spiral Constructions offers accurate Top of Casing (TOC) survey, which is an essential to determine groundwater flow direction. Time for the TOC survey is included in the monitoring well installation. The TOC survey should be standardized to measure the elevation of the top of the well on the NORTH side of each well casing. It may be appropriate to put a mark or small notch in the casing to indicate where the casing elevation was measured, thereby ensuring that depth-to-water measurements (measured to a hundredth of a meter) are consistent and accurate.",
    heroImage: "/images/services/toc.webp",
    icon: "Shield",
    applications: [
      "Brownfield land regeneration",
      "Industrial site decommissioning",
      "Petroleum hydrocarbon remediation",
      "Heavy metals and inorganic contamination",
      "Chlorinated solvent remediation",
      "Post-remediation validation and regulatory closure",
    ],
    featured: false,
    category: "Survey",
  },
  {
    id: "5",
    slug: "environmental-site-remediation",
    title: "Environmental Site Remediation and Restoration",
    shortDescription:
      "Integrated ground investigation services combining drilling, in-situ testing, and laboratory analysis to provide complete subsurface characterisation.",
    fullDescriptionPara1:
      "We have extensive experience in supporting environmental consultants across India for soil and groundwater contaminated sites with absestos, heavy metals, petroleum hydrocarbons (TPH), polyaromatics (PAH), solvents, pesticides, industrial chemicals.",
      fullDescriptionPara2: "Each contaminated land remediation project is different. Every client has their own objectives, specifications, financial constraints and build programs to meet. Spiral understand this. That’s why we make the effort from the outset to appreciate your needs as an organization. We listen to your objectives for the project and tailor our offer to make sure we deliver to your specifications, as a committed member of your project delivery team. Brownfield sites, which are any previously developed land that are not currently in use due to the potential presence of contaminated or hazardous material, tend to be an environmental and economic burden to national and local authorities.",
    heroImage: "/images/services/remediation.webp",
    icon: "Layers",
    applications: [
      "Pre-construction site characterisation",
      "Planning and development applications",
      "Infrastructure corridor investigations",
      "Flood risk and drainage assessments",
      "Retaining wall and basement design",
      "Insurance and liability assessments",
    ],
    featured: false,
    category: "Geotechnical",
  },
  {
    id: "7",
    slug: "remediatin-system",
    title: "Remediation System (Operation & Maintenence)",
    shortDescription:
      "Comprehensive real estate management services, optimizing property potential and maximizing investment value.",
    fullDescriptionPara1:
      "Our Real Estate Management Services offer integrated facilities management, portfolio management, property management and financial management of your real estate assets. The team is made up of exceptional advisors who will assist you in tackling the dynamic needs of your property to optimize its potential and maximize your profits. Equipped in operational efficiencies, cost optimization and risk mitigation, we use enhanced platforms to deliver market leading services to our clients. We ensure our clients are provided with a future-oriented growth strategy that enables operational efficiency and an improved investment value. We are currently operating for corporate and retail real estate across south India.",
    heroImage: "/images/services/remediation-2.webp",
    icon: "Shield",
    applications: [
      "Brownfield land regeneration",
      "Industrial site decommissioning",
      "Petroleum hydrocarbon remediation",
      "Heavy metals and inorganic contamination",
      "Chlorinated solvent remediation",
      "Post-remediation validation and regulatory closure",
    ],
    featured: false,
    category: "Environmental",
  },
  {
    id: "7",
    slug: "corporate-real-estate",
    title: "Corporate Real Estate",
    shortDescription:
      "Comprehensive real estate management services, optimizing property potential and maximizing investment value.",
    fullDescriptionPara1:
      "Our Real Estate Management Services offer integrated facilities management, portfolio management, property management and financial management of your real estate assets. The team is made up of exceptional advisors who will assist you in tackling the dynamic needs of your property to optimize its potential and maximize your profits. Equipped in operational efficiencies, cost optimization and risk mitigation, we use enhanced platforms to deliver market leading services to our clients. We ensure our clients are provided with a future-oriented growth strategy that enables operational efficiency and an improved investment value. We are currently operating for corporate and retail real estate across south India.",
    heroImage: "/images/services/corporate-real-estate.jpg",
    icon: "Shield",
    applications: [
      "Brownfield land regeneration",
      "Industrial site decommissioning",
      "Petroleum hydrocarbon remediation",
      "Heavy metals and inorganic contamination",
      "Chlorinated solvent remediation",
      "Post-remediation validation and regulatory closure",
    ],
    featured: false,
    category: "Environmental",
  },
  
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
