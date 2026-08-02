"use client";

import { Building2, Factory, Zap, Leaf, Car, Layers, Droplets, Package } from "lucide-react";

interface ClientItem {
  name: string;
  icon: React.ElementType;
}

const CLIENTS_ROW1: ClientItem[] = [
  { name: "Renew Power", icon: Zap },
  { name: "Reliance Industries", icon: Factory },
  { name: "Grew Energy", icon: Leaf },
  { name: "Insolation Green", icon: Zap },
];

const CLIENTS_ROW2: ClientItem[] = [
  { name: "Geastamp Automotive", icon: Car },
  { name: "Hindalco Industries", icon: Building2 },
  { name: "KeraKoll India", icon: Droplets },
  { name: "Aditya Polysack", icon: Package },
];

function ClientCard({ client }: { client: ClientItem }) {
  const Icon = client.icon;
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-[#E8F0FA] border border-[#04509A]/15 rounded-2xl px-8 py-5 shadow-sm hover:shadow-md hover:border-[#04509A]/40 transition-all group mx-3 min-w-[220px]">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#04509A]/8 group-hover:bg-[#04509A]/15 transition-colors">
        <Icon className="w-5 h-5 text-[#04509A]" strokeWidth={1.8} />
      </div>
      <span className="font-display font-bold text-[#1E293B] text-[15px] tracking-wide group-hover:text-[#04509A] transition-colors whitespace-nowrap">
        {client.name}
      </span>
    </div>
  );
}

export function InfiniteMarquee() {
  return (
    <div className="w-full overflow-hidden space-y-4">
      {/* Row 1: Scrolls LEFT */}
      <div className="relative">
        <div className="flex animate-marquee-left">
          {[...CLIENTS_ROW1, ...CLIENTS_ROW1, ...CLIENTS_ROW1, ...CLIENTS_ROW1].map((client, i) => (
            <ClientCard key={`r1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Row 2: Scrolls RIGHT */}
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...CLIENTS_ROW2, ...CLIENTS_ROW2, ...CLIENTS_ROW2, ...CLIENTS_ROW2].map((client, i) => (
            <ClientCard key={`r2-${i}`} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
}
