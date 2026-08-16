export interface TableRow {
  [key: string]: string;
}

export interface DataTableDef {
  title?: string;
  headers: string[];
  rows: TableRow[];
}

export interface Service {
  slug: string;
  title: string;
  pageHeading: string;
  specChip: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  description: string[];
  applicableFor?: string;
  keyBenefits: string[];
  idealApplications: string[];
  cta: string;
  ctaHref: string;
  tables?: DataTableDef[];
  comparisonTable?: DataTableDef;
  additionalSections?: {
    heading: string;
    description: string[];
    advantages?: string[];
    applications?: string[];
  }[];
}

export interface MachineryItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  image?: string;
}

export interface TR34ClassSpec {
  id: string;
  classCode: string;
  movementType: "Free Movement" | "Defined Movement";
  rackingHeight: string;
  propertyE: string; // Levelness
  propertyF: string; // Flatness
  description: string;
  recommendedService: string;
  serviceSlug: string;
}

export interface ExecutionPhase {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  tolerancesAndStandards: string[];
  badgeText: string;
}

export interface JointSystemSpec {
  id: string;
  title: string;
  standard: string;
  material: string;
  description: string;
  mechanism: string;
  advantages: string[];
  applications: string[];
}

const BASE_URL = "https://www.gangadharconcretesolution.com";

