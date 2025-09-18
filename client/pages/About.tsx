import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">About OceanIQ</h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        OceanIQ is an AI-driven platform unifying oceanographic, fisheries, and molecular biodiversity data to
        accelerate science, stewardship, and sustainable blue economies.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {["Open standards","Ethical AI","Interoperable APIs","Secure by default","Reproducible pipelines","Collaborative by design"].map((f) => (
          <Card key={f} className="p-4 flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-sky-600"/><span>{f}</span></Card>
        ))}
      </div>

      <div className="mt-10 rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">Architecture</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ingestion adapters collect data from files, APIs, and sensors. A semantic layer harmonizes concepts into
          a knowledge graph. Storage is optimized for analytics and time-series. Access is provided via search,
          dashboards, and developer-first APIs.
        </p>
      </div>
    </div>
  );
}
