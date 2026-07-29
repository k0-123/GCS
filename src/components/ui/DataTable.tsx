"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface DataTableProps {
  title?: string;
  headers: string[];
  rows: Record<string, string>[];
  className?: string;
  /** Whether to use full-width concrete grey band styling */
  fullWidth?: boolean;
}

/**
 * Data table per design.md:
 * Concrete Grey background band, Graphite text,
 * values in IBM Plex Mono, header row in Ink Navy with Slab White text.
 */
export function DataTable({
  title,
  headers,
  rows,
  className,
  fullWidth = true,
}: DataTableProps) {
  return (
    <ScrollReveal
      variant="fade-up"
      className={cn(
        fullWidth && "bg-concrete-grey py-10 md:py-14 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-0 lg:px-0",
        className
      )}
    >
      <div className={cn(fullWidth && "max-w-6xl mx-auto")}>
        {title && (
          <h3 className="font-display font-bold text-[18px] md:text-[22px] uppercase tracking-[0.5px] text-ink-navy mb-6">
            {title}
          </h3>
        )}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-ink-navy">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="text-left text-slab-white font-medium text-[14px] md:text-[15px] px-4 py-3 first:pl-5"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    "border-b border-concrete-grey/60",
                    i % 2 === 0 ? "bg-slab-white" : "bg-concrete-grey/40"
                  )}
                >
                  {headers.map((header) => {
                    const value = row[header] || "";
                    // Use mono font for numeric/spec values
                    const isSpec =
                      /^[\d.–\-]+$/.test(value.trim()) ||
                      /^(FM|DM)\d/.test(value.trim());
                    return (
                      <td
                        key={header}
                        className={cn(
                          "px-4 py-3 text-graphite text-[14px] md:text-[15px] first:pl-5 leading-relaxed",
                          isSpec && "font-mono font-medium text-screed-blue"
                        )}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ScrollReveal>
  );
}