export const services: Service[] = [
  {
    slug: "laser-screed",
    title: "Laser Screed Flooring (FM1/FM2 Grade)",
    pageHeading: "Laser Screed Flooring — FM1/FM2 Grade",
    specChip: "FM1 · F 1.8",
    image: `${BASE_URL}/images/laser.webp`,
    metaTitle: "Laser Screed Flooring FM1/FM2 | Gangadhar Concrete Solution, Jaipur",
    metaDescription: "Precision FM1/FM2 laser screed flooring for warehouses and industrial units — laid to TR34 standards using Somero laser screed technology.",
    description: [
      "Constructing concrete floors today is competitive and demanding: owners want floors done faster and flatter than ever before. Laser screeding lets us lay concrete in wider bays of any size, dramatically reducing pour time, cutting the number of construction joints, and improving overall floor flatness — while reducing the labor required on site.",
      "The technique eliminates the need to fix guide rails every four metres. Our laser screed machine simultaneously cuts, vibrates, and levels the concrete in a single pass, with all operations controlled by laser transmitters, receivers, and computers — removing manual error from the equation. Using this machinery, we can lay a high-tolerance concrete floor slab of up to 1,200 m² in a single day, achieving FM1, FM2 (special), FM2, and FM3 tolerances in accordance with the TR34 document.",
    ],
    applicableFor: "Areas where material handling equipment (MHE) operates in random, non-defined directions with an infinite number of travel paths.",
    keyBenefits: [
      "Laser-precise flatness and levelness, achieved consistently",
      "Fewer joints, reducing long-term maintenance and joint-related failures",
      "No joints within the aisle space, enabling smoother MHE movement",
      "Reduced overall construction time and labor requirement",
      "FM certification available for the completed floor",
    ],
    idealApplications: [
      "Warehouses and distribution centers",
      "Industrial plants and manufacturing units",
      "Stockyards and logistics parks",
      "Any facility with random-direction forklift/MHE movement",
    ],
    cta: "Request a Laser Screed Quote",
    ctaHref: "/contact?service=laser-screed",
    tables: [
      {
        title: "Floor Classification for Free Movement (per TR34)",
        headers: ["Floor Class", "Description", "Property E (Levelness)", "Property F (Flatness)"],
        rows: [
          { "Floor Class": "FM1", "Description": "Every high standard of flatness and levelness required. Reach trucks operating above 13m without side-shift.", "Property E (Levelness)": "4.5", "Property F (Flatness)": "1.8" },
          { "Floor Class": "FM2", "Description": "Reach trucks operating at 8–13m without side-shift.", "Property E (Levelness)": "6.5", "Property F (Flatness)": "2.0" },
          { "Floor Class": "FM3", "Description": "Retail floors taking directly applied finishes; retail trucks up to 8m without side-shift, or up to 13m with side-shift.", "Property E (Levelness)": "8.0", "Property F (Flatness)": "2.2" },
          { "Floor Class": "FM4", "Description": "Retail floors taking applied screeds; workshops/manufacturing facilities where MHE lift height is restricted to 4m.", "Property E (Levelness)": "10.0", "Property F (Flatness)": "2.4" },
        ],
      },
    ],
    comparisonTable: {
      title: "Manual Screeding vs. Laser Screeding",
      headers: ["Manual Screeding", "Laser Screeding"],
      rows: [
        { "Manual Screeding": "Relatively slower than laser screed", "Laser Screeding": "Increased productivity and efficiency" },
        { "Manual Screeding": "Requires more joints on the floor", "Laser Screeding": "Reduces number of construction joints — more durability and strength" },
        { "Manual Screeding": "More chances of human error, compromising quality", "Laser Screeding": "Laser-precise flatness and levelness every time" },
        { "Manual Screeding": "No certification as such", "Laser Screeding": "FM certification available for the floor" },
      ],
    },
  },
  {
    slug: "vna-flooring",
    title: "VNA Flooring (DM1/DM2 Category)",
    pageHeading: "VNA Flooring — DM1/DM2 Category",
    specChip: "DM1 · 12–13m",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/397644101/EQ/BZ/HK/7809086/super-flat-floor-vna-floors-dm1-dm2-category-for-warehouse-truck.jpg",
    metaTitle: "VNA Flooring DM1/DM2 | Very Narrow Aisle Floors | Gangadhar Concrete Solution",
    metaDescription: "High-precision VNA (very narrow aisle) flooring in DM1/DM2 categories for high-bay racking and ASRS facilities up to 12–13m lift height.",
    description: [
      "Very Narrow Aisle (VNA) flooring is engineered for facilities where MHE operates in narrow, defined aisles while stacking material at heights of 12 to 13 metres. At these lift heights, even small floor irregularities are magnified, making precise flatness and levelness essential for safe, efficient operation.",
    ],
    keyBenefits: [
      "Best-suited flooring solution for ASRS (Automated Storage & Retrieval Systems)",
      "Aisle space engineered with no joints, enabling maximum rack utilisation",
      "Precise flatness and levelness for stable high-lift operation",
      "Reduced risk of equipment strain and product damage at height",
    ],
    idealApplications: [
      "Very narrow aisle (VNA) warehousing",
      "High-bay racking facilities",
      "Automated Storage & Retrieval Systems (ASRS)",
      "Cold storage and logistics hubs with high-density racking",
    ],
    cta: "Request a VNA Flooring Quote",
    ctaHref: "/contact?service=vna-flooring",
  },
  {
    slug: "sfrc",
    title: "Steel Fiber Reinforced Concrete (SFRC) Flooring",
    pageHeading: "Steel Fiber Reinforced Concrete Flooring",
    specChip: "SFRC · High-Load",
    image: `${BASE_URL}/images/abt1.webp`,
    metaTitle: "Steel Fiber Reinforced Concrete Flooring | Gangadhar Concrete Solution",
    metaDescription: "High load-bearing steel fiber reinforced concrete (SFRC) flooring that reduces cracking and increases floor durability for demanding industrial areas.",
    description: [
      "Steel fiber reinforcement is applicable and suitable for areas designed for high load-bearing capacity, where reducing cracking and increasing durability is a priority. Distributing steel fibers throughout the concrete mix improves the slab's resistance to cracking under heavy, sustained loads.",
    ],
    keyBenefits: [
      "Increased load-bearing capacity across the slab",
      "Reduced cracking compared to conventional reinforcement methods",
      "Improved long-term durability under heavy industrial use",
      "Complements jointless flooring design for large floor areas",
    ],
    idealApplications: [
      "High load-bearing industrial floors",
      "Warehouses and distribution centers with heavy racking loads",
      "Manufacturing plants with heavy machinery traffic",
    ],
    cta: "Request an SFRC Flooring Quote",
    ctaHref: "/contact?service=sfrc",
  },
  {
    slug: "jointless",
    title: "Jointless Floors",
    pageHeading: "Jointless Floors",
    specChip: "Jointless · Low Maintenance",
    image: `${BASE_URL}/images/main01.webp`,
    metaTitle: "Jointless Concrete Floors | Gangadhar Concrete Solution",
    metaDescription: "Jointless concrete flooring for smooth, high-load operation with very few joints — reducing maintenance and improving long-term floor performance.",
    description: [
      "Jointless flooring is applicable and suitable for smooth operation in high-load-bearing environments where minimising joints — and the maintenance they demand — is a priority. Fewer joints mean fewer points of potential failure, curling, or spalling over the life of the floor.",
    ],
    keyBenefits: [
      "Very few joints, for smoother, uninterrupted operation",
      "High load-bearing capacity",
      "Low long-term maintenance",
      "Reduced risk of joint-related repairs over time",
    ],
    idealApplications: [
      "Warehouses and distribution centers",
      "Industrial storage facilities",
      "Manufacturing floors with continuous heavy traffic",
    ],
    cta: "Request a Jointless Flooring Quote",
    ctaHref: "/contact?service=jointless",
  },
  {
    slug: "polishing-densification",
    title: "Concrete Polishing & Densification",
    pageHeading: "Concrete Polishing & Densification",
    specChip: "Dust-Proof · Reflective",
    image: `${BASE_URL}/images/polish22.webp`,
    metaTitle: "Concrete Polishing & Densification | Gangadhar Concrete Solution",
    metaDescription: "Dust-proof, slip-resistant, low-maintenance concrete polishing and densification for industrial and commercial floors.",
    description: [
      "Concrete polishing and densification is applicable and suitable wherever dust-proofing, low maintenance, slip resistance, better ambient lighting, and a long-lasting floor surface are priorities. The densification process hardens the concrete surface, reducing dusting while extending the usable life of the slab.",
    ],
    keyBenefits: [
      "Dust-proof, low-maintenance floor surface",
      "Improved slip resistance",
      "Enhanced ambient lighting through increased surface reflectivity",
      "Long-lasting finish that reduces upkeep costs over time",
    ],
    idealApplications: [
      "Warehouses and distribution centers",
      "Retail and showroom interiors",
      "Manufacturing floors seeking a dust-free working environment",
    ],
    cta: "Request a Polishing & Densification Quote",
    ctaHref: "/contact?service=polishing-densification",
  },
  {
    slug: "epoxy",
    title: "Epoxy Flooring",
    pageHeading: "Epoxy Flooring — Seamless Protection for Demanding Environments",
    specChip: "Epoxy · Chemical-Resistant",
    image: `${BASE_URL}/images/color.webp`,
    metaTitle: "Epoxy Flooring Services | Gangadhar Concrete Solution",
    metaDescription: "Seamless, durable epoxy flooring solutions for industrial and commercial spaces requiring hygienic, chemical-resistant surfaces.",
    description: [
      "Epoxy flooring systems create a seamless, chemical- and abrasion-resistant coating over structural concrete — ideal wherever hygiene, durability, and cleanability matter as much as strength. We apply epoxy coatings matched to the specific exposure conditions of each facility.",
    ],
    keyBenefits: [
      "Seamless, non-porous surface resistant to dust, chemicals, and staining",
      "Easy to clean and sanitize",
      "High resistance to abrasion, impact, and heavy traffic",
      "Available in multiple finishes and safety colour-coding options",
    ],
    idealApplications: [
      "Industrial plants and production lines",
      "Warehouses and loading bays",
      "Facilities requiring hygienic, easy-to-clean surfaces",
    ],
    cta: "Request an Epoxy Flooring Quote",
    ctaHref: "/contact?service=epoxy",
  },
  {
    slug: "testing-certification",
    title: "Testing & Certification",
    pageHeading: "Testing & Certification — Verified to TR34 Code",
    specChip: "TR34 · Certified",
    image: "https://static.socotec.co.uk/s3fs-public/2021-03/plate-bearing-cbr-ev2-testing.jpg",
    metaTitle: "Floor Testing & TR34 Certification | Gangadhar Concrete Solution",
    metaDescription: "Independent third-party chartered engineer floor testing and FM/DM certification to TR34 code.",
    description: [
      "Every floor is only as good as the data behind it. We arrange floor testing by a third-party chartered engineer and provide certification for your floor's FM or DM category in accordance with the TR34 code — giving you documented, independently verified assurance of floor performance.",
    ],
    keyBenefits: [
      "Independent, third-party verification of floor classification",
      "Documented FM/DM certification per TR34 code",
      "Supports engineering sign-off and facility compliance requirements",
      "Builds long-term confidence in floor performance and warranty claims",
    ],
    idealApplications: [
      "New warehouse and industrial floor handovers",
      "Facilities requiring documented compliance for racking or MHE approvals",
      "Due diligence before high-value equipment installation",
    ],
    cta: "Schedule Testing & Certification",
    ctaHref: "/contact?service=testing-certification",
  },
  {
    slug: "specialty-joints",
    title: "Armour Joints & Plate Dowel Sleeves",
    pageHeading: "Protecting the Joints That Matter Most",
    specChip: "EN 10277 · TR-34",
    image: "https://cdn.pixabay.com/photo/2018/04/12/14/56/sleeve-3313634_1280.jpg",
    metaTitle: "Armour Joints & Plate Dowel Sleeves | Gangadhar Concrete Solution",
    metaDescription: "Joint protection systems — Armour Joints and Plate Dowel & Sleeve systems — for load transfer and long-term joint durability in industrial concrete floors.",
    description: [
      "Even the best-designed floor is only as strong as its joints. GCS installs two specialised joint protection systems to extend floor life and reduce long-term maintenance.",
    ],
    keyBenefits: [
      "Improves joint bearing strength (shear and bending)",
      "Resists twisting from wheeled traffic",
      "Efficiently transfers load between adjacent slabs",
      "Allows controlled horizontal movement while eliminating vertical displacement",
      "Mitigates joint repairs, curling, and spalling",
    ],
    idealApplications: [
      "Industrial floors",
      "Warehouses and distribution centres",
      "Roads, pavements, and airports",
      "Dockyards",
    ],
    cta: "Ask About Joint Protection Systems",
    ctaHref: "/contact?service=specialty-joints",
    additionalSections: [
      {
        heading: "Armour Joint",
        description: [
          "Armour joints are installed at designed construction joints. As concrete cures and shrinkage forces develop, the joint's plastic bolts shear to allow the steel profiles to open at a permitted opening — permitting minor, controlled slab movement from drying shrinkage and thermal variation, while restricting vertical displacement between slabs. Conforms to joint aris EN 10277-1:2018, shear studs to EN ISO 13918:2017, and Duraplate to EN 10025-2:2004; design referenced to TR-34.",
        ],
        advantages: [
          "Improves joint bearing strength (shear and bending)",
          "Resists twisting from wheeled traffic",
          "Efficiently transfers load between adjacent slabs via plate dowels",
          "Allows controlled horizontal movement while eliminating vertical movement between slabs",
          "Mitigates joint repairs, curling, and spalling",
          "Allows continuous pouring on both sides of the joint",
        ],
        applications: [
          "Industrial floors",
          "Warehouses and distribution centres",
          "Industrial storage facilities",
          "Roads and pavements",
          "Airports and runways",
          "Dockyards",
        ],
      },
      {
        heading: "Plate Dowel & Sleeve",
        description: [
          "When forklifts, MHE, and other machinery cross a joint, that joint must bear and transfer load between adjacent slabs without disturbing serviceability. Diamond or rectangular plate dowels increase the joint's shear strength, bending strength, and overall load capacity. Duraplate conforms to EN 10025-2:2004; material is ABS; design referenced to TR-34.",
        ],
        advantages: [
          "Load transfer across the joint",
          "Increased bending and shear strength",
          "Enhanced load-bearing capacity",
          "Minimises differential deflection between adjacent slabs",
          "Allows diagonal and perpendicular/parallel shrinkage movement",
          "Maximises surface area of the joint line",
          "Eliminates drilling or processing on formwork",
          "Reduces risk of restraint",
          "Speed and accuracy of dowel placement",
        ],
      },
    ],
  },
];

