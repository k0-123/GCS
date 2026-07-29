export interface Project {
  client: string;
  location: string;
  area: string;
  areaSqFt: number;
  sector: "energy" | "manufacturing" | "textiles" | "automotive" | "logistics" | "chemicals" | "pharma";
}

export const projects: Project[] = [
  { client: "Renew Power, Dholera", location: "Ahmedabad, Gujarat", area: "10,00,000 sq. ft.", areaSqFt: 1000000, sector: "energy" },
  { client: "Grew Energy Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "9,00,000 sq. ft.", areaSqFt: 900000, sector: "energy" },
  { client: "Insolation Green Energy Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "7,50,000 sq. ft.", areaSqFt: 750000, sector: "energy" },
  { client: "Reliance", location: "Jaipur, Rajasthan", area: "6,00,000 sq. ft.", areaSqFt: 600000, sector: "manufacturing" },
  { client: "Mewar Industries", location: "Udaipur, Rajasthan", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "manufacturing" },
  { client: "Geastamp Pune Automotive Pvt. Ltd.", location: "Bhagapura, Gujarat", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "automotive" },
  { client: "Aditya Polysack Pvt. Ltd.", location: "Beawar, Rajasthan", area: "3,50,000 sq. ft.", areaSqFt: 350000, sector: "manufacturing" },
  { client: "KeraKoll India Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "3,00,000 sq. ft.", areaSqFt: 300000, sector: "chemicals" },
  { client: "Kuber India Mart", location: "Jaipur, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "logistics" },
  { client: "Hindalco Industries Ltd.", location: "Vadodara, Gujarat", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "manufacturing" },
  { client: "Bhilwara Spinners Ltd.", location: "Bhilwara, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "textiles" },
  { client: "Ratnakar Spinners Pvt. Ltd.", location: "Bhilwara, Rajasthan", area: "2,50,000 sq. ft.", areaSqFt: 250000, sector: "textiles" },
  { client: "Plasti Weave Industries LLP", location: "Himmat Nagar, Gujarat", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing" },
  { client: "Shri Balaji Corrupack Industries Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing" },
  { client: "AWPL", location: "Jaipur, Rajasthan", area: "1,00,000 sq. ft.", areaSqFt: 100000, sector: "manufacturing" },
  { client: "Wriver Life Sciences Pvt. Ltd.", location: "Jaipur, Rajasthan", area: "70,000 sq. ft.", areaSqFt: 70000, sector: "pharma" },
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
