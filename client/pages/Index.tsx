import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Database,
  Search,
  Fish,
  Waves,
  Microscope,
  Share2,
  Bot,
  ShieldCheck,
  Globe2,
  Camera,
} from "lucide-react";

const domains = [
  { icon: Waves, title: "Oceanographic", desc: "Currents, temperature, salinity, bathymetry, remote sensing." },
  { icon: Fish, title: "Fisheries", desc: "Catch records, effort, VMS/AIS, stock assessments, traceability." },
  { icon: Microscope, title: "Molecular Biodiversity", desc: "eDNA, metagenomics, barcode repositories, taxonomic knowledge." },
];

const features = [
  {
    icon: Database,
    title: "Ingest & Harmonize",
    desc: "Auto-ingest from files, APIs, and sensors. Harmonize to a unified schema with quality checks.",
  },
  {
    icon: Bot,
    title: "AI Reasoning",
    desc: "LLM-powered entity resolution, unit conversion, and metadata enrichment across domains.",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    desc: "Versioning, lineage, PII safeguards, and role-based access built-in for teams and partners.",
  },
  {
    icon: Share2,
    title: "Publish & APIs",
    desc: "Share datasets and dashboards securely. One-click APIs and SDKs for developers.",
  },
];

export default function Index() {
  const [q, setQ] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Smooth background darken on scroll (0..1)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      document.documentElement.style.setProperty("--dark-opacity", String(ratio));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-900/90 to-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="scroll-overlay pointer-events-none absolute inset-0 transition-opacity duration-300" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,theme(colors.sky.500/30),transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none select-none opacity-40" aria-hidden>
          <svg className="absolute -left-20 top-24 h-96 w-[48rem] text-sky-700/20" viewBox="0 0 800 400" fill="none">
            <path d="M0,200 C150,300 250,100 400,200 C550,300 650,100 800,200" stroke="currentColor" strokeWidth="3" />
            <path d="M0,240 C150,340 250,140 400,240 C550,340 650,140 800,240" stroke="currentColor" strokeWidth="2" />
            <path d="M0,280 C150,380 250,180 400,280 C550,380 650,180 800,280" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="container relative py-20 md:py-28 text-center">
          {/* Centered single badge as requested */}
          <div className="mx-auto mb-6 inline-flex items-center justify-center">
            <Badge className="text-lg md:text-xl px-6 py-3 rounded-full bg-sky-400/20 text-sky-50 border-sky-300/30">Unified Ocean Intelligence</Badge>
          </div>

          {/* Search with image upload */}
          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-white/40 backdrop-blur">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search marine data, species, locations, datasets..."
              className="h-12 rounded-full border-0 bg-transparent text-base focus-visible:ring-sky-500"
            />

            <div className="flex items-center gap-2">
              <input ref={fileRef} type="file" accept="image/*" onChange={onChooseImage} className="hidden" />
              <button
                onClick={() => fileRef.current?.click()}
                title="Upload photo"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-700 hover:bg-white/20"
              >
                <Camera className="h-5 w-5" />
              </button>

              <Button className="h-12 rounded-full px-6 bg-sky-600 hover:bg-sky-500 text-white">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>

          {imagePreview && (
            <div className="mx-auto mt-4 w-48">
              <img src={imagePreview} alt="preview" className="rounded-md border" />
            </div>
          )}

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
            {['Sea surface temp', 'Chondrichthyes', 'eDNA', 'AIS/VMS', 'MPAs', 'Coral reefs'].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-white/80 ring-1 ring-white/20">{t}</span>
            ))}
          </div>

          {/* Features marquee - continuous left-to-right with hover pause */}
          <div className="mt-10 overflow-hidden">
            <div className="marquee">
              <div className="marquee-inner">
                {features.concat(features).map((f, idx) => (
                  <Card key={f.title + String(idx)} className="m-2 w-72 border-white/20 bg-white/5 p-4 text-white/90 transform transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-start gap-3">
                      <f.icon className="h-5 w-5 text-sky-300" />
                      <div>
                        <h3 className="font-semibold">{f.title}</h3>
                        <p className="mt-1 text-sm text-white/80">{f.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="/data" className={cn("inline-flex h-11 items-center rounded-md bg-sky-600 px-5 text-white shadow hover:bg-sky-500")}>Explore Data</a>
            <a href="#contact" className="inline-flex h-11 items-center rounded-md bg-white/10 px-5 text-white ring-1 ring-white/30 hover:bg-white/15">Request a Demo</a>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="bg-background">
        <div className="container py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {domains.map((d) => (
              <div key={d.title} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <d.icon className="h-6 w-6 text-sky-600" />
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Datasets", "APIs", "Pipelines"].map((k) => (
                    <span key={k} className="rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-700 ring-1 ring-sky-100">{k}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="relative">
        <div className="container py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">From raw data to decisions</h2>
              <p className="mt-4 text-muted-foreground">
                OceanIQ unifies disparate marine datasets into a knowledge graph and exposes them via powerful
                search, analytics, and interoperable APIs. Build models, monitor ecosystems, and inform policy—fast.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2"><Globe2 className="h-4 w-4 text-sky-600 mt-0.5" /> Global coverage with harmonized vocabularies</li>
                <li className="flex items-start gap-2"><Bot className="h-4 w-4 text-sky-600 mt-0.5" /> AI assistance for discovery and metadata curation</li>
                <li className="flex items-start gap-2"><Share2 className="h-4 w-4 text-sky-600 mt-0.5" /> Share as FAIR datasets, tiles, and APIs</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="/publish" className="inline-flex h-10 items-center rounded-md bg-sky-600 px-4 text-white hover:bg-sky-500">Publish Data</a>
                <a href="/dashboard" className="inline-flex h-10 items-center rounded-md border px-4 hover:bg-accent">View Dashboard</a>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              {/* KPIs marquee */}
              <div className="overflow-hidden">
                <div className="marquee marquee-kpis">
                  <div className="marquee-inner flex gap-4 py-2">
                    {[
                      { label: "Datasets", value: "58k+" },
                      { label: "Species", value: "240k+" },
                      { label: "Vessels", value: "120k+" },
                      { label: "Genomes", value: "95k+" },
                    ].concat([
                      { label: "Datasets", value: "58k+" },
                      { label: "Species", value: "240k+" },
                      { label: "Vessels", value: "120k+" },
                      { label: "Genomes", value: "95k+" },
                    ]).map((s, i) => (
                      <div key={s.label + i} className="kpi-card rounded-lg border bg-white p-4 text-center min-w-[140px] transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <div className="text-2xl font-bold text-sky-700">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-gradient-to-tr from-sky-100 to-cyan-100 p-4 text-sm text-sky-900">
                <p className="font-semibold">Knowledge Graph</p>
                <p className="mt-1">Entities: Stations, Cruises, Species, Habitats, Vessels, Taxa, Genes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative bg-gradient-to-tr from-sky-600 to-cyan-600">
        <div className="container py-14 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to accelerate marine insights?</h3>
          <p className="mt-2 text-white/90">Schedule a demo to see OceanIQ in action.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/data" className="inline-flex h-11 items-center rounded-md bg-white px-5 text-sky-700 hover:bg-white/90">Explore Data</a>
            <a href="mailto:hello@oceaniq.ai" className="inline-flex h-11 items-center rounded-md border border-white/40 px-5 text-white hover:bg-white/10">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