export const serviceOverview = [
  { title: "Laser Screed Flooring (FM1/FM2 Grade)", description: "Ultra-flat, super-level floors for free-movement warehousing and industrial areas.", slug: "laser-screed", specChip: "FM1 · F 1.8", image: "/images/card_laser_screed.webp" },
  { title: "VNA Flooring (DM1/DM2 Category)", description: "High-precision floors for very-narrow-aisle racking systems up to 12–13m lift height.", slug: "vna-flooring", specChip: "DM1 · 12–13m", image: "/images/card_vna_flooring.webp" },
  { title: "Armour Joints & Dowel Sleeves", description: "Heavy-duty load transfer joint systems for warehouse slabs and industrial floors.", slug: "specialty-joints", specChip: "EN 10277 · TR34", image: "/images/card_armour_joints.webp" },
  { title: "Steel Fiber Reinforced Concrete Flooring", description: "High load-bearing floors engineered to resist cracking in demanding-duty areas.", slug: "sfrc", specChip: "SFRC · High-Load", image: "/images/card_sfrc_flooring.webp" },
  { title: "Jointless Floors", description: "Fewer joints, smoother operation, and lower long-term maintenance.", slug: "jointless", specChip: "Jointless", image: "/images/card_jointless_flooring.webp" },
  { title: "Concrete Polishing & Densification", description: "Dust-proof, slip-resistant, low-maintenance finishes that last.", slug: "polishing-densification", specChip: "Dust-Proof", image: "/images/card_concrete_polishing.webp" },
  { title: "Testing & Certification", description: "Third-party chartered engineer testing and FM/DM certification to TR34 code.", slug: "testing-certification", specChip: "TR34", image: "/images/card_testing_certification.webp" },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export const machineryFleet: MachineryItem[] = [
  {
    id: "somero-s158c",
    name: "Somero S-158C Laser Screed Machine",
    category: "Laser Screeding",
    tagline: "Ultra-flat wide-bay floor screeding up to 1,200 m²/day",
    badge: "1,200 m²/day Output",
    description: "The gold standard in laser screeding technology. Automatically cuts, vibrates, and levels concrete in a single pass with computer-controlled laser receivers, eliminating manual levelling errors and guide rail requirements.",
    specs: [
      { label: "Daily Pouring Capacity", value: "Up to 1,200 m²/day" },
      { label: "Levelling Tech", value: "3D Laser Transmitters & Computers" },
      { label: "Tolerances Achieved", value: "FM1, FM2 (Special), FM2, FM3" },
      { label: "Single Pass Actions", value: "Cuts, Vibrates, Levels Simultaneously" },
    ],
    highlights: [
      "Eliminates guide rails every 4 metres",
      "Reduces overall construction joints by over 65%",
      "Achieves strict TR34 4th Edition tolerances",
      "Zero manual levelling errors",
    ],
    image: "/images/laser_screed_machinery.webp",
  },
  {
    id: "husqvarna-crt36",
    name: "Husqvarna CRT36 Ride-on Trowel",
    category: "Power Finishing",
    tagline: "High-output ride-on trowelling for smooth, densified surfaces",
    badge: "High-Speed Burnishing",
    description: "Heavy-duty dual-rotor ride-on trowel engineered for precision compaction, burnishing, and super-flat finish consistency across large-bay industrial concrete slabs.",
    specs: [
      { label: "Rotor Configuration", value: "Dual 36-inch Non-Overlapping Rotors" },
      { label: "Operator System", value: "Ergonomic Hydraulic Ride-On Controls" },
      { label: "Finish Quality", value: "High-Gloss Densified Abrasion Finish" },
      { label: "Operation Type", value: "High-Speed Large-Bay Slab Finishing" },
    ],
    highlights: [
      "Ensures maximum surface density and compaction",
      "Provides uniform burnish finish without trowel marks",
      "Reduces slab finishing time on 1,000+ m² daily pours",
      "Ideal for non-metallic hardener integration",
    ],
    image: "/images/concrete_power_trowel.webp",
  },
  {
    id: "husqvarna-mct36-5",
    name: "Husqvarna MCT 36-5 Walk-behind Trowel",
    category: "Precision Edging",
    tagline: "Precision walk-behind power trowel for edges & perimeter bays",
    badge: "Perimeter Precision",
    description: "Versatile 36-inch walk-behind trowel engineered for high-precision edge finishing around wall isolations, columns, and intricate slab geometries.",
    specs: [
      { label: "Rotor Diameter", value: "36 inches (915 mm)" },
      { label: "Engine Power", value: "5.5 HP High-Torque Engine" },
      { label: "Application", value: "Edge, Column & Perimeter Bay Finishing" },
      { label: "Pitch Control", value: "Precision Blade Pitch Adjustment" },
    ],
    highlights: [
      "Ensures edge flatness matches interior slab tolerances",
      "Perfect integration around Armour Joint isolations",
      "Smooth handle vibration dampening for operator accuracy",
      "High maneuverability in tight warehouse bays",
    ],
    image: "/images/concrete_power_trowel.webp",
  },
  {
    id: "hardener-spreader",
    name: "Semi-Mechanized Hardener Spreader",
    category: "Dry Shake Topping",
    tagline: "Uniform dry-shake floor hardener dispersion at 3.5–4 kg/m²",
    badge: "3.5–4 kg/m² Uniformity",
    description: "Semi-mechanized dry-shake spreader designed to broadcast non-metallic floor hardeners evenly across freshly poured concrete before trowelling.",
    specs: [
      { label: "Application Rate", value: "3.5 to 4.0 kg per m²" },
      { label: "Dispersion Accuracy", value: "Uniform Dry-Shake Coverage" },
      { label: "Hardener Compatibility", value: "Non-metallic & Metallic Toppings" },
      { label: "Benefit", value: "300% Increase in Surface Abrasion Resistance" },
    ],
    highlights: [
      "Eliminates patchy, manual hardener distribution",
      "Embeds hardener seamlessly into top 3mm concrete matrix",
      "Prevents surface dusting and spalling",
      "Dramatically improves forklift wheel wear resistance",
    ],
    image: "/images/laser_screed_machinery.webp",
  },
  {
    id: "laser-levellers",
    name: "Optical & Laser Auto Leveller Transmitters",
    category: "Survey & Quality Control",
    tagline: "Sub-millimeter laser benchmarks & TR34 floor compliance tracking",
    badge: "Sub-mm Precision",
    description: "High-precision dual-slope laser transmitters and digital optical levels providing continuous real-time reference planes across the entire pour site.",
    specs: [
      { label: "Laser Range", value: "500m Operating Radius" },
      { label: "Level Accuracy", value: "±1.5 mm at 30 metres" },
      { label: "Transmitter Type", value: "Dual Slope Automatic Self-Levelling" },
      { label: "Standard Ref", value: "TR34 & ASTM E 1155 Compliance" },
    ],
    highlights: [
      "Continuous optical feedback during Somero laser screeding",
      "Pre-pour sub-base plate bearing test alignment",
      "Verifies levelness during extreme 1,200m² single-day pours",
      "Eliminates slope deviations across long warehouse aisles",
    ],
    image: "/images/vna_superflat_warehouse.webp",
  },
];

export const tr34ClassSpecs: TR34ClassSpec[] = [
  {
    id: "fm1",
    classCode: "FM1",
    movementType: "Free Movement",
    rackingHeight: "Above 13 Metres",
    propertyE: "4.5 mm",
    propertyF: "1.8 mm",
    description: "Highest standard of levelness and flatness required for reach trucks operating above 13m without side-shift equipment.",
    recommendedService: "Laser Screed Flooring (FM1 Grade)",
    serviceSlug: "laser-screed",
  },
  {
    id: "fm2",
    classCode: "FM2",
    movementType: "Free Movement",
    rackingHeight: "8m to 13 Metres",
    propertyE: "6.5 mm",
    propertyF: "2.0 mm",
    description: "Standard high-specification warehouse floor for reach trucks operating between 8m and 13m height without side-shift.",
    recommendedService: "Laser Screed Flooring (FM2 Grade)",
    serviceSlug: "laser-screed",
  },
  {
    id: "fm3",
    classCode: "FM3",
    movementType: "Free Movement",
    rackingHeight: "Up to 8 Metres",
    propertyE: "8.0 mm",
    propertyF: "2.2 mm",
    description: "Retail floors taking directly applied finishes, or logistics facilities with MHE operating up to 8m (or 13m with side-shift).",
    recommendedService: "Laser Screed / SFRC Flooring",
    serviceSlug: "laser-screed",
  },
  {
    id: "fm4",
    classCode: "FM4",
    movementType: "Free Movement",
    rackingHeight: "Up to 4 Metres",
    propertyE: "10.0 mm",
    propertyF: "2.4 mm",
    description: "Workshops, light manufacturing, and retail floors taking applied screeds with MHE lift heights restricted to under 4m.",
    recommendedService: "Jointless / Epoxy Flooring",
    serviceSlug: "jointless",
  },
  {
    id: "dm1",
    classCode: "DM1 / DM2",
    movementType: "Defined Movement",
    rackingHeight: "12m to 13 Metres (VNA/ASRS)",
    propertyE: "Super Flat",
    propertyF: "Zero Sway",
    description: "Very Narrow Aisle (VNA) and Automated Storage & Retrieval Systems (ASRS) requiring zero wheel tilt in fixed aisle paths.",
    recommendedService: "VNA Super Flat Flooring (DM1 Category)",
    serviceSlug: "vna-flooring",
  },
];

export const executionLifecyclePhases: ExecutionPhase[] = [
  {
    stepNumber: 1,
    title: "Phase 1: Pre-Survey & Sub-Base Benchmark",
    subtitle: "Site Audit & Plate Bearing Verification",
    description: "Our chartered engineering team conducts a thorough site level survey and plate bearing test (1 test per 2000m² plus 2 additional benchmarks). We verify sub-base compaction and slope tolerances before any concrete arrives.",
    keyActivities: [
      "Digital level survey across total site grid",
      "Plate bearing tests at 2000 m² intervals",
      "Sub-base compaction level & grade verification",
      "Sub-grade moisture and load capacity sign-off",
    ],
    tolerancesAndStandards: ["ASTM E 1155 Sub-base Benchmark", "TR34 Plate Bearing Standard"],
    badgeText: "Step 1 · Site Survey",
  },
  {
    stepNumber: 2,
    title: "Phase 2: Pre-Pouring & Joint Protection Setup",
    subtitle: "Membranes, Formwork & Dowel Placement",
    description: "Installation of a 200-micron LDPE slip membrane to eliminate friction between slab and sub-base. Precision placement of L-angle formwork, steel Armour Joints, and 6mm ABS Plate Dowels @ 450mm c/c.",
    keyActivities: [
      "200-micron LDPE slip membrane layout",
      "L-angle perimeter formwork alignment",
      "Armour Joint installation for heavy-duty load transfer",
      "Diamond & Rectangular ABS Dowel sleeve fixing @ 450mm c/c",
    ],
    tolerancesAndStandards: ["EN 10025-2:2004 (Duraplate)", "EN 10277-1:2018 (Armour Aris)"],
    badgeText: "Step 2 · Formwork & Dowels",
  },
  {
    stepNumber: 3,
    title: "Phase 3: Automated Laser Screed Slab Pouring",
    subtitle: "Somero S-158C Laying & Hardener Spreading",
    description: "Concrete slump and temperature are tested upon arrival. The Somero S-158C laser screed simultaneously cuts, vibrates, and levels the slab in wide bays up to 1,200m²/day, followed by semi-mechanized dry-shake floor hardener (3.5–4 kg/m²).",
    keyActivities: [
      "Slump & concrete temperature verification",
      "Somero S-158C single-pass laser screeding (up to 1,200 m²/day)",
      "Semi-mechanized hardener spreading (3.5–4.0 kg/m²)",
      "Vibration consolidation & air-void elimination",
    ],
    tolerancesAndStandards: ["TR34 Wide-Bay Standard", "Somero 3D Laser Control"],
    badgeText: "Step 3 · Laser Screeding",
  },
  {
    stepNumber: 4,
    title: "Phase 4: Power Trowel Finishing & Saw-Cutting",
    subtitle: "Husqvarna Trowelling & Contraction Sawing",
    description: "Our experience finishing team utilizes Husqvarna CRT36 ride-on and MCT36-5 walk-behind trowels for high-density burnishing. Controlled depth saw-cutting creates contraction joints at specified bay dimensions.",
    keyActivities: [
      "Husqvarna CRT36 ride-on power trowelling",
      "Husqvarna MCT 36-5 precision edge finishing",
      "Early-entry saw-cutting for contraction joints",
      "Curing membrane / sealer application",
    ],
    tolerancesAndStandards: ["ROT Finishing Protocol", "EN ISO 13918 Joint Protection"],
    badgeText: "Step 4 · Power Finishing",
  },
  {
    stepNumber: 5,
    title: "Phase 5: TR34 Dipstick Testing & Certification",
    subtitle: "Third-Party Sign-Off & Performance Warranty",
    description: "Independent third-party chartered engineers perform full F-meter / Dipstick floor flatness and levelness testing, delivering certified TR34 FM1, FM2, or DM1 documentation for facility handover.",
    keyActivities: [
      "Dipstick / F-meter profile scanning",
      "Property E (Levelness) & Property F (Flatness) calculations",
      "Third-party chartered engineer verification report",
      "Final FM/DM certification sign-off",
    ],
    tolerancesAndStandards: ["TR34 4th Edition Code", "DIN 18202 / ASTM E 1155 Certified"],
    badgeText: "Step 5 · TR34 Certification",
  },
];

export const jointSystemSpecs: JointSystemSpec[] = [
  {
    id: "armour-joint",
    title: "Heavy-Duty Steel Armour Joint",
    standard: "EN 10277-1:2018 | EN ISO 13918:2017 | EN 10025-2:2004",
    material: "Cold-Drawn Steel Profiles & Shear Studs with Shearing Plastic Bolts",
    description: "Armour joints are installed at designed construction joints. As drying shrinkage occurs during curing, plastic bolts shear, allowing heavy steel aris profiles to open safely without vertical displacement.",
    mechanism: "Permits controlled horizontal slab movement from drying shrinkage and thermal expansion while locking vertical alignment, eliminating joint spalling under heavy wheel traffic.",
    advantages: [
      "Improves joint bearing strength in shear and bending",
      "Resists severe twisting and impact from heavy forklift wheel traffic",
      "Transfers high loads efficiently between adjacent concrete slabs",
      "Allows continuous pouring on both sides of the construction joint",
      "Completely mitigates joint curling, spalling, and costly long-term repairs",
    ],
    applications: [
      "Industrial & Logistics Warehouses",
      "Distribution Centres & Storage Hubs",
      "Airport Aprons & Runway Service Roads",
      "Dockyards & Heavy Industrial Floors",
    ],
  },
  {
    id: "plate-dowel-sleeve",
    title: "Plate Dowel & ABS Sleeve System",
    standard: "EN 10025-2:2004 | TR-34 Referenced Design",
    material: "High-Grade ABS Sleeve with Diamond or Rectangular Steel Dowel Plates",
    description: "Engineered load-transfer system featuring 6mm steel dowels housed in ABS plastic sleeves, inserted into formwork at 450mm centers to bridge adjacent concrete bays.",
    mechanism: "Allows diagonal and perpendicular horizontal movement during slab shrinkage while restricting vertical differential deflection across the joint line.",
    advantages: [
      "Eliminates drilling or damaging perimeter formworks",
      "Maximizes surface area along joint lines for maximum load transfer",
      "Allows full horizontal shrinkage movement without slab restraint cracking",
      "Minimizes differential deflection under MHE wheel loads",
      "Speed and precision during site installation",
    ],
    applications: [
      "Wide-Bay Laser Screed Floor Slabs",
      "Jointless Industrial Slabs",
      "High Load-Bearing Commercial Floors",
    ],
  },
];

