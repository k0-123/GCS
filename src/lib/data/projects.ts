export interface Project {
  client: string;
  location: string;
  area: string;
  areaSqFt: number;
  sector: "energy" | "manufacturing" | "textiles" | "automotive" | "logistics" | "chemicals" | "pharma";
  image: string;
}

const BASE_URL = "https://www.gangadharconcretesolution.com";

export const projects: Project[] = [
  { client: "Renew Power, Dholera", location: "Ahmedabad, Gujarat", area: "10,00,000 sq. ft.", areaSqFt: 1000000, sector: "energy", image: "/images/renew_power_dholera.webp" },
  { client: "Grew Energy Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "9,00,000 sq. ft.", areaSqFt: 900000, sector: "energy", image: "/images/grew_energy.webp" },
  { client: "Insolation Green Energy Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "7,50,000 sq. ft.", areaSqFt: 750000, sector: "energy", image: "/images/insolation_green_energy.webp" },
  { client: "Reliance Industries Facility", location: "Jaipur, Rajasthan", area: "6,00,000 sq. ft.", areaSqFt: 600000, sector: "manufacturing", image: "/images/reliance_industries.webp" },
  { client: "Mewar Industries", location: "Udaipur, Rajasthan", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "manufacturing", image: "/images/mewar_industries.webp" },
  { client: "Geastamp Pune Automotive Pvt. Ltd.", location: "Bhagapura, Gujarat", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "automotive", image: "/images/geastamp_automotive.webp" },
  { client: "Aditya Polysack Pvt. Ltd.", location: "Beawar, Rajasthan", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "manufacturing", image: "/images/aditya_polysack.webp" },
  { client: "KeraKoll India Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "3,00,000 sq. ft.", areaSqFt: 300000, sector: "chemicals", image: "/images/kerakoll_india.webp" },
  { client: "Kuber India Mart", location: "Jaipur, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "logistics", image: "/images/kuber_india_mart.webp" },
  { client: "Hindalco Industries Ltd.", location: "Vadodara, Gujarat", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "manufacturing", image: "/images/hindalco_industries.webp" },
  { client: "Bhilwara Spinners Ltd.", location: "Bhilwara, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "textiles", image: "/images/bhilwara_spinners.webp" },
  { client: "Ratnakar Spinners Pvt. Ltd.", location: "Bhilwara, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "textiles", image: "/images/ratnakar_spinners.webp" },
  { client: "Plasti Weave Industries LLP", location: "Udaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing", image: "/images/plasti_weave.webp" },
  { client: "Shri Balaji Corrupack Industries Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing", image: "/images/balaji_corrupack.webp" },
  { client: "AWPL Industrial Facility", location: "Jaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing", image: "/images/awpl_facility.webp" },
  { client: "Wriver Life Sciences Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "70,000 sq. ft.", areaSqFt: 70000, sector: "pharma", image: "/images/wriver_life_sciences.webp" },
];

export const galleryImages = [
  { url: "/images/site_gallery/glry1.webp", title: "Somero Laser Screed Machine in Operation" },
  { url: "/images/site_gallery/glry2.webp", title: "Laser-Guided Concrete Slab Finishing" },
  { url: "/images/site_gallery/glry3.webp", title: "High-Bay Warehouse Slab Execution" },
  { url: "/images/site_gallery/glry4.webp", title: "Armour Joint Installation at Construction Joint" },
  { url: "/images/site_gallery/glry5.webp", title: "Ride-On Power Trowel Finishing Pass" },
  { url: "/images/site_gallery/glry6.webp", title: "Surface Densification & Dust Proofing" },
  { url: "/images/site_gallery/glry7.webp", title: "Industrial Plant Floor Pouring" },
  { url: "/images/site_gallery/glry8.webp", title: "VNA Super-Flat Floor Checking" },
  { url: "/images/site_gallery/glry10.webp", title: "Plate Bearing Sub-Base Test" },
  { url: "/images/site_gallery/glry11.webp", title: "Steel Fiber Reinforced Concrete (SFRC) Pour" },
  { url: "/images/site_gallery/glry12.webp", title: "Polished Concrete Reflective Finish" },
  { url: "/images/site_gallery/glry15.webp", title: "Mega Logistics Park Slab Construction" },
  { url: "/images/site_gallery/glry18.webp", title: "Heavy-Duty External Concrete Road & Pavement" },
  { url: "/images/site_gallery/glry20.webp", title: "Defined Movement VNA Aisle Slab" },
  { url: "/images/site_gallery/glry22.webp", title: "High-Gloss Diamond Burnished Floor" },
  { url: "/images/site_gallery/glry24.webp", title: "Power Trowel Compaction Pass" },
  { url: "/images/site_gallery/glry26.webp", title: "Wide-Bay Concrete Screeding" },
  { url: "/images/site_gallery/glry30.webp", title: "Turnkey Handover & Joint Quality Inspection" },
];

export const totalAreaSqFt = 6000000;
export const totalProjects = 100;

export const sectorLabels: Record<Project["sector"], string> = {
  energy: "Energy",
  manufacturing: "Manufacturing",
  textiles: "Textiles",
  automotive: "Automotive",
  logistics: "Logistics",
  chemicals: "Chemicals",
  pharma: "Pharma",
};
