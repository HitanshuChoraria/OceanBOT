import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Waves, Fish, Microscope } from "lucide-react";

const catalog = {
  oceanographic: [
    { name: "Sea Surface Temperature", provider: "NOAA", coverage: "Global" },
    { name: "Chlorophyll-a", provider: "MODIS", coverage: "Global" },
    { name: "Bathymetry", provider: "GEBCO", coverage: "Global" },
  ],
  fisheries: [
    { name: "Catch Records", provider: "FAO", coverage: "Global" },
    { name: "AIS/VMS Tracks", provider: "Global Fishing Watch", coverage: "Global" },
    { name: "Stock Assessments", provider: "ICES", coverage: "Regional" },
  ],
  molecular: [
    { name: "eDNA Metabarcoding", provider: "OBIS", coverage: "Global" },
    { name: "Genomic Barcodes", provider: "BOLD", coverage: "Global" },
    { name: "Metagenomes", provider: "MGnify", coverage: "Global" },
  ],
};

type Domain = keyof typeof catalog;

export default function Data() {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState<Domain>("oceanographic");

  const list = useMemo(() => {
    const items = catalog[tab];
    if (!q.trim()) return items;
    const needle = q.toLowerCase();
    return items.filter((i) =>
      [i.name, i.provider, i.coverage].some((v) => v.toLowerCase().includes(needle)),
    );
  }, [q, tab]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">Data Hub</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Explore harmonized datasets across oceanographic, fisheries, and molecular biodiversity domains.
      </p>

      <div className="mt-6 flex items-center gap-2">
        <div className="relative w-full max-w-xl">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search datasets, providers, coverage..." className="pl-9" />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Button onClick={() => setQ("")}>Clear</Button>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as Domain)} className="mt-6">
        <TabsList>
          <TabsTrigger value="oceanographic" className="gap-2"><Waves className="h-4 w-4"/> Oceanographic</TabsTrigger>
          <TabsTrigger value="fisheries" className="gap-2"><Fish className="h-4 w-4"/> Fisheries</TabsTrigger>
          <TabsTrigger value="molecular" className="gap-2"><Microscope className="h-4 w-4"/> Molecular</TabsTrigger>
        </TabsList>

        {(Object.keys(catalog) as Domain[]).map((key) => (
          <TabsContent key={key} value={key} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <Card key={d.name} className="p-4">
                <div className="text-sm text-muted-foreground">{d.provider} • {d.coverage}</div>
                <h3 className="mt-1 font-semibold">{d.name}</h3>
                <div className="mt-3 flex gap-2">
                  <a href="#" className="text-sky-700 hover:underline">Preview</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="#" className="text-sky-700 hover:underline">API</a>
                </div>
              </Card>
            ))}
            {list.length === 0 && (
              <div className="col-span-full rounded-md border p-6 text-center text-sm text-muted-foreground">
                No results. Try a different search.
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
