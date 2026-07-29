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

export const services: Service[] = [
  {
    slug: "laser-screed",
    title: "Laser Screed Flooring (FM1/FM2 Grade)",
    pageHeading: "Laser Screed Flooring — FM1/FM2 Grade",
    specChip: "FM1 · F 1.8",
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
  { title: "Laser Screed Flooring (FM1/FM2 Grade)", description: "Ultra-flat, super-level floors for free-movement warehousing and industrial areas.", slug: "laser-screed", specChip: "FM1 · F 1.8" },
  { title: "VNA Flooring (DM1/DM2 Category)", description: "High-precision floors for very-narrow-aisle racking systems up to 12–13m lift height.", slug: "vna-flooring", specChip: "DM1 · 12–13m" },
  { title: "Steel Fiber Reinforced Concrete Flooring", description: "High load-bearing floors engineered to resist cracking in demanding-duty areas.", slug: "sfrc", specChip: "SFRC · High-Load" },
  { title: "Jointless Floors", description: "Fewer joints, smoother operation, and lower long-term maintenance.", slug: "jointless", specChip: "Jointless" },
  { title: "Concrete Polishing & Densification", description: "Dust-proof, slip-resistant, low-maintenance finishes that last.", slug: "polishing-densification", specChip: "Dust-Proof" },
  { title: "Epoxy Flooring", description: "Seamless, chemical- and abrasion-resistant coatings for demanding environments.", slug: "epoxy", specChip: "Epoxy" },
  { title: "Testing & Certification", description: "Third-party chartered engineer testing and FM/DM certification to TR34 code.", slug: "testing-certification", specChip: "TR34" },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
