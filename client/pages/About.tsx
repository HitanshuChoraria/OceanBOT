import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Cpu, Smile, Database, Globe2, GitBranch } from "lucide-react";

const team = [
  { name: "Dr. Maya Chen", role: "Chief Scientist", bio: "Marine ecologist with 15+ years in ecosystem modeling." },
  { name: "Lucas Pérez", role: "Lead Engineer", bio: "Distributed systems and data pipelines specialist." },
  { name: "Aisha Khan", role: "AI Researcher", bio: "Computational biologist focused on eDNA analyses." },
  { name: "Emma Rossi", role: "Product", bio: "Designing developer-first APIs and UX for scientists." },
  { name: "Noah Green", role: "Data Engineer", bio: "Time-series and geospatial ETL wizard." },
  { name: "Sofia Martins", role: "Community & Outreach", bio: "Partnerships with research institutions and NGOs." },
];

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="container py-12">
      {/* Hero */}
      <header className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About OceanIQ</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            OceanIQ is a unified platform that brings together oceanographic, fisheries, and molecular biodiversity
            data with AI-powered discovery, harmonization, and governance — built for scientists, managers, and
            developers who need trustworthy, interoperable marine data.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="inline-flex items-center gap-2 bg-sky-600 text-white">Request a demo</Button>
            <a href="/data" className="inline-flex items-center gap-2 rounded-md border px-4 py-2">Explore Data Hub</a>
          </div>
        </div>

        <div className="reveal">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-3 text-sm text-muted-foreground">Empower decisions that sustain ocean health and blue economies through
            accessible, auditable, and AI-augmented data products.</p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-600 floaty" />
                <div>
                  <div className="font-semibold">FAIR by default</div>
                  <div className="text-xs text-muted-foreground">Findable, Accessible, Interoperable, Reusable</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe2 className="h-5 w-5 text-sky-600 floaty" />
                <div>
                  <div className="font-semibold">Global scope</div>
                  <div className="text-xs text-muted-foreground">From coastal to global surveys</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Database className="h-5 w-5 text-sky-600 floaty" />
                <div>
                  <div className="font-semibold">Unified schema</div>
                  <div className="text-xs text-muted-foreground">Harmonize units, taxonomies, and time-series</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cpu className="h-5 w-5 text-sky-600 floaty" />
                <div>
                  <div className="font-semibold">AI-assisted</div>
                  <div className="text-xs text-muted-foreground">Metadata enrichment and entity linking</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </header>

      {/* Who is it built for */}
      <section className="mt-12 reveal">
        <h2 className="text-2xl font-bold">Who is OceanIQ built for?</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">We serve a diverse audience — from research labs to fishery managers and platform developers.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <h3 className="font-semibold">Scientists & Researchers</h3>
            <p className="mt-2 text-sm text-muted-foreground">High fidelity data, provenance, and tools for reproducible science.</p>
            <ul className="mt-3 text-sm space-y-1 text-muted-foreground">
              <li>Ready-to-use datasets, descriptors, and Jupyter-ready exports</li>
              <li>Integrated taxonomic resolution and eDNA pipelines</li>
            </ul>
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold">Managers & NGOs</h3>
            <p className="mt-2 text-sm text-muted-foreground">Operational dashboards for compliance, MPA monitoring, and reporting.</p>
            <ul className="mt-3 text-sm space-y-1 text-muted-foreground">
              <li>Custom alerts and change detection</li>
              <li>Policy-ready summary exports</li>
            </ul>
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold">Developers & Integrators</h3>
            <p className="mt-2 text-sm text-muted-foreground">APIs, SDKs, and sample pipelines to integrate into products.</p>
            <ul className="mt-3 text-sm space-y-1 text-muted-foreground">
              <li>REST, GraphQL, and tile endpoints</li>
              <li>Role-based access and signed URL workflows</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* AI at OceanIQ */}
      <section className="mt-12 reveal">
        <h2 className="text-2xl font-bold">AI at OceanIQ</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">We combine deterministic pipelines with ML and LLMs to automate hard parts of data harmonization and discovery.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <h4 className="font-semibold">Entity resolution</h4>
            <p className="text-sm mt-2 text-muted-foreground">Resolve taxonomic synonyms, station duplicates, and vessel IDs across datasets.</p>
          </Card>
          <Card className="p-5">
            <h4 className="font-semibold">Smart ETL</h4>
            <p className="text-sm mt-2 text-muted-foreground">Adaptive parsers that learn common file formats and repair common metadata issues.</p>
          </Card>
          <Card className="p-5">
            <h4 className="font-semibold">Explainable models</h4>
            <p className="text-sm mt-2 text-muted-foreground">Model outputs include provenance and confidence so decisions can be audited.</p>
          </Card>
        </div>
      </section>

      {/* The Team */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold reveal">The team</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl reveal">A multidisciplinary group spanning oceanography, data engineering, and AI research.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {team.map((p, i) => (
            <article key={p.name} className="team-card reveal rounded-xl border p-5 bg-card transition-transform">
              <div className="flex items-center gap-4">
                <div className="team-avatar">{p.name.split(" ").map((n) => n[0]).slice(0,2).join("")}</div>
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.bio}</p>

              <div className="mt-4 flex gap-2">
                <a className="text-sky-700 hover:underline" href="#">Profile</a>
                <a className="text-muted-foreground">•</a>
                <a className="text-muted-foreground" href="#">LinkedIn</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values and commitments */}
      <section className="mt-12 reveal">
        <h2 className="text-2xl font-bold">Values & commitments</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <h4 className="font-semibold">Open science</h4>
            <p className="text-sm mt-2 text-muted-foreground">We publish schemas and connectors under open licenses where possible.</p>
          </Card>

          <Card className="p-5">
            <h4 className="font-semibold">Responsible AI</h4>
            <p className="text-sm mt-2 text-muted-foreground">Model cards, audits, and human-in-the-loop curation for sensitive tasks.</p>
          </Card>

          <Card className="p-5">
            <h4 className="font-semibold">Community-first</h4>
            <p className="text-sm mt-2 text-muted-foreground">We partner with researchers, NGOs, and local communities to co-design features.</p>
          </Card>
        </div>
      </section>

      <section className="mt-12 reveal">
        <h2 className="text-2xl font-bold">Architecture (brief)</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">Adapters ingest from sensors, files, and APIs; a semantic layer maps into a knowledge graph; compute and storage are separated to enable scalable analytics and reproducible pipelines.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <div className="flex items-start gap-3"><Database className="h-5 w-5 text-sky-600"/><div>
              <div className="font-semibold">Storage</div>
              <div className="text-sm text-muted-foreground">Time series, object storage, and graph indexes</div>
            </div></div>
          </Card>

          <Card className="p-5">
            <div className="flex items-start gap-3"><GitBranch className="h-5 w-5 text-sky-600"/><div>
              <div className="font-semibold">Lineage</div>
              <div className="text-sm text-muted-foreground">Versioning and provenance for every dataset</div>
            </div></div>
          </Card>

          <Card className="p-5">
            <div className="flex items-start gap-3"><Cpu className="h-5 w-5 text-sky-600"/><div>
              <div className="font-semibold">Compute</div>
              <div className="text-sm text-muted-foreground">Batch and streaming pipelines with reproducible transforms</div>
            </div></div>
          </Card>
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} OceanIQ — building responsible, interoperable ocean data products.
      </footer>
    </div>
  );
}
