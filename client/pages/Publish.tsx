import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, GitBranch, Share2, ShieldCheck } from "lucide-react";

export default function Publish() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">Publish datasets</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Turn raw files and APIs into versioned, FAIR datasets with provenance, licenses, and access control.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="p-5">
          <div className="flex items-start gap-3">
            <Upload className="h-5 w-5 text-sky-600" />
            <div>
              <h3 className="font-semibold">Ingest</h3>
              <p className="mt-1 text-sm text-muted-foreground">Upload CSV/NetCDF/FASTQ or connect live APIs and sensors.</p>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-start gap-3">
            <GitBranch className="h-5 w-5 text-sky-600" />
            <div>
              <h3 className="font-semibold">Version & lineage</h3>
              <p className="mt-1 text-sm text-muted-foreground">Every change tracked with reproducible pipelines and metadata.</p>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <div>
              <h3 className="font-semibold">Govern access</h3>
              <p className="mt-1 text-sm text-muted-foreground">Private, shared, or public with roles and signed URLs.</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">One-click share</h2>
        <p className="mt-1 text-muted-foreground">Expose as REST, GraphQL, or tiles. Embed interactive dashboards anywhere.</p>
        <div className="mt-4 flex gap-3">
          <Button className="bg-sky-600 hover:bg-sky-500 text-white"><Share2 className="mr-2 h-4 w-4"/> Create public link</Button>
          <a href="mailto:hello@oceaniq.ai" className="inline-flex h-10 items-center rounded-md border px-4">Talk to us</a>
        </div>
      </div>
    </div>
  );
}
