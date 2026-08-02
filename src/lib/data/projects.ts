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
  { client: "Renew Power, Dholera", location: "Ahmedabad, Gujarat", area: "10,00,000 sq. ft.", areaSqFt: 1000000, sector: "energy", image: "/images/card_laser_screed.png" },
  { client: "Grew Energy Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "9,00,000 sq. ft.", areaSqFt: 900000, sector: "energy", image: "/images/card_vna_flooring.png" },
  { client: "Insolation Green Energy Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "7,50,000 sq. ft.", areaSqFt: 750000, sector: "energy", image: "/images/laser_screed_machinery.png" },
  { client: "Reliance Industries Facility", location: "Jaipur, Rajasthan", area: "6,00,000 sq. ft.", areaSqFt: 600000, sector: "manufacturing", image: "/images/card_jointless_flooring.png" },
  { client: "Mewar Industries", location: "Udaipur, Rajasthan", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "manufacturing", image: "/images/card_sfrc_flooring.png" },
  { client: "Geastamp Pune Automotive Pvt. Ltd.", location: "Bhagapura, Gujarat", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "automotive", image: "/images/card_armour_joints.png" },
  { client: "Aditya Polysack Pvt. Ltd.", location: "Beawar, Rajasthan", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "manufacturing", image: "/images/card_concrete_polishing.png" },
  { client: "KeraKoll India Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "3,00,000 sq. ft.", areaSqFt: 300000, sector: "chemicals", image: "/images/card_testing_certification.png" },
  { client: "Kuber India Mart", location: "Jaipur, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "logistics", image: "/images/vna_superflat_warehouse.png" },
  { client: "Hindalco Industries Ltd.", location: "Vadodara, Gujarat", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "manufacturing", image: "/images/service_hero_banner.png" },
  { client: "Bhilwara Spinners Ltd.", location: "Bhilwara, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "textiles", image: "/images/concrete_power_trowel.png" },
  { client: "Ratnakar Spinners Pvt. Ltd.", location: "Bhilwara, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "textiles", image: "/images/card_laser_screed.png" },
  { client: "Plasti Weave Industries LLP", location: "Udaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing", image: "/images/about_hero_banner.png" },
  { client: "Shri Balaji Corrupack Industries Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing", image: "/images/card_sfrc_flooring.png" },
  { client: "AWPL Industrial Facility", location: "Jaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing", image: "/images/card_jointless_flooring.png" },
  { client: "Wriver Life Sciences Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "70,000 sq. ft.", areaSqFt: 70000, sector: "pharma", image: "/images/card_concrete_polishing.png" },
];

export const galleryImages = [
  { url: `${BASE_URL}/images/glry1.jpg`, title: "Somero Laser Screed Machine in Operation" },
  { url: `${BASE_URL}/images/glry2.jpg`, title: "Laser-Guided Concrete Slab Finishing" },
  { url: `${BASE_URL}/images/glry3.jpg`, title: "High-Bay Warehouse Slab Execution" },
  { url: `${BASE_URL}/images/glry4.jpg`, title: "Armour Joint Installation at Construction Joint" },
  { url: `${BASE_URL}/images/glry5.jpg`, title: "Ride-On Trowel Finishing Pass" },
  { url: `${BASE_URL}/images/glry6.jpg`, title: "Surface Densification & Dust Proofing" },
  { url: `${BASE_URL}/images/glry7.jpg`, title: "Industrial Plant Floor Pouring" },
  { url: `${BASE_URL}/images/glry8.jpg`, title: "VNA Super-Flat Floor Checking" },
  { url: `${BASE_URL}/images/glry10.jpg`, title: "Plate Bearing Sub-Base Test" },
  { url: `${BASE_URL}/images/glry11.jpg`, title: "SFRC Concrete Pouring" },
  { url: `${BASE_URL}/images/glry12.jpg`, title: "Polished Concrete Reflective Finish" },

];

export const totalAreaSqFt = 6000000;
export const totalProjects = 16;

export const sectorLabels: Record<Project["sector"], string> = {
  energy: "Energy",
  manufacturing: "Manufacturing",
  textiles: "Textiles",
  automotive: "Automotive",
  logistics: "Logistics",
  chemicals: "Chemicals",
  pharma: "Pharma",
};
