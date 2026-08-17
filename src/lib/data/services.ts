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
    image: "/images/card_sfrc_flooring.webp",
    metaTitle: "Steel Fiber Reinforced Concrete Flooring | Gangadhar Concrete Solution",
    metaDescription: "High load-bearing steel fiber reinforced concrete (SFRC) flooring engineered to resist cracking and maximize durability for heavy-duty industrial facilities.",
    description: [
      "Steel Fiber Reinforced Concrete (SFRC) is the industry standard for industrial facilities designed for extreme load-bearing capacity, intense dynamic traffic, and severe impact conditions. By dispersing millions of engineered hooked-end steel fibers uniformly throughout the concrete matrix, SFRC transforms brittle concrete into a ductile, highly crack-resistant composite slab.",
      "Unlike traditional rebar mesh that only reinforces a single horizontal plane, steel fibers provide continuous three-dimensional, omnidirectional reinforcement. This significantly enhances the post-crack flexural toughness, shear capacity, and fatigue resistance of the slab under repetitive heavy forklift and reach-truck movements.",
    ],
    applicableFor: "Heavy-duty manufacturing plants, automated logistics warehouses, container freight stations, and facilities with point racking loads exceeding 80 kN.",
    keyBenefits: [
      "3D omnidirectional reinforcement resisting crack propagation at all depths",
      "Substantially higher flexural toughness (energy absorption) per ASTM C1609",
      "Eliminates on-site rebar fixing labor and accelerates pour schedules",
      "Enables wider joint spacing when combined with jointless floor designs",
      "Superior impact and abrasion resistance under steel-wheeled and heavy traffic",
    ],
    idealApplications: [
      "High-bay warehouses with heavy static racking loads",
      "Heavy engineering, metal stamping, and automotive manufacturing plants",
      "Logistics hubs, cross-dock terminals, and container freight stations",
      "Cold storage facilities requiring reduced thermal contraction cracking",
    ],
    cta: "Request an SFRC Flooring Quote",
    ctaHref: "/contact?service=sfrc",
    additionalSections: [
      {
        heading: "Omnidirectional Crack Arrest & Flexural Toughness",
        description: [
          "When micro-cracks initiate under heavy point loads or temperature fluctuations, hooked-end steel fibers immediately bridge the crack faces. As the load increases, the mechanical anchorage of the hooked ends resists fiber pull-out, distributing stresses across a broader slab area and preventing catastrophic crack widening.",
        ],
        advantages: [
          "Engineered hooked-end fibers provide superior pull-out resistance",
          "High post-crack residual flexural strength (Re3 values compliant with TR34)",
          "Prevents curling and edge spalling at slab construction joints",
          "Reduces slab thickness requirements while maintaining load ratings",
        ],
        applications: [
          "Heavy manufacturing floors with dynamic machine vibrations",
          "High-density pallet racking aisles",
          "Heavy forklift and reach-truck travelways",
        ],
      },
      {
        heading: "Rapid Single-Pass Construction & Rebar Elimination",
        description: [
          "Steel fibers are dosed directly into the ready-mix concrete batching plant or truck mixer, eliminating the need to cut, bend, transport, and manually tie steel rebar cages on site. This allows our Somero laser screed machine to pour and finish up to 1,500 m² of reinforced slab in a single daily shift.",
        ],
        advantages: [
          "Cuts on-site reinforcement installation time to zero",
          "Eliminates rebar displacement errors during concrete pumping",
          "Allows continuous high-output laser screeding without obstruction",
          "Significant reduction in total project timeline and labor overhead",
        ],
        applications: [
          "Fast-track warehouse and factory handover projects",
          "Large-format industrial developments across India",
        ],
      },
    ],
    comparisonTable: {
      title: "SFRC vs. Conventional Rebar Mesh Reinforcement",
      headers: ["Performance Metric", "Conventional Rebar Mesh", "Steel Fiber Reinforced Concrete (SFRC)"],
      rows: [
        { "Performance Metric": "Reinforcement Coverage", "Conventional Rebar Mesh": "2D single/double plane only", "Steel Fiber Reinforced Concrete (SFRC)": "3D omnidirectional throughout whole slab" },
        { "Performance Metric": "Crack Bridging", "Conventional Rebar Mesh": "Only after crack reaches mesh depth", "Steel Fiber Reinforced Concrete (SFRC)": "Immediate micro-crack bridging at origin" },
        { "Performance Metric": "Installation Speed", "Conventional Rebar Mesh": "Slow; manual tying on spacers", "Steel Fiber Reinforced Concrete (SFRC)": "Instant; dosed directly in concrete mix" },
        { "Performance Metric": "Joint Spacing", "Conventional Rebar Mesh": "Restricted to 4–6m bay grids", "Steel Fiber Reinforced Concrete (SFRC)": "Large bays up to 30–40m jointless panels" },
        { "Performance Metric": "Impact & Fatigue Life", "Conventional Rebar Mesh": "Standard concrete impact resistance", "Steel Fiber Reinforced Concrete (SFRC)": "Up to 300% greater fatigue & impact endurance" },
      ],
    },
  },
  {
    slug: "jointless",
    title: "Jointless Floors",
    pageHeading: "Jointless Concrete Flooring Systems",
    specChip: "Jointless · Low Maintenance",
    image: "/images/card_jointless_flooring.webp",
    metaTitle: "Jointless Concrete Floors | Gangadhar Concrete Solution",
    metaDescription: "High-performance jointless concrete flooring eliminating saw-cut contraction joints for seamless, low-maintenance warehouse operations.",
    description: [
      "Traditional concrete floors require saw-cut contraction joints every 4 to 6 metres to manage drying shrinkage. However, these joints become the primary source of operational headaches: forklift wheels impact joint edges, causing chipping, spalling, sealant deterioration, and costly equipment downtime. Jointless flooring eliminates over 75% of these interior joints.",
      "Using advanced steel fiber reinforcement combined with specialized low-shrinkage concrete mix designs and perimeter armour joints, GCS pours continuous slab bays of up to 40m × 40m (1,600 m²) without a single internal saw-cut joint. The result is a smooth, uninterrupted surface engineered for high-speed material handling and automated robotics.",
    ],
    applicableFor: "Facilities with heavy forklift traffic, automated guided vehicles (AGVs), continuous conveyor networks, and logistics hubs requiring minimal operational downtime.",
    keyBenefits: [
      "Eliminates up to 80% of internal slab joints and associated maintenance",
      "Completely prevents forklift wheel shock, mast vibration, and tire wear",
      "Increases material handling speeds across open warehouse aisles",
      "Lowers long-term Total Cost of Ownership (TCO) across 20+ year lifespans",
      "Ideal foundation for modern Automated Guided Vehicles (AGVs) and AMRs",
    ],
    idealApplications: [
      "Modern 3PL logistics parks and e-commerce fulfillment centers",
      "Automated warehouses with AGVs and autonomous mobile robots (AMRs)",
      "Food and beverage packaging and pharmaceutical distribution centers",
      "Cold storage and freezer warehouses where joint maintenance is critical",
    ],
    cta: "Request a Jointless Flooring Quote",
    ctaHref: "/contact?service=jointless",
    additionalSections: [
      {
        heading: "Large-Bay Shrinkage Engineering & Joint Elimination",
        description: [
          "In jointless floor design, concrete drying shrinkage is accommodated entirely at heavy-duty prefabricated Armour Joints located along the perimeter of each large bay. Controlled steel plate dowels transfer shear and bending loads smoothly across bays while allowing free horizontal contraction.",
        ],
        advantages: [
          "Zero saw-cut joints to seal, clean, or repair inside aisle spaces",
          "Seamless floor profile minimizes forklift operator fatigue and back strain",
          "Consistent flatness across large open storage bays",
          "Eliminates slab curling at intermediate joints",
        ],
        applications: [
          "Fast-paced cross-dock terminals",
          "Automated warehouse distribution bays",
          "Heavy manufacturing assembly lines",
        ],
      },
      {
        heading: "20-Year Maintenance Savings & TCO Reduction",
        description: [
          "Over a 10 to 20 year operational lifespan, joint spalling repairs and elastomer sealant re-caulking represent up to 70% of total concrete floor maintenance expenditure. Jointless floors eliminate this recurring cost while drastically lowering forklift wheel replacements.",
        ],
        advantages: [
          "Reduces annual floor maintenance budgets by up to 80%",
          "Protects expensive polyurethane and rubber forklift tires from impact damage",
          "Ensures zero production downtime for joint sealing or re-profiling",
          "Higher asset resale and lease valuation for warehouse property owners",
        ],
        applications: [
          "Institutional logistics assets and REIT-grade commercial warehouses",
          "High-throughput regional distribution hubs",
        ],
      },
    ],
    comparisonTable: {
      title: "Conventional Jointed Slabs vs. GCS Jointless Slabs",
      headers: ["Operational Parameter", "Conventional Jointed Floor (4–6m)", "GCS Large-Bay Jointless Floor (30–40m)"],
      rows: [
        { "Operational Parameter": "Joint Frequency", "Conventional Jointed Floor (4–6m)": "150–200 linear metres per 1,000 m²", "GCS Large-Bay Jointless Floor (30–40m)": "Only 30–40 linear metres per 1,000 m²" },
        { "Operational Parameter": "MHE Driving Speed", "Conventional Jointed Floor (4–6m)": "Operators must slow down over joints", "GCS Large-Bay Jointless Floor (30–40m)": "Uninterrupted maximum MHE operational speed" },
        { "Operational Parameter": "Forklift Wheel Life", "Conventional Jointed Floor (4–6m)": "Frequent chipping and wheel replacement", "GCS Large-Bay Jointless Floor (30–40m)": "Extended wheel life with zero impact shock" },
        { "Operational Parameter": "Sealant Maintenance", "Conventional Jointed Floor (4–6m)": "Re-sealing required every 2–3 years", "GCS Large-Bay Jointless Floor (30–40m)": "Armour joints require zero elastomeric sealants" },
        { "Operational Parameter": "AGV / AMR Suitability", "Conventional Jointed Floor (4–6m)": "Joint dips can trigger robot sensor faults", "GCS Large-Bay Jointless Floor (30–40m)": "Ideal ultra-smooth track for robotics" },
      ],
    },
  },
  {
    slug: "polishing-densification",
    title: "Concrete Polishing & Densification",
    pageHeading: "Concrete Polishing & Chemical Densification",
    specChip: "Dust-Proof · Reflective",
    image: "/images/card_concrete_polishing.webp",
    metaTitle: "Concrete Polishing & Densification | Gangadhar Concrete Solution",
    metaDescription: "Dust-proof, slip-resistant, high-gloss concrete polishing and lithium silicate densification for industrial, commercial, and logistics floors.",
    description: [
      "Concrete polishing and chemical densification transforms standard, porous concrete slabs into hardened, high-density, dust-proof surfaces with a brilliant reflective sheen. Untreated concrete naturally produces fine calcium dust as free lime deteriorates under foot and vehicular traffic; chemical densification permanently solves this problem at the molecular level.",
      "GCS uses penetrating nano-lithium and sodium silicate hardeners that react chemically with free calcium hydroxide in the concrete paste, forming permanent insoluble Calcium Silicate Hydrate (C-S-H) crystals inside the microscopic pores. Combined with multi-stage planetary diamond grinding, the floor achieves extreme abrasion resistance and high ambient light reflectivity.",
    ],
    applicableFor: "Modern logistics warehouses, retail showrooms, electronics assembly plants, automotive service centers, and facilities demanding dust-free operations.",
    keyBenefits: [
      "100% dust-proof surface eliminating concrete dusting permanently",
      "Increases surface hardness and abrasion resistance by over 300%",
      "High light reflectivity (up to 30% gloss) reduces facility lighting energy bills",
      "Certified slip-resistant finish meeting international safety benchmarks",
      "No coatings or toppings to peel, chip, flake, or require re-application",
    ],
    idealApplications: [
      "E-commerce fulfillment centers and logistics warehouses",
      "Commercial retail stores, hypermarkets, and automotive showrooms",
      "Dust-sensitive electronics, precision engineering, and FMCG facilities",
      "Institutional and educational campus corridors and exhibition halls",
    ],
    cta: "Request a Polishing & Densification Quote",
    ctaHref: "/contact?service=polishing-densification",
    additionalSections: [
      {
        heading: "Chemical Densification & C-S-H Crystalline Matrix",
        description: [
          "Our penetrating silicate hardeners permeate up to 6mm into the concrete slab. The reactive silicate bonds with unhydrated lime particles, locking the concrete matrix together into an ultra-dense, non-porous structure that resists oil penetration, tire marking, and chemical staining.",
        ],
        advantages: [
          "Deep penetration without forming a topical film that can peel",
          "Permanent chemical transformation — never wears off with traffic",
          "Drastically reduces surface porosity against liquid spills",
          "Simple maintenance: only requires standard water and pH-neutral cleaning",
        ],
        applications: [
          "High-traffic warehouse distribution corridors",
          "Industrial assembly and packaging floors",
          "Automotive service bays and commercial showrooms",
        ],
      },
      {
        heading: "Planetary Diamond Grinding & High-Gloss Sheen",
        description: [
          "Using heavy-duty planetary grinding machines with metal- and resin-bond diamond tooling from 30 to 3000 grit, our operators progressively hone and polish the slab surface. The result is a smooth, glass-like finish with brilliant ambient light bounce that brightens the entire building interior.",
        ],
        advantages: [
          "Enhances natural ambient light levels, reducing kilowatt energy consumption",
          "Smooth surface eliminates tire squeal and tire mark buildup from MHE",
          "Maintains high coefficient of friction (COF) for safe pedestrian traction",
          "Sustainable green building practice with zero VOC emissions",
        ],
        applications: [
          "Large-scale retail chains and cash-and-carry stores",
          "Corporate logistics facilities and logistics parks",
        ],
      },
    ],
    tables: [
      {
        title: "Mechanical Polishing Grit Stages & Finish Levels",
        headers: ["Polishing Stage", "Diamond Grit", "Surface Profile", "Visual Appearance & Sheen"],
        rows: [
          { "Polishing Stage": "Stage 1: Coarse Grind", "Diamond Grit": "30 / 60 Metal Bond", "Surface Profile": "Removes surface laitance & exposes micro-aggregate", "Visual Appearance & Sheen": "Flat, matte open profile ready for densifier" },
          { "Polishing Stage": "Stage 2: Honing", "Diamond Grit": "100 / 200 Hybrid", "Surface Profile": "Closes micro-scratches and smooths surface profile", "Visual Appearance & Sheen": "Low sheen matte with clean aggregate presentation" },
          { "Polishing Stage": "Stage 3: Chemical Densification", "Diamond Grit": "Silicate Application", "Surface Profile": "Nano-lithium penetrates and hardens pore structure", "Visual Appearance & Sheen": "Hardened matrix, completely dust-proof" },
          { "Polishing Stage": "Stage 4: Semi-Gloss Polish", "Diamond Grit": "400 / 800 Resin Bond", "Surface Profile": "High-density fine aggregate polishing", "Visual Appearance & Sheen": "Clean semi-gloss reflection with clear overhead lighting image" },
          { "Polishing Stage": "Stage 5: High-Gloss Burnish", "Diamond Grit": "1500 / 3000 Resin Bond", "Surface Profile": "Glass-smooth densified concrete surface", "Visual Appearance & Sheen": "High-gloss mirror finish with maximum light reflectivity" },
        ],
      },
    ],
  },
  {
    slug: "epoxy",
    title: "Epoxy Flooring",
    pageHeading: "Epoxy Flooring — Seamless Protection for Demanding Environments",
    specChip: "Epoxy · Chemical-Resistant",
    image: "/images/card_concrete_polishing.webp",
    metaTitle: "Epoxy Flooring Services | Gangadhar Concrete Solution",
    metaDescription: "Seamless, durable epoxy flooring solutions for industrial and commercial spaces requiring hygienic, chemical-resistant surfaces.",
    description: [
      "Epoxy flooring systems create a seamless, chemical- and abrasion-resistant coating over structural concrete — ideal wherever hygiene, durability, and cleanability matter as much as strength. We apply epoxy coatings matched to the specific exposure conditions of each facility.",
      "From high-build self-levelling epoxies to heavy-duty polyurethane mortar systems, GCS provides certified industrial coating installations with proper mechanical surface preparation (shot blasting/diamond grinding) to ensure permanent substrate adhesion and zero delamination.",
    ],
    applicableFor: "Pharmaceutical cleanrooms (GMP/FDA compliant), chemical processing plants, food and beverage processing, hospital healthcare facilities, and electronics manufacturing.",
    keyBenefits: [
      "Seamless, non-porous surface resistant to dust, chemicals, and staining",
      "Easy to clean and sanitize with high resistance to chemical washdowns",
      "High resistance to abrasion, impact, and heavy pallet truck traffic",
      "Available in multiple RAL colors, anti-static ESD, and safety demarcation options",
      "Impervious monolithic barrier preventing fluid penetration into concrete",
    ],
    idealApplications: [
      "Pharmaceutical cleanrooms and healthcare laboratories",
      "Food, dairy, beverage, and confectionery processing facilities",
      "Automotive assembly workshops and paint booths",
      "Electronics and semiconductor manufacturing (Anti-Static ESD floors)",
    ],
    cta: "Request an Epoxy Flooring Quote",
    ctaHref: "/contact?service=epoxy",
    additionalSections: [
      {
        heading: "Chemical & Microbial Resistance for Cleanroom Standards",
        description: [
          "Our pharmaceutical-grade self-levelling epoxy systems cure into a completely seamless, jointless surface with zero grout lines or crevices. This prevents bacterial growth, mold colonization, and chemical degradation from harsh sanitizing agents and CIP (Clean-in-Place) washdowns.",
        ],
        advantages: [
          "Complies with cGMP, FDA, and WHO sanitary cleanroom specifications",
          "Resists concentrated acids, alkalis, solvents, oils, and detergents",
          "Coved wall-to-floor junctions ensure 100% washdown containment",
          "Zero VOC, low-odor solventless formulations available",
        ],
        applications: [
          "Pharma formulations, API plants, and biotech labs",
          "Hospitals, surgical suites, and medical device assembly",
          "Commercial dairy, beverage, and meat processing facilities",
        ],
      },
      {
        heading: "Heavy-Duty Impact & Anti-Static (ESD) Formulations",
        description: [
          "For areas subjected to severe mechanical impact, heavy pallet jacks, or sensitive electronics, GCS installs multi-layer quartz broadcast epoxies and conductive ESD coatings with copper tape grounding grids to safely dissipate electrostatic charges.",
        ],
        advantages: [
          "High compressive and bond strength exceeds structural concrete",
          "ESD compliance (ANSI/ESD S20.20) protects sensitive electronics",
          "Customizable slip-resistant texture with aluminum oxide / quartz aggregates",
          "High-visibility demarcation for safety aisles, walkways, and hazard zones",
        ],
        applications: [
          "Electronics assembly and server battery rooms",
          "Automotive maintenance workshops and battery charging bays",
        ],
      },
    ],
    tables: [
      {
        title: "Industrial Epoxy Flooring System Selection Matrix",
        headers: ["System Classification", "Application Thickness", "Key Characteristics", "Recommended Industrial Use"],
        rows: [
          { "System Classification": "Epoxy Floor Coating", "Application Thickness": "0.3 – 0.5 mm (300–500 µm)", "Key Characteristics": "Economical dust-proofing & light chemical protection", "Recommended Industrial Use": "Assembly areas, light engineering, storage rooms" },
          { "System Classification": "Self-Levelling Epoxy Topping", "Application Thickness": "1.0 – 3.0 mm", "Key Characteristics": "Glass-smooth, seamless, hygienic, high gloss finish", "Recommended Industrial Use": "Pharma cleanrooms, laboratories, electronics, FMCG" },
          { "System Classification": "Heavy-Duty Epoxy Screed", "Application Thickness": "3.0 – 6.0 mm", "Key Characteristics": "Extreme impact resistance & heavy wheel traffic tolerance", "Recommended Industrial Use": "Heavy engineering, machine shops, forklift travelways" },
          { "System Classification": "Anti-Static / Conductive ESD", "Application Thickness": "2.0 – 3.0 mm", "Key Characteristics": "Static dissipative (10^6 to 10^9 ohms) with copper grounding", "Recommended Industrial Use": "Semiconductor manufacturing, PCB assembly, munitions" },
        ],
      },
    ],
  },
  {
    slug: "testing-certification",
    title: "Testing & Certification",
    pageHeading: "Testing & Certification — Verified to TR34 Code",
    specChip: "TR34 · Certified",
    image: "/images/card_testing_certification.webp",
    metaTitle: "Floor Testing & TR34 Certification | Gangadhar Concrete Solution",
    metaDescription: "Independent third-party chartered engineer floor testing and FM/DM certification to TR34, ASTM E1155, and DIN 18202 standards.",
    description: [
      "Every high-performance concrete floor is only as reliable as the empirical engineering data behind it. Gangadhar Concrete Solution conducts comprehensive, non-destructive and destructive testing in compliance with UK TR34 (4th Edition), ASTM E1155, and DIN 18202 standards — giving facility owners, structural consultants, and warehouse operators independently verified proof of floor quality.",
      "From pre-pour subgrade Plate Bearing Tests (PBT) that establish foundation modulus to post-pour continuous digital floor profilometer surveys for FM1/FM2 free-movement and DM1/DM2 defined-movement aisles, our chartered engineering audits provide complete compliance documentation, warranty validation, and official handover certification.",
    ],
    applicableFor: "Newly constructed warehouse slabs, VNA warehouse racking installations, ASRS high-bay logistics hubs, and pre-handover due diligence for institutional developers.",
    keyBenefits: [
      "Independent, third-party verification and chartered engineer sign-off",
      "Documented FM1/FM2 and DM1/DM2 compliance certification per TR34 (4th Edition)",
      "Continuous digital floor profiling eliminating manual optical leveling discrepancies",
      "Pre-pour geotechnical plate bearing tests (PBT) verifying subgrade reaction (k-value)",
      "Guarantees reach truck stability, prevents mast sway, and protects MHE warranties",
    ],
    idealApplications: [
      "New warehouse, logistics park, and industrial floor handovers",
      "Very Narrow Aisle (VNA) facilities requiring DM1/DM2 certification up to 13m height",
      "High-bay racking installations requiring MHE vendor warranty compliance",
      "Pre-installation structural audits for automated guided vehicles (AGVs) and AMRs",
    ],
    cta: "Schedule Testing & Certification",
    ctaHref: "/contact?service=testing-certification",
    additionalSections: [
      {
        heading: "Digital Floor Profiler Surveying (TR34 FM & DM Standards)",
        description: [
          "Using state-of-the-art continuous digital floor profilers and robotic survey instruments, our certified technicians measure floor elevation profiles continuously along the exact wheel paths of Material Handling Equipment (MHE). The survey calculates Property E (Levelness), Property F (Flatness), Property Z, and d2Z with millimetric precision.",
        ],
        advantages: [
          "Generates full digital topological reports and heat maps of floor levelness",
          "Calculates exact compliance percentage for FM1, FM2, FM3, DM1, and DM2 classes",
          "Identifies localized high/low spots for precision micro-grinding corrections",
          "Third-party chartered engineer certificate accepted by global logistics tenants",
        ],
        applications: [
          "Very Narrow Aisle (VNA) racking corridors",
          "Reach-truck free-movement storage zones",
          "ASRS automated warehouse shuttle tracks",
        ],
      },
      {
        heading: "Geotechnical Plate Bearing & Sub-Base Load Testing",
        description: [
          "Before a single cubic metre of concrete is placed, our engineering team conducts in-situ Plate Bearing Tests (IS 1888 / DIN 18134 / BS 1377) across the compacted sub-base. This verifies the modulus of subgrade reaction (k-value) and deformation modulus (Ev2/Ev1) to ensure the foundation can support heavy static point loads without settlement.",
        ],
        advantages: [
          "Confirms sub-base compaction meets design load bearing requirements (CBR / k-value)",
          "Prevents differential settlement, slab rocking, and subgrade-induced cracking",
          "Provides certified soil bearing data for structural slab thickness calculations",
          "Validates contractor earthwork compaction before expensive concrete pours",
        ],
        applications: [
          "Pre-pour warehouse sub-base and WMM / GSB layer testing",
          "Heavy manufacturing machine foundation pads",
          "External concrete apron and truck loading dock yards",
        ],
      },
      {
        heading: "Hardened Concrete Core & Non-Destructive Quality Audits",
        description: [
          "Post-curing quality assurance includes non-destructive Rebound Hammer tests (IS 13311), core extraction and compressive strength testing (IS 516 / BS EN 12504), surface abrasion resistance testing (BS EN 13892-4), and moisture vapor emission rate (MVER) testing per ASTM F1869.",
        ],
        advantages: [
          "Verifies characteristic compressive strength against design grade (M30/M35/M40)",
          "Quantifies surface abrasion resistance classification (Special, AR1, AR2, AR3)",
          "Tests moisture vapor emission rates before applying epoxy coatings or sealers",
          "Provides immutable forensic quality audit records for insurance and structural warranties",
        ],
        applications: [
          "Final building completion certificates and client handovers",
          "Dispute resolution and structural performance validation",
        ],
      },
    ],
    tables: [
      {
        title: "TR34 (4th Edition) Floor Survey Testing Classification",
        headers: ["TR34 Class", "Movement Type", "Operating Lift Height", "Property E (Levelness)", "Property F (Flatness)"],
        rows: [
          { "TR34 Class": "FM1", "Movement Type": "Free Movement (FM)", "Operating Lift Height": "Above 13.0 metres", "Property E (Levelness)": "4.5 mm", "Property F (Flatness)": "1.8 mm" },
          { "TR34 Class": "FM2 (Special)", "Movement Type": "Free Movement (FM)", "Operating Lift Height": "10.0m to 13.0m without side-shift", "Property E (Levelness)": "5.5 mm", "Property F (Flatness)": "1.9 mm" },
          { "TR34 Class": "FM2", "Movement Type": "Free Movement (FM)", "Operating Lift Height": "8.0m to 13.0m with side-shift", "Property E (Levelness)": "6.5 mm", "Property F (Flatness)": "2.0 mm" },
          { "TR34 Class": "FM3", "Movement Type": "Free Movement (FM)", "Operating Lift Height": "Up to 8.0 metres", "Property E (Levelness)": "8.0 mm", "Property F (Flatness)": "2.2 mm" },
          { "TR34 Class": "DM1", "Movement Type": "Defined Movement (VNA)", "Operating Lift Height": "Above 13.0 metres in racking aisles", "Property E (Levelness)": "Transverse: ±1.5 mm", "Property F (Flatness)": "Longitudinal: ±1.0 mm" },
          { "TR34 Class": "DM2", "Movement Type": "Defined Movement (VNA)", "Operating Lift Height": "Up to 13.0 metres in racking aisles", "Property E (Levelness)": "Transverse: ±2.0 mm", "Property F (Flatness)": "Longitudinal: ±1.5 mm" },
        ],
      },
      {
        title: "Quality Verification Testing Matrix & Applicable Standards",
        headers: ["Testing Parameter", "Standard / Reference Code", "Testing Equipment / Method", "Deliverable Output"],
        rows: [
          { "Testing Parameter": "Floor Flatness & Levelness", "Standard / Reference Code": "TR34 (4th Ed) / ASTM E1155", "Testing Equipment / Method": "Digital Continuous Floor Profiler", "Deliverable Output": "Certified FM/DM Compliance Report & Heat Map" },
          { "Testing Parameter": "Sub-base Plate Load Test", "Standard / Reference Code": "IS 1888 / DIN 18134 / BS 1377", "Testing Equipment / Method": "Hydraulic Jack & 300/760mm Steel Plate", "Deliverable Output": "Modulus of Subgrade Reaction (k-value) & Ev2" },
          { "Testing Parameter": "Core Compressive Strength", "Standard / Reference Code": "IS 516 / BS EN 12504-1", "Testing Equipment / Method": "Diamond Core Drill & Compression Testing Machine", "Deliverable Output": "In-situ 28-day Compressive Strength (N/mm²)" },
          { "Testing Parameter": "Surface Abrasion Resistance", "Standard / Reference Code": "BS EN 13892-4 / IS 9284", "Testing Equipment / Method": "Rotating Steel Wheel Abrasion Tester", "Deliverable Output": "Abrasion Wear Depth Classification (AR Special–AR3)" },
          { "Testing Parameter": "Surface Uniformity (NDT)", "Standard / Reference Code": "IS 13311 (Part 2) / ASTM C805", "Testing Equipment / Method": "Digital Schmidt Rebound Hammer", "Deliverable Output": "Rebound Number & Compressive Uniformity Grid" },
        ],
      },
    ],
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

