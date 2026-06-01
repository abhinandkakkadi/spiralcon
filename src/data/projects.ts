export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  year: number;
  category: ProjectCategory;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  heroImage: string; // path relative to /public/images/projects/
  galleryImages: string[]; // additional project images
  services: string[]; // service slugs
  featured: boolean;
  stats?: { label: string; value: string }[];
}

export type ProjectCategory =
  | "Geotechnical"
  | "Environmental"
  | "Infrastructure"
  | "Industrial"
  | "Commercial"
  | "Residential";

export const projects: Project[] = [
  {
    id: "1",
    slug: "toolbox-meetings",
    title: "Toolbox Meetings", // 
    client: "Big 4 Companies",
    location: "Bengaluru, India",
    year: 2024,
    category: "Infrastructure", // 
    tags: ["Geotechnical Drilling", "Ground Investigation", "Infrastructure"], // 
    shortDescription:
      "Regular toolbox meetings are conducted before site activities to discuss work plans, identify potential hazards, and reinforce health and safety requirements. These sessions help ensure that all personnel understand their responsibilities, follow safe work practices, and maintain compliance throughout environmental site assessment activities.", // 
    fullDescription:
      "Spiral Constructions was appointed to carry out a comprehensive geotechnical ground investigation for a planned 12 km metro rail extension. The project involved drilling over 80 boreholes along the proposed alignment, including challenging urban locations with restricted access and live traffic management requirements. The investigation provided detailed subsurface data to support tunnel, station, and viaduct design.",
    challenge:
      "Drilling in a densely built-up urban corridor with significant access restrictions, live traffic, underground utilities, and varying ground conditions including soft alluvial deposits, weathered rock, and competent granite bedrock.",
    solution:
      "We deployed compact, track-mounted rigs suitable for restricted access and deployed pre-drilling utility surveys using GPR. A phased investigation programme was scheduled to minimise traffic disruption, with night-shift working at key locations.",
    outcome:
      "Delivery of a comprehensive factual ground investigation report with borehole logs, laboratory results, and geotechnical parameters, enabling the engineering team to finalise design for tunnels, cut-and-cover sections, and elevated viaducts.",
    heroImage: "/images/projects/p-1.jpg", // 
    galleryImages: [
      "/images/projects/metro-rail-2.jpg",
      "/images/projects/metro-rail-3.jpg",
    ],
    services: ["geotechnical-drilling", "gpr-toc-survey", "ground-investigation"],
    featured: true,
    stats: [
      { label: "Boreholes Drilled", value: "80+" },
      { label: "Corridor Length", value: "12 km" },
      { label: "Max Borehole Depth", value: "40 m" },
      { label: "Duration", value: "6 months" },
    ],
  },
  {
    id: "2",
    slug: "gpr-survey",
    title: "Ground Penetrating Radar (GPR) Survey",
    client: "Leading Petrochemical Manufacturer",
    location: "Chennai, India",
    year: 2024,
    category: "Industrial",
    tags: ["Environmental Drilling", "Contaminated Land", "Industrial"],
    shortDescription:
      "Prior to any intrusive activities, we conduct Ground Penetrating Radar (GPR) surveys and utility detection to identify potential underground utilities and subsurface obstructions. Before mobilization, all GPR equipment and Radiodetection cable locators are checked and verified for proper calibration and performance, ensuring accurate results, improved site safety, and reduced risk during drilling, excavation, and sampling operations.",
    fullDescription:
      "A major petrochemical client engaged Spiral Constructions to undertake a Phase II Environmental Site Assessment across their 25-hectare manufacturing facility, which had been in operation for over 40 years. The investigation involved drilling environmental boreholes, installing temporary monitoring wells, and collecting soil and groundwater samples for comprehensive laboratory analysis.",
    challenge:
      "Operating safely within an active industrial facility with complex site logistics, legacy underground infrastructure, and suspected hydrocarbon and heavy metal contamination in soil and groundwater.",
    solution:
      "We developed a phased investigation strategy in close coordination with the client's HSE team. Dedicated environmental drill rigs with full decontamination procedures were deployed, with stringent waste management protocols for drill arisings and investigation-derived waste.",
    outcome:
      "Comprehensive Phase II ESA report identifying contamination distribution, source zones, and pathways. The findings underpinned a robust remediation strategy enabling the client to proceed with planned redevelopment with regulatory confidence.",
    heroImage: "/images/projects/p-2.jpg",
    galleryImages: ["/images/projects/industrial-contamination-2.jpg"],
    services: ["environmental-drilling", "monitoring-well-services"],
    featured: true,
    stats: [
      { label: "Site Area", value: "25 ha" },
      { label: "Boreholes Installed", value: "45" },
      { label: "Samples Analysed", value: "320+" },
      { label: "Years in Operation", value: "40+" },
    ],
  },
  {
    id: "3",
    slug: "equipment-decontamination",
    title: "Equipment Decontamination Process", //
    client: "National Highways Authority",
    location: "Kerala, India",
    year: 2023,
    category: "Infrastructure",
    tags: ["Geotechnical Drilling", "Ground Investigation", "Infrastructure"],
    shortDescription:
      "All sampling and field equipment are thoroughly decontaminated before site activities to prevent cross-contamination and ensure the integrity of environmental data. Our decontamination procedures follow established industry practices, supporting accurate sample collection and maintaining high standards of quality, safety, and environmental compliance throughout site assessment projects.",
    fullDescription:
      "We conducted a detailed geotechnical investigation for a 35 km coastal highway realignment project in Kerala. The investigation included onshore drilling through challenging soft coastal deposits, cross-hole seismic testing, and specialist sampling of marine sediments to support embankment design and ground improvement strategies.",
    challenge:
      "Characterising highly variable, soft coastal deposits and tidal influence zones where conventional drilling equipment was difficult to deploy. Ensuring sample quality from sensitive, soft soils susceptible to disturbance.",
    solution:
      "We used specialised piston samplers and Swedish weight sounding alongside rotary drilling, deploying lightweight rigs in soft ground areas. Tidal monitoring was incorporated into groundwater data collection.",
    outcome:
      "Detailed geotechnical report with soil profiles, consolidation parameters, and geotechnical design recommendations, enabling efficient highway design with targeted ground improvement only where required.",
    heroImage: "/images/projects/p-3.jpg",
    galleryImages: ["/images/projects/coastal-highway-2.jpg"],
    services: ["geotechnical-drilling", "ground-investigation"],
    featured: true,
    stats: [
      { label: "Highway Length", value: "35 km" },
      { label: "Boreholes", value: "120+" },
      { label: "In-situ Tests", value: "600+" },
      { label: "Duration", value: "9 months" },
    ],
  },
  {
    id: "4",
    slug: "core-cutting-services-mumbai",
    title: "Core Cutting/Concrete Breaking Services",
    client: "Confidential Developer",
    location: "Mumbai, India",
    year: 2023,
    category: "Commercial",
    tags: ["Environmental Drilling", "Contaminated Land", "Monitoring Wells"],
    shortDescription:
      "We provide core cutting services to create safe and precise access points through concrete, asphalt, and paved surfaces prior to soil sampling activities. This enables efficient environmental site assessments while minimizing site disturbance and supporting accurate sample collection in accordance with project requirements.",
    fullDescription:
      "Spiral Constructions managed the complete geoenvironmental investigation and remediation strategy for a former textile mill in central Mumbai. The project progressed through desktop study, Phase I and Phase II ESA, and culminated in a risk-based remediation strategy accepted by the regulatory authority, enabling the developer to proceed with a landmark mixed-use development.",
    challenge:
      "Former textile mills present a complex legacy of contamination including dyes, solvents, and heavy metals. Site access was severely restricted by ongoing partial demolition works and underground structures.",
    solution:
      "A carefully phased investigation programme worked around demolition activities. We used window sampling and dynamic probing alongside rotary drilling to maximise coverage with minimal footprint, supplemented by GPR to identify buried structures before drilling.",
    outcome:
      "Regulatory approval obtained for a risk-based remediation strategy combining targeted soil excavation and long-term groundwater monitoring, enabling project proceeds on schedule.",
    heroImage: "/images/projects/p-4.jpg",
    galleryImages: ["/images/projects/brownfield-mumbai-2.jpg"],
    services: ["environmental-drilling", "gpr-toc-survey", "contaminated-land-remediation"],
    featured: false,
    stats: [
      { label: "Site Area", value: "8 ha" },
      { label: "Samples", value: "200+" },
      { label: "Remediation Volume", value: "4,500 m³" },
    ],
  },
  {
    id: "5",
    slug: "soil-sample-collection-manual-augering",
    title: "Soil Sample Collection by Manual Augering",
    client: "Renewable Energy Developer",
    location: "Rajasthan, India",
    year: 2024,
    category: "Commercial",
    tags: ["Geotechnical Drilling", "Ground Investigation"],
    shortDescription:
      "We collect soil samples using manual augering techniques for environmental site assessments and geotechnical investigations. This method enables efficient sample recovery with minimal site disturbance, ensuring representative samples are obtained in accordance with project specifications and quality requirements.",
    fullDescription:
      "Spiral Constructions completed a geotechnical investigation for a large-scale solar farm development in Rajasthan. The investigation was designed to support pile and ground anchor design for solar panel mounting structures across 400 hectares of semi-arid terrain, requiring a high-density drilling programme delivered within a tight schedule to meet the client's construction programme.",
    challenge:
      "Delivering a high-density investigation programme — over 400 boreholes — across a large, remote site with extreme temperature conditions and limited access infrastructure within a 10-week field window.",
    solution:
      "We mobilised multiple drill rigs simultaneously with a phased logistics plan, establishing a site camp and fuel depot to maintain continuous operations. A pre-agreed data management protocol allowed real-time reporting.",
    outcome:
      "Complete geotechnical dataset delivered on programme, enabling the structural engineer to finalise pile designs and optimise foundation costs across the site.",
    heroImage: "/images/projects/p-5.jpg",
    galleryImages: [],
    services: ["geotechnical-drilling", "ground-investigation"],
    featured: false,
    stats: [
      { label: "Site Area", value: "400 ha" },
      { label: "Boreholes", value: "400+" },
      { label: "Capacity", value: "150 MW" },
      { label: "Field Duration", value: "10 weeks" },
    ],
  },
  {
    id: "6",
    slug: "monitoring-well-installation",
    title: "Monitoring Well Installation",
    client: "Municipal Corporation",
    location: "Pune, India",
    year: 2022,
    category: "Environmental",
    tags: ["Monitoring Wells", "Environmental", "Ground Investigation"],
    shortDescription:
      "We provide monitoring well installation services using site-specific drilling methods selected to suit local geology, ground conditions, and project requirements. Our experienced field teams ensure proper well construction and development to support accurate groundwater monitoring, sampling, and long-term environmental assessment programs.",
    fullDescription:
      "Spiral Constructions was commissioned to design, install, and operate a long-term groundwater monitoring network around a closed MSW landfill site. The programme included installation of a new network of monitoring wells, quarterly sampling campaigns, and annual reporting to the regulatory authority to demonstrate groundwater quality and compliance.",
    challenge:
      "Designing a monitoring network that could reliably detect leachate migration in a complex, multi-aquifer hydrogeological setting, while delivering cost-efficient long-term operation over a 5-year programme.",
    solution:
      "Hydrogeological conceptual model development informed an optimised monitoring network design. Multi-level monitoring wells were installed in key receptor locations, with automated water level loggers to provide continuous hydraulic head data.",
    outcome:
      "Operational monitoring programme delivering quarterly sampling data and annual compliance reports to the municipal corporation and regulatory authority, with a clean compliance record maintained throughout the programme.",
    heroImage: "/images/projects/p-6.jpg",
    galleryImages: [],
    services: ["monitoring-well-services", "environmental-drilling"],
    featured: false,
    stats: [
      { label: "Monitoring Wells", value: "28" },
      { label: "Programme Duration", value: "5 years" },
      { label: "Quarterly Campaigns", value: "20" },
    ],
  },
  {
    id: "7",
    slug: "monitoring-well-development",
    title: "Monitoring Well Development",
    client: "Airport Authority of India",
    location: "Hyderabad, India",
    year: 2023,
    category: "Infrastructure",
    tags: ["Geotechnical Drilling", "Ground Investigation", "Infrastructure"],
    shortDescription:
      "We carry out monitoring well development using appropriately sized screen and plain casing pipes, followed by the placement of filter gravel and bentonite seals. The borehole is then properly sealed to prevent surface contamination and ensure the integrity of groundwater monitoring and sampling activities throughout the project lifecycle.",
    fullDescription:
      "Spiral Constructions carried out a geotechnical investigation for the expansion of a major international airport, including a new terminal building, extended taxiways, and airside infrastructure. The investigation required airside access clearances, strict security protocols, and coordination with live flight operations.",
    challenge:
      "Conducting ground investigation within a live, operational international airport environment with stringent security requirements, limited access windows, and the need to avoid disruption to aircraft movements.",
    solution:
      "We worked closely with the airport's engineering and security teams to plan a safe investigation programme with phased access. All personnel underwent full security vetting and airside inductions. Low-profile drilling equipment was used to maintain safety clearances within the operational aerodrome.",
    outcome:
      "Full geotechnical data package delivered on programme, supporting structural design of the new terminal and pavement design for extended taxiways.",
    heroImage: "/images/projects/p-7.jpg",
    galleryImages: [],
    services: ["geotechnical-drilling", "ground-investigation"],
    featured: false,
    stats: [
      { label: "Terminal Area", value: "85,000 m²" },
      { label: "Boreholes", value: "60+" },
      { label: "Taxiway Extension", value: "2.4 km" },
    ],
  },
  {
    id: "8",
    slug: "well-flushing",
    title: "Well Flushing",
    client: "Bruhat Bengaluru Mahanagara Palike",
    location: "Bengaluru, India",
    year: 2024,
    category: "Infrastructure",
    tags: ["GPR Survey", "Utility Mapping", "Infrastructure"],
    shortDescription:
      "We perform well air lifting to remove fine sediments, drilling residues, and stagnant water from newly installed monitoring wells. These activities help improve well performance, stabilize groundwater conditions, and ensure reliable groundwater sampling and monitoring results for environmental site assessment projects.",
    fullDescription:
      "Spiral Constructions was appointed to undertake a city-wide GPR survey programme across 45 km of Bengaluru's urban road network. The survey aimed to create a detailed subsurface utility map to inform smart city infrastructure upgrades, minimising the risk of utility strikes during construction and enabling better urban planning.",
    challenge:
      "Systematically surveying 45 km of busy urban roads with diverse subsurface utility types (water, sewage, electrical, telecom, gas) buried at varying depths, while managing traffic and maintaining safety.",
    solution:
      "We deployed multiple GPR units simultaneously with rolling traffic management arrangements, covering the survey area in a systematic grid. Multi-frequency antennas were used to optimise detection across a range of depths and utility types.",
    outcome:
      "Comprehensive subsurface utility map delivered in GIS format, enabling the municipality to plan infrastructure works with significantly reduced risk of utility strikes and improved project efficiency.",
    heroImage: "/images/projects/p-8.jpeg",
    galleryImages: [],
    services: ["gpr-toc-survey"],
    featured: false,
    stats: [
      { label: "Survey Coverage", value: "45 km" },
      { label: "Utilities Mapped", value: "1,200+" },
      { label: "Data Points", value: "250,000+" },
    ],
  },
  {
    id: "9",
    slug: "groundwater-purging-bailer",
    title: "Groundwater Purging with Bailer",
    client: "Archaeological Survey of India",
    location: "Delhi, India",
    year: 2022,
    category: "Commercial",
    tags: ["Geotechnical Drilling", "GPR Survey", "Heritage"],
    shortDescription:
      "Prior to groundwater sampling, we perform well purging using bailers to remove stagnant water and ensure that samples are representative of actual groundwater conditions. This process supports accurate environmental assessment results and helps maintain compliance with established sampling protocols and quality requirements.",
    fullDescription:
      "Spiral Constructions was engaged by the Archaeological Survey of India to carry out a sensitive ground investigation at a Grade-I listed heritage site in Delhi. The investigation combined non-invasive GPR scanning with carefully planned, minimally invasive small-diameter coring to assess the condition of existing foundations and identify buried archaeological features without causing damage to the protected structure.",
    challenge:
      "Investigating beneath and around a protected heritage structure without causing any damage to the fabric of the building or disturbing buried archaeological deposits. Equipment access was severely restricted.",
    solution:
      "GPR was used as the primary investigation tool, providing a detailed picture of the subsurface without excavation. Where intrusive investigation was required, we used a small-diameter core drilling rig operable in very restricted spaces, with all works supervised by an archaeological monitor.",
    outcome:
      "Detailed investigation report combining GPR interpretation and borehole data, providing ASI with the foundation information required to plan conservation works without risk to the heritage asset.",
    heroImage: "/images/projects/p-9.jpg",
    galleryImages: [],
    services: ["gpr-toc-survey", "geotechnical-drilling"],
    featured: false,
    stats: [
      { label: "GPR Scan Area", value: "2,800 m²" },
      { label: "Heritage Grade", value: "Grade I" },
      { label: "Core Boreholes", value: "12" },
    ],
  },
  {
    id: "10",
    slug: "dam-safety-investigation",
    title: "Groundwater Sample Collection",
    client: "State Water Resources Department",
    location: "Maharashtra, India",
    year: 2023,
    category: "Infrastructure",
    tags: ["Geotechnical Drilling", "Ground Investigation", "Water Resources"],
    shortDescription:
      "We collect groundwater samples from monitoring wells and borewells using manual bailers, following established environmental sampling procedures. This method ensures representative sample collection while maintaining sample integrity for accurate laboratory analysis and environmental site assessment.",
    fullDescription:
      "Spiral Constructions carried out a dam safety geotechnical investigation for an ageing earthen dam in Maharashtra, which had been identified as requiring structural assessment following a safety review. The investigation included drilling through the dam embankment and into the foundation strata, installation of piezometers and inclinometers, and seepage monitoring to evaluate internal erosion risk.",
    challenge:
      "Drilling through an operational earthen dam embankment while maintaining dam safety and integrity. Managing the significant safety and reputational risks associated with any uncontrolled seepage pathways created during investigation.",
    solution:
      "All drilling through the embankment was conducted using specialist grouting procedures to seal boreholes on completion, preventing seepage pathways. A detailed method statement was approved by the dam safety engineer before works commenced.",
    outcome:
      "Comprehensive dam safety investigation report submitted to the regulatory authority, providing the data required for stability analysis and informing a programme of targeted remediation to extend the operational life of the dam.",
    heroImage: "/images/projects/p-10.jpg",
    galleryImages: [],
    services: ["geotechnical-drilling", "monitoring-well-services", "ground-investigation"],
    featured: false,
    stats: [
      { label: "Embankment Length", value: "1.2 km" },
      { label: "Max Drill Depth", value: "55 m" },
      { label: "Instruments Installed", value: "35" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectCategories(): ProjectCategory[] {
  return [...new Set(projects.map((p) => p.category))];
}

export const projectCategories: ProjectCategory[] = [
  "Geotechnical",
  "Environmental",
  "Infrastructure",
  "Industrial",
  "Commercial",
  "Residential",
];
